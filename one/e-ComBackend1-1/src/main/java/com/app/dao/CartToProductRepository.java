package com.app.dao;

import java.util.List;

import org.springframework.data.repository.CrudRepository;

import com.app.pojo.CartToProduct;

public interface CartToProductRepository extends CrudRepository<CartToProduct, Integer> {
			List<CartToProduct> findAllByCartId(int cartId) ;
}
