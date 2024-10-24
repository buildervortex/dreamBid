import AccountViewModel from "../../viewModels/AccountViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Test from "../utils/testUtils";

export async function testDeleteAccount(success, failed) {

    const response = await AccountViewModel.deleteAccount();

    let fullName = "example full name";
    let DOB = new Date("2004-8-11");
    let email = `exampleemail102@example.com`;
    let username = `exampleUserName102`;

    if (!(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "deleteAccount id", success, failed);
        Test.assertNull(response.bio, "deleteAccount bio", success, failed)
        Test.assertEqual(response.DOB.toDateString(), DOB.toDateString(), "deleteAccount DOB", success, failed)
        Test.assertEqual(response.fullName, fullName, "deleteAccount fullName", success, failed)
        Test.assertEqual(response.email, email, "deleteAccount email", success, failed)
        Test.assertEqual(response.userName, username, "deleteAccount userName", success, failed)
    }
    else {
        Test.assertHasOwnProperty(response, "error", `deleteAccount error happend. ${response.error}`, success, failed, "red");
    }

}
