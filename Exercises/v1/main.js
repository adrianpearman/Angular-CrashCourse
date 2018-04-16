function log(message) {
    console.log(message);
}
var message = 'hello world';
log(message);
function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log('Finally: ', i);
}
doSomething();
// enums - ach value in the enum retains an index value
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
// Type Assertion
var newMessage;
newMessage = 'abc';
var endsWithC = newMessage.endsWith('c');
var endsWithCAlt = newMessage.endsWith('c');
// Arrow Functions
// let newLog = function(message) {
//   console.log(message)
// }
// refactored version
var newLog = function (message) { return console.log(message); };
// parameters & interfaces
// interface Point {
//   x: number,
//   y: number,
//   draw: () => void
// }
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    // public -- fully accessible outside of the function. functions by default are set to public
    Point.prototype.draw = function () {
        console.log('X ', this.x);
        console.log('Y ', this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    // Getter
    Point.prototype.getX = function () {
        return this.x;
    };
    // Setter
    Point.prototype.setX = function (value) {
        if (value < 0) {
            throw new Error('value cannot be less than 0');
        }
        this.x = value;
    };
    return Point;
}());
var drawPoint = function (point) {
    // ...
};
// let point = new Point()
// point.x = 100
// point.y = 300
var point = new Point(1, 2);
var x = point.getX();
point.setX(100);
point.draw();
