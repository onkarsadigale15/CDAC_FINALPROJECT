package com.app.service;

import com.app.pojo.Cart;
import com.app.pojo.Customer;
import com.app.dto.Login;

public interface IUserService {
//	for registration of user 
			 String saveUser(Customer cust) ;

//	after register as a customer assign cart to it 
			 Cart createUserCart(Customer cust) ;
			
//	For login of a user 
			 Customer loginAsACustomer(Login login) ;
			 
//	Return customer as per customer id 
			 Customer getCustomerById(int custId) ;
}
