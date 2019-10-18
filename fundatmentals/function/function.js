const {promisify} = require('util');
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