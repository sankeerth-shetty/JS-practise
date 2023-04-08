let x = 50;

const p = document.createElement('p');
document.body.append("This is paragraph");
document.body.appendChild(p);
p.textContent = "This is paragraph 2";
console.log(p);

let arr1 = ['apple','orange','mango'];
console.log(typeof(arr1));
let res = arr1.unshift('kiwi');
console.log(res);
console.log(arr1);
arr1.pop(); 
console.log(arr1);
arr1.shift();
arr1.push('grapes');
console.log(arr1);

let arr2 = [1,2,3,4,5,6,7,8,9];

//Looping : while, for, do..while, for in, for of
let i = 0;
while(i<arr2.length)
{
    console.log(arr2[i]);
    i = i+1;
}

for(let i=0; i<arr2.length; i++)
{
    console.log(arr2[i]);
}

let j = 0;
do{
    console.log(arr2[j]);
    j = j+1;
} while(j<arr2.length);

//while, for - entry controlled loop :-

let k = 10;
while(k<10)
{
    console.log('Hello World');
}

//do..while - exit controlled loop :-

let l = 10;
do{
    console.log(l);
}while(l<10);

let arr = arr2;
for(let i=0; i<arr.length; i++){
    if(i%2 == 0)
    {
        console.log(arr[i]);
        // console.log(i);
    }
}

for(let i=0; i<5; i++){
    for(let j=0; j<5; j++)
    {
        console.log('*');
    }
    console.log('\n');
}