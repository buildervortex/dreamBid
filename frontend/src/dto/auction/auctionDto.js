import CarDto from "../car/carDto";

class AuctionDto {
    id = "";
    auctionStartTime = new Date();
    auctionEndTime = new Date();
    winnerId = "";
    highestBidAmount = "";
    isActive = "";
    carId = "";
    car = new CarDto();
    bids = [null];
}

export default AuctionDto;