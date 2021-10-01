package com.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.MyOrder;
import com.app.service.ShippmentService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/order")
public class OrderController {
	
	@Autowired
	ShippmentService shipmentService ;
	
	public OrderController() {
		System.out.println("In a order controller ");
	}
	
	@GetMapping("/my-order/{customerId}")
	public MyOrder getMyOrder(@PathVariable int customerId) {
		System.out.println("in a my order "+customerId);
		return shipmentService.getShippmentDetails(customerId);
	}

}
