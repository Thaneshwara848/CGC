package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;
import org.springframework.context.annotation.Bean;
import org.springframework.web.client.RestTemplate;

@SpringBootApplication
@EnableFeignClients
public class Springcommunication3Application {
	
	
	public static void main(String[] args) {
		SpringApplication.run(Springcommunication3Application.class, args);
		System.out.println("Application 4 is running  with Fiegn CLient .... !");
	}

}
