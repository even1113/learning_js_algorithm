/*
4、运用你所掌握的数据结构，设计和实现一个  LRU (最近最少使用) 缓存机制 。
实现 LRUCache 类：
LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
示例：
var lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
lRUCache.get(1);    // 返回 1
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
lRUCache.get(1);    // 返回 -1 (未找到)
lRUCache.get(3);    // 返回 3
lRUCache.get(4);    // 返回 4
*/
class ListNode {
  constructor(key, value) {
    this.key = key
    this.value = value
    this.prev = null
    this.next = null
  }
}
class LRUCache {
  constructor(capacity) {
    this.capacity = capacity
    this.caches = new Map()
    this.dummy = new ListNode()
    this.dummy.prev = this.dummy
    this.dummy.next = this.dummy
  }

  getNode(key) {
    if (!this.caches.has(key)) {
      return null
    }
    const node = this.caches.get(key)
    this.deleteNode(node)
    this.removeToHead(node)
    return node
  }

  removeToHead(node) {
    node.prev = this.dummy
    node.next = this.dummy.next
    node.prev.next = node
    node.next.prev = node
  }
  
  deleteNode(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
    node.prev = null
    node.next = null
  }
  get(key) {
    const node = this.getNode(key)
    return node === null ? -1 : node.value
  }
  put(key, value) {
    let node = this.getNode(key)
    if (node !== null) {
      node.value = value
      return // 记得return
    } 
    const newNode = new ListNode(key, value)
    this.caches.set(key, newNode)
    this.removeToHead(newNode)
    if (this.caches.size > this.capacity) {
      // this.dummy.prev  不能使用 this.dummy.next

      // 哨兵的prev指针一开始是指向第一个插入的节点的
      // 随着头插法的不断插入，第一个节点变成了最后一个节点，一直被this.dummy.head所指向
      // 所以 backNode 其实就是 this.dummy.prev 指向的
      const backNode = this.dummy.prev
      this.deleteNode(backNode)
      this.caches.delete(backNode.key)
    }
  }
}



var lRUCache = new LRUCache(2);
lRUCache.put(1, 1); // 缓存是 {1=1}
console.log(lRUCache)
lRUCache.put(2, 2); // 缓存是 {1=1, 2=2}
console.log(lRUCache)
console.log(lRUCache.get(1))
lRUCache.put(3, 3); // 该操作会使得关键字 2 作废，缓存是 {1=1, 3=3}
console.log(lRUCache)
lRUCache.get(2);    // 返回 -1 (未找到)
lRUCache.put(4, 4); // 该操作会使得关键字 1 作废，缓存是 {4=4, 3=3}
console.log(lRUCache)
console.log(lRUCache.get(1))
console.log(lRUCache.get(3))
console.log(lRUCache.get(4))