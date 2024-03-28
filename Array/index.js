"use strict";
// Simple array functions 
var num = [1, 2, 2, 3, 4];
console.log(num);
// Methods of Array
// Push method in Array used to add a value at last 
var num1 = [10, 191, 19, 18, 3];
num1.push(10);
console.log(num1);
// Shift method are used to delete a value from 0 index
var num2 = [10, 2, 3, 4, 45, 6];
num2.shift();
console.log(num2);
// POP method are used to delete from last index
var num4 = [2, 3, 4, 5, 6, 7];
num4.pop();
console.log(num4);
// unshift method are used to add value at 0 index
var num3 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
num3.unshift(2);
console.log(num3);
// splice method:in this method first of all give index value and 
// then give values of number that how many index are deleted
var num4 = [9, 8, 7, 6, 5, 4, 3];
num4.splice(3, 4, 24, 22);
console.log(num4);
// modify a value from an array 
// in simple way replace a value from another value
var num5 = [10, 19, 18, 17, 161, 15];
num5[3] = 10;
console.log(num5);
