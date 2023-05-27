const Hashtable = require('../Hashtable/index');

function treeIntersection(tree1, tree2) {
  const table = new Hashtable(1024);
  const arr1 = tree1.preOrder();
  const arr2 = tree2.preOrder();
  const duplicates = [];

  for (let i = 0; i < arr1.length; i++) {
    table.set(arr1[i], true);
  }

  for (let i = 0; i < arr2.length; i++) {
    const temp = arr2[i];
    if (table.has(temp)) {
      duplicates.push(temp);
    } else {
      table.set(temp, true);
    }
  }

  return duplicates;
}


module.export = treeIntersection;
