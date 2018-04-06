function log(message){
  console.log(message)
}

let message = 'hello world'
log(message)


function doSomething(){
  for(let i = 0; i < 5; i++){
    console.log(i)
  }
  console.log('Finally: ', i)
}

doSomething()

// enums - ach value in the enum retains an index value
enum Color { Red, Green, Blue }
const backgroundColor = Color.Red

// Type Assertion
let newMessage
newMessage = 'abc'
let endsWithC = (<string>newMessage).endsWith('c')
let endsWithCAlt = (newMessage as string).endsWith('c')

// Arrow Functions
// let newLog = function(message) {
//   console.log(message)
// }
// refactored version
let newLog = (message) => console.log(message)

// parameters & interfaces
// interface Point {
//   x: number,
//   y: number,
//   draw: () => void
// }

class Point {
  x: number;
  y: number;

  draw(){
    console.log('X ', this.x)
    console.log('Y ', this.y)
  }

  getDistance(another: Point){
    //...
  }
}

let drawPoint = (point: Point) => {
  // ...
}

let point = new Point()
point.x = 100
point.y = 300
point.draw()
