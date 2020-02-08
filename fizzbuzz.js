/**
* Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
* For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
* When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5
* (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

//FizzBuzz Parte 1
/*
let a = 1;

for (let i = 0; i < 100; i++) {
  if (a % 3 === 0) {
    console.log("Fizz");
  } else if (a % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
  a++;
}
*/


//FizzBuzz Parte 2
let a = 1;

for (let i = 0; i < 100; i++) {
  if (a % 5 === 0 && a % 3 === 0) {
    console.log("FizzBuzz");
  } else if (a % 3 === 0) {
    console.log("Fizz");
  } else if (a % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(a);
  }
  a++;
}