const squareConstructor = function(x, y) {

  let visited = false;

  let upLeft = setMove(x+2, y-1);
  let upRight = setMove(x+2, y+1);
  let rightUp = setMove(x+1, y+2);
  let rightDown = setMove(x-1, y+2);
  let downRight = setMove(x-2, y+1);
  let downLeft = setMove(x-2, y-1);
  let leftDown = setMove(x-1, y-2);
  let leftUp = setMove(x+1, y-2);

  return {visited, upLeft, upRight, rightUp, rightDown, downRight, downLeft, leftDown, leftUp}
}

function setMove(moveDirX, moveDirY) {
  if (moveDirX < 8 && moveDirX > -1 && moveDirY < 8 && moveDirY > -1) return [moveDirX, moveDirY]
  else return null
}

function boardWithPaths() {
  let gameBoard = [];

  for (let i = 0; i < 8; i++) {
    let subArr = [];
    for (let j = 0; j < 8; j++) {
      let square = squareConstructor(i, j)
      subArr.push(square)
    }
    gameBoard.push(subArr)
  }

  return gameBoard
}


function knightMoves(start, end) {

  let start = (board[start[0]][start[1]])

  function moveRec(current, end) {

    if (current === null) return
    if (current == end) return 'found'

    moveRec(board() ,end)
  
} return moveRec(start, end)
}

let board = boardWithPaths()
console.log(knightMoves([0, 0], [3, 3]))