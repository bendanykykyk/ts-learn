// 枚举
enum Color {
  Red = 3,
  Green,
  Blue,
}
let c: Color = Color.Green;

console.log(Color.Red);
console.log(Color.Green);

enum Response2 {
  No = 0,
  Yes = 1,
}

function respond(recipient: string, message: Response2): void {
  // ...
  //   console.log("枚举值：" + message);
}
console.log(Response2.No);
respond("Princess Caroline", Response2.No);

function getSomeValue() {
  return 0;
}

// 定义值的地方可以是一个方法的返回值。计算的话，必须放到最后一位
enum E {
  B,
  A = getSomeValue(),
}

console.log("A:" + E.A);

enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}

interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}

let c2: Circle = {
  kind: ShapeKind.Circle,
  //    ~~~~~~~~~~~~~~~~ Error!
  radius: 100,
};

// enum F {
//   Foo,
//   Bar,
// }

// function f(x: F) {
//   if (x !== F.Foo || x !== F.Bar) {
//     // Error! Operator '!==' cannot be applied to types 'E.Foo' and 'E.Bar'.
//   }
// }

// enum H {
//   X,
//   Y,
//   Z,
// }

// function f(obj: {X: number}) {
//   return obj.X;
// }

// f(H);

// 反向映射
enum Enum2 {
  A,
}
let a2 = Enum2.A;
let nameOfA = Enum2[a2]; // "A"

const enum Enum {
  A = 1,
  B = A * 2,
}

console.log(Enum.A);
console.log(Enum.B);
