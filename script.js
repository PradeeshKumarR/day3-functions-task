// 1. Do the below programs in Anonymous Function & Immediately Invoked Function Expression (IIFE)
let inputarr = [1, 3, 2, 7, 5, 10, 8, 4, 6, 9];
let inputarr2 = [11, 13, 12, 17, 15, 20, 18, 14, 16, 19];
let stringarr = ["abc", "car", "ada", "racecar", "cool"];
let duplicatearr = ["apple", "mango", "apple", "orange", "mango", "mango"];
let rotate = 5;
console.log("Input array :", inputarr);
console.log("Input array2 :", inputarr2);
console.log("String array :", stringarr);
console.log("Duplicate array :", duplicatearr);

// a. Print odd numbers in an array
// Anonymous Function
let anonymousoddnumber = function(arr){
    let outputarr = [];
    for (let num of arr){
        if (num % 2 !== 0){
            outputarr.push(num);
        }
    }
    return outputarr;
}
console.log("Odd numbers in an array using anonymous function :", anonymousoddnumber(inputarr));

// IIFE Function
(function(arr){
    let outputarr = [];
    for (let num of arr){
        if (num % 2 !== 0){
            outputarr.push(num);
        }
    }
    console.log("Odd numbers in an array using IIFE function :", outputarr);
})(inputarr);

// b. Convert all the strings to title caps in a string array
// Anonymous Function
let anonymoustitlecaps = function(arr){
    let outputarr = [];
    for (let str of arr){
        let text = str.toLowerCase();
        let titlecaps = text.replace(text[0], text[0].toUpperCase())
        outputarr.push(titlecaps);
    }
    return outputarr;
}
console.log("Converting all the strings to title caps in a string array using anonymous function :", anonymoustitlecaps(stringarr));

// IIFE Function
(function(arr){
    let outputarr = [];
    for (let str of arr){
        let text = str.toLowerCase();
        let titlecaps = text.replace(text[0], text[0].toUpperCase())
        outputarr.push(titlecaps);
    }
    console.log("Converting all the strings to title caps in a string array using IIFE function :", outputarr);
})(stringarr);

// c. Sum of all numbers in an array
// Anonymous Function
let anonymoussum = function(arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum;
}
console.log("Sum of all numbers in an array using anonymous function :", anonymoussum(inputarr));

// IIFE Function
(function(arr){
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    console.log("Sum of all numbers in an array using IIFE function :", sum);
})(inputarr);

// d. Return all the prime numbers in an array
// Anonymous Function
let anonymousprime = function(arr){
    let primearr = [];
    for (let num of arr){
        let count = 0;
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                count++;
            }
        }
        if (count === 0){
            primearr.push(num);
        }
    }
    return primearr;
}
console.log("Prime numbers in an array using anonymous function :", anonymousprime(inputarr));

// IIFE Function
(function(arr){
    let primearr = [];
    for (let num of arr){
        let count = 0;
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                count++;
            }
        }
        if (count === 0){
            primearr.push(num);
        }
    }
    console.log("Prime numbers in an array using IIFE function :", primearr);
})(inputarr);

// e. Return all the palindromes in an array
// Anonymous Function
let anonymouspalindrome = function(arr){
    let outputarr = [];
    for (let str of arr){
        let normalarr = [];
        let reverse = [];
        normalarr.push(str);
        reverse.push(str.split('').reverse().join(''));
        if (normalarr[0] === reverse[0]){
            outputarr.push(str);
        }
    }
    return outputarr;
}
console.log("Palindromes in an array using anonymous function :", anonymouspalindrome(stringarr));

// IIFE Function
(function(arr){
    let outputarr = [];
    for (let str of arr){
        let normalarr = [];
        let reverse = [];
        normalarr.push(str);
        reverse.push(str.split('').reverse().join(''));
        if (normalarr[0] === reverse[0]){
            outputarr.push(str);
        }
    }
    console.log("Palindromes in an array using IIFE function :", outputarr);
})(stringarr);

