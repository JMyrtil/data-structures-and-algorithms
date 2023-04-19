'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  includes(value) {
    let current = this.head;
    while (current) {
      if (current.value === value) {
        return true;
      }
      current = current.next;
    }
    return false;
  }

  toString() {
    let current = this.head;
    let str = '';
    while (current) {
      str += `{ ${current.value} } -> `;
      current = current.next;
    }
    str += 'NULL';
    return str;
  }
  append(value) {
    const newNode = new Node(value);
    let current = this.head;
    if (!current) {
      this.head = newNode;
      return;
    }
    while (current.next) {
      current = current.next;
    }
    current.next = newNode;
  }

  insertBefore(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    let prev = null;
    while (current) {
      if (current.value === value) {
        if (!prev) {
          newNode.next = this.head;
          this.head = newNode;
        } else {
          prev.next = newNode;
          newNode.next = current;
        }
        return;
      }
      prev = current;
      current = current.next;
    }
  }

  insertAfter(value, newValue) {
    const newNode = new Node(newValue);
    let current = this.head;
    while (current) {
      if (current.value === value) {
        newNode.next = current.next;
        current.next = newNode;
        return;
      }
      current = current.next;
    }
    throw new Error(`Value ${value} not found in list.`);
  }

  kthFromEnd(k) {
    if (k < 0) {
      throw new Error('input cannot be negative');
    }

    let length = 0;
    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }

    if (k >= length) {
      throw new Error('input is greater than or equal to the length of the list');
    }

    let position = length - k - 1;
    current = this.head;
    for (let i = 0; i < position; i++) {
      current = current.next;
    }

    return current.value;
  }

  zipLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    let newList = new LinkedList();

    while (current1 || current2) {
      if (current1) {
        newList.append(current1.value);
        current1 = current1.next;
      }
      if (current2) {
        newList.append(current2.value);
        current2 = current2.next;
      }
    }
    return newList;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  push(value) {
    const newNode = new Node(value);
    newNode.next = this.top;
    this.top = newNode;
  }

  pop() {
    if (!this.top) {
      throw new Error('Stack is empty');
    }
    const value = this.top.value;
    this.top = this.top.next;
    return value;
  }

  peek() {
    if (!this.top) {
      throw new Error('Stack is empty');
    }
    return this.top.value;
  }

  isEmpty() {
    return !this.top;
  }
}

class Queue {
  constructor() {
    this.front = null;
    this.back = null;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (!this.front) {
      this.front = newNode;
      this.back = newNode;
    } else {
      this.back.next = newNode;
      this.back = newNode;
    }
  }

  dequeue() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }
    const value = this.front.value;
    this.front = this.front.next;
    if (!this.front) {
      this.back = null;
    }
    return value;
  }

  peek() {
    if (!this.front) {
      throw new Error('Queue is empty');
    }
    return this.front.value;
  }

  isEmpty() {
    return !this.front;
  }
}

class PseudoQueue {
  constructor() {
    this.inStack = new Stack();
    this.outStack = new Stack();
  }

  enqueue(value) {
    this.inStack.push(value);
  }

  dequeue() {
    if (this.outStack.isEmpty()) {
      while (!this.inStack.isEmpty()) {
        this.outStack.push(this.inStack.pop());
      }
    }
    if (this.outStack.isEmpty()) {
      throw new Error('PseudoQueue is empty');
    }
    return this.outStack.pop();
  }
}

module.exports = { LinkedList, Node, Queue, Stack, PseudoQueue };
