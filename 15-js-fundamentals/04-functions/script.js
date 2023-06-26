// Ways of Creating Functions
// Create a function to say hello.
// 1. Function declaration
// function sayHello() {
//     console.log("Hello, Welcome to function");
// }
// Calling a Function/invocation
// sayHello();

// 2.Function expression
// let greeting = function() {
//     console.log("Good Morning");
// }
// Calling a Function/invocation
// greeting();

// const addNum=function(num1,num2) {
//     let result = num1 + num2;
//     console.log(result);
// }
// addNum(1,2);

// function multiplyNumber(a,b,c){
//     let result = a*b*c;
//     console.log(result);
// }

// multiplyNumber(7.3,8.7,9.3);

// Return Keyword

function multiplyNumber(a,b,c){
    let result = a*b*c;
    return result;
}
let ans=multiplyNumber(7.3,0.2,9.3);
console.log(ans);