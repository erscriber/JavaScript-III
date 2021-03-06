/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit binding the this keyword is referring to whatever is to the left of the dot. 
* 2. Explicit binding uses call, apply and bind to say what a function is going to be. Call makes you indicate each argument individually, apply allows you to use an array and bind gives you a new array you can call later.
* 3. New binding when used, a new object is created inside of the function. 
* 4. Window binding is the default use of the this keyword. If nothing is specified, window binding seaches the entire environment. This keyword is used outside of a function.
*
* write out a code example of each explanation above
*/

// Principle 1 - Window (Global)

function window() {
	return this;
}

// Principle 2 - Implicit

const me = {
	name: 'Erin',
	sayName: function(){
		console.log(this.name);
	}
};
me.SayName();


// Principle 3 - New

function Pet(obj) {
	this.petName = obj.petName;
	this.species = obj.species;
	this.whatAmI = function(iAm){
		return `${this.petName} is a ${this.species}`
	}
}

let Toby = new Pet({
	petName: 'Toby'
	species: 'dog'
})

let Shadow = new Pet({
	petName: 'Shadow'
	species: 'cat'
})

whatAmI(Toby)

// Principle 4 - Explicit

const sayName = function(){
	console.log('My name is ' + this.name);
};

const Erin = {
	name: 'Erin',
};

sayName.call(Erin);