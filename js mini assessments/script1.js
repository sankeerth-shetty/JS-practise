//Program written by me

// class Cars {
//     constructor(make, speed){
//         this.make = make;
//         this.speed = speed;
//     }

//     myCarSpeed(){
//         console.log(`The current speed of car ${this.make} in km is ${this.speed}`);
//     }

//     accelerate(){
//         this.speed += 10;
//         console.log(`The accelerated speed is ${this.speed}`);
//     }

//     brake(){
//         this.speed -= 5;
//         console.log(`Speed after brake applied is ${this.speed}`);
//     }

//     getter(speedUs){
//         this.speed = speedUs / 1.6;
//         console.log(`The speed of car in mi/h is ${this.speed}`);
//     }

//     setter(){
//         this.speed *= 1.6
//         console.log(`The speed of car converted from mi/h to km is ${this.speed}`);
//     }
// }

// const cars = new Cars("Bmw",120);
// cars.myCarSpeed();
// cars.accelerate();
// cars.brake();
// cars.getter();
// cars.setter();
// cars.myCarSpeed();


// class EV extends Cars{
//     constructor(make,speed,charge){
//         super(make,speed);
//         this.charge = charge;
//     }

//     chargeBattery(chargeTo){
//         this.charge = chargeTo;
//         console.log(`The ev car has ${this.charge}% battery life`);
//     }

//     accelerate2(){
//         this.speed += 20;
//         this.charge -= 1;
//         console.log(`Accelerated!!, ${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
//     }

//     brake2(){
//         this.speed -= 10;
//         console.log(`Brake applied!!, ${this.make} going at ${this.speed} km/h, with a charge of ${this.charge}%`);
//     }

//     myCarSpeed2(){
//         console.log(`The current speed of ev car ${this.make} in km is ${this.speed} and battery life is ${this.charge}%`);
//     }
// }

// const cars2 = new EV("Audi",140);
// cars2.myCarSpeed();
// cars2.accelerate();
// cars2.brake();
// cars2.getter(180);
// cars2.setter();
// cars2.myCarSpeed();

// const Tesla = new EV("Tesla",140,50);
// Tesla.chargeBattery(90);
// Tesla.brake2();
// Tesla.accelerate2();
// Tesla.myCarSpeed2();


//Getter and Setter (Car speed)

// class CarC1 {
//         constructor(make, speed){
//             this.make = make;
//             this.speed = speed;
//         }
    
//         accelerate(){
//             this.speed += 10;
//             console.log(`The accelerated speed is ${this.speed}`);
//         }
    
//         brake(){
//             this.speed -= 5;
//             console.log(`Speed after brake applied is ${this.speed}`);
//         }
    
//         get speedUs(){
//             return this.speed/1.6;
//         }
    
//         set speedUs(speed){
//             this.speed = speed * 1.6;
//         }
// }

// const ford = new CarC1 ("Ford",120);
// console.log(ford.speedUs);
// ford.accelerate();
// ford.accelerate();
// ford.brake();
// ford.speedUs = 50;
// console.log(ford);

