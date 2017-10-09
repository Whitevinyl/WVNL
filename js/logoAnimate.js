
function Point(x,y) {
    this.x = x || 0;
    this.y = y || 0;
}


var clipping = [new Point(100, 0), new Point(0, 0)];
var clippingFrom = [new Point(100, 0), new Point(0, 0)];
var clippingTo = [new Point(100, 0), new Point(0, 0)];

var rippleLength = 17;
var rippleNoise = new SimplexNoise();
var rippleIndexX = 0;
var rippleIndexY = 0;
var rippleDiv = 27;
var rippleScale = 0;
var rippleTween = null;



function initRipple() {
    var e = document.getElementById('logo');
    e.onmouseover = function() {animIn();};
    e.onmouseout = function() {animOut();};

    for (var h=0; h<=rippleLength; h++) {
        clipping.push(new Point(h * Math.round(100/rippleLength), 100));
        clippingFrom.push(new Point(h * Math.round(100/rippleLength), 100));
    }
}

function animIn() {
    if (rippleTween) rippleTween.stop();
    rippleTween = rippleTo(20,0.6,0);
}
function animOut() {
    rippleTween = rippleTo(0,2,0);
}

function updateRipple() {
    if (rippleScale>0) {
        rippleIndexX += 0.20;
        rippleIndexY += 0.18;
        clippingTo = [new Point(100, 0), new Point(0, 0)];
        var l = clipping.length;
        for (var h=2; h<l; h++) {
            var n = rippleNoise.noise((rippleIndexX/rippleDiv) + (h/rippleDiv), (rippleIndexY/rippleDiv));
            clippingTo.push(new Point(0, 100 - rippleScale + (n * rippleScale)));

            clipping[h].y = lerp(clipping[h].y, clippingTo[h].y,50);
        }
        var c = document.getElementById('logoMask');
        var s = pointsToString(clipping) + ' Z';
        c.setAttribute('d', s);
    }

}


// format points for SVG //
function pointsToString(points) {

    // first point //
    var string = 'M' + points[0].x + ' '+points[0].y;

    // remaining points //
    for (var i=1; i<points.length; i++) {
        string += ' L' + points[i].x + ' '+points[i].y;
    }
    return string;
}



function rippleTo(v,t,d) {
    t = t || 1;
    d = d || 0;

    var vPos = {v: rippleScale};
    var tween = new TWEEN.Tween(vPos);
    tween.to({v: v}, t * 1000);
    tween.delay(d * 1000);
    tween.start();

    tween.onUpdate(function() {
        rippleScale = this.v;
    });

    tween.easing(TWEEN.Easing.Cubic.InOut);
    return tween;
}
