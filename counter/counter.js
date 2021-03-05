let count=0;
const span=document.querySelectorAll("#asap");
const btns=document.querySelectorAll(".btn");
btns.forEach(function(btn){
    btn.addEventListener('click',function(k){
    const value=k.currentTarget.classList;
    if(value.contains("decrease"))
    {   --count;
        console.log("kalki");
    }
    else if(value.contains("increase"))
    {
        count++;
        console.log("kalki");
    }
    span.innerText=count;

})
})