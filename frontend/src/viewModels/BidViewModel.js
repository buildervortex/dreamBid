import { validateAddBidDto } from "../dto/bid/addBidDto";
import BidMapper from "../mappers/BidMapper";
import BidService from "../services/bidService";
import ErrorMessage from "./ErrorViewModel";


export default class BidViewModel {

    static async placeBid(auctionId, addBidDto) {

        const { error } = validateAddBidDto(addBidDto);
        if (error)
            return ErrorMessage.errorMessageFromJoiError(error);

        const response = await BidService.placeBid(auctionId, addBidDto);
        if ("error" in response) {

            return ErrorMessage.errorMessageFromString(response.error);
        }

        return BidMapper.ToLinkDto(response);
    }

    static async getBid(bidId) {

        const response = await BidService.getBid(bidId);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return BidMapper.ToBidDto(response);

    }

    static async getBids(auctionId, PageNumber = 1, PageSize = 20, IsDecsending = true) {

        let queryObject = {
            PageNumber,
            PageSize,
            IsDecsending
        }

        const response = await BidService.getBids(auctionId, queryObject);

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return response.map(bid => BidMapper.ToBidDto(bid));
    }




}