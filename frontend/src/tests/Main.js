import { testLoginAccount, testRegisterAccount } from "./viewModels/TestAuthViewModel";
import { testDeleteAccount, testGetAccount, testUpdateAccount } from "./viewModels/TestAccountViewModel";
import { resetEnvToDefault } from "./env";
import { testDeleteCarImage, testGetAllCarImages, testGetOwnProfileImage, testGetProfileImage, testSetProfilePicture, testUploadCarImage } from "./viewModels/TestImageViewModel";
import { testCreateCar, testDeleteCar, testGetAllCars, testGetCarById, testUpdateCar } from "./viewModels/TestCarViewModel";
import { testAddAuction, testDeleteAuction, testGetAllAuction, testGetAuction } from "./viewModels/TestAuctionViewModel";
import { testPlaceBid } from "./viewModels/TestBidViewModel";

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

    console.log("\nStart test on set profile picutre upload");
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
    console.log("\nStart test on update car");
    await testUpdateCar(success, failed);

    console.log("\nStart test on upload car image");
    await testUploadCarImage(success, failed);
    console.log("\nStart test on get all car images");
    await testGetAllCarImages(success, failed);
    console.log("\nStart test on delete car image");
    await testDeleteCarImage(success, failed);

    console.log("\nStart test on add auction");
    await testAddAuction(success, failed);
    console.log("\nStart test on get auction");
    await testGetAuction(success, failed);
    console.log("\nStart test on get all auctions");
    await testGetAllAuction(success, failed);
    
    // console.log("\nStart test placing bid");
    // await testPlaceBid(success, failed);
    
    console.log("\nStart test on deleete auction");
    await testDeleteAuction(success, failed);
    console.log("\nStart test on delete car");
    await testDeleteCar(success, failed);



    console.log("\nStart test on delete account");
    await testDeleteAccount(success, failed);
    console.log("\n\n");
    disableButton(false);
}