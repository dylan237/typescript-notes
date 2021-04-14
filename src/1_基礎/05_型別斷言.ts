/* eslint-disable */

;(() => {

  // 以下範例因為 number 類型沒有 toString 方法，TS 會判斷為錯誤
  function getLength(something: string | number): number {
    if (something.length) { // X 
      return something.length // X
    }
    return something.toString().length
  }


  // 使用『 型別斷言 』避免上述錯誤
  function getLength2(something: string | number): number {
    if ((something as string).length) {
      return (<string>something).length
    }
    return something.toString().length
  }
  // 補充： <string>something 為 TS 泛型(Generic）的語法
})()
