/*CONTROL FLOW refers to the order in which statements are executed */
let priceOfChocolate=95
let hasAmountInCash=100

const canBuyChocolate=hasAmountInCash>=priceOfChocolate
console.log(canBuyChocolate)
/* || IF ELSE */
if(canBuyChocolate){
    console.log('Enjoy your purchase!')
}
else{
    console.log("You don't have enogh to buy a chocolate")
}

/* || ELSE-IF--determines under which conditions certain blocks of code are executed */
hour=24
if(hour>=6&&hour<=12)
    console.log('Serving Breakfast')
else if(hour>12&&hour<=14)
    console.log('Serving Lunch')
else if(hour>14&&hour<19)
    console.log('Serving Snacks')
else if(hour>=19&&hour<=23)
    console.log("Serving Dinner")
else
    console.log("Sorry! We're closed")


if(hour)
    console.log("fhxag")
    console.log("xsaxas")
    console.log("axax")

/* || SWITCH-CASE STATEMENTS--only used for equality comparisons.When we use if and else if statements to perform equality comparisons, the code gets a lil bit hard to read and repetitive.Consider using switch statements when you find yourself having a long chain of if and else if statements when you're using equality comparisons for all conditions */

job="Cloud Engineer"

switch(job){
    case 'Software Developer':
        console.log('Writes code')
        break
    case 'Designer':
        console.log('Makes user interface documents')
        break    
    case 'Cloud Engineer':
        console.log('Manages and Deploys Cloud Resources')
        break 
    default:
        console.log('Works directly with customers')    
}
    
/* || LOOPS--a way to repeat the same code multiple times */

/* || FOR LOOP --used to execute a block repeatedly rather than having to manually repeat the code.has 3 parts(initialization part, conditional part and step condition or increment/decrement part)--reduces code duplication and helps in faster execution.It provides a tradional syntax for iterating over an array.We use for loop when we know the exact time when we want the loop to stop executing */

let num=[1,2,3,4,5,6,7];
// let idx=0;
// console.log(num[idx++])
// console.log(num[idx++])
// console.log(num[idx++])
// console.log(num[idx++])
// console.log(num[idx++])
// console.log(num[idx++])
// console.log(num[idx])


// console.log(num[idx])
// console.log(num[++idx])
// console.log(num[++idx])
// console.log(num[++idx])
// console.log(num[++idx])
// console.log(num[++idx])
// console.log(num[++idx])
// lengthOfNum=num.length;
// console.log(lengthOfNum)

// for(let idx=0;idx<num.length;++idx){
//     console.log(num[idx])
// }

// for(let a=0;a<100;a++){
//     console.log(a)
// }

/* || WHILE LOOP--implements the same functonality of for loops.It is used when we don't know the number of iteration before the start of the loop */

let idx=0;
while(idx<num.length){
    console.log(num[idx])
    idx++
}

let sum=0
while(true){
    console.log('loop')
    sum++

    if(sum===10)
        break
}

/* || DO WHILE--the block of code comes before the condition.It is guarateed that the block will be executed atleast once because it checks the condition after executing the block of code  */

let i=0

do{
    console.log(i)
    i++
}while(i>10)

   