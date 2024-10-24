import API from "./api";

export default class ImageService{

  static async getProfileImageById(id){

    const response = await API.get(`/images/profiles/${id}`);
    return response.data;
  }

  static async getProfileImage(){

    const response = await API.get("/images/profiles/me");
    return response.data;
  }

  static async postProfilePicture(file){

    // const formData = new FormData();
    //formData.append('image', file);

    const response = await API.post("/images/profiles/me",file);
    return response.data;
  }

  static async deleteProfilePicture(){

    const response = await API.delete("/images/profiles/me");
    return response.data;
  }

  static async getCarImages(id,IsDecsending=true,pageNumber=1,pageSize=10,WithImageData=true){
    // ?IsDecsending=true&pageNumber=1&pageSize=10&WithImageData=true
    const queryString = new URLSearchParams(queryParams).toString();

    const response = await API.get(`/images/cars/${id}`, {
      params: {
        IsDecsending,
        pageNumber,
        pageSize,
        WithImageData,

      }
    })
    return response.data;
  }
  static async postCarImage(id,file){

   // const formData = new FormData();
    //formData.append('image', file);

    const response = await API.post(`/images/cars/${id}`,file);
    return response.data;
  }

  static async deleteImage(id,imageId){

    const response = await API.delete(`/images/cars/${id}/${imageId}`);
    return response.data;
  }

  static async deleteAllImages(id){

    const response = await API.delete(`/images/cars/${id}`);
    return response.data;
  }



}