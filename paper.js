class Paper {
    constructor() {
      var options ={
        isStatic:false,
        'density':1.2,
        'resitution':0.3,
       'friction':0.5
      }
      this.body = Bodies.circle(56, 690, 55,options);
      World.add(world, this.body);
    }
    display(){
      push()
      translate(this.body.position.x,this.body.position.y)
      fill("indigo");
      ellipse(0, 0,55, 55);
      pop();
    }
  
  }
