// 1. TSはどのような型を推論するか
let a = 1042 // number
let b = 'apples and oranges' // string
const c = 'pineapples' // typeof 'pineapples'
let d = [true, true, false] // boolean[]
let e = {type: 'ficus'} // {type: string}
let f = [1, false] // [number, boolean] ではなく (number | boolean)[]
const g = [3] // [number] ではなく number[]
let h = null // null ではなく any（let を使うことで，ベースの型へと拡大される．6.1.4 型の拡大を参照）
