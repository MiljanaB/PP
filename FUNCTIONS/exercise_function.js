/*
1.  Write a program that calculates the maximum of two given numbers.
*/

function maximum(a,b){
    if(a>b) {
        return a;
    }else if(b>a){
        return b;
    }else {
        return 'sve ostalo';
    }
}
var result = maximum(3,7);
console.log(result);

/*
2.  Write a program that checks if a given number is odd.
*/

function isOdd(a){
    if (a%2 !==0) {
        return true;
    } return false
}

var result = isOdd(9);
console.log(result);

/*
3.  Write a program that checks if a given number is a three digit long number.
*/

function long(x){
    if (x>99 && x<1000) {

        return 'number is a three digit long number';
    }   return 'number is not a three digit long number';
}

var a = 3333;
var result = long(a);
console.log(result);

/*
4.  Write a program that calculates an arithmetic mean of four numbers.
*/

function CalcAvg(x){
    var arr = 0;
    for(i = 0; i< x.length; i++){
        arr = arr + x[i];
    }
    var avg = arr / x.length;
    return avg;
}

var numAvg = [2, 4, 6, 8];
var result = CalcAvg(numAvg);
console.log("The average of the four numbers you entered is: " + result);

/*
For example,  if the size of square is 5 the program should draw: ***** 
*/

function square(x,y) {
    var c = '';
    for (var i = 0; i < y; i++) { 
        c += x;
    } return c;
}
var a = '*';
var b = 5;

var result = square(a,b);
console.log(result);

console.log('-----------------------------------------------');
// Write a program that draws a square of a given size. 
// *    *
// *    *
// *    *
function size_s(x,y,ml,ms) {
var c = '';
    for (var i = 0; i < ml; i++) {
        
        for (var j = 0; j < ms; j++) {
            c += x;
        }
       c+=y;
    } return c;
}
var a = '*\t';
var b = '\n';
var max_lines = 3;
var max_stars = 2;

var result = size_s(a , b, max_lines, max_stars);
console.log(result);

console.log('-----------------------------------------------');

console.log('resenje petog zadatka');
/*
5.  Write a program that draws a square of a given size. 
    For example,  if the size of square is 5 the program should draw: 
    *****
    *    *
    *    *
    *    *
    *****
*/

function square_size (x, y, z, m){
    var d = "";
    for (var i = 0; i < z.length; i++){
        for (var j = 0; j < z[i]; j++){
            if(z[i]===5){
                d+=m
            }else {
                d+=x;}
            }d+=y;
    }return d;
}
var a = '*\t';
var b = '\n';
var arr =[5,2,2,2,2,5];
var m = '*';
var result = square_size(a,b,arr, m);
console.log(result);

console.log('-----------------------------------------------');

/*
6.  Write a program that draws a horizontal chart representing three given values. 
    For example, if values are 5, 3, and 7, the program should draw:
    * * * * *
    * * *
    * * * * * * *
*/

function draw (x, y, z){
    var d = "";
    for (var i = 0; i < z.length; i++){
        for (var j = 0; j < z[i]; j++){
                d+=x;
            }d+=y;
    }return d;
}
var a = '*\t';
var b = '\n';
var arr =[5,3,7];

var result = draw(a,b,arr);
console.log(result);

/*
7.  Write a program that calculates a number of digits of a given number. 
*/
function digits(y) {
    
    return (''+y).length;
} 
var digits_number = 123456789;

var result = digits(digits_number);
console.log(result);

/*
8.  Write a program that calculates a number of appearances of a given number in a given array.
    Inputs: a = [2, 4, 7, 8, 7, 7, 1], e = 7
    Result: 3
*/

function arrCal(x,y){
    var count = 0;
    for (i = 0; i<x.length; i++){
        if(x[i]===y){
            count++;
        }
    } return count;
}
var arr_a = [2, 4, 7, 8, 7, 7, 1];
var e = 7;

var result = arrCal(arr_a,e)
console.log(result);

/*
8.  Write a program that calculates the sum of odd elements of a given array. 
*/

function sumOdd (x) {
    var sumodd =0;
    for (i = 0; i < x.length; i++){
        if(x[i] %2 !==0 ) {
            sumodd +=x[i];
        }
    }return sumodd;
}

var arr = [2, 4, 7, 8, 7, 7, 1];
var result = sumOdd(arr);
console.log(result);

/*
9. Write a program that calculates the number of appearances of a letter a in a given string.
*/

function letter_in_word(x,y) {
    var counta = 0;
    for (var i = 0; i < x.length; i++) {
        if (x[i] === y) {
            counta++;
        }
    }   
    return counta;
}

var letter = letter_in_word('Biljaaanaaa','a');
console.log('Appearances of a letter a equal to :' + ' ' + letter );

/*
10. Modify the program so it calculates the number of both letters a and A.
*/

function letters_in_word(x, y, z) {
    var counta = 0;
   
    for (var i = 0; i < x.length; i++) {
        if (x[i] === y || x[i] === z) {
            counta++;

        }
    }   
    return counta;
}

var letter =  letters_in_word('MiljaAaAnaAaA', 'a', 'A');
console.log('The number of both letters a and A equal to :' + ' ' + letter );

/*
11. Write a program that concatenates a given string given number of times. 
    For example, if “abc” and 4 are given values, the program prints out abcabcabcabc. 
*/

function abc(x, y) {
    var sumStr = '';
    for (var i = 0; i < y ; i++) {
        sumStr += x; 
    }
    return sumStr;
}
var g_str = 'abc';
var g_num = 4;

var result= abc(g_str,g_num);
console.log(result);




