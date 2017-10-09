/**
 * Created by luketwyman on 03/11/2014.
 */


//-------------------------------------------------------------------------------------------
//  BG
//-------------------------------------------------------------------------------------------

//var noisePNG = new Image();
//noisePNG.src = 'noise10perc.png';

function drawBG() {

    //cxa.globalAlpha = 1;

    color.fill(cxa,bgCol);
    cxa.fillRect(0,0,fullX,fullY);
}





//-------------------------------------------------------------------------------------------
//  FOREGROUND
//-------------------------------------------------------------------------------------------




function drawScene() {

    cxa.globalAlpha = 1;
    cxa.lineWidth = 1;
    color.fill(cxa,cols[1]);
    color.stroke(cxa,cols[1]);
    cxa.textAlign = 'left';
    cxa.font = "400 " + midType + "px Raleway";
    //cxa.fillText('Whitevinyl is the work of Luke Twyman.',dx + (100*units), dy + (80*units) - midType);


    var y = fullY - (60*units);
    var s = 6*units;
    //var y2 = y - (s/4);
    //var s2 = 16*units;
    cxa.beginPath();
    cxa.moveTo(dx - s, y - (s/4));
    cxa.lineTo(dx, y + (s*0.75));
    cxa.lineTo(dx + s, y - (s/4));

    cxa.moveTo(dx + (s*2.4), y);
    cxa.arc(dx, y, s*2.4, 0, TAU);

    /*cxa.moveTo(dx - s2, y2);
    cxa.lineTo(dx, y2 + s2);
    cxa.lineTo(dx + s2, y2);
    cxa.lineTo(dx, y2 - s2);
    cxa.lineTo(dx - s2, y2);*/

    cxa.stroke();
}



//-------------------------------------------------------------------------------------------
//  DRAW FUNCTIONS
//-------------------------------------------------------------------------------------------

function drawLogo(x,y,s,ctx,baseline,stroke) {

    if (!baseline) {
        y = y + ((s*units) * 0.5);
    }

    if (stroke) {
        ctx.beginPath();
        ctx.moveTo(x+(units*0.075*s),y); // bar bottom right
        ctx.lineTo(x-(units*0.42*s),y-(units*s)); // left arm top right
        ctx.lineTo(x-(units*0.6*s),y-(units*s)); // left arm top left
        ctx.lineTo(x-(units*0.105*s),y); // bar bottom left
        ctx.lineTo(x+(units*0.075*s),y); // bar bottom right
        ctx.lineTo(x+(units*0.075*s),y-(units*0.69*s)); // bar right join

        ctx.moveTo(x-(units*0.075*s),y-(units*s)); // bar top left
        ctx.lineTo(x+(units*0.42*s),y); // right arm bottom left
        ctx.lineTo(x+(units*0.6*s),y); // right arm bottom right
        ctx.lineTo(x+(units*0.105*s),y-(units*s)); // bar top right
        ctx.lineTo(x-(units*0.075*s),y-(units*s)); // bar top left
        ctx.lineTo(x-(units*0.075*s),y-(units*0.31*s)); // bar left join
        ctx.stroke();

    } else {
        ctx.beginPath();
        ctx.moveTo(x-(units*0.6*s),y-(units*s));
        ctx.lineTo(x-(units*0.105*s),y); // OUTER L
        // CENTER B
        ctx.lineTo(x+(units*0.075*s),y);
        ctx.lineTo(x+(units*0.075*s),y-(units*0.69*s)); //    |\

        ctx.lineTo(x+(units*0.42*s),y);
        ctx.lineTo(x+(units*0.6*s),y);
        ctx.lineTo(x+(units*0.105*s),y-(units*s));
        // CENTER T
        ctx.lineTo(x-(units*0.075*s),y-(units*s));
        ctx.lineTo(x-(units*0.075*s),y-(units*0.31*s)); //    \|
        ctx.lineTo(x-(units*0.42*s),y-(units*s));
        ctx.closePath();
        ctx.fill();
    }


}


function colorBlend(col1,col2,percent) {

    var r = col1.R + Math.round((col2.R - col1.R) * (percent/100));
    var g = col1.G + Math.round((col2.G - col1.G) * (percent/100));
    var b = col1.B + Math.round((col2.B - col1.B) * (percent/100));
    var a = col1.A + Math.round((col2.A - col1.A) * (percent/100));

    return new RGBA(r,g,b,a);
}

function drawPattern(x,y,w,h,pattern,size,ctx) {

    var c = Math.ceil(w/size);
    var r = Math.ceil(h/size);
    var i,j;

    for (i=0; i<r; i++) { // for each row
        for (j=0; j<c; j++) { // for each col
            ctx.drawImage(pattern, 0, 0, pattern.width, pattern.height, x+(j*size), y+(i*size), size, size);
        }
    }
}


//-------------------------------------------------------------------------------------------
//  EFFECTS
//-------------------------------------------------------------------------------------------
