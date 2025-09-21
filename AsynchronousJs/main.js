// xhr Request

// const getPosts = (resources) => {
//     let request = new XMLHttpRequest();

//     // GET POST PUT ...

//     // console.log(request.readyState);

//     request.addEventListener('readystatechange', ()=> {
//         if(request.readyState === 4 && request.status === 200){
//             let data = JSON.parse(request.responseText);
//             console.log(data);
//         }else if(request.readyState === 4){
//             console.log('There is Something...');
//         }
//     });

//     request.open('GET',resources);
//     request.send();
// }

// // getPosts('https://jsonplaceholder.typicode.com/posts');
// getPosts('./posts.JSON');




// Callback

// function shouldPrintFirst(callback) {

//     setTimeout( () => {
//         console.log('First');
//         callback();
//     },1000)

// }

// function shouldPrintSecond() {
//     console.log('Second');
// }

// shouldPrintFirst(shouldPrintSecond);

// function sumUpNumbers (num1,num2,callback) {

//     let summedNumbers;
//     setTimeout( () => {
//         summedNumbers = num1 + num2;
//         callback(summedNumbers);
//     },1000);

// }

// function printSummedNumbers (value) {
//     console.log(`The Summed number ${value}`);
// }

// // printSummedNumbers(sumUpNumbers(20,30));

// sumUpNumbers(20,30,printSummedNumbers);

// Callback Hell 
// Callback hell is an callback inside anothe callback inside another calback .


// function counter() {

//     setTimeout( () => {
//         console.log("One");
//         setTimeout( () => {
//             console.log("Two");
//             setTimeout( () => {
//                 console.log("Three");
//                 setTimeout( () => {
//                     console.log("Four");
//                 },200);
//             },600)
//         },800);

//     },1000);

// }

// counter();

// Promises

// let condition = false;

// const testPromises = new Promise( (resolve, reject) => {

//     if(condition){
//         resolve("Promise Is Looking OK!");
//     }else{
//         reject("Promise is Loooking Crazy !");
//     }

// });


// testPromises.then( (successMessage) => {
//     console.log(successMessage);
// }).catch( (err) => console.log(err));

// Promoise Real API

// const getPosts = (resources) => {

//     return new Promise( (resolve,reject) => {
//         let request = new XMLHttpRequest();

//         // GET POST PUT ...

//         // console.log(request.readyState);

//         request.addEventListener('readystatechange', ()=> {
//             if(request.readyState === 4 && request.status === 200){
//                 let data = JSON.parse(request.responseText);
//                 resolve(data);
//             }else if(request.readyState === 4){
//                reject('Something Went wrong...');
//             }
//         });

//         request.open('GET',resources);
//         request.send();
//     });

// }

// getPosts('https://jsonplaceholder.typicode.com/posts').then( (data) => {
//     console.log(data);
//     return getPosts('https://jsonplaceholder.typicode.com/commentss');
// }).then( data => {
//     console.log("Comments ",data);
//     return getPosts('https://jsonplaceholder.typicode.com/albums');
// }).then( data => {
//     console.log("Albums", data);
// }).catch( (err) => console.log(err));


// FETCH API

// fetch('https://jsonplaceholder.typicode.com/commentss')
//     .then((response) => {
//         return response.json();
//     }).then(data => {
//         console.log(data);
//     }).catch(err => console.log(err));

// Async and Await 

const getData = async () => {

    const request = await fetch('https://jsonplaceholder.typicode.com/comments');

    const response = await request.json();

    return response;

}

getData().then( data => {
    console.log(data);
}).catch( (err) => console.error(err));


