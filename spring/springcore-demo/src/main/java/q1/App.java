package q1;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class App {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		
		ApplicationContext c=new ClassPathXmlApplicationContext("appContext.xml");

        Employee e= (Employee) c.getBean("emp");
        //EmpAnno en =(EmpAnno) c.getBean("emp");
        e.display();
        //en.display();

	}

}

# commit on 2025-01-27 00:00:00
