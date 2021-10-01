package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Customer;


public interface AdminUserRepository extends JpaRepository<Customer, Integer>{

}
