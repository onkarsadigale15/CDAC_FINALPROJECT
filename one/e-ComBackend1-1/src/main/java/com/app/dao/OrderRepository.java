package com.app.dao;

import org.springframework.data.repository.CrudRepository;

import com.app.pojo.Order;

public interface OrderRepository extends CrudRepository<Order, Integer>{

	Order findByCustomerId(int custmerId);
}
