import API from "./api";

export default class AuctionService {
    static async createAuction(addAuctionDto, id) {

        const response = await API.post(`/auctions/${id}`, addAuctionDto);
        return response.data;
    }

    static async getAuction(id) {

        const response = await API.get(`/auctions/${id}`);
        return response.data;
    }

    static async getAllAuctions(queryParams) {
        const response = await API.get("/auctions", {
            params: queryParams
        })
        return response.data;
    }
    static async deleteAuction(id) {
        const response = await API.delete(`/auctions/${id}`);
        return response.data;
    }

}