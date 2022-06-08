import Images from "../db/models/Images.js";
//@ts-check
export default class ImagesService {
  static async postImages(diary_id, images) {
    const data = [];
    images.forEach((image) => {
      data.push({
        diary_id: diary_id,
        image: image,
      });
    });
    const body = Images.create(data);
    return body;
  }
}
