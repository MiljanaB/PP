/*
1.  Write a function to count vowels in a provided string. Vowels are a, e, i, o, and u as well as A, E, I, O, and U. 
*/

    function word1(x) {
        var count = 0;
        for (var i = 0; i < x.length; i++) {
            if (x[i] === 'a' || x[i] === 'A' || x[i] === 'e' || x[i] === 'E' || x[i] === 'i' || x[i] === 'I' || x[i] === 'o' || x[i] === 'O' || x[i] === 'u' || x[i] === 'U') {

                count++;
            }
        }   
        return count;
    }

var letter = word1('VowelsvARSTRINGOooUUUU');
console.log('The number of letters:' + ' ' + letter );

/*
2.  Write a function that combines two arrays by alternatingly taking elements.
    [‘a’,’b’,’c’], [1,2,3] -> [‘a’,1,’b’,2,’c’,3]
*/

    function combines (arr1,arr2){

        var new_arr = [];

        var x = 0;
        var y = 1;

        for (var i = 0; i < arr1.length; i++) {

            new_arr[x] = arr1[i];
            x+=2;
        }

            for (var i = 0; i < arr2.length; i++) {

                new_arr[y] = arr2[i];
                y+=2;
        }return new_arr;

    }
var result = combines(['a','b','c'], [1,2,3]);
console.log(result );

/*
3.  Write a function that rotates a list by k elements.
    For example [1,2,3,4,5,6] rotated by two becomes [3,4,5,6,1,2]
*/

    function combines1 (arr1, rotation){

        var new_arr = [];
        var y = 0;
        var z = arr1.length - rotation;

        for (var i = 0; i < arr1.length; i++) {

            if(i >= rotation){
                new_arr[y] = arr1[i];
                y++;
            }else{
                new_arr[z] = arr1[i];
                z++;
            }
        }
        return new_arr;
    }
var result = combines1(["1","2","3","4","5","6"], 2);
console.log(result );

/*
4.  Write a function that takes a number and returns array of its digits.
*/

    function get_digits(num){

        var digits_arr = [];
        var number_str = ""+num;
        
        for (var i = 0; i < number_str.length; i++) {
            digits_arr[i] = number_str[i]
        }
        return digits_arr;
    }
var number = 234565;
var result = get_digits(number);
console.log(result );

/*
5.  Write a program that prints a multiplication table for numbers up to 12.
*/

    function multiplication_table(num_to){

        var table_arr = [];
        var x = 0;
        var table_str = '';

        for (var i = 1; i <= num_to; i++) {
            for (var y = 1; y <= num_to; y++) {
                table_arr[x] = ""+i+"x"+y+"="+(i*y);
                x++;
                table_str += ""+i+"x"+y+"="+(i*y)+"; ";
            }
        }
        return [table_arr, table_str];
    }
var number_to = 12;
var results = multiplication_table(number_to);
console.log("Niz");
console.log(results[0]);
console.log("string");
console.log(results[1]);

/*
6.  Write a function to input temperature in Centigrade and convert to Fahrenheit.
*/

    function to_fahrenheit(c){

        var f = (c*9/5) + 32;

        return ""+f+"F";
    }
var celsius = 12;
var result = to_fahrenheit(celsius);
console.log(result);


/*
7.  Write a function to find the maximum element in array of numbers. Filter out all non-number elements.
*/

    function max_element(arr){
    
        var max_el = 0;

        for (i = 0; i < arr.length; i++) {
            if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity && typeof arr[i] === "number" ){

                if (max_el < arr[i]){
                    max_el = arr[i];
                    max_index = i;
                }
            }
        }
        return max_el;
    }
var result = max_element([1,2,34,6,76,43,"342", null]);
console.log(result);


/*
8.  Write a function to find the maximum and minimum elements. Function returns an array.
*/

    function min_max_element(arr){
    
        var first= true;

        for (i = 0; i < arr.length; i++) {
            if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity && typeof arr[i] === "number" ){
                if (first){
                    var max_el = arr[i];
                    var min_el = arr[i];
                    first = false;
                }
                if (max_el < arr[i]){
                    max_el = arr[i];
                }
                if (min_el > arr[i]){
                    min_el = arr[i];
                }
            }
        }
        return [min_el, max_el];
    }
var result = min_max_element(["dasd", -1, 1,2,34,6,76,43,"342", null]);
console.log(result);


/*
9.  Write a function to find the median element of array.
*/
function median (arr) {

    var newArr = [];
    var position = 0;
    var max = arr[0];
    var min = arr[0];
    var ind = 0;
    var med = 0;

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
    
    if (newArr.length%2===0){
        ind = newArr.length/2;
        med = (newArr[ind]+ newArr[ind-1])/2;
    }else {
        med = (newArr[newArr.length*2-0.5])
    }return med + 'is median'
}

console.log(median([13, 11, 15, 5, 6, 1, 8, 12]));


