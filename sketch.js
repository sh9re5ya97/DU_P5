
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
        frameRate(25)
    }
    updatePosition(){
        if(this.x>width||this.x<0){
            this.xSpeed*=(-1);
        }
        if(this.y>width||this.y<0){
            this.ySpeed*=(-1);}
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
    }
}

let points=[];
let pointsNum=250;

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(0);
    stroke('#1F2C64');
    strokeWeight(10)
    point(200,200);
    for(let i=0;i<pointsNum;i++){
        let pnt = new Point(random(0,windowWidth),random(0,windowHeight),random(-3,3),random(-3,3),random(4,6))
        points.push(pnt);
    }
  }
  
  function draw() {
    background('#0C1124');
    points.forEach((pnt)=>{
        pnt.draw();
        pnt.updatePosition();
        points.forEach((pnt2)=>{
            if(dist(pnt.x,pnt.y,pnt2.x,pnt2.y)<70){
                strokeWeight(random(1,1,5));
                line(pnt.x,pnt.y,pnt2.x,pnt2.y)
            }
        })
    })
    if(frameCount==1000) noLoop();
  }
