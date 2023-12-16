let a = '123456789'
let b = '1232312321321'

function add(a, b) {
  let res = ''
  let len = Math.max(a.length, b.length)
  // 先补齐
  a = a.padStart(len, '0')
  b = b.padStart(len, '0')
  // 设置进位
  let carray  =0
  for (let i=len-1; i>=0; i--) {
    // 当前的sum值  = sum + 进位
    let n = +a[i] + +b[i] + carray
    // 求进位制
    carray = Math.floor(n/10)
    // 当前的res的值 = sum余10 + res （字符串往前加） 
    res = (n%10) + res
  }
  if (carray) {
    res = '1' + res
  }
  return res
}
console.log(add(a, b))

