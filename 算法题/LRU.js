class Node {
  constructor(key = 0, value = 0) {
      this.key = key;
      this.value = value;
      this.prev = null;
      this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
      this.capacity = capacity;
      this.dummy = new Node(); // 哨兵节点
      this.dummy.prev = this.dummy;
      this.dummy.next = this.dummy;
      this.keyToNode = new Map();
  }

  getNode(key) {
      if (!this.keyToNode.has(key)) { // 没有这本书
          return null;
      }
      const node = this.keyToNode.get(key); // 有这本书
      this.remove(node); // 把这本书抽出来
      this.pushFront(node); // 放在最上面
      return node;
  }

  get(key) {
      const node = this.getNode(key);
      return node ? node.value : -1;
  }

  put(key, value) {
      let node = this.getNode(key);
      if (node) { // 有这本书
          node.value = value; // 更新 value
          return;
      }
      node = new Node(key, value) // 新书
      this.keyToNode.set(key, node);
      this.pushFront(node); // 放在最上面
      if (this.keyToNode.size > this.capacity) { // 书太多了
          const backNode = this.dummy.prev;
          this.keyToNode.delete(backNode.key);
          this.remove(backNode); // 去掉最后一本书
      }
  }

  // 删除一个节点（抽出一本书）
  remove(x) {
      x.prev.next = x.next;
      x.next.prev = x.prev;
  }

  // 在链表头添加一个节点（把一本书放在最上面）
  pushFront(x) {
      x.prev = this.dummy;
      x.next = this.dummy.next;
      x.prev.next = x;
      x.next.prev = x;
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