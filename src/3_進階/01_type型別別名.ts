;(() => {
  /* 型別別名用來給一個型別起個新名字。 */
  type Name = string
  type NameResolver = () => string
  type NameOrResolver = Name | NameResolver
  function getName(n: NameOrResolver): Name {
    if (typeof n === 'string') return n
    return n()
  }
})()
