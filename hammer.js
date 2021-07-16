class Hammer{
 constructor(x,y){
  var options= {
   'density' : 2,
   'friction':1.0,
   'restitution':0.5
  }
this.body = Bodies.rectangle(mouseX,mouseY,50,50,options)
this.x = mouseX
this.y = mouseY




World.add(world,this.body)


 }

 display(){
var pos = this.body.position;
push();
pos.x = mouseX
pos.y = mouseY
rectMode(CENTER)
//translate(pos.x,pos.y)

rect(pos.x,pos.y,50,50)

pop();







 }







}