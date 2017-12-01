//creat secret number

var secretNumber=4;

var stringGuest=prompt("Guest secret number");
var guest=Number(stringGuest);
 if (guest===secretNumber){
 	alert("you got it right");
 }
 else if (guest > secretNumber) {
 	alert("Too higt");
 }
 else {
 	alert ("Too low");
 }
 
 