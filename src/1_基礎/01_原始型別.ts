/* eslint-disable  */
(() => {
  
    /* ===== 數字 ===== */
  const num: number = 0

  /* ===== 布林 ===== */
  const boo: boolean = true

  /* ===== 字串 ===== */
  const str: string = ''

  /* ===== 空值 ===== */
  // JavaScript 沒有空值（Void）的概念，在 TypeScript 中，可以用 void 表示沒有任何返回值的函式：
  function popAlert(): void {
    console.log(123)
  }
  // 宣告一個 void 型別的變數沒有什麼用，因為你只能將它賦值為 undefined 和 null：
  const empty: void = undefined

  /* ===== Null 和 Undefined ===== */
  // 在 TypeScript 中，可以使用 null 和 undefined 來定義這兩個原始資料型別
  const u: undefined = undefined
  const n: null = null
  // 與 void 的區別是，undefined 和 null 是所有型別的子型別。也就是說 undefined 型別的變數，可以賦值給 number 型別的變數：
  // OK
  const num3: number = undefined
  // OK
  let u2: undefined
  const num4: number = u2
  // 而 void 型別的變數不能賦值給 number 型別的變數：
  let u3: void
  // const num5: number = u3 // 報錯

})()
