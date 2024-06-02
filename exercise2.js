// Classes - Creating an instance of the class object as well as using get & set

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
    return `The sum of the 8 numbers are ${
      this.a + this.b + this.c + this.d + this.e + this.f + this.g + this.h
    }`;
  }

  set otherValues(value) {
    const rValue = [19, 27, 7, 80, 57, 22, 91, 14, 108, 77, 19, 33];
    this.a = value;
    this.b = rValue[Math.floor(Math.random() * 12)];
  }

  get getNewSum() {
    return `The new values of a and b added together is now ${this.a + this.b}`;
  }
}

let sum1 = new Algebra(871, 934, 93, 118, 811, 457, 10, 200);

console.log(sum1.getTheSum());

sum1.otherValues = 10;

console.log(sum1.getTheSum());

console.log(sum1.getNewSum);
