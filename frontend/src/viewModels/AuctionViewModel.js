import { validateAddAuctionDto } from "../dto/auction/addAuctionDto";
import AuctionMapper from "../mappers/AuctionMapper";
import AuctionService from "../services/auctionService";
import ErrorMessage from "./ErrorViewModel";



export default class AuctionViewModel {

    static async addAuction(addAuctionDto, carId, { WithBids = false, WithCar = false }={}) {
        const { error } = validateAddAuctionDto(addAuctionDto);
        if (error)
            return ErrorMessage.errorMessageFromJoiError(error);

        let queryObject = {
            WithBids,
            WithCar
        }
        const response = await AuctionService.createAuction(addAuctionDto, carId, queryObject);

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AuctionMapper.ToAuctionDto(response);
    }

    static async getAuction(id, { WithBids = false, WithCar = false }={}) {
        let queryObject = {
            WithBids,
            WithCar
        }
        const response = await AuctionService.getAuction(id, queryObject);

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AuctionMapper.ToAuctionDto(response);

    }

    static async getAllAuctions({ active = false, OrderBy = "StartTime", IsDecsending = true, PageNumber = 4, PageSize = 2, WithBids = false, WithCar = false }={}) {
        let queryObject = {
            OrderBy,
            active,
            PageNumber,
            PageSize,
            IsDecsending,
            WithBids,
            WithCar
        }

        const response = await AuctionService.getAllAuctions(queryObject);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return response.map(auction => AuctionMapper.ToAuctionDto(auction));
    }

    static async deleteAuction(id, { WithBids = false, WithCar = false }={}) {
        let queryObject = {
            WithBids,
            WithCar
        }
        const response = await AuctionService.deleteAuction(id, queryObject);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);

        }
        return AuctionMapper.ToAuctionDto(response);
    }

}