//level 1 - pure beginner practice
//1. print number from 1 to 10..

//   for(let i =1 ; i<11; i++){
//     console.log(i);
//   }

//2. print  even & odd number from 1 to 20 ..

//   for( let i =1; i<=20; i++){
//     if(i%2 === 0){
//         console.log(`${i} even nomber`);
//     }
//     else{
//                 console.log(`${i} odd nomber`);

//     }
//   }
// 3. print 10 to 1 reverse


// for( let i = 10; i>0; i--){
//     console.log(i);
// }

// 4. print the word "yes" 5 times repeat using loop

// for( let y = 1; y<6; y++){
//     console.log("yes");
// }
// 5. print whether number from 1 to are even our odd...
// it ' done all ready..

//6. ask user a number and say if it's + ou - .

// let age = +prompt("Enter your age ");
//      if(age>=0){ console.log("it is positive ");}
//      else{ console.log("it's negative");}

//7. ask user's age and check if eligible for vote
// let age = prompt("enter your age");
  
// if(age === null){
//     console.error("you cancelled it");
// }
// else{
//     if(age.trim() === ""){
//         console.error(" please Enter your age..."); 
//       }
//    else{ age = Number(age.trim());
//    if (isNaN(age)){
//     console.error("please Enter age Number");
//    }
//    else{
//    if(age >= 18){
//     console.log("you are Eligible for vote");
//    }
//    else{
//     console.log("you are not Eligible for vote");

//    }
// }
// }
// }

//8. print multiplication table of 5
// for( let i = 1 ; i <= 10; i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// 9. count how many numbers between 1 and 15 are greatr than 8 

// let count =0;
// for( let i =1; i <= 15; i++){
//     if(i > 8){
//         ++count;
//         console.log(i);
//     }
// }
//         console.log(`total count ${count}`);

// 10. ask user for paswoord and print access status
// let password= "yourSecret"

// let pass= prompt(" Enter password");
  
// if(pass.trim() === null){ console.log("you cancelled");}
// else{
// if(pass.trim() === password) { console.log(" you access");}
// else {console.log("you not access");}
// }

//Level 2 slightly tougher but logical

//11. allow only 3 attempts to enter correct password
//  let attempts= 0;
//  let access= false;
//  let password ="yourScrats"
  
//  let pass= prompt("Enter Password");
//  attempts++;

//  if(pass === password) access = true;

//   while(pass !== password){
//     if (attempts === 3){
//         console.log ("Account loked");
//         break;
//     }
//    pass= prompt("Enter Password");
//   if(access === true) access = true;

//    attempts++;
//   }


//   if(access === true) console.log("account opened");

//12. Ask user for words until they type "stop", Count how many times they  typed "yes"

// let pro = prompt("Enter some words");
// let count= 0;

//  while (pro !== "stop"){
//     if (pro === "yes") count++;
//     pro = prompt("Enter some words");
//  }
//  console.log(`total yes count number ${count}`);

// 13.print number divisible by 7 from 1 to 50 use modulo % and loop.
// for( let i= 1; i <=50; i++){
//    if(i%7 === 0){
//       console.log(i);
//    }
// }

// 14. sum of all odd number from 1 to 30 add only odd number . print final sum.
// let sum =0;
// for(let i= 1; i<=30; i++){
//    if(i%2 !== 0){
//       sum = sum + i;
     
//    }
// }
//  console.log(sum);

// 15.keep asking number until user enters a even number
// let even = +prompt("Enter Even number");
//  while(even%2 !== 0){
//   even = +prompt("Enter Even number");

//  }

// 16. print number between two user inputs input start and end using pro()--> print all between
// let first = +prompt("Enter first number");
// let second = +prompt("Enter second number");
// for(let i =first ; i <= second ; i++){
//     console.log(i);
// }

//17. print only first 3 odd number from 1 to 20 use loop. stop with break after 3 odd print.
// let count =0;
// for(let i = 1; i<21; i++){
//    if(count === 3) break;
//    if(i%2 !== 0){
//      console.log(i);
//      count++;
//    }
// }

// 18. ask user 5 numbers count how many are positive .

// for( let i= 1; i<6; i++){
//    let pro = +prompt("Enter some number");
//    if(pro >= 0){
//       console.log(` it' positive ${pro}`);
//    }
//    else{
//       console.log(` it' negative ${pro}`);
//    }
// }

// 19. ask withdrowal amount 3 times by user..
// let balance= 1000;
// let flag = false;
// let count =0;
// while(balance > 0 && count !== 3 ){
//    let withdrow = +prompt("Enter Withdrowal amt");
//    count++;
//    if(withdrow <= balance) balance -= withdrow;
//    else{
//       flag = true ;
//       break;
//    }
// }
//  if(flag === true){
//    console.log("Insufficient balance");
//  }
//  console.log(`Blance : ${balance}`);






















