
console.log( 'constructor')

var fruits = ['Apple', 'Banana', 'Orange'];
fruits.constructor;
console.log(fruits);

/* The return value is a reference to the function, not the name of the function:

For JavaScript arrays the constructor property returns function Array() { [native code] }

For JavaScript numbers the constructor property returns function Number() { [native code] }

For JavaScript strings the constructor property returns function String() { [native code] }
*/
console.log('length')

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.length); //3

console.log('prototype')

var fruits = ['Apple', 'Banana', 'Orange'];
console.log(fruits.prototype); //undefined

var fruits = ['Apple', 'Banana', 'Orange'];
var cars = [ 'Volvo', 'Seat'];
var total = fruits.concat(cars);
console.log(total);
//(5) ["Apple", "Banana", "Orange", "Volvo", "Seat"]


console.log("copyWithin")
var total = ["Apple", "Banana", "Orange", "Volvo", "Seat"];
total.copyWithin(2, 0);
console.log(total); 

//["Apple", "Banana", "Apple", "Banana", "Orange"]
//Copy the first two array elements to the last two array elements:


console.log("every");
//Checks if every element in an array pass a test

var age=[ 20, 30, 50, 60 ];
function checkAdult(age){
	return age >= 10;
}


 console.log(age.every(checkAdult));


 console.log("fill()");
 //Fill the elements in an array with a static value
//array.fill(value, start, end)

var fruits=['Banana', 'Orange', 'Apple', 'Mango'];
fruits.fill('Kiwi');
console.log(fruits); // ["Kiwi", "Kiwi", "Kiwi", "Kiwi"]

var fruits=['Banana', 'Orange', 'Apple', 'Mango'];
fruits.fill('Kiwi', 1,);
console.log(fruits);  //["Banana", "Kiwi", "Kiwi", "Kiwi"]

var fruits=['Banana', 'Orange', 'Apple', 'Mango'];
fruits.fill('Kiwi', 1, 3 );
console.log(fruits); //["Banana", "Kiwi", "Kiwi", "Mango"]


console.log("filter");
/* Creates a new array with every element in an array that pass a test

array.filter(function(currentValue, index, arr), thisValue)  */

var ages = [32, 33, 16, 40];
function checkAdult(age){
	return age >=18;
}
console.log(ages.filter(checkAdult)); // [32, 33, 40]


console.log("find");
 /*Returns the value of the first element in an array that pass a test
  array.find(function(currentValue, index, arr),thisValue) */

  var ani=[3, 5, 8, 9];
  function verificaAn(an){
  	return an>=8;
  }
  console.log(ani.find(verificaAn)); //8


  console.log("findIndex");
  /*Returns the index of the first element in an array that pass a test
array.findIndex(function(currentValue, index, arr), thisValue) */

var caine=['ochi', 'coada', 'nas']
function verificaCaine(animal){
	return animal == 'coada';
}
console.log(caine.findIndex(verificaCaine)); //1


console.log("forEach");
/* Calls a function for each array element
array.forEach(function(currentValue, index, arr), thisValue) */

/* index[0]: 4
index[1]: 9
index[2]: 16
index[3]: 25 */


console.log("indexOf");
/*Search the array for an element and returns its position
array.indexOf(item, start) */

var fruits=['Banana', 'Orange', 'Apple', 'Mango']
var a = fruits.indexOf('Orange');
console.log(a); //1


console.log("isArray()");
/*Checks whether an object is an array
Array.isArray(obj) */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a=Array.isArray(fruits);
console.log(a); //true


console.log("Join()");
/*Joins all elements of an array into a string
array.join(separator)*/

var cars = ['volvo', 'dacia', 'opel', 'audi'];
var marci = cars.join();
var marci2 = cars.join(2);
console.log(marci, marci2); //volvo,dacia,opel,audi volvo2dacia2opel2audi


console.log("lastIndexOf()");
//Search the array for an element, starting at the end, and returns its position
//array.lastIndexOf(item, start)


var cars = ['volvo', 'dacia', 'opel', 'audi'];
var marci = cars.lastIndexOf('opel');
console.log(marci); // 2


console.log("map()");
/*Creates a new array with the result of calling a function for each array element
array.map(function(currentValue, index, arr), thisValue)*/

var numbers = [4, 9, 16, 25];
 function myFunction(){
 	}
 
console.log(numbers.map(Math.sqrt)); // [2, 3, 4, 5]


console.log("pop()");
//Removes the last element of an array, and returns that element
//array.pop()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var x = fruits.pop();
console.log(x) //Mango

console.log("push()");

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
console.log(fruits); //["Banana", "Orange", "Apple", "Mango", "Kiwi"]


console.log("reduce()");
//Reduce the values of an array to a single value (going left-to-right)
//array.reduce(function(total, currentValue, currentIndex, arr), initialValue)

var numbers=[62,44,52];
function getSum(total,num) {
	return total + num;
}
console.log(numbers.reduce(getSum)); //158

console.log("reduceRight()");
/* Reduce the values of an array to a single value (going right-to-left)
array.reduceRight(function(total, currentValue, currentIndex, arr), initialValue)*/

var numbers=[85,63,952];
function getSum(total,num){
	return total+num;
}
console.log(numbers.reduceRight(getSum)); //1100


console.log("reverse()");
//Reverses the order of the elements in an array

var orase=[ 'cluj', 'Iasi', 'constanta'];
orase.reverse();
console.log(orase); //["constanta", "Iasi", "cluj"]


console.log("shift()");
//Removes the first element of an array, and returns that element
//array.shift()

var orase=[ 'cluj', 'Iasi', 'constanta'];
orase.shift();
console.log(orase); //["Iasi", "constanta"]


console.log("slice()");
//Selects a part of an array, and returns the new array

var orase = [ 'cluj', 'Iasi', 'constanta', 'deva', 'brasov'];
var ramase = orase.slice(1,4);
console.log(ramase); //) ["Iasi", "constanta", "deva"];

console.log("some()");
/* Checks if any of the elements in an array pass a test
array.some(function(currentValue, index, arr), thisValue) */

var ages=[3.52,62.92];
function checkAdult(age){
	return age>=20;
}
console.log(ages.some(checkAdult));  //true


console.log("sort()");
/* Sorts the elements of an array
array.sort(compareFunction) */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.sort();
console.log(fruits); // ["Apple", "Banana", "Mango", "Orange"]


console.log("splice()");
/*Adds/Removes elements from an array
array.splice(index, howmany, item1, ....., itemX) */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Kiwi", "Lemon"); 
console.log(fruits); //["Banana", "Orange", "Kiwi", "Lemon", "Apple", "Mango"]

console.log("toString()");
/* Converts an array to a string, and returns the result
array.toString() */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.toString();
console.log(fruits);

console.log("unshift()");
/*Adds new elements to the beginning of an array, and returns the new length
array.unshift(item1, item2, ..., itemX) */

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.unshift("Mere", "Pere");
console.log(fruits);
//["Mere", "Pere", "Banana", "Orange", "Apple", "Mango"]

console.log("valueOf()");
//Returns the primitive value of an array
//array.valueOf()

var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.valueOf();
console.log(fruits); //["Banana", "Orange", "Apple", "Mango"]






























