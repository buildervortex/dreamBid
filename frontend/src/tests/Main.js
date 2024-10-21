import { testRegisterAccount } from "./viewModels/TestAuthViewModel";
import { testDeleteAccount } from "./viewModels/TestAccountViewModel";

export async function TestMain(success, failed) {

    console.log("Start test on register Account");
    await testRegisterAccount(success, failed);
    console.log("\nStart test on delete account");
    await testDeleteAccount(success, failed);
    console.log("\n\n");

}