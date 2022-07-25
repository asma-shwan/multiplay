let scoreEl=document.getElementById("score")
let pEl=document.getElementById("p")
let submitEl=document.querySelector(".btn")
let inpEl=document.getElementById("inp")
  let x=Math.floor(Math.random()*10)+1
    let y=Math.floor(Math.random()*10)+1
    pEl.textContent=`What is multiplay ${x} by ${y}`
submitEl.addEventListener("click",function(){
    let count=JSON.parse(localStorage.getItem("count"))
    let z=inpEl.value
    if(x*y==z){
    count++
     x=Math.floor(Math.random()*10)+1
     y=Math.floor(Math.random()*10)+1
      pEl.textContent=`What is multiplay ${x} by ${y}`
        uplocalstorag() 
          scoreEl.textContent="Score :"+count
    }
    else{
        count--
        x=Math.floor(Math.random()*10)+1
        y=Math.floor(Math.random()*10)+1
         pEl.textContent=`What is multiplay ${x} by ${y}`
         uplocalstorag() 
         scoreEl.textContent="Score :"+count
   }
   function uplocalstorag(){
    localStorage.setItem("count",JSON.stringify(count))
   }
   
})
