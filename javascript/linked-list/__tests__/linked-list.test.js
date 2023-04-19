'use strict';

const { LinkedList, Node } = require('../index');

test('Node class creates a node with the correct value and next pointer', () => {
  const node = new Node(1);
  expect(node.value).toBe(1);
  expect(node.next).toBe(null);
});

test('LinkedList class creates an empty linked list', () => {
  const linkedList = new LinkedList();
  expect(linkedList.head).toBe(null);
});

test('LinkedList insert method adds nodes to the head of the list', () => {
  const linkedList = new LinkedList();
  linkedList.insert(3);
  linkedList.insert(2);
  linkedList.insert(1);
  expect(linkedList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
});

test('LinkedList includes method returns true if a node with the given value exists', () => {
  const linkedList = new LinkedList();
  linkedList.insert(3);
  linkedList.insert(2);
  linkedList.insert(1);
  expect(linkedList.includes(2)).toBe(true);
});

test('LinkedList includes method returns false if a node with the given value does not exist', () => {
  const linkedList = new LinkedList();
  linkedList.insert(3);
  linkedList.insert(2);
  linkedList.insert(1);
  expect(linkedList.includes(4)).toBe(false);
});

test('LinkedList toString method returns a formatted string representing all the values in the linked list', () => {
  const linkedList = new LinkedList();
  linkedList.insert(3);
  linkedList.insert(2);
  linkedList.insert(1);
  expect(linkedList.toString()).toBe('{ 1 } -> { 2 } -> { 3 } -> NULL');
});

xdescribe('Linked List', () => {
  it('works', () => {
    expect(true).toBeTruthy();
  });
});
