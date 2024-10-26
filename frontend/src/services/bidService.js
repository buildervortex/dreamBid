import API from "./api";

export default class BidService {

    static async placeBid(auctionId, addBidDto) {

        const response = await API.post(`/bids/${auctionId}`, addBidDto);
        console.log(response);
        return response.data;

    }

    static async getBid(bidId) {

        const response = await API.get(`/bids/${bidId}`);
        return response.data;
    }

    static async getBids(auctionId, queryParams) {

        const response = API.get(`/bids/auction/${auctionId}`, {
            params: queryParams
        });

        return response.data;
    }

}