import UpdateAccountDto from "../../dto/account/updateAccountDto";
import AccountViewModel from "../../viewModels/AccountViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Env from "../env";
import Test from "../utils/testUtils";



export async function testDeleteAccount(success, failed) {

    const response = await AccountViewModel.deleteAccount();

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.AccountId, "deleteAccount id", success, failed);
        Test.assertEqual(response.bio, Env.bio, "deleteAccount bio", success, failed)
        Test.assertEqual(response.DOB.toISOString(), Env.DOB.toISOString(), "deleteAccount DOB", success, failed)
        Test.assertEqual(response.fullName, Env.fullName, "deleteAccount fullName", success, failed)
        Test.assertEqual(response.email, Env.email, "deleteAccount email", success, failed)
        Test.assertEqual(response.userName, Env.username, "deleteAccount userName", success, failed)
    }
    else {
        Test.assertHasOwnProperty(response, "error", `deleteAccount error happend. ${response.error}`, success, failed, "red");
    }

}

export async function testGetAccount(success, failed) {

    const response = await AccountViewModel.getAccount();

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.AccountId, "getAccount id", success, failed);
        Test.assertEqual(response.bio, Env.bio, "getAccount bio", success, failed)
        Test.assertEqual(response.DOB.toISOString(), Env.DOB.toISOString(), "getAccount DOB", success, failed)
        Test.assertEqual(response.fullName, Env.fullName, "getAccount fullName", success, failed)
        Test.assertEqual(response.email, Env.email, "getAccount email", success, failed)
        Test.assertEqual(response.userName, Env.username, "getAccount userName", success, failed)
    }
    else {
        Test.assertHasOwnProperty(response, "error", `getAccount error happend. ${response.error}`, success, failed, "red");
    }
}

export async function testUpdateAccount(success, failed) {

    const updateAccountDto = new UpdateAccountDto();

    Env.fullName = "updated name";
    Env.DOB = new Date("2002-10-24T10:44:16.063Z")
    Env.bio = "new upddated bio"

    updateAccountDto.fullName = Env.fullName;
    updateAccountDto.DOB = Env.DOB;
    updateAccountDto.bio = Env.bio;

    const response = await AccountViewModel.updateAccount(updateAccountDto);

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.AccountId, "updateAccount id", success, failed);
        Test.assertEqual(response.bio, Env.bio, "updateAccount bio", success, failed)
        Test.assertEqual(response.DOB.toISOString(), Env.DOB.toISOString(), "updateAccount DOB", success, failed)
        Test.assertEqual(response.fullName, Env.fullName, "updateAccount fullName", success, failed)
        Test.assertEqual(response.email, Env.email, "updateAccount email", success, failed)
        Test.assertEqual(response.userName, Env.username, "updateAccount userName", success, failed)

    }

    else {
        Test.assertHasOwnProperty(response, "error", `updateAccount error happend. ${response.error}`, success, failed, "red");
    }

}



export async function testUpdateProfilePicture(success, failed) {

    let newProfilePicture = "https://example.com/new-profile-picture.jpg";


    const response = await AccountViewModel.updateProfilePicture(newProfilePicture);

    if (response && !(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "updateProfilePicture id", success, failed);
        Test.assertNotNull(response.profilePicture, "updateProfilePicture profilePicture", success, failed);
        Test.assertEqual(response.profilePicture, newProfilePicture, "updateProfilePicture profilePicture URL", success, failed);

    } else if (response) {
        Test.assertHasOwnProperty(response, "error", `updateProfilePicture error happened. ${response.error}`, success, failed, "red");
    } else {
        Test.fail("No response from updateProfilePicture API", success, failed);
    }

}




