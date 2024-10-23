import API from "./api";

export default class CarService{

static async createCar(addCarDto){

    const response = await API.post("/accounts/cars",addCarDto)
    return response.data;

}

static async getCarById(id){
    const response = await API.get(`/accounts/cars ${id}`)
    return response.data;
}

static async getAllCars(PageNumber=1,PageSize=5,SortBy="StartingPrice",isDecsending=true){
    // /accounts/cars/?PageNumber=1&PageSize=2&SortBy=StartingPrice&isDecsending=true
    const queryString = new URLSearchParams(queryParams).toString();
    const response = await API.get(`/accounts/cars`,{
        params: {
         PageNumber,
         PageSize,
         SortBy,
         isDecsending,
        }
    });
    return response.data;

}
static async updateCar(id,updateCarDto){

  const response = await API.patch(`/accounts/cars ${id}`,updateCarDto) 
  return response.data; 

}

static async deleteCar(id){

    const response = await API.delete(`/accounts/cars ${id}`)
    return response.data;
}



}