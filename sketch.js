var X, Y;
var num = 150;
var isSparks = 0;
var sr = 10;
var State = 1;//1为畏惧，2为自信
var isLeave = 0;
var isCome = 0;

//初始化
function setup() {
    // put setup code here
    createCanvas(windowWidth, windowHeight);
    X = new Array();
    Y = new Array();
    for (var i = 0; i < num; i++) {
        X[i] = random(windowWidth * 0.1, windowWidth * 0.9);
        Y[i] = random(0.6 * windowHeight, 0.9 * windowHeight);
    }
}

//生成新的人群位置
function NewPosition() {
    for (var i = 0; i < num; i++) {
        X[i] = random(windowWidth * 0.1, windowWidth * 0.9);
        Y[i] = random(0.6 * windowHeight, 0.9 * windowHeight);
    }
}

//更改人群位置
function ChangePosition() {
    isLeave = 1;
    for (var i = 0; i < num; i++) {
        if (X[i] > 0.5 * windowWidth) {
            X[i] = X[i] + random(-2, 8);
        }
        else {
            X[i] = X[i] + random(-8, 2);
        }
        if (random(0, 1000) > 900) {
            Y[i] = Y[i] + random(0, 5);
        }
        if (X[i] < windowWidth + 50 && X[i] > -50) {
            isLeave = 0;
        }
    }
}

//更改人群位置2
function ChangePosition2() {
    isCome = 1;
    for (var i = 0; i < num; i++) {
        if (X[i] > 0.5 * windowWidth) {
            X[i] = X[i] - random(-3, 7);
        }
        else {
            X[i] = X[i] - random(-7, 3);
        }
        if (random(0, 1000) > 900) {
            if (Y[i] - 5 > 0.518 * windowHeight) {
                Y[i] = Y[i] - random(0, 5);
            }
        }
        if (X[i] < windowWidth * 0.25 || X[i] > windowWidth * 0.75) {
            isCome = 0;
        }
    }
}

//更改人群位置3
function ChangePosition3() {
    for (var i = 0; i < num; i++) {
            X[i] = X[i] + random(-3, 3);
        if (random(0, 1000) > 900) {
            if (Y[i] - 5 > 0.518 * windowHeight) {
                Y[i] = Y[i] + random(-5, 5);
            }
        }
    }
}

//重绘函数
function draw() {
    // put drawing code here
    background(255, 100);
    drawWutai();

    if (status == 1) {
        Wave();
        WaveWei(1);
        Yinfu(5, 5, 0.1);
        if (isLeave == 0) {
            ChangePosition();
        }
    }
    else {
        Wave();
        SelfWei();
        Yinfu22(5, 5, 0.1);
        if (isCome == 0) {
            ChangePosition2();
        }
        else {
            ChangePosition3();
        }
    }

    if (isSparks == 1) {
        sparks(sr);
        sr = sr + 2;
        if (sr > 50) {
            isSparks = 0;
        }
    }
}

//鼠标左键拖拽响应函数
function mouseDragged() {
    sparks(13);
}

//鼠标左键按下响应函数
function mousePressed() {
    isSparks = 1;
    sr = 10;
    if (status == 1) {
        status = 2;
        isCome = 0;
    }
    else {
        status = 1;
        isLeave = 0;
    }
}

//画焰火
function sparks(y) {
    var r = 7;
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
    translate(x, y);

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
function Wave() {
    for (var i = 0; i < num; i++) {
        push();
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

//绘制自信畏
function SelfWei() {
    push();
    scale(1.295+0.005 * sin(millis() * 0.003));
    translate(-180 , -70 );
    translate(10 * sin(millis() * 0.003), 0);
    //rotate(PI * 0.2 / 180 * sin(millis() * 0.004));
    drawWei(0.5 * windowWidth, windowHeight * (0.5 - 0.05) - 60);
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
function Yinfu(a, b, s) {
    push();
    translate(5 * sin(random(-500, 500) * 0.001), 2 * sin(random(-500, 500) * 0.001));
    Yinfu1(0.5 * windowWidth + 80 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 70 + b *sin(millis() * 0.002), 0.5 + s * sin(millis()*0.002),174,238,238);
    Yinfu2(0.5 * windowWidth + 120 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 80 + b * sin(millis() * 0.002), 0.6 + s * sin(millis() * 0.002),174, 238, 238);
    Yinfu1(0.5 * windowWidth + 140 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 90 + b * sin(millis() * 0.002), 0.7 + s * sin(millis() * 0.002),174, 238, 238);
    Yinfu2(0.5 * windowWidth + 180 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 95 + b * sin(millis() * 0.002), 0.8 + s * sin(millis() * 0.002),174, 238, 238);
    Yinfu1(0.5 * windowWidth + 200 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 100 + b * sin(millis() * 0.002), 0.9 + s * sin(millis() * 0.002),174, 238, 238);
    pop();
}

//绘制音符22
function Yinfu22(a, b, s) {
    Yinfu1(0.5 * windowWidth + 80 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 70 + b * sin(millis() * 0.002), 0.5 + s * sin(millis() * 0.002), 174, 238, 238);
    Yinfu2(0.5 * windowWidth + 120 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 80 + b * sin(millis() * 0.002), 0.6 + s * sin(millis() * 0.002), 174, 238, 238);
    Yinfu1(0.5 * windowWidth + 140 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 90 + b * sin(millis() * 0.002), 0.7 + s * sin(millis() * 0.002), 174, 238, 238);
    Yinfu2(0.5 * windowWidth + 180 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 95 + b * sin(millis() * 0.002), 0.8 + s * sin(millis() * 0.002), 174, 238, 238);
    Yinfu1(0.5 * windowWidth + 200 + a * cos(millis() * 0.002), windowHeight * (0.5 - 0.05) - 100 + b * sin(millis() * 0.002), 0.9 + s * sin(millis() * 0.002), 174, 238, 238);
}
