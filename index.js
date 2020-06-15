var card=document.querySelectorAll(".project");
var front=document.querySelectorAll(".project .front .projectimage");
var content=document.querySelectorAll(".project .content");
var title=document.querySelectorAll(".project .front .title")

for(let i=0;i<card.length;i++){
    card[i].addEventListener('mouseover',() =>{
       front[i].style.opacity='0';
       content[i].style.opacity='1';
       content[i].style.transition=' opacity 0.3s ease-in 0.3s';
       front[i].style.transition='opacity 0.3s ease-in 0.0s';
       title[i].style.transition='0.3s ease-in 0.2s';
       title[i].style.top='-200px';
       title[i].style.left='20px';
    })
    card[i].addEventListener('mouseout',() =>{
        front[i].style.opacity='1';
        content[i].style.opacity='0';
        front[i].style.transition ='opacity 0.3s ease-in 0.3s';        
        content[i].style.transition='opacity 0.3s ease-in 0.0s';
        title[i].style.top='0px';
        title[i].style.left='0px';        
        title[i].style.transition='0.3s ease-in 0.2s ';
     })
}
// let submit=document.querySelector(".submit");
// submit.addEventListener("click",()=> {
//    console.log("hh");
// })
 function submit(){
    
 }