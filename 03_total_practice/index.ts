/************** 1.1原始数据类型 *******************/
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
declare function create(o: object): void;
create({name: "0"});
//* create(null);
//* create(3);
//* create("string");
//* create(true);
//* create(undefined);

/**************           *******************/
