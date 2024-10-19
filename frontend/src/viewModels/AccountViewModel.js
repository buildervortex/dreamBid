import { Api } from "@mui/icons-material";
import AccountMapper from "../mappers/AccountMapper";
import AccountService from "../services/accountService";
import ErrorMessage from "./ErrorViewModel";




export default class AccountViewModel{

    static async deleteAccount(){


        const response = await AccountService.deleteAccount();
        
        if ("error" in response){
          return ErrorMessage.errorMessageFromString(response.error);
          
        }
        
        return AccountMapper.ToAccountDto(response);
    }


    static async getAccount(){

        const response = await AccountService.getAccount();

        if ("error" in response){
            return ErrorMessage.errorMessageFromString(response.error);
        }

        return AccountMapper.ToAccountDto(response);
    }


    static async updateAccount(updateAccountDto){

        const error = validateUpdateAccountDto(updateAccountDto);

        if(error)
           return ErrorMessage.errorMessageFromJoiError(error);

        const response =await AccountService.updateAccount(updateAccountDto);
        if ("error" in response){
            return ErrorMessage.errorMessageFromString(response.error);
        }
      return AccountMapper.ToAccountDto(response);
        
    }
     
    static async getProfilePicture(){
       
        const response = await AccountService.getProfilePicture();
        if("error"in response){
            return ErrorMessage.errorMessageFromString(response.error);
        }

        return response;

    }

}