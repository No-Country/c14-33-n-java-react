package com.noCountry.webApp;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class WebAppApplication {

    public String PORT = System.getenv("PORT");

    public static void main(String[] args) {
        SpringApplication.run(WebAppApplication.class, args);

    }
}
