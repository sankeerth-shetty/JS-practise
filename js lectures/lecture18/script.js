const Car = function(make, speed) {
    this.make = make,
    this.speed = speed,
    
    Car.prototype.accelerate = function () {
        this.speed += 10;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

    Car.prototype.brake = function () {
        this.speed -= 5;
        console.log(`${this.make} is going at ${this.speed} km/h`);
    }

}
const bmw = new Car('BMW', 120);
const mercedes = new Car('Mercedes', 95);

bmw.accelerate();
bmw.brake();

mercedes.accelerate();
mercedes.brake();

//Program written by me

// function Constructor(make,speed){
//     this.make = make,
//     this.speed = speed,
//     console.log(`The brand is ${this.make} and speed is ${this.speed}`);
//     this.accelerate = function(){
//         console.log(`The speed has been accelerated and its ${this.speed += 10} km/h`);
//     }
//     this.brake = function(){
//         console.log(`The driver pushed brake so speed is now ${this.speed -= 5} km/h`);
//     }
// }

// const obj1 = new Constructor('BMW',120);
// obj1.accelerate();
// obj1.brake();


// const obj2 = new Constructor('Mercedes',95);
// obj2.accelerate();
// obj2.brake();