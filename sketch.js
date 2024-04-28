
class Point{
    constructor(x,y,xSpeed,ySpeed,dia){
        this.x=x;
        this.y=y;
        this.xSpeed=xSpeed;
        this.ySpeed=ySpeed;
        this.dia=dia;
    }
    draw(){
        strokeWeight(this.dia);
        point(this.x,this.y);
    }
    updatePosition(){
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
}

let points=[];

function setup() {
    createCanvas(400, 400);
    background(0);
    stroke(220);
    strokeWeight(10)
    point(200,200);
    let pointsNum=50;
    for(let i=0;i<pointsNum;i++){
        let pnt = new Point(random(0,400),random(0,400),random(2,5),random(2,5),random(3,6))
        points.push(pnt);
    }
  }
  
  function draw() {
    background(0);
    points.forEach((pnt)=>{
        pnt.draw();
        pnt.updatePosition();
    })
    if(frameCount==1000) noLoop()
  }
