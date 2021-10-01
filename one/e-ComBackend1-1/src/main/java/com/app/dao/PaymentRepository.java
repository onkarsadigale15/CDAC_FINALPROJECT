package com.app.dao;

import org.springframework.data.repository.CrudRepository;

import com.app.pojo.Payment;

public interface PaymentRepository extends CrudRepository<Payment,Integer>{
		Payment findByOrderId(int orderId) ;
}
