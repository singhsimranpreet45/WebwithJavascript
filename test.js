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
