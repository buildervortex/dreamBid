import { validateAddAuctionDto } from "../dto/auction/addAuctionDto";
import AuctionMapper from "../mappers/AuctionMapper";
import AuctionService from "../services/auctionService";
import ErrorMessage from "./ErrorViewModel";



export default class AuctionViewModel{

  static async createAuction(addAuctionDto,id){
    const {error} = validateAddAuctionDto(addAuctionDto);
    if(error)
        return ErrorMessage.errorMessageFromJoiError(error);
    const response = await AuctionService.createAuction(addAuctionDto,id);

    if (error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return AuctionMapper.ToAuctionDto(response);
    }
    
    static async getAuction(id){

        const response = await AuctionService.getAuction(id);

        if (error in response){
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AuctionMapper.ToAuctionDto(response);

    }

    static async getAllAuctions(active=false,OrderBy=StartTime,IsDecsending=true,PageNumber=4,PageSize=2){

        const response = await AuctionService.getAllAuctions(active,OrderBy,IsDecsending,PageNumber,PageSize);
        if(error in response){
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AuctionMapper.ToAuctionDto(response);
    }

    static async  deleteAuction(id){
        const response = await AuctionService.deleteAuction(id);
        if(error in response){
            return ErrorMessage.errorMessageFromString(response.error);

        }
        return AuctionMapper.ToAuctionDto(response);
    }

  }



