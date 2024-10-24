import API from "./api";

export default class BidService{

    static async placeBid(auctionId,addBidDto){

        const response = await API.post(`/bids/${auctionId}`,addBidDto);
        return response.data;
    
    }

    static async getBid(bidId){

        const response = await API.get(`/bids/${bidId}`);
        return response.data;
    }

    static async getBids(auctionId,PageNumber=1,PageSize=20,IsDecsending=true){
        // ?PageNumber=1&PageSize=20&IsDecsending=true

        const queryString = new URLSearchParams(queryParams).toString();
        
        const response = API.get(`/bids/auction/${auctionId}`,{
       params: {
        PageNumber,
        PageSize,
        IsDecsending,

       }

        });

        return response.data;
    }

}