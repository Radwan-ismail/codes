
//object literal

let students = [
    {

    name : 'Mc Dev',
    class: 'CA141',
    address : {
        district : 'Warta Nabada',
        street : 'Wadada Wadnaha',
        home : 'GUR005'
    },
    hobies : ['Football', 'Watching Movies', 'IceCream'],

    age : function(){
        console.log("25");
    }
},

{
    name : 'John Doe',
    class : 'CA151',
    address : {
        district : 'Waaberi',
        street : 'Wadada Uganda',
        home : 'GUR0055'
    },
    hobies : ['Football', 'Watching Movies', 'Walking'],

    age : function(){
        console.log("28");
    }
},
{
    name : 'Farah',
    class : 'CA152',
    address : {
        district : 'Kaxda',
        street : 'Wadada Something',
        home : 'GUR00555'
    },
    hobies : ['Football', 'Watching Movies', 'Walking', 'Driving'],

    age : function(){
        console.log("23");
    }
},


];

// console.log(students[0].name);
// console.log(students[1].name);
// console.log(students[2].name);

// console.log(students[0].address);
// console.log(students[1].address);
// console.log(students[2].address);

// console.log(students[0].hobies);
// console.log(students[1].hobies);
// console.log(students[2].hobies);


students.forEach( (student) => {

    //Concatination 
    console.log(`Name :  ${student.name} \n Class :   ${student.class} \n Hobbies :  ${student.hobies}`);
});

