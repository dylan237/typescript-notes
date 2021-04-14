## 類別

雖然 JavaScript 中有類別的概念，但是可能大多數 JavaScript 程式設計師並不是非常熟悉類別，這裡對類別相關的概念做一個簡單的介紹。

  - 類別 (Class)：定義了一件事物的抽象特點，包含它的屬性和方法
  物件（Object）：類別的實例，透過 new 產生
  - 面向物件（OOP）的三大特性：封裝、繼承、多型
  封裝（Encapsulation）：將對資料的操作細節隱藏起來，只暴露對外的介面。外界呼叫端不需要（也不可能）知道細節，就能透過對外提供的介面來訪問該物件，同時也保證了外界無法任意更改物件內部的資料
  - 繼承（Inheritance）：子類別繼承父類別，子類別除了擁有父類別的所有特性外，還有一些更具體的特性
  - 多型（Polymorphism）：由繼承而產生了相關的不同的類別，對同一個方法可以有不同的響應。比如 Cat 和 Dog 都繼承自 Animal，但是分別實現了自己的 eat 方法。此時針對某一個實例，我們無需瞭解它是 Cat 還是 Dog，就可以直接呼叫 eat 方法，程式會自動判斷出來應該如何執行 eat
  - 存取器（getter & setter）：用以改變屬性的讀取和賦值行為
  - 修飾符（Modifiers）：修飾符是一些關鍵字，用於限定成員或型別的性質。比如 public 表示公有屬性或方法
  - 抽象類別（Abstract Class）：抽象類別是供其他類別繼承的基底類別，抽象類別不允許被實例化。抽象類別中的抽象方法必須在子類別中被實現
  - 介面（Interfaces）：不同類別之間公有的屬性或方法，可以抽象成一個介面。介面可以被類別實現（implements）。一個類別只能繼承自另一個類別，但是可以實現多個介面



## ES6 中類別的用法

下面我們先回顧一下 ES6 中類別的用法，更詳細的介紹可以參考 [ECMAScript 6 入門 - Class](https://es6.ruanyifeng.com/#docs/class)

### 屬性和方法

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  sayHi() {
    return `My name is ${this.name}`;
  }
}

let a = new Animal('Jack');
console.log(a.sayHi()); // My name is Jack
```

### 類別的繼承

使用 `extends` 關鍵字實現繼承，子類別中使用 `super` 關鍵字來呼叫父類別的建構函式和方法

```js
class Cat extends Animal {
  constructor(name) {
    super(name); // 呼叫父類別的 constructor(name)
    console.log(this.name);
  }
  sayHi() {
    return 'Meow, ' + super.sayHi(); // 呼叫父類別的 sayHi()
  }
}

let c = new Cat('Tom'); // Tom
console.log(c.sayHi()); // Meow, My name is Tom
```

### 存取器

使用 getter 和 setter 可以改變屬性的賦值和讀取行為

```js
class Animal {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return 'Jack';
  }
  set name(value) {
    console.log('setter: ' + value);
  }
}

let a = new Animal('Kitty'); // setter: Kitty
a.name = 'Tom'; // setter: Tom
console.log(a.name); // Jack
```

### 靜態方法

使用 `static` 修飾符修飾的方法稱為靜態方法，它們不需要實例化，而是直接透過類別來呼叫

```js
class Animal {
  static isAnimal(a) {
    return a instanceof Animal;
  }
}

let a = new Animal('Jack');
Animal.isAnimal(a); // true
a.isAnimal(a); // TypeError: a.isAnimal is not a function
```

## ES7 中類別的用法

ES7 中有一些關於類別的提案，TypeScript 也實現了它們，這裡做一個簡單的介紹。

### 實例屬性

```js
class Animal {
  name = 'Jack';

  constructor() {
    // ...
  }
}

let a = new Animal();
console.log(a.name); // Jack
```

### 靜態屬性

ES7 提案中，可以使用 static 定義一個靜態屬性

```js
class Animal {
  static num = 42;

  constructor() {
    // ...
  }
}

console.log(Animal.num); // 42
```

內容取自： https://willh.gitbook.io/typescript-tutorial/advanced/class