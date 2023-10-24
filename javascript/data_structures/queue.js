/*
Queue / Coada este o structura de date de tip FIFO = first in first out
se realizeaza cu un array si metodele push si shift
*/

class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  isEmpty() {
    return this.queue.length === 0;
  }

  clear() {
    this.queue.length = 0;
  }

  size() {
    return this.queue.length;
  }
}

// Exemplu de utilizare
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);

console.log(queue.front()); // Output: 10

console.log(queue.dequeue()); // Output: 10

console.log(queue.size()); // Output: 2

console.log(queue.isEmpty()); // Output: false

queue.clear();

console.log(queue.isEmpty()); // Output: true
