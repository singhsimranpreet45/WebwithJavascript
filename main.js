//console

console.log("Hello")
console.warn("STOP")
console.error("Error")

// Variables: var, let, const (constant)

let age = 30;

console.log(age);

// Data types: String, Numbers, Boolean, null, undefined, Symbol.

const name = "John";
const age = 38;
const rating = 4.5;
const isCool = true;
const x = null;
const y = undefined;
let z;

console.log(typeof name); // gives type of data

// Strings - Concatenation

const name = "John";
const age = 38;

console.log("My name is " + name + " and I am " + age);

// Template String
console.log('My name is ${name} and I am ${age}');

// Can also assign to variable
const hello ='My name is ${name} and I am ${age}';

console.log(hello)

// String Properties and Methods
const s = 'hello world';

console.log(s.length); // to get length of the string, a property doesn't have (), if it does it's a method
console.log(s.toUpperCase()); // to uppercase all the letters
console.log(s.toLowerCase()); // to lowercase all the letters
console.log(s.substring(0,5)); // to display part of the string instead of full
console.log(s.substring(0,5).toUpperCase) // could tack on other methods as well
console.log(s.split('')); // to split the string into an array, (parameter) = '' - to split my letter, used for blogpost tags - use ', '

// Arrays - variables that hold multiple values 

const numbers = new Array(1,2,3,4,5); // new - constructor

// Example

const fruits = ['apples', 'oranges', 'pears'];


console.log(fruits[1]); // to get orange

fruits[3] = 'grapes'; // to add grapes to the array - inefficient
fruits.push('mangoes'); // add value to the end - efficient
fruits.unshfit('strawberries') // add value to the front
fruits.pop(); // pop the last value off

console.log(Array.isArray(fruits)); // to check if it's an array

console.log(fruits.indexOf('oranges')); // to check index of value
// you can add values to the array, the only thing you cannot do is reassign using the const


// Object literals

const person = {
	firstName: 'John',
	lastName: 'Doe',
	age: 30,
	hobbies: ['music', 'movies', 'sports'],
	address: {
		street: '50 main st',
		city: 'Auckland',
		state: 'Auckland'
	}
}


console.log(person); // to get all the elements 
console.log(person.firstName); // to get one of the elements
console.log(person.firstName, person.lastName); // to get some of the elements


console.log(person.hobbies[1]); // let's say we want to get movies
console.log(person.address.city); // to get the city

const { firstName, lastName, address: {city}} = person; // to pull out those elements from person
console.log(firstName); // should give John
console.log(city); // should give Auckland 

// add properties 
person.email = 'john@gmail.com'

console.log(person); // should print all the elements with the added email element


// Arrays of objects

const todos = [
 { 
   id: 1,
   text: 'Take out trash',
   isCompleted: true
 },
 { 
   id: 2,
   text: 'Meeting with boss',
   isCompleted: true
 },
 { 
   id: 3,
   text: 'Dentist Appt',
   isCompleted: false
 }
];

console.log(todos);
console.log(todos[1].text); // To get the "meeting with boss", 1 = second array

// Json formatted code - send data to a server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON)

// For Loop

for(let i =0; i < 10; i++){ // Whatever is inside {} will run until i < 10; is TRUE
   console.log(i); // will print values from 0 to 9, to include 10 change code: i <= 10.
}

// For Loop example 2 

for(let i =0; i <= 10; i++){
   console.log('For Loop Number: ${i}'); 
}

// While Loop - difference is that variable is set outside of the loop

let i = 0;
while(i < 10) {
	console.log('While Loop Number: ${i}');
	i++; // increment by 1 - important step otherwise it will keep looping 
}

// Loop through arrays using Todo example

const todos = [
 { 
   id: 1,
   text: 'Take out trash',
   isCompleted: true
 },
 { 
   id: 2,
   text: 'Meeting with boss',
   isCompleted: true
 },
 { 
   id: 3,
   text: 'Dentist Appt',
   isCompleted: false
 }
];

for(let i =0; i < todos.length; i++){ // .length will give number of items in the array
   console.log(todos[i].text); 
}

// Another method of looping

const todos = [
 { 
   id: 1,
   text: 'Take out trash',
   isCompleted: true
 },
 { 
   id: 2,
   text: 'Meeting with boss',
   isCompleted: true
 },
 { 
   id: 3,
   text: 'Dentist Appt',
   isCompleted: false
 }
]; 

for(let todo of todos) {
	console.log(todo); // Could use todo.text
}

/* 

Higher order array methods: To do any kind of iteration with arrays

forEach: Loops
Map: Allow us to create a new array from an array
Filter: Allow us to create a new array based on a condition 

*/

const todos = [
 { 
   id: 1,
   text: 'Take out trash',
   isCompleted: true
 },
 { 
   id: 2,
   text: 'Meeting with boss',
   isCompleted: true
 },
 { 
   id: 3,
   text: 'Dentist Appt',
   isCompleted: false
 }
]; 

todos.forEach(function(todo){
	console.log(todo.text);
})

const todoText = todos.map(function(todo){
	return todo.text;  // Loop through and return an array of just the text values 
});

console.log(todoText);

// Retun only completed todos.

const todoCompleted = todos.filter(function(todo){
  return todo.isCompleted == true;  
}).map(function(todo){ // to just get the text that is TRUE.
  return todo.text; 
})

console.log(todoCompleted);



// Conditionals

const x = 10;

if(x == 10) { // === : To match data type
  console.log('x is 10');
} else if (x > 10){
  console.log('x is greater than 10')
} else {
  console.log('x is less than 10');
}

// example 2

const x = 4;
const y = 10;

if(x > 5 || y > 20) { // || = or, && = and.
  console.log('x is more than 5 or y is more than 10');
}



// Iternary Operator - shorthand if statement
// ? = then , : = else

const x = 11;
 
const color = x > 10 ? 'red' : 'blue'; 

console.log(color);

switch(color) { // switches
  case 'red':
   console.log('color is red');
   break;
  case 'blue':
   console.log('color is blue');
   break;
  default:
   console.log('color is NOT red or blue');
   break;
}




// Functions

function addNums(num1, num2) {
  console.log(num1 + num2);
}

addNums(5,4)

// another example

function addNums(num1 = 1, num2 = 1) {
  return num1 + num2;
}

console.log(addNums(5,5));

// another example 2

const addNums = num1 => num1 + 5;

console.log(addNums(5));

// Earlier example

todos.forEach((todo) => console.log(todo));




// Object Oriented Programming - Constructor Function

function Person(firstName, lastName, dob) { //P must be capital as it's a constructive function
   this.firstName = firstName;
   this.lastName = lastName;
   this.dob = new Date(dob);
   this.getBirthYear = function() {
    return this.dob.getFullYear();
   }
   this.getFullName = function() {
    return '${this.firstName} ${this.lastName}';
   }
} 

Person.prototype.getBirthYear = function() {
  return this.dob.getFullYear();
}

Person.prototype.getFullName = function(){
  return '${this.firstName} ${this.lastName}';
}

// Instantiate Object
const person1 = new Person('John', 'Doe', '4-3-1980');   // we did new Array earlier
const person2 = new Person('Mary', 'Smith','3-6-1970'); 

console.log(person2.getFullName());

