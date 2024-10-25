import ImageMapper from "../mappers/ImageMapper";
import ImageService from "../services/imageService";
import ErrorMessage from "./ErrorViewModel";


export default class ImageViewModel {


    static async setOwnProfilePicture(imageBlob) {

        const formData = new FormData();
        formData.append("profilePicture", imageBlob, "profilePicture.jpg");

        const response = await ImageService.postProfilePicture(formData);

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);
    }

    static async getOwnProfilePicture() {

        const response = await ImageService.getProfileImage();
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);
    }

    static async getProfilePictureById(id) {

        const response = await ImageService.getProfileImageById(id);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);
    }

    static async deleteOwnProfilePicture() {

        const response = await ImageService.deleteProfilePicture();
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);
    }

    static async getCarImages(id, IsDecsending = true, pageNumber = 1, pageSize = 10, WithImageData = true) {

        const response = await ImageService.getCarImages(id, IsDecsending, pageNumber, pageSize, WithImageData);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);

    }

    static async postCarImage(id, file) {
        const response = await ImageService.postCarImage(id, file);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);

    }

    static async deleteImage(id, imageId) {
        const response = await ImageService.deleteImage(id, imageId);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);
    }

    static async deleteAllImages(id) {

        const response = await ImageService.deleteAllImages(id);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);
    }

}