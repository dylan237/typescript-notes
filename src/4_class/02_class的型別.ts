;(() => {
  // 給類別加上 TypeScript 的型別很簡單，與 interface 類似
  class Animal {
    name: string

    constructor(name: string) {
      this.name = name
    }

    sayHi(): string {
      return `My name is ${this.name}`
    }
  }

  const a: Animal = new Animal('Jack')
  console.log(a.sayHi())
})()
