
document.addEventListener("DOMContentLoaded",function (){

    let a=document.querySelector(".v");
    let b=document.querySelector(".c");

    let count=1;
    function abc(){
        b.textContent=`${count}`;
        count++;

    }

    a.addEventListener("click",abc);


});