// var varr='global';
// let lett='local';
// const constt='constant'
// {
//     let lett='changed';
//     console.log(varr);
//     console.log(lett);
//     console.log(constt);
// }
// console.log(lett);


// var b=100;
// function a(){
//    var b=20;
//    console.log(b)
// }
// a();
// console.log(b)
// let a=30;
// {
//     var a=20;
// }
// console.log(a)
//LEXICAL ENVIRONMENT
function parent(){
    let a=100;
    if(a===100)
        console.log(a)

    function Child(){
        console.log(a)
        function grandC(){//local memory plus reference to its outer environment(parent function's environment)
            console.log(a) 
            y='blaw'
        }
        grandC()
        console.log(y)
    }
   Child()
    }

parent();

