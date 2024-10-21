using DreamBid.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace DreamBid.Controllers
{
    public class CarController : ControllerBase
    {
        private readonly IFileManagerService _fileManagerService;
        public CarController(IFileManagerService fileManagerService)
        {
            this._fileManagerService = fileManagerService;
        }

        // [HttpPost]
        // public async Task<IActionResult> CreateCar()
        // {

        // }
    }
}