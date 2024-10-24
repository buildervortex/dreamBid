import ImageMapper from "../mappers/ImageMapper";
import ImageService from "../services/imageService";
import ErrorMessage from "./ErrorViewModel";


export default class ImageViewModel{

static async getProfileImageById(id){

    const response = await ImageService.getProfileImageById(id);
    if(error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
   return ImageMapper.ToImageDto(response);
}

static async getProfileImage(){

    const response = await ImageService.getProfileImage();
    if(error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return ImageMapper.ToImageDto(response);
}

static async postProfilePicture(file){

    const response = await ImageService.postProfilePicture(file);
    if (error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return ImageMapper.ToImageDto(response);
}

static async deleteProfilePicture(){

    const response = await ImageService.deleteProfilePicture();
    if (error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return ImageMapper.ToImageDto(response);
}

static async getCarImages(id,IsDecsending=true,pageNumber=1,pageSize=10,WithImageData=true){

    const response = await ImageService.getCarImages(id,IsDecsending,pageNumber,pageSize,WithImageData);
    if (error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return ImageMapper.ToImageDto(response);
    
}

static async postCarImage(id,file){
    const response = await ImageService.postCarImage(id,file);
    if(error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return ImageMapper.ToImageDto(response);

}

static async deleteImage( id,imageId){
    const response = await ImageService.deleteImage(id,imageId);
    if (error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return ImageMapper.ToImageDto(response);
}

static async deleteAllImages(id){

    const response = await ImageService.deleteAllImages(id);
    if(error in response){
        return ErrorMessage.errorMessageFromString(response.error);
    }
    return ImageMapper.ToImageDto(response);
}

}