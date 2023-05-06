class Cars {
    constructor(make, speed){
        this.make = make;
        this.speed = speed;
    }

    myCarSpeed(){
        console.log(`the current speed of car ${this.make} in km is ${this.speed}`);
    }

    accelerate(){
        this.speed += 10;
        console.log(`the accelerated speed is ${this.speed}`);
    }

    brake(){
        this.speed -= 5;
        console.log(`Speed after brake applied is ${this.speed}`);
    }

    getter(speedUs){
        if(this.speed = speedUs){
            this.speed = speedUs / 1.6;
            console.log(`the speed of car in mi/h is ${this.speed}`);
        }
    }

    setter(speedUs){
        this.speed = speedUs * 1.6;
        console.log(`the speed of car mi/h ${speedUs} converted from mi/h to km is ${this.speed}`);
    }
}

const cars = new Cars("Bmw",120);
cars.myCarSpeed();
cars.accelerate();
cars.brake();
cars.getter(120);
cars.setter(120);
cars.myCarSpeed();

// const cars2 = new Cars("Audi",140);
// cars2.myCarSpeed();
// cars2.accelerate();
// cars2.brake();
// cars2.getter(140);
// cars2.setter(140);
// cars2.myCarSpeed();