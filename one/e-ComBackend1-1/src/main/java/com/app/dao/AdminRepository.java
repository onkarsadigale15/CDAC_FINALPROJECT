package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.app.pojo.User;

public interface AdminRepository extends JpaRepository<User, Integer>{

	User findByEmail(String email);
}
