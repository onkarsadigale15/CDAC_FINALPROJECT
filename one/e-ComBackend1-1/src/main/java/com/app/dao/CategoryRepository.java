package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.app.pojo.Category;

public interface CategoryRepository extends JpaRepository<Category, Integer>{

	 Category findByName(String category);
}
