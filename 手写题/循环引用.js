const a = {
  b: {
    c:{
      d:{

      }
    }
  }
}
a.b.c.d = a

function isCycle(obj) {
  const hasLoop = (target, src) => {
    let tmp = src.slice().concat([target])
    for (const key in target) {

      if (typeof target[key] === 'object') {
        // 如果在缓存数组中找到了 || 在递归查抄过程中找到了 返回true
        if(tmp.indexOf(target[key]) > -1 || hasLoop(target[key], tmp)) {
          return true
        }
      }
    }
    return false
  }
  return typeof obj === 'object' ? hasLoop(obj, []) : false
}

console.log(isCycle(a)) 