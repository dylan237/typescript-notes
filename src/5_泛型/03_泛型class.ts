/* eslint-disable */

/* 與泛型介面類似，泛型也可以用於類別的型別定義中 */
;(() => {
  class GenericNumber<T> {
    defaultValue: T
    add: (x: T, t: T) => T
  }

  const G: GenericNumber<number> = new GenericNumber<number>()
  G.defaultValue = 1
  G.add = function(x, y) {
    return x + y
  }
})()
