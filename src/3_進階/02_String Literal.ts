;(() => {
  /* 字串字面量 (String Literal) 型別用來約束取值只能是某幾個字串中的一個。 */
  type EventNames = 'click' | 'scroll' | 'mousemove'
  function handleEvent(ele: Element, event: EventNames) {
    return { ele, event }
  }
  handleEvent(document.getElementById('hello'), 'scroll') // O
  handleEvent(document.getElementById('world'), 'dbclick') // X
  // 注意，型別別名與字串字面量型別都是使用 type 進行定義。
})()
