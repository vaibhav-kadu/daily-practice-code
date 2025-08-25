package com.example.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.List;

@SpringBootApplication
public class JdbcApplication implements CommandLineRunner {

    @Autowired
    private DB empDb;

    public static void main(String[] args) {
        SpringApplication.run(JdbcApplication.class, args);
    }

    @Override
    public void run(String... args) {
        List<Emp> list = empDb.getAllEmployees();
        list.forEach(System.out::println);
    }
}

# commit on 2025-08-26 00:00:00
