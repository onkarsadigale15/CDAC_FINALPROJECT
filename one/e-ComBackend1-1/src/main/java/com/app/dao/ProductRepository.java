package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojo.Product;

public interface ProductRepository extends JpaRepository<Product, Integer>{

	@Query("select p from Product p join Category c on p.category=c.id where c.name='table'")
	List<Product>findByCategory();
	@Query("select p from Product p join Category c on p.category=c.id where c.name='chair'")
	List<Product>findByCategoryChair();
	@Query("select p from Product p join Category c on p.category=c.id where c.name='sofa'")
	List<Product>findByCategorySofa();
}
