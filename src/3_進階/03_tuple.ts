/* eslint-disable  */

/* 數組(陣列)合並了相同型別的物件，而元組（Tuple）合併了不同型別的物件。
元組起源於函式程式語言（如 F#），這些語言中會頻繁使用元組。 */
;(() => {
  // 定義一對值分別為 string 和 number 的元組：
  const tom: [string, number] = ['Tom', 25]

  // 當賦值或訪問一個已知索引的元素時，會得到正確的型別：
  let tom2: [string, number]
  tom2[0] = 'Tom2'
  tom2[1] = 25

  tom2[0].slice(1)
  tom2[1].toFixed(2)

  // 也可以只賦值其中一項：
  let tom3: [string, number]
  tom3[0] = 'tom3'

  // 但是當直接對元組型別的變數進行『初始化』或者『賦值』的時候，需要提供所有元組型別中指定的項。
  let tom4: [string, number]
  tom4 = ['tom4']

  // 無法為不存在的 index 賦值
  let tom5: [string]
  tom5[1] = 'tom5'

  // 越界的元素
  // 當新增越界的元素時，它的型別會被限制為元組中每個型別的聯合型別
  const tom6: [string, number] = ['tom6', 18]
  tom6.push('tom again') // O
  tom6.push(19) // O
  tom6.push(true) // X，Argument of type 'boolean' is not assignable to parameter of type 'string | number'.
})()
