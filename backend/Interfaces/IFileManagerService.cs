namespace DreamBid.Interfaces
{
    public interface IFileManagerService
    {
        public Task<string> StoreFile(IFormFile file, string path, Boolean overWrite = false);
        public Task<byte[]> GetFile(string path);
        public Boolean IsFileExists(string path);
        public void DeleteFile(string? path);
        public void DeleteFiles(string? path);
    }
}