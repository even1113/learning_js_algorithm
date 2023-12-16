class EventBus {
  constructor() {
    this._even = {}
  }
  on(type, cb) {
    if (!this._even[type]) {
      this._even[type] = []
    }
    this._even[type].push(cb)
  }
  emit(type, ...args) {
    const func = this._even[type]
    if (!func) return
    for (let i=0; i<func.length; i++) {
      func[i].apply(this, args)
    }
  }
  off(type, cb) {
    const func = this._even[type]
    if (!func) return
    for (let i=0; i<func.length; i++) {
      if(func[i] === cb) {
        func.splice(i, 1)
      }
    }
    
  }
}

const bus = new EventBus()
cb = function() {
  console.log('a')
  console.log(this)
}
bus.on('1', cb)
console.log(bus)

const args = [1,2,3]
bus.emit('1', ...args)
console.log(bus)

bus.off('1', cb)
console.log(bus)