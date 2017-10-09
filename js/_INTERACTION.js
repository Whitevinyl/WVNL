//-------------------------------------------------------------------------------------------
//  INTERACTION
//-------------------------------------------------------------------------------------------



function mousePress() {

    mouseIsDown = true;
    rolloverCheck();

    //landscapeBackground.generate();
}

function mouseRelease() {
    mouseIsDown = false;
}



function mouseMove(event) {

    var x,y;

    if (touchTakeover==true) {
        x = touch.pageX;
        y = touch.pageY;
    } else {
        x = event.pageX;
        y = event.pageY;
    }

    const ratio = getPixelRatio();
    mouseX = x * ratio;
    mouseY = y * ratio;
    rolloverCheck();


    if (mouseIsDown) {
        //landscapeBackground.intensity = mouseX/fullX;
        //landscapeBackground.speed = 1 + ((mouseY/fullY) * 1000);
        color.master.R = -10 + ((mouseX/fullX) * 20) + ((mouseY/fullY) * 25);

        color.master.G = -50 + ((mouseY/fullY) * 100);
        color.master.B = -50 + ((mouseY/fullY) * 100) + ((mouseX/fullX) * 10);
    }

}

function rolloverCheck() {
    //playOver = hudCheck(dx - (32*units),dy + (8*units) + (midType*0.9),64*units,64*units);
}

function hudCheck(x,y,w,h) { // IS CURSOR WITHIN GIVEN BOUNDARIES
    var mx = mouseX;
    var my = mouseY;
    return (mx>x && mx<(x+w) && my>y && my<(y+h));
}


// DETERMINE CLICK //
function clickOrTouch(event) {

    var x,y;

    if (touchTakeover==true) {
        x = touch.pageX;
        y = touch.pageY;
    } else {
        x = event.pageX;
        y = event.pageY;
    }

    const ratio = getPixelRatio();
    mouseX = x * ratio;
    mouseY = y * ratio;

    if (mouseIsDown==false) {
        mousePress(event);
    }
}
