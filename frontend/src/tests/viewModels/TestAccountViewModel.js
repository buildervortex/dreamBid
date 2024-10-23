import UpdateAccountDto from "../../dto/account/updateAccountDto";
import AccountViewModel from "../../viewModels/AccountViewModel";
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Test from "../utils/testUtils";



export async function testDeleteAccount(success, failed) {

    const response = await AccountViewModel.deleteAccount();

    let fullName = "example full name";
    let DOB = new Date("2004-8-11");
    let email = `exampleemail104@example.com`;
    let username = `exampleUserName104`;

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

export async function testGetAccount(success,failed) {

    const response = await AccountViewModel.getAccount();

    let fullName = "example full name";
    let DOB = new Date("2004-8-11");
    let email = `exampleemail103@example.com`;
    let username = `exampleUserName103`;

    if(!(response instanceof ErrorMessage)){

        Test.assertNotNull(response.id,"getAccount id",success,failed);
        Test.assertNull(response.bio,"getAccount bio",success,failed)
        Test.assertEqual(response.DOB.toDateString(),DOB.toDateString(),"getAccount DOB",success,failed)
        Test.assertEqual(response.fullName,fullName,"getAccount fullName",success,failed)
        Test.assertEqual(response.email,email,"getAccount email",success,failed)
        Test.assertEqual(response.userName,username,"getAccount userName",success,failed)
    
        
    }
    else{
        Test.assertHasOwnProperty(response,"error",`getAccount error happend. ${response.error}`,success,failed,"red");
    }

    
}

export async function testUpdateAccount(success,failed) {

     const updateAccountDto = new UpdateAccountDto();

     updateAccountDto.fullName = "example full name";
     updateAccountDto.DOB = new Date("2004-8-11");
     updateAccountDto.bio ="This is my new bio for test";
     let email = `exampleemail103@example.com`;
     let userName = `exampleUserName103`;

     

    const response = await AccountViewModel.updateAccount(updateAccountDto);

    if(!(response instanceof ErrorMessage)){

        Test.assertNotNull(response.id,"updateAccount id",success,failed);
        Test.assertNull(response.bio,updateAccountDto.bio,"updateAccount bio",success,failed)
        Test.assertEqual(response.DOB.getMonth(),updateAccountDto.DOB.getMonth(),"updateAccount DOB",success,failed)
        Test.assertEqual(response.fullName,updateAccountDto.fullName,"updateAccount fullName",success,failed)
        Test.assertEqual(response.email,email,"updateAccount email",success,failed)
        Test.assertEqual(response.userName,userName,"updateAccount userName",success,failed)

    }

    else{
        Test.assertHasOwnProperty(response,"error",`updateAccount error happend. ${response.error}`,success,failed,"red");
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




