package com.cdac.controller;

import java.sql.SQLException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cdac.exception.ResourceNotFoundException;
import com.cdac.model.customerRegisteration;
import com.cdac.repository.CustomerRepository;





//@CrossOrigin(origins = "http://localhost:3000/")
@CrossOrigin(origins = { "http://localhost:3000" }, allowCredentials = "true")
@RestController
@RequestMapping("/api/")
public class CustomerController {

	@Autowired
	private CustomerRepository cust;
	
	//http://localhost:8091/api/customer
	//Create Customer 
	@PostMapping("/customer")
	public customerRegisteration createCustomer(@RequestBody customerRegisteration customer) {
		return cust.save(customer);
	}

	//login 

//	@PostMapping("/login")
//	public ResponseEntity<List<customerRegisteration>> getLogin(@RequestBody customerRegisteration customer) {
//			
//			
//		List<customerRegisteration> subCust = cust.findByEmailAndPwd(customer.getEmail(), customer.getPwd());
//			
//			
//	return ResponseEntity.ok(subCust);
//		}	
//		
	//get all register customer
	@GetMapping("/customer")
	public List<customerRegisteration> getAllCustomer(){
		return cust.findAll();
	}
	
	//get customer by id
	@GetMapping("/customer/{id}")
	public ResponseEntity<customerRegisteration> getCustomerById(@PathVariable Long id) {
		customerRegisteration customer = cust.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id : " + id));
		
		return ResponseEntity.ok(customer);
	
	}
	
	// update customer rest 
		@PutMapping("/customer/{id}")
		public ResponseEntity<customerRegisteration> updateCustomer(@PathVariable Long id,@RequestBody customerRegisteration custDetails){
			
			customerRegisteration customer = cust.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id : " + id));
			
			
			customer.setFname(custDetails.getFname());
			customer.setLname(custDetails.getLname());
			customer.setMobile(custDetails.getMobile());
			customer.setEmail(custDetails.getEmail());
			customer.setAddress(custDetails.getAddress());
			customer.setPwd(custDetails.getPwd());
			
			
			customerRegisteration updatedCustomer = cust.save(customer);
			return ResponseEntity.ok(updatedCustomer);
		}
	
		
		// delete customer details
		@DeleteMapping("/customer/{id}")
		public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable Long id){
			
			customerRegisteration customer = cust.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("Customer not exist with id : " + id));
			
			cust.delete(customer);
			Map<String,Boolean> response = new HashMap<>();
			response.put("deleted",Boolean.TRUE);
			return ResponseEntity.ok(response);
		}
	
		//Login 
		
		String msg = null;
		List<String> messages;
		// login
		@PostMapping("/login")
		public ResponseEntity<List<customerRegisteration>> getLogin(@RequestBody customerRegisteration customer,
				HttpServletRequest request) throws SQLException {
			
			List<customerRegisteration> subCust = cust.findByEmailAndPwd(customer.getEmail(), customer.getPwd());

			Iterator<customerRegisteration> itr = subCust.iterator();
			while (itr.hasNext()) {
				msg = itr.next().getEmail();
			}

			@SuppressWarnings("unchecked")
			List<String> messages = (List<String>) request.getSession().getAttribute("MY_SESSION_MESSAGES");
			if (messages == null) {
				messages = new ArrayList<>();
				//request.getSession().setAttribute("MY_SESSION_MESSAGES", messages);

			} 
				messages.add(msg);
				request.getSession().setAttribute("MY_SESSION_MESSAGES", messages);
			
				System.out.println("messagesa11-->" +messages);
			return ResponseEntity.ok(subCust);
		}

		// logout
		@PostMapping("/logout")
		public ResponseEntity<String> destroySession(HttpServletRequest request,HttpSession session) {

			@SuppressWarnings("unchecked")
			List<String> messages = (List<String>) request.getSession().getAttribute("MY_SESSION_MESSAGES");
			//List<String> messages = (List<String>) session.getAttribute("MY_SESSION_MESSAGES");
			request.getSession().invalidate();
			//session.invalidate();
			return ResponseEntity.ok("logout succesfully!!!");

		}

		// profile
		@GetMapping("/profile")
		public ResponseEntity<List<String>> getProfile(HttpSession session,HttpServletRequest request) {

			@SuppressWarnings("unchecked")
//			List<String> messages = (List<String>) session.getAttribute("MY_SESSION_MESSAGES");
			List<String> messages = (List<String>) request.getSession().getAttribute("MY_SESSION_MESSAGES");

			System.out.println("messagesa22--->" +messages);
			return ResponseEntity.ok(messages);

		}


		@GetMapping("profile/{email}")
		
		public ResponseEntity<List<customerRegisteration>> getCustomerByEmail(@PathVariable String email) {

			List<customerRegisteration> subCust = cust.findByEmail(email);
			System.out.println("Profile/email----->" + subCust);
			return ResponseEntity.ok(subCust);
		}
		
	
}
