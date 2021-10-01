import http from "../http-common";

class FileUploadService {
  upload(productId, file, onUploadProgress) {
    let formData = new FormData();

    formData.append("file", file);
    return http.put("http://localhost:8080/admin/upload/"+ productId, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress,
    });
  }

}

export default new FileUploadService();