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
}

module.exports = { LinkedList, Node };
