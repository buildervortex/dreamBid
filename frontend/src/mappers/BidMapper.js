import BidDto from "../dto/bid/bidDto";
import LinkDto from "../dto/bid/linkDto";

export default class BidMapper {

    static ToBidDto(data) {
        let bidDto = new BidDto();
        bidDto.id = data.id;
        bidDto.bidDateTime = new Date(data.bidDateTime);
        bidDto.bidAmount = data.bidAmount;
        bidDto.auctionId = data.auctionId;
        bidDto.userId = data.userId;
        return bidDto;
    }
    static ToLinkDto(data) {
        let linkDto = new LinkDto();
        linkDto.approvalUrl = data.approvalUrl;

        return linkDto;
    }
}