// f. Return median of two sorted arrays of the same size.
// Anonymous Function
let anonymousmedian = function(arr1, arr2){
    let concatarr = [...arr1, ...arr2];
    concatarr.sort(function(a, b){ return a - b});
    let median = (concatarr[(concatarr.length / 2) - 1] + concatarr[concatarr.length/2]) / 2;
    return median;
}
console.log("Median of two sorted arrays of the same size using anonymous function :", anonymousmedian(inputarr, inputarr2));

// IIFE Function
(function(arr1, arr2){
    let concatarr = [...arr1, ...arr2];
    concatarr.sort(function(a, b){ return a - b});
    let median = (concatarr[(concatarr.length / 2) - 1] + concatarr[concatarr.length/2]) / 2;
    console.log("Median of two sorted arrays of the same size using IIFE function :", median);
})(inputarr, inputarr2);

// g. Remove duplicates from an array
// Anonymous Function
let anonymousduplicate = function(arr){
    let outputarr = [...new Set(arr)];
    return outputarr;
}
console.log("Removing duplicates from an array using anonymous function :", anonymousduplicate(duplicatearr));

// IIFE Function
(function(arr){
    let outputarr = [...new Set(arr)];
    console.log("Removing duplicates from an array using IIFE function :", outputarr);
})(duplicatearr);

// h. Rotate an array by k times
// Anonymous Function
let anonymousrotate = function(arr, k){
    for (let i = 0; i < k; i++){
        arr.unshift(arr.pop());
    }
    return arr;
}
console.log("Rotating an array by " + rotate + " times using anonymous function :", anonymousrotate(inputarr, rotate));

// IIFE Function
(function(arr, k){
    for (let i = 0; i < k; i++){
        arr.unshift(arr.pop());
    }
    console.log("Rotating an array by " + rotate + " times using IIFE function :", anonymousrotate(arr));
})(inputarr, rotate);

// 2. Do the below programs in arrow functions.

// a. Print odd numbers in an array
let arrowoddnumber = (arr) => {
    let outputarr = [];
    for (let num of arr){
        if (num % 2 !== 0){
            outputarr.push(num);
        }
    }
    return outputarr;
}
console.log("Odd numbers in an array using arrow function :", arrowoddnumber(inputarr));

// b. Convert all the strings to title caps in a string array
let arrowtitlecaps = (arr) => {
    let outputarr = [];
    for (let str of arr){
        let text = str.toLowerCase();
        let titlecaps = text.replace(text[0], text[0].toUpperCase())
        outputarr.push(titlecaps);
    }
    return outputarr;
}
console.log("Converting all the strings to title caps in a string array using arrow function :", arrowtitlecaps(stringarr));

// c. Sum of all numbers in an array
let arrowsum = (arr) => {
    let sum = 0;
    for (let num of arr){
        sum += num;
    }
    return sum;
}
console.log("Sum of all numbers in an array using arrow function :", arrowsum(inputarr));

// d. Return all the prime numbers in an array
let arrowprime = (arr) => {
    let primearr = [];
    for (let num of arr){
        let count = 0;
        for (let i = 2; i < num; i++){
            if (num % i === 0){
                count++;
            }
        }
        if (count === 0){
            primearr.push(num);
        }
    }
    return primearr;
}
console.log("Prime numbers in an array using arrow function :", arrowprime(inputarr));

// e. Return all the palindromes in an array
let arrowpalindrome = (arr) => {
    let outputarr = [];
    for (let str of arr){
        let normalarr = [];
        let reverse = [];
        normalarr.push(str);
        reverse.push(str.split('').reverse().join(''));
        if (normalarr[0] === reverse[0]){
            outputarr.push(str);
        }
    }
    return outputarr;
}
console.log("Palindromes in an array using arrow function :", arrowpalindrome(stringarr));