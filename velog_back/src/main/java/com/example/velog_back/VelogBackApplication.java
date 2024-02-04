package com.example.velog_back;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class VelogBackApplication {

    public static void main(String[] args) {
        SpringApplication.run(VelogBackApplication.class, args);
    }

}
