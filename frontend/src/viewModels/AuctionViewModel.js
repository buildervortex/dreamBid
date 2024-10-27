import { validateAddAuctionDto } from "../dto/auction/addAuctionDto";
import AuctionMapper from "../mappers/AuctionMapper";
import AuctionService from "../services/auctionService";
import ErrorMessage from "./ErrorViewModel";



export default class AuctionViewModel {

    static async addAuction(addAuctionDto, carId) {
        const { error } = validateAddAuctionDto(addAuctionDto);
        if (error)
            return ErrorMessage.errorMessageFromJoiError(error);
        const response = await AuctionService.createAuction(addAuctionDto, carId);

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AuctionMapper.ToAuctionDto(response);
    }

    static async getAuction(id) {

        const response = await AuctionService.getAuction(id);

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AuctionMapper.ToAuctionDto(response);

    }

    static async getAllAuctions(active = false, OrderBy = "StartTime", IsDecsending = true, PageNumber = 4, PageSize = 2) {
        let queryObject = {
            OrderBy,
            active,
            PageNumber,
            PageSize,
            IsDecsending
        }

        const response = await AuctionService.getAllAuctions(queryObject);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return response.map(auction => AuctionMapper.ToAuctionDto(auction));
    }

    static async deleteAuction(id) {
        const response = await AuctionService.deleteAuction(id);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);

        }
        return AuctionMapper.ToAuctionDto(response);
    }

}