/* eslint-disable */
;(() => {
  /* 混合型別 */
  // 有時候，一個函式還可以有自己的屬性和方法
  interface Counter {
    (start: number): string
    interval: number
    reset(): void
    aaa: string
  }

  function getCounter(): Counter {
    const counter = <Counter>function (start: number) {}
    counter.interval = 123
    counter.reset = function () {}
    return counter
  }

  const c = getCounter()
  c(10)
  c.reset()
  c.interval = 321
})()
