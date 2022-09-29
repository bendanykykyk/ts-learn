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
/*
 * @Author: [yuuki]
 * @Date: 2022-09-27 10:00:53
 * @LastEditors: [you name]
 * @LastEditTime: 2022-09-28 15:52:33
 * @Description:
 */
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
// 元组 Tuple
let x = ["1", 2];
// x[2] = 3; //直接赋值 no no no
// x.push(3); // 这里可以push 值，注意
// x.push(boolean); // 报错，因为越界后的类型必须是一开始申明的类型 string和number
// 元组 可选的元素类型
let list;
list = [0, "1"];
list = [0];
let list3 = ["1", 2, 3, 4];
let list4 = [1, "2", "3", "4"];
let person = {
    id: 123,
    name: "yk",
    wifeName: "meinv",
    wifeAge: 18, // 任意值 任意类型
};
let mySearch = (sourceA, str) => {
    return sourceA.search(str) > -1;
};
let obj2 = {
    0: 1,
    1: 2,
    2: 3,
};
obj2[2];
class Game {
    constructor(name = "hah") {
        this.name = name;
        this.name = name;
    }
}
class Mario extends Game {
    // author: string;
    constructor(author) {
        super();
        this.author = author;
        this.author = author;
    }
}
class Door {
    lightOn() {
        console.log("我亮了");
    }
    lightOff() {
        console.log("我暗了");
    }
    alert() {
        console.log("我响了");
    }
}
class SecurityDoor extends Door {
}
let myDoor = new SecurityDoor();
myDoor.alert();
class Clock {
    constructor(currentTime) {
        this.currentTime = currentTime;
    }
    // 应用1：假设我们现在需要验证静态的属性或者函数
    static getTime() { }
}
function createClock(c, date) {
    return new c(date);
}
let myObj = {};
myObj.name = "1";
let clock = createClock(Clock, new Date()); // 注意一下这里，如果静态部分需要检查，例如constructor 可以传入这个构造函数到 函数中，并且写一个interface 描述constructor
console.log(clock);
function getNumber(num1, num2) {
    let counter = function (start) { };
    counter.number = 4;
    return counter;
}
// const getNumber: Counter = (num1: number, num2: number) => {
//   return num1 + num2;
// };
// 接口继承类
class HumanRun {
    constructor(name) {
        this.name = name;
    }
    run() {
        console.log("我可以跑");
    }
}
class LikeSportsHuman {
    constructor(name) {
        this.name = name;
    }
    run() {
        throw new Error("Method not implemented.");
    }
}
/**************      *******************/
/**************   1.2.2 数组的注解   *******************/
let arr = [1, 2, 3];
let numberArr = [1, 2, 3]; // 方式一
let numberArr2 = [1, 2, 3, 4]; // 注解方式二
let numberArr3 = [2, 3, 4, 5];
// 补充：如何写一个只读的数组？
let readonlyArr = [1, 2, 3, 4];
//*  readonlyArr[2] = 5 不能修改
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
//* console.log(employee.fullName);
// 类的静态属性修饰符 static
class Grid {
    constructor(scale) {
        this.scale = scale;
    }
    calculateDistanceFromOrigin(point) {
        let xDist = point.x - Grid.origin.x;
        let yDist = point.y - Grid.origin.y;
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    }
}
Grid.origin = { x: 0, y: 0 };
let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale
/**************      *******************/
/**************   1.2.5 抽象类的注解   *******************/
class Department {
    constructor(name) {
        this.name = name;
    }
    printName() {
        console.log("Department name: " + this.name);
    }
}
class AccountingDepartment extends Department {
    constructor() {
        super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
    }
    printMeeting() {
        console.log("The Accounting Department meets each Monday at 10am.");
    }
    generateReports() {
        console.log("Generating accounting reports...");
    }
}
let department; // 允许创建一个对抽象类型的引用
// department = new Department(); // 错误: 不能创建一个抽象类的实例
department = new AccountingDepartment(); // 允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
//* department.generateReports(); // 错误: 方法在声明的抽象类中不存在(因为有Department这个类型注释约束)
// 高级技巧
// 1.interface可以继承类
class Point {
    // x: number;
    // y: number;
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
}
let point3d = { x: 1, y: 1, z: 2 };
// 2.类可以作为 类型
let point2d = { x: 1, y: 1 };
// 3.类可以作为 构造函数
console.log(typeof Point == "function");
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
