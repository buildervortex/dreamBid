import AccountMapper from "../mappers/AccountMapper";
import AccountService from "../services/accountService";
import ErrorMessage from "./ErrorViewModel";
import { validateUpdateAccountDto } from "../dto/account/updateAccountDto";
import AuctionMapper from "../mappers/AuctionMapper";

export default class AccountViewModel {

    static async deleteAccount() {


        const response = await AccountService.deleteAccount();

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);

        }

        return AccountMapper.ToAccountDto(response);
    }


    static async getAccount() {

        const response = await AccountService.getAccount();

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }

        return AccountMapper.ToAccountDto(response);
    }


    static async updateAccount(updateAccountDto) {

        const { error } = validateUpdateAccountDto(updateAccountDto);

        if (error)
            return ErrorMessage.errorMessageFromJoiError(error);

        const response = await AccountService.updateAccount(updateAccountDto);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return AccountMapper.ToAccountDto(response);

    }

    static async addAuctionToWishlist(auctionId) {
        const response = await AccountService.addToWishList(auctionId);
        return AuctionMapper.ToAuctionDto(response.data);
    }

    static async getWishlist() {
        const response = await AccountService.getWishList();
        return response.data.map(auction => AuctionMapper.ToAuctionDto(auction));
    }

    static async deleteAllWishlistItems() {
        await AccountService.deleteWishlistAllItems();
    }

    static async deleteWishlistItem(auctionId) {
        const response = await AccountService.deleteWishlistItem(auctionId);
        return AuctionMapper.ToAuctionDto(response.data);
    }
}