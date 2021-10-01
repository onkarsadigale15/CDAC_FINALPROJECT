package com.app.controller;

import java.io.IOException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.AdminProduct;
import com.app.pojo.Product;
import com.app.service.IAdminProductService;
import com.app.service.IProductService;

@RestController 
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminProductController {

	@Autowired
	private IAdminProductService adminProductService;
	
	@Autowired
	private IProductService productService ;
	
	public AdminProductController() {
		System.out.println("in ctor of "+ getClass().getName());
	}
	
	@GetMapping("/products")
	public List<Product> getAllProducts(){
		System.out.println("in get all products");
		return adminProductService.fetchAllProducts();
	}
	
	@PostMapping("/product-add")
	public ResponseEntity<?> saveProduct(@RequestBody AdminProduct product) {
		System.out.println("in save product "+product);
		return new ResponseEntity<>(adminProductService.saveProductDetails(product), HttpStatus.CREATED);
	}
	
    @DeleteMapping("/product/{productId}")
	public ResponseEntity<?> deleteProductDetails(@PathVariable int productId){
		System.out.println("in del product details "+ productId);
		return ResponseEntity.ok(adminProductService.deleteProductDetails(productId));
	}
    
	@GetMapping("/product/{id}")
	public ResponseEntity<?> getProductDetails(@PathVariable int id){
		System.out.println("in get product details "+id);
		return ResponseEntity.ok(adminProductService.getProductDetails(id));
	}
	
	@PutMapping("/product/{id}")
	public ResponseEntity<?> updateProductDetails(@PathVariable int id,@RequestBody Product detachedProduct){
		
		System.out.println("in update "+detachedProduct+" "+id);
		//User existingUser = userService.getUserDetails(id);
		return ResponseEntity.ok(adminProductService.updateProductDetails(detachedProduct));
	}
	
	@PutMapping("/upload/{productId}")
	public ResponseEntity<?> updateProductImage(@PathVariable int productId ,@RequestBody MultipartFile file) throws IOException{
		System.out.println("In a upload product "+productId);
		return ResponseEntity.ok(productService.uploadImageForParticularProduct(productId, file)) ;
	}
}
