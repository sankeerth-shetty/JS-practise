// Inheritence in Javascript 

// class, Object, constructor

// inheritance - single level - Parent class (super class), Child class (sub class)


// Single level inheritance 

// class Animal{
//     constructor()
//     {
//         console.log("this is parent constructor");
//     }
// }

// class Dog extends Animal{
//     display()
//     {
//         console.log("this is child class");
//     }
// }

// const obj = new Dog();
// obj.display();


//Multi level inheritence 

// class Animal{
//     sound()
//     {
//         console.log("every animal has different sound");
//     }
//     sleep()
//     {
//         console.log("every animal sleep");
//     }
// }
// class Dog extends Animal{
//     speak()
//     {
//         console.log("dog barks");
//     }
//     eat()
//     {
//         console.log("dog is eating");
//     }
// }
// class PetDog extends Dog{
//     play()
//     {
//         console.log("pet dogs are playing");
//     }
// }

// const obj = new PetDog();
// obj.eat();
// obj.sleep();
// obj.play();
// obj.sound();
// obj.speak();


//To call get from parent constructor and display in child

class Shape{
    constructor(name)
    {
        this.name = name;
        console.log(name);
    }
}

class Rectangle extends Shape{
    constructor(name,index)
    {
        super(name);
        this.index = index;
    }
    display()
    {
        console.log(`Welcome ${this.name} your index is ${this.index}`);
    }
}

const obj = new Rectangle("Ram",1);
obj.display();
const ab = new Shape();



