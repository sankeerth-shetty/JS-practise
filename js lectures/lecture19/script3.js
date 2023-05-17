// Constructor Functions and the new Operator

const Person = function (firstName,birthYear){
    //Instance properties
    this.firstName = firstName;
    this.birthYear = birthYear;

    //Never to this!
    //this.calcAge = function () {
        // console.log(2037 - this.birthYear);
    // }
}

const jonas = new Person('Jonas',1991);
console.log(jonas);

Person.hey = function(){
    console.log('Hey there');
    console.log(this);
}
Person.hey()


//prototypes
console.log(Person.prototype);

Person.prototype.calcAge = function() {
    console.log(2037 - this.birthYear);
}

jonas.calcAge();

console.log(jonas.__proto__);
// console.log(jonas.prototype == Person);
// console.log(jonas.__proto__ == Person.prototype);
console.log(jonas.__proto__ === Person.prototype);


console.log(Person.prototype.isPrototypeOf(jonas));