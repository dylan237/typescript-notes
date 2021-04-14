/* eslint-disable  */

/* 內建物件與interface */
/* 
  JavaScript 中有很多內建物件，它們可以直接在 TypeScript 中當做定義好了的型別。
  內建物件是指根據標準在全域性作用域（Global）上存在的物件。這裡的標準是指 ECMAScript 和其他環境（比如 DOM）的標準。

  更多的內建物件，可以檢視 MDN 的文件。
  而他們的定義檔案，則在 TypeScript 核心函式庫的定義檔案中。

  [MDN] Standard built-in objects：
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects
  TypeScript 核心函式庫的定義檔案 interface of build-in objects：
    https://github.com/Microsoft/TypeScript/tree/master/src/lib
*/

;(() => {
  const b: Boolean = new Boolean(1)
  const e: Error = new Error('Error occurred')
  const d: Date = new Date()
  const r: RegExp = /[a-z]/

  let body: HTMLElement = document.body;
  const allDiv: NodeList = document.querySelectorAll('div')
  document.addEventListener('click', function (e: MouseEvent) {
    // Do something
  })

  // 額外補充
  const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
  const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");


  /* 
    PS. 用 TypeScript 寫 Node.js
    Node.js 不是內建物件的一部分，如果想用 TypeScript 寫 Node.js，則需要引入第三方宣告檔案： 
      npm install @types/node --save-dev
  */
  })()
