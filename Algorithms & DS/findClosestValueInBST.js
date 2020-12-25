function findClosestValueInBst(tree, target) {

      let closestValue = tree.value;
      let currentNode = tree; 
    console.log(currentNode)
    

      while (currentNode !== null) {
 
        if(closestValue === target) {
          break;
        }
        
        let currentDifference = Math.abs(currentNode.value - target);
        let smallestDifference = Math.abs(closestValue - target);
    
        if( currentDifference < smallestDifference){
          closestValue = currentNode.value;
        }
        if(target < currentNode.value) {
 
          currentNode = currentNode.left;
        } else {

            currentNode = currentNode.right;
        }
        
    
      }
      return closestValue;
    }