/*Q4. Find Most Frequent Element in Array 
Write a Java program to find the element that appears most frequently in an integer array using 
a HashMap. 
Example: 
Input: [1, 2, 2, 3, 1, 2] → Output: Most frequent element: 2  */

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

public class Frequency {
    public static void main(String [] arg){
        //Integer[] a={1, 2, 2, 3, 1, 2};

        System.out.println("Enter Size of Array");
        Scanner sc=new Scanner(System.in);
        Integer[] a=new Integer[sc.nextInt()];
        for(int i=0;i<a.length;i++){a[i]=sc.nextInt();}
        //create Map for integer and frequency
        Map<Integer,Integer> map=new HashMap<>();
         Integer freq;
        for(int i=0;i<a.length;i++){
            freq=(map.get(a[i]))==null?0:map.get(a[i]);
            map.put(a[i], freq+1);
        }
        //get minimium value of integer
        freq=Integer.MIN_VALUE;
        for(Entry<Integer, Integer> i:map.entrySet()){
            freq=i.getValue()>freq?i.getKey():freq;
        }
        System.out.println(freq +" is Last Most Frequenty Element");
        sc.close();
    }
    
}

# commit on 2025-07-15 00:00:00
