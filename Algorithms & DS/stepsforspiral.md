approach: iterative solution:
  step#0: init empty array
  let result = []
  step#1: Declare all of our Bounds
  Access 2D Array approach:
  [
  [0,0],[0,1],[0,2],[0,3]
  [1,0],[1,1],[1,2],[1,3]
  [2,0],[2,1],[2,2],[2,3]
  [3,0],[3,1],[3,2],[3,3]
  ]

  13 --> [ 1, 1]

  14 --> [1, 2]

  15 --> [2, 2]

  16 --> [2, 1]

  --> init our variables:
  let startRow = 0;
  let endRow = array.length -1;

  let startCol = 0
  let endCol =array[0].length -1;& f

- step#2: While loop to narrow down the rectangles
  --> outerArray
  --> innerArray

while (startRow <= endRow && startCol <= endCol){inside while loop, there are 4 for loops}

- step#3: implement 4 For Loops
  ---> array[row][column]
- step#3.1: 1st For loop, push WHAT into the result array:
  for ( let col = startCol; col <= endCol; col ++)
  example: --->[0, 0], [0, 1], [0, 2], [0, 3]
  ---> result.push (array[startRow][col]);

startRow ++;

- step#3.2: 2nd For Loop, push WHAT into the result array:
  for ( let row = startRow; row <= endRow; row ++);
  result.push(array[row][endcol]);
  endCol --;

- step#3.3: 3rd For Loop, push what into the result array:
  for ( let col = endCol; col>= startCol; col --)
  result.push(array[endRow][col]);
  endRow --;

- step# 3.4: 4th For Loop, push what into the result array :
  for( let row =endRow; row >= startRow; row --)
  result.push(array[row][startcol]);
  startCol ++;

  exit the while loop
  --step#4: return the result array
  return result array