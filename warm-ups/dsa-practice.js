'use strict';

const Stack = require('./stack/index.js');
const Queue = require('./queue/index.js');
const BST = require('./binary-search-tree/index.js');
const LinkedList = require('./singly-linked-list/index.js');

let familyStack = new Stack();
familyStack.push('John');
familyStack.push('Cathy');
familyStack.push('Zach');
familyStack.push('Allie');

function iterateStack(stack) {
  while (stack.peek()) {
    let value = stack.pop();
    console.log(value);
    // What do I do with value?
  }
}

function iterateStackRecursively(stack) {
  if (!stack.peek()) { return; } // recursive: base case
  let person = stack.pop();
  console.log(person);
  iterateStackRecursively(stack);
}

// iterateStack(familyStack);
// iterateStackRecursively(familyStack);


let familyQueue = new Queue();
familyQueue.enqueue('John');
familyQueue.enqueue('Cathy');
familyQueue.enqueue('Zach');
familyQueue.enqueue('Allie');

function iterateQueue(queue) {

  while (queue.peek()) {
    let value = queue.dequeue();
    console.log(value);
  }

}

function iterateQueueRecursively(queue) {
  if (!queue.peek()) { return; }
  let value = queue.dequeue();
  // do something with the value
  console.log(value);
  iterateQueueRecursively(queue);
}

// iterateQueue(familyQueue);
// iterateQueueRecursively(familyQueue);

let familyList = new LinkedList();
familyList.append("John");
familyList.append("Cathy");
familyList.append("Zach");
familyList.append("Allie");

function iterateList(list) {
  let current = list.head;
  while (current) {
    console.log(current.value);
    current = current.next;
  }
}

function iterateListRecursively(node) {
  if (!node) { return; }
  console.log(node.value);
  iterateListRecursively(node.next);
}

// iterateList(familyList);
// iterateListRecursively(familyList.head);

// console.log(JSON.stringify(familyList, null, 2))

let tree = new BST();
tree.insert(50);
tree.insert(25);
tree.insert(15);
tree.insert(30);
tree.insert(85);
tree.insert(60);
tree.insert(90);
tree.insert(67);

function traverse(tree) {
  if (tree.left) { traverse(tree.left); }
  console.log(tree.value);
  if (tree.right) { traverse(tree.right) }
}

function traverseAccross(tree) {
  let queue = new Queue();
  queue.enqueue(tree.root);

  while (queue.peek()) {

    let current = queue.dequeue();
    // am I the biggest odd number so far? Do something cool with that info...
    console.log(current.value);

    if (current.left) { queue.enqueue(current.left); }
    if (current.right) { queue.enqueue(current.right); }
  }
}

traverse(tree.root);
traverseAccross(tree);

console.log(JSON.stringify(tree, null, 2));

