/* eslint-disable  */
/* 型別推論 */

;(() => {

  // 如果沒有明確的指定型別，那麼 TypeScript 會依照型別推論（Type Inference）的規則推斷出一個型別。

  /* 一、什麼是型別推論 */
  // 以下程式碼雖然沒有指定型別，但是會在編譯的時候報錯：
  let num = 'seven'
  num = 7 // 報錯

  // 事實上，它等價於：
  let num2: string = 'seven'
  num2 = 7 // 報錯

  // TypeScript 會在沒有明確的指定型別的時候推測出一個型別，這就是型別推論。

  // 如果定義的時候沒有賦值，不管之後有沒有賦值，都會被推斷成 any 型別而完全不被型別檢查(如第二章所提及的例子)：
  let num2
  num2 = 'seven'
  num2 = 4
})()
