/* eslint-disable */
;(() => {
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
})()
