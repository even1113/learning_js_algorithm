var a = 0
var b = 0
var c = 0

function fn(a) {
  console.log(a++, c)
  function fn2(b) {
    console.log(a, b, c)
  }
  var c = 4
  fn = fn2
} 
fn(1) // 0, undefined  => 1 undefined
fn(2) // 1, 0, 4  => 2 2 4


