const { Node, Tree, } = require('../trees/index');
const treeIntersection = require('./tree-intersection');

describe('tree-intersection', () => {
  it('should find duplicate values', () => {
    const tree1 = new Tree();
    tree1.root = new Node('10');
    tree1.root.left = new Node('5');
    tree1.root.right = new Node('15');
    tree1.root.left.left = new Node('17');

    const tree2 = new Tree();
    tree2.root = new Node('17');
    tree2.root.left = new Node('4');
    tree2.root.right = new Node('23');
    tree2.root.left.left = new Node('5');

    const result = treeIntersection(tree1, tree2);
    expect(result).toEqual(['17', '5']);
  });

  it('should return empty array if no duplicates', () => {
    const tree1 = new Tree();
    tree1.root = new Node('10');
    tree1.root.left = new Node('5');
    tree1.root.right = new Node('15');
    tree1.root.left.left = new Node('17');

    const tree3 = new Tree();
    tree3.root = new Node('7');
    tree3.root.left = new Node('47');
    tree3.root.right = new Node('277');
    tree3.root.left.left = new Node('57');

    const result = treeIntersection(tree1, tree3);
    expect(result).toEqual([]);
  });
});
