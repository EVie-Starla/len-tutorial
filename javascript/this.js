//this refers to the object that is currently executing the function or method
//value of 'this' depends on the context in which a function is called not where it's declared

const course={
    name:'JS for Beginners',
    start(){
        console.log(this.name)//references the global object in node js and window object in browsers
    }
}
course.start()
console.log(this)
function start(){
    console.log(this)
}
start();

var courseArrow={
    name:'es6',
    start:()=>{
        console.log(this.name)//when using with arrow functions,it inherits from its parent scope.They dont have their own this context.In this case from global object.Since the global object doesn'tave a name property,this value would be undefined
    }
}
courseArrow.start()

//We can explicitly set the value of 'this' using bind()--it returns a new function with this bound to a specific object but doesnt invoke it immediately

function introduce(language){
    console.log(this.name+' teaches '+language)
}
const instructor={name:'Steven'}
const introduction=introduce.bind(instructor)
introduction('js')
//this keyword plays a critical role in determining the context of function execution.'this' allows more flexible and powerful code structure especially when working with Object Oriented in JS