package com.app.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.AdminRepository;
import com.app.dto.Login;
import com.app.pojo.User;
@Service
@Transactional
public class AdminService implements IAdminService {
	
	@Autowired
	private AdminRepository adminRepo;

	@Override
	public User loginAsAdmin(Login login) {
		User admin = adminRepo.findByEmail(login.getEmail()) ;
		
		if(admin.getPassword().equals(login.getPassword()) ) {
			System.out.println("normal ");
			return admin ;
		}
		System.out.println("in a abnormal way ");
		return null;
	}

}
