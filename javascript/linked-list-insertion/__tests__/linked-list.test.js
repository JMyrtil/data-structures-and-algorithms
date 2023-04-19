'use strict';

const { LinkedList } = require('../index');

describe('LinkedList', () => {
  describe('insert', () => {
    test('should insert a new node at the beginning of the linked list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
    });
  });

  describe('includes', () => {
    test('should return true if the given value is in the linked list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      expect(list.includes('b')).toBe(true);
    });

    test('should return false if the given value is not in the linked list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      expect(list.includes('d')).toBe(false);
    });
  });

  describe('toString', () => {
    test('should return a string representation of the linked list', () => {
      const list = new LinkedList();
      list.insert('c');
      list.insert('b');
      list.insert('a');
      expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
    });
  });

  describe('append', () => {
    test('should add a node to the end of the linked list', () => {
      const list = new LinkedList();
      list.append('a');
      expect(list.toString()).toBe('{ a } -> NULL');
    });

    test('should add multiple nodes to the end of the linked list', () => {
      const list = new LinkedList();
      list.append('a');
      list.append('b');
      list.append('c');
      expect(list.toString()).toBe('{ a } -> { b } -> { c } -> NULL');
    });
  });

  describe('insertBefore', () => {
    test('should insert a node before a node located in the middle of a linked list', () => {
      const list = new LinkedList();
      list.insert('a');
      list.insert('b');
      list.insert('d');
      list.insertBefore('b', 'c');
      expect(list.toString()).toBe('{ d } -> { c } -> { b } -> { a } -> NULL');
    });

    test('should insert a node before the first node of a linked list', () => {
      const list = new LinkedList();
      list.insert('a');
      list.insert('b');
      list.insertBefore('a', 'c');
      expect(list.toString()).toBe('{ c } -> { a } -> { b } -> NULL');
    });
  });

  describe('insertAfter', () => {
    test('should insert a node after a node in the middle of the linked list', () => {
      const list = new LinkedList();
      list.insert('a');
      list.insert('b');
      list.insert('c');
      list.insertAfter('b', 'd');
      expect(list.toString()).toBe('{ c } -> { b } -> { d } -> { a } -> NULL');
    });

    test('should insert a node after the last node of the linked list', () => {
      const list = new LinkedList();
      list.insert('a');
      list.insert('b');
      list.insert('c');
      list.insertAfter('a', 'd');
      expect(list.toString()).toBe('{ c } -> { b } -> { a } -> { d } -> NULL');
    });
  });
});
