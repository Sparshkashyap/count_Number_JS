//===================closures => function with lexical scope=============================
// function outest(float){
// function outer(){
//     var a=10;
//     function inner(str){


//         let v=100;

//         function ck(){

//             console.log(v,str,float);
//         }

//         return ck;
        
//     }
    
//     return inner;
// }
// return outer;
// }

// outest(12.5)()("sparsh")();

// console.log(b);



//============================Temporan Dead zon==========================================

// console.log(a);
// let a=10; // declare the variable
// let b=25;

//block 
// var a=100;
// {
//     var a=10;
//     var a=20;
//     console.log(a+" Hello "+a);


// }

// console.log(a)

// const a=100;
// {
//     const a=5;

//     console.log(a); // block scope
//     /*
//     => This is block scope 
//     =>const and let dono behave as a single block of code .
//     */
    
// }
// console.log(a);

//===========================setTiomeout function===================================

// function ch(){
// for(var i=1; i<=5; i++){
//     function check(i){
//         setTimeout(function(){
//             console.log("Radhe Radhe");
//             console.log(i);
        
//                 },1000*i);
//  } 
//  check(i);   
// }
// }
// ch();


//========================function statement/function declaration=========================

// function check(){
//     console.log("Hello World");
// }

// check();

//=====================function Expression===============================================

// var a=function (){
//     console.log("Radhe Radhe");
// }

// a();

//====================Name function Expression========================================

// var a=function getfun(c){
//     console.log("Jai shree Ram");
  
// }

// a();

//===================Anonymous function==================================================

// var a=function (){
//     console.log("Hello World");
// }

// a();

//===============================First Class Function==============================

// function ch(para1,para2){
//     console.log(para1,para2);

// }

// ch(function (){  
//     console.log("Hello World"); 
// }); 


//=============================Callback function ===============================

// console.log("Hello BROTHER");


// function check(y){
//     console.log("check functon");
//     y();
// }


// check(function y(){
//     console.log("Radhe radhe");
// });


//============================CLOSURES PAR BASED QUESTION==============================
// Closures=>function along with lexical environment

// function ch(x){

//     return function kh(y){
//         return x+y;
//     }

// }

// var pr=ch(5);
// console.log(pr(45));

// =============================use Event Listeners ====================================

// document.addEventListener("DOMContentLoaded",function(){

// let a=document.querySelector(".v");
// let count=0;

// a.addEventListener("click",function(){
//     count++;
//     console.log(count);

// });
// });



document.addEventListener("DOMContentLoaded",function(){
    let v=document.querySelector(".v");
    let c=document.querySelector(".c");
    let inn=document.querySelector(".in");
    let out=document.querySelector(".out");
    let re=document.querySelector(".res");
    let count=0;
    let k=0;
    let l=0;
    let r=0;

    inn.addEventListener("keyup",function(){

        k=Number(inn.value);
        
      
    })
    out.addEventListener("keyup",function(){
        l=Number(out.value);
      
       
    })

    // re.addEventListener("keyup",function(){
    //     r=k+l;
    //     console.log(r);

    // })

  

    function abc(){
        
        re.textContent =`${k+l}`;
        console.log("Hello");
        console.log(k+l);
        // count++;

    }

 

    v.addEventListener("click",abc
        // console.log("jai ho");



    );


});