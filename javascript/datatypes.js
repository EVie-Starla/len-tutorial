/*BASIC/FUNDAMENTAL DATATYPES--8--NUMBER--BIGINT--STRING--BOOLEAN--UNDEFINED--NULL--SYMBOL--OBJECT*/
/*PRIMITIVE DATATYPES--NUMBER--BIGINT--STRING--BOOLEAN--UNDEFINED--NULL--SYMBOL ||simple and have fixed size*/
/*NON-PRIMITIVE DATATYPES--object,array,function ||dynamic in nature and don't have fixed size*/

let myName='Esther',age=6;/* || STRING */
let myAge="Twenty Four";
let greeting=`Hi ${myName}!`/* || TEMPLATE LITERALS */
let myProblems=57432678909327890007654444n/* || BIGINT || int can give accurate results upto 15 digits. large nums cannot be represented accurately and be rounded by int*/
let random=8975672390518734/* || INTEGER */
console.log(myName)
console.log(myAge)
console.log(greeting)
console.log(random)

let God=true;/* || BOOLEAN */
let death=false;
console.log(God)
console.log(death)

let myFuture;/* || UNDEFINED */
console.log(myFuture)

let favouriteFood=null/* || NULL it is used to explicitly clear the value of a variable. it means the variable holds something which is nothing*/
console.log(favouriteFood)

const message=Symbol('daughter of King of kings');/* || SYMBOL */
console.log(message)
const you=Symbol("hi");
console.log(typeof(you))

let task=[{
    name:'Daily Routine',
    duration:'24 hrs',
    day:1
},
{
    name:'Rest day',
    duration:'24 hrs',
    day:2
}]

console.log(typeof(task))

let activity={
    name:'Daily Routine',
    duration:'24 hrs',
    day:1
}




