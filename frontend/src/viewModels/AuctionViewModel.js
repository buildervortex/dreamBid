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

        if (response?.error !== undefined) {
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

        if (response?.error !== undefined) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AuctionMapper.ToAuctionDto(response);

    }

    static async getAllAuctions({ active = false, OrderBy = "StartTime", IsDecsending = true, PageNumber = 1, PageSize = 20, WithBids = false, WithCar = false }={}) {
        let queryObject = {
            OrderBy,
            active,
            PageNumber,
            PageSize,
            IsDecsending,
            WithBids,
            WithCar
        }

        // let t = [];
        // t.find()

        const response = await AuctionService.getAllAuctions(queryObject);
        if (response?.error !== undefined) {
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
        if (response?.error !== undefined) {
            return ErrorMessage.errorMessageFromString(response.error);

        }
        return AuctionMapper.ToAuctionDto(response);
    }

}