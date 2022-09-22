"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
/************** 类型注解 1.1原始数据类型 *******************/
//  布尔值
let isDone = false;
// 数字
let decLiteral = 6;
let hexLiteral = 0xf00d;
let binaryLiteral = 0b1010;
let octalLiteral = 0o744;
// 字符串
let Bob = `Gene`;
let age = 37;
let sentence = `Hello, my name is ${name}.

I'll be ${age + 1} years old next month.`;
// any 不确定变量的类型
let notSure = 4;
notSure = "maybe a string instead";
notSure = false;
let obj = { name: "yk", age: 18 };
// console.log(obj.) 出对应的提示
// void 表示没有任何类型 跟any相对
function warnUser() {
    console.log("This is my warning message");
}
// null和undefined 是所有类型的子类型
//*  let u: undefined = 3; // （虽然undefined是number的子类型，本身不会报错，但是tsconfig配置会有问题）
let u = undefined; // 观察类型 u的类型其实是any
// never 表示执行不完，肯定有错
function error(message) {
    throw new Error(message);
}
// 推断的返回值类型为never
function fail() {
    return error("Something failed");
}
// 返回never的函数必须存在无法达到的终点
function infiniteLoop() {
    while (true) { }
}
let person = {
    id: 123,
    name: "yk",
    wifeName: "meinv",
    wifeAge: 18, // 任意值 任意类型
};
//* person.id = 1234;
/**************      *******************/
/**************   1.2.2 数组的注解   *******************/
let arr = [1, 2, 3];
let numberArr = [1, 2, 3]; // 方式一
let numberArr2 = [1, 2, 3, 4]; // 注解方式二
let numberArr3 = [2, 3, 4, 5];
/**************      *******************/
/**************   1.2.3 函数的注解   *******************/
// 方式一: 函数方式
function foo(x, y) {
    console.log(x, y);
}
const foo2 = function (x, y) {
    return x + y;
};
// 函数参数可选/默认参数/rest参数
function bar(name = "yk", age, ...restArgs) { }
// 拓展：函数参数解构后的注解 可选 默认值 以及剩余参数
function deconstruct(_a = { name: "yk" }) { var { name, age } = _a, restArgs = __rest(_a, ["name", "age"]); }
let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    //   这里的this 如果不给Deck类型，并且设置了     "noImplicitThis": false,   可以指定this为参数，并且给this注解类型的方式，来注解this 解决this模糊问题
    createCardPicker: function () {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);
            return { suit: this.suits[pickedSuit], card: pickedCard % 13 };
        };
    },
};
function reverseWords(words) {
    if (typeof words == "string") {
        return words.split("").reverse().join("");
    }
    else {
        return Number(words.toString().split("").reverse().join(""));
    }
}
/**************      *******************/
/**************   1.2.4 类的注解   *******************/
// 类的注解
// 父类，基类
class Animal {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
// 子类继承后的注解
// 子类，派生类
class Snake extends Animal {
    constructor(name) {
        //   这里的super指代的是父类的构造器
        super(name);
    }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        //   这里的super是父类
        super.move(distanceInMeters);
    }
}
// 类的修饰符
// public : 不写修饰符的话就是public，没有任何限制
// private : 成员属性私有，子类和实例中都无法调用
// protected : 成员属性派生类都能用，实例？
// readonly : 让成员属性变为只读
class Shape {
    constructor(theName) {
        this.name = theName;
    }
    move(distanceInMeters) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}
//  类的简易写法：可以不用申明name成员变量
class Shape2 {
    // 这里 public name 等效你在成员变量里面申明了 public name:string
    constructor(name) {
        this.name = name;
        this.name = name;
    }
}
// 在子类中的表现
class Triangle extends Shape {
    constructor(theName) {
        super(theName);
    }
    move(distanceInMeters) {
        console.log(`${this.name}`);
    }
}
//* new Shape("三角").move(5);
let shape = new Shape("四角");
// shape.name = "123";
// 类中的存取器
class Employee {
    constructor(name) {
        this.name = name;
        this.name = name;
    }
    get fullName() {
        return "你好 " + this.name;
    }
    set fullName(val) {
        this.name = val;
    }
}
let employee = new Employee("yk");
employee.fullName = "hy";
console.log(employee.fullName);
/**************      *******************/
/**************  类型注解的小伙伴 2.1 类型推论       *******************/
// 共有的属性不会报错
function test(a) {
    // 共有的不会报错
    return a.toString();
    // 非共有的话就会报错
    //* return a.split(',')
}
let a;
a = "123";
console.log(a.split(""));
a = 3;
console.log(a.toString());
/**************       *******************/
