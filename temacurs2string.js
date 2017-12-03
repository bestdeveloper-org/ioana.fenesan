
console.log(" exercitii charAt()");

//Returns the character at the specified index (position)

var str="Hello World"
console.log(str.charAt(0));  // H
console.log(str.charAt(2));  // l
console.log(str.charAt(100)); // " "
console.log(str.charAt(-20)); // " "
console.log(str.charAt(5)); //" "


console.log("exercitii charCodeAt()");
//Return the Unicode of the first character in a string (the Unicode value for "H"):

var str="Hello World"
console.log(str.charCodeAt(1)); // 101
console.log(str.charCodeAt(2)); //108
console.log(str.charCodeAt(0)); //72
console.log(str.charCodeAt(100)); // NaN 
var str="HELLO WORLD"
console.log(str.charCodeAt(1)); // 69
console.log(str.charCodeAt(2)); //76
console.log(str.charCodeAt(0)); //72
console.log(str.charCodeAt(-3)); // NaN

// H  Alt + 72

console.log("exercitii concat()");
//The concat() method is used to join two or more strings.
//1
var str1 = "Ioana ";
var str2 = "Fenesan";
var res = str1.concat(str2);
console.log(res);
console.log(str1+str2);
//2
var culoarea = "rosu ";
var culoareab = "galben ";
var culoareac = "albastru ";
var tricolor = culoarea.concat(culoareab,"si ",culoareac);
console.log(tricolor);
//3
var masina= "Volvo ";
var masinab = "Audi ";
var masinac = "Mazda ";
var masinad = "Ford";
var totalMasini = masina.concat(masinab, masinac, "si ", masinad);
console.log(totalMasini);
console.log(masina + masinab + masinac +"si "+ masinad);

console.log("exercitii endsWith()");
//Checks whether a string ends with specified string/characters
/*Parameter	Description
searchvalue	Required. The string to search for
length	Optional. Specify the length of the string to search. 
If omitted, the default value is the length of the string
*/

var stra = "If omitted, the default value is the length of the string";
var n = stra.endsWith("g"); // true
console.log(n);

 var strab = "Hello";
 var m=strab.endsWith("string"); // true
 


console.log("exercitii fromCharCode()");
//Converts Unicode values to characters

var res = String.fromCharCode(92, 81, 75, 90)
console.log(res);

console.log("exercitii includes()");
//Checks whether a string contains the specified string/characters

var str="Hello world, welcome to the universe."
var n=str.includes("to"); // true
console.log(n);

var inc="Azi este 1 Decembrie";
var res= inc.includes(1); //true
var res2=inc.includes( " "); //true
console.log(res);
console.log(res2);

console.log("exercitii indexOf()");
//Returns the position of the first found occurrence of a specified value in a string

var index = "Azi este ziua Romaniei"
var index2 = index.indexOf("t") // 6
var index3 = index.indexOf("este"); // 4
console.log(index2); 
console.log(index3);

console.log("exercitii lastindexOf()");
//Returns the position of the last found occurrence of a specified value in a string
 
var index = "Azi este ziua Romaniei"
var index2 = index.lastIndexOf("e"); //20
console.log(index2);

var str = "tra-la-la"; 
var res = str.lastIndexOf("la"); //7
console.log(res);

console.log("exercitii localeCompare()");
/*he localeCompare() method returns a number indicating whether 
the string comes before, after or is equal as the compareString 
in sort order
*/

/* -1 if the reference string is sorted before the compareString
    0 if the two strings are equal
    1 if the reference string is sorted after the compareString
*/

var prima = "12";
var doua = "13"
var trei = "12";
var rest = prima.localeCompare(doua); //-1
var rest2 = prima.localeCompare(trei); // 0
var rest3 = doua.localeCompare(trei); // 1
console.log(rest);
console.log(rest2);
console.log(rest3);


console.log("exercitii length()");
//Represents the string length and is a property

var str = "Hello World";
var res = str.length; // 11
console.log(res);

var str = "Represents the string length and is a property"
var res = str.length; //46
console.log(res);

console.log("exercitii match()");
//Searches a string for a match against a regular expression, and returns the matches. 

