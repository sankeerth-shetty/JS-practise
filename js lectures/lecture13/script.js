const a = [
    {name :'numerator', category :'it', start : 1990, end : 2023},
    {name :'idea', category :'telecom', start : 1990, end : 2023},
    {name :'yrf', category :'production', start : 1980, end : 2019},
    {name :'stark industries', category :'it', start : 1980, end : 2040},
    {name :'oscorp', category :'it', start : 1990, end : 2010},
    {name :'vault', category :'finance', start : 2000, end : 2023},
    {name :'miami inc', category :'it', start : 1930, end : 2015},
    {name :'disney pixar', category :'animation', start : 1990, end : 2023},
    {name :'jio inc', category :'telecom', start : 2015, end : 2040},
    {name :'airtel', category :'telecom', start : 1990, end : 2025},
];

const ages = [13,12,20,10,5,54,21,44,61,13,15,45,25,64,32];

// to print all companies detail :-
// for(let i=0; i<a.length; i++)
// {
//     console.log(a[i]);
// }

// to print all companies detail with forEach :-
// a.forEach(function(company){
//     console.log(company);
// });

// to print all companies name with forEach :-
// a.forEach(function(names){
//     console.log(names.name);
// });

// to print all companies category with forEach :-
// a.forEach(function(categories){
//     console.log(categories.category);
// });

// to print all companies start year with forEach :-
// a.forEach(function(starty){
//     console.log(starty.start);
// });

// to print all companies end year with forEach :-
// a.forEach(function(endy){
//     console.log(endy.end);
// });

// to print ages which is greater than 21 years :-
// let canDrink = [];
// for(i=0; i<ages.length; i++)
// {
//     if(ages[i] >= 21)
//     {
//         canDrink.push(ages[i]);
//     }
// }

// console.log(canDrink);

//to print ages greater than 21 years with .filter ;-
// const canDrink = ages.filter(function(b){
//     if(b >= 21)
//     {
//         return true;
//     }
// });
// console.log(canDrink);

//by using arrow function

// const canDrink = ages.filter(age => age>=21);
// console.log(canDrink);