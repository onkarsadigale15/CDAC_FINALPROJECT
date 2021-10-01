package com.app.dao;

import org.springframework.data.repository.CrudRepository;

import com.app.pojo.Customer;

public interface UserRepository extends CrudRepository<Customer, Integer>{
		Customer findByEmail(String email) ;  
}
