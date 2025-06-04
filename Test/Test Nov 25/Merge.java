/*Q1.Write a Java program to merge two integer arrays (of possibly different sizes) into a single 
array such that elements from the first array are taken in forward order and elements from the 
second array are taken in reverse order alternately. 
If one array is longer than the other, append the remaining elements at the end. 
Example: 
Input: 
A = [1, 2, 3, 4, 5] 
B = [10, 20, 30, 40] 
Output: 
[1, 40, 2, 30, 3, 20, 4, 10, 5] */

import java.util.*;

public class Merge{
    public static void main(String [] arg){
		int [] a={1, 2, 3, 4, 5};
		int [] b={10, 20, 30, 40};
/*		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter Size Of 1st Array");
        int [] a=new int[sc.nextInt()];
        System.out.println("Enter "+a.length+" Elements");
		for(int i=0;i<a.length;i++){
			a[i]=sc.nextInt();
		}
		System.out.println("Enter Size Of 2nd Array");
        int [] b=new int[sc.nextInt()];
        System.out.println("Enter "+b.length+" Elements");
		for(int i=0;i<b.length;i++){
			b[i]=sc.nextInt();
		}        
*/
        int [] c=new int[a.length+b.length];
        int i=0,j=0,k=b.length-1;
        while(i<c.length){
			//add element of array a and increase index of a as well as c;
           if(j<a.length){
                c[i]=a[j];
                j++;
            }
			
			//add element of array b and increase index of b as well as c;
            if(k>=0){
                c[i]=b[k];
                k--;
            }

            i++;

        }
        System.out.println(Arrays.toString(a)+"\n"+Arrays.toString(b)+"\n"+Arrays.toString(c));
    }
}
# commit on 2025-06-05 00:00:00
