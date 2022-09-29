// 这里的jquery是根据tsconfig配置的来的，我们指定了./目录下的types下的文件夹作为模块
import {jQuery, GreetingSettings, myLib, Animal, greet} from "jquery";

console.log(jQuery);
console.log(jQuery("#box"));
// greet("3");

function getWidget(str: string) {
  return [str];
}
// let items: string[] = getWidget("all of them");
// let item: number = getWidget(2);

// interface GreetingSettings {
//   greeting: string;
//   duration?: number;
//   color?: string;
// }

let greetingSettings: GreetingSettings = {
  greeting: "hello",
};

// 带属性的对象
let result = myLib.api;

let animal = new Animal("青蛙");
console.log(animal.attack);

greet("2");
