package com.cdac.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

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
import com.cdac.model.Menu;
import com.cdac.model.Order;
import com.cdac.repository.OrderRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v3/")
public class OrderController {

	@Autowired
	private OrderRepository orderRepo;

	// http://localhost:8091/api/v3/orders

	// add order status
	@PostMapping("/orders")
	public Order createOrder(@RequestBody Order order) {
		return orderRepo.save(order);
	}

	// get all order status
	@GetMapping("/orders")
	public List<Order> getAllOrder() {
		return orderRepo.findAll();
	}

	// get order by id
	@GetMapping("/orders/{id}")
	public ResponseEntity<Order> getOrderById(@PathVariable int id) {
		Order order = orderRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("menu not exist with id : " + id));
		return ResponseEntity.ok(order);

	}

	// update OrderStatus
	@PutMapping("/orders/{id}")
	public ResponseEntity<Order> updateOrder(@PathVariable int id, @RequestBody Order orderDetails) {

		Order order = orderRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("menu not exist with id : " + id));

		//menu.setUrl(menuDetails.getUrl());
		order.setCustName(orderDetails.getCustName());
		order.setEmail(orderDetails.getEmail());
		order.setStatus(orderDetails.getStatus());
		order.setTotal(orderDetails.getTotal());
	
		Order updatedOrder = orderRepo.save(order);
		return ResponseEntity.ok(updatedOrder);
	}

	//Delete orderStatus
	@DeleteMapping("/orders/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteOrder(@PathVariable int id) {
		Order order = orderRepo.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("menu not exist with id : " + id));
		orderRepo.delete(order);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);

	}
	
}