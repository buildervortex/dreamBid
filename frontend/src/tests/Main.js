import { testLoginAccount, testRegisterAccount } from "./viewModels/TestAuthViewModel";
import { testDeleteAccount, testGetAccount, testUpdateAccount, testUpdateProfilePicture } from "./viewModels/TestAccountViewModel";

export async function TestMain(success, failed) {

    console.log("Start test on register Account");
    await testRegisterAccount(success, failed);
    console.log("Start test on login Account");
    await testLoginAccount(success, failed);
    console.log("\nStart test on get account");
    await testGetAccount(success, failed);
    //console.log("\nStart test on update account");
    //await testUpdateAccount(success, failed);

    console.log("\nStart test on update profile picture");
    await testUpdateProfilePicture(success, failed);




    console.log("\nStart test on delete account");
    await testDeleteAccount(success, failed);
    console.log("\n\n");


}