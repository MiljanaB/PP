/*
Write a function that converts an array of strings into an array of numbers. 
Filter out all non-numeric values.

Input: ["1", "21", undefined, "42", "1e+3", Infinity]
Output: [1, 21, 42, 1000]
*/

function toNumberArray(arr) {

	var number_array =[];
    var number_array_ctn =0;

	for (i = 0; i < arr.length; i++) {

        if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity ){

            number_array[number_array_ctn] = parseFloat(arr[i]);
            
            number_array_ctn ++;
        }
	}	return number_array;
}

var result = toNumberArray(["1", "21", undefined, "42", "1e+3", Infinity]);
console.log(result);

/*
Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity.

	Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
	Output: “015false-2247”
*/

function skipping_elements(arr) {    

    var newString = '';

    for (i = 0; i < arr.length; i++) {

        if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity ){
            
            newString += arr[i];
        }
    }
    return newString;
}

var result = skipping_elements([NaN, 0, 15, false, -22, '', undefined, 47, null] );
console.log(result);

/*
Write a program to filter out falsy values from the array.

Input: [NaN, 0, 15, false, -22, '', undefined, 47, null]
Output: [15, -22, 47]
*/

function filter_falsy(arr) {    
    var falsy;
    var trueArr = [];
    var x = 0

    for (i = 0; i < arr.length; i++) {

        falsy =  parseInt(arr[i]);

        if (!isNaN(falsy) && falsy !== 0) {
            trueArr[x] = (arr[i]);
            x++;
        }
    }
    return trueArr;
}

var res = filter_falsy([NaN, 0, 15, false, -22, '', undefined, 47, null] );
console.log(res);

/*

Write a program that calculates a number of integer values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 3

*/

function number_integer (elements){
    var integer = 0;
    var parse_int; 
    for (i = 0; i < elements.length; i++){
        
        parse_int = parseInt(elements[i]);

        if(!isNaN(elements[i]) && !isNaN(parse_int) && parse_int === elements[i]){
            integer++;
        }
    }return integer;
}

var result = number_integer([NaN, 23.4, 15, false, -22.5, '', 4, 7, null]);
console.log(result);


/*

Write a program that calculates a number of float values in the array.

Input: [NaN, 23.1, 15, false, -22.5, '', 4, 7, null]
Output: 2
*/


function number_float (elements){
    var floats = 0;
    var parse_int; 
    for (i = 0; i < elements.length; i++){
        
        parse_int = parseInt(elements[i]);

        if(!isNaN(elements[i]) && !isNaN(parse_int) && parse_int !== elements[i]){
            floats++;
        }
    }return floats;
}

var result = number_float([NaN, 23.4, 15, false, -22.5, '', 4, 7, null]);
console.log(result);
