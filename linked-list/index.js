class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// var first = new Node('hi');
// first.next = new Node('there');

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    //새로운 노드를 생성한다.
    let newNode = new Node(val);
    // 노드가 아무것도 없다면?!
    if (this.head == null) {
      this.head = newNode;
      this.tail = newNode;
      // 다음 노드가 있다면
    } else {
      // 현재 tail화살표의 next프로퍼티를 새로 push한 노드로 바꿔주고
      this.tail.next = newNode;
      // 화살표를 새로운 노드로 업데이트 해준다.
      this.tail = newNode;
    }

    this.length++;
    return this;
  }
}

const list = new SinglyLinkedList();
list.push(10);
list.push(46);
list.push(55);
// list.push(77);

console.log(list);
console.log(list.head.next);
