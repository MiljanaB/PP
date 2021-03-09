/*Write a program that compares two numbers and display the larger. 
Result should be displayed in the console.*/

var a = 10;
var b = 10;

if (a>b) {
    console.log('a je veci broj');
}
else if (a===b){
    console.log('a i b su jednaki');
}
else{
    console.log('b je veci broj');
}

/*Write a program to check if the number is divisible by 2. 
If it is, print even, if not, print odd.
Sample numbers: 3, 4, 9 (check one at the time)
Output: odd, even, odd
*/
var a = 3;
var b = 4;
var c = 9;

if(a%2===0){
    console.log('even');
}
else{
    console.log('odd');
}

if(b%2===0){
    console.log('even');
}
else{
    console.log('odd');
}
if(c%2===0){
    console.log('even');
}
else{
    console.log('odd');
}

/*Write a program to check if the number is divisible by 3 and 5. 
If it is, print that number.

Sample numbers: 15, 12 (check one at the time)
Output: 15 */

var a = 15;
if(a%3===0 && a%5===0){
    console.log(a);
}
else{
    console.log("nije deljivo");
}

var b = 12;
var a = 15;
if(b%3===0 && b%5===0){
    console.log(b);
}
else{
    console.log("nije deljivo");
}

/*Write a conditional statement to find the sign of product of three numbers. 
Display the result in the console with the specified sign.
Sample numbers: 3, -7, 2 
Output: The sign is - */

var a = 3;
var b = -7;
var c =2;

if ((a*b*c) < 0 ) {
    console.log("znak je -");
}
else if ((a*b*c) === 0) {
    console.log("broj je 0");

}
else {
    console.log("pozitivan broj");
}

/*Write a program to check if the variable is a number. 
If it’s a number, check if it is divisible by 2. 
If it is, print the result, if not, show “X”
Sample numbers: 10 | 7 (check one at the time)
Output: 10 / 2 = 5 | X */

var a = 7;

if ((typeof(a) === "number")){
    if(a%2 === 0){
        var b = a/2
        console.log(b);
    }
    else{
        console.log("X");
    }

}