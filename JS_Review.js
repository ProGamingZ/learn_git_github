// Arrow Functions vs. Regular Functions #1
function sample()
{
   // console.log("Hello, World!");
   return "Hello";
}

let x = sample();
let y = () => { return " World!"};
// console.log(x + y());

// sample function expression
const multiply = function (a, b) {return a * b};
// console.log(multiply(2, 3));

// sample func arrows
const func0 = () => {return "Hello World!"};
// console.log(func0());

const func1 = (val) => { return "Hello World!" + val};
// console.log(func1(" from JavaScript penultimate!"));

const func2 = val => "final hello!" + val;
// console.log(func2(" from JavaScript last!"));


// Destructuring (Objects and Arrays) for cleaner props and state #2
const person = { firstName: "John", lastName: "Doe", age: 30 }; 
const { firstName, lastName } = person;
console.log(firstName); // Output: John
console.log(lastName);  // Output: Doe

const Name = "John Doe";
const [a1, ...a6] = Name;
console.log(a1);
console.log(a6);

const fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200]
]);
for (const [fruit, quantity] of fruits) {
  console.log(`${fruit}: ${quantity}`);
}

const {0:b0,...b1} = [...fruits];
console.log(b0);
console.log(b1);

const [b2,...b3] = [...fruits];
console.log(b2);
console.log(b3); 