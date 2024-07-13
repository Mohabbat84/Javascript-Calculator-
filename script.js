let textInput=document.querySelector("#txt");
let allBtns=document.querySelectorAll(".btn");
let allClear=document.querySelector("#ac");
let singleClear=document.querySelector("#c");
let mplus=document.querySelector("#pdm");

let str="";
Array.from(allBtns).forEach((button)=>{
   button.addEventListener("click",(e)=>{
    if(e.target.innerHTML== "="){
       str=eval(str);
       textInput.value=str;
    }
    else {
       str=str+e.target.innerHTML;
       textInput.value=str;
    }
   })
})
singleClear.addEventListener("click",()=>{
   let text=textInput.value.trim();
   let words=text.split("");
   if(words.length>1){
      let lastword=words.pop();
      let lastwordindex=text.lastIndexOf(lastword);
      let nexttext=text.substring(0,lastwordindex).trim();
      textInput.value=nexttext;
   }
   else {
      str="";
      
      textInput.value=str;
   }
})
allClear.addEventListener("click",()=>{
   str="";
   textInput.value=str;
})
mplus.addEventListener("click",()=>{
  str="100";
  textInput.value=str;
})