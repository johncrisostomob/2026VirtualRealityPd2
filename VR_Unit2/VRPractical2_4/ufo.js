class UFO{
    constructor(x,y,z){
        this.x = x;
        this.y = y;
        this.z = z;
        this.dy = rnd(1,5) / 100;

        this.obj = document.createElement("a-entity");
        
        let T = document.createElement("a-sphere");
        T.setAttribute("position", {x:0, y:0.25, z:0});
        T.setAttribute("radius", 1.5);
        T.setAttribute("color", "purple");
        this.obj.append(T);

        let B = document.createElement("a-sphere");
        B.setAttribute("radius", 2);
        B.setAttribute("scale", {x:1, y:0.3, z:1});
        B.setAttribute("color", "green");
        this.obj.append(B);

        let L = document.createElement("a-cone");
        L.setAttribute("position", {x:0, y:-1.5, z:0});
        L.setAttribute("radius-bottom", 0);
        L.setAttribute("radius-top", 0.4);
        L.setAttribute("height", 3);
        L.setAttribute("color", "grey");
        this.obj.append(L);

        this.obj.setAttribute("position", {x:x, y:y, z:z});
        scene.append(this.obj);
    }

    attack(){
        if(this.y > 0.6){
            this.y -= this.dy;
            this.obj.setAttribute("position", {x:this.x, y:this.y, z:this.z});
        }
    }
}