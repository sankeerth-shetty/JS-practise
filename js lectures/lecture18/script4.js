// Prototype inheritence : 

// const users = {
//     name : 'Shetty',
//     username : 'Shanky',
//     password : 'A1234',
//     signin : function (username,password){
//         if(username === this.username && password === this.password){
//             console.log('Login successful');
//         } else {
//             console.log('Authentication failed');
//         }
//     }
// }

// users.signin("Shetty","789RRR");
// users.signin("Shanky","A1234");
// console.log(users.name);
// console.log(users.password);
// console.log(users.signin);

// User authentication with private password

// class SignIn{
//     #password
//     constructor(name,username,password)
//     {
//         this.name = name;
//         this.username = username;
//         this.#password = password;
//     }

//     getter(username,password){
//         if(username === this.username && password === this.#password){
//             console.log('Login successful');
//         } else {
//             console.log('Authentication failed');
//         }
//     }

//     setter(newPassword){
//         this.#password = newPassword;
//     }
// }

// const obj = new SignIn("Shetty","Shanky","A1234");
// obj.getter("Shanky","A1234");
// console.log(obj.name);
// console.log(obj.password);
// console.log(obj.#password);
// obj.setter("S1234");
// obj.getter("Shanky","A1234");
// obj.getter("Shanky","S1234");

