import API from "./api";

export default class CarService {

    static async createCar(addCarDto) {

        const response = await API.post("/accounts/cars", addCarDto)
        return response.data;

    }

    static async getCarById(id) {
        const response = await API.get(`/accounts/cars/${id}`)
        return response.data;
    }

    static async getAllCars(queryParamsObject) {
        const response = await API.get(`/accounts/cars`, {
            params: queryParamsObject
        });
        return response.data;

    }
    static async updateCar(id, updateCarDto) {

        const response = await API.patch(`/accounts/cars/${id}`, updateCarDto)
        return response.data;

    }

    static async deleteCar(id) {

        const response = await API.delete(`/accounts/cars/${id}`)
        return response.data;
    }



}