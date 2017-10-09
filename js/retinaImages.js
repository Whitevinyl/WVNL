// This swaps out any images for higher scale versions if //
// tagged with the attribute 'data-r' and wider than minSize. //

var images = [];
var minSize = 700;

function initRetina() {

    // get pixelRatio //
    var ratio = pixelRatio();

    if (ratio > 1) {
        // add all page images to an array //
        images = document.getElementsByTagName('img');

        var l = images.length;
        for (var i=0; i<l; i++) {
            var img = images[i];
            if (img.width < minSize) continue;
            var s = getSize(img);
            if (s > 1) {
                swap(img, Math.min(s, ratio));
            }
        }
    }
}

function pixelRatio() {
    return window.devicePixelRatio || 1;
}

function getSize(img) {
    return img.getAttribute('data-r') || 1;
}

function splitExtension(src) {
    var index = src.lastIndexOf('.');
    return [src.slice(0, index), src.slice(index + 1)]
}

function swap(img, s) {
    var path = img.src;
    var split = splitExtension(path);
    var newPath = '' + split[0] + '@' + s + 'x.' + split[1];
    img.src = newPath;
    //console.log('swapped');
}
