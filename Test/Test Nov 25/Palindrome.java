/*Q7. Check if a Given String is a Palindrome 
Write a Java program to check whether a given string is a palindrome or not. 
A string is considered a palindrome if it reads the same forward and backward, ignoring case 
and spaces. 
Example 1: 
Input: madam 
Output: Palindrome 
Example 2: 
Input: RaceCar 
Output: Palindrome */

import java.util.*;

public class Palindrome {
    public static void main(String [] arg){
        String str;
            //str="Madam";
            //str="RaceCar";
            str="Madama";        
       System.out.println("Enter String");
        Scanner sc=new Scanner(System.in);
        str=sc.nextLine();
        String a= str.toLowerCase().trim();
        boolean flag=true;
        for(int i=0,j=a.length()-1;i<j;i++,j--){
            if(a.charAt(i)!=a.charAt(j)){
                flag=false;
            }
        }
        if(flag) System.out.println("Palindrome");
        else System.out.println("Not Palindrome");
        sc.close();
    }
}

# commit on 2025-06-24 00:00:00
