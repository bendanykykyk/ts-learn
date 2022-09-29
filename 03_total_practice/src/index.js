"use strict";
// 枚举
var Color;
(function (Color) {
    Color[Color["Red"] = 3] = "Red";
    Color[Color["Green"] = 4] = "Green";
    Color[Color["Blue"] = 5] = "Blue";
})(Color || (Color = {}));
let c = Color.Green;
console.log(Color.Red);
console.log(Color.Green);
var Response2;
(function (Response2) {
    Response2[Response2["No"] = 0] = "No";
    Response2[Response2["Yes"] = 1] = "Yes";
})(Response2 || (Response2 = {}));
function respond(recipient, message) {
    // ...
    //   console.log("枚举值：" + message);
}
console.log(Response2.No);
respond("Princess Caroline", Response2.No);
function getSomeValue() {
    return 0;
}
// 定义值的地方可以是一个方法的返回值。计算的话，必须放到最后一位
var E;
(function (E) {
    E[E["B"] = 0] = "B";
    E[E["A"] = getSomeValue()] = "A";
})(E || (E = {}));
console.log("A:" + E.A);
var ShapeKind;
(function (ShapeKind) {
    ShapeKind[ShapeKind["Circle"] = 0] = "Circle";
    ShapeKind[ShapeKind["Square"] = 1] = "Square";
})(ShapeKind || (ShapeKind = {}));
let c2 = {
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
var Enum2;
(function (Enum2) {
    Enum2[Enum2["A"] = 0] = "A";
})(Enum2 || (Enum2 = {}));
let a2 = Enum2.A;
let nameOfA = Enum2[a2]; // "A"
console.log(1 /* A */);
console.log(2 /* B */);
