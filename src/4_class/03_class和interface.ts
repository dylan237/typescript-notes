/* eslint-disable */
/* 
  介面（Interfaces）可以用於對「物件的形狀（Shape）」進行描述。
  這一章主要介紹介面的另一個用途，對類別的一部分行為進行抽象 
*/
;(() => {

  /* implements */
  //  實現（implements）是面向物件中的一個重要概念。一般來講，一個類別只能繼承自另一個類別，有時候不同類別之間可以有一些共有的特性，這時候就可以把特性提取成介面（interfaces），用 implements 關鍵字來實現。這個特性大大提高了面向物件的靈活性。
  // 舉例來說，門是一個類別，防盜門是門的子類別。如果防盜門有一個報警器的功能，我們可以簡單的給防盜門新增一個報警方法。這時候如果有另一個類別，車，也有報警器的功能，就可以考慮把報警器提取出來，作為一個介面，防盜門和車都去實現它
  /* interface in class */
  interface IPerson {
    name: string
    walk(a: number): void
  }
  interface IBoss {
    paySalary()
  }

  class Person implements IPerson, IBoss {
    name: string

    constructor(name) {
      this.name = name
    }

    walk(a: number): void {
      console.log(`${this.name} walks ${a} miles every day!`)
    }

    paySalary(): void {
      console.log(`${this.name} pay salary to employees every month.`)
    }
  }

  const dylan = new Person('dylan')
  dylan.walk(9527)

  // interface 繼承
  interface Ihusband extends IPerson, IBoss {
    doHousework()
  }

  /* class 的多態 */
  // 多態： 父類的引用指向子類型的物件，不同類的物件針對相同的方法，產生不同的行為
  class Animal {
    distance: number

    constructor(distance: number = 0) {
      this.distance = distance
    }

    run() {
      console.log(`跑了 ${this.distance} km`)
    }
  }

  class Pig extends Animal {
    distance: number

    constructor(distance: number = 10) {
      super(distance)
    }

    run() {
      console.log(`跑了 ${this.distance} km`)
    }
  }

  class Dog extends Animal {
    distance: number

    constructor(distance: number = 100) {
      super(distance)
    }

    run() {
      console.log(`跑了 ${this.distance} km`)
    }
  }

  const animal: Animal = new Animal()
  animal.run()
  const pig: Pig = new Pig()
  pig.run()
  const dog: Dog = new Dog()
  dog.run()

  // Pig 和 Dog 和 animal 的型態都是一樣的，都有 distance 和 run 方法，不同的是 distance 不一樣，run 執行的結果也不一樣，這時候是允許引用父類 Animal 作為型態映射，此情況稱為多態
  const pig2: Animal = new Pig()
  pig2.run()
  const dog2: Animal = new Dog()
  dog2.run()


  /* class 修飾符 */
  // 總共有三種修飾符: public(預設) private protected readonly
  class Animal {
    public name: string

    public foots: number

    readonly test: number

    public constructor(name: string, foots: number, test: number = 1) {
      this.name = name
      this.foots = foots
      this.test = test // 雖是 readonly，但初始化時可以被 assign
    }

    private myFootsPrivate() {
      console.log(this.foots)
    }

    protected myFootsProtected() {
      console.log(this.foots)
    }

    plus() {
      this.test += 1 // readonly 無法修改
    }
  }

  const pig = new Animal('pepe', 4)
  pig.myFootsPrivate() // 報錯，私有成員只可以在 Animal 中調用
  pig.myFootsProtected() // 報錯，私有成員只可以在 Animal 或 Animal 的子類中調用
  pig.test = 2 // readonly 無法修改

  class WildAnimal extends Animal {
    myFoot() {
      super.myFootsPrivate() // 報錯，子類也不可調用
      super.myFootsProtected() // ok，子類可調用
    }
  }

  // 簡寫，在參數錢加上修飾符，該類會自動添加對應的屬性(效果和上面是一樣的)
  class Animal2 {
    public constructor(public name: string, public foots: number, readonly test: number = 1) {}
  }
  
  /* 混合型別 */
  // 有時候，一個函式還可以有自己的屬性和方法
  interface Counter {
    (start: number): string;
    interval: number;
    reset(): void;
    aaa: string
  }

  function getCounter(): Counter {
    let counter = <Counter>function (start: number) { };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
  }

  const c = getCounter();
  c(10);
  c.reset();
  c.interval = 321;
})()
