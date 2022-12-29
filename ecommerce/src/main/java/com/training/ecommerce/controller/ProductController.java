package com.training.ecommerce.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.training.ecommerce.entities.Product;
import com.training.ecommerce.restmodels.ProductRestModel;
import com.training.ecommerce.service.ProductService;

@RestController
@RequestMapping("/api/products")
@CrossOrigin("http://localhost:4200")
public class ProductController {
    
    @Autowired
    private ProductService productService;

    @GetMapping("/{id}")
    public Product findById(@PathVariable(name = "id") Long id){
        return productService.getProductById(id);
    }

    @GetMapping
    public List<Product> findAllProducts(){
        return productService.getAllProduct();
    }

    @PostMapping
    public Product saveProduct(@RequestBody ProductRestModel product){
        return productService.saveNewProduct(product);
    }

    @DeleteMapping("/{id}")
    public boolean deleteById(@PathVariable(name = "id") Long id){
        return productService.deleteProductById(id);
    }
}
