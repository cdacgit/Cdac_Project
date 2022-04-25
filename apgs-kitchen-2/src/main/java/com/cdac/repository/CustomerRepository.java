package com.cdac.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.model.customerRegisteration;

@Repository
public interface CustomerRepository extends JpaRepository<customerRegisteration, Long> {
	
	public List<customerRegisteration> findByEmailAndPwd(String email,String pwd);
	
	public List<customerRegisteration> findByEmail(String email);

}
