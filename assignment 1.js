
//Introduction to JavaScript
// Assignment 1
alert("hello from sheryians!!")
// Write one line in your own words: “If HTML is skeleton, CSS is clothes — what
prompt("WHat is js");
//is JS is the brain that brings everything to life.”
 
// I ve seen JavaScript being used to show popup worning on websites like when a form is submitted or when you try to leave a page without saving your data.
 alert("You have unsaved changes. Are you sure you want to leave?")

//  In console 
 console.warn("You have unsaved changes. Are you sure you want to leave?")
//Move the script tag to the section and see what happens.
//When you move the <script> tag to the <head> section, the JavaScript runs before the HTML elements (like buttons) are loaded so the popup does not appear or doesnt work properly.

//fixed this:-

//Move the <script> tag back to the end of the <body>, or
//Add the defer attribute in the <head> 
console.log("connected");

//Running JS in Browser Console
2+2
4
alert("hii")
// undefined
prompt("khushi")
''
// prompt("your name")
// 'khushi'
let city = "Muzaffarnagar";
// city
// 'Muzaffarnagar'
//Variables and Keywords (var, let, const)
var a = "khushi";

let b = "sheryians";

const c = "school";

// reassigning variables values
 a ="shikhu"
 b ="codding school"
 c ="sheryians" 
console.log(a);
console.log(b);
console.log(c); //This will give an error
// In curly braces print outside variables values
{
    let name = "khushi";
    console.log("Inside block:",name);
}
console.log("Outside block:",name);//eroor
const PI = 3.14159;
const BASE_URL = "https://api.example.com";
const MAX_USERS = 100;

console.log("Value of PI:", PI);
console.log("Base URL:", BASE_URL);
console.log("Maximum Users Allowed:", MAX_USERS);
PI = 4.0; // error
console.log("After change:", PI);
//Logging and Interaction (console, alert, prompt)
let name = "khushi";

let age = "22";

let  City = "Muzaffarnagar";

console.log("Name:", name);     
console.info("Age:", age);      
console.warn("City:", City); 

let userName = prompt("Enter your name:");
alert("hello, " + userName + "!");

// Take input from user
let userInput = prompt("Enter your number:");

// Show the value
console.log("You entered:", userInput);

// Show the data type of the input
console.log("Type of input:", typeof userInput); 

let Age = prompt("Enter age:");
console.log(Age + 5);
console.log("Type of input:", typeof Age); // allways string - Even if the user types a number, prompt() will return it as a string.

//Working with Strings
let msg = "i love sheryians";
console.log(msg.slice(2, 6));//slice

let Words = msg.split(" ");
console.log(words);
console.log("Word count:", words.length);//split
let words = msg.split(" ");

console.log(msg.replace("love", "study at"));//replace

let Name = "khushi";
console.log(`Hey ${Name}, welcome to JS!`);
let Msg = "I love JavaScript programming";
console.log(Msg.includes("love"));// output:- true
//Statements and Semicolons
let youname = "khushi"
console.log("khushi")// that' run

let p = 5
let q = 10
console.log(p + q)
(function() { console.log("hi") })()// that' not run gives a error


let myname = "khushi"; 
console.log(`Hey ${myname}, welcome to JS!`); // that's run 

console.log("Hello")
console.log("Welcome to JavaScript")
console.log("This works even without semicolons")// there is also run

Comments
//khushi this is single line comment.

/*
hello my name is khushi 
i love sheryians coding school
i love playing bedminton
*/ // multi-line comment 
//Expressions vs Statements
console.log("Line 1: Visible")//visible
/*
console.log("Line 2: Hidden")not visible because this line is comment 
*/
console.log("Line 3: Visible")//visible

5 + 10 // output:- 15 they give value immediately

let x = 10;// not show

let y = (5 + 10) * 2;
console.log(y);// output:- 30

/*An expression produces a value immediately while a statement performs an action but doesnt return a value directly*/

//data types
let num = 25;                
let string = "Harsh";          
let isStudent = true;        
let skills = ["JS", "HTML"]; 
let user = { city: "delhi" }; 
let A = null;                
let B;                       
let C = Symbol("id"); 

console.log(typeof num);       // number
console.log(typeof string);      // string
console.log(typeof isStudent); // boolean
console.log(typeof skills);    // object
console.log(typeof user);      // object
console.log(typeof A);         // object (special case)
console.log(typeof B);         // undefined
console.log(typeof C);         // symbol

let myage = 22; // number
console.log(typeof myage); // number

myage = "22"; // changed to string
console.log(typeof myage); // string


let result = 10 + "5";
console.log(result); // 105 output
console.log(typeof result); // string

//Special Values

console.log(1 / 0);// INFINITY
console.log(0 / 0);// NaN
console.log(Number("abc"));//NaN
console.log(undefined + 1);//NaN


//null :- intentionally empty
//undefined:-not yet assigned
//Primitive vs Reference

let x2 = 5;
let y2 = x;
y2 = 10;
console.log(x2, y2);//Primitive output 5 10 

let obj1 = { name: "khushi" };
let obj2 = obj1;
obj2.name = "Sheryians";
console.log(obj1.name);//Reference output sheryians this is change together

