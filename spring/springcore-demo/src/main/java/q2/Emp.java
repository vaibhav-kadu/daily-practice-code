package q2;

import org.springframework.stereotype.Component;

@Component
public class Emp {
    private int id=1;
    private String name="Neha";
    private double salary=60000;

    public String toString() {
        return id + " " + name + " " + salary;
    }
}

# commit on 2025-04-22 00:00:00
