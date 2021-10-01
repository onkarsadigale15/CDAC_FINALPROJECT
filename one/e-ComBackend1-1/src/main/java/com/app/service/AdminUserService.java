package com.app.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.excepe.UserHandlingException;
import com.app.dao.AdminUserRepository;
import com.app.pojo.Customer;

@Service
@Transactional
public class AdminUserService implements IAdminUserService {
	
	@Autowired
	private AdminUserRepository adminUserRepo;

	@Override
	public List<Customer> fetchAllUsers() {
		return adminUserRepo.findAll();
	}

	@Override
	public Customer saveUserDetails(Customer transientUser) {
		return adminUserRepo.save(transientUser);
	}

	@Override
	public String deleteUserDetails(int userId) {
		adminUserRepo.deleteById(userId);
		return "User details deleted";
	}

	@Override
	public Customer getUserDetails(int userId) {
		return adminUserRepo.findById(userId).orElseThrow(() -> new UserHandlingException("Invalid User Id"));
	}

	@Override
	public Customer updateUserDetails(Customer detachedUser) {
		return adminUserRepo.save(detachedUser);
	}

}
