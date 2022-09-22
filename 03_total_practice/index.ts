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

/**************   1.2.4 类的注解   *******************/

/**************   1.2.5 抽象类的注解   *******************/
abstract class Fruits {
  constructor(private name: string) {
    this.name = name;
  }

  abstract changeColor(color: string): void;
}
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
