import API from "./api";


export default class AccountService{

    static async deleteAccount(){
      
        const response = await API.delete("/accounts/me");
        return response.data;

    }

     static async getAccount(){
      
        const response =await API.get("/accounts/me");
        return response.data;

     }
 
    static async updateAccount(updateAccountDto){
      const response = await API.post("/accounts/me",updateAccountDto);
      return response.data;

    }

    static async getProfilePicture(){
      const response = await API.get("/accounts/me/profilePicture");
      return response.data;

    }

    static async updateProfilePicture(){
       await API.post("/accounts/me/profilePicture");
     

    }

    
      

}