import API from "./api";

export default class ImageService {

  static async postProfilePicture(formData) {

    const response = await API.post("/images/profiles/me", formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    return response.data;
  }

  static async getProfileImage() {

    const response = await API.get("/images/profiles/me");
    return response.data;
  }

  static async getProfileImageById(id) {

    const response = await API.get(`/images/profiles/${id}`);
    return response.data;
  }

  static async deleteProfilePicture() {

    const response = await API.delete("/images/profiles/me");
    return response.data;
  }

  static async postCarImage(id, formData) {


    const response = await API.post(`/images/cars/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      }
    });
    console.log(response);
    return response.data;
  }

  static async getCarImages(id, queryParams) {
    const response = await API.get(`/images/cars/${id}`, {
      params: queryParams
    })
    return response.data;
  }


  static async deleteCarImage(id, imageId) {

    const response = await API.delete(`/images/cars/${id}/${imageId}`);
    return response.data;
  }

  static async deleteAllImages(id) {

    const response = await API.delete(`/images/cars/${id}`);
    return response.data;
  }



}