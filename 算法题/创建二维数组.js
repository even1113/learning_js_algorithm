function array(n) {
  // const res = new Array(n).fill(0).map(() => new Array(n).fill(0))
  const arr2 = new Array(10).fill(0).map((_, i) => new Array(10).fill(0).map((_, j) => i * 10 + j))
  return arr2
}

console.log(JSON.stringify(array(3)))