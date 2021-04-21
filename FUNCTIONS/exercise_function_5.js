/*
1.  Find the min and max element in the following array and switch their places. 
    Print out the modified array in the console.
    Input:  [ 3, 500, 12, 149, 53, 414, 1, 19 ]
    Output: [ 3, 1, 12, 149, 53, 414, 500, 19 ]
*/
function swap_min_max(arr){ 
    var min_num = arr[0];
    var max_num = arr[0];
    var min_index = 0;
    var max_index = 0;

    for (i = 0; i<arr.length-1; i++){
        if (min_num > arr[i]){
            min_num = arr[i];
            min_index = i;
        }
        if (max_num < arr[i]){
            max_num = arr[i];
            max_index = i;
        }
    }
    arr[min_index] = max_num;
    arr[max_index] = min_num;
    return arr
}

var arr = [3, 500, 12, 149, 53, 414, 1, 19 ];
var result = swap_min_max(arr);
console.log(result);

/*
2.  Use the following array to make a new one by dividing its values by two and adding 5. 
    If a given element's value is 0, change it to 20.

    Input:  [ 3, 500, -10, 149, 53, 414, 1, 19 ]
    Output: [ 6.5, 255, 20, 79.5, 31.5, 212, 5.5, 14.5 ]
*/

function new_array(arr){

    for (var i = 0; i < arr.length; i++){

        var x = arr[i]/2+5;

        if (x === 0) {

            x = 20;
        }
        arr[i]=x;
    }return arr;
}

var result = new_array([ 3, 500, -10, 149, 53, 414, 1, 19 ]);
console.log(result);

/*
3.  Initialize two arrays. 
    The first one should contain student names, 
    the second one the number of points for each student. 
    Display students' names with their corresponding grade. 

    Use the following ranges:
    51-60 -> 6,
    61-70 -> 7,
    71-80 -> 8,
    81-90 -> 9,
    91-100 -> 10.

    Input: 
    [ "Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill" ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]
    Output: 
    Bill acquired 59 points and earned 6. Micahel acquired 50 points and failed to complete the exam.
*/
function check_grades(arr_names, arr_points){

    var grades = "";

    for ( i = 0 ; i < arr_names.length; i++){

        var grade = arr_points[i];
        var name = arr_names[i];
        
        switch (true) {
            case grade < 51:
                grades += name +" acquired " +grade+ " points and failed to complete the exam. "
                break;
            case (grade >= 51 && grade <= 60):
                grades += name +" acquired " +grade+ " points and earned 6. "
                break;
            case (grade >= 61 && grade <= 70):
                grades += name +" acquired " +grade+ " points and earned 7. "
                break;
            case (grade >= 71 && grade <= 80):
                grades += name +" acquired " +grade+ " points and earned 8. "
                break;
            case (grade >= 81 && grade <= 90):
                grades += name +" acquired " +grade+ " points and earned 9. "
                break;
            case (grade >= 91 && grade <= 100):
                grades += name +" acquired " +grade+ " points and earned 10. "
                break;
        }

    }
    return grades

}

var result = check_grades(["Micahel", "Anne", "Frank", "Joe", "John", "David", "Mark", "Bill"  ], [ 50, 39, 63, 72, 99, 51, 83, 59 ]);
console.log(result);

/*
4.  (skip :))Sort a previously defined array. 
    Place its sorted values into a new array whose values are equivalent to the first array's values multiplied by 2.
    Input: [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    Output: [ 2, 10, 12, 16, 22, 24, 26, 30 ]
*/
function sort1 (arr) {

    var newArr = [];
    var position = 0;
    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > min) {
            min = arr[i];
        }
    }

    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < arr.length; k++) {
            if (arr[k] !== null) {
                if (max > arr[k]) {
                    max = arr[k];
                    position = k;
                }
            }
        }
        newArr[j] = max*2;
        arr[position] = null;
        max = min;
    }
    return newArr;
}

console.log(sort1([13, 11, 15, 5, 6, 1, 8, 12]));

console.log('\n');

/*
5.  (skip :))Sort a previously defined array in a descending order and display it in the console.
    Input:  [ 13, 11, 15, 5, 6, 1, 8, 12 ]
    Output: [ 15, 13, 12, 11, 8, 6, 5, 1 ]

*/
function sort (arr) {

    var newArr = [];
    var position = 0;
    var max = arr[0];
    var min = arr[0];

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }

    for (var j = 0; j < arr.length; j++) {
        for (var k = 0; k < arr.length; k++) {
            if (arr[k] !== null) {
                if (max < arr[k]) {
                    max = arr[k];
                    position = k;
                }
            }
        }
        newArr[j] = max;
        arr[position] = null;
        max = min;
    }
    return newArr;
}

