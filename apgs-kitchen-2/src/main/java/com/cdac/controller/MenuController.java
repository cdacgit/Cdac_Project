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
import com.cdac.repository.MenuRepository;

@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@RequestMapping("/api/v2/")
public class MenuController {

	@Autowired
	private MenuRepository menuRepository;
	
	//http://localhost:8091/api/v2/menus
	//add food items
	
	@PostMapping("/menus/{category}")
	public ResponseEntity<List<Menu>> getMenusByCat(@PathVariable String category) {

		List<Menu> subMenu = menuRepository.findByCategory(category);
		System.out.print("CAT  ---" + subMenu);

		return ResponseEntity.ok(subMenu);
	}
	
	@PostMapping("/menus")
	public Menu createMenu(@RequestBody Menu menu)
	{
		return menuRepository.save(menu);
	}
	
	// get all menu
	@GetMapping("/menus")
	public List<Menu> getAllMenus() {
		return menuRepository.findAll();
	}

	//get menu by id
	@GetMapping("/menus/{id}")
	public ResponseEntity<Menu> getEmployeeById(@PathVariable Long id)
	{
		Menu menu = menuRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("menu not exist with id : " + id));
		return ResponseEntity.ok(menu);

	}
	
	//update menu
	@PutMapping("/menus/{id}")
	public ResponseEntity<Menu> updateMenu(@PathVariable Long id,@RequestBody Menu menuDetails){
		
		Menu menu = menuRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("menu not exist with id : " + id));
		
		menu.setUrl(menuDetails.getUrl());
		menu.setTitle(menuDetails.getTitle());
		menu.setDescription(menuDetails.getDescription());
		menu.setPrice(menuDetails.getPrice());
		menu.setCategory(menuDetails.getCategory());
		
		
		Menu updatedMenu = menuRepository.save(menu);
		return ResponseEntity.ok(updatedMenu);
	}
	
	@DeleteMapping("/menus/{id}")
	public ResponseEntity<Map<String,Boolean>> deleteMenu(@PathVariable Long id)
	{
			Menu menu = menuRepository.findById(id)
					.orElseThrow(() -> new ResourceNotFoundException("menu not exist with id : " + id));
			    menuRepository.delete(menu);
			    Map<String,Boolean> response=new HashMap<>();
			    response.put("deleted",Boolean.TRUE);
			    return ResponseEntity.ok(response);
			    
	}
	
	
}
