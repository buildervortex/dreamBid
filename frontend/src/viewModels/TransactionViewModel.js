import TransactionService from "../services/transactionService";
import ErrorMessage from "./ErrorViewModel";


export default class TransactionViewModel{

static async success(token,payerId,paymentId){

    const response = await TransactionService.success(token,payerId,paymentId);

    if(response?.error !== undefined){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return response;
    

}

}