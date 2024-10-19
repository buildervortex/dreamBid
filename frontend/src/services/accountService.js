import API from "./api";


export default class AccountService{

    static async deleteAccount(){
      
        const response = await API.delete("/account/me");
        return response.data;

    }

     static async getAccount(){
      
        const response =await API.get("/account/me");
        return response.data;

     }
 
   
}