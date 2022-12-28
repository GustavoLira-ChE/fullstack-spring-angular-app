package com.training.ecommerce.service;

import java.time.LocalDate;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.ecommerce.dao.ProductRepository;
import com.training.ecommerce.entities.Product;
import com.training.ecommerce.entities.ProductCategory;
import com.training.ecommerce.restmodels.ProductRestModel;

@Service
public class ProductService {

    @Autowired
    private ProductRepository productRepo;
    @Autowired
    private ProductCategoryService productCategoryService;

    public Product getProductById(Long id){
        return productRepo.findById(id).orElse(null);
    }

    public List<Product> getAllProduct() {
        return productRepo.findAll();
    }

    public Product saveNewProduct(ProductRestModel newProduct){
        Product productSaved = new Product();
        ProductCategory productCategory = productCategoryService.getProductCategoryById(newProduct.getCategoryId());

        productSaved.setSku(newProduct.getSku());
        productSaved.setName(newProduct.getName());
        productSaved.setDescription(newProduct.getDescription());
        productSaved.setUnitPrice(newProduct.getUnitPrice());
        productSaved.setImageUrl(newProduct.getImageUrl());
        productSaved.setActive(newProduct.isActive());
        productSaved.setUnitsInStock(newProduct.getUnitsInStock());
        productSaved.setDateCreated(LocalDate.now());
        productSaved.setCategory(productCategory);
        return productRepo.save(productSaved);
    }

    public boolean deleteProductById(Long id){
        if(productRepo.existsById(id)){
            productRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }
    
}