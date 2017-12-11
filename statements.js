//functie statments produce o actiune nu o valoare imediata if (x===5){ do something}
function somneFun(par){
	//code
}


//functie expresions produce o valoare  3+4; var x=3;
var someFun = function(par) {
	//code
}




// OBJECTS

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1992,
    job: 'teacher',
    isMaried: false,

};
console.log(john);
console.log(john.lastName);
console.log(john['lastName']);

var xyz='job';
console.log(john[xyz]);
john.lastName="Miller";
john.job="programmer";
console.log(john);

//sau

var jane = new Object();
jane.name = "Jane";
jane.labelname = "Smith";
jane["yearOfBirth"] = 1980;
jane.isMaried = true;

console.log(jane);


//Objects and methods

var john = {
    name: 'John',
    lastName: 'Smith',
    yearOfBirth: 1992,
    job: 'teacher',
    isMaried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function(yearOfBirth) { //function expresion
        return 2016 - this.yearOfBirth;  // this. = john
    }
};



console.log(john.family[2]);
console.log(john.calculateAge());



var age = john.calculateAge();
john.age=age;

console.log(john);


var mike = {
    name: 'Mike',
    lastName: 'Smith',
    yearOfBirth: 1992,
    job: 'teacher',
    isMaried: false,
    family: ['Jane', 'Mark', 'Bob'],
    calculateAge: function() { //function expresion
        this.age = 2016  - this.yearOfBirth;  // this. = mike
    }
};

mike.calculateAge();
console.log(mike);


function calculateAge(yearOfBirth){
	var age=2018-yearOfBirth;
	return age;
}
 var ageJhon=calculateAge(1965);
 var ageMaria=calculateAge(1920);
 console.log(ageJhon);
 console.log(ageMaria);


 function yearsUntilRetirement(name, yearOfBirth){
 	var age=calculateAge(yearOfBirth);
 }

yearsUntilRetirement('Jhon', 1990);


console.log("break");
//Exits a switch or a loop
//break; break labelname;

for(var i=1; i<10; i++){
   if (i==5) {
   	break;
   }

	console.log("Number " + i);
}


for ( var i = 0; i<=5; i++){
	console.log(i);

	if (i=== 3) {
		break;
	}
}


console.log("continue");
/*Breaks one iteration (in the loop) if a specified condition occurs, 
and continues with the next iteration in the loop
continue; continue labelname; */

for(var i=2; i<10; i++){
   if (i==6) {
   	continue; 
   }

	console.log("Number " + i);  // sare peste 6 si continua
}




console.log("debugger");

/*Stops the execution of JavaScript, and calls (if available) the debugging function
debugger; */


console.log("do....while");
/*Executes a block of statements and repeats the block while a condition is true
do { code block to be executed } while (condition);

This loop will always be executed at least once, even if the condition is false, 
because the code block is executed before the condition is tested:

The do/while statement is used when you want to run a loop at least one time, 
no matter what.*/

var text = "";
var i = 0;
do {
    text += "The number is " + i;
    i++;
}
while (i < 5);
console.log( text + i );



console.log("for");
//Marks a block of statements to be executed as long as a condition is true

/*for (initializer; exit-condition; final-expression) {
  // code to run
}
The keyword for, followed by some parentheses.
Inside the parentheses we have three items, separated by semi-colons:
An initializer — this is usually a variable set to a number, which is 
                 incremented to count the number of times the loop has run. It is also 
                 sometimes referred to as a counter variable.
An exit-condition — as mentioned before, this defines when the loop should 
                     stop looping. This is generally an expression featuring a comparison operator, 
                     a test to see if the exit condition has been met.
A final-expression — this is always evaluated (or run) each time the loop has 
                     gone through a full iteration. It usually serves to increment (or in some cases 
                     decrement) the counter variable, to bring it closer to the exit condition value.
Some curly braces that contain a block of code — this code will be run each time
 the loop iterates. */


for (var i = 0; i < 10; i++){  //i=i+1
	console.log(i);            // 1...9
}; 

/* 0, true, print 0, update i to 1 
   1, true, print 0, update i to 2
   ...
   9, true, print 0, update i to 10  - false
   */

   var names = [ 'john', 'Jane', 'Mary', 'Mark', 'Bob'];
   for ( var i = 0; i < names.length; i++) {
   	console.log(names[i]);
   }  


    var names = [ 'john', 'Jane', 'Mary', 'Mark', 'Bob'];
    for (var i = names.length - 1; i >= 0  ; i--){
    	console.log(names[i]);

    }




var text = "";
    var i=0;
    for (i = 0; i < 5; i++) {
        text += "The number is " + i;
    }
    console.log(text + i);



var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
  var info = 'My cats are called ';
	for (var i = 0; i < cats.length; i++) {
  	info += cats[i] + ', ';
}

console.log(info); //My cats are called Bill, Jeff, Pete, Biggles, Jasmin,

/* The iterator, i, starts at 0 (var i = 0). 
It has been told to run until it is no longer smaller than the length of the cats array. 
This is important — the exit condition shows the condition under which the loop will still run. 
So in this case, while i < cats.length is still true, the loop will still run.
Inside the loop, we concatenate the current loop item (cats[i] is cats[whatever i is at the time]) 
along with a comma and a space, onto the end of the info variable.

 So:
During the first run, i = 0, so cats[0] + ', ' will be concatenated onto info ("Bill, ").
During the second run, i = 1, so cats[1] + ', ' will be concatenated onto info ("Jeff, ")
And so on. After each time the loop has run, 1 will be added to i (i++), then the process will start again.
When i becomes equal to cats.length, the loop will stop, and the browser will move on to the next bit of code below the loop. */


console.log('while')

var i = 0;
while(i < names.length) {
	console.log(names[i]);
	i++;
}




var cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
for (var i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}
console.log(info);



console.log("for in");
//loops through the properties of an object

var person = {fname:"John", lname:"Doe", age:25}; 

	var text = "";
	var x;
	for (x in person) {
    text += person[x] + " ";
}
    console.log(text);  

 console.log('function')   

function myFunction(){
	alert('hello');
}
myFunction()