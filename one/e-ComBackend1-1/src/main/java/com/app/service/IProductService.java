package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojo.Product;

public interface IProductService {
//		public abstract 
			List<Product> fetchAllProducts() ;
	
//		get a particular product 
			Product getProductById(int productId) ;
			
//      get table products from category			
			List<Product> findByCategory();
			
//	      get chair products from category	
			List<Product>findByCategoryChair();
			
//	      get sofa products from category	
			List<Product>findByCategorySofa();
			
//			for upload a file 
			String uploadImageForParticularProduct(int productId ,MultipartFile file) throws IOException ;
	
}
