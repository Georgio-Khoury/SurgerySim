AFRAME.registerComponent('visibility-off',{
  init: function() {
    let el = this.el;
    this.togglevisible = function() {
      let params ={
        property: 'material.opacity',
        to: 0,
        dur:500

       
      };
      if( document.querySelector(".sponge-on").getAttribute('visible')){
      el.setAttribute('animation',params);}
      
      //el.setAttribute('visible','false');
      //alert("test")
    }
    
    this.el.addEventListener('click',this.togglevisible);
    
  },  
  remove: function() {
    this.el.removeEvenListener('click',this.togglevisible);
    
  }})

AFRAME.registerComponent('switch-sponge',{
  init: function() {
    let el = this.el;
    this.switchsponge = function() {
      
      el.setAttribute('visible','false');
      document.querySelector(".sponge-on").setAttribute('visible',true);
      document.querySelector(".plaster-off").setAttribute('visible',true);
        document.querySelector(".plaster-on").setAttribute('visible',false);
      //alert("test")
    }
    
    this.el.addEventListener('click',this.switchsponge);
    
  },  
  remove: function() {
    this.el.removeEvenListener('click',this.switchsponge);
    
  }})


AFRAME.registerComponent('switch-plaster',{
  init: function() {
    let el = this.el;
    this.switch = function() {
      
      el.setAttribute('visible','false');
      document.querySelector(".plaster-on").setAttribute('visible',true);
       document.querySelector(".sponge-off").setAttribute('visible',true);
      document.querySelector(".sponge-on").setAttribute('visible',false);
      //alert("test")
    }
    
    this.el.addEventListener('click',this.switch);
    
  },  
  remove: function() {
    this.el.removeEvenListener('click',this.switch);
    
  }})


AFRAME.registerComponent('add-plaster',{
  init: function() {
    let el = this.el;
    this.addplaster = function(e) {
    let p=e.detail.intersection.point;
      let scene = document.querySelector('a-scene');
     
    let plaster = document.createElement('a-entity');
    plaster.setAttribute('geometry',{
      primitive:"plane"
      
    });
    plaster.setAttribute('material', 'color:#F78D76');
    plaster.setAttribute('scale', '.1 .05 0');
    plaster.setAttribute('position',p);
      plaster.setAttribute('rotation','-75 0 -10');
      if(document.querySelector(".p1").getAttribute('material').opacity==0 && 
        document.querySelector(".p2").getAttribute('material').opacity==0 &&
        document.querySelector(".p3").getAttribute('material').opacity==0 &&
        document.querySelector(".p4").getAttribute('material').opacity==0 &&
        document.querySelector(".plaster-on").getAttribute('visible')){
     scene.appendChild(plaster);}
      //alert("test");}
  }
  this.el.addEventListener('click',this.addplaster);
  },
    
  remove: function() {
    this.el.removeEvenListener('click',this.addplaster);
    
  }})

AFRAME.registerComponent('sponge-back',{
  init: function() {
    let el = this.el;
    this.switch = function() {
      
      el.setAttribute('visible','false');
      
       document.querySelector(".sponge-off").setAttribute('visible',true);
      document.querySelector(".plaster-off").setAttribute('visible',true);
      document.querySelector(".plaster-on").setAttribute('visible',false);
      //alert("test")
    }
    
    this.el.addEventListener('click',this.switch);
    
  },  
  remove: function() {
    this.el.removeEvenListener('click',this.switch);
    
  }})

AFRAME.registerComponent('plaster-back',{
  init: function() {
    let el = this.el;
    this.switch = function() {
      
      el.setAttribute('visible','false');
      
       document.querySelector(".sponge-off").setAttribute('visible',true);
      document.querySelector(".plaster-off").setAttribute('visible',true);
      document.querySelector(".plaster-on").setAttribute('visible',false);
       document.querySelector(".sponge-on").setAttribute('visible',false);
      //alert("test")
    }
    
    this.el.addEventListener('click',this.switch);
    
  },  
  remove: function() {
    this.el.removeEvenListener('click',this.switch);
    
  }})
