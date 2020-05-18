console.log('it worked');

const add = (a, b) => a + b;
const substract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

const sum = numbers => numbers.reduce((accumulator, current) => accumulator + current);
const product = numbers => numbers.reduce((accumulator, current) => accumulator * current);
const difference = numbers => numbers.reduce((accumulator, current) => accumulator - current);
const quotient = numbers => numbers.reduce((accumulator, current) => accumulator / current);


// Testing functions
const numbers = [1, 2, 3, 4, 5];

console.log(sum(numbers));
console.log(product(numbers));
console.log(difference(numbers));
console.log(quotient(numbers));

// Operate function below