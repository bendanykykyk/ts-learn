"use strict";
function extend(first, second) {
    //   // 为了说明result里一定有hasOwnProperty
    //   interface hasOwnProperty {
    //     hasOwnProperty: any;
    //   }
    let result = {};
    for (let id in first) {
        result[id] = first[id];
    }
    for (let id in second) {
        if (!(result === null || result === void 0 ? void 0 : result.hasOwnProperty(id))) {
            result[id] = second[id];
        }
    }
    return result;
}
class Person {
    constructor(name) {
        this.name = name;
    }
}
class ConsoleLogger {
    log() {
        // ...
    }
}
var jim = extend(new Person("Jim"), new ConsoleLogger());
var n = jim.name;
jim.log();
