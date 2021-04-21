/*
1.  Write a program that checks if a given element e is in the array a. 
    Input:  e = 3, a = [5, -4.2, 3, 7]
    Output: yes

    Input:  e = 3, a = [5, -4.2, 18, 7]
    Output: no
*/
    var e = 3 
    var a = [5, -4.2, 18, 7]

    var in_array = '';

    for (var i = 0; i < a; i++) {
        if (e === a[i]){
            var in_array = true;
        }
    }

    if (in_array){
        console.log("yes")
    }else{
        console.log("no")
    }


/*
2.  Write a program that multiplies every positive element of a given array by 2.
    Input array: [-3, 11, 5, 3.4, -8]
    Output array: [-3, 22, 10, 6.8, -8]
*/

    var x = [-3, 11, 5, 3.4, -8]

    for (var i = 0; i < x.length; i++) {
        if (x[i] > 0){
            x[i] = x[i] * 2
        }
    }
    console.log(x)

/*
3.  Write a program that finds the minimum of a given array and prints out its value and index. 
    Input array: [4, 2, 2, -1, 6]
    Output: -1, 3 
*/

    var x =  [4, 2,2, -1, 3, 6]

    var min_num = 0;
    var min_index=0;
    for (var i=0; i <x.length; i++){
        if(i===0){
            min_num=x[i];
            min_index=i;
        }
        if(min_num>x[i]){
            min_num=x[i];
            min_index=i;
        }
    }
    console.log(min_num,min_index);

/*
4.  Write a program that finds the first element larger than minimum and prints out its value. 
    Input array: [4, 2, 2, -1, 6]
    Output: 2
*/

    var x =  [4, 2, 2, -1, 6]
    var min_num = 0;
    var next_min=0;

    for (var i=0; i <x.length; i++){
        if(i === 0){
            min_num=x[i];
            next_min=x[i];
        }
        if(min_num>x[i]){
            min_num=x[i];
        }
    }
    for(var i=0; i<x.length;i++){
        if(next_min>x[i] && min_num!==x[i]){
            next_min=x[i];
        }
    }
    console.log(next_min);

/*
5.  Write a program that calculates the sum of positive elements in the array.
    Input array: [3, 11, -5, -3, 2]
    Output: 16
*/
    var array = [3, 11, -5, -3, 2]
    var array_sum = 0;

    for (var x = 0; x < array.length; x++) {
        if (array[x] > 0){
            array_sum = array_sum + array[x];
        }
    }

    console.log(array_sum);

/*
6.  Write a program that checks if a given array is symmetric. 
    An array is symmetric if it can be read the same way both 
    from the left and the right hand side.   

    Input array: [2, 4, -2, 7, -2, 4, 2]
    Output: The array is symmetric.

    Input array: [3, 4, 12, 8]
    Output: The array isn’t symmetric.
*/

    var array = [2, 4, -2, 7, -2, 4, 2] ;

    var new_array = [];
    var symmetric = true;

    var length_array = array.length-1;

    for(var x = 0; x < array.length; x++){

        new_array[length_array-x] = array[x];
    }
        for(var y = 0; y < array.length; y++){

            if(array[y] != new_array[y]) {

                symmetric = false;
            }
    }
    if (symmetric) {
        console.log("The array is symmetric")
    }
    else{
        console.log("The array isn’t symmetric")  
    }

/*
7.  Write a program that intertwines two arrays. 
    You can assume the arrays are of the same length. 
    Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    Output array: [4, 3, 5, 8, 6, 11, 2, 9]
*/

    var array_a = [4, 5, 6, 2];
    var array_b = [3, 8, 11, 9];
    var array_c = [];

    var x = 0;
    var y = 1;

    for (var i = 0; i < array_a.length; i++) {
        array_c[x] = array_a[i];
        x+=2;
    }

        for (var i = 0; i < array_a.length; i++) {
            array_c[y] = array_b[i];
            y+=2;
    }
    console.log(array_c);

/*
8.  Write a program that concatenates two arrays. 
    Input arrays: [4, 5, 6, 2], [3, 8, 11, 9]
    Output array: [4, 5, 6, 2, 3, 8, 11, 9]
*/

    var array_a = [4, 5, 6, 2];
    var array_b = [3, 8, 11, 9];

    for (var i = 0; i < array_b.length; i++) {

        array_a[array_a.length] = array_b[i];
    }
    console.log(array_a);

/*
9.  Write a program that deletes a given element e from the array a. 
    Input: e = 2, a = [4, 6, 2, 8, 2, 2]
    Output array: [4, 6, 8]
*/

    var array_a = [4, 6, 2, 8, 2, 2];
    var e = 2;

    var array_b = [];
    var array_b_ctn = 0; 

    for (var i = 0; i < array_a.length; i++) {

        if (array_a[i] != e){
            array_b [array_b_ctn] = array_a[i];
            array_b_ctn ++;
        }
    }
    console.log(array_b);

/*
10. Write a program that inserts a given element e on the given position p in the array a. 
    If the value of the position is greater than the array length, print the error message. 
    Input: e = 78, p = 3, a = [2, -2, 33, 12, 5, 8]
    Output: [2, -2, 33, 78, 12, 5, 8]
*/

    var a = [2, -2, 33, 12, 5, 8];
    var e = 78;
    var p = 3;
    var b = [];

    var i;
    var j;

    if (p < a.length) {                                    
        for (i = 0, j = 0; i < a.length; i++, j++) {    

            if (p === i) {
                b[i] = e;
                i++;
            }
            b[i] = a[j]; 
        }

            b[i] = a[j];
        
        console.log(b);
    }
    else {
        console.log('Error');
    }
