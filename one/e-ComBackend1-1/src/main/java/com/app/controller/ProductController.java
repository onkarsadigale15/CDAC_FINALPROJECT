package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.pojo.Product;
import com.app.service.IProductService;

@RestController
@RequestMapping("/products")
@CrossOrigin(origins = "http://localhost:3000")
public class ProductController {
	// 3030 /porducts 
//		get instance of Service method 
	@Autowired
	IProductService service ;
	
	public ProductController() {
			System.out.println("In a product controller ");
		}
		
	@GetMapping
	public List<Product> getAllProduct(){
		
		System.out.println("In product controller get all product ");
		return service.fetchAllProducts();
	}
	// 3030/12
	@GetMapping("/details/{productId}")
	public Product detailsParticularProduct(@PathVariable int productId) {
		System.out.println("in a get product service ");
		return service.getProductById(productId) ;
	}
	
	@GetMapping("/category/table")
	public List<Product> getTableProduct(){
		System.out.println("in table products");
		return service.findByCategory();
	}
	
	@GetMapping("/category/chair")
	public List<Product> getChairProduct(){
		System.out.println("in chair products");
		return service.findByCategoryChair();
	}
	
	@GetMapping("/category/sofa")
	public List<Product> getSofaProduct(){
		System.out.println("in sofa products");
		return service.findByCategorySofa();
	}
		
}
