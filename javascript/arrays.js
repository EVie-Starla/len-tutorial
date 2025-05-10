/* ARRAYS --Collection o Elements or List of items */

/* BULIT-IN METHODS FOR ARRAY--to filter, modify and retrieve data */

// ADDING ELEMENTS--3 WAYS TO ADD 
// 1)Add at the beginning  
const numbers=[5,7,2,9,1]
console.log(numbers.unshift(1))//returns the length of the array
console.log(numbers)

// 2)Add at the End 

console.log(numbers.push(2))
console.log(numbers)

// 3)Add to the Middle

console.log(numbers.splice(2,0,4,5))//index,remove_count,elements_to_be_added.It returns the deleted element
console.log(numbers)

// FINDIND PRIMITIVE ELEMENTS

//.indexOf and .lastIndexOf utilizes the index value to access or modify the element.
console.log(numbers[0])//returns element of the mentioned index
console.log(numbers.indexOf(8))
console.log(numbers.lastIndexOf(1))//returns the index of last occurence of the specified element 
console.log(numbers[0])

// .indexOf and .lastIndexOf typically used with conditional statemnets
const indexOf8=numbers.indexOf(8);
if(indexOf8===-1)
    console.log('8 is not found in the array')

//To check whether an element presented in an array or not and return a boolean value

if(!numbers.includes(8))
    console.log('8 is not found in the list')

//FINDING REFERENCE ELEMENTS

const employees=[
    {
        id:1,
        name:'Merlin'
    },
    {
        id:2,
        name:'John'
    },
    {
        id:3,
        name:'Esther'
    }
]

//Callback function means function which is passed as an argument and invoked at a later time.The callback which we use for find() is referred to as a predicate function which means it will return  true or false.Functions are objects and that's what enables us to pass them as arguments
const employee=employees.find(function(e){
    return e.name==='Merlin';
})
console.log(employee)

console.log(employees.findIndex(function(e){
    return e.name==='John';
}))

console.log(employees.find((e) => e.name==='John'))

/* || ARROW FUNCTIONS--are a modern way to define functions and commonly used for callback functions */

const add=(num1,num2)=>{
    return num1+num2;
}

/* when an arrow function has only one statement in the code block, it can be defined in a single line.no need to write return statement as well because arrow functions implicitly know that we are returning the expression.It provides cleaner syntax to use when using predicates */

const multiply=(num1,num2)=>num1*num2;


/* || REMOVING ELEMENTS--3 Ways */

//REMOVE FROM THE END--pop()

// const arr=[1,2,3,4,5]
// console.log(arr.pop())

//REMOVE FROM THE BEGINNING--shift()
// console.log(arr.shift())

//REMOVE FROM THE MIDDLE--splice()
const arr=[1,2,3,4,5,6,7,8,9,0]
console.log(arr.splice(2,3,345,543,57,56))
console.log(arr)
const mid=arr.splice(2,2)
console.log(arr)

//EMPTYING AN ARRAY OR CLEARING ALL ELEMENTS OF AN ARRAY--many ways to do that
//1)WHILE LOOP--not efficient for large array

let nums=[1,2,3,4,5]
console.log(nums)
// while(nums.length>0)
//     //nums.pop()
//     //nums.shift()
//     nums.splice(0)
console.log(nums)

//2).LENGTH()--we can assign value to it
// nums.length=0;
// console.log(nums)

//3).SLICE()
// nums.splice(0)
//nums.splice(0,nums.length)
// console.log(nums)

//4)REASSIGN THE ARRAY TO AN EMPTY ARRAY--We can't reassign if we declared it as a const.the previous array will be garbage colllected since array is an object
// nums=[]
// console.log(nums)

//Reference Objects
let anotherarr=nums
nums=[]//when we reassign one of those arrays, the other array will not be garbage collected
console.log(nums)
console.log(anotherarr)

/* || COMBINING AND SLICING ARRAYS--slice() doesn't affect the original array.The elements will be passed by copy if the values are primitive and reference in the case of non-primitive values */
// 1)concat()
const arr1=[1,2,3,{name:'esther'}]
const arr2=[4,5,6]
const combinedArr=arr1.concat(arr2,'blue','yellow',employees)//adds the array to the end

//2)use spread operator to combine arrays
// const combinedArr=[...arr1,...arr2,...employees]
const slicedArr=combinedArr.slice(2,5)//(startIndex,endIndex)ends slicing at previous index of mentioned endIndex
console.log(combinedArr)

