//Date: 16/4/2025
//______________________________________________________________
 
 /* 1. Write a program to calculate the sum of numbers from 1 to n.
Input: n = 5
Output: 15 
var result = 0 , n=5;
for(var i=1;i<=n;i++){
    result=result+i;
}
console.log("Addition From 1 to "+n+" = "+result);


/*2. Factorial of a Number
Description: Write a program to compute the factorial of a given number n.
Input: n = 4
Output: 24

let fact=1,n=4,i;
for(i=n;i>0;i--){
	fact=fact*i;
}
console.log("Factoril of "+n+" = "+fact);


/*3. Fibonacci Series
Description: Write a program to print the first n Fibonacci numbers.
Input: n = 5
Output: 0 1 1 2 3*/


/*4. Prime Numbers
Description: Write a program to print all prime numbers up to a given number n.
Input: n = 10
Output: 2 3 5 7

var n=10,i;
console.log(" Prime Number is ");
for(i=1;i<=n;i++){
	var count=0;
	for(j=1;j<=i;j++){
		if(i%j==0){count++;}
	}
	if(count==2){
		console.log(i);
	}
}


/*5. Palindrome Number
Description: Write a program to check if a number is a palindrome.
Input: n = 121
Output: Palindrome

var n=151;
console.log("Before "+n);
let val=x.toString();
val=val.split('').reverse().join('');
if(val==x){
	return true;
}else{
	return false;
}*/

/*var x=155;
console.log(x);
let s=x.toString(),flag=true;

    for(var i=0,j=s.length-1;i<=j;i++,j--){
	    if(s.charAt(i)!=s.charAt(j)){flag=false;break;}
    }
    if(!flag){console.log("Not Palindrome");}
	else {console.log("Palindrome");}



/*6. Armstrong Number
Description: Write a program to check if a number is an Armstrong number.
Input: n = 153
Output: Armstrong */

let n=153,count=0,sum=0,pow=0;
for(pow=0,temp=n;temp>0;pow++){
	temp=Math.floor(temp/10);
}
//for(var i=n;n>0;i++){
	temp=n%10;
	n=Math.floor(n/10);
	//for(var ){}
//}
//console.log(pow);


