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
})()
