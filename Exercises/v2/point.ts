export class Point {
  constructor(private x?: number, private y?: number) {}

  draw() {
    console.log("X " + this.x);
    console.log("Y " + this.y);
  }

  set X(value) {
    if (value < 0) {
      throw new Error("Value has to be larger than 0");
    }

    this.x = value;
  }

  get X() {
    return this.x;
  }
}