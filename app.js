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