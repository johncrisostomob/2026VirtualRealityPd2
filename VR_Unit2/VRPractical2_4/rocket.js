class Rocket{
    constructor(x, y, z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1,5) / 100;

        this.obj = document.createElement("a-entity");

        let B = document.createElement("a-cylinder");
        B.setAttribute("radius", 0.5);
        B.setAttribute("height", 2);
        B.setAttribute("color", "grey");
        this.obj.append(B);

        let H = document.createElement("a-cone");
        H.setAttribute("position", {x:0, y:1.5, z:0});
        H.setAttribute("radius-bottom", 0.5);
        H.setAttribute("radius-top", 0);
        H.setAttribute("color", "red");
        this.obj.append(H);

        let D = document.createElement("a-sphere");
        D.setAttribute("position", {x:0, y:0.4, z:0.4});
        D.setAttribute("radius", 0.2);
        D.setAttribute("color", "yellow");
        this.obj.append(D);

        let F = document.createElement("a-cone");
        F.setAttribute("position", {x:0, y:-1.5, z:0});
        F.setAttribute("radius-bottom", 0);
        F.setAttribute("radius-top", 0.4);
        F.setAttribute("height", 3);
        F.setAttribute("color", "orange");
        this.obj.append(F);

        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
    }

    fly(){
        this.y += this.dy;
        this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
    }
}