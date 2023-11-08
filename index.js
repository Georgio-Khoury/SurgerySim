var currentobj
window.onload=()=>{
    document.querySelector(".b1").addEventListener("click",()=>{
        
       remove()
        var obj1 = document.querySelector(".obj")
        obj1.setAttribute("visible","true")
        currentobj=obj1
    })
    document.querySelector(".b2").addEventListener("click",()=>{
        remove()
        var obj2 = document.querySelector(".obj2")
        
        obj2.setAttribute("visible","true")
        currentobj=obj2
     
    })
    document.querySelector("#needle").addEventListener("click",()=>{
      remove()
      var needle= document.querySelector(".holdneedle")
      needle.setAttribute("visible","true")
      currentobj=needle
    
})
document.querySelector(".patient").addEventListener("click",()=>{
  if(currentobj!=null){
    console.log('entered')
    console.log(currentobj.getAttribute("class"))
    if(currentobj.getAttribute("class")==="holdneedle"){
      needle()
    }
  }
})
}

  function remove(){
    if(currentobj==null) return
    currentobj.setAttribute("visible","false")
  }

  function needle(){
      //perform the needle injection animation
      countdown(4)
      //remove needle animation
  }
  function countdown(seconds) {
    for (let i = seconds; i > 0; i--) {
      setTimeout(() => {
        console.log(i);
      }, (seconds - i) * 1000);
    }
  }
