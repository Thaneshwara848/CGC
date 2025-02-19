package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.example.demo.service.UserService;

@Controller
public class HomeController {

	 	@Autowired
	    private UserService userService;

	 	@GetMapping("/login")
	 	public String login(@RequestParam String username, @RequestParam String password, Model model) {
	 	    boolean isValidUser = userService.validateUser(username, password);
	 	    if (isValidUser) {
	 	        return "redirect:/home"; // Redirect to the home page if login is successful
	 	    } else {
	 	        model.addAttribute("error", "Invalid credentials!");
	 	        return "login"; // Return the login view with an error message
	 	    }
	 	}


    @GetMapping("/home")
    public String home() {
        return "home";
    }
}
