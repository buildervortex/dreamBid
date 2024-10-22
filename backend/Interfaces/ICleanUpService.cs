namespace DreamBid.Interfaces
{
    public interface ICleanUpService
    {
        Task CleanUpUser(string userId);

        Task CleanUpCar(int carId);
    }
}