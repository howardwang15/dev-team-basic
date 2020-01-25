/**
 * INTRO: creating different elements
 */
function addDiv() {
    let div = document.createElement('div');  // create a new div
    div.innerHTML = "new container";          // set the text inside the container
    document.body.appendChild(div);           // add the div to the document
}

function clicked() {
    document.getElementById('button').innerHTML = "<b>hello</b>";  // update the text of the button
    addDiv();                                                      // add the div
}

function onInputChange(e) {
    let text = e.value;                                 // get the text of the input
    document.getElementById('p').innerHTML = text;      // set the HTML inside the element to be the text received
}




/**
 * FUNCTIONS 
 */

function getSum(a, b) {
    return a + b;
}

/**
 * 
 * HIGHER ORDER FUNCTION 
 */

const customSum = num => arg => num + arg;  // curried function...

const add5 = customSum(5);  // get a function that adds 5 to a number when called

console.log(add5(3));       // prints 8
console.log(customSum(4)(6)) // no intermediate function created!




/**
 * CLASSES
 */
class Transportation {
    constructor(num_wheels, max_speed) {   // class constructor
        this.num_wheels = num_wheels;      // "this" keyword points to object being used
        this.max_speed = max_speed;
    }

    printType() {
        console.log('Base transportation class');
    }
    
    printInfo() {
        console.log(`${this.num_wheels} wheels, ${this.max_speed} max speed`);
    }
}


class Bike extends Transportation {
    constructor(num_wheels, max_speed, color) {
        super(num_wheels, max_speed);
        this.color = color;
    }

    // override the parent method
    printType() {
        console.log('bike');
    }

    start() {
        this.printType();   // call the derived method
        super.printType();  // call the parent's method
        this.printInfo();   // call the parent's method
    }
}

new Bike(2, 20, "blue").start();  // construct object and drive




/**
 * QUIZ
 */

const obj = {
    a: 5,
    b: 2,
    func: function() { console.log(this.a); }
};

obj.func();

const func = obj.func;
func();

const func2 = func.bind(obj);
func2();

obj.func = obj.func.bind(this);
obj.func();



/**
 * PROMISES
 */
const divide = (a, b) => {
    return new Promise((resolve, reject) => {
        if (b != 0) {       // safe to divide
            res = a/b;
            resolve(res);   // resolve the successful result
        }
        else
            reject(new Error("Cannot divide by 0!"));   // reject error
    });
}



const getFruitInfo = name => {
    const fruits = {
        banana: { color: 'yellow' },
        apple: { color: 'red' },
        kiwi: { color: 'green' }
    };
    return new Promise((resolve, reject) => resolve(fruits[name]));     // resolve the fruit
}


// sequential awaits...bad! Try timing it with console.time()
const getIngredients = async () => {
    const banana = await getFruitInfo('banana');
    const apple = await getFruitInfo('apple');
    console.log([banana, apple]);
}


// parallel awaits...much faster because non-blocking! Try timing it with console.time()
const getIngredients2 = async () => {
    const banana = getFruitInfo('banana');
    const apple = getFruitInfo('apple');
    const resolved = await Promise.all([banana, apple]);
}


// import from file
const object = require('./variables');
console.log(object);
