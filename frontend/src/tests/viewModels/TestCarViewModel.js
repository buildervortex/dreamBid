import AddCarDto from "../../dto/car/addCarDto";
import UpdateCarDto from "../../dto/car/updateCarDto";
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

        Test.assertEqual(response.id, Env.carId, "getCarById id", success, failed)
        Test.assertEqual(response.make, Env.make, "getCarById make", success, failed)
        Test.assertEqual(response.model, Env.model, "getCarById model", success, failed)
        Test.assertEqual(response.year, Env.year, "getCarById year", success, failed)
        Test.assertEqual(response.mileage, Env.mileage, "getCarById mileage", success, failed)
        Test.assertEqual(response.vin, Env.vin, "getCarById vin", success, failed)
        Test.assertEqual(response.conditionReport, Env.conditionReport, "getCarById conditionReport", success, failed)
        Test.assertEqual(response.startingPrice, Env.startingPrice, "getCarById startingPrice", success, failed)
        Test.assertEqual(response.reservePrice, Env.reservePrice, "getCarById reservePrice", success, failed)

    }
    else {
        Test.assertHasOwnProperty(response, "error", `getCarById error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testGetAllCars(success, failed) {
    const response = await CarViewModel.getAllCars();
    if (!(response instanceof ErrorMessage)) {
        response.forEach(element => {

            Test.assertNotNull(element.id, "getAllCars bio", success, failed)
            Test.assertNotNull(element.make, "getAllCars make", success, failed)
            Test.assertNotNull(element.model, "getAllCars model", success, failed)
            Test.assertNotNull(element.year, "getAllCars year", success, failed)
            Test.assertNotNull(element.mileage, "getAllCars mileage", success, failed)
            Test.assertNotNull(element.vin, "getAllCars vin", success, failed)
            Test.assertNotNull(element.conditionReport, "getAllCars conditionReport", success, failed)
            Test.assertNotNull(element.startingPrice, "getAllCars startingPrice", success, failed)
            Test.assertNotNull(element.reservePrice, "getAllCars reservePrice", success, failed)
        });


    }
    else {
        Test.assertHasOwnProperty(response, "error", `getAllCars error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testUpdateCar(success, failed) {

    Env.make = "updatedMake"
    Env.model = "updateModel"
    Env.year = 2008
    Env.mileage = 25890
    Env.vin = "ABC-2475"
    Env.conditionReport = "asdfasdfkasdjfkasfd"
    Env.startingPrice = 5000.00
    Env.reservePrice = 100000.00

    var updateCarDto = new UpdateCarDto();

    updateCarDto.make = Env.make;
    updateCarDto.model = Env.model;
    updateCarDto.year = Env.year;
    updateCarDto.mileage = Env.mileage;
    updateCarDto.vin = Env.vin;
    updateCarDto.conditionReport = Env.conditionReport;
    updateCarDto.startingPrice = Env.startingPrice;
    updateCarDto.reservePrice = Env.reservePrice;

    const response = await CarViewModel.updateCar(Env.carId, updateCarDto);

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.carId, "updateCar id", success, failed)
        Test.assertEqual(response.make, Env.make, "updateCar make", success, failed)
        Test.assertEqual(response.model, Env.model, "updateCar model", success, failed)
        Test.assertEqual(response.year, Env.year, "updateCar year", success, failed)
        Test.assertEqual(response.mileage, Env.mileage, "updateCar mileage", success, failed)
        Test.assertEqual(response.vin, Env.vin, "updateCar vin", success, failed)
        Test.assertEqual(response.conditionReport, Env.conditionReport, "updateCar conditionReport", success, failed)
        Test.assertEqual(response.startingPrice, Env.startingPrice, "updateCar startingPrice", success, failed)
        Test.assertEqual(response.reservePrice, Env.reservePrice, "updateCar reservePrice", success, failed)

    }
    else {
        Test.assertHasOwnProperty(response, "error", `updateCar error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testDeleteCar(success, failed) {
    const response = await CarViewModel.deleteCar(Env.carId);

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.carId, "deleteCar id", success, failed)
        Test.assertEqual(response.make, Env.make, "deleteCar make", success, failed)
        Test.assertEqual(response.model, Env.model, "deleteCar model", success, failed)
        Test.assertEqual(response.year, Env.year, "deleteCar year", success, failed)
        Test.assertEqual(response.mileage, Env.mileage, "deleteCar mileage", success, failed)
        Test.assertEqual(response.vin, Env.vin, "deleteCar vin", success, failed)
        Test.assertEqual(response.conditionReport, Env.conditionReport, "deleteCar conditionReport", success, failed)
        Test.assertEqual(response.startingPrice, Env.startingPrice, "deleteCar startingPrice", success, failed)
        Test.assertEqual(response.reservePrice, Env.reservePrice, "deleteCar reservePrice", success, failed)

    }
    else {
        Test.assertHasOwnProperty(response, "error", `deleteCar error happend. ${response.error}`, success, failed, "red");
    }
}