package com.example.demo.Controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MyController {

    @GetMapping("/users/{id}")
    public String getUser(@PathVariable String id) {
        // Mock data for simplicity
        return "User ID: " + id + ", Name: Thanesh";
    }
}
