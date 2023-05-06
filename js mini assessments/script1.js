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
}

const cars = new Cars("Bmw",120);
cars.myCarSpeed();
cars.accelerate();
cars.brake();
cars.myCarSpeed();