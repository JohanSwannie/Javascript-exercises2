// Classes - using static - no need to create an instance of the class object

class Algebra2 {
  constructor(_a, _b, _c, _d) {
    (this.a = _a), (this.b = _b), (this.c = _c), (this.d = _d);
  }

  static test1(v1, v2, v3, v4) {
    return `value 1 multiplied by itself and added to value 2 multiplied by itself is smaller than value 3 multiplied by itself and added to value 4 multiplied by itself - ${
      v1 * v1 + v2 * v2 < v3 * v3 + v4 * v4
    }`;
  }

  static test2(v1, v2, v3, v4) {
    return `value1 and value 2 added together is smaller than value 3 and value 4 added together - ${
      v1 + v2 > v3 + v4
    }`;
  }
}

let sum = new Algebra2(21, 13, 7, 33);

for (var value in sum) {
  if (sum.hasOwnProperty(value)) {
    console.log(`${value} : ${sum[value]}`);
  }
}

console.log(Algebra2.test1(19, 5, 3, 10));

console.log(Algebra2.test2(1, 9, 5, 7));
