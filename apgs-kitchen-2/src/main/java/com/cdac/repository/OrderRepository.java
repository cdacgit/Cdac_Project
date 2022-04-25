package com.cdac.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cdac.model.Order;


@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {

}