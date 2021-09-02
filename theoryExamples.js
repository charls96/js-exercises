/*-----------------------------------
    JAVASCRIPT THEORY EXAMPLES
-----------------------------------*/

/*Passing the value of a var to another var*/

/* let name = "Carlos";
let strName = `my name is ${name}`;
console.log(strName + "."); */

/*ternary operator => condition ? expression_1 (if is true) : expression_2; (if is false)*/

/* var age = 16;
var canDrive = `Can you drive? ${age > 18 ? "yes" : "no"}`;
console.log(canDrive);
 */

/*---------------------------
    JAVASCIPT OBJECT
---------------------------*/

/* Javascript object */

/* const animal = {
    name: 'kira',
    color: 'black',
    age: 7,
    isDog: true,
    changeType: function(animal){
        this.isDog = animal !== 'dog' ? false : true;
    },
    legs: {
        front: 2,
        back: 2
    }
};

console.log(animal.name);
console.log(animal['age']);
console.log(animal.changeType('cat'));
console.log(animal.isDog);
console.log(animal.legs.front); */


/*----------------------------
    TYPES OF FUNCTIONS DECLARATIONS
----------------------------*/
/*Functions, functions are objects that can be invocated*/

/* function hello(name){
    console.log(`Hello ${name} from function declaration`)
};
hello("Carlos");

/*function declaration anonymous*/

/* const allocated = function (name){
    console.log(`Hello ${name} from function expression`)
}
allocated("Carlos"); */

/*Inmediated invoked function expression*/

/* (function(){
    let name = "Carlos";
    console.log(`Hello ${name} from IIFE`);
})(); */

/*ARROW FUNCTION*/

/* const greeting = (name) => {
    return `Hello ${name} from arrow function`;
};
console.log(greeting("Carlos")); */

/*short arrow function declaration with only one statement*/

/* const greetingInLine = name => `Hello ${name} from short arrow function`;
console.log(greetingInLine("Carlos")); */

/*-----------
    ARRAYS
------------*/

/* const animals = ["dog", "cat", "bird"];
animals.push("elephant");
console.log(animals);
console.log(animals[1]);
 */

/*---------
    NULL
----------*/

/* const animals = null;
console.log(animals);
console.log(typeof animals);
 */

/*--------------------
    FALSY AND TRUTHY
---------------------*/

/*falsy are: flase, 0, (string empty), null, undefined, NaN(not a number)
truthy are the rest */