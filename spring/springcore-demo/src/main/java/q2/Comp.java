package q2;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class Comp {

    @Autowired 
    private Emp emp;

    public void showEmp() {
        System.out.println(emp);
    }
}

# commit on 2025-01-29 00:00:00
