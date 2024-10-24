import API from "./api";

export default class TransactionService{

    static async success(token,payerId,paymentId){

        const response = await API.get("/transactions/executePayment",token,payerId,paymentId);
        return response.data;
    }
}