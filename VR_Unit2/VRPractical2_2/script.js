let scene, car, pokemonball;
window.addEventListener("DOMContentLoaded",function() {
    scene = document.querySelector("a-scene");
    car = document.querySelector("#car");
    pokemonball = document.querySelector("#pokemonball");

    car.x = 0;
    car.dx = -0.01;

    pokemonball.a = 0;
    pokemonball.da = 1;

    loop();
    
    
})

function loop(){
    car.x += car.dx;
    car.setAttribute("position",{x:car.x, y:0, z:-5});
    
    pokemonball.a += pokemonball.da;
    pokemonball.setAttribute("rotation",`${pokemonball.a} 0 0` );

    window.requestAnimationFrame(loop);
}
