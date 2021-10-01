package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.excepe.UserHandlingException;
import com.app.pojo.Customer;
import com.app.dto.Login;
import com.app.service.IUserService;

@RestController
@RequestMapping("/user")
@CrossOrigin(origins = "http://localhost:3000")
public class UserController {
	
		@Autowired
		IUserService userService ;
	
		public UserController() {
			System.out.println("In a user Controller ");
		}
		
		@PostMapping("/user-add")
		public  String saveUser(@RequestBody Customer customer){
			System.out.println("in a user controller "+customer);
			
			return userService.saveUser(customer);
		}
		
		@PostMapping("/customer")
		public  ResponseEntity<?> login(@RequestBody Login login) {
			//System.out.println(" in login "+login);
			System.out.println("before ");
			Customer cust = userService.loginAsACustomer(login) ;
			//System.out.println("after ");
			//System.out.println("in cust "+cust);
			if(cust instanceof Customer) {
				System.out.println("after successfull "+cust);
//				 ResponseEntity.ok(new Student(id, "John", "Wiliams", "AA"));
				return ResponseEntity.ok(cust);
				
			}else
				throw new UserHandlingException("Customer Not Found");
		}	
			
		
}
