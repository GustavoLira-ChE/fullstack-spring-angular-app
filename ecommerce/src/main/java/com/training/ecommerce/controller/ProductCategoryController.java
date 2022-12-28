package com.training.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.ecommerce.entities.ProductCategory;
import com.training.ecommerce.restmodels.ProductCategoryRestModel;
import com.training.ecommerce.service.ProductCategoryService;

@RestController
@RequestMapping("/api/category")
public class ProductCategoryController {
    
    @Autowired
    private ProductCategoryService productCService;

    @GetMapping("/{id}")
    public ProductCategory findProductCategoryById(@PathVariable(name="id") Long id){
        return productCService.getProductCategoryById(id);
    }

    @GetMapping
    public List<ProductCategory> findProductCategories(){
        return productCService.getAllProductCategory();
    }

    @PostMapping
    public ProductCategory saveProductCategory(@RequestBody ProductCategoryRestModel category){
        return productCService.saveNewProductCategory(category);
    }

    @DeleteMapping("/{id}")
    public boolean deleteProductCategoryById(@PathVariable(name="id") Long id){
        return productCService.deleteProductCategoryById(id);
    }
}
