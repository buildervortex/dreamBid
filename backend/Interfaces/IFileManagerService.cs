namespace DreamBid.Interfaces
{
    public interface IFileManagerService:IRepository
    {
        public Task<string> StoreFile(IFormFile file, string subFilePath, Boolean overWrite = false);
        public Task<byte[]> GetFile(string subFilePath);
        public Task<string> GetFileBase64Encoded(string subFilePath);
        public Boolean RemoveFile(string subFilePath);

        public Boolean RemoveFileWithAnyExtension(string subFilePath);
    }
}