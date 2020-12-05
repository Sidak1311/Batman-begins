class Raindrops{
  constructor(x,y,radius){
      var options = {
          isStatic:false,
          restitution:0.4
      }
      this.body = ellipse(x,y,radius,options);
      this.radius = radius;
      this.x = x;
      this.y = y;
      this.velocityY  = random(2,5);
  }
   fall(speed){
      this.y +=speed;
  }

  display(){
      push();
      stroke("blue");
      fill("blue");
      ellipse(this.x, this.y, this.radius);
      pop();
  }
}