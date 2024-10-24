import BidDto from "../dto/bid/bidDto";

export default class BidMapper{

    static ToBidDto(data){
        let bidDto = new BidDto();
        bidDto.id = data.id;
        bidDto.bidDateTime = data.bidDateTime;
        bidDto.bidAmount = data.bidAmount;
        bidDto.auctionId = data.auctionId;
        bidDto.userId = data.userId;
        return bidDto;
    }
}