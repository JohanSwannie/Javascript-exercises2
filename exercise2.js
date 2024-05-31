class Algebra {
  constructor(_a, _b, _c, _d, _e, _f, _g, _h) {
    (this.a = _a),
      (this.b = _b),
      (this.c = _c),
      (this.d = _d),
      (this.e = _e),
      (this.f = _f),
      (this.g = _g),
      (this.h = _h);
  }
  getTheSum() {
    return `The sum of the 2 numbers are ${
      this.a + this.b + this.c + this.d + this.e + this.f + this.g + this.h
    }`;
  }
}

let sum1 = new Algebra(871, 934, 93, 118, 811, 457, 10, 200);

console.log(sum1.getTheSum());
