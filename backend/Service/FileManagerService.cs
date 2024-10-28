using DreamBid.Interfaces;
using DreamBid.Utils;

namespace DreamBid.Service
{
    public class FileManagerService : IFileManagerService
    {
        private string _baseDirectory;
        public FileManagerService(string baseDriectory)
        {
            this._baseDirectory = Path.GetFullPath(FileManagementUtil.GetOsDependentPath(baseDriectory));
        }

        /*
        * The path should not starts with /. as an example the base directory should be ./hello/world and the below given path should be auction/images/fileName.txt
        */
        /// <summary>
        /// The path 
        /// </summary>
        /// <param name="file">This should be the IFormFile object</param>
        /// <param name="subFilePath">This path should not starts with /. As an example auction/images/fileName.txt don't give it like /auction/images/fileName.txt</param>
        /// <param name="overWrite">OverWrite if the file exists</param>
        /// <returns>The subFilePath name from the base directory</returns>
        public async Task<string> StoreFile(IFormFile file, string subFilePath, Boolean overWrite = false)
        {
            subFilePath = FileManagementUtil.GetOsDependentPath(subFilePath);

            // get the absolute subFilePath
            var FullPath = Path.Combine(this._baseDirectory, subFilePath);

            // ensure the directory path exists
            if (!FileManagementUtil.EnsureDirectoryPathExists(FullPath)) return null;

            // check the existancy of the given file
            if (!overWrite)
            {
                // rewriteFilePath = this.RewriteFileName(FullPath);
                FullPath = FileManagementUtil.GetNonExistingFilePath(FullPath);
            }

            // write the file content
            try
            {
                using (FileStream fileStream = new FileStream(FullPath, FileMode.Create))
                {
                    await file.CopyToAsync(fileStream);
                }
            }
            catch (Exception e)
            {
                return null;
            }

            // return FullPath;
            return this.GetFileSuffix(FullPath);

        }

        public async Task<byte[]> GetFile(string subFilePath)
        {
            subFilePath = FileManagementUtil.GetOsDependentPath(subFilePath);
            // get the absolute subFilePath
            var FullPath = Path.Combine(this._baseDirectory, subFilePath);
            byte[] fileData = null;
            try
            {
                if (!File.Exists(FullPath)) return null;
                fileData = await File.ReadAllBytesAsync(FullPath);
            }
            catch (Exception e)
            {
                return null;
            }
            return fileData;

        }
        public async Task<string> GetFileBase64Encoded(string subFilePath)
        {
            var fileData = await this.GetFile(subFilePath);
            if (fileData == null) return null;
            return Convert.ToBase64String(fileData);

        }

        private string GetFileSuffix(string fullPath)
        {
            return fullPath.Substring(this._baseDirectory.Length).TrimStart(Path.DirectorySeparatorChar);
        }

        public bool RemoveFile(string subFilePath)
        {
            subFilePath = FileManagementUtil.GetOsDependentPath(subFilePath);
            var FullPath = Path.Combine(this._baseDirectory, subFilePath);
            if (FileManagementUtil.IsFileExists(FullPath))
            {
                return FileManagementUtil.DeleteFile(FullPath);
            }
            return false;
        }

        public bool RemoveDirectoryRecursivly(string subFilePath)
        {
            subFilePath = FileManagementUtil.GetOsDependentPath(subFilePath);
            var FullPath = Path.Combine(this._baseDirectory, subFilePath);
            return FileManagementUtil.DeleteDirectoryRecursivly(FullPath);
        }

        public Boolean RemoveFileWithAnyExtension(string subFilePath)
        {
            subFilePath = FileManagementUtil.GetOsDependentPath(subFilePath);
            var FullPath = Path.Combine(this._baseDirectory, subFilePath);
            var FileExistsWithGivenBaseName = FileManagementUtil.FindFilesWithAnyExtension(FullPath);
            return FileManagementUtil.DeleteFiles(FileExistsWithGivenBaseName);
        }
    }
}