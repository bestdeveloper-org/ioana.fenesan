
console.log("isFinite")

var finit = 123;
var rest= isFinite(finit);
console.log(rest)
//true

var finit = -123;
var rest= isFinite(finit);
console.log(rest)
//true

var finit = 30+5+(20*3);
var rest = isFinite(finit);
console.log(rest)
//true

console.log("toPrecision")
var finit = 92.654;
finit.toPrecision(3);
console.log(finit)  //"92.7"

var finit = 80;
finit.toPrecision(5); // "80.000"
console.log(finit) 
//toPrecision() returns a string, with a number written with a specified length:

console.log("toString")
var finit = 30;
finit.toString();
console.log(finit)  //"30"
//returns a number as a string.


console.log("valueOf")
var finit = 300+30;
finit.valueOf();
console.log(finit)  //330
//returns a number as a number.

console.log("toFixed")
var finit = 300;
finit.toFixed(5); //"300.00000"
console.log(finit)  

var finit = 52;
finit.toFixed(3); //"52.000"
console.log(finit)
//returns a string, with the number written with a specified number of decimals:

console.log("toExponential")
var finit = 52;
finit.toExponential(3); //"52.000"
console.log(finit)

var finit = 50.523;
finit.toExponential(3);  //"5.052e+1"
/*returns a string, with a number rounded and written using exponential notation.
A parameter defines the number of characters behind the decimal point: ?????
*/ 

console.log("isNan")
//NaN	Represents a "Not-a-Number" value
//Trying to do arithmetic with a non-numeric string will result in NaN (Not a Number):

var x = 100 / "Apple";
console.log(x);  //NaN


var x = 100 / "2";
console.log(x);  // 50
//However, if the string contains a numeric value , the result will be a number:


var x = 100 / "Apple";
isNaN(x);
console.log(x);  //true


var x = NaN;
var y = 20;
var z = x + y; //NaN

var x = NaN;
typeof x;
console.log(x);  //"number" NaN  ???
