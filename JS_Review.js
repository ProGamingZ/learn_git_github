// Arrow Functions vs. Regular Functions 
function sample()
{
   // console.log("Hello, World!");
   return "Hello";
}

let x = sample();
let y = () => { return " World!"};
console.log(x + y());

// sample function expression
const multiply = function (a, b) {return a * b};
console.log(multiply(2, 3));

// sample func arrows
const func0 = () => {return "Hello World!"};
console.log(func0());

const func1 = (val) => { return "Hello World!" + val};
console.log(func1(" from JavaScript penultimate!"));

const func2 = val => "final hello!" + val;
console.log(func2(" from JavaScript last!"));