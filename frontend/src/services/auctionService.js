import API from "./api";

export default class AuctionService {
    static async createAuction(addAuctionDto, id, queryParams) {

        const response = await API.post(`/auctions/${id}`, addAuctionDto, {
            params: queryParams
        });
        return response.data;
    }

    static async getAuction(id, queryParams) {

        const response = await API.get(`/auctions/${id}`, {
            params: queryParams
        });
        return response.data;
    }

    static async getAllAuctions(queryParams) {
        const response = await API.get("/auctions", {
            params: queryParams
        })
        return response.data;
    }
    static async deleteAuction(id, queryParams) {
        const response = await API.delete(`/auctions/${id}`, {
            params: queryParams
        });
        return response.data;
    }

}