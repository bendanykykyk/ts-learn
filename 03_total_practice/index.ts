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
