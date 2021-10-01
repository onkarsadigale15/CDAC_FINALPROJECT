package com.app.controller;

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

import com.app.pojo.Customer;
import com.app.service.IAdminUserService;


@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "http://localhost:3000")
public class AdminUserController {

	@Autowired
	private IAdminUserService adminUserService;
	
	public AdminUserController() {
		System.out.println("in ctor of "+ getClass().getName());
	}
	
	@GetMapping("/users")
	public List<Customer> getAllUsers(){
		System.out.println("in get all users");
		return adminUserService.fetchAllUsers();
	}
	
	@PostMapping("/user-add")
	public ResponseEntity<?> saveUser(@RequestBody Customer user) {
		System.out.println("in save user "+user);
		return new ResponseEntity<>(adminUserService.saveUserDetails(user), HttpStatus.CREATED);
	}
	
	@DeleteMapping("/{userId}")
	public ResponseEntity<?> deleteUserDetails(@PathVariable int userId){
		System.out.println("in del user details "+ userId);
		return ResponseEntity.ok(adminUserService.deleteUserDetails(userId));
	}
	
	@GetMapping("/{id}")
	public ResponseEntity<?> getUserDetails(@PathVariable int id){
		System.out.println("in get user details "+id);
		return ResponseEntity.ok(adminUserService.getUserDetails(id));
	}
	
	@PutMapping("/{id}")
	public ResponseEntity<?> updateUserDetails(@PathVariable int id,@RequestBody Customer detachedUser){
		System.out.println("in update "+detachedUser+" "+id);
		return ResponseEntity.ok(adminUserService.updateUserDetails(detachedUser));
	}
}

