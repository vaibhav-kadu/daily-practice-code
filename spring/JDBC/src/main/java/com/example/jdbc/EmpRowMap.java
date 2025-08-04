package com.example.jdbc;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class EmpRowMap implements RowMapper<Emp> {

	    @Override
	    public Emp mapRow(ResultSet rs, int rowNum) throws SQLException {
	        Emp emp = new Emp();
	        emp.setId(rs.getInt("id"));
	        emp.setName(rs.getString("name"));
	        emp.setEmail(rs.getString("email"));
	        emp.setContact(rs.getString("contact"));
	        return emp;
	    }

}

# commit on 2025-08-05 00:00:00