console.log(sort([13, 11, 15, 5, 6, 1, 8, 12]));

console.log('\n');

/*
6.  Write a program that uses a loop to add all the even numbers from 1 to 1000 and subtracts all the odd numbers 1 to 500 from the calculated sum. 
    The result should then be multiplied by 12.5 and displayed in console.
    Output: 2350000
*/

function somesome(){
    var sum = 0;
    for (var i = 0; i <= 1000; i++){

        if(i % 2 === 0){
            sum += i
        }else{
            if(i < 500){
                sum -= i
            }
        }
    }
    return sum * 12.5;
}

var result = somesome();
console.log(result);

/*
7.  Define a 10 element array. Take the first two letters from every string (that has at least 2 letters) in the array and create a new string from them. 
    Print it out in the console.
    Input: [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]

    Output: AnStJoJoDaMa
*/

function takeLetters(arr){
    var str = "";
    for (var i = 0; i < arr.length; i++){
        if(typeof arr[i] === "string" && arr[i].length > 1 ){
            str += arr[i][0];
            str += arr[i][1];
        }
    }
    return str;
}

var result = takeLetters( [ "M", "Anne", 12, "Steve", "Joe", "John", "David", "Mark", true, "A" ]);
console.log(result);

/*
8.  Write a program that takes a string and prints its characters out in reversed order in the console.
    Input:  Belgrade Institute of Technology
    Output: ygolonhceT fo etutitsnI edargleB
*/

function reverse(str){
    var new_str_arr = [];
    var new_str = "";
    for (var i = 0, j=str.length-1; i < str.length; i++, j--){
        new_str_arr[j] = str[i];
    }

    for (var i = 0; i < new_str_arr.length; i++){
        new_str += new_str_arr[i];
    }
    return new_str;
}

var result = reverse("Belgrade Institute of Technology");
console.log(result);

/*

9.  Write a program that displays all the combinations of two numbers between 1 and 7. 
    Don't display two of the same numbers at the same time. 
    Display the number of possible combinations, as well. (E.g. (1.2),(2,1) is allowed, but not (1,1), (2,2)...).
*/

function combinations(num1, num2){
   var  comb = [];
   var  x = 0;
    for (var i = num1; i <= num2; i++){
        for (var j = num1; j <= num2; j++){
            if(i!==j){
                comb[x] = ""+i+" "+j;
                x++;
                comb[x] = ""+j+" "+i;
                x++;
            }
        }
    }
    return comb;
}

var result = combinations(1,7);
console.log(result);
console.log(result.length);

/*
10. Write a program that checks if the entered number is a prime number (i.e. divisible only by 1 and by itself).
    Input:  17    | 15
    Output: true  | false
*/

function checkPrime(n) {

    if(n == 1){
        return true
    }

    for (i = 2; i <= n / 2; i++) {
        if (n % i == 0) {
          return false
        }
      }
    return true
}

var result = checkPrime(17);
console.log(result);
var result = checkPrime(15);
console.log(result);

/*
11. Check if a given string is a palindrome (spaces are ignored).
    Input:  eye  | Geek  | a nut for a jar of tuna
    Output: true | false | true
*/

function check_palindrome(str){
    var str_arr_reverse = [];
    var str_arr = [];

    var old_str_nospace = "";
    var reverse_str = "";

    for (var i = 0, j=str.length-1; i < str.length; i++, j--){
        str_arr_reverse[j] = str[i];
        str_arr[i] = str[i];
    }

    for (var i = 0; i < str_arr.length; i++){
        if(str_arr[i] !== " "){
            old_str_nospace += str_arr[i];
        }
        if(str_arr_reverse[i] !== " "){
            reverse_str += str_arr_reverse[i];
        }
    }

    if(reverse_str === old_str_nospace){
        return true;
    }
    return false;
}

var result = check_palindrome("eye");
console.log(result);
var result = check_palindrome("Geek");
console.log(result);
var result = check_palindrome("a nut for a jar of tuna");
console.log(result);

/*
12. Write a program that calculates the greatest common divisor of two integers. 
    Note: The greatest common divisor of two non-zero integers is the greatest positive number that divides both numbers with no remainder.
    Input:  192 42 | 81 9
    Output: 6      | 9
*/

function greatest_common_divisor(num1, num2){

    if (num1 == 0)
        return num2;

    while (num2 != 0) {
        if (num1 > num2)
            num1 = num1 - num2;
        else
        num2 = num2 - num1;
    }

    return num1;
 }
 
 var result = greatest_common_divisor(192, 42);
 console.log(result);
 var result = greatest_common_divisor(81, 9);
 console.log(result);