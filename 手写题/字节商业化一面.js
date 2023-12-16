const { watch, reactive } = require("vue")

function showName() {
  console.log('123')
}
showName()
function showName() {
  console.log('456')
}
showName()
// ===================
let obj = '1'
{
  console.log(obj)
  let obj = '2'
}
// ===================
function ref(value) {
  // Reactive 包裹，然后.value返回就好了
  let obj = reactive(value)
  obj.value = value
  return obj
  // ???对吗
}

a.value = 1
a.value = 2 

watch(()=>a.value, (val) => console.log(val))
const z = {a:{b:{
  c: 1
}}}
// watch 可以监听到 z.a.b.c吗， 加上deep就能监听到了吗

const n = {a:{b:1}}
// watch 可以监听到 a 吗， 加上deep就能监听到了吗

// watch 的还有一个常用属性，除了deep，immediate
// ====================

// vue compostion API 用过哪些 toRefs，watch，reactive，ref



// "((2+3) + (4+5)) + 2"
// 解析成 "2+3" "4+5" "(2+3)+(4+5)"