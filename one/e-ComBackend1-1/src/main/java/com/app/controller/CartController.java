package com.app.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.CartProcess;
import com.app.pojo.Product;
import com.app.service.ICartService;

@RestController
@RequestMapping("/cart")
@CrossOrigin(origins = "http://localhost:3000")
// /cart/
public class CartController {
	
	@Autowired
	ICartService cartService  ;
	
	public CartController() {
		System.out.println("In a cart Controller ");
	}
	
	@PostMapping("/add-product")
	public String addToCart(@RequestBody CartProcess cartProcess) {
		System.out.println("in a add to cart cust id "+cartProcess.getCustomerId()+" "+" "+cartProcess.getProductId());
		return cartService.addProductToCart(cartProcess.getCustomerId(), cartProcess.getProductId()); 
	}
	
	@GetMapping("/items/{customerId}")
	public List<Product> getAllItemsInACart(@PathVariable int customerId){
		System.out.println("in a get all items by cart ");
		return cartService.getAllItemsByCart(customerId) ;
	}
}
