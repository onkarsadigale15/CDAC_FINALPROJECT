package com.app.util;

import java.io.IOException;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

import javax.transaction.Transactional;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

@Service
@Transactional
public class ImageUploadUtil {
	
	public String saveFileInResource(String uploadDir ,String imageName , MultipartFile file) throws IOException
	{
		Path uploadPath = Paths.get(uploadDir);
		
//		if the dir is not exits then create new one 
		if(!Files.exists(uploadPath)) {
			Files.createDirectories(uploadPath) ;
		}
		
//		save the file 
		System.out.println("in a file upload "+uploadPath.toString());
		try(InputStream inputStream = file.getInputStream()){
			Path filePath = uploadPath.resolve(imageName);
			Files.copy(inputStream, filePath, StandardCopyOption.REPLACE_EXISTING);
			return "Uploaded Successfully " ;
		}catch(IOException ioe){
			throw new IOException("Could Not Save the Image "+imageName);
		}
	}
}
