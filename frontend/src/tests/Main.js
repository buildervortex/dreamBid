import { testLoginAccount, testRegisterAccount } from "./viewModels/TestAuthViewModel";
import { testDeleteAccount, testGetAccount, testUpdateAccount, testUpdateProfilePicture } from "./viewModels/TestAccountViewModel";
import { resetEnvToDefault } from "./env";
import { testGetOwnProfileImage, testGetProfileImage, testSetProfilePicture } from "./viewModels/TestImageViewModel";
import { testCreateCar, testGetAllCars, testGetCarById } from "./viewModels/TestCarViewModel";

export async function TestMain(success, failed, disableButton) {

    resetEnvToDefault();


    console.log("Start test on register Account");
    await testRegisterAccount(success, failed);


    console.log("Start test on login Account");
    await testLoginAccount(success, failed);
    console.log("\nStart test on get account");
    await testGetAccount(success, failed);
    console.log("\nStart test on update account");
    await testUpdateAccount(success, failed);
    console.log("\nStart test on profile picutre upload");
    await testSetProfilePicture(success, failed);
    console.log("\nStart test on get own profile picutre ");
    await testGetOwnProfileImage(success, failed);
    console.log("\nStart test on get profile picutre");
    await testGetProfileImage(success, failed);
    console.log("\nStart test on delete profile picutre");
    await testGetProfileImage(success, failed);
    console.log("\nStart test on create car");
    await testCreateCar(success, failed);
    console.log("\nStart test on get car by Id");
    await testGetCarById(success, failed);
    console.log("\nStart test on get all cars");
    await testGetAllCars(success, failed);

    // console.log("\nStart test on update profile picture");
    //await testUpdateProfilePicture(success, failed);




    console.log("\nStart test on delete account");
    await testDeleteAccount(success, failed);
    console.log("\n\n");
    disableButton(false);
}