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

var X, Y;
var num = 150;

//初始化
function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    X = new Array();
    Y = new Array();
    for (var i = 0; i < num; i++) {
        X[i] = random(windowWidth * 0.1, windowWidth * 0.9);
        Y[i] = random(0.6 * windowHeight, 0.9 * windowHeight);
        /*
        var d = 20;
        for (var j = 0; j < i - 1; j++) {
            if ((X[i] - X[j] > -d) && (X[i] - X[j] < 2*d) && (Y[i] - Y[j] > -d) && (Y[i] - Y[j] <2* d)) {
                X[i] = random(windowWidth * 0.1, windowWidth * 0.9);
                Y[i] = random(0.6 * windowHeight, 0.9 * windowHeight);
                j = -1;
            }
        }
        */
    }
}

//重绘函数
function draw() {
    // put drawing code here
    background(255, 100);
    drawWutai();
    Wave(0.5);
    WaveWei(1);
    Yinfu(5,5,0.1);
}

//鼠标左键拖拽响应函数
function mouseDragged() {
    mousePressed();
}
//鼠标左键按下响应函数
function mousePressed() {
    var r = 7;
    var y = 10;
    for (y; y < 50; y++) {
        push();
        stroke(255, 62, 150);
        fill(255, 62, 150);
        translate(mouseX, mouseY);
        ellipse(0, -y, r, r);

        stroke(255, 165, 79);
        fill(255, 165, 79);
        rotate(PI / 4);
        ellipse(0, -y, r, r);

        stroke(255, 255, 79);
        fill(255, 255, 79);
        rotate(PI / 4);
        ellipse(0, -y, r, r);

        stroke(0, 250, 154);
        fill(0, 250, 154);
        rotate(PI / 4);
        ellipse(0, -y, r, r);

        stroke(0, 206, 209);
        fill(0, 206, 209);
        rotate(PI / 4);
        ellipse(0, -y, r, r);

        stroke(0, 191, 255);
        fill(0, 191, 255);
        rotate(PI / 4);
        ellipse(0, -y, r, r);

        stroke(132, 112, 255);
        fill(132, 112, 255);
        rotate(PI / 4);
        ellipse(0, -y, r, r);

        stroke(144, 238, 144);
        fill(144, 238, 144);
        rotate(PI / 4);
        ellipse(0, -y, r, r);
        pop();
    }
}


//设置浅紫色
function setColor() {
    fill(165, 135, 255);//填充
    stroke(255);//描边
}

//绘制舞台
function drawWutai() {
    var lu, ru, ld, rd;
    lu = new Array();
    ld = new Array();
    ru = new Array();
    rd = new Array();

    lu[1] = windowWidth * (0.5 - 0.15);
    lu[2] = windowHeight * (0.5 - 0.05);

    ru[1] = windowWidth * (0.5 + 0.15);
    ru[2] = windowHeight * (0.5 - 0.05);

    ld[1] = windowWidth * (0.5 - 0.18);
    ld[2] = windowHeight * (0.5 + 0.018);

    rd[1] = windowWidth * (0.5 + 0.18);
    rd[2] = windowHeight * (0.5 + 0.018);
    stroke(255, 235, 205);
    fill(255, 235, 205);
    quad(lu[1], lu[2], ru[1], ru[2], rd[1], rd[2], ld[1], ld[2]);
    //line(lu[1], lu[2], ru[1], ru[2]);
    //line(ld[1], ld[2], rd[1], rd[2]);
    //line(lu[1], lu[2], ld[1], ld[2]);
    //line(ru[1], ru[2], rd[1], rd[2]);
    stroke(0);
    fill(50);
    rect(0.25 * windowWidth, windowHeight * (0.5 - 0.1), 50, 80);
    rect(0.72 * windowWidth, windowHeight * (0.5 - 0.1), 50, 80);

    fill(255);
    ellipse(0.25 * windowWidth + 25, windowHeight * (0.5 - 0.1) + 55, 35, 35);
    ellipse(0.72 * windowWidth + 25, windowHeight * (0.5 - 0.1) +55, 35, 35);
    ellipse(0.25 * windowWidth + 25, windowHeight * (0.5 - 0.1) +20, 20, 20);
    ellipse(0.72 * windowWidth + 25, windowHeight * (0.5 - 0.1) +20, 20, 20);
    noFill();
    ellipse(0.25 * windowWidth + 25, windowHeight * (0.5 - 0.1) +55, 30 + 5 * sin(millis() * 0.01), 30 + 5 * sin(millis() * 0.01));
    ellipse(0.72 * windowWidth + 25, windowHeight * (0.5 - 0.1) +55, 30 + 5 * sin(millis() * 0.01), 30 + 5 * sin(millis() * 0.01));
    ellipse(0.25 * windowWidth + 25, windowHeight * (0.5 - 0.1) +20, 15 + 5 * sin(millis() * 0.01), 15 + 5 * sin(millis() * 0.01));
    ellipse(0.72 * windowWidth + 25, windowHeight * (0.5 - 0.1) +20, 15 + 5 * sin(millis() * 0.01), 15 + 5 * sin(millis() * 0.01));
}

//绘制人
function drawRen(x,y) {
    push();
    stroke(255, 174, 185);
    strokeWeight(3.0);
    translate(x + 5 * cos(millis() * 0.002), y + 5 * sin(millis() * 0.002));

    bezier(30, 30, 32, 35, 38, 38, 40, 40);
    bezier(30, 20, 20, 35, 22, 38, 20, 40);

    pop();
}

//绘制畏
function drawWei(x, y) {
    push();
    stroke(99, 184, 255);
    translate(x, y);
    scale(1.618);
    var r = 15;
    ellipse(0, 0, 2*r, 1.5*r);
    line(- r, 0, r, 0);
    line(0, - 1.5 / 2 * r, 0, 1.5 / 2 * r);

    line(- r - 3, 1.5 / 2 * r + 5, r + 3, 1.5 / 2 * r + 5);

    bezier(- 0.5 * r, + 1.5 / 2 * r + 5, - 0.618 * r, 1.5 * r + 10, - 0.4 * r, 1.5 * r + 10, - 0.018 * r, 1.5 * r + 5);


    bezier(- 0.5 * r, + 1.5 / 2 * r + 5, 0, 1.5 * r + 5, 0.3 * r, 1.5 * r + 5, 0.818 * r, 1.5 * r + 8);

    fill(99, 184, 255);
    ellipse(0.7 * r, 1.5 * r, 0.318 * r, 0.318 * r);
    noFill();
    pop();
}

//绘制人群
function Wave(angle) {
    for (var i = 0; i < num; i++) {
        push();
        //rotate(PI * random(-angle, angle) * 1.0 / 180 * 0.168 * sin(millis() * 0.002));
        drawRen(X[i], Y[i]);
        pop();
    }
}

//绘制抖动畏
function WaveWei(angle) {
    push();
    translate(5 * sin(random(-500, 500) * 0.001), 2 * sin(random(-500, 500) * 0.001));
    drawWei(0.5 * windowWidth, windowHeight * (0.5 - 0.05)-60);
    pop();
}

//绘制音符1
function Yinfu1(x, y, s, r, g, b) {
    push();

    translate(x, y);
    scale(s);
    stroke(r, g, b);
    strokeWeight(2.0);
    line(- 10, 2, 10, - 2);
    line(- 10, 7, 10, 3);
    line(- 10, 2, - 11, 20);
    line(10, - 2, 9, 17);
    fill(r,g,b);
    push();
    translate(- 15, 22);
    rotate(-PI * 1 / 6);
    ellipse(0, 0, 8, 3);
    pop();

    push();
    translate(5, 19);
    rotate(-PI * 1 / 6);
    ellipse(0, 0, 8, 3);
    pop();

    pop();
}

//绘制音符2
function Yinfu2(x, y, s, r, g, b) {
    push();

    translate(x, y);
    scale(s);
    stroke(r, g, b);
    strokeWeight(2.0);
    line(- 10, 2, - 11, 20);
    fill(r,g,b);
    push();
    translate(- 15, 22);
    rotate(-PI * 1 / 6);
    ellipse(0, 0, 8, 3);
    pop();

    pop();
}

//绘制音符
function Yinfu(a,b,s) {
    Yinfu1(0.5 * windowWidth + 80 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 70 + b *sin(millis() * 0.002), 0.5 + s * sin(millis()*0.002),174,238,238);
    Yinfu2(0.5 * windowWidth + 120 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 80 + b * sin(millis() * 0.002), 0.6 + s * sin(millis() * 0.002),174, 238, 238);
    Yinfu1(0.5 * windowWidth + 140 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 90 + b * sin(millis() * 0.002), 0.7 + s * sin(millis() * 0.002),174, 238, 238);
    Yinfu2(0.5 * windowWidth + 180 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 95 + b * sin(millis() * 0.002), 0.8 + s * sin(millis() * 0.002),174, 238, 238);
    Yinfu1(0.5 * windowWidth + 200 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 100 + b * sin(millis() * 0.002), 0.9 + s * sin(millis() * 0.002),174, 238, 238);
}
