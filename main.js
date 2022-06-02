// Continued Control Flow discussion from previous document

// Switch case

let day = new Date().getDay();

let literal_day = new Date().toString();
console.log(day)
console.log(literal_day)

// Switch case Statement Syntax
switch(day){
    case 0:
        console.log('Go to church')
        break;
    case 1:
        console.log('Write code... its Monday!')
        break;
    case 2:
        console.log('Test code....its Tueday!')
        break;
    case 3:
        console.log('It is Wednesday my dudes!')
        break;
    case 4:
        console.log('Write a feature for a project on Thursday!')
        break;
    case 5:
        console.log('It is Friday, Friday, gotta get down on Friday!!')
        break;
    default:
        console.log('We do not have a case for that')

}

// Creation of Objects in JavaScript
// A simple JS Object

let person = {
    name: 'John',
    age: 28,
    fav_color: 'Red'
}

// Accessing Data in our object
console.log(person['name']) // Bracket Notation
console.log(person.age) // Dot Notation

// Complex JS Object
let person2 = {
    name: 'Max',
    age: 31,
    prog_languages: ['JavaScript', 'Python', 'C++', 'Java'],
    fav_color: 'Blue',
    teams: [
        {
            baseball: 'Chicago White Sox',
            football: 'Chicago Bears',
            hockey: 'Chicago Blackhawks',
            basketball: ['Chicago Bulls', 'Chicago Sky'],
            soccer: ['Chicago Fire', 'Naperville Yellowjackets']
        },
        {
            baseball: 'Toronto Blue Jays',
            football: ' LA Rams',
            basketball: 'Milwaukee Bucks',
            soccer: ['Manchester United', 'Liverpool']
        }

    ]

}

console.log(person2.prog_languages[2])
console.log(person2['prog_languages'][2][0])
console.log(person2.teams[1].soccer[0])

// JS Object Prototype Methods -- Objec Literal
console.log(Object.keys(person2))
console.log(Object.values(person2))

// Sad Path of looping through objects in JS
for(let i = 0; i < person2.length; i++){
    console.log(person2[i])
}

// Happy Path
for(let i = 0; i < Object.keys(person2).length; i++){
    console.log(Object.keys(person2)[i])
}

console.log('ahhhhhhh')
// List Values from the person2 Object that are Arrays
for(let i = 0; i < Object.keys(person2).length; i++){
    if(Array.isArray(Object.values(person2)[i])){
        console.log(Object.values(person2)[i])
    }
}

// Create our own Object prototypes -- using ES5 method syntax
function Car(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;

    // Method inside of a JS Prototype
    this.printInfo = function(wheels = 0, color){
        console.log(`This is a ${this.year}, ${this.make}, ${this.model}, and has ${wheels} and the color is ${color}`);

        return 'Returned Value'
    }
}

// Creating an instance of a prototype
let my_car = new Car('Honda', 'CR-V', 2019)

// Call teh prototype method
console.log(my_car.printInfo(4, 'Gun Metal'))

// Classes JS

class Human{
    constructor(name, age, gender){
        this.age = age;
        this.name = name;
        this.gender = gender;
    }
    printInfo(){
        return `Name: ${this.name}, \n Age: ${this.age}, \n Gender: ${this.gender}`
    }
}

let wilma = new Human('Wilma', 25, 'Female');

// Use the printInfo form the newly instantiated wilma (human)class
console.log(wilma.printInfo())

// JS inheritence using classes
class Baby extends Human{
    constructor(name, age, gender, walking){
        super(name, age, gender)
        this.walking = walking
    }
    isBabyWalking() {
        if(this.walking == true){
            return 'Baby is walking!'
        } else {
            return 'Baby is not walking yet'
        }
    }
}

// Create an Instantiated value for Baby
let caleb = new Baby('Caleb', 1, 'Male', true)
console.log(caleb.printInfo())
console.log(caleb.isBabyWalking())

// JS Closures

// A closure is a self-invoking function that only runs once.
// One of the most important parts is that it has private data inside of it.

// Closures are also a variable data type

var outsideNum = 5

var addNums = function() {
    var insideNum = 6;
    return outsideNum + insideNum;
};

console.dir(addNums)

let newAdd = function(outer_var){
    let innerAdd = function(inner_var){
        return outer_var + inner_var;
    };

    return innerAdd;
}

let addFive = new newAdd(5)
let addSix = new newAdd(6)

console.log(addFive(3))
console.dir(addFive)

let count_up = ( function(){
    let counter = 0; // this will be our private variable
    console.log('Hit')
    return function () { return counter ++}
}) ()

// console.log(count_up())
// console.log(count_up())
// console.log(count_up())

// console.dir(count_up)

let addNames = (function() {
    let names = []; // private variable stored
    console.log('Adding names')
    return function (name){
        console.log(names)
        return names.push(name)
    }
})()

console.log(addNames('Brandon'))
console.log(addNames('Lydia'))
console.dir(addNames)
console.log(addNames('Joel'))
console.log(addNames('Terrell'))


// Async JS Section //
// -- JS Callbacks -- //

/*
    Simply put: A Callback is a function that is to be executed afer another function
    has finished its execution - hence the name callback.

    More complex definition: In JS, functions are objects. Because of this,
    functions can take other functions as arguments(parameters), and can return functions
    by other functions.

    Functions that do this are called "higher - Order functions". Any function,
    that is passed as an argument is called a "Callback function".

    Soooooo... why do we need them?

    The reason for this is, because of the JS event loop. In a nutshell
    JS is an event driven language so this means, that instead of waiting for a response
    before moving up, JS will keep executingg while listening for other events.
*/

function first(){
    console.log(1)
}

function second(){
    console.log(2)
}

first()
second()

// But what if we delay the execution?

function first_delay(){
    //simulate the delay
    setTimeout(function(){
        console.log(1)
    }, 5000)
}

function second_delay(){
    console.log(2)
}

first_delay()
second_delay()

// Callback function syntax
function doHomework(subject, callback){
    alert(`Starting my ${subject} homework`);
    callback()
}

// doHomework('JavaScript', function(){
//     console.log('Done with Homework')
// })

// JS Promises
const isEvenNumber = (num) => {
    return new Promise( (resolve, reject) => {
        if(num % 2 == 0){
            resolve(true)
        } else {
            reject(false)
        }
    })
}

// Using teh JS Promise
isEvenNumber(10)
// Happy path (resolve)
.then( (result) => {
    console.log(`Even number ${result}`)
})
// Sad reject path
.catch( (error) => {
    console.log(`Odd Number ${error}`)
})

console.dir(isEvenNumber())

// Another example with promises - using Async/Await
function increase_salary(base, increase){
    const new_salary = base + increase;
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

// function to add to the base salary slowly
function slow_addition(n1, n2){
    return new Promise( (resolve) => {
        setTimeout( () => resolve(n1 + n2, 2000))
    })
}

function increase_slow_salary(base, increase){
    const new_salary = slow_addition(base, increase);
    console.log(`New Salary: ${new_salary}`);
    return new_salary
}

async function async_increase_salary(base, increase){
    const new_salary = await slow_addition(base, increase);
    console.log(`The new salary is: ${new_salary}`);
}

async_increase_salary(50000, 5000)