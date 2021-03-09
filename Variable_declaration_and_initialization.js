//Variable declaration and initialization

/*1. Create several variables using different letter cases and beginning characters. 
Check if they still exist if you refer to them in different case - does case matter here? 
Try to declare a variable starting with number as the first character.*/

var a=3;
console.log(a);

var A=5;
console.log(A);

//Varijabla ne moze da pocinje sa brojem, kada joj se obracam moram se obratiti isto kako sam je definisala.

var a3=8;
console.log(a3);

//2. Save a string (text) describing your current mood in a variable and print it out in console.

var mood="great";
console.log(mood);

//3. Feel free to play around in the console and get familiar with it.


//Arithmetic operators

/*4. Play around in the console: add, subtract, multiply and divide some numbers. 
Use numbers stored in variables you created as well. 
Think about expressions: 
3-2-31, 
3*5-7/3, 
4/2-1.14*3. 
Why do we get these results? */

var a=3;
var b=2;
var c=31;
var d=a-b-c;
console.log(d);

var a=3;
var b=5;
var c=7;
var d=a*b-c/a;
console.log(d);

var a=4;
var b=2;
var c=1.14;
var d=3;

var e=a/b-c*d;
console.log(e);

//5. How many grams weight 1.2kg of bananas? 

var kg= 1000;
var bananas= 1.2*kg;

console.log(bananas+'g');


/*6. How many extra seconds we wait for our friend Anna who is being late for 5 minutes? 
What about Tom who is being late half an hour? 
It is hard to be on time these days…*/

var minut=60;
var Anna=5*minut;

console.log(Anna+'s');

var Tom=30*minut;
console.log(Tom+'s');


/*7. How many MB of additional memory we have if we buy a 4GB USB stick? 
How many news articles each in size 98KB can fit in it? */

var gb=1024;
var mb=1024;
var usbstick=4*gb*mb;

var news=4*gb*mb/98;
console.log(news);


/*9. Do you know any other way to write a = a * 2? 
How about: b = b + 3; 
c = c / 5; 
d = d - 7? */

a*=2;
b+=3;
c/=5;
d-=7

/*10. Create the following variables:
	- a variable containing your name,
	- a variable containing your age,
	- a variable describing if you have a cat or not.
* Each variable has to start with a different type of character.
Print them all out in the console and check their types.*/

var myname="Miljana";
var age=28;
var pets=false;

console.log(typeof myname);
console.log(typeof age);
console.log(typeof pets);

/*11. Check which type are these values:
	- “number”
	- true
	- null
	- “false”
	- 56
    */
var a = "number";
console.log(typeof a);

var b = true;
console.log(typeof b);

var c = null;
console.log(typeof c);

var d = "false";
console.log(typeof d);

var e = 56;
console.log(typeof e);


/*Logical operators
12. Check how good you are at guessing the Boolean equivalent of different values using the console. 
Do you remember how to check for a Boolean equivalent of a value? */

//13. Use the console to check the results you think should go in the following table
var p=true;
var q=true;

console.log(p&&q);
console.log(p||q);

var p=true;
var q=false;

console.log(p&&q);
console.log(p||q);

var p=false;
var q=true;

console.log(p&&q);
console.log(p||q);

var p=false;
var q=false;

console.log(p&&q);
console.log(p||q);



/*14. If the variable age stores the information about user’s age, how we can check whether it contains a correct value? 
Write expressions for checking:
Is age negative value
Is age greater than 120 */

var age =50;
if(age<0) {
    console.log('negativna vrednost');
}
else{
    console.log('nije negativna vrednost');
}

var age=50;
if(age>120) {
    console.log('veca vrednost');
}
else{
    console.log('nije veci broj');
}


/*15. Let’s say there are speed limitations on a motorway from 60 to 120 kilometers per hour. 
If we store the current speed value in the variable speed. 
Write an expression which will check if we are driving drive safely or not? 
(true if we are driving safe and false if not) */  

var ourspeed=100;

if(ourspeed>60 && ourspeed<120){
    console.log('Vozimo dozvoljenom brzinom');
}
else {
    console.log('Nebezbedna voznja');
}

var ourspeed=150;

if(ourspeed>60 && ourspeed<120){
    console.log('Vozimo dozvoljenom brzinom');
}
else {
    console.log('Nebezbedna voznja');
}
