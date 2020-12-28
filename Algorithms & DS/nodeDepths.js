

// This is the class of the Input Binary Tree.
class BinaryTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution#1: Recursive Solution
function nodeDepths(root) {
  return calDepth(root)
}

// Helper Function
// in ES6, you can set the defult in the parameter
function calDepth(node, depth = 0){
  // check the base case, return 0
  
  if(!node) {
    return 0;
  }

  // return 3 stuff: 1] recursive formula = currentDepth + depthOflefNode + depthOfrightNode
  return  depth + calDepth(node.left, depth + 1) + calDepth(node.right, depth + 1);
}
  

// Solution#2: Recursive Solution without helper function
function nodeDepths(root, depth = 0 ) {
  // base case check
  if(!root) {
    return 0;
  }
  return depth + nodeDepths(root.left, depth+1) + nodeDepths(root.right, depth +1);
}

/**
 a.] d= 1,  + (d+1)=2, + (d+1) =2
 

 */

/*
Time Complexity: O(n)
n is the total number of nodes of the Binary Tree, since we travse trough every node on the binary tree, and we add Depth to the sum, and we are making recursive function calls.

Space Complexity: O(h)
O(h), where h is the height of the binary tree.

*/
































/* Big O Notation Explainations:
Time Complexity:

Space Complexity:

*/

// Solution#2: Iterative Solution
// This is the class of the Input Binary Tree.
class BinaryTree {
  constructor (value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Solution#2: Iterative Solution
function nodeDepths(root) {

}