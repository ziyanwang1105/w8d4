function MovingObject () {};
function Ship () {};
function Asteroid () {};

// function Surrogate () {};

// Surrogate.prototype = MovingObject.prototype;

// Ship.prototype = new Surrogate();
// Ship.prototype.constructor = Ship;

// Asteroid.prototype = new Surrogate();
// Asteroid.prototype.constructor = Asteroid;

Function.prototype.inherits = function (parentClass) {
    //function Surrogate(){};
    //Surrogate.prototype = parentClass.prototype 
    let object = Object.create(parentClass.prototype)
    this.prototype = object;
    this.prototype.constructor = this;
}

Ship.inherits(MovingObject);
Asteroid.inherits(MovingObject);

MovingObject.prototype.move = function (){
    console.log(`I'm moving!`)
}

Ship.prototype.warpDrive = function (){
    console.log(`Warp ${Math.floor(Math.random() * 10)} - ENGAGE! `)
}

let UMO = new MovingObject();
let ship = new Ship();
let ES56 = new Asteroid();
ship.move();
ES56.move();
ship.warpDrive();
ES56.warpDrive();

