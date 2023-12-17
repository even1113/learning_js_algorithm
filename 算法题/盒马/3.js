/*
3、CSS颜色转换
#0000FF => rgb(0, 0, 255)
#A37 => rgb(170, 51, 119)
#huahs => invalid
*/

function solve(str) {
  if (isNaN(str[1]) && str[1] === str[1].toLowerCase()) {
    return 'invalid'
  }

  str = str.slice(1)
  if (str.length === 3) {
    str = str.split('').map(char => char + char).join('')
  }
  
  const r = parseInt(str.slice(0, 2), 16)
  const g = parseInt(str.slice(2, 4), 16)
  const b = parseInt(str.slice(4, 6), 16)

  return `rgb(${r}, ${g}, ${b})`
}

// 示例用法
console.log(solve('#0000FF')); // 输出：rgb(0, 0, 255)
console.log(solve('#A37')); // 输出：rgb(170, 51, 119)
console.log(solve('#huahs')); // 输出：invalid
