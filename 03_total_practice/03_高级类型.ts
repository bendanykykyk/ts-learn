function extend<T, U>(first: T, second: U): T & U {
  //   // 为了说明result里一定有hasOwnProperty
  //   interface hasOwnProperty {
  //     hasOwnProperty: any;
  //   }
  let result = <T & U>{};

  for (let id in first) {
    (<any>result)[id] = (<any>first)[id];
  }
  for (let id in second) {
    if (!result?.hasOwnProperty(id)) {
      (<any>result)[id] = (<any>second)[id];
    }
  }
  return result;
}
class Person {
  constructor(public name: string) {}
}
interface Loggable {
  log(): void;
}
class ConsoleLogger implements Loggable {
  log() {
    // ...
  }
}

var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();

// 联合类型
type unionNumStr = string | number;