/* Note: If the regular expression does not include the g modifier 
  (to perform a global search), the match() method will return only 
  the first match in the string.

  This method returns null if no match is found.
  */
 
 var text = "The rain in SPAIN stays mainly in the plain";
 var res = text.match(/ain/g); // 3
  var rest = text.match(/ain/gi); // 4
 console.log(res);
 console.log(rest);

 var text= "Volvo, volanta, volei, revoltat"
 var res = text.match(/vol/g); //3
 var rest = text.match(/vol/gi); //4
 console.log(res);
 console.log(rest);

 console.log("exercitii repeat()");
//Returns a new string with a specified number of copies of an existing string

var str="Hello World! "
var repeat = str.repeat(3)
console.log(repeat);

 console.log("exercitii replace()");
/*earches a string for a specified value, or a regular expression, 
and returns a new string where the specified values are replaced
*/

var str = "Ziua Romaniei";
var rest = str.replace("Romaniei","Italiei");
console.log(rest);

var str = "Ana are mere, Ana are pere";
var rest = str.replace("Ana", "Gheorghe");
console.log(rest); 

 console.log("exercitii search()");
 /*Searches a string for a specified value, or regular expression, 
 and returns the position of the match */

 var str = "Afara ploua, ploua, ploua"
 var rest = str.search("Afara"); //0
 var rest2 = str.search("ploua"); // 6
 console.log(rest2);
 console.log(rest);

 var str = "Visit W3Schools!";
 var n = str.search("W3Schools"); //6
 console.log(n);


 console.log("exercitii slice()");
 // Extracts a part of a string and returns a new string

 var str = "Hello World"
 var n = str.slice(1,5); // ello
 console.log(n);


console.log("exercitii split()");
//Splits a string into an array of substrings

var str = "How are you doing today"
var n = str.split(" ");
console.log(n);


console.log("exercitii startsWith()");
//Checks whether a string begins with specified characters

var str = "How are you doing today"
var n = str.startsWith("How"); //true
console.log(n);

console.log("exercitii substr()");
/*Extracts the characters from a string, beginning at 
a specified start position, and through the specified number of character 

Required. The position where to start the extraction. First character is at index 0.

If start is positive and greater than, or equal, to the length of the string,
substr() returns an empty string.

If start is negative, substr() uses it as a character index from the end of the string. 

If start is negative or larger than the length of the string, start is set to 0
length	Optional. The number of characters to extract. If omitted, it extracts the rest of the string*/

var str = "How are you doing today"
var n = str.substr(1,5); //ow ar
console.log(n);


console.log("exercitii substring()");
/*Extracts the characters from a string, between two specified indices
equired. The position where to start the extraction. First character is at index 0
end	Optional. The position (up to, but not including) where to end the extraction. 
If omitted, it extracts the rest of the string
*/

var str = "How are you doing today"
var n = str.substring(1,5); //ow a
console.log(n);

console.log("exercitii toLocaleLowerCase()");
//Converts a string to lowercase letters, according to the host's locale

var str = "HOW ARE YOU DOING TODAY"
var n = str.toLocaleLowerCase(); //how are you doing today
console.log(n);

console.log("exercitii toLocaleUpperCase()");
//Converts a string to uppercase letters, according to the host's locale

var str = "how are you doing today"
var n = str.toLocaleUpperCase(); //HOW ARE YOU DOING TODAY
console.log(n);

console.log("exercitii toLowerCase()");
//Converts a string to lowercase letters.

var str = "HOW ARE YOU DOING TODAY"
var n = str.toLowerCase(); //how are you doing today
console.log(n);

console.log("exercitii toString()");
//Convert a number to a string:

var str = 302
var n = str.toString(); //"302"

console.log("exercitii toUpperCase()");
//Converts a string to uppercase letters

var str = "how are you doing today"
var n = str.toUpperCase(); //HOW ARE YOU DOING TODAY
console.log(n);

console.log("exercitii trim()");
//Converts a string to uppercase letters

var str = " how are you doing today "
var n = str.trim(); //how are you doing today
console.log(n);

console.log("exercitii prototype()");
//Returns the Unicode of the character at the specified index ?????


function Person(first, age) {
	this.firstName = first;
	this.age= age;

}
var myName = new Person ("Mihai", 60);
console.log("Numele lui este " + myName);












