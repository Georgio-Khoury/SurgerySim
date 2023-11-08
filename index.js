var currentobj
window.onload=()=>{
    document.querySelector(".b1").addEventListener("click",()=>{
        console.log(currentobj)
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
        console.log(currentobj)
    })

  }
  function remove(){
    if(currentobj==null) return
    currentobj.setAttribute("visible","false")
  }