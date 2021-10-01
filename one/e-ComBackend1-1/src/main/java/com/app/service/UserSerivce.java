package com.app.service;

import java.time.LocalDate;
import java.util.ArrayList;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.CartRepository;
import com.app.dao.UserRepository;
import com.app.excepe.UserHandlingException;
import com.app.pojo.Cart;
import com.app.pojo.Customer;
import com.app.dto.Login;
import com.app.pojo.Order;
import com.app.pojo.Product;
import com.app.pojo.Status;

@Service
@Transactional
public class UserSerivce implements IUserService {

	public UserSerivce() {
		System.out.println("In a user service ");
	}

	@Autowired
	UserRepository userRepo;

	@Autowired
	CartRepository cartRepo;

	@Override
	public String saveUser(Customer cust) {
		System.out.println("in a service save user ");
//		save the details of a user in user or customer table 
		Customer newCust = userRepo.save(cust);
//		Add a new cart to customer 
		createUserCart(newCust);
		return "Custmer Added Successfully ";
	}

	@Override
	public Cart createUserCart(Customer cust) {
		Cart currentCustCart = new Cart(0, Status.PENDING, LocalDate.now(), cust, new ArrayList<Product>(),
				new ArrayList<Order>());
		Cart newCart = cartRepo.save(currentCustCart);
		Customer getCust = newCart.getCustomer();
		getCust.setCart(newCart);
		return cartRepo.save(currentCustCart);
	}

	@Override
	public Customer loginAsACustomer(Login login) {
		Customer cust = userRepo.findByEmail(login.getEmail());
		if (cust.getPassword().equals(login.getPassword())) {
			return cust;
		}
		throw new UserHandlingException("Invalid Customer Or Password");
	}

	@Override
	public Customer getCustomerById(int custId) {
		return userRepo.findById(custId).orElseThrow(() -> new UserHandlingException("Invalid Customer ID"));
	}

}
