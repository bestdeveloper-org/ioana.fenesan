/* The Date object is used to work with dates and times. 
Date objects are created with new Date(). 
There are four ways of instantiating a date: 
*/

var d = new Date();
console.log(d);
//Using new Date(), creates a new date object with the current date and time:

var d = new Date("Decembrie 3, 2017 21:05:00");
console.log(d);
//Using new Date(date string), creates a new date object from the specified date and time:

var d = new Date(78,6,30,5,20,30,0);
console.log(d);
//Sun Jul 30 1978 05:20:30 GMT+0300 (GTB Daylight Time)

//Using new Date(7 numbers), creates a new date object with the specified date and time:
 //The 7 numbers specify the year, month, day, hour, minute, second, and millisecond, in that order:


 var d = new Date(78,6,30);
console.log(d);
//Variants of the example above let us omit any of the last 4 parameters:

//JavaScript counts months from 0 to 11. January is 0. December is 11. 

var d = new Date("2017-03");
console.log(d);
//Wed Mar 01 2017 02:00:00 GMT+0200 (GTB Standard Time)

var d = new Date("2017");
console.log(d);
//Sun Jan 01 2017 02:00:00 GMT+0200 (GTB Standard Time)