/* BUILT-IN METHOD FOR ARRAY CLASS */

//.forEach()--callback function is passed as an argument

combinedArr.forEach(number=>console.log(number))//prints each element in a new line
combinedArr.forEach((number,index)=>console.log(`At index,${index}:${number}`))

//TRANSFORM AN ARRAY INTO A STRING--JOIN(SEPERATOR)
const arrayToString=combinedArr.join(' , ')
console.log(arrayToString)
//METHOD CHAINING--it can be done for the same data type.Here it's string
console.log(arrayToString
    .toLowerCase()
    .split('e'))

//TRANSFORM A STRING INTO AN ARRAY--split(SEPERATOR)
console.log(arrayToString)
console.log(arrayToString.split(','))

// || SORT

const sortArray=[5,7,1,'ball',8,'Zayn'];
console.log(sortArray.sort())//sorts the elements in ascending order
//SORTING AN ARRAY OF OBJECTS--provide callback function to the sort() to define the sorting logic based on the properties of the object in an array.the callback function returns a number that determines the sort order.NEGATIVE VALUE--first argument comes before the second one,0--both are considered equal and in sorted order,POSITIVE VALUE--first one comes after the second one.

//Characters are internally represented as numbers based on their ASCII values.0-9(45-57),A-Z(65-90),a-z(97-122).Capital letters are considered less than lowercase letters in ASCII
employees.sort((a,b)=>{
    const lowercaseA=a.name.toLowerCase();
    const lowercaseB=b.name.toLowerCase();

    if(lowercaseA<lowercaseB) return -1;
    if(lowercaseA>lowercaseB) return 1;
    return 0
})

console.log(employees)

console.log(sortArray.reverse())//reverses the order of elements

// TESTING ELEMENTS IN ARRAYS--arrays come with powerful methods that allow us to evaluate and process the data within
//every() and some()--used to test elements in an array against a condition.they both stop processing elements as soon as the outcome is determined.they provide concise and readable way to evaluae conditions across array elements
//every()--tests whether all elements in array pass the test implemented by the provided function and returns true if every element in the array satisfies the specified condition.it is pefect for scenarios when we want to ensure an entire collection meets the certain criteria e.g.,Check if every number in an array is even 
console.log([2,4,5].every(number=>number%2===0))
//some()--checks if atleast one element in an array satisfies the condition
console.log([2,4,9].some(number=>number%2!==0))

//FILTERING AN ARRAY--FILER()--designed to go through an array and exract elements that meets the specific condition returns a new array that is compressed of only those elements.It's non-destructive and it does not change the original array
console.log([1,2,3,4,5,6,7,8,9,0].filter(number=>number%2===0)) 

emplys=[
    {id:1,name:'Sandhiya',role:'Developer',email:'VsAnDhIyA@Gmail.com'},
    {id:2,name:'John',role:'Designer',email:'VjOhnSoloMon@gmail.com'},
    {id:3,name:'Shalini',role:'Developer',email:'VmerLinShaLinI@gmail.com'},
    {id:4,name:'Esther',role:'Developer',email:'VestherVincy@gmail.com'}
]
console.log(emplys.filter(emply=>emply.role==='Developer'))

//MAPPING AN ARRAY--MAP()--is a cornerstone of array manipulation in javascript and offers a powerful way to process and trnasforms elements of an array.it operates on each element of an array applying a function you specify and return a new array composed of the results.It acts as ideal tool for transforming data without altering the original array
//e.g.,Squaring each element of an array
console.log([1,2,3,4,5,6,7,8,9].map(num=>num*num))
console.log(['apple','ball','cat','dog','elephant'].map(e=>e.toUpperCase()))
const arrayObj=emplys.map(emply=>({
    ...emply,
    email:emply.email.toLowerCase()
}));
console.log(arrayObj)
console.log(emplys.map(e=>e.email.toLowerCase()))
console.log(emplys.map(emply=>({
    ...emply,
    email:emply.email.toLowerCase()
})))

//REDUCING AN ARRAY--REDUCE()--it transforms or reduces all elements of an array into a single value(number,sting,object or an another array).Accepts two parameters--(callBackFunction,initialValueOfTheAccumulator)..callbackFunction accepts 2 parameters(accumulator,currentElement)

console.log([2,6,3,84].reduce((accumulator,currentElement)=>accumulator+currentElement,0))//0is the initial value we set to the accumulator.


