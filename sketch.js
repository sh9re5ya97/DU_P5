
class Point{
    constructor(x,y,xSpeed,ySpeed,dia,color){
        this.x=x;
        this.y=y;
        this.xSpeed=xSpeed;
        this.ySpeed=ySpeed;
        this.dia=dia;
        this.color=color
    }
    draw(){
        strokeWeight(this.dia);
        stroke(this.color)
        point(this.x,this.y);
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
let pointsNum=750;
// let colors=['#acbbf6','#677bd8','#5872eb','#5271fe','#c2c2c2','#626262','#3a3a3a']
let colors=['#2E3F8B','#394992','#23368B','#1B2969','#121932','#151F4B','#1D2650','#182459','#111E5B','#121B44','#141A37'] //dark

function setup() {
    createCanvas(windowWidth, windowHeight);
    background('#0C1124');
    frameRate(12)

    stroke('#5170FB');
    strokeWeight(10)
    point(200,200);
    for(let i=0;i<pointsNum;i++){
        let pnt = new Point(random(0,windowWidth),random(0,windowHeight),random(-3,3),random(-3,3),random(8,10
        ),colors[floor(random(0,11))]+'cc')
        points.push(pnt);
    }
  }
  
  function draw() {
    background('#0C1124');
    points.forEach((pnt)=>{
        pnt.draw();
        pnt.updatePosition();
        points.forEach((pnt2)=>{
            if(dist(pnt.x,pnt.y,pnt2.x,pnt2.y)<40){
                strokeWeight(random(1,2));
                line(pnt.x,pnt.y,pnt2.x,pnt2.y)
            }
        })
    })
    // if(frameCount==1000) noLoop();
  }
