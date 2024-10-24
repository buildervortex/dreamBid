import { testLoginAccount, testRegisterAccount } from "./viewModels/TestAuthViewModel";
import { testDeleteAccount, testGetAccount, testUpdateAccount, testUpdateProfilePicture } from "./viewModels/TestAccountViewModel";
import Env, { resetEnvToDefault } from "./env";

export async function TestMain(success, failed) {

    resetEnvToDefault();

    let flag = false;


    console.log("Start test on register Account");
    flag = await testRegisterAccount(success, failed);


    console.log("Start test on login Account");
    flag = await testLoginAccount(success, failed);
    console.log("\nStart test on get account");
    flag = await testGetAccount(success, failed);
    console.log("\nStart test on update account");
    flag = await testUpdateAccount(success, failed);

    // console.log("\nStart test on update profile picture");
    //await testUpdateProfilePicture(success, failed);




    console.log("\nStart test on delete account");
    flag = await testDeleteAccount(success, failed);
    console.log("\n\n");


}