/*
10. Write a function to find the element that occurs most frequently.
*/

    function find_most_frequent(arr) {   
        
        var mf = 1;
        var m = 0;
        var item;
        for (var i=0; i<arr.length; i++)
        {
                for (var j=i; j<arr.length; j++)
                {       
                        if (arr[i] == arr[j])
                        m++;
                        if (mf<m)
                        {
                        mf=m; 
                        item = arr[i];
                        }
                }
                m=0;
        }
        return item
    }
var res = find_most_frequent([3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]);

console.log(res);

/*
11. Write a function to find and return the first, middle and last element of an array if the array has odd number of elements. 
    If number of elements is even, return just the first and the last. 
    In other cases (empty array), input array should be returned.
*/

function first_mid_last(arr) {   
    

    if(arr.length === 0){
        return [];
    }
    else{
        var first = arr[0];
        var last = arr[arr.length-1];

        if(arr.length % 2 ===0){
            return [first, last];
        }
        else{
            var mid = (arr.length - arr.length % 2) / 2;
            return [first, arr[mid], last];
        }
    }
}

var res = first_mid_last([1,2,3,4,5,6,7,8,9]);
var res1 = first_mid_last([1,2,3,4,5,6,7,8]);
console.log("-------------------");
console.log(res);
console.log("-------------------");
console.log(res1);


/*
12. Write a function to find the average of N elements. Make the function flexible to receive dynamic number or parameters.
*/

function average(arr){
 
    var avg= 0;
    var x = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity && typeof arr[i] === "number" ){
            avg += arr[i];
            x++;
        }
    }
    return avg/x;
}

var result = average(["dasd", -1, 1,2,34,6,76,43,"342", null]);
console.log(result);

/*
13. Write a function to find all the numbers greater than the average.
*/

function average1(arr){
 
    var avg= 0;
    var x = 0;

    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity && typeof arr[i] === "number" ){
            avg += arr[i];
            x++;
        }
    }
    var avg_num = avg/x;
    var higher_numbers = [];
    x = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity && typeof arr[i] === "number" ){
            if(arr[i] > avg_num) {
                higher_numbers[x] = arr[i];
                x++;
            }
        }
    }
    return higher_numbers;

}

var result = average1(["dasd", -1, 1,2,34,6,76,43,"342", null]);
console.log(result);

/*
14. The body mass index (BMI) is the ratio of the weight of a person (in kilograms) to the square of the height (in meters). 
    Write a function that takes two parameters, weight and height, computes the BMI, and prints the corresponding BMI category:

    Starvation: less than 15
    Anorexic: less than 17.5
    Underweight: less than 18.5
    Ideal: greater than or equal to 18.5 but less than 25
    Overweight: greater than or equal to 25 but less than 30
    Obese: greater than or equal to 30 but less than 40
    Morbidly obese: greater than or equal to 40
*/

function BMI_category(height, weight){

    var bmi = weight/(height*height);

    switch (true) {
        case bmi < 15:
            return "Starvation: less than 15";
        case bmi < 17.5:
            return "Anorexic: less than 17.5";
        case bmi < 18.5:
            return "Underweight: less than 18.5";
        case bmi >= 18.5 && bmi < 25:
            return "Ideal: greater than or equal to 18.5 but less than 25";
        case bmi >= 25 && bmi < 30:
            return "Overweight: greater than or equal to 25 but less than 30";
        case bmi >= 30 && bmi < 40:
            return "Obese: greater than or equal to 30 but less than 40";
        case bmi >= 40:
            return "Morbidly obese: greater than or equal to 40";
    }

}
var height_in_m = 1.9;
var weight_in_kg = 90;

var result = BMI_category(height_in_m, weight_in_kg);
console.log(result);

/*
15. Write a function that takes a list of strings and prints them, one per line, in a rectangular frame.:
    For example the list ["Hello", "World", "in", "a", "frame"] gets printed as:
        *********
        * Hello *
        * World *
        * in    *
        * a     *
        * frame *
        *********
*/
function makeFrame(array) {
	var maxWordLength = 0;
	var topAndBottomString = '';
	var topAndBottomlength = 0;
	var middlePart = '';
	var spaceLength = 0;
	var spaceString = '';
	var frame = '';
	var word = '';
	function makeStringFromChar(char, num) {
		var resultString = '';
		for (var i = 0; i < num; i++) {
			resultString += char;
		}
		return resultString;
	}
	//find the longest word
	for (var i = 0; i < array.length; i++) {
		word = array[i];
		if (word.length > maxWordLength) {
			maxWordLength = word.length;
		}
	}
	//make top and bottom strings
	topAndBottomlength = maxWordLength + 4;
	topAndBottomString = makeStringFromChar('*', topAndBottomlength);
	//create middle part
	for (var k = 0; k < array.length; k++) {
		word = array[k];
		spaceLength = maxWordLength - word.length;
		spaceString = makeStringFromChar(' ', spaceLength);
		middlePart += '* ' + word + spaceString + ' *\n';
	}
	//create frame
	frame = topAndBottomString + '\n' + middlePart + topAndBottomString;
	return frame;
}
console.log(makeFrame(['Hello', 'world', 'in', 'a', 'frame']))

