/*
1.  Write a for loop that will iterate from 0 to 15. 
    For each iteration, it will check if the current number is odd or even, and display a message to the screen.
*/

    for (var x = 0; x < 15; x++){
        if (x===0){
            console.log("ZERO");
        }
        else if (x%2===0){
            console.log("EVEN")
        }else{
            console.log("ODD");
        }
    }

/*
2.  Write a program to sum the multiples of 3 and 5 under 1000.
*/
    var sum =0;
    for(var x = 0; x < 1000; x++){
        if(x % 3 === 0 && x % 5 === 0){
            sum = sum+x;
        }
    }
    console.log(sum);

/*
3.  Write a program to compute the sum and product of an array of integers.
*/

    var array = [1, 4, 7, 9, 12];
    var array_sum= 0;
    var array_product = 1;

    for (var x = 0; x < array.length; x++) {
    
        array_sum += array[x];
    }
    console.log(array_sum);

    for (var x = 0; x < array.length; x++) {

        array_product *= array[x];
    }
    console.log(array_product);

/*
4.  Write a program which prints the elements of the following array as a single string.

    var x = ['1', 'A', 'B', "c", "r", true, NaN, undefined];
*/

    var x = [1, "A", "B", "c", 'r', true, NaN, undefined];
    result = '';

    for (var i = 0; i < x.length; i++) {
        result += x[i];
    }
    console.log(result);

/*
5.  Write a program that prints the elements of the following array.

    var a = [[1, 2, 1, 24], [8, 11, 9, 4], [7, 0, 7, 27]];
*/

    var a = [[1, 2, 1, 24], [8, 11, 9, 4],[7, 0, 7, 27]];

    for (var i = 0; i < a.length; i++) {
            var element = a[i];

        for (var x = 0; x < element.length; x++) {
            console.log(element[x]);
        }
    }

/*
6.  Write a program that outputs the sum of squares of the first 20 numbers. 
*/

    var sum_squares = 0;
    for (var x = 0; x < 20; x++) {
        sum_squares += (x * x);   
    }
    console.log(sum_squares);  

/*
7.  Write a program that computes average marks of the following students. 
    Then use this average to determine the corresponding grade. 
	
    David   80
    Marko   77
    Dany    88
    John    95
    Thomas  68

    The grades are computed as follows :

    < 60%   F
    < 70%   D
    < 80%   C
    < 90%   B
    < 100%  A
*/

    var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

    var Avgmarks = 0;

    for (var i=0; i < students.length; i++) {
            Avgmarks = Avgmarks + students[i][1];
    }
    var avg =  (Avgmarks)/students.length;

    console.log("Average grade: " + avg);

    if (avg < 60){
        console.log("Grade : F");      
    } else if (avg < 70) {
        console.log("Grade : D");
    } else if (avg < 80) {
        console.log("Grade : C"); 
    } else if (avg < 90) {
        console.log("Grade : B");
    } else if (avg < 100) {
        console.log("Grade : A"); 
    }

/*
8.  Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. 
    For numbers divisible by 3, print "Fizz" instead of the number, 
    and for numbers divisible by 5 (and not 3), print "Buzz" instead. 
    When you have that working, modify your program to print "FizzBuzz", 
    for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

    for (var x = 0; x < 100; x++)
    {
        if (x % 5 === 0 && x % 3 === 0)
        {
            console.log("FizzBuzz");
        }
        else if (x % 3 === 0)
        {
            console.log("FIZZ");
        }
        else if (x % 5 === 0)
        {
            console.log("BUZZZ");
        }
        else
        {
            console.log(x);
        }
    }