/*
1.  Write a program to insert a string within a string at a particular position (default is 1, beginning of a string).

    "My random string", "JS " -> "JS My random string"
    "My random string", "JS ", 10 -> "My random JS string"
*/

function swap_space(word, x, pos=0) {
    var novi_string = "";
    for (var i=0; i < word.length; i++){

        if( i === pos){
            novi_string += x
        }  
         novi_string += word[i]
    }
    if (pos >= word.length){
        novi_string = word +' '+ x;
    }
    return novi_string
}
var result = swap_space("My random string", "JS ");
console.log(result);

var result = swap_space("My random string", "JS ", 10 );
console.log(result);

/*
2.  Write a program to join all elements of the array into a string skipping elements that are undefined, null, NaN or Infinity

    [NaN, 0, 15, false, -22, '', undefined, 47, null]
*/

function filter_elem(arr) {
    var newStr = '';
    for (i = 0; i < arr.length; i++) {
        if (arr[i] !== undefined && arr[i] !== null && !isNaN(arr[i]) && arr[i] !== Infinity ){
            newStr += arr[i];
        }
    }
    return newStr;
}

var res = filter_elem([NaN, 0, 15, false, -22, '', undefined, 47, null, Infinity ] );
console.log(res);


/*
3.  Write a program to filter out falsy values from the array.

    [NaN, 0, 15, false, -22, '', undefined, 47, null] -> [15, -22, 47]
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
4.  Write a function that reverses a number.
    The result must be a number.
    12345 -> 54321 // Output must be a number
*/

function reverse(x){
    var xToStr = ''+x // 12345
    var newNumber = ''

    //for (i = 0; i < arr.length; i++) {
    for (i = xToStr.length-1; i >= 0; i--) {
        newNumber += xToStr[i]
    }

    return parseInt(newNumber);
}

var res = reverse(12345);
console.log(typeof res);
console.log(res);

/* 
5.  Write a function to get the last element of an array.
    Passing a parameter 'n' will return the last 'n' elements of the array.

    [7, 9, 0, -2] -> -2
    [7, 9, 0, -2], 2 -> [0, -2]  
*/

function last_n_elements(arr, x=1) {    

    if(x===1){
        return arr[arr.length-1];
    }

    var newarr = []
    y = 0

    for (i = arr.length-x; i < arr.length; i++) {
        newarr[y] = arr[i];
        y++;
    }

    return newarr;
}
var res = last_n_elements([7, 9, 0, -2]);
console.log(res);

var res = last_n_elements([7, 9, 0, -2],2);
console.log(res);


/*
6.  Write a function to create a specified number of elements with pre-filled numeric value array.

    6, 0 -> [0, 0, 0, 0, 0, 0]
    2, "none" -> ["none", "none"]
    2 -> [null, null] 
*/

function specNumElements(x, element=null) {    

    var arr = [];

    for (i = 0; i < x; i++) {
        arr[i] = element;
    }
    return arr;
}

var res = specNumElements(6, 0);
console.log(res);
var res = specNumElements(2, "none");
console.log(res);
var res = specNumElements(2);
console.log(res);

/*
7.  Write a function that says whether a number is perfect.

    28 -> 28 is a perfect number. 
*/

function is_perfect(number){
    var check_num = 0;
   for(var i=1; i <= number/2; i++){  
         if( number % i === 0){ 
            check_num += i;
          }
     }
     if(check_num === number && check_num !== 0){
        return "It is a perfect number.";
    }else{
        return "It is not a perfect number.";
    }   
 } 
var result = is_perfect(28);
console.log(result);

/*
8.  Write a function to find a word within a string

    'The quick brown fox', 'fox' -> "'fox' was found 1 times"
    'aa bb cc dd aa', 'aa' -> "'aa' was found 2 times"
*/

function search_word(string, word){
    
    var x = 0, y=0;
   
    for (i=0;i< string.length;i++)
        {
        if(string[i] == word[0])
            {
            for(j=i;j< i+word.length;j++)
               {
                if(string[j]==word[j-i])
                  {
                    y++;
                  }
                if (y==word.length){
                    x++;
                }
            }
            y=0;
        }
    }
   return "'"+word+"' was found "+x+" times.";
}

console.log(search_word('The quick brown fox', 'fox'));
console.log(search_word('aa, bb, cc, dd, aa', 'aa'));

/*
9.  Write a function to hide email address.

    "myemailaddress@bgit.rs" -> "mye...@bgit.rs"
*/

function hide_email(email) {   
    var shorterName = '';
    var namePart = '';
    var providerPart = ''
    var namePartOver = false

    for (i = 0; i < email.length; i++) {
        if(email[i] === '@'){
            namePartOver = true
        }

        if (namePartOver === false){
            namePart += email[i];
        }else{
            providerPart += email[i];
        }
    }

    for (i = 0; i < 3; i++) {
        shorterName += namePart[i]
    }

    return shorterName+"..."+providerPart;
}

var res = hide_email('myemailaddress@bgit.rs');
console.log("-------------------");
console.log(res);


/*
10. Write a program to find the most frequent item of an array.

    [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]
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
console.log("-------------------");
console.log(res);