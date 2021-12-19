// Bubble class
class Bubble {
    constructor(count, time) {
        this.count = count;
        this.time = time;
    }
}

var X;
var Y;
var num = 64;
var r;
var angle = 45;
var a1, a2;
var dt = 1;
var t = 0;
var rate = 0.618;
// An Array of Bubble objects
let bubbles=[];
// A Table object
let table;
var range;
var rangeRate = 0.0618;
var growRate = 0.002;
var changeAngle;
//strokeWeight()画笔大小
//background(,)背景颜色，可以达到残影效果
//line(,,,,)画线
//translate(,)
//rotate()弧度制
//radians()角度转弧度
//scale(,)
//push()和pop()之间受translate,rotate,scale影响(也写在里面)，这样之外的不受影响
//millis()获取毫秒数
//map()
//this.pos/vel/acc(自建类)
//p5.Vector.mult/add/div/sub
//normalize()

function setup() {
  // put setup code here
    createCanvas(windowWidth, windowHeight);
    r = windowWidth / 4.5;
    X = new Array();
    Y = new Array();
    range = new Array();
    changeAngle = new Array();
    for (var i = 0; i < num; i++) {
        X[i] = windowWidth / 2 + random(-windowWidth / 2+r, windowWidth/2-r);
        Y[i] = windowHeight / 2 + random(-windowHeight / 2+r, windowHeight/2-r);
    }
    for (var j = 0; j < num / 8; j++) {
        for (var i = 0; i < 8; i++) {
            range[j * 8 + i] = random(-rangeRate * r * pow(rate, j) / 2, rangeRate * r * pow(rate, j) / 2);
            changeAngle[j * 8 + i] = random(-PI / 64, PI / 64);
        }
    }
    setColor();
}
function draw() {
    // put drawing code here
    //background(255,100);
    drawpicture();
    //update1();
    //loadFile();
}
function mousePressed() {
    loadFile();
    //text("kewu",20,30);
    /*
    for (var i = 0; i < num; i++) {
        X[i] = random(0, 500);
        Y[i] = random(0, 500);
    }
    */
}
function setColor() {
    fill(165, 135, 255);
    stroke(255);
}

function drawpicture() {
    push();
    for (var j = 0; j < num / 8; j++) {
        for (var i = 0; i < 8; i++) {
            push();
            translate(windowWidth / 2, windowHeight / 2);
            rotate(PI / 4 * i + changeAngle[j * 8 + i] * sin(millis() * growRate));//弧度制
            var realR = r * pow(rate, j) + range[j * 8 + i] * sin(millis() * growRate);
            ellipse(- realR, 0, realR, realR);
            pop();
        }
    }
    pop();
}

function loadFile() {
    table = loadTable("https://github.com/Moshiyou/termwork/blob/HTML/StepData5.csv", "header");

    // Display the headers 
    for (let h = 0; h < table.getColumnCount(); h++) {
        text(table.columns[h], 20 + h * 200, 150);
    }

    textSize(16);
    // Display the data in the table 
    for (let r = 0; r < table.getRowCount(); r++) {
        for (let c = 0; c < table.getColumnCount(); c++) {
            text(table.getString(r, c),
                20 + c * 200, 170 + r * 20);
        }
    }

    /*
    const bubbleData = table.getRows();
    // The size of the array of Bubble objects is determined by the total number of rows in the CSV
    const length = table.getRowCount();

    for (let i = 0; i < length; i++) {
        // Get position, diameter, name,
        const x = bubbleData[i].getNum("点击次数");
        //const y = bubbleData[i].getNum("时刻"+x-1);

        // Put object in array
        //bubbles.push(new Bubble(x, y));
        text(bubbleData[i],20 , 170 );
    }
    */
}

/*
 * for (let r = 0; r < loadedTable.getRowCount(); r++) 
 * {
 *      for (let c = 0; c < loadedTable.getColumnCount(); c++) 
 *      {
 *          text(loadedTable.getString(r, c),20 + c * 200, 150 + r * 20);
 *       }
 *  }
 */ 

function drawSingle(i,j) {
    push();
    translate(windowWidth / 2, windowHeight / 2);
    rotate(PI / 4 * i);//弧度制
    //radians()角度转弧度
    ellipse(- r * pow(rate, j), 0, r * pow(rate, j), r * pow(rate, j));
    pop();
}
function update1() {
    t += 0.001;
    for (var i = 0; i < num; i++) {
        X[i] += cos(a1 * Y[i] * t) * dt;
        Y[i] += -sin(a2 * X[i] * t) * dt;
    }
}
