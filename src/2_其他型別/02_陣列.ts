/* eslint-disable */

/* 陣列的型別 */
// 在 TypeScript 中，陣列型別有多種定義方式，比較靈活。

;(() => {
  
  /* 一、「型別 + 方括號」表示法 */
  var arr: number[] = [1, 2, 3, 4, 5]

  // 陣列的項中不允許出現其他的型別
  var arr: number[] = [1, 2, 3, 4, '5'] // 報錯

  /* 二、陣列泛型 */
  // 我們也可以使用陣列泛型（Array Generic） Array<elemType> 來表示陣列
  const arr3: Array<number> = [1, 1, 2, 3, 5]

  /* 三、用介面表示陣列 */
  interface NumberArray {
    [index: number]: number
  }
  // NumberArray 表示：只要索引的型別是數字時，那麼值的型別必須是數字。
  // 雖然介面也可以用來描述陣列，但是我們一般不會這麼做，因為這種方式比前兩種方式複雜多了。
  // 不過有一種情況例外，那就是它常用來表示類別陣列。

  /* 四、類別陣列 */
  // 類陣列（Array-like Object）不是陣列型別，比如 arguments：
  function sum() {
    const args: number[] = arguments
  }
  // 上例中，arguments 實際上是一個類陣列，不能用普通的陣列的方式來描述，而應該用介面：
  function sum2() {
    const args: {
      [index: number]: any
      length: number
      callee: Function
    } = arguments
  }

  // 在這個例子中，我們除了約束當索引的型別是數字時，值的型別必須是數字之外，也約束了它還有 length 和 callee 兩個屬性。

  // 事實上常用的類別陣列都有自己的介面定義，如 IArguments, NodeList, HTMLCollection 等：
  function sum3() {
    const args: IArguments = arguments
  }

  // 其中 IArguments 是 TypeScript 中定義好了的型別，它實際上就是：
  interface IArguments {
    [index: number]: any
    length: number
    callee: Function
  }

  /* any 在陣列中的應用 */
  // 一個比較常見的做法是，用 any 表示陣列中允許出現任意型別：
  const list: any[] = ['Dylan', 25, {}]
})()
