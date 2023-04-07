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

let arr =[1,2,3,4,5,6,7,8,9];
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