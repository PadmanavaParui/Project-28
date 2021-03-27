class Launcher{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.Launcher = Constraint.create(options);
        this.pointB = pointB;
        World.add(world, this.Launcher);
    }

    fly(){
        this.Launcher.bodyA = null;
    }

    display(){

        if(this.Launcher.bodyA)
        {
            var pointA = this.Launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
        }
    }  
}