function Constructor(make,speed){
    this.make = make,
    this.speed = speed,
    console.log(`The brand is ${this.make} and speed is ${this.speed}`);
    this.accelerate = function(){
        console.log(`The speed has been accelerated and its ${this.speed + 10} km/h`);
    }
    this.brake = function(){
        console.log(`The driver pushed brake so speed is now ${this.speed - 5} km/h`);
    }
}

const obj1 = new Constructor('BMW',120);
obj1.accelerate();
obj1.brake();
// obj1.accelerate();
// obj1.brake();


const obj2 = new Constructor('Mercedes',95);
obj2.accelerate();
obj2.brake();
// obj2.accelerate();
// obj2.brake();