package com.validation.main.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.validation.main.model.Product;

public interface ProductRepository extends JpaRepository<Product,Integer> {

}
