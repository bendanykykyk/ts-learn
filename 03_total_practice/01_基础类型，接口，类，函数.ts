/*
 * @Author: [yuuki]
 * @Date: 2022-09-27 10:00:53
 * @LastEditors: [you name]
 * @LastEditTime: 2022-09-27 10:00:54
 * @Description:
 */
/************** 类型注解 1.1原始数据类型 *******************/
//  布尔值
let isDone: boolean = false;
// 数字
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
// 字符串
let Bob: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}.

I'll be ${age + 1} years old next month.`;

// any 不确定变量的类型
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false;
// any 给不到提示
interface Obj {
  name: string;
  age: number;
}
let obj: Obj = {name: "yk", age: 18};
// console.log(obj.) 出对应的提示

// void 表示没有任何类型 跟any相对
function warnUser(): void {
  console.log("This is my warning message");
}

// null和undefined 是所有类型的子类型
//*  let u: undefined = 3; // （虽然undefined是number的子类型，本身不会报错，但是tsconfig配置会有问题）
let u = undefined; // 观察类型 u的类型其实是any

// never 表示执行不完，肯定有错
function error(message: string) {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
/**************           *******************/

/**************    1.2 非原始数据类型       *******************/
// Object 对象
// declare function create(o: object): void;
// create({name: "0"});
//* create(null);
//* create(3);
//* create("string");
//* create(true);
//* create(undefined);

/**************        *******************/

/**************   1.2.1 interface初识    *******************/
interface Person {
  name: string;
  // 只读
  readonly id: number;
  // 可选
  age?: number;
  // 任意值以及任意类型
  [propName: string]: any;
}
let person: Person = {
  id: 123,
  name: "yk",
  wifeName: "meinv", // 任意值 任意类型
  wifeAge: 18, // 任意值 任意类型
};
//* person.id = 1234;

// 使用interface注解函数类型
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc = (sourceA: string, str: string) => {
  return sourceA.search(str) > -1;
};

// 使用interface注解可索引的类型接口
interface NumberArr {
  [index: number]: number;
}

let obj2: NumberArr = {
  0: 1,
  1: 2,
  2: 3,
};
obj2[2];

class Game {
  constructor(public name: string = "hah") {
    this.name = name;
  }
}

class Mario extends Game {
  // author: string;
  constructor(public author: string) {
    super();
    this.author = author;
  }
}
// 错误：使用数值型的字符串索引，有时会得到完全不同的Animal!
// interface NotOkay {
//   // 这里的string和number叫签名；这里为什么父类的签名肯定是string，子类的是number，因为父类的范围明显更大，而子类的number会转化为string，number范围更小，一一对应；
//   [x: string]: Game;
//   [x: number]: Mario;
// }

// let playList: NotOkay = {
//   0: new Mario("heihei"),
//   1: new Mario("heihei2"),
//   2: new Game("wuhu"),
// };

// 索引和propName

interface Friend {
  [index: string]: string;
  age: string;
  [propName: number]: string;
}

// 类类型

interface Alarm {
  alert(): void;
}

interface Light {
  lightOn(): void;
  lightOff(): void;
}

class Door implements Alarm, Light {
  lightOn(): void {
    console.log("我亮了");
  }
  lightOff(): void {
    console.log("我暗了");
  }
  alert(): void {
    console.log("我响了");
  }
}

class SecurityDoor extends Door {}

let myDoor = new SecurityDoor();
myDoor.alert();

// 类的静态部分与实例部分的区别(静态部分是不能参与检查的，比如constructor；注意这里的静态部分和修饰符中的static概念不一样)

interface ClockInterface {
  currentTime: Date;
}
interface ClockConstructor {
  new (date: Date): any;
  getTime(): void;
  // 应用1：之前学过 这个其实就是混合类型(函数类型+对象类型)
}

class Clock implements ClockInterface {
  currentTime: Date;
  constructor(currentTime: Date) {
    this.currentTime = currentTime;
  }
  // 应用1：假设我们现在需要验证静态的属性或者函数
  static getTime() {}
}

function createClock(c: ClockConstructor, date: Date): ClockConstructor {
  return new c(date);
}

// interface可以继承interface

interface Stone {
  smash(): void;
}

interface Paper {
  flutter(): void;
}

interface LikeStonePaper extends Paper, Stone {
  name: string;
}

let myObj = <LikeStonePaper>{};
myObj.name = "1";

let clock = createClock(Clock, new Date()); // 注意一下这里，如果静态部分需要检查，例如constructor 可以传入这个构造函数到 函数中，并且写一个interface 描述constructor
console.log(clock);

// 混合类型：在函数类型的interface上增加了属性的生命

interface Counter {
  (start: number): string;
  number: number;
}
function getNumber(num1: number, num2: number): Counter {
  let counter = <Counter>function (start: number) {};
  counter.number = 4;
  return counter;
}
// const getNumber: Counter = (num1: number, num2: number) => {
//   return num1 + num2;
// };

// 接口继承类
class HumanRun {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run() {
    console.log("我可以跑");
  }
}
interface sports extends HumanRun {}

class LikeSportsHuman implements sports {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  run(): void {
    throw new Error("Method not implemented.");
  }
}

/**************      *******************/

/**************   1.2.2 数组的注解   *******************/
let arr = [1, 2, 3];
let numberArr: number[] = [1, 2, 3]; // 方式一
let numberArr2: Array<number> = [1, 2, 3, 4]; // 注解方式二

// 注解方式三
interface List {
  [index: number]: number;
}
let numberArr3: List = [2, 3, 4, 5];

// 补充：如何写一个只读的数组？
let readonlyArr: ReadonlyArray<number> = [1, 2, 3, 4];
//*  readonlyArr[2] = 5 不能修改

/**************      *******************/

/**************   1.2.3 函数的注解   *******************/
// 方式一: 函数方式
function foo(x: number, y: string) {
  console.log(x, y);
}
// 方式二: 表达式方式
type Foo = (x: number, y: string) => void;
const foo2: Foo = function (x, y) {
  return x + y;
};

// 函数参数可选/默认参数/rest参数
function bar(name: string = "yk", age?: number, ...restArgs: string[]): void {}

// 拓展：函数参数解构后的注解 可选 默认值 以及剩余参数

function deconstruct(
  {
    name,
    age,
    ...restArgs
  }: {name: string; age?: number; restArgs?: string[]} = {name: "yk"}
): void {}

//  拓展: 函数内部的 this
interface Card {
  suit: string;
  card: number;
}
interface Deck {
  suits: string[];
  cards: number[];
  createCardPicker(this: Deck): () => Card;
}
let deck = {
  suits: ["hearts", "spades", "clubs", "diamonds"],
  cards: Array(52),
  //   这里的this 如果不给Deck类型，并且设置了     "noImplicitThis": false,   可以指定this为参数，并且给this注解类型的方式，来注解this 解决this模糊问题
  createCardPicker: function (this: Deck) {
    return () => {
      let pickedCard = Math.floor(Math.random() * 52);
      let pickedSuit = Math.floor(pickedCard / 13);

      return {suit: this.suits[pickedSuit], card: pickedCard % 13};
    };
  },
};

// 拓展 : 函数的重载 - 其实就是为了表述的更加清楚，上面两个就叫做重载，最后一个代表真实的实现
function reverseWords(words: string): string;
function reverseWords(words: number): number;
function reverseWords(words: string | number): string | number {
  if (typeof words == "string") {
    return words.split("").reverse().join("");
  } else {
    return Number(words.toString().split("").reverse().join(""));
  }
}

/**************      *******************/

/**************   1.2.4 类的注解   *******************/
// 类的注解
// 父类，基类
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
// 子类继承后的注解
// 子类，派生类
class Snake extends Animal {
  constructor(name: string) {
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
  public readonly name: string;
  public constructor(theName: string) {
    this.name = theName;
  }
  protected move(distanceInMeters: number) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

//  类的简易写法：可以不用申明name成员变量
class Shape2 {
  // 这里 public name 等效你在成员变量里面申明了 public name:string
  public constructor(public name: string) {
    this.name = name;
  }
}
// 在子类中的表现
class Triangle extends Shape {
  public constructor(theName: string) {
    super(theName);
  }
  public move(distanceInMeters: number) {
    console.log(`${this.name}`);
  }
}
//* new Shape("三角").move(5);
let shape = new Shape("四角");
// shape.name = "123";

// 类中的存取器
class Employee {
  constructor(private name: string) {
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
  static origin = {x: 0, y: 0};
  calculateDistanceFromOrigin(point: {x: number; y: number}) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}

let grid1 = new Grid(1.0); // 1x scale
let grid2 = new Grid(5.0); // 5x scale

/**************      *******************/

/**************   1.2.5 抽象类的注解   *******************/
abstract class Department {
  constructor(public name: string) {}

  printName(): void {
    console.log("Department name: " + this.name);
  }

  abstract printMeeting(): void; // 必须在派生类中实现
}

class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 在派生类的构造函数中必须调用 super()
  }

  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}

let department: Department; // 允许创建一个对抽象类型的引用
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
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }
}

interface Point3d extends Point {
  z: number;
}

let point3d: Point3d = {x: 1, y: 1, z: 2};

// 2.类可以作为 类型
let point2d: Point = {x: 1, y: 1};

// 3.类可以作为 构造函数
console.log(typeof Point == "function");

/**************      *******************/

/**************  类型注解的小伙伴 2.1 类型推论       *******************/

// 共有的属性不会报错
function test(a: number | string) {
  // 共有的不会报错
  return a.toString();
  // 非共有的话就会报错
  //* return a.split(',')
}
// 在赋值(个人感觉是被调用的时候)的时候，确认类型
type strOrNumber = string | number;
let a: strOrNumber;
a = "123";
console.log(a.split(""));
a = 3;
console.log(a.toString());

/**************       *******************/
