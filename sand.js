class Sand{

    constructor(x,y,r){
   
       var options = {
   
           'restitution' : 1.3,
           'density' : 1.0,
           'friction' : 5
    }
   
    this.x = x;
    this.y = y;
    this.r = r;
   
    this.body = Bodies.circle(x,y,(this.r-20)/2,options);
    World.add(world,this.body);
   
   
   
   
   
   
    }
   display() {
        
     var rubberpos=this.body.position;
        push() 
       translate(rubberpos.x, rubberpos.y); 
       ellipseMode(RADIUS)
       strokeWeight(4);
       stroke("black");
       fill("brown"); 
       ellipse(0,0,this.r, this.r);
        pop() 
       }
   
   
   // why ellipse x any y is 0
   
    
    }