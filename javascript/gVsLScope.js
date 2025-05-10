// GLOBAL SCOPE---A variable declared outside any function, block or conditional statements has a global scope.If something is in the Global scope, it's accessible from anywhere in the program after its declaration.
const name='Esther Vincy';// It's not declared inside any function ,block or conditional statements.So It's declared in the global scope and It's within global reach means any function or script can access it
console.log(name);

//LOCAL SCOPE---refers to variables declared within a block, function or conditional.These variables are only accessible within the confines of their curly braces.Avoid global polution by declaring variables locally within a specific context rather than globally.Global variables lead to conflicts especially in large apps and when integrating with third-party libraries.Local variable ensures data is only accessible where it's needed and it makes the code easier to understand and debug and also enhances performance.Js Engine can optimize the look out time for local variables better than for global variables

{
    const newName='EVie';//it only exists in the block and can be accessible only within the block it's defined
    console.log(newName);
    console.log(name);
}
// console.log(newName);//Throws reference error:name not defined

function greet(){
    const message='Hello JS!';//It's created when the function is invoked and ceased to exist after the function completes and keeps the global namespace clean
    console.log(message);
}

greet()

//VAR--keyword is function-scoped.It's only scoped to the function.this can be accessed outside a block or conditionals because it's not block-scoped but function-scoped

function sample(){
    for(var i=0;i<5;i++)//var
    {
        console.log(i);
    }
    console.log(i);//this can be accessed outside the block because it's not block-scoped but function-scoped
}
sample()

//LET--Block scoped

function sample1(){
    for(let i=0;i<5;i++)//let
    {
        console.log(i);
    }
    // console.log(i);//this can't be accessed outside the block because it's block-scoped
}
sample1()

{
    let x='me';
}
console.log(x)