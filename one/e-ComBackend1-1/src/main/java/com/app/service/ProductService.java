package com.app.service;

import java.io.IOException;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.ProductRepository;
import com.app.excepe.ProductException;
import com.app.pojo.Product;
import com.app.util.ImageUploadUtil;
@Service
@Transactional
public class ProductService implements IProductService {

	@Autowired
	ProductRepository productRepo ;
	
	@Autowired
	ImageUploadUtil imageUtil ; 
	
	@Override
	public List<Product> fetchAllProducts() {
			System.out.println("in product serivec method ");
			return productRepo.findAll() ;
	}

	@Override
	public Product getProductById(int productId) {
		return productRepo.findById(productId).orElseThrow(() -> new ProductException("product not found "));
	}
	
	@Override
	public List<Product> findByCategory() {
		System.out.println("in product category table");
		return productRepo.findByCategory();
	}

	@Override
	public List<Product> findByCategoryChair() {
		System.out.println("in product category chair");
		return productRepo.findByCategoryChair();
	}

	@Override
	public List<Product> findByCategorySofa() {
		System.out.println("in product category sofa");
		return productRepo.findByCategorySofa();
	}
	
	public String uploadImageForParticularProduct(int productId ,MultipartFile file) throws IOException {
		Product product = getProductById(productId) ;
		String filename = StringUtils.cleanPath(file.getOriginalFilename());
		System.out.println("in the file "+filename);
		product.setImage("images/"+productId+"/"+filename);
//		get product id of a persistent product 
		Product currentProduct = productRepo.save(product);
//		create String upload dir
		//D:\\Fortune_Woods\\project\\public\\images/
		String uploadDir = "D:\\Project\\Fortune_Woods\\Fortune_Woods\\fortune_woods\\public\\images/"+currentProduct.getId() ;
		
//		upload in a file 
		imageUtil.saveFileInResource(uploadDir, filename, file);
		return "uploaded succesfully " ;
	}


}
