import axios from "axios";

import ImageViewModel from '../../viewModels/ImageViewModel';
import ErrorMessage from "../../viewModels/ErrorViewModel";
import Test from "../utils/testUtils";
import Env from "../env";

export async function testSetProfilePicture(success, failed) {
    const response = await axios.get("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9rsF4ZPqqvq0XOQ5aGG1vbz4bkdM_6fKHg&s", {
        responseType: 'blob',
    })

    if (response.status !== 200) throw new Error("Error fetching the iamge");
    let imageBlob = response.data;

    let responseData = await ImageViewModel.setOwnProfilePicture(imageBlob);

    if (!(responseData instanceof ErrorMessage)) {

        Test.assertNotNull(responseData.id, "setProfilePicture id", success, failed)
        Test.assertNotNull(responseData.fileName, "setProfilePicture fileName", success, failed)
        Test.assertNotNull(responseData.length, "setProfilePicture length", success, failed)
        Test.assertNull(responseData.image, "setProfilePicture image", success, failed)

        Env.profilePictureId = responseData.id;
        Env.profilePictureFileName = responseData.fileName;
        Env.profilePictureLength = responseData.length;
    }

    else {
        Test.assertHasOwnProperty(responseData, "error", `setProfilePicture error happend ${responseData.error}`, success, failed, "red");
    }
}

export async function testGetOwnProfileImage(success, failed) {
    let response = await ImageViewModel.getOwnProfilePicture();

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.profilePictureId, "getOwnProfilePicture id", success, failed)
        Test.assertEqual(response.fileName, Env.profilePictureFileName, "getOwnProfilePicture fileName", success, failed)
        Test.assertEqual(response.length, Env.profilePictureLength, "getOwnProfilePicture length", success, failed)
        Test.assertNotNull(response.image, "getOwnProfilePicture image", success, failed)

        Env.profilePictureId = response.id;
        Env.profilePictureFileName = response.fileName;
        Env.profilePictureLength = response.length;
        Env.profilePictureImage = response.image;
    }

    else {
        Test.assertHasOwnProperty(response, "error", `getOwnProfilePicture error happend ${response.error}`, success, failed, "red");
    }
}

export async function testGetProfileImage(success, failed) {

    let response = await ImageViewModel.getProfilePictureById(Env.AccountId);

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.profilePictureId, "getProfileImageById id", success, failed)
        Test.assertEqual(response.fileName, Env.profilePictureFileName, "getProfileImageById fileName", success, failed)
        Test.assertEqual(response.length, Env.profilePictureLength, "getProfileImageById length", success, failed)
        Test.assertEqual(response.image, Env.profilePictureImage, "getProfileImageById image", success, failed)

        Env.profilePictureId = response.id;
        Env.profilePictureFileName = response.fileName;
        Env.profilePictureLength = response.length;
        Env.profilePictureImage = response.image;
    }

    else {
        Test.assertHasOwnProperty(response, "error", `getProfileImageById error happend ${response.error}`, success, failed, "red");
    }
}

export async function testDeleteProfileImage(success, failed) {
    let response = await ImageViewModel.deleteOwnProfilePicture();

    if (!(response instanceof ErrorMessage)) {

        Test.assertEqual(response.id, Env.profilePictureId, "deleteProfilePicture id", success, failed)
        Test.assertEqual(response.fileName, Env.profilePictureFileName, "deleteProfilePicture fileName", success, failed)
        Test.assertEqual(response.length, Env.profilePictureLength, "deleteProfilePicture length", success, failed)
        Test.assertNull(response.image, "deleteProfilePicture image", success, failed)

        Env.profilePictureId = response.id;
        Env.profilePictureFileName = response.fileName;
        Env.profilePictureLength = response.length;
        Env.profilePictureImage = response.image;
    }

    else {
        Test.assertHasOwnProperty(response, "error", `deleteProfilePicture error happend ${response.error}`, success, failed, "red");
    }
}