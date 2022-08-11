// Variables

/*
 camelCase (recommend js way)
 snake_case
 TitleCase
*/

// 🚫 avoid using var
var firstName = "John";

// Your first choice when creating (declaring) a variable should be const
const lastName = "Doe";

// Also good
let isHappy = true;

console.log(firstName);
console.log(lastName);
console.log(isHappy);

const duckName = ""; // example of empty string

let city; // let city = undefined;

// Variables can't be named after reserved words https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words
// const class = "hello";

console.log(typeof 7); // number
console.log(typeof 4.7); // number
console.log(typeof NaN); // number
console.log(typeof ""); // string
console.log(typeof "john"); // string
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof undefined); // undefined
console.log(typeof null); // null (Bug) object

console.log(typeof firstName); // string
console.log(typeof lastName); // string
console.log(typeof isHappy); // boolean
console.log(typeof duckName); // string


// declaration and assignment
let hobby = "soccer";

// re-assignment
hobby = 555;

console.log(hobby)

// declaration and assignment (gets sealed)
const favoriteFood = "pizza";

// re-assignment wont work
// favoriteFood = 45454;

// operators
// + - * / %

console.log(5 * 6)
console.log(110 + 2);

// + overloading for strings
console.log("Favorite" + "Pizza")