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

    static async uploadCarImage(id, imageBlob) {
        const formData = new FormData();
        formData.append("image", imageBlob, "carImage.jpg")
        const response = await ImageService.postCarImage(id, formData);

        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return ImageMapper.ToImageDto(response);

    }
    static async getAllCarImages(id, { IsDecsending = true, pageNumber = 1, pageSize = 10, WithImageData = true } = {}) {
        let queryObject = {
            IsDecsending,
            pageNumber,
            pageSize,
            WithImageData
        }

        const response = await ImageService.getCarImages(id, queryObject);
        if ("error" in response) {
            return ErrorMessage.errorMessageFromString(response.error);
        }
        return response.map(image => ImageMapper.ToImageDto(image));

    }

    static async deleteCarImage(id, imageId) {
        const response = await ImageService.deleteCarImage(id, imageId);
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