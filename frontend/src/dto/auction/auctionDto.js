class AuctionDto {
    id = "";
    auctionStartTime = new Date();
    auctionEndTime = new Date();
    winnerId = "";
    highestBidAmount = "";
    isActive = "";
    carId = "";
    car = null;
    bids = [null];
}

export default AuctionDto;