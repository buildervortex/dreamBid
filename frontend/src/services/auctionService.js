import API from "./api";

export default class AuctionService{
    static async createAuction(addAuctionDto,id){

        const response = await API.post(`/auctions/${id}`,addAuctionDto);
        return response.data;
    }

    static async getAuction(id){

        const response = await API.get(`/auctions/${id}`);
        return response.data;
    }

    static async getAllAuctions(active=false,OrderBy=StartTime,IsDecsending=true,PageNumber=4,PageSize=2){
        // /?active=false&OrderBy=StartTime&IsDecsending=true&PageNumber=4&PageSize=2
        const queryString = new URLSearchParams(queryParams).toString();
        const response = await API.get("/auctions",{
            params: {
                active,
                OrderBy,
                IsDecsending,
                PageNumber,
                PageSize,
            }
        })
    }
    static async deleteAuction(id){
        const response = await API.delete(`/auctions/${id}`);
        return response.data;
    }

}