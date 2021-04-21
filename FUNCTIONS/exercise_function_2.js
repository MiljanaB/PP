// 1. Write a function to check whether the `input` is a string or not.

// "My random string" -> true
function isString(a) {

    if (typeof a === 'string'){
        return true
    }else {
        return false
    }
}
var result = isString('nes');
console.log(result);

console.log('------------------Dario-----------------------')

function isString(a) {
    return typeof a === 'string'
}

var result = isString('nes');
console.log(result);

console.log('------------------drugi deo prvog zadatka-----------------------')
// 12 -> false

function isNum(num) {
        return typeof num === 'number';
}
var result = isNum(12);
console.log(result);

console.log('------------------drugi zadatak-----------------------')

//Write a function to check whether a string is blank or not.

// "My random string" -> false

function isBlank(check) {
    return check === '';
}

var result = isBlank("My random string");
console.log(result);

// " " -> true
var result = isBlank('');
console.log(result);

// 12 -> false

var result = isBlank(12);
console.log(result);

// false -> false
var result = isBlank(false);
console.log(result);

console.log('------------------treci zadatak-----------------------')

/* Write a function that concatenates a given string n times (default is 1).
"Ha" -> "Ha"
"Ha", 3 -> "HaHaHa"
*/

function conc(word, x=1) {
    var result = ""
    for (var i = 0; i < x; i++){
        result += word
    }
    return result
}

var result1 = conc('Ha');
var result = conc('Ha', 6);

console.log(result1);
console.log(result);


console.log('------------------cetvrti zadatak-----------------------')

/* Write a function to count the number of letter occurrences in a string.
"My random string", "n" -> 2
*/

function findNumberOfLetters(word, x) {
    var counter = 0
    for (var i=0; i < word.length; i++){
        if (word[i] === x){
            counter++;
        }
    }
    return counter
}

var result = findNumberOfLetters('My random string', 'n');
console.log(result);

console.log('------------------peti zadatak-----------------------')

/*
Write a function to find the position of the first occurrence of a character in a string. 
The result should be the position of character. 
If there are no occurrences of the character, the function should return -1.
*/
function findLetterFirstPosition(word, x) {

    for (var i=0; i < word.length; i++){
        if (word[i] === x){
            return i + 1
        }
    }
    return - 1
}

var result = findLetterFirstPosition('My random string', 'a');
console.log(result);

console.log('------------------sesti zadatak-----------------------')

/*
Write a function to find the position of the last occurrence of a character in a string. 
The result should be in human numeration form. 
If there are no occurrences of the character, function should return -1.
*/

function findLetterLastPosition(word, x) {
    var last_letter_position = -1
    for (var i=0; i < word.length; i++){
        if (word[i] === x){
            last_letter_position = i + 1
            }
        }
    return last_letter_position
}

var result = findLetterLastPosition('My random string', 'n');
console.log(result);


console.log('------------------sedmi zadatak-----------------------')

/*Write a function to convert string into an array. Space in a string should be represented as “null” in new array.

"My random string" -> ["M", "y", null, "r", "a"]
"Random" -> ["R", "a", "n", "d", "o", "m"]
*/

function changeToArray(word) {
    var arr = []
    
    for (var i=0; i < word.length; i++){
            if( word[i] === ""){
                arr[i] = null
            }else{
                arr[i] = word[i]
            }
        }
    return arr
}

var result = changeToArray('My random string');
console.log(result);

var result = changeToArray("Random" );
console.log(result);

console.log('------------------osmi zadatak-----------------------')

/*Write a function that accepts a number as a parameter and checks if the number is prime or not. 
Note: A prime number (or a prime) is a natural number greater than 1 that has no positive divisors other than 1 and itself.
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

var result = checkPrime(4);
console.log(result);

console.log('------------------deveti zadatak-----------------------')

/*  Write a function that replaces spaces in a string with provided separator. 
If separator is not provided, use “-” (dash) as the default separator.

    "My random string", "_" -> "My_random_string"
    "My random string", "+" -> "My+random+string"
    "My random string" -> "My-random-string"
*/

function swap_space(word, x='-') {
    var novi_string = ""
    for (var i=0; i < word.length; i++){
        
        if( word[i] === " "){
            novi_string += x
        }else{
            novi_string += word[i]
        }
    }
    return novi_string

}
var result = swap_space("My random string", "_" );
console.log(result);

var result = swap_space('My random string', '+');
console.log(result);

var result = swap_space('My random string');
console.log(result);


console.log('------------------deseti zadatak-----------------------')

function dots(word, x) {
    var novi_string = ""
    for (var i=0; i < x; i++){
        novi_string += word[i]
    }
    novi_string +="..."
    return novi_string

}

var result = dots('My random string', 8);
console.log(result);


console.log('------------------jedanaesti zadatak-----------------------')

/*
 Write a function that converts an array of strings into an array of numbers. 
 Filter out all non-numeric values.
["1", "21", undefined, "42", "1e+3", Infinity] -> [1, 21, 42, 1000]
*/

function leaveNumbersOnly(arr) {
    var new_arr = []
    var x = 0
    for (var i=0; i<arr.length; i++){
        var parsed = parseFloat(arr[i])
        if (isFinite(parsed) && typeof parsed === 'number') {

            new_arr[x] = parsed
            x++;
         }

    }
    return new_arr

}

var result = leaveNumbersOnly(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);


console.log('------------------dvanaesti zadatak-----------------------')

/*+
 Write a function to calculate how many years there are left until retirement based on the year of birth. 
 Retirement for men is at age of 65 and for women at age of 60. 
 If someone is already retired, a proper message should be displayed.
 */

function calculate_retirement(presentYear, limit, birthYear) {

    var yearsDiff = presentYear - birthYear;
    var leftYears = limit - yearsDiff;

    if(leftYears < 0){
        return "Trazeno lice je u penziji";
    }else{
        return "do penzije je ostalo " +leftYears+" godina";
    }
}

var birthYear = 1992;
var presentYear = 2021;
var male_limit = 65;
var woman_limit = 60;

var sex = "female";

if (sex === 'male'){
    var result = calculate_retirement(presentYear, male_limit, birthYear);
}else if (sex === 'female'){
    var result = calculate_retirement(presentYear, woman_limit, birthYear);
}
console.log(result);


console.log('------------------trinaesti zadatak-----------------------')

/*
Write a function to humanize a number (formats a number to a human-readable string) with the correct suffix such as 1st, 2nd, 3rd or 4th.
1 -> 1st
11 -> 11th
*/

function humanize(number) {
    
    if(number % 100 >= 11 && number % 100 <= 13)                    //, 111, 112, 113, 211, 212, 213,
        return number + "th";
        
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";                                           // ostatak nije  11, 12, 13 i nije  1,2,3 (SVE OSTALO) 
}
console.log(humanize(1));
console.log(humanize(11));


