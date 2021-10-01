
package com.app.service;

import java.time.LocalDate;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.OrderRepository;
import com.app.dao.UserRepository;
import com.app.dto.PlaceOrder;
import com.app.pojo.Cart;
import com.app.pojo.Customer;
import com.app.pojo.Order;
import com.app.pojo.Status;
@Service
@Transactional
public class OrderService implements IOrderService {

	
	@Autowired
	UserRepository userRepo ;
	
	@Autowired
	IUserService userService ;
	
	@Autowired
	OrderRepository orderRepo;
	
	@Autowired
	ICartService cartService ;
	
	@Autowired
	CartRepository cartRepo ;
	
	@Override
	public Order placeCurrentCartOrder(PlaceOrder placeOrder ) {
//		get customer by id 
		System.out.println("in a cart order ");
		Customer currentCustomer = userService.getCustomerById(placeOrder.getCustomerId());
//		get cart by id 
		Cart currentCart = currentCustomer.getCart() ;
//		make a order object 
		Order order = null ;       
		if(placeOrder.getPayMode().equals("COD") )
			order = new Order(currentCustomer, currentCart, currentCart.getQuantity(), Status.PLACED, cartService.getTotalPrice(currentCustomer.getId()), LocalDate.now()); 
//		else for online payment 
		
//		change status in cart 
		currentCart.setStatus(Status.PLACED);
		cartRepo.save(currentCart);
		
//		change status in shipment table 	
		
		return orderRepo.save(order);
	}
	
	public Order getOrderDetailsByCustmerId(int customerId) {
		System.out.println("in get order by id  ");
		Order order = orderRepo.findByCustomerId(customerId);
		System.out.println("in get order  "+order);
		return order ;
		
	}
}
