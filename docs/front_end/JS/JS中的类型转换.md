# js中的类型转换机制

- js有6种简单数据类型以及引用类型object
- 在声明时，只有一种数据结构，只有在执行的时候，才知道他是什么类型
- 例如：`let a = y ? 1 : "a"`,在编译阶段无法获取他的类型，只有执行的时候，才确定其类型
- 但是运算符会的运算对数据类型时是有要求的，如果运算子的类型与预期不符合，就会触发类型转换机制
- 主要有显示和隐式类型转换机制

## 显示转换

### Number()

- 将任意类型的值转化为数值

- | 原始值    | 转换后的结果                                                 |
  | --------- | ------------------------------------------------------------ |
  | undefined | NaN                                                          |
  | null      | 0                                                            |
  | true      | 1                                                            |
  | false     | 0                                                            |
  | String    | 根据语法和转化规则转换，不一定,如果一个字符不能转换，则会全部转化为NaN，可以的话，就转换为对应的数值,空字符串则为0 |
  | Symbol    | Throw a TypeError exception                                  |
  | Object    | 先调用toPrimitive(),再调用toNumber()                         |

  - ```js
    Number(321); // 321
    
    Number(undefined); // NaN
    Number(null);
    
    // 布尔值
    Number(true); // 1
    Number(false); // 0
    
    // 字符串
    Number("321"); // 321
    Number("321a"); // NaN
    Number(""); // 0
    
    // Symbol
    let a = Symbol(1);
    Number(a); // Uncaught TypeError: Cannot convert a Symbol value to a number
    
    // object -> 通常转换成NaN(除了只包含单个数值或者空数组的数组)
    Number({a: 1}) // NaN
    Number([1, 2, 3]) // NaN
    Number([5]) // 5
    NUmber([]) // 0
    ```
    

### parseInt()

- 与Number()类似，也是将类型转化为数值

- 如果参数不是一个字符串，则将其转换为字符串，调用的是toString()方法

- 第一个非空格字符不能转换为数字

- `parseInt`相比`Number`，就没那么严格了，`parseInt`函数逐个解析字符，遇到不能转换的字符就停下来

- ```js
  parseInt("321a2"); // 321
  ```

### String()

- 将任意类型的值转化为字符串

- | 原始值    | 转换结果                             |
  | --------- | ------------------------------------ |
  | undefined | "undefined"                          |
  | boolean   | "true" / "false"                     |
  | string    | 对应的字符串                         |
  | number    | string                               |
  | symbol    | 对应的Symbol()                       |
  | object    | 先调用toPrimitive(),再调用toNumber() |
  | null      | "null"                               |

- ```js
  // undefined
  String(null); // "null"
  
  // boolean
  String(true); // "true"
  String(false); // "false"
  
  // 字符串
  String("a"); // "a"
  
  // number
  String(123); // "123"
  
  // symbol
  String(Symbol(1)); //  "Symbol(2)"
  
  // object
  String({a: 1}); // '[object Object]'
  
  // null
  String(null); // "null"
  ```

### Boolean()

- 可以将任意类型的值转为布尔值

- | 数据类型  | 转化为true      | 转化为false |
  | --------- | --------------- | ----------- |
  | string    | 非空字符串      | “”(空字符)  |
  | number    | 非0（包括无穷） | 0,NaN       |
  | object    | 任意对象        | null        |
  | undefined | N/A（不存在）   | undefined   |

- ```js
  // string
  Boolean("aaa"); // true
  Boolean(""); // false
  
  // number
  Boolean(111); // true
  Boolean(0); // false
  Boolean(NaN); // false
  
  // object
  Boolean({a: 1}); // true
  Boolean({}); // true
  Boolean([]); // true
  Boolean(new Boolean(false)); // true -> 是个对象
  
  // undefined
  Boolean(undefined); // false
  ```

## 隐式转换

- 主要有两个场景
  - 比较运算（`==`、`!=`、`>`、`<`）、`if`、`while`需要布尔值地方
  - 算术运算（`+`、`-`、`*`、`/`、`%`）

### 自动转换为布尔值

- 在需要布尔值的地方，就会将非布尔值的参数自动转为布尔值，系统内部会调用`Boolean()`函数
- 所以，也就是说，除了`false`,`+0, -0, 0`,`null`, `undefined`,`NaN`以及空字符串`""`会被转为`false`，其他的都会被转为`true`

### 自动转换为字符串

- 遇到预期为字符串的地方，就会将非字符串的值自动转为字符串

- 具体规则是：先将复合类型的值转为原始类型的值，再将原始类型的值转为字符串

- 常发生在`+`运算中，一旦存在字符串，则会进行字符串拼接操作

- ```js
  "5" + 1 ; // "51"
  
  "5" + true; // "5true"
  
  "5" + {}; // "5 [object Object]"
  
  "5" + []; // "5"
  
  "5" + function(){}; // "5function(){}"
  
  5 + undefined; // "5undefined"
  
  5 + null; // "5null"
  ```

### 自动转换为数值

- 除了`+`有可能转换为字符串，其他的符号都是转化为数值

- ```js
  "5" - "2"; // 3
  
  "5" * "2"; // 10
  
  true - 1; // 0
  false - 1; // -1
  
  "5" * []; // 0
  
  false / "2"; // 0
  
  "abc" - "1"; // NaN
  
  null + 1; // 1
  
  undefined + 1; // NaN
  ```

