const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

function curry(fn) {
  return function curryFn(...args) {
    if (args.length >= fn.length) {
      // console.log(args)
      return fn(...args)
    } else {
      // 通过反复创建新的箭头函数，去接收新的参数
      return (...newArgs) => {
        return curryFn(...args, ...newArgs)
      }
    }
  }
}

const curriedJoin = curry(join)


console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'