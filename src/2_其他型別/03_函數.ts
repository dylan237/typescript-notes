/* eslint-disable  */

/* 在 JavaScript 中，有兩種常見的定義函式的方式——函式宣告（Function Declaration）和函式表示式（Function Expression） */

;(() => {

  /* 函式宣告 Function Declaration */
  function sum(x, y) {
    return x + y
  }

  /* 函式表示式 Function Expression */
  const sum2 = function (x, y) {
    return x + y
  }

  // 一個函式有輸入和輸出，要在 TypeScript 中對其進行約束，需要把輸入和輸出都考慮到，其中函式宣告的型別定義較簡單：
  function sum3(x: number, y: number): number {
    return x + y
  }

  // 注意，輸入多餘的（或者少於要求的）引數，是不被允許的：
  sum3(1, 2, 3) // X
  sum3(1) // X

  /* 二、函式表示式 */
  // 如果要我們現在寫一個對函式表示式（Function Expression）的定義，可能會寫成這樣
  const mySum2 = function (x: number, y: number): number {
    return x + y
  }
  // 這是可以透過編譯的，不過事實上，上面的程式碼只對等號右側的匿名函式進行了型別定義，而等號左邊的 mySum2，是透過賦值操作進行型別推論而推斷出來的。如果需要我們手動給 mySum2 新增型別，則應該是這樣：

  const mySum3: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y
  }
  // 注意不要混淆了 TypeScript 中的 => 和 ES6 中的 =>。
  // 在 TypeScript 的型別定義中，=> 用來表示函式的定義，左邊是輸入型別，需要用括號括起來，右邊是輸出型別。

  /* 三、用介面定義函式的形狀 */
  // 我們也可以使用介面的方式來定義一個函式需要符合的形狀
  interface SearchFunc {
    (source: string, subString: string): boolean
  }

  const mtSearch: SearchFunc = function (source: string, subString: string) {
    return source.search(subString) !== -1
  }

  /* 四、可選引數 */
  // 前面提到，輸入多餘的（或者少於要求的）引數，是不允許的。那麼如何定義可選的引數呢？
  // 與介面中的可選屬性類似，我們用 ? 表示可選的引數：

  function buildName(firstName: string, lastName?: string): string {
    if (lastName) {
      return `${firstName} ${lastName}`
    }
    return firstName
  }
  const tomcat = buildName('Tom', 'Cat')
  const tim = buildName('Tom')

  // 需要注意的是，可選引數必須接在必需引數後面。換句話說，可選引數後面不允許再出現必需引數了：
  function buildName2(lastName?: string, firstName: string): string {
    if (lastName) {
      return `${firstName} ${lastName}`
    }
    return firstName
  }

  /* 五、剩餘引數 */
  // ES6 中，可以使用 ...rest 的方式獲取函式中的剩餘引數（rest 引數）：
  function push(arr, ...items) {
    items.forEach((item) => {
      arr.push(item)
    })
  }

  var a = []
  push(a, 1, 2, 3)
  // 事實上，items 是一個數組。所以我們可以用陣列的型別來定義它：
  function push2(arr: any[], ...items: any[]) {
    items.forEach(function (item) {
      arr.push(item)
    })
  }

  var a = []
  push2(a, 1, 2, 3)

  /* 六、過載 overload */
  // 過載允許一個函式接受不同數量或型別的引數時，作出不同的處理。
  // 比如，我們需要實現一個函式 reverse，輸入數字 123 的時候，輸出反轉的數字 321，輸入字串 'hello' 的時候，輸出反轉的字串 'olleh'。

  function reverse(x: number | string): number | string {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''))
    }
    if (typeof x === 'string') {
      return x.split('').reverse().join('')
    }
  }

  // 然而這樣有一個缺點，就是不能夠精確的表達，輸入為數字的時候，輸出也應該為數字，輸入為字串的時候，輸出也應該為字串。

  // 這時，我們可以使用過載定義多個 reverse 的函式型別：
  function reverse2(x: number): number
  function reverse2(x: string): string
  function reverse2(x: string | number): string | number {
    if (typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''))
    }
    if (typeof x === 'string') {
      return x.split('').reverse().join('')
    }
  }
  // 上例中，我們重複定義了多次函式 reverse，前幾次都是函式定義，最後一次是函式實現。在編輯器的程式碼提示中，可以正確的看到前兩個提示。
  // 注意，TypeScript 會優先從最前面的函式定義開始匹配，所以多個函式定義如果有包含關係，需要優先把精確的定義寫在前面。
})()
