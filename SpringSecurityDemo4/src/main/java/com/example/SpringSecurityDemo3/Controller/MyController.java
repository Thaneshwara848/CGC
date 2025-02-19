package com.example.SpringSecurityDemo3.Controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;

@RestController
public class MyController {

//	 	@GetMapping("/welcome")
//	    public String welcome()
//	    {
//	         return "Hey! welcome to Spring Security ";
//	    }
	 	@GetMapping("/welcome")
	    public String welcome(HttpServletRequest request)
	    {
	         return "Hey! welcome "+request.getSession().getId();
	    }
}
