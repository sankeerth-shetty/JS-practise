// props and states in ReactJs

// Spread operator :
// Rest operator :

// -> Spread Operator :

// function addition (x,y,z,p)
// {
//     return x+y+z+p;
// }

// let res = addition (25,25,25,25);
// let res = addition ([25,25,25,25]);

// const vl = [25,25,25,25];
// let res = addition(...vl);
// console.log(res);

// function addition (x,y,z)
// {
//     return x+y+z;
// }

// let res = addition (25,25,25,25);
// console.log(res);

// let total = 0;
// function addition(...args){
//     for (const x of args)
//     {
//         total = total + x
//     }
//     return total;
// }

// let res = addition (25,50,50,50);
// console.log(res);

// -> Convert Array To Object

// const fruits = ["Apple","Mango","Orange"];
// const obj = Object.assign({}, fruits);
// console.log(obj);

// const fruits = ["Apple","Mango","Orange"];
// const obj = {};
// fruits.forEach((value,index) => {
//     obj[`Key ${index}`] = value;
// });
// console.log(obj);

// const fruits = ["Apple","Mango","Orange"];
// const map = new Map([
//     ['name','Alex Hales'],
//     ['age',27],
//     ['country','US']
// ])

// console.log(map);
// console.log(map.delete('name'));
// console.log(map);
// console.log(map.size);

// map.set("name","Shetty");
// console.log(map);
