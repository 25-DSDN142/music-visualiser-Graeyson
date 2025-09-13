let dropSize;
let angle = 110;
let speed = 0.8;
angleMode(DEGREES);

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {
    background('black');
    let dropHue = map(drum, 0, 100, 0, 360);
    let lightHue = map(bass, 0, 100, 40, 130);
    let brightBeat = map(other, 0, 100, 20, 100);


    //Background of stage


    //artwork
    noStroke();
    fill('lightblue');
    rect(100, 80, 880, 320);

    //leaf 1
    push();
    translate(200, 200);
    rotate(172);
    fill(78, 154, 81);
    stroke(101, 67, 33);
    strokeWeight(4);
    line(0, 0, 0, 30);

    // Draw leaf
    noStroke();
    fill(78, 154, 81);
    stroke(0, 100);
    strokeWeight(1);
    beginShape();
    vertex(0, 0);
    vertex(-90, -30);
    vertex(0, -120);
    vertex(90, -30);
    endShape(CLOSE);
    pop();

    //leaf 2
    push();
    translate(400, 300);
    rotate(62);
    fill(78, 154, 81);
    stroke(101, 67, 33);
    strokeWeight(4);
    line(0, 0, 0, 30);

    // Draw leaf
    noStroke();
    fill(78, 154, 81);
    stroke(0, 100);
    strokeWeight(1);
    beginShape();
    vertex(0, 0);
    vertex(-90, -30);
    vertex(0, -120);
    vertex(90, -30);
    endShape(CLOSE);
    pop();

    //leaf 3
    push();
    translate(370, 175);
    rotate(285);
    fill(78, 154, 81);
    stroke(101, 67, 33);
    strokeWeight(4);
    line(0, 0, 0, 30);

    // Draw leaf
    noStroke();
    fill(78, 154, 81);
    stroke(0, 100);
    strokeWeight(1);
    beginShape();
    vertex(0, 0);
    vertex(-90, -30);
    vertex(0, -120);
    vertex(90, -30);
    endShape(CLOSE);
    pop();

    //leaf 4
    push();
    translate(600, 175);
    rotate(194);
    fill(78, 154, 81);
    stroke(101, 67, 33);
    strokeWeight(4);
    line(0, 0, 0, 30);

    // Draw leaf
    noStroke();
    fill(78, 154, 81);
    stroke(0, 100);
    strokeWeight(1);
    beginShape();
    vertex(0, 0);
    vertex(-90, -30);
    vertex(0, -120);
    vertex(90, -30);
    endShape(CLOSE);
    pop();

    //leaf 5
    push();
    translate(750, 300);
    rotate(0);
    fill(78, 154, 81);
    stroke(101, 67, 33);
    strokeWeight(4);
    line(0, 0, 0, 30);

    // Draw leaf
    noStroke();
    fill(78, 154, 81);
    stroke(0, 100);
    strokeWeight(1);
    beginShape();
    vertex(0, 0);
    vertex(-90, -30);
    vertex(0, -120);
    vertex(90, -30);
    endShape(CLOSE);
    pop();

    //leaf 6
    push();
    translate(950, 250);
    rotate(300);
    fill(78, 154, 81);
    stroke(101, 67, 33);
    strokeWeight(4);
    line(0, 0, 0, 30);

    // Draw leaf
    noStroke();
    fill(78, 154, 81);
    stroke(0, 100);
    strokeWeight(1);
    beginShape();
    vertex(0, 0);
    vertex(-90, -30);
    vertex(0, -120);
    vertex(90, -30);
    endShape(CLOSE);
    pop();



    //reactive backdrop
    noStroke();
    fill('lightgrey');
    rect(0, 500, 1500, 500);
    fill(44, 74, dropHue, 90);
    rect(100, 80, 880, 320);


    //stagefloor
    noStroke(); //left edge
    fill(43, 43, 43);
    triangle(100, 400, 10, 600, 100, 600);

    noStroke(); //right edge
    fill(43, 43, 43);
    triangle(980, 400, 1070, 600, 980, 600);

    noStroke();
    fill(43, 43, 43);
    rect(100, 400, 880, 200);

    noStroke();
    fill(35, 37, 38);
    rect(10, 600, 1060, 100);

    //metal framing left
    beginShape();
    fill(158, 158, 158);
    vertex(10, 600);
    vertex(50, 550);
    vertex(10, 500);
    vertex(50, 450);
    vertex(10, 400);
    vertex(50, 350);
    vertex(10, 300);
    vertex(50, 250);
    vertex(10, 200);
    vertex(50, 150);
    vertex(70, 150);
    vertex(30, 200);
    vertex(70, 250);
    vertex(30, 300);
    vertex(70, 350);
    vertex(30, 400);
    vertex(70, 450);
    vertex(30, 500);
    vertex(70, 550);
    vertex(30, 600);
    endShape(CLOSE);

    //metal framing right
    beginShape();
    fill(158, 158, 158);
    vertex(1070, 600);
    vertex(1030, 550);
    vertex(1070, 500);
    vertex(1030, 450);
    vertex(1070, 400);
    vertex(1030, 350);
    vertex(1070, 300);
    vertex(1030, 250);
    vertex(1070, 200);
    vertex(1030, 150);
    vertex(1010, 150);
    vertex(1050, 200);
    vertex(1010, 250);
    vertex(1050, 300);
    vertex(1010, 350);
    vertex(1050, 400);
    vertex(1010, 450);
    vertex(1050, 500);
    vertex(1010, 550);
    vertex(1050, 600);
    endShape(CLOSE);

    //metal framework
    noStroke();
    fill(158, 158, 158);
    rect(10, 150, 15, 450);
    rect(55, 150, 15, 450)
    rect(1055, 150, 15, 450);
    rect(1010, 150, 15, 450);
    rect(10, 110, 1060, 50);

    //roof
    noStroke();
    fill(112, 112, 112);
    triangle(100, 80, 10, 110, 100, 110);
    triangle(980, 80, 1070, 110, 980, 110);
    rect(100, 80, 880, 30);

    // display "words"

    fill(245, 242, 231);
    textAlign(CENTER);
    textFont('Tahoma');


    for (let i = 10; i > 0; i--) {
        fill(245, 242, 231, 20);
        textSize(vocal + i);
        text(words, width / 2, height / 3);
    }

    // Draw main text (sharp)
    fill(245, 242, 231);
    textSize(vocal);
    text(words, width / 2, height / 3);



    //light 1
    push();
    translate(130, 160);
    rotate(angle);
    beginShape();
    fill(255, 214, lightHue * 5, lightHue + 70);
    vertex(0, 0);
    vertex(-80, -500);
    vertex(80, -500);
    endShape(CLOSE);
    fill(53, 56, 53);
    ellipse(0, 0, 30);
    rect(-15, 0, 30, -30)
    pop();

    //light 2
    push();
    translate(270, 160);
    rotate(angle);
    beginShape();
    fill(60, 145, lightHue / 7, lightHue  + 70);
    vertex(0, 0);
    vertex(-80, -500);
    vertex(80, -500);
    endShape(CLOSE);
    fill(53, 56, 53);
    ellipse(0, 0, 30);
    rect(-15, 0, 30, -30)
    pop();

    //light 3
    push();
    translate(830, 160);
    rotate(angle);
    beginShape();
    fill(60, 145, lightHue * 5, lightHue  + 70);
    vertex(0, 0);
    vertex(-80, -500);
    vertex(80, -500);
    endShape(CLOSE);
    fill(53, 56, 53);
    ellipse(0, 0, 30);
    rect(-15, 0, 30, -30)
    pop();

    //light 4
    push();
    translate(970, 160);
    rotate(angle);
    beginShape();
    fill(255, 214, lightHue, lightHue + 70);
    vertex(0, 0);
    vertex(-80, -500);
    vertex(80, -500);
    endShape(CLOSE);
    fill(53, 56, 53);
    ellipse(0, 0, 30);
    rect(-15, 0, 30, -30)
    pop();


    angle += speed;


    if (angle > 250 || angle < 110) {
        speed *= -1;
    }



}