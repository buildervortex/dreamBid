using DreamBid.Dtos.Error;
using DreamBid.Interfaces;

namespace DreamBid.Helpers
{
    public class DBResult<T>
    {
        public T Data { get; set; }
        public ErrorMessage Error { get; set; }

        public DBResult(T data = default, ErrorMessage error = null)
        {
            this.Data = data;
            this.Error = error;
        }
    }
}