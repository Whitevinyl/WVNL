

//var TWEEN;

var paletteTime = 0.9;



var paletteTweens = [];
var paletteTransparent = [new RGBA(26,14,26,1),new RGBA(255,255,255,1),new RGBA(0,226,186,1),new RGBA(221,85,255,1)];
var paletteDark = [new RGBA(26,14,26,1),new RGBA(255,255,255,1),new RGBA(0,226,186,1),new RGBA(221,85,255,1)];
var paletteLight = [new RGBA(250,250,240,1),new RGBA(10,10,11,1),new RGBA(250,45,55,1),new RGBA(0,140,230,1)];
var palettePink = [new RGBA(250,200,185,1),new RGBA(10,10,11,1),new RGBA(250,45,55,1),new RGBA(110,0,255,1)];
var paletteGrey = [new RGBA(210,211,215,1),new RGBA(10,10,11,1),new RGBA(0,160,170,1),new RGBA(110,0,255,1)];
var paletteGold = [new RGBA(245,190,30,1),new RGBA(10,10,11,1),new RGBA(250,45,55,1),new RGBA(110,0,255,1)];
var paletteBlue = [new RGBA(20,20,75,1),new RGBA(255,255,255,1),new RGBA(255,55,65,1),new RGBA(60,180,255,1)];

var projectPalettes = [paletteDark, paletteLight, palettePink, paletteGrey, paletteBlue, paletteDark, paletteLight, paletteLight, palettePink, paletteDark]; // temp
var currentPalette = paletteDark;

var c1 = paletteDark[0].copy();
var c2 = paletteDark[1].copy();
var c3 = paletteDark[2].copy();
var c4 = paletteDark[3].copy();




// SET CSS COLOR //
function setCSSColor(col,name,bg) {
    var h;
    var c = "rgba("+Math.round(col.R)+","+Math.round(col.G)+","+Math.round(col.B)+","+(col.A)+")";

    if (bg) {
        var bgs = document.getElementsByClassName(name);
        for (h=0; h<bgs.length; h++) {
            bgs[h].style.backgroundColor = c;
        }
    }
     else {
        var cols = document.getElementsByClassName(name);
        for (h=0; h<cols.length; h++) {
            cols[h].style.color = c;
        }
    }
}




function initPalette() {

}






function changePalette(palette,t,d) {
    if (palette && palette!==currentPalette) {
        clearPaletteTweens();
        colToCol(c1,palette[0],t,d,'bg',true);
        colToCol(c2,palette[1],t,d,'foreground');
        colToCol(c3,palette[2],t,d,'highlight1');
        colToCol(c4,palette[3],t,d,'highlight2');
        currentPalette = palette;
    }
}






function colToCol(col,col2,t,d,name,bg) {

    t = t || 1;
    d = d || 0;

    var pos = {r: col.R, g: col.G, b: col.B, a: col.A };

    var tween = new TWEEN.Tween(pos);
    paletteTweens.push(tween);
    tween.to({ r: col2.R, g: col2.G, b: col2.B, a: col2.A  }, t*1000);
    tween.delay(d*1000);
    tween.start();

    tween.onUpdate(function() {
        col.R = this.r;
        col.G = this.g;
        col.B = this.b;
        col.A = this.a;
        if (name) {
            setCSSColor(col,name,bg);
        }
    });

    tween.easing( TWEEN.Easing.Cubic.InOut );
}


function clearPaletteTweens() {
    for (var h=0; h<paletteTweens.length; h++) {
        paletteTweens[h].stop();
    }
    paletteTweens = [];
}
