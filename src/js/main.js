window.addEventListener('scroll',()=>{
    //console.log(window.scrollY)
   if(window.scrollY>=374){
        document.querySelector(".nav a").classList.add("white")
        document.querySelector("header").classList.add("change")
          
   }else{
    document.querySelector("header").classList.remove("change")
    document.querySelector(".nav a").classList.remove("white")
   }
   if(window.scrollY>178){
        document.querySelector(".experience").classList.add("flex")
        document.querySelector(".exp").classList.add("show")
   }
   else{
    document.querySelector(".experience").classList.remove("flex")
    document.querySelector(".exp").classList.remove("show")
   }
   if(window.scrollY>800){
     document.querySelector(".know").classList.add("show")
   }else{
     document.querySelector(".know").classList.remove("show")
   }
   if(window.scrollY>432){
    document.querySelector(".description").classList.add("show")
  }else{
    document.querySelector(".description").classList.remove("show")
  }
   if(window.scrollY>957){
    document.querySelector(".top").classList.add("show")
    document.querySelector(".knowledge").classList.add("flex")
    document.querySelector(".contact").classList.add("show")
  }else{
    document.querySelector(".top").classList.remove("show")
    document.querySelector(".knowledge ").classList.remove("flex")
    document.querySelector(".contact").classList.remove("show")
  }
})
window.addEventListener('click',(e)=>{
console.log(e)
const rond = document.createElement("div")
rond.className="clickanime"
rond.style.top=`${e.pageY-50}px`
rond.style.left=`${e.pageX-50}px`
document.body.appendChild(rond)
})