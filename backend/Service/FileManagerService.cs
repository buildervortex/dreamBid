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
        public async Task<string> StoreFile(IFormFile file, string path, Boolean overWrite = false)
        {
            // get the absolute path
            var FullPath = Path.Combine(this._baseDirectory, path);

            // breakdown the directory path
            var directoryPath = Path.GetDirectoryName(FullPath);

            if (directoryPath == null) return null;

            Directory.CreateDirectory(directoryPath);

            // check the existancy of the given file
            var rewriteFilePath = FullPath;
            if (!overWrite)
            {
                rewriteFilePath = this.RewriteFileName(FullPath);
            }

            // write the file content
            using (FileStream fileStream = new FileStream(rewriteFilePath, FileMode.Create))
            {
                await file.CopyToAsync(fileStream);
            }

            // return rewriteFilePath;
            return this.GetFileSuffix(rewriteFilePath);

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

        public Boolean IsFileExists(string path)
        {
            var FullPath = Path.Combine(this._baseDirectory, path);

            return File.Exists(FullPath);
        }

        private string[]? FindFilesAnyExtension(string fullPath)
        {
            if (!File.Exists(fullPath)) return null;
            var baseNamePattern = $"{Path.GetFileNameWithoutExtension(fullPath)}.*";
            var directoryPath = Path.GetDirectoryName(fullPath);
            if (directoryPath == null) return null;
            return Directory.GetFiles(directoryPath, baseNamePattern, SearchOption.AllDirectories);
        }

        public void DeleteFile(string? path)
        {
            if (path == null) return;
            if (File.Exists(path))
            {
                File.Delete(path);
            }
        }

        public void DeleteFiles(string? path)
        {
            if (path == null) return;

            var FullPath = Path.Combine(this._baseDirectory, path);
            var files = this.FindFilesAnyExtension(FullPath);
            if (files == null) return;
            foreach (string fileName in files)
            {
                this.DeleteFile(fileName);
            }
        }

        private string GetFileSuffix(string fullPath)
        {
            return fullPath.Substring(this._baseDirectory.Length).TrimStart(Path.DirectorySeparatorChar);
        }
    }
}