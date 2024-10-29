import AuctionDto from "../dto/auction/auctionDto";

export default class AuctionMapper {

    static ToAuctionDto(data) {
        let auctionDto = new AuctionDto();
        auctionDto.id = data.id;
        auctionDto.auctionStartTime = new Date(data.auctionStartTime);
        auctionDto.auctionEndTime = new Date(data.auctionEndTime);
        auctionDto.winnerId = data.winnerId;
        auctionDto.highestBidAmount = data.highestBidAmount;
        auctionDto.isActive = data.isActive;
        auctionDto.carId = data.carId;
        auctionDto.car = data.car ? data.car : null;
        auctionDto.bids = data.bids ? data.bids : null;
        return auctionDto;
    }
}