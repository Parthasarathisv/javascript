class shape{
    constructor(color,noOfshape){
      this.color=color;
      this.noOfshape=noOfshape;
    }
    display(){
        console.log(`${this.color} ${this.noOfshape}`)
    }
    area(){

    }
}

class triangle extends shape{
    constructor(color,noOfshape,length,height){
        super(color,noOfshape)
        this.length=length;
        this.height=height;
    }
    display(){
        super.display()
        console.log(`${this.length} ${this.height}`)
    }
    area(){
        //let formule=1/2
        console.log(`Area of triangle: ${0.5 *this.length*this.height}`)
    }
}
let shape1=new shape('unknown',0)
shape1.display()
let triangle1=new triangle('red',3,5,4)
triangle1.display()
triangle1.area()

class rectangle extends shape{
    constructor(color,noOfshape,width,length){
        super(color,noOfshape)
        this.length=length;
        this.width=width;
    }
    display(){
        super.display()
        console.log(`${this.width} ${this.length}`)
    }
    area(){
        console.log(`Area of rectangle is ${this.length*this.width}`)
    }
}

let rectangle1=new rectangle('white',4,6,7)
rectangle1.display()
rectangle1.area()