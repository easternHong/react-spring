package com.eastern.shipservers;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@EnableJpaRepositories
@SpringBootApplication
public class ShipServersApplication {

    public static void main(String[] args) {
        SpringApplication.run(ShipServersApplication.class, args);
    }
}
