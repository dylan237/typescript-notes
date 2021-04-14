/* eslint-disable */

/* 聯合型別 */

;(() => {

  /* 一、例子 */

  // 聯合型別（Union Types）表示取值可以為多種型別中的一種。
  let myFavoriteNum: number | string
  myFavoriteNum = 10
  myFavoriteNum = 'ten'
  myFavoriteNum = true // 報錯

  /* 二、訪問聯合型別的屬性或方法 */

  // 當 TypeScript 不確定一個聯合型別的變數到底是哪個型別的時候，我們只能訪問此聯合型別的所有型別裡共有的屬性或方法：
  function getLength(something: string | number): number {
    return something.length // 報錯
  }
  // 上例中，length 不是 string 和 number 的共有屬性，所以會報錯。

  // 訪問 string 和 number 的共有屬性是沒問題的：
  function getString(something: string | number): string {
    return something.toString()
  }

  // 聯合型別的變數在被賦值的時候，會根據型別推論的規則推斷出一個型別：
  let myFavoriteNumber: string | number
  // myFavoriteNumber 被推斷成了 string，訪問它的 length 屬性不會報錯。
  myFavoriteNumber = 'seven'
  console.log(myFavoriteNumber.length) // 5

  // myFavoriteNumber 被推斷成了 number，訪問它的 length 屬性時就報錯了。
  myFavoriteNumber = 7
  console.log(myFavoriteNumber.length) // 編譯時報錯
})()
