package com.example.demo.Controlleers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Client1Controller {

    @GetMapping("/client2/info")
    public String getInfo() {
        return "This is Client 2";
    }
}
