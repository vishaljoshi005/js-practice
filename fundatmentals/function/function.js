// const {promisify} = require('util');
// function name(){
//     alert('name');
// }

// ES 6

// let names = () => {
//     alert('names');
// };

// async await 

// function greeting(err, name) {
//     console.log(`Welcome ${name}`);
// }

// function ask(name, callback) {
//     if(name==='value'){
//         this.name = name;
//         callback(null, name);
//     }else {
//         callback('error');
//     }
// }

// let main = promisify(ask);

// async function names(){
//     let mains = await main();
// }

// names().then(()=>{
//     console.log('data');
// },(error)=>{
//     console.log('error');
// });

// main('values').then(data => greeting(null, data)).catch(error => console.log(error));


// function greeting(error, name) {
//     if(name) console.log(name);
//     if(error) throw new Error('Error Browski');
// }

// function ask(name, callback) {
//     if(name==='value'){
//         this.name = name;
//         callback(null, name);
//     }else {
//         callback('error');
//     }
// }
// let askPromise = promisify(ask);

// async function execute(name) {
//     try{
//         const data = await askPromise(name, greeting);
//     }
//     catch(error){
//         console.log(error);
//         console.log('error-1');
//     }
// }
// execute('values');

// let greeting = (name) => {
//     alert(name);
// };

// let askPrompt = () => {
//     return new Promise((resolve, reject)=>{
//         let name = prompt('Enter the name');
//         resolve(name);
//     });
    
// };

// // let askPromise = promisify(askPrompt);

// let execute = async () => {
//     try{
//         const name = await askPrompt();
//         greeting(name);
//     }catch(error) {
//         console.log(error);
//     }
// };

// execute();

// function checkAge(age) {
//     if (age > 18) {
//       return true;
//     } else {
//       // ...
//       return confirm('Did parents allow you?');
//     }
//   }

//   function checkAge(age) {
//     if (age > 18) {
//       return true;
//     }
//     // ...
//     return confirm('Did parents allow you?');
//   }

// function min(a, b){
//     if(a<b){
//         return a;
//     }else{
//         return b;
//     }
// }

// console.log(min(3,-1));

// function pow(a,b) {
//     return a**b;
// }

// console.log(pow(1,100));

// let schedule = {};

// schedule['Time'] = "08:30";

// function isEmpty(obj) {
//     let empty = false;
//     for(let key in obj){
//         empty = true;
//     }
//     return empty;
// }

// console.log(isEmpty(schedule));

// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 140
// };

// function sumGame(obj) {
//     let sum =0;
//     for(let key in obj){
//         sum+=obj[key];
//     }
//     return sum;
// }
// console.log(sumGame(salaries));

let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };

function multiplyNumeric(obj) {
    return Object.assign(obj, {width: obj.width*2, height: obj.height*2});
}

console.log(multiplyNumeric(menu));