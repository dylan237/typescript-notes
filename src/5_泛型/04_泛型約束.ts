/* eslint-disable */

/* 泛型約束 */

;(() => {
  // 在函式內部使用泛型變數的時候，由於事先不知道它是哪種型別，所以不能隨意的操作它的屬性或方法
  function loggingIdentity<T>(arg: T): T {
    console.log(arg.length) // X
    return arg
  }
  
  // 對泛型進行約束，只允許這個函式傳入那些包含 length 屬性的變數
  interface Lengthwise {
    length: number
  }
  function loggingIdentity2<T extends Lengthwise>(arg: T): T {
    console.log(arg.length)
    return arg
  }

  // 多個引數之間相互約束
  function copyFields<T extends U, U>(target: T, source: U): T {
    for (const id in source) {
      target[id] = (<T>source)[id]
    }
    return target
  }

  const target = { a: 1, b: 2, c: 3, d: 4 }
  const source = { a: 10, b: 20 }
  copyFields(target, source)
})()
