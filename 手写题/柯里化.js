function curry(fn) {
  const curryFn = (...args) => {
    if (args.length >= fn.length) {
      console.log('---', args)
      return fn(...args)
    }

    // 返回箭头函数 继续接受新的参数
    return (...newArgs) => {
      console.log('++', args, newArgs)
      // 递归调用curryFn将参数拼接在一起
      return curryFn(...args, ...newArgs)
    }
  }
  return curryFn
}

// test
const join = (a, b, c) => {
  return `${a}_${b}_${c}`
}

const curriedJoin = curry(join)


console.log(curriedJoin(1, 2, 3)) // '1_2_3'

console.log(curriedJoin(1)(2, 3)) // '1_2_3'

console.log(curriedJoin(1, 2)(3)) // '1_2_3'