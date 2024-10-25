import AddCarDto from "../../dto/car/addCarDto";
import CarViewModel from "../../viewModels/CarViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Env from "../env";
import Test from "../utils/testUtils";

export async function testCreateCar(success, failed) {
    const addCarDto = new AddCarDto();

    addCarDto.make = Env.make;
    addCarDto.model = Env.model;
    addCarDto.year = Env.year;
    addCarDto.mileage = Env.mileage;
    addCarDto.vin = Env.vin;
    addCarDto.conditionReport = Env.conditionReport;
    addCarDto.startingPrice = Env.startingPrice;
    addCarDto.reservePrice = Env.reservePrice;

    const response = await CarViewModel.createCar(addCarDto);

    if (!(response instanceof ErrorMessage)) {


        Test.assertNotNull(response.id, "createCar id", success, failed);
        Test.assertEqual(response.make, Env.make, "createCar make", success, failed)
        Test.assertEqual(response.model, Env.model, "createCar model", success, failed)
        Test.assertEqual(response.year, Env.year, "createCar year", success, failed)
        Test.assertEqual(response.mileage, Env.mileage, "createCar mileage", success, failed)
        Test.assertEqual(response.vin, Env.vin, "createCar vin", success, failed)
        Test.assertEqual(response.conditionReport, Env.conditionReport, "createCar conditionReport", success, failed)
        Test.assertEqual(response.startingPrice, Env.startingPrice, "createCar startingPrice", success, failed)
        Test.assertEqual(response.reservePrice, Env.reservePrice, "createCar reservePrice", success, failed)

        Env.carId = response.id;
    }
    else {
        Test.assertHasOwnProperty(response, "error", `createCar error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testGetCarById(success, failed) {
    const response = await CarViewModel.getCarById(Env.carId);

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.carId, "getCarById bio", success, failed)
        Test.assertEqual(response.make, Env.make, "createCar make", success, failed)
        Test.assertEqual(response.model, Env.model, "createCar model", success, failed)
        Test.assertEqual(response.year, Env.year, "createCar year", success, failed)
        Test.assertEqual(response.mileage, Env.mileage, "createCar mileage", success, failed)
        Test.assertEqual(response.vin, Env.vin, "createCar vin", success, failed)
        Test.assertEqual(response.conditionReport, Env.conditionReport, "createCar conditionReport", success, failed)
        Test.assertEqual(response.startingPrice, Env.startingPrice, "createCar startingPrice", success, failed)
        Test.assertEqual(response.reservePrice, Env.reservePrice, "createCar reservePrice", success, failed)

    }
    else {
        Test.assertHasOwnProperty(response, "error", `getCarById error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testGetAllCars(success, failed) {
    const response = await CarViewModel.getAllCars();
    if (!(response instanceof ErrorMessage)) {
        response.forEach(element => {

            Test.assertNotNull(element.id, "getCarById bio", success, failed)
            Test.assertNotNull(element.make, "createCar make", success, failed)
            Test.assertNotNull(element.model, "createCar model", success, failed)
            Test.assertNotNull(element.year, "createCar year", success, failed)
            Test.assertNotNull(element.mileage, "createCar mileage", success, failed)
            Test.assertNotNull(element.vin, "createCar vin", success, failed)
            Test.assertNotNull(element.conditionReport, "createCar conditionReport", success, failed)
            Test.assertNotNull(element.startingPrice, "createCar startingPrice", success, failed)
            Test.assertNotNull(element.reservePrice, "createCar reservePrice", success, failed)
        });


    }
    else {
        Test.assertHasOwnProperty(response, "error", `getCarById error happend. ${response.error}`, success, failed, "red");
    }


}