let obj = {
  name: 'zyw',
  fn: function name(){
    console.log('111')
    console.log(this)
  }
}
let str = '123'

let newFn = obj.fn.bind(str)
newFn()