class Dustbin {
    constructor(x, y, width, height) {
      var options = {
          'restitution':0.3,
          'friction':0.54,
          'density':1.2
      }
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      
    }
    display(){
      var pos =this.body.position;
      translate(pos.x, pos.y);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
    }
  }
  