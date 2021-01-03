class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  }
  function branchSums(root) {
      let sumsList = []
      return branchSumsHelper(root, 0, sumsList)
  }
  
  function branchSumsHelper(root, sum, sumsList) {
      if (!root) {
          return;
      }
              
      sum = sum + root.value
      
      if (root.left === null && root.right === null) {
          sumsList.push(sum)
      }
      
  
      branchSumsHelper(root.left, sum, sumsList)
      
      
      
       branchSumsHelper(root.right, sum, sumsList)
      
      return sumsList
      
  }
  
  // Do not edit the lines below.
  exports.BinaryTree = BinaryTree;
  exports.branchSums = branchSums;
  