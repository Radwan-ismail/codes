// Selecting the DOM

/*

    by id  #ud
    by classname .claas
    by tagname    h1 , p, 


*/

// let element = document.querySelector("h1");

// let element2 = document.querySelector("#element2");
// let element3 = document.querySelectorAll(".element3");

//select by id , bytagname, byclassname

// let element = document.getElementById("element2");

// let element2 = document.getElementsByTagName("h1")[2];

// let element3 = document.getElementsByClassName("success")[0];



// console.log(element);
// console.log(element2);
// console.log(element3);



//Adding Element to the DOM

// let main = document.querySelector("#main");

// let newElement = document.createElement("p");

// let newContent = document.createTextNode("Welcome To The New Element ");

// newElement.append(newContent);

// let newElement2 = document.createElement("p");

// let newContent2 = document.createTextNode("Welcome To The New Element2 ");

// newElement2.appendChild(newContent2);

// main.append(newElement);
// main.append(newElement2);

// newElement2.remove();


// console.log(newElement);


//Adding Style


// let div = document.querySelector("div");
// let p = document.querySelector("p");

// div.classList.add("success");
// // div.classList.remove("success");

// // div.classList.add("error");

// div.style.border = "1px solid #ee4444";

// p.style.fontSize = "18px";

//Mouse Events 

// let button = document.querySelector("button");

// button.addEventListener("mouseover", ()=> {
//     document.body.style = "background: #434344";
// });

// button.addEventListener("mouseleave", ()=>{
//     document.body.style = "background: #446466";
// });


//Keyboard Events

/*

onkeydown	The event occurs when the user is pressing a key
onkeypress	The event occurs when the user presses a key
onkeyup	The event occurs when the user releases a key

*/

let typing = document.querySelector("#typing");
let clone = document.querySelector("#clone");

// typing.addEventListener("keyup", ()=> {
//     clone.innerHTML = typing.value;
// });

typing.addEventListener("keydown", (event)=> {

//    if(event.key == 'b'){
//     document.body.style = "background: skyblue";
//    }

    if(event.altKey){
        console.log("Alt pressed");
    }
    
});













