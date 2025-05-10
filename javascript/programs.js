// ODD OR EVEN

for(i=1;i<=100;i++){
    if(i%2===0)
        console.log(`${i} is an even number`)
    else
        console.log(`${i} is an odd number`)
}
//LIST ODD NUMBERS
oddNumbers=[];
for(i=1;i<=10;i++){
    if(i%2!==0)
        oddNumbers.push(i)
}
console.log(oddNumbers)

//ADD TWO NUMBERS
function addition(a,b){
    console.log(`Sum of ${a} and ${b}: ${a+b}`)
}
addition(5,9)


//ADD NUMBERS IN AN ARRAY
arr=[1,4,6,8,9,3,5,7,2]
let sum=0
for(let number of arr){
     sum+=number;
}
console.log(sum)

function add(array){
    let sum=0;
    for(let e of array){
        sum+=e;
    }
    console.log(`Sum of the elements in the array:${sum}`);
}
add([10,58,90])


//PRINT NUMBERS FROM 1 TO 100 AND THEIR SUM
sum=0
for(i=1;i<=100;i++){
    console.log(i);
    sum+=i;
}
console.log(`Sum of numbers from 1 to 100:${sum}`)

//POSITIVE OR NEGATIVE OR ZERO
function positiveNegativeZero(num){
    if(num<0)
        console.log(`${num} is a negative number`)
    else if(num>0)
        console.log(`${num} is a positive number`)
    else
        console.log(`${num} is zero`)
}
positiveNegativeZero(0)

//MULTIPLICATION OF N NUMBERS

multiply(5,67,2)
function multiply(){
    let product=1;
    for(const num of arguments)
        product*=num;
    console.log(product)
}

//SWAP OF TWO VARIABLES

let array='hyyHHHHHHHHHH'
// let anotherArr=array
// console.log(array.slice(2,5))
// console.log(array)
// array.forEach((number,i)=>console.log(`at index ${i},${number}`))

// console.log(array.lastIndexOf(7))

const employees=[
    {
        name:'Esther',
        age:24
    },
    {
        name:'Keerthana',
        age:24
    },
    {
        name:'Yuvarani',
        age:24
    }
]
// employees.forEach((e)=>console.log(e))
console.log(array
    .toLowerCase()
    .split('h'))
