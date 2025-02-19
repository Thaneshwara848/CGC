package com.example.demo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class EurekaClientDemo2Application {

	public static void main(String[] args) {
		SpringApplication.run(EurekaClientDemo2Application.class, args);
		System.out.println("Eureka Client 2 Running....!");
	}

}
