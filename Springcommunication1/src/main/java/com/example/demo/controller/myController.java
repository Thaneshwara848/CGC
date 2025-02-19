package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.model.Product;
import com.example.demo.service.services;

@RestController
public class myController {
	@Autowired
	private services serv;
	@GetMapping("/getProductS1")
	public List<Product> FindAllModel() {
		List<Product> model = new ArrayList<Product>();
		model = serv.findAllMyModel();
		return model;
	}
	
	@GetMapping("/getProductS1/{id}")
	public Product findById(@PathVariable int id)
	{
		return serv.findById(id);
		
	}
	@PostMapping("/setProdS1")
	public  void setProd(@RequestBody Product m) 
	{
		serv.save(m);
	}
	@DeleteMapping("/deleteProdS1/{id}")
	public void deleteProd(@PathVariable int id)
	{
		serv.delete(id);
	}
	@PutMapping("/updateProdS1/{id}")
	public void updateProd(@PathVariable int id, @RequestBody Product model2)
	{
		serv.update(id, model2);
	}
}
