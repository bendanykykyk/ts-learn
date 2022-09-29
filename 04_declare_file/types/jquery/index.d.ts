declare let jQuery: (params: string) => void;

declare function greet(greeting: string): void;

// 函数的重载
declare function getWidget(n: number): number;
declare function getWidget(s: string): string[];

interface GreetingSettings {
  greeting: string;
  duration?: number;
  color?: string;
}

declare function createGreetingSettings(setting: GreetingSettings): void;

// 带属性的对象
declare namespace myLib {
  let api: (params) => void;
}

declare class Animal {
  name: string;
  attack(): void;
  constructor(name: string) {
    this.name = name;
  }
}
// 可重用类型(类型别名)
type GreetingLike = string | (() => string);

declare function greet(g: GreetingLike): void;

export {jQuery, GreetingSettings, myLib, Animal, greet};
