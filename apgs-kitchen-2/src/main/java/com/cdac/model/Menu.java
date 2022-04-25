package com.cdac.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "menu_details")
public class Menu {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "food_id")
	private long foodId;
	
	@Column(name = "image_url")
	private String url;
	
	@Column(name = "food_name")
	private String title;
	
	private String description;
	private int price;
	
	@Column(name = "food_category")
	private String category;

	public long getFoodId() {
		return foodId;
	}

	public void setFoodId(long foodId) {
		this.foodId = foodId;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public int getPrice() {
		return price;
	}

	public void setPrice(int price) {
		this.price = price;
	}

	public String getCategory() {
		return category;
	}

	public void setCategory(String category) {
		this.category = category;
	}

	public Menu() {
		super();
		// TODO Auto-generated constructor stub
	}

	public Menu(String url, String title, String description, int price, String category) {
		super();
		this.url = url;
		this.title = title;
		this.description = description;
		this.price = price;
		this.category = category;
	}

	
	
}
