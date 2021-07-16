class Iron{
    constructor(x,y){
     var options= {
      'density' : 14,
      'friction':0.9,
      'restitution':0.8
     }
   this.body = Bodies.rectangle(x,y,100,100,options)
   this.x = x
   this.y = y
   
   
   
   
   //Matter.Body.setAngle(angle)

   World.add(world,this.body)
   
   
    }
   
    display(){
   var pos = this.body.position;
   var angle = this.body.angle

   push();
   
   translate(pos.x,pos.y)
   rotate(angle)
   
   rectMode(CENTER)
   //translate(pos.x,pos.y)
   
   fill("red")
   rect(0,0,this.width,this.height)
   
   pop();
   
   
   
   
   
   
   
    }
   
   
   
   
   
   
   
   }