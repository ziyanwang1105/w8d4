export default class Bird{
    constructor(dimensions){
        this.velocity = 0;
        this.dimensions = dimensions;
        this.position = [this.dimensions['width'] /3 , this.dimensions['height'] / 2]
    }

    drawBird(ctx){
        ctx.fillStyle = "yellow";
        ctx.fillRect(...this.position, 40, 30);
    }
    animate(ctx){
        this.drawBird(ctx)
    }
}
