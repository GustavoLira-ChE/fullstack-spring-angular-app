package com.training.ecommerce.dao;

import org.springframework.data.jpa.repository.JpaRepository;

import com.training.ecommerce.entities.ProductCategory;

public interface ProductCategoryRepository extends JpaRepository<ProductCategory,Long>{
    
}
