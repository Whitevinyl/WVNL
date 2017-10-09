/**
 * Created by luketwyman on 25/11/2015.
 */

//-------------------------------------------------------------------------------------------
//  OBJECTS
//-------------------------------------------------------------------------------------------


function Point( x, y ) {
    this.x = x || 0;
    this.y = y || 0;
}


function RGBA( r, g, b, a ) {
    this.R = r;
    this.G = g;
    this.B = b;
    this.A = a;

    this.toString = function() {
        return "rgba("+this.R+","+this.G+","+this.B+",1)";
    };

    this.clone = function () {
        return new RGBA(this.R, this.G, this.B, this.A);
    };
}
RGBA.prototype.copy = function() {
    return new RGBA(this.R,this.G,this.B,this.A);
};
