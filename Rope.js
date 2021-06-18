class Rope{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1.2,
            length:254,
        }
        this .rope=Constraint.create(options)
        World.add(world,this.rope);
        this.pointB=pointB;
    }
         fly(){
             this.rope.bodyA=null;
         }
          display(){
         if(this.rope.bodyA){
             
        
              var posA=this.rope.bodyA.position
              var posB=this.pointB
              push()
             strokeWeight(3);
             stroke("red");
              line(posA.x,posA.y,posB.x,posB.y);
              pop()
          }

}
}