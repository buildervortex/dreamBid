namespace DreamBid.Interfaces
{
    public interface IFileManagerService
    {
        public Task<string> StoreFile(IFormFile file, string path);
        public Task<byte[]> GetFile(string path);
    }
}