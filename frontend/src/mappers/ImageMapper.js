import ImageDto from "../dto/image/imageDto";

export default class ImageMapper{

    static ToImageDto(data){

        let imageDto = new ImageDto();
        imageDto.id = data.id;
        imageDto.fileName = data.fileName;
        imageDto.length = data.length;
        imageDto.image = data.image;
        return imageDto;
    }
}