import AccountViewModel from "../../viewModels/AccountViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Test from "../utils/testUtils";

export async function testDeleteAccount() {

    const response = await AccountViewModel.deleteAccount();

    let fullName = "example full name";
    let DOB = new Date("2004-8-15");
    let email = `exampleemail100@example.com`;
    let username = `exampleUserName100`;

    if (!(response instanceof ErrorMessage)) {

        Test.assertNotNull(response.id, "deleteAccount id");
        Test.assertNull(response.bio, "deleteAccount bio")
        Test.assertEqual(response.DOB.toISOString(), DOB.toISOString(), "deleteAccount DOB")
        Test.assertEqual(response.fullName, fullName, "deleteAccount fullName")
        Test.assertEqual(response.email, email, "deleteAccount email")
        Test.assertEqual(response.userName, username, "deleteAccount userName")
    }
    else {
        Test.assertHasOwnProperty(response, "error", `deleteAccount error happend. ${response.error}`,"red");
    }

}
