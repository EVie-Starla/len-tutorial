/* || OPERATORS --used to perform operations on variables */
/* || EXPRESSION IN JS--something that produces a value.expression goes on the right side of variable assignment */
/* || ) ARITHMETIC OR MATHEMATICAL OPERATORS --symbols for performing common mathematical operations on numbers*/
/* || + SUM*/
/* || - DIFFERENCE*/
/* || * PRODUCT*/
/* || / QUOTIENT*/
/* || % (MODULO OPERATOR)REMAINDER--helps us to determine whether a number is even or odd*/
/* || ** EXPONENTIAL OPERATOR--used to raise a number to the power of something */
/* || ++ INCREMENT OPERATOR--adds one to the variable.same can be achieved using arithmetic and arithmetic assignment operator.e.g,a++ returns the current value and increment, ++a returns the updated value after increment*/
/* || -- DECREMENT OPERATOR--subtracts one from the variable.same can be achieved using arithmetic and arithmetic assignment operator.e.g,a-- */

function oddOrEven(num){
    a=num%2;
    if(a==0){
        console.log(num+' is a Even number')
    }
    else{
        console.log(num+' is a Odd number')
    }
}

oddOrEven(275997)

/* || ASSIGNMENT OPERATOR = SINGLE EQUAL SIGN--used for assignment , to assign a value to a variable*/
function compare(num1,num2){
    if(num1<num2){
        console.log(`${num1} is less than ${num2}`)
    }
    else{
        console.log(`${num1} is greater than ${num2}`)
    }
}
compare(9,8)
/* || COMPARISON OPERATOR--returns boolean value when used in an expression.includes <,<=,>,>=,== */
num1=8
num2=87
let isNum1GreaterssThanOrEqualTo=num1>=num2
console.log(isNum1GreaterssThanOrEqualTo)

/* || EQUALITY OPERATOR */
/* || == LOOSE EQUALITY OR TRUTHY coverts both values to the same datatype  and compares*/
console.log(true=='1')
console.log(false==0)
/* || === STRICT EQUALITY compares without any conversion */
console.log(true==='1')
console.log(false===0)

console.log(true!=='1')
console.log(false!==0)
/* || TERNARY OPERATOR--conditional operator that allows us to write cleaner code.it performs comparison and returs a value based on it*/
function customerType(points){
    return points>100 ? 'gold':'silver'
}
console.log(customerType(160))

age=14
const canDrive=age>=16?true:false;
console.log(canDrive)

/* || LOGICAL OPERATOR --used to make decisions based on multiple conditions*/
/* or Operator(||)--returns true if any one operand is true,otherwise false.it stops execution when one of its operands is true and returns it.It converts the operands to boolean value and does the evaluation */
console.log(true||true)
console.log(true||false)
console.log(false||true)
console.log(false||false)
/* and Operator(&&)--has higher precedence than or||--returns true if only all operands are true.it stops execution when one of its operands is false(aka short-circuit evaluation) and returns it.It converts the operands to boolean value and does the evaluation*/
console.log(true&&true)
console.log(true&&false)
console.log(false&&true)
console.log(false&&false)
/* not Operator(!)--coverts the operand to boolean and returns the inverse */
console.log(!(89>98))
/* null coalescing(??)--It's a short hand or syntactic sugar--returns left operand if the value is not null or undefined,otherwise returs the right hand operand value */
a=undefined;
b=90;
console.log(a??b)
console.log(a!==null&&a!==undefined?a:b)

/* || BITWISE OPERATOR */
/* ||  */

/*JS differs from other programming languages 1)use of its logical operators and how they can be applied to non-boolean operands */ 
/*Falsy values in JS are 0,null,undefined,""empty string,false,NaN..any values that doesn't fall under the below category are called truthy */
