/* eslint-disable */ 

/* 
  列舉（Enum）型別用於取值被限定在一定範圍內的場景，比如一週只能有七天，顏色限定為紅綠藍等。
  > TypeScript 的列舉型別的概念來源於 C# 
*/

(() => {
  /* 1. 基礎使用 */
  enum Days { Sun, Mon, Tue, Wed, Thu, Fri, Sat }
  // 列舉成員會被賦值為從 0 開始遞增的數字，同時也會對列舉值到列舉名進行反向對映
  console.log(Days.Sun === 0) // true
  console.log(Days.Mon === 1) // true
  console.log(Days.Tue === 2) // true
  console.log(Days.Sat === 6) // true
  console.log(Days[0] === 'Sun') // true
  console.log(Days[1] === 'Mon') // true
  console.log(Days[2] === 'Tue') // true
  console.log(Days[6] === 'Sat') // true
  // 他會被編譯為
  // var Days
  // ;(function (Days) {
  //     Days[Days["Sun"] = 0] = "Sun"
  //     Days[Days["Mon"] = 1] = "Mon"
  //     Days[Days["Tue"] = 2] = "Tue"
  //     Days[Days["Wed"] = 3] = "Wed"
  //     Days[Days["Thu"] = 4] = "Thu"
  //     Days[Days["Fri"] = 5] = "Fri"
  //     Days[Days["Sat"] = 6] = "Sat"
  // })(Days || (Days = {}))

  // 編譯結果執行後
  // {
  //   "0": "Sun",
  //   "1": "Mon",
  //   "2": "Tue",
  //   "3": "Wed",
  //   "4": "Thu",
  //   "5": "Fri",
  //   "6": "Sat",
  //   "Sun": 0,
  //   "Mon": 1,
  //   "Tue": 2,
  //   "Wed": 3,
  //   "Thu": 4,
  //   "Fri": 5,
  //   "Sat": 6
  // }

  /* 2. 手動賦值 */
  // 未手動賦值的列舉項會接著上一個列舉項遞增
  enum Days2 { Sun = 7, Mon = 1, Tue, Wed, Thu, Fri, Sat }

  console.log(Days2["Sun"] === 7) // true
  console.log(Days2["Mon"] === 1) // true
  console.log(Days2["Tue"] === 2) // true
  console.log(Days2["Sat"] === 6) // true

  // 手動賦值的列舉項也可以為小數或負數，此時後續未手動賦值的項的遞增步長仍為 1
  enum Days3 {Sun = 7, Mon = 1.5, Tue, Wed, Thu, Fri, Sat}

  console.log(Days3["Sun"] === 7) // true
  console.log(Days3["Mon"] === 1.5) // true
  console.log(Days3["Tue"] === 2.5) // true
  console.log(Days3["Sat"] === 6.5) // true

  // 如果未手動賦值的列舉項與手動賦值的重複了，TypeScript 是不會察覺到這一點的
  enum Days4 { Sun = 3, Mon = 1, Tue, Wed, Thu, Fri, Sat }

  console.log(Days4["Sun"] === 3) // true
  console.log(Days4["Wed"] === 3) // true
  console.log(Days4[3] === "Sun") // false
  console.log(Days4[3] === "Wed") // true

  /* 3. 非數字 */
  // 手動賦值的列舉項可以不是數字，此時需要使用型別斷言來讓 tsc 無視型別檢查 (編譯出的 js 仍然是可用的)
  enum Days5 { Sun = 7, Mon, Tue, Wed, Thu, Fri, Sat = <any>"S" }
  // 編譯結果
  // var Days5
  // ;(function (Days5) {
  //     Days5[Days5["Sun"] = 7] = "Sun"
  //     Days5[Days5["Mon"] = 8] = "Mon"
  //     Days5[Days5["Tue"] = 9] = "Tue"
  //     Days5[Days5["Wed"] = 10] = "Wed"
  //     Days5[Days5["Thu"] = 11] = "Thu"
  //     Days5[Days5["Fri"] = 12] = "Fri"
  //     Days5[Days5["Sat"] = "S"] = "Sat"
  // })(Days5 || (Days5 = {}))

  /* 4. 常數項和計算所得項 */
  // 列舉項有兩種型別：常數項（constant member）和計算所得項（computed member）
  // 前面舉的例子都是常數項，一個典型的計算所得項例子
  let blue = 'blue'
  enum Color { Red, Green, Blue = blue.length } // blue.length 就是一個計算所得項

  // 如果緊接在計算所得項後面的是未手動賦值的項，那麼它就會因為無法獲得初始值而報錯
  enum Color2 { Blue = blue.length, Red, Green }

  /* 5. 常數列舉 */
  // 常數列舉與普通列舉的區別是，它會在編譯階段被刪除，並且不能包含計算成員
  const enum Directions {
    Up,
    Down,
    Left,
    Right
  }

  let directions = [Directions.Up, Directions.Down, Directions.Left, Directions.Right]
  // 編譯結果
  // var directions = [0, 1, 2, 3];

  // 假如包含了計算成員，則會在編譯階段報錯
  const enum Color3 {Red, Green, Blue = "blue".length};
})()
