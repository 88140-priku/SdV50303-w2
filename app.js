console.log("hello world") 
var name= "prikshit" //functiom scoped,hoisted -avoid in modern js 
let age= 20;//block scoped, can be reassigned, 
const PI= 3.14159;//blocked scoped, cannot be reassigned
let score= 0;
score = 10;//ok- reassignment allowed for let
const MAX_SCORE= 100;   
// MAX_SCORE = 200; //typeerror- assignment to constant variable
let homeAddress= "2 clouston St";   
let userAge= 20;
console.log("typeof homeAddress: ");

//arthmetic 5+3//
//8 10-4// 
//5*3//15 10/2//5 10%3//1
//2**3//8

//comparison - always prefer ===over ==
5===5//true 5 !== 3//true (strict: checks value and type)
5==5//true 5== '5'//false (loose vs strict)
10>5//true 5>=5//true
//logical
true && true//true true && false//false false || true//true !false//true
//assignment
let x= 10; x+=5;//15 x-=2;//13 x *=2;//26
const msg= "hello, JavaScript!";
msg.length  //18
msg.toUpperCase()//"HELLO, JAVASCRIPT!"  
msg.toLowerCase()//"hello, javascript!"
msg.includes("Java")//true
msg.indexOf("Java")//7
msg.slice(0,5)//"hello"
msg.replace("JavaScript","JS")//"hello, JS!"
msg.split(",")//["hello", " JavaScript!"]
" hi ".trim()//"hi"
console.log("The length of the message is: " + msg.length);
console.log( msg.toUpperCase());

const name1 = "prikshit";
const age2 = 20;
//old way - concatenation (error-prone)
const msg1 = "Hello, " + name1 + "! You are " + age2 + " years old.";
//new way - template literals (clean and readable)
const msg2 = `Hello, ${name1}! You are ${age2} years old.`;
//multi-line strings 
const html = 
'<div class="card"> <>h2>Title</h2> <p>Content</p> </div>';
//Any expression works inside ${}
const total = `price: ${(12.99 * 3).toFixed(2)}`;
console.log("The length of the message is: "+ msg2.length);
// if/else if/else
    const score1 = 75;
    if (score1 >= 90) {
        console.log("A");
    } else if (score1 >= 80) {
        console.log("B");
    } else if (score1 >= 70) {
        console.log("C");
    } else {    
        console.log("below c");
    }
    //switch - great for exact matches
    const day = "Monday";   
switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Friday":
        console.log("TGIFI");
        break;
    default:
        console.log("Midweek");
}   

//ANCHOR - falsy values
False | 0 | ""  | null | undefined | NaN