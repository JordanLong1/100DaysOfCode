# Concept Overview:

-- What is Depth of Node?
--> It is the Distance between a Node in a Binary Tree and tree's ROOT is called the 'Node Depth'.

Breadth First Search (BFS): use Queue or Stack-->iterative approach.

Depth First Search (DFS): recursive approach

# Prompt Analysis and Problem Walkthrough

our main function:
function nodeDepth(root)
// init total = 0;
// ==> call the recursive function
//==>calculateSum(root, runningSum, total);
// return total;

step#1: init runningSum = 0;

-- handle a Base Case
if (node.value ==null){
// ??? return; nodeDepth;
}

-- Define helper function: named calculateSum
calculateSum(node, nodeDepth)
helper function return the nodeDepth
// helper function: ==> return
total nodeDepth
First Pass
depth = 0
node.value = 1
Root Node depth + left value + right value
depth + calculateSum(leftNode, depth + 1) + calculateSum(rightNode, depth + 1)
depth = 1
node.value = 2
depth + calculateSum(leftNode, depth + 1) + calculateSum(rightNode, depth + 1)

depth = 2
node.value = 4
depth + calculateSum(leftNode, depth + 1) + calculateSum(rightNode, depth + 1)
depth = 3
node.value 8
depth + calculateSum(leftNode, depth + 1) + calculateSum(rightNode, depth + 1)
if (node === null || !node) return 0
We need to check the total sum of all 3 values of our node on each function call
valueDepth + leftDepth + rightDepth
//=> formula for nodeDepth = left.value
1] return nodeDepth + nodeDepth(root.left, nodeDepth + 1) + nodeDepth(root.right, nodeDepth+1)

--> inside helper function

-- return depth

# Layout the steps

# Code Implementaion

# Big O Notation

# Alternative Solutions
