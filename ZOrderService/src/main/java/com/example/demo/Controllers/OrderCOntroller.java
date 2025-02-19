package com.example.demo.Controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderCOntroller {

    @GetMapping("/orders/{id}")
    public String getOrder(@PathVariable String id) {
        // Mock data for simplicity
        return "Order ID: " + id + ", Item: Laptop";
    }
}
