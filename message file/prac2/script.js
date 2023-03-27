const a = [
    { name: 'bit buffs', category: 'it', start: 1990, end: 2023 },
    { name: 'idea', category: 'telecom', start: 1990, end: 2023 },
    { name: 'yrf', category: 'production', start: 1980, end: 2019 },
    { name: 'stark industries', category: 'it', start: 1980, end: 2040 },
    { name: 'oscorp', category: 'it', start: 1990, end: 2010 },
    { name: 'vault', category: 'finance', start: 2000, end: 2023 },
    { name: 'miami inc', category: 'it', start: 1980, end: 2015 },
    { name: 'disney pixar', category: 'animation', start: 1990, end: 2023 },
    { name: 'jio inc', category: 'telecom', start: 2015, end: 2040 },
    { name: 'airtel', category: 'telecom', start: 1990, end: 1995 },
];

const ages = [13, 12, 20, 10, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

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

// const retailCompanies = a.filter(function(company){
//     if(company.category === 'telecom'){
//         return true;
//     }
// });

// console.log(retailCompanies);

// By using arrow function

// const retailCompanies = a.filter(company => company.category === 'telecom');
// console.log(retailCompanies);

// get 80's companies

// const eightiesCompanies = a.filter(company => (company.start >= 1980 && company.start < 1990));
// console.log(eightiesCompanies);

// get companies lasted ten years

// const lastedTenYears = a.filter(company => (company.end - company.start >= 10));
// console.log(lastedTenYears);

// map
// create array of company names:

// const companyNames = a.map(function(company){
//     return company.name;
// });
// console.log(companyNames);

// create array of 1

// const text = a.map(function(company){
//     return 1;
// });
// console.log(text);

// const textMap = a.map(function(company){
//     return `${company.name} [${company.start} - ${company.end}]`;
// });
// console.log(textMap);

// const testMap = a.map(company => `${company.name} [${company.start} - ${company.end}]`);
// console.log(testMap);

// const ageSquare = ages.map(age => Math.sqrt(age));
// console.log(ageSquare);

// const agesTimesTwo = ages.map(age => age*2);
// console.log(agesTimesTwo);

// const ageMap = ages.map(age => Math.sqrt(age)).map(age => age*2);
// console.log(ageMap);

//sort
// const sortedCompanies = a.sort(function(c1,c2){
//     if(c1.start > c2.start)
//     {
//         return 1;
//     }
//     else{
//         return -1;
//     }
// });

// console.log(sortedCompanies);

// const sortedComp = a.sort((a,b) => (a.start > b.start ? 1 : -1));
// console.log(sortedComp);


// sort ages 
// const sortAges = ages.sort();
// console.log(sortAges);

// (ascending order sort)
// const sortAges = ages.sort((a,b) => a-b);
// console.log(sortAges);

// (decending order sort)
// const sortAges = ages.sort((a,b) => b-a);
// console.log(sortAges);

// reduce
// let ageSum = 0;
// for(let i=0; i<ages.length; i++){
//     ageSum = ageSum + ages[i];
// }
// console.log(ageSum);

// adding by reduce
// const ageSum = ages.reduce(function(total,age){
//     return total = age;
// },0);

// console.log(ageSum);
// const ageSum = ages.reduce((total,age) => total + age, 0);
// console.log(ageSum);

// get total years for each companies : 

// const totalYears = a.reduce(function(total,company){
//     return total = (a.end - a.start);
// }, 0);

// console.log(totalYears);


//combine methods

// const combined = ages.map(age => age*2)
// .filter (age => age>=40)
// .sort ((a,b) => a-b)
// .reduce ((a,b) => a-b, 0);

// console.log(combined);