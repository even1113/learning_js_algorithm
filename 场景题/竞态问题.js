// show your code
/**
 * 四行代码，当 a 请求发送成功但还没返回值的时候，又发送了 b 请求，此时 b 请求把全局变量更改了tag b，
 * 当 a 请求返回response的时候 发现currentTag（闭包变量）为 a 但lastTag全局变量变为了b，于是就直接返回了。
 */

let lastTag = ''
const fetchListData(tag: 'a' | 'b') = async () => {
  const currentTag = tag
  lastTag = currentTag

  const response = await getList(tag)


  // 注意 return 需要放在response 后面执行
  if (currentTag !== lastTag) {
    return 
  }
}

const list = () => {
  // 需要保证这个组件接收到的 list 是正确的哦~
  <ListComp list={list} />
}

