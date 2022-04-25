package com.cdac.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "customer_register")
public class customerRegisteration {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	
	@Column(name = "f_name",nullable = false)
	private String fname;
	
	@Column(name = "l_name",nullable = false)
	private String lname;
	
	@Column(name = "phone_no",nullable = false)
	private Long mobile;
	
	@Column(name = "email_id", unique=true,nullable = false)
	private String email;
	
	@Column(name = "cust_addr",nullable = false)
	private String address;
	
	@Column(name = "password",nullable = false)
	private String pwd;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFname() {
		return fname;
	}

	public void setFname(String fname) {
		this.fname = fname;
	}

	public String getLname() {
		return lname;
	}

	public void setLname(String lname) {
		this.lname = lname;
	}

	public Long getMobile() {
		return mobile;
	}

	public void setMobile(Long mobile) {
		this.mobile = mobile;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public customerRegisteration() {
		super();
		// TODO Auto-generated constructor stub
	}

	public customerRegisteration(String fname, String lname, Long mobile, String email, String address, String pwd) {
		super();
		this.fname = fname;
		this.lname = lname;
		this.mobile = mobile;
		this.email = email;
		this.address = address;
		this.pwd = pwd;
	}
	
	
	
}
