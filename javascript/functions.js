//FUNCTION EXPRESSION--alternative function syntax.function is assigned to a variable.we can do this because functions are variables
// greeting()
var greeting=function sayHi(){
    console.log('Hi')
}
greeting()

//key difference between function expression vs function declaration lies in their behavior related to hoisting.When you use function expression,u can't invoke the function before you define it in the code but it is possible in traditional function declaration
//HOISTING is a process or JS mechanism that automatically moves all function declarations to the top of their scope before code execution

//FUNCTION DECLARATION--traditional function syntax
add(2,2)

function add(num1,num2){
    console.log(num1+num2)
}



//FUNCTION ARGUMENTS--if you don't provide argument for parameters,'undefined' is automatically assigned to them.Every JS function has access to a special argument called 'arguments' which captures all the arguments passed to the function including those which were not specified in the parameters.Argument object has array properties like being iterable and having length property but lacks array methods like map() or reduce().It is used to create fexible functions capable of handling a variable number of arguments seamlessly.we don't often use it

function mltply(num1,num2){
    console.log(arguments)
    return num1*num2;
}

mltply(1,2,4,6)

//to enable our function support any number arguments,iterate over the arguments object
multiply(5,67,2)
function multiply(){
    let product=1;
    for(const num of arguments)
        product*=num;
    console.log(product)
}

//REST OPERATOR--(... operator) in the context of function referred as REST OPERATOR.Unlike SPREAD operator which expands an array or object,the REST operator allows us to gather a varying number of arguments into a single array parameter.This is useful when we want a function to accept an indefinite number of arguments
function mul(...args){
    return args.reduce((accumulator,currentValue)=>accumulator*currentValue,1)
}
console.log(mul(1,2,3,4,5))

function multiplyEachElement(multiplier,...numbers){
    return numbers.map(number=>number*multiplier)
}

console.log(multiplyEachElement(3,1,2,3))

//DEFAULT PARAMETERS--feature that significantly enhances the function flexibility.In modern JS we can asssign a default value to parameters ensuring our functions behave predictively even when specific arguments aren't provided

function writeCode(language='JavaScript'){
    console.log(`Write code in ${language}`)
}
writeCode(' ')
writeCode()
//If you set a default value to a parameter,then any parameters that follow should also have default values.This is practical in situations when you might not have all the details upfront but still want to ensure the functions execute smoothly
function codeDetails(language='JavaScript',tool='vscode'){
    console.log(`Writing code in ${language} using ${tool}`)
}

codeDetails()

function createUser(name,role='Guest',status='active'){
    console.log(`User:${name}, Role:${role}, Status:${status}`)
}

createUser('Esther')
createUser('Merlin','Admin','active')
createUser('John')

//GETTERS AND SETTERS--enhances how we interact with JS object properties.these special methods allow us to  define custom logic for reading and writing properties.they're defined using 'get' and 'set' keyword and used as if they were regular properties.they provide a powerful way to create virtual properties that we can read and set like regular properties but with additional logic behind them.This feature is especially useful for validation, logging, and dynamically computed properties.While they make the objects more robust and encapsulated, they also introduce a layer of abstraction that can make debugging more challenging if not used carefully.They can be used within object literals and classes

const course={
    name:'JavaScript for beginners',
    duration:'3hrs',
    get details(){//details() method effectively encapsulates the way we describe a course.it's read only,we can't directly modify the course details using this method.this is where setters and getters can come in.Since this is a getter, it acts as if it were a property rather than a method.In order to call this, no need to use parantheses.In this e.g.,getter simply formats and returns the course info and we're able to access it as if it were a property rather than a method
        return `${this.name} is ${this.duration}`
    },
    set details(value){//this allows us to use this method as if it were a property of the js object.this setter can besigned to a value like a string and we would need to break it up and store it in our properties.In this e.g.,setter takes the string and splits it and updates both the 'name' and 'duration' of course object.It allows us to modify the course details in a controlled manner
        let parts=value.split(' is ');
        this.name=parts[0];
        this.duration=parts[1]
    }
}
console.log(`${course.name} is ${course.duration}`)
console.log(course.details)//it acts as if it were a property rather than a method.In order to call this, no need to use parantheses

course.details='JavaScript Pro is 10hrs'//setters does the modification(properties will be updated)
console.log(course.details)

//ERROR HANDLING--There are cases when we want to throw an error ,in programming it's called throwing an exception.In JS, errors are objects and when thrown, they create exceptions
//TRY-CATCH BLOCKS--outputs the error rather than terminating the program.This defensive programming is crucial for JS apps.It helps us to manage errors effectively and ensures that the program can recover from unexpected errors.
const internship={
    name:'Front-End',
    durationInHrs:'3hrs',
    get details(){
        return `${this.name} is ${this.durationInHrs}`
    },
    set details(value){
        // if(typeof value!=='string')//It prevents error
        if(typeof value!=='string'){
            throw new Error(`Value, ${value} is not a String`)
        }//we dont want unhandled exceptions terminate the program abruptly.This is where try-catch blocks come into play allowing us to gracefully handle errors.
        let parts=value.split(' ')
        this.name=parts[0]
        this.durationInHrs=parts[2]
    }
}
console.log(internship.name)
console.log(internship.details)
//Wrap the operation/statement that causes potential error with try.then catch the error using catch block.
try{
    internship.details=(8);
}catch(e){//catches the thrown error and enables us to handle it and log it to console without halting the program.
    console.log(`Caught an error: ${e.message}`)//property for error
}
console.log(internship.name)
console.log(internship.details)
console.log(internship.durationInHrs)