### 笔记部分(难点记录)
1.类型注解是什么？
答：就比如说 let age: number = 18 这个 就叫类型注解；包括基本数据类型(NNUSB S)以及非基本数据类型（Object）

2.类型推论是什么？
答：当你没有明确这个类型的时候，ts会帮助你做类型的推导。

3.interface如何定义任意key任意value
interface Person {
  name: string;
  // 只读
  readonly id: number;
  // 可选
  age?: number;
  // 任意值以及任意类型
  [propName: string]: any;
}
