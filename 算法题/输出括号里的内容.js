const str = '((2+3)+(4+5))+2'
// 输出 ["2+3", "4+5", "(2+3)+(4+5)"]

function sovle(str) {
  const stack = [], res = []
  
  for (let i=0; i<str.length; i++) {
    if (str[i] === '(') {
      stack.push(i)
    } else if (str[i] === ')') {
      let index = stack.pop()
      res.push(str.slice(index+1, i))
    }
  }
  return res
}

console.log(sovle(str))