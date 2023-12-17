function * fi() {
  let [prev, cur] = [0, 1]
  console.log(cur)
  while (true) {
    [prev, cur] = [cur, prev + cur]
    yield(cur)
  }
}

for (let item of fi()) {
  if(item > 50) break
  console.log(item)
}
console.log()