var topMenu = null;
var menu = null;
var menuLinks = [];


var arrowTweens = [];
var arrow = [new Point(34, 44), new Point(50, 60), new Point(66, 44)];
var arrowFrom = [new Point(34, 44), new Point(50, 60), new Point(66, 44)];
var arrowTo = [new Point(34, 56), new Point(50, 40), new Point(66, 56)];

var arrow1 = null;
var arrow2 = null;


function initMenu() {
    topMenu = document.getElementById('topMenuButton');
    menu = document.getElementById('menu');
    arrow1 = document.getElementById('arrow1');
    arrow2 = document.getElementById('arrow2');
    menuLinks = document.getElementsByClassName('menuLink');
    topMenu.onclick = menuToggle;

    var l = menuLinks.length;
    for (var i=0; i<l; i++) {
        menuLinks[i].onclick = menuToggle;
    }
}

function menuToggle() {
    if (menu.clientHeight<10) {
        menu.style.height = '100%';
        animateArrows('in',0.2);
    } else {
        menu.style.height = '0';
        animateArrows('out',0.2);
    }
    menu.classList.toggle("openMenu");
}


function animateArrows(type,t) {
    clearArrowTweens();

    if (type=='in') {
        arrayToArray2(arrow,arrowTo,t,0,[arrow1,arrow2]);
    }
    else {
        arrayToArray2(arrow,arrowFrom,t,0,[arrow1,arrow2]);
    }
}

function arrayToArray2(arr1,arr2,t,d,elements) {
    t = t || 1;
    d = d || 0;

    var update = null;
    for (var h=0; h<arr2.length; h++) {
        if (h==(arr2.length-1)) {
            update = arr1;
        }
        pointToPoint2(arr1[h],arr2[h],t,d,update,elements);
    }
}

function pointToPoint2(p1,p2,t,d,update,elements) {
    t = t || 1;
    d = d || 0;

    var tween = new TWEEN.Tween(p1);
    arrowTweens.push(tween);
    tween.to(p2, t * 1000);
    tween.delay(d * 1000);
    tween.start();

    tween.onUpdate(function() {
        p1.x = this.x;
        p1.y = this.y;

        if (update) {
            for (var h=0; h<elements.length; h++) {
                elements[h].setAttribute('d', pointsToString(update));
            }
        }
    });

    tween.easing(TWEEN.Easing.Cubic.InOut);
}

function clearArrowTweens() {
    for (var h=0; h<arrowTweens.length; h++) {
        arrowTweens[h].stop();
    }
    arrowTweens = [];
}
