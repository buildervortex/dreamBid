using DreamBid.Data;
using DreamBid.Interfaces;
using DreamBid.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;

namespace DreamBid.Extensions
{
    public static class CleanUpService
    {
        public static async Task CleanUpUser(this User user, IFileManagerService fileManagerService, ApplicationDbContext context, ILogger logger)
        {

            if (user == null) return;

            if (context.Entry(user).Collection(u => u.Cars).IsLoaded == false)
            {
                await context.Entry(user).Collection(u => u.Cars).LoadAsync();
            }
            if (context.Entry(user).Reference(i => i.Image).IsLoaded == false)
            {
                await context.Entry(user).Reference(i => i.Image).LoadAsync();
            }
            if (user.Image == null) return;

            fileManagerService.RemoveFileWithAnyExtension(user.Image.FilePath);


            // Remove cars
            foreach (var car in user.Cars)
            {
                await car.CleanUpCar(fileManagerService, context);
            }

        }

        public static async Task CleanUpCar(this Car car, IFileManagerService fileManagerService, ApplicationDbContext context)
        {

            if (context.Entry(car).Collection(u => u.Images).IsLoaded == false)
            {
                await context.Entry(car).Collection(u => u.Images).LoadAsync();
            }
            foreach (var image in car.Images)
            {
                fileManagerService.RemoveFile(image.FilePath);
            }
        }
    }
}