let numbers = document.querySelectorAll(".numbers");
let faarrowright = document.querySelector(".fa-arrow-right");
let faarrowleft = document.querySelector(".fa-arrow-left");
let index;
let i=1;
numbers.forEach((number,index)=>
{
    number.addEventListener("click",()=>
    {     
        numbers.forEach((num)=>
        {
            num.classList.remove("temp");
        });  
        number.classList.add("temp"); 
        i=index+1;
    }); 
})

faarrowright.addEventListener("click",()=>
{
    i;
    numbers.forEach((num)=>
    {
        num.classList.remove("temp");
    })
    numbers[i].classList.add("temp");
    console.log(i);
    i++;
    if(i==5)
    {
        i=0;
    }
}); 
faarrowleft.addEventListener("click",()=>
{
    i;
    numbers.forEach((num)=>
    {
        num.classList.remove("temp");
    })
    i--;
    numbers[i].classList.add("temp");
    console.log(i);    
    if(i==0)
    {
        i=5;
    }
}); 