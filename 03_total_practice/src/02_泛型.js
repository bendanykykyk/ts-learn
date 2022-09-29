"use strict";
/**************   3 泛型       *******************/
// 3.1 泛型变量 T
function createSentence(arg) {
    return "我的长度是:" + arg.length;
}
console.log(createSentence([1, 2, 3]));
// 3.2 泛型类型
function genericIdentity(str) {
    console.log(str);
    return str;
}
// 这个就是泛型类型的注解
let generics1 = genericIdentity;
// 3.2.1 泛型字面量
let generics2 = genericIdentity;
let generics3 = genericIdentity;
// 3.3 泛型类
class GenericNumber {
    constructor() {
        this.list = [];
    }
    add(item) {
        this.list.push(item);
    }
    min() {
        // 最小值
        return this.list.sort()[0];
    }
}
let number = new GenericNumber();
number.add(4);
number.add(5);
number.add(3);
console.log(number.list);
console.log(number.min());
// 这里就约束传入的参数有length属性
function loggingIdentity(arg) {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
}
// keyof T T中所有key值的联合类型
function getProperty(obj, key) {
    return obj[key];
}
let obj5 = { a: 1, b: 2, c: 3 };
getProperty(obj5, "a");
class Animal2 {
    constructor() {
        this.numLegs = 2;
    }
}
// 这里的c 指代的是函数的构造器
function createInstance(c) {
    return new c();
}
