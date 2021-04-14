/* eslint-disable */

/* 
  TypeScript 可以使用三種訪問修飾符（Access Modifiers）
    - public：
      修飾的屬性或方法是公有的，可以在任何地方被訪問到，預設所有的屬性和方法都是 public 的
    - private：
      修飾的屬性或方法是私有的，不能在該類別的外部訪問
    - protected：
      修飾的屬性或方法是受保護的，它和 private 類似，區別是它在子類別中允許被訪問
  另外還有兩種分別是
    - readonly 
      只讀屬性關鍵字，只允許出現在屬性宣告或索引簽名中
    - abstract
      用於定義抽象類別和其中的抽象方法
*/
;(() => {

  /* 1. public */
  
  class Animal {
    public name

    public constructor(name) {
      this.name = name
    }
  }

  const a = new Animal('Jack')
  console.log(a.name) // Jack
  a.name = 'Tom'
  console.log(a.name) // Tom

  /* 2. private、protected */

  class Animal2 {
    private name

    public constructor(name) {
      this.name = name
    }
  }

  let b = new Animal2('Jack')
  console.log(b.name) // X
  b.name = 'Tom' // X
  // 補充： TypeScript 編譯之後的程式碼中，並沒有限制 private 屬性在外部的可及性

  // 使用 private 修飾的屬性或方法，在子類別中也是不允許訪問的
  class Animal3 {
    private name;
    public constructor(name) {
      this.name = name;
    }
  }

  class Cat extends Animal3 {
    constructor(name) {
      super(name);
      console.log(this.name); // X
    }
  }

  // 而如果是用 protected 修飾，則允許在子類別中訪問
  class Animal4 {
    protected name;
    public constructor(name) {
      this.name = name;
    }
  }

  class Cat2 extends Animal4 {
    constructor(name) {
      super(name);
      console.log(this.name); // O
    }
  }

  // 當建構函式修飾為 private 時，該類別不允許被繼承或者實例化
  class Animal5 {
    public name;
    private constructor (name) {
      this.name = name;
  }
  }
  class Cat3 extends Animal5 { // X 不可被繼承
    constructor (name) {
      super(name);
    }
  }
  let c = new Animal5('Jack'); // X 不可實例化

  // 當建構函式修飾為 protected 時，該類別只允許被繼承
  class Animal6 {
    public name;
    protected constructor (name) {
      this.name = name;
    }
  }
  class Cat4 extends Animal6 { // O 可以被繼承
    constructor (name) {
      super(name);
    }
  }

  let d = new Animal6('Jack'); // X 不可實例化

  // 修飾符還可以使用在建構函式引數中，等同於類別中定義該屬性，使程式碼更簡潔
  class A {
    // public name: string;
    public constructor (public name: string) {
      this.name = name;
    }
  }

  /* 3. readonly */

  // 只允許出現在屬性宣告或索引簽名中
  class Animal7 {
    readonly name;
    public constructor(name) {
      this.name = name;
    }
  }

  let e = new Animal7('Jack');
  console.log(a.name); // Jack
  e.name = 'Tom'; // X readonly 屬性不可賦值

  // 如果 readonly 和其他訪問修飾符同時存在的話，需要寫在其後面
  class B {
    // public readonly name;
    public constructor(public readonly name) {
      this.name = name;
    }
  }

  /* 4. abstract */

  // 抽象類別是不允許被實例化的
  abstract class Animal8 {
    public name;
    public constructor(name) {
      this.name = name;
    }
    public abstract sayHi();
  }

  let f = new Animal8('Jack'); // X 不可被實例化

  // 抽象類別中的抽象方法必須被子類別實現
  abstract class Animal9 {
    public name;
    public constructor(name) {
      this.name = name;
    }
    public abstract sayHi();
  }

  class Cat5 extends Animal9 { // X Cat5 必須有 sayHi 方法
    public eat() {
      console.log(`${this.name} is eating.`);
    }
  }
  let g = new Cat5('Tom');

  // 補充： 即使是抽象方法，TypeScript 的編譯結果中，仍然會存在這個類別，上面的程式碼的編譯結果是
})()