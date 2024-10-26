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

export async function testUploadCarImage(success, failed) {
    const response = await axios.get("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9rsF4ZPqqvq0XOQ5aGG1vbz4bkdM_6fKHg&s", {
        responseType: 'blob',
    })

    if (response.status !== 200) throw new Error("Error fetching the iamge");
    let imageBlob = response.data;

    let responseData = await ImageViewModel.uploadCarImage(Env.carId, imageBlob);

    if (!(responseData instanceof ErrorMessage)) {

        Test.assertNotNull(responseData.id, "uploadCarImage id", success, failed)
        Test.assertNotNull(responseData.fileName, "uploadCarImage fileName", success, failed)
        Test.assertNotNull(responseData.length, "uploadCarImage length", success, failed)
        Test.assertNull(responseData.image, "uploadCarImage image", success, failed)

        Env.carImageId = responseData.id;
        Env.carImageFileName = responseData.fileName;
        Env.carImageLength = responseData.length;
    }

    else {
        Test.assertHasOwnProperty(responseData, "error", `uploadCarImage error happend ${responseData.error}`, success, failed, "red");
    }
}


export async function testGetAllCarImages(success, failed) {
    let response = await ImageViewModel.getAllCarImages(Env.carId);

    if (!(response instanceof ErrorMessage)) {

        response.forEach(element => {
            Test.assertEqual(element.id, Env.carImageId, "getAllCarImages id", success, failed)
            Test.assertEqual(element.fileName, Env.carImageFileName, "getAllCarImages fileName", success, failed)
            Test.assertEqual(element.length, Env.carImageLength, "getAllCarImages length", success, failed)
            Test.assertNotNull(element.image, "getAllCarImages image", success, failed)
        });
    }

    else {
        Test.assertHasOwnProperty(response, "error", `getAllCarImages error happend ${response.error}`, success, failed, "red");
    }
}

export async function testDeleteCarImage(success, failed) {
    let responseData = await ImageViewModel.deleteCarImage(Env.carId, Env.carImageId);

    if (!(responseData instanceof ErrorMessage)) {

        Test.assertEqual(responseData.id, Env.carImageId, "deleteCarImage id", success, failed)
        Test.assertEqual(responseData.fileName, Env.carImageFileName, "deleteCarImage fileName", success, failed)
        Test.assertEqual(responseData.length, Env.carImageLength, "deleteCarImage length", success, failed)
        Test.assertNull(responseData.image, "deleteCarImage image", success, failed)
    }

    else {
        Test.assertHasOwnProperty(responseData, "error", `deleteCarImage error happend ${responseData.error}`, success, failed, "red");
    }
}