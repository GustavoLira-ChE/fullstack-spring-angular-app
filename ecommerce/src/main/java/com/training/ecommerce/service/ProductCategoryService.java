package com.training.ecommerce.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.training.ecommerce.dao.ProductCategoryRepository;
import com.training.ecommerce.entities.ProductCategory;
import com.training.ecommerce.restmodels.ProductCategoryRestModel;

@Service
public class ProductCategoryService {
    
    @Autowired
    private ProductCategoryRepository productCRepo;

    public ProductCategory getProductCategoryById(Long id){
        return productCRepo.findById(id).orElse(null);
    }

    public List<ProductCategory> getAllProductCategory(){
        return productCRepo.findAll();
    }

    public ProductCategory saveNewProductCategory(ProductCategoryRestModel newProductCategory) {
        ProductCategory productCategorySaved = new ProductCategory();

        System.out.println(newProductCategory.getCategoryName());
        productCategorySaved.setCategoryName(newProductCategory.getCategoryName());

        return productCRepo.save(productCategorySaved);
    }

    public boolean deleteProductCategoryById(Long id){
        if(productCRepo.existsById(id)){
            productCRepo.deleteById(id);
            return true;
        } else {
            return false;
        }
    }

}
