/* eslint-disable  */

/* 
  泛型（Generics）是指在定義「函式」、「介面」、「類別」的時候，不預先指定具體的型別，而在「調用」的時候再指定型別的一種特性
*/
;(() => {
  // 情境： 現在需要實現一個函數 createArray，傳入兩個參數，分別為 value 和 length，輸出結果是一個長度為 length 且成員皆為 value 的陣列 (value 需為 number 類型)。
  function createArray (length: number, value: number): number[] {
    const result: number[] = []
    for (let i = 0; i < length; i++) {
      result[i] = value
    }
    return result
  }
  // 如果現在需求更改了，value 須為 string 類型，那可以怎麼做？ 
  //  1. 可以使用 number | string 限制 value 類型   >> 如果又有其他類型需求，需要再更改
  //  2. 多定義另一個函數, 將 value 類型改為 string   >> 重複邏輯
  //  3. 將類型限制改為 any                         >> 非必要不建議使用 any

  /* 使用泛型優化程式碼 */
  // 在函式名後添加了 <T>，其中 T 用來指代任意輸入的型別，在後面的輸入 value: T 和輸出 Array<T> 中即可使用了
  function createArrayGenerics<T>(length: number, value: T): Array<T> {
    const result: T[] = []
    for (let i = 0; i < length; i++) {
      result[i] = value
    }
    return result
  }

  // 在呼叫函數時可以動態指定類型，使函數更加彈性
  createArrayGenerics<string>(3, 'x')   // ['x', 'x', 'x']
  createArrayGenerics<number>(3, 1)     // [1, 1, 1]
  createArrayGenerics<boolean>(3, true) // [true, true, true]

  // 不指定型別，TS 也會自動透過型別推論斷定型別
  createArrayGenerics(3, 'x') 

  /* 多個行別引數 */
  function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]]
  }
  swap([7, 'seven']) // ['seven', 7]
})()
