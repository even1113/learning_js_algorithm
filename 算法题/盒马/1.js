var arr = [1, 2, 3, 1, 2, 3, 4, 3, 3, 5, 3,4,4,4,44,4,4]

function solve(arr) {
  let res = 0, tmp = -Infinity
  let mp = new Map()

  for(let i=0; i<arr.length; i++) {
    if (!mp.has(arr[i])) {
      mp.set(arr[i], 1)
    } else {
      let count = mp.get(arr[i]) + 1
      if (count > tmp) {
        res = arr[i]
        tmp = count
      }
      mp.set(arr[i], count)
    }
  }
  let index = arr.indexOf(res)
  return [res, index, tmp]
}
console.log(solve(arr))