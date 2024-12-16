package com.example.jdbc;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class DB {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public List<Emp> getAllEmployees() {
        String sql = "SELECT * FROM emp";
        return jdbcTemplate.query(sql, new EmpRowMap());
    }
}

# commit on 2024-12-17 00:00:00
