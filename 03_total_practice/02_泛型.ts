/**************   3 泛型       *******************/

// 3.1 泛型变量 T
function createSentence<T>(arg: T[]): string {
  return "我的长度是:" + arg.length;
}
console.log(createSentence<number>([1, 2, 3]));

// 3.2 泛型类型

function genericIdentity<T>(str: T): T {
  console.log(str);
  return str;
}

// 这个就是泛型类型的注解
let generics1: <T>(str: T) => T = genericIdentity;

// 3.2.1 泛型字面量
let generics2: {<T>(str: T): T} = genericIdentity;

// 3.2.2 泛型接口(其实就是上面那个字面量形式抽离出来)
interface IGeneric<T> {
  <T>(str: T): T;
}

let generics3: IGeneric<number> = genericIdentity;

// 3.3 泛型类

class GenericNumber<T> {
  public list: T[] = [];
  add(item: T) {
    this.list.push(item);
  }
  min(): T {
    // 最小值
    return this.list.sort()[0];
  }
}

let number = new GenericNumber<number>();
number.add(4);
number.add(5);
number.add(3);

console.log(number.list);
console.log(number.min());

// 3.4 泛型的约束

interface Lengthwise {
  length: number;
}
// 这里就约束传入的参数有length属性
function loggingIdentity<T extends Lengthwise>(arg: T): T {
  console.log(arg.length); // Now we know it has a .length property, so no more error
  return arg;
}
// keyof T T中所有key值的联合类型
function getProperty<T, K extends keyof T>(obj: T, key: K) {
  return obj[key];
}
let obj5 = {a: 1, b: 2, c: 3};
getProperty(obj5, "a");

class Animal2 {
  numLegs: number = 2;
}
// 这里的c 指代的是函数的构造器
function createInstance<A extends Animal2>(c: new () => A): A {
  return new c();
}
