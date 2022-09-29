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
