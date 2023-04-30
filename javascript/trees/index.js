class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  preOrder() {
    let result = [];
    const traverse = (node) => {
      if (node) {
        result.push(node.value);
        traverse(node.left);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  inOrder() {
    let result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        result.push(node.value);
        traverse(node.right);
      }
    };
    traverse(this.root);
    return result;
  }

  postOrder() {
    let result = [];
    const traverse = (node) => {
      if (node) {
        traverse(node.left);
        traverse(node.right);
        result.push(node.value);
      }
    };
    traverse(this.root);
    return result;
  }
}

class BinarySearchTree extends BinaryTree {
  constructor() {
    super();
    this.root = null;
  }

  add(value) {
    const node = new Node(value);
    if (!this.root) {
      this.root = node;
      return;
    }
    let current = this.root;
    while (current !== this.root) {
      if (value === current.value) return;
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  contains(value) {
    let current = this.root;
    while (current) {
      if (value === current.value) return true;
      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }
    return false;
  }
}

module.exports = { Node, BinaryTree, BinarySearchTree };
