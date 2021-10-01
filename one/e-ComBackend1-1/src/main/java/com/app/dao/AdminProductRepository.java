package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.Product;

public interface AdminProductRepository extends JpaRepository<Product, Integer>{

	
}
