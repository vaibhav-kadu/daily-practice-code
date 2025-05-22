package q1;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

@Component
public class EmpAnno {
	    @Value("1")
	    private int id;
	    @Value("vaibhav anotation")
	    private String name;
	    @Value("20000")
	    private double salary;

	    public void display() {
	        System.out.println(id + " " + name + " " + salary);
	    }
	}
# commit on 2025-05-23 00:00:00
