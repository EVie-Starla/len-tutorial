/* || OBJECT */
/*It represent object,thing,person,place or noun */
/*It contains behavior and state. It helps in grouping related values together to make the code cleaner*/
/*Key-value pair together is refered to as a property of the object. keys are internally represented a string*/
/*TWO DIFFERENT NOTATIONS--(.DOT & ['BRACKET']) to access and update object properties. dot notion allows static keys which are typed directly.[] notation accepts dynamic keys which are evaluated from an expression, itcan be used when you don't know which target property you wanna use until runtime*/

let toDoList={
    morning:'sleep well',
    afternoon:'chores',
    evening:'study'
};

console.log(toDoList.morning);
toDoList.morning='Learn JS'
console.log(toDoList.morning);

console.log(toDoList['afternoon']);
toDoList['afternoon']='Learn Coding'
console.log(toDoList['afternoon']);

/* || [] BRACKET NOTATION USE CASE */

let property='afternoon';
console.log(toDoList[property])


/* || ARRAY IS AN OBJECT.Arrays have built-in properties e.g. length property to count the elements of an array. INDEX VALUES ARE KEYS IN ARRAYS--used to store list of data.E.g,list of products on a webpage */
hggf=7
let random=['green',7,hggf]
console.log(typeof(random))
console.log(random)
console.log(random.length)

random[1]='black'
console.log(random[1])
console.log(typeof(random))

/* || FUNCTION */
/* building blocks of the application.set of statements or block of code to 1) execute or perform a task or 2)calculate a value and return it*/
/*undefined is returned by function if we don't use return keyword */

function task(num1,num2) {
    return num1+num2;
}

console.log(task(2,2));

function greeting(name){
    console.log('Hi! '+name)
}

greeting(8)