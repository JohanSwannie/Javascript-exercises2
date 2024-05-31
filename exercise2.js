class Algebra {
  constructor(_x, _y) {
    (this.x = _x), (this.y = _y);
  }
  getTheSum() {
    return `The sum of the 2 numbers are ${this.x + this.y}`;
  }
}

let sum1 = new Algebra(17, 29);

console.log(sum1.getTheSum());
