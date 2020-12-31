
class BST {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
    }
  
    insert(value) {
          if (value < this.value) {
              if (this.left === null) {
                  this.left = new BST(value)
              } else {
                  this.left.insert(value)
              }
          } else {
              if (this.right === null) {
                  this.right = new BST(value)
              } else {
                  this.right.insert(value)
              }
          }
          return this
    }
  
    contains(value) {
        if (value < this.value) {
            if (this.left === null) {
                return false; 
            } else {
                return this.left.contains(value); 
            } 
        } else if (value > this.value) {
            if (this.right === null) {
                return false; 
            } else {
                return this.right.contains(value);
            }
        } else {
            return true; 
        }
    }
  
      
  
    remove(value) {
     // still need to do this.
      return this;
    }
  }