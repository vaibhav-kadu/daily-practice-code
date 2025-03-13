/*Q5. Check if Two Strings are Anagrams Using HashMap 
Description: 
Use a HashMap<Character, Integer> to compare the character counts of both strings and 
determine if they are anagrams. 
Example: 
Input:  str1 = "listen", str2 = "silent" 
Output:  true 
Explanation: 
Both strings contain the same characters with the same frequency.   */

import java.util.HashMap;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Scanner;

public class Anagrams {
    public static void main(String [] arg){
        String str1="listen";
        String str2="silentm";



        //System.out.println("Enter Size of Array");
        //Scanner sc=new Scanner(System.in);
        // create 2 Map
        Map<Character,Integer> map1=new HashMap<>();
        Map<Character,Integer> map2=new HashMap<>();
         Integer freq1;
        for(int i=0;i<str1.length();i++){
            freq1=(map1.get(str1.charAt(i)))==null?0:map1.get(str1.charAt(i));
            map1.put(str1.charAt(i), freq1+1);
        }
         Integer freq2;
        for(int i=0;i<str2.length();i++){
            freq2=(map2.get(str2.charAt(i)))==null?0:map2.get(str2.charAt(i));
            map2.put(str2.charAt(i), freq2+1);
        }


        //Compair Map 
        if(map1.equals(map2)) System.out.println("Anagram");
        else System.out.println("Not Anagram");
        //sc.close();
    }
    
}

# commit on 2025-03-14 00:00:00
