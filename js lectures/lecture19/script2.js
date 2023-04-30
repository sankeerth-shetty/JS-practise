// #x -> x is private - ES10 - 2019

const person = {
    company : "Shetty Infotech",
    start : 2010,
    end : 2020
};

person.company = "L&T";
person.employees = 50;
console.log(person)
console.log(person.company);

class Details{
    #name = "Sankeerth";
    name2 = "Shanky"
    surname = "Shetty";
    info(){
        console.log(`my name is ${this.name} and surname is ${this.surname}`);
        console.log(`my name is ${this.name2} and surname is ${this.surname}`);
    }
}
const obj = new Details();
// console.log(obj.name);
console.log(obj.info());