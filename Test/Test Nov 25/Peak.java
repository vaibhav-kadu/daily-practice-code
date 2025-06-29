/*Q2. Find Peak Element 
Concept: A peak is greater than its neighbors. Traverse and check this condition. 
Use Case: Find local maximum in signal processing or profit tracking. 
Input: arr = [1, 3, 20, 4, 1, 0] 
Output: Peak element found: 20*/

import java.util.*;
public class Peak{
	public static void main(String [] arg){
		//int [] a={1, 3, 20, 4, 1, 0};

		Scanner sc=new Scanner(System.in);
		System.out.println("Enter the size of Array");
		int [] a= new int[sc.nextInt()];
		System.out.println("Enter "+a.length+" Elements");
		for(int i=0;i<a.length;i++){a[i]=sc.nextInt();}
		//Storing min element
		int pk=Integer.MIN_VALUE;

		for(int i=0;i<a.length;i++){
			//Storing max peak elementin pk every time
			if(pk<a[i]){
				pk=a[i];
			}
		}

		System.out.println(pk+" is the Peak Element");

		sc.close();
		
	}
}
# commit on 2025-06-30 00:00:00
