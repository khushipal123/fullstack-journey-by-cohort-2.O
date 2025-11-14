//Assignment - 29 Oct
/*1. Basic Operators (Arithmetic, Assignment, Increment, Decrement,
Comparison, Logical, Bitwise)*/
//a.
let a=10;
let b=3;
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

//b.
let x = 5; 
// x = x + 3;
x+=2; //7
x-=3;//2
x*=2;//4
x/=2;//2
x%=2;//0
console.log(x);//0

//c.
let count=5;
count++;
console.log(count);//6
count--;
console.log(count);//5

//d.Compare two values:
5=="5" // true but not type is equle
5==="5"// fales becouse is type not equle.

//e.Check if 10 is greater than 5, less than 20, and equal to 10.
10>5<20>=10 //false

//f. Try logical AND and OR:
true && false // false
true || false//true
!(true) //false

//g. Predict the result of:
(5 > 3 && 10 > 8),// true
(5 > 3 || 10 < 8)//ture

//h. Bitwise (light intro):
 5 & 1;//1 bit
 5 | 1;//5

/*The bitwise AND & keeps only the bits that are set in both numbers, while the bitwise OR | keeps bits that are set in either number.*/

//2. Variable Hoisting in JavaScript

//a. Predict output of:
console.log(d);
var d = 10 // undefiend

//b. Predict output of:
console.log(e);
let e = 10 //not access before initialize

//c. Predict output of:
/*test();//Uncaught TypeError: true is not a function at 

function test() { console.log("Hello") }*/

//d. Try writing a function expression before initialization and call it:
hello();//becouse we call undefined variable before function error is (Uncaught TypeError: hello is not a function)

var hello = function() { console.log("Hi") }

/*e. Write one sentence:
What gets hoisted?What does not get hoisted fully?
In JavaScript, function declarations get fully hoisted, while variable declarations using var are hoisted without their assigned values.let/const declarations are not hoisted in a usable way due to the temporal dead zone.*/












