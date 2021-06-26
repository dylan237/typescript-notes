/* eslint-disable  */

;(() => {
  /* 
    範例 1. 
      需求：
      定義一個 IBaseCRUD interface，用來定義一個 Class 的基本屬性，此類型含有 data 陣列、add 方法、find 方法，data 用來儲存資料，並且該陣列內的成員的型別(interface)不可寫死，並可以重複調用 IBaseCRUD 透過傳入不同的 interface 來規範 data 屬性的成員，產生各種具有 CRUD 功能的 Class。
  */

  // 限制類別成員的介面。為了讓 IBaseCRUD 可以復用，透過泛型來動態指定資料的型態
  interface IBaseCRUD<T> {
    data: Array<T>
    add: (member: T) => T
    find: (id: number) => T
  }

  // 定義一個 User 資料庫的 interface，用來傳入 IBaseCRUD，限制 data 成員類型
  class User {
    public id?: number
    public name: string
    public age: number
    public constructor(name: string, age: number) {
      this.name = name
      this.age = age
    }
  }

  // 實現 Users 類，用來儲存使用者資訊，並且可以新增和查詢使用者
  class Users implements IBaseCRUD<User> {
    public data: Array<User>

    public constructor(data: Array<User> = []) {
      this.data = data
    }

    public add(member: User): User {
      member.id = new Date().getTime() + Math.random()
      this.data.push(member)
      return member
    }

    public find(id: number): User {
      return this.data.find(member => member.id === id)
    }
  }
  const users: Users  = new Users()
  users.add(new User('Dylan', 27))
  users.add(new User('Cindy', 27))
  console.log('users---', users)

  // 重複使用 IBaseCRUD
  class Book {
    public id?: number
    public name: string
    public constructor(name: string) {
      this.name = name
    }
  }

  // 實現一個圖書館類，並且和 Users 一樣具有 data，且同時有新增和查詢功能。
  class Library implements IBaseCRUD<Book>{
    public data: Array<Book> = []

    public constructor(data: Array<Book> = []) {
      this.data = data
    }

    public add(book: Book): Book {
      book.id = new Date().getTime() + Math.random()
      this.data.push(book)
      return book
    }

    public find(id: number): Book {
      return this.data.find(book => book.id === id)
    }
  }

  const library = new Library()
  library.add(new Book('小王子'))
  library.add(new Book('老人與海'))
  console.log('library---', library)

  /* 範例 2. factory design pattern */
  interface IPokemon {
    id: string
    defense: number
    attack: number
  }
  interface IBaseRecord {
    readonly id: string 
  }
  interface IDatabase<T extends IBaseRecord> {
    get(id: string): T | undefined
    set(newData: T): void
  }
  function createDB<T extends IBaseRecord>() {
    class InMemoryDB implements IDatabase<T> {
      private db: Record<string, T> = {}
      public get(id: string): T | undefined {
        return this.db[id]
      }
      public set(newData: T): void {
        this.db[newData.id] = newData
      }
    }
    return InMemoryDB
  }

  const PokemonDB = createDB<IPokemon>()
  const pokemonDB = new PokemonDB()
  pokemonDB.set({
    id: 'Pikachu',
    attack: 100,
    defense: 100
  })
  console.log('pokemonDB---', pokemonDB);
  console.log('get---',pokemonDB.get('Pikachu'))
})()
