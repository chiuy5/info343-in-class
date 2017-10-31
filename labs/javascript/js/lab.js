// Put your JavaScript lab code here!

// @ts-check
"use strict";

let str = "I like JavaScript more than I like to party";
console.log(str.slice(str.indexOf("I like to"), str.length));

let str2 = "I love Washington State University";
str2 = str2.replace("Washington State Univeristy", "The University of Washington");

let str3 = str.concat(str2);

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

let fiveSum = sumUpTo(5);
console.log("Result of sumUpTo(5) is", fiveSum);

function vowelCount(str) {
    str = str.toLocaleLowerCase();
    let vowelTotal = 0;

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == "a" || 
        str.charAt(i) == "e" ||
        str.charAt(i) == "i" ||
        str.charAt(i) == "o" ||
        str.charAt(i) == "u") {
            vowelTotal++;
        }
    }
    return(vowelTotal);
}

console.log("kookaburra has", vowelCount("kookaburra"), "vowels");

console.log("0123 has", vowelCount("0123"), "vowels");

function findMin(nums) {
    let min = nums[0];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

var nums = [-1, 3.2, 12, 15, -4, 1, -12.5, 1, 8];
console.log(nums);
console.log("The min value of nums is", findMin(nums));

let books = [
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "J.K. Rowling",
        hasRead: true
    },
    {
        title: "The Great Gastby",
        author: "F.Scott Fitzgerald",
        hasRead: false
    },
    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        hasRead: false
    }
]

books.push({title: "1984", author: "George Orwell", hasRead:true});

console.log(books);