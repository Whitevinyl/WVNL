/**
 * Created by luketwyman on 03/11/2014.
 */



// INIT //
var canvas;
var cxa;
var scene = 0;
var TWEEN;


// METRICS //
var halfX = 0;
var halfY = 0;
var fullX = 0;
var fullY = 0;
var units = 0;
var dx = halfX;
var dy = halfY;
var headerType = 0;
var midType = 0;
var dataType = 0;
var bodyType = 0;
var subType = 0;
var device = "desktop";
var ratio = 1;
var width = 0;
var height = 0;

var TAU = 2 * Math.PI;


// INTERACTION //
var mouseX = 0;
var mouseY = 0;
var touchTakeover = false;
var touch;
var mouseIsDown = false;


// COLORS //
var bgCols = [new RGBA(33,17,33,1),new RGBA(28,20,25,1),new RGBA(18,18,28,1),new RGBA(140, 70, 70,1)];
var cols = [new RGBA(255,255,255,1), new RGBA(0,226,186,1), new RGBA(255,131,125,1), new RGBA(50,200,160,1), new RGBA(15,215,175,1), new RGBA(10,212,172,1), new RGBA(255, 250, 150,1)];
var bgCol = bgCols[2];
var hCol = cols[5];

var colMode = 0;

if (colMode===1) {
    bgCol = bgCols[3];
    hCol = cols[6];
}

color.master = new RGBA(5, 0, 5, 0);


// TIME //
var fps = 30;
var now;
var then = Date.now();
var interval = 1000/fps;
var delta;
var deltaMag = 60/fps;


//-------------------------------------------------------------------------------------------
//  INITIALISE
//-------------------------------------------------------------------------------------------

$(document).ready(function(){
    init();
});

function init() {

    ////////////// SETUP CANVAS ////////////
    resize();

    initPalette();
    scrollInit();
    navInit();
    initRipple();
    initMenu();
    initRetina();

    // FADE IN CSS //
    setTimeout(function(){
        document.body.style.opacity = '1';
    },1000);


    // DONE //
    draw();
}



//-------------------------------------------------------------------------------------------
//  LOOP
//-------------------------------------------------------------------------------------------

function draw() {

    /*now = Date.now();
    delta = now - then;

    if (delta > interval) {
        then = now - (delta % interval);

        update();
    }*/
    update();
    requestAnimationFrame(draw);
}


//-------------------------------------------------------------------------------------------
//  UPDATE
//-------------------------------------------------------------------------------------------



function update() {
    if (TWEEN) {
        TWEEN.update();
    }
    updateRipple();
}




function valueInRange(value,floor,ceiling) {
    if (value < floor) {
        value = floor;
    }
    if (value> ceiling) {
        value = ceiling;
    }
    return value;
}


function lerp(current,destination,speed) {
    return current + (((destination-current)/100) * speed);
}



//-------------------------------------------------------------------------------------------
//  RESIZE
//-------------------------------------------------------------------------------------------


function resize() {
    //metrics();
    //landscapeBackground.resize();
}
