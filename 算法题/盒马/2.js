/*
2、金额格式化
1000000 => 1,000,000
10.24 => 10.24
*/
function solve(str) {
  let [prev, after] = str.split('.')
  let len = prev.length
  if (prev.length < 3) {
    return str
  } else {
    let remain = prev % 3
    let tmp = prev.slice(remain, len).match(/\d{3}/g).join(',')
    if (remain !== 0) {
      prev = prev.slice(0, remain) + ',' + tmp
    } else {
      prev = tmp
    }
  }
  if (after) {
    prev = prev + '.' + after
  }
  return prev
}

// console.log(solve('1000000'))
console.log(solve('1000000.24'))
