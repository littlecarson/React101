## 现代化的前端开发

前端开发中，随着需求的复杂化，工程也变得发杂化了。因此，技术变得规范化、工程化、自动化。

### 拥抱变化

#### 语言的规范化 ———— ES6

1. 跟进**块级作用域** ———— `let`、`const`

```
// let 声明的变量属于块级作用域，不提升
if (true) {
  console.log(a); // error
  let a = 'a';
}
console.log(a); // error

// const 声明的变量值不可更改
const PI = 3.141215926;
PI = 3;   // "CONSTANT is read-only"
const CFG = {url: '/about'}
CFG.url = '/index';
```

2. 函数语法糖 ———— 箭头函数和参数

```
// 箭头函数简化匿名函数输写
let aa = (a, b) => a + b;  // () => expression or { pass }

// 箭头函数会绑定块级作用域中的this
let kitty = {
  age : 1,
  grow : function() {
    setTimeout(() => {
      console.log(this.age);
    }, 100);
  }
};

// 函数的默认参数
function desc(name='Carl', age=19) {
  console.log(name, age);
}

// Rest 参数 : 参数数组，arguments 不是真正的数组
function foo(...args) {
  console.log(args)
}
foo(1, 2, 3); // [1, 2, 3]

// Rest 参数必须放在最后
function bar(name, ...args) {
  // ...
}

```

3. 展开操作符
```
// 方便于函数调用
function test(x, y, z) {...};
var args = [1,2,3];
test(...args);

// 数组字面量
var a = [1, 2, 3];
var b = [3, 4, 5];
var result = [...a, ...b];

// es7 提案中已有关于对象展开运算符的日程，通过 babel 已经可以实现

```

4. 模版字符串
```
// 插入变量
var name = "Carl"
var foo = `my name is ${name}`;

// 多行字符串
var bar = `First line,
  second line,
  third line`;

```

5. 解构赋值 -- 结构相同，值对应
```
// 解构数组
let foo = ['one', 'two', 'three'];
let [one, two, three] = foo;

// 解构对象
let person = {name: 'viking', age: 20};
let {name, age} = person;
console.log(`${name}, ${age}`);   // viking, 20
```

6. 类语法糖

```
class Person{
  constructor (name, age) {
    this.name = name;
    this.age = age;
  }
  say () {
    return 'My Name is ${name}, age is ${age}';
  }
  // static method
  static foo() {
    return 'Here is a static method';
  }
}

class teacher extends Person {
  constructor(name, age=2, color='red') {
    // 只有在构造方法中才可以调用 super() 方法
    super(name, age);
    this.color = color;
  }
  say() {
    // 非构造方法中可以这样调用 父类方法 super.method_name()
    return super.say() + `, color is ${this.color}`;
  }
}
const sir = new Teach('Carl'); // My Name is Carl, age is 2, color is red
```

7. 模块化
```
// hey.js file
function foo {...}
// 导出
export hey;

// main.js 导入
import {foo} from './hey.js'
foo();

// 默认导出 default
// hello.js
export default function () {
  ...
}
// main.js
import whoami from './main.js';
whiami();

```
