using DreamBid.Interfaces;

namespace DreamBid.Service
{
    public class FileManagerService : IFileManagerService
    {
        private string _baseDirectory;
        public FileManagerService(string baseDriectory)
        {
            this._baseDirectory = Path.GetFullPath(baseDriectory);

        }

        /*
        * The path should not starts with /. as an example the base directory should be ./hello/world and the below given path should be auction/images/fileName.txt
        */
        public async Task<string> StoreFile(IFormFile file, string path)
        {
            // get the absolute path
            var FullPath = Path.Combine(this._baseDirectory, path);

            // breakdown the directory path
            var directoryPath = Path.GetDirectoryName(FullPath);

            if (directoryPath == null) return null;

            Directory.CreateDirectory(directoryPath);

            // check the existancy of the given file
            var rewriteFilePath = this.RewriteFileName(FullPath);

            // write the file content
            using (FileStream fileStream = new FileStream(rewriteFilePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            return rewriteFilePath;

        }

        public async Task<byte[]> GetFile(string path)
        {
            // get the absolute path
            var FullPath = Path.Combine(this._baseDirectory, path);

            if (!File.Exists(FullPath)) return null;

            return await File.ReadAllBytesAsync(FullPath);
        }

        private string RewriteFileName(string filePath)
        {
            var rewriteFileName = filePath;
            var sufix = 0;
            var fileNameWirhoutExtension = Path.GetFileNameWithoutExtension(filePath);
            var fileExtension = Path.GetExtension(filePath);
            var directoryPath = Path.GetDirectoryName(filePath);

            while (File.Exists(rewriteFileName))
            {
                rewriteFileName = $"{directoryPath}/{fileNameWirhoutExtension}{sufix++}{fileExtension}";
            }
            return rewriteFileName;
        }

        public async Task<Boolean> IsFileExists(string path)
        {
            var FullPath = Path.Combine(this._baseDirectory, path);

            return File.Exists(FullPath);
        }
    }
}