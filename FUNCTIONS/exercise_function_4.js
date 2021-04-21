/*
1.  Write a program that checks if a given element e is in the array a. 
    Input:  e = 3, a = [5, -4.2, 3, 7]
    Output: yes

    Input:  e = 3, a = [5, -4.2, 18, 7]
    Output: no
*/

function inArr (arr, el) {
    for (i =0; i < arr.length; i++){
        if (el === arr[i]){    
            return 'yes';`` 
        } 
    }
    return 'no';
}
var arr = [5, -4.2, 3, 7];
var result = inArr(arr, 3);
console.log(result);

var arr = [5, -4.2, 18, 7];
var result = inArr(arr, 3);
console.log(result);

/*
2.  Write a program that multiplies every positive element of a given array by 2.
    Input array: [-3, 11, 5, 3.4, -8]
    Output array: [-3, 22, 10, 6.8, -8]
*/
function multiplies (positive_elements) {
    for (i=0; i < positive_elements.length; i++){
        if(positive_elements [i]>0){
            positive_elements [i] = positive_elements[i]*2;
        }
    } return positive_elements;
}
var result = multiplies([-3, 11, 5, 3.4, -8]);
console.log(result);

/*
3.  Write a program that finds the minimum of a given array and prints out its value and index. 
    Input array: [4, 2, 2, -1, 6]
    Output: -1, 3
*/
function print_min_index1(min_arr1){ 
    var min_num1 = 0;
    var index1 = 0;
    for (i = 0; i<min_arr1.length-1; i++){
        if (i === 0){
            min_num1 = min_arr1[i];
            index1 = i ;
        }
        if (min_num1 > min_arr1[i]){
            min_num1 = min_arr1[i];
            index1 = i;
        }
    }return [min_num1,index1]
}

var min_arr1 = [4, 2, 2, -1, 6];
var result1 = print_min_index1(min_arr1);
console.log(result1[0],result1[1]);

/*
4.  Write a program that finds the second smallest number and prints out its value. 
    Input array: [4, 2, 2, -1, 6]
    Output: 2
*/
function print_min_index(min_arr){
    var min_num = min_arr[0];
    var sec_num = min_arr[0];

    for (i = 0; i<min_arr.length-1; i++){
        if (min_num > min_arr[i]){
            min_num = min_arr[i];
        }
    }

    for (i = 0; i<min_arr.length-1; i++){
        if (sec_num > min_arr[i] && min_num !== min_arr[i]){
            sec_num = min_arr[i];
        }
    }
    return sec_num
}
var min_arr = [4, 2, 2, -1, 6];
var result = print_min_index(min_arr);
console.log(result);

/*
5.  Write a program that calculates the sum of positive elements in the array.
    Input array: [3, 11, -5, -3, 2]
    Output: 16
*/

function sum_positive (elements){

    var positive = 0;
    for (i = 0; i < elements.length; i++){
        if(elements[i]>0){
            positive += elements[i]
        }
    }return positive
}

var result = sum_positive([3, 11, -5, -3, 2]);
console.log(result);

/*
6.  Write a program that checks if a given array is symmetric. 
    An array is symmetric if it can be read the same way both from the left and the right hand side.   
    Input array: [2, 4, -2, 7, -2, 4, 2]
    Output: The array is symmetric.

    Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
*/

function isSymmetric(arr){

    var symmetric = "The array is symmetric";
    var arr_2 = [];

    var arr_length = arr.length-1;

    for(var x = 0; x < arr.length; x++){

        arr_2[arr_length-x]=arr[x];
    }
        for(var y = 0; y < arr.length; y++){

            if(arr[y] != arr_2[y]) {

                symmetric = "The array isn’t symmetric";
            }
    }return symmetric
    
}
var result = isSymmetric([2, 4, -2, 7, -2, 4, 2]);
console.log(result);

var result = isSymmetric([3, 4, 12, 8]);
console.log(result);

/*
7.  Write a program that concatenates two arrays. 
    Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

function concatenates_arrays(first_arr,second_arr){
        var third_arr = [];
        var x = 0;

        for (var i = 0; i < first_arr.length; i++) {

            third_arr[x] = first_arr[i];
            x++;
        }

        for (var i = 0; i < first_arr.length; i++) {

            third_arr[x] = second_arr[i];
            x++;

        }return third_arr

}
var result = concatenates_arrays([4, 5, 6, 2], [3, 8, 11, 9]);
console.log(result);

/*
8.  Write a program that deletes a given element e from the array a. 
    Input: e = 2, a = [4, 6, 2, 8, 2, 2]
    Output array: [4, 6, 8]
*/

function delete_element(elements,e){

    var new_arr =[];
    var new_arr_ctn =0;

    for(i = 0; i < elements.length; i++){

        if(elements[i] != e){

            new_arr[ new_arr_ctn] = elements[i];

            new_arr_ctn++;
        }
    }return new_arr
}
var result = delete_element([4, 6, 2, 8, 2, 2],2);
console.log(result);

/*
9.  Write a program that inserts a given element e on the given position p in the array a. 
    If the value of the position is greater than the array length, print the error message. 
    Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
    Output: [2, -2, 33, 78, 12, 5, 8]
*/

function insert_element(given_arr, given_element, given_position){

    var new_array = [];

    if (given_position < given_arr.length) {

        for (var i = 0, j = 0; i < given_arr.length; i++, j++) {    


            if (given_position === i) {
                new_array[i] = given_element;
                i++;
            }
            new_array[i] = given_arr[j];
        }
        if (i <= given_arr.length){
        new_array[i] = given_arr[j];
    }
        return new_array;
    }
    else {
        return 'error';
    }
}
var result = insert_element([2, -2, 33, 12, 5, 8],78,3);
console.log(result);