/* 7. Reverse a Number
Description: Write a program to reverse the digits of a given number.
Input: n = 12345


Output: 54321


8. Multiplication Table
Description: Write a program to print the multiplication table for a number n.
Input: n = 4


Output: 4 8 12 16 20


9. Sum of Digits
Description: Write a program to calculate the sum of digits of a given number.
Input: n = 234


Output: 9


10. Count Digits
Description: Write a program to count the number of digits in a number n.
Input: n = 12345


Output: 5


11. Even Numbers
Description: Write a program to print all even numbers between 1 and n.
Input: n = 10


Output: 2 4 6 8 10


12. Odd Numbers
Description: Write a program to print all odd numbers between 1 and n.
Input: n = 10


Output: 1 3 5 7 9


13. Check for Prime Number
Description: Write a program to check if a number n is prime.
Input: n = 7


Output: Prime


14. Sum of Natural Numbers
Description: Write a program to find the sum of the first n natural numbers.
Input: n = 5


Output: 15


15. Find Maximum Number
Description: Write a program to find the maximum number between two numbers.
Input: a = 10, b = 20


Output: 20


16. Find Minimum Number
Description: Write a program to find the minimum number between two numbers.
Input: a = 10, b = 20


Output: 10


17. Sum of First N Odd Numbers
Description: Write a program to calculate the sum of the first n odd numbers.
Input: n = 4


Output: 16


18. Sum of First N Even Numbers
Description: Write a program to calculate the sum of the first n even numbers.
Input: n = 4


Output: 20


19. Print Inverted Number Pattern
Description: Write a program to print an inverted number pattern.
Input: n = 5


Output:

 Copy
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1


20. Sum of Squares of First N Natural Numbers
Description: Write a program to calculate the sum of squares of the first n natural numbers.
Input: n = 3


Output: 14


21. Reverse Pattern of Numbers
Description: Write a program to print numbers in reverse order.
Input: n = 5


Output:
 5 4 3 2 1


22. Print Triangle of Stars
Description: Write a program to print a triangle of stars.
Input: n = 4


Output:
 *
**
***
****


23. Print Inverted Star Pattern
Description: Write a program to print an inverted star pattern.
Input: n = 4


Output:
 ****
***
**
*


24. Check Leap Year
Description: Write a program to check if a given year is a leap year.
Input: year = 2020


Output: Leap Year


25. Find the Second Largest Number
Description: Write a program to find the second largest number from a set of two numbers.
Input: a = 10, b = 20


Output: 10


26. Multiplication of Two Numbers
Description: Write a program to multiply two numbers using loops.
Input: a = 3, b = 5


Output: 15


27. Sum of All Numbers in a Range
Description: Write a program to calculate the sum of all numbers between m and n.
Input: m = 1, n = 5


Output: 15


28. Sum of Digits Using While Loop
Description: Write a program to calculate the sum of digits using a while loop.
Input: n = 123


Output: 6


29. Prime Factorization
Description: Write a program to perform prime factorization of a number n.
Input: n = 12


Output: 2 2 3


30. Perfect Number
Description: Write a program to check if a number is perfect.
Input: n = 6


Output: Perfect


31. Sum of Cubes of First N Natural Numbers
Description: Write a program to calculate the sum of cubes of the first n natural numbers.
Input: n = 3


Output: 36


32. Multiplication of Numbers from 1 to N
Description: Write a program to find the multiplication of all numbers from 1 to n.
Input: n = 4


Output: 24


33. Print Square of a Number
Description: Write a program to print the square of a number.
Input: n = 4


Output: 16


34. Find Sum of All Odd Numbers in a Range
Description: Write a program to find the sum of all odd numbers in a range from m to n.
Input: m = 1, n = 10


Output: 25


35. Print Right-Angled Triangle Pattern of Numbers
Description: Write a program to print a right-angled triangle of numbers.
Input: n = 4


Output:

 1
12
123
1234


36. Check for Odd or Even
Description: Write a program to check whether a given number is odd or even.
Input: n = 4


Output: Even


37. Print Square Star Pattern
Description: Write a program to print a square pattern using stars.
Input: n = 4


Output:

 markdown
Copy
****
****
****
****


38. Count the Number of Prime Numbers in a Range
Description: Write a program to count the number of prime numbers between m and n.
Input: m = 1, n = 10


Output: 4


39. Calculate Average of First N Natural Numbers
Description: Write a program to calculate the average of the first n natural numbers.
Input: n = 5


Output: 3.0


40. Number Pyramid Pattern
Description: Write a program to print a number pyramid pattern.
Input: n = 4


Output:

     1
   121
  12321
 1234321


41. Sum of Odd Numbers from 1 to N
Description: Write a program to calculate the sum of all odd numbers from 1 to n.
Input: n = 7


Output: 16


42. Find the Factorial Using While Loop
Description: Write a program to calculate the factorial of a number using a while loop.
Input: n = 5


Output: 120


43. Sum of First N Even Numbers
Description: Write a program to calculate the sum of first n even numbers.
Input: n = 4


Output: 20
44. Print Star Pyramid
Description: Write a program to print a pyramid using stars.
Input: n = 5
Output:

     *
   ***
  *****
 *******
*********


45. Multiplication of Digits
Description: Write a program to calculate the multiplication of digits of a number.
Input: n = 123


Output: 6


46. Print Decreasing Number Pattern
Description: Write a program to print a decreasing number pattern.
Input: n = 5


Output:

 Copy
5 4 3 2 1
4 3 2 1
3 2 1
2 1
1


47. Count Non-Zero Digits
Description: Write a program to count the number of non-zero digits in a number.
Input: n = 1203


Output: 3


48. Sum of First N Divisible by 3
Description: Write a program to calculate the sum of the first n numbers divisible by 3.
Input: n = 4


Output: 18


49. Perfect Square Numbers
Description: Write a program to find perfect square numbers up to n.
Input: n = 20


Output: 1 4 9 16


50. Find Greatest Common Divisor (GCD)
Description: Write a program to find the greatest common divisor (GCD) of two numbers.
Input: a = 12, b = 15


Output: 3


51. Print Number Pattern
Description: Write a program to print a number pattern.
Input: n = 5


Output:
 1
12
123
1234
12345


52. Find Least Common Multiple (LCM)
Description: Write a program to find the least common multiple (LCM) of two numbers.
Input: a = 12, b = 15


Output: 60


53. Print Star Box
Description: Write a program to print a star box of size n.
Input: n = 4


Output:
 ****
****
****
****


54. Check for Perfect Cube
Description: Write a program to check if a number is a perfect cube.
Input: n = 27


Output: Perfect Cube


55. Print Increasing Pattern of Numbers
Description: Write a program to print increasing pattern of numbers.
Input: n = 4


Output:
 1
12
123
1234


56. Count Numbers Divisible by 5
Description: Write a program to count the numbers divisible by 5 between 1 and n.
Input: n = 20


Output: 4


57. Sum of Divisors
Description: Write a program to calculate the sum of divisors of a number.
Input: n = 12


Output: 28


58. Number of Factors
Description: Write a program to count the number of factors of a number.
Input: n = 12


Output: 6


59. Print Hollow Square
Description: Write a program to print a hollow square pattern.
Input: n = 5


Output:
 *****
*   *
*   *
*   *
*****


60. Power of a Number
Description: Write a program to calculate the power of a number x^y.
Input: x = 2, y = 3


Output: 8


61. Sum of First N Prime Numbers
Description: Write a program to calculate the sum of the first n prime numbers.
Input: n = 4


Output: 28


62. Sum of First N Perfect Squares
Description: Write a program to calculate the sum of the first n perfect squares.
Input: n = 4


Output: 30


63. Count Digits Divisible by 3
Description: Write a program to count the digits divisible by 3 in a number.
Input: n = 123456


Output: 2


64. Print Right-Angle Triangle Pattern of Numbers
Description: Write a program to print a right-angle triangle of numbers.
Input: n = 4


Output:

 
1
12
123
1234


65. Calculate Sum of All Divisors
Description: Write a program to calculate the sum of all divisors of a number.
Input: n = 12


Output: 28


66. Print Number Pyramid
Description: Write a program to print a pyramid of numbers.
Input: n = 4


Output:
     1
   121
  12321
 1234321


67. Sum of All Divisors of a Number
Description: Write a program to calculate the sum of all divisors of a number.
Input: n = 12


Output: 28


68. Sum of Factors of a Number
Description: Write a program to calculate the sum of factors of a number.
Input: n = 12


Output: 28


69. Print Hollow Right-Angle Triangle Pattern
Description: Write a program to print a hollow right-angle triangle pattern.
Input: n = 4


Output:

 *
* *
*  *
****


70. Number Pyramid with Numbers
Description: Write a program to print a number pyramid.
Input: n = 5


Output:

     1
   121
  12321
 1234321
123454321

*/
# commit on 2025-09-24 00:00:00
