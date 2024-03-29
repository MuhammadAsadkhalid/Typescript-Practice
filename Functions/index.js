"use strict";
// function infoGet(){
//     console.log(1)
// }
// console.log(1);
// console.log(2);
// console.log(3);
// infoGet();
// console.log(4);
// getIntoPc();
// console.log(5);
// function getIntoPc(){
//     console.log(10);
// }
// function getMy(num2:number,num3:number){
//     var num1:number = num2 + num3;
//     console.log(num1);
// }
// getMy(10,10)
// function forPc(num3:number,num4:number){
//     var age:number = num3 + num4;
//     console.log(age)
//     return age
// }
// var fore:number =forPc(5,5);
// fore = fore +40;
// console.log(fore);
function eachOther1(head, tale) {
    var combine = head + tale;
    console.log(combine);
    return combine;
}
var befn = eachOther1(10, 18);
befn = befn + 40;
console.log(befn);
function addition1(add1, add2) {
    var sum = add1 + add2;
    console.log(sum);
    return sum;
}
var modi = addition1(10, 15);
modi = modi + 10;
console.log(modi);
var arrowfunc = (per1, per2) => {
    var age = per1 + per2;
    console.log(age);
    return arrowfunc;
};
var age1 = arrowfunc(10, 10);
console.log(age1);
