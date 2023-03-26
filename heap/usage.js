var PriorityQueue = require('priorityqueuejs');

var queue = new PriorityQueue(function (a, b) {
  return a.cash - b.cash;
});

queue.enq({ cash: 250, name: 'Valentina' });
queue.enq({ cash: 300, name: 'Jano' });
queue.enq({ cash: 150, name: 'Fran' });
queue.size(); // 3
queue.peek(); // { cash: 300, name: 'Jano' }
queue.deq(); // { cash: 300, name: 'Jano' }
queue.size(); // 2

console.log(queue.size());

// enq() 메서드 : 값을 넣는다.
// size() 메서드 : 우선 순위 큐의 사이즈
// deq() 메서드 : 원소를 꺼낸다.
// peek() 메서드 : 다음 꺼낼 원소
