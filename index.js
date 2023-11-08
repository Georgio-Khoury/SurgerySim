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
      
    //this is the animation of the needle. not that you need to remove the animation everytime you want to make a new animation because afrme sucks
const needle = document.querySelector('.holdneedle');

// Define the animation to insert the needle into the patient
needle.setAttribute('animation__insert', {
  property: 'position',
  to: '0.2 0 -0.55', // The position where the needle sticks into the patient
  dur: 200, // Animation duration in milliseconds
  easing: 'linear', // Easing function
});



// Listen for the 'animationcomplete' event to trigger the removal animation
needle.addEventListener('animationcomplete', (event) => {
 
  if (event.detail.name === 'animation__insert') {
    // Animation 'insert' is complete, so trigger the removal animation
    
    needle.removeAttribute('animation__insert');
    

    // Define animation to remove the needle from the patient
    needle.setAttribute('animation__remove', {
      property: 'position',
      to: '0.2 0 -0.45', // The previous position of the needle
      dur: 200, // Animation duration in milliseconds
      easing: 'linear', // Easing function
    });

   
  }
});

// Trigger the insertion animation

needle.emit('insert');
needle.removeAttribute('animation__remove')



      
  }
  function countdown(seconds) {
    for (let i = seconds; i > 0; i--) {
      setTimeout(() => {
        console.log(i);
      }, (seconds - i) * 1000);
    }
  }
