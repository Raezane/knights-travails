const squareConstructor = function(x, y, board) {

  let coordinates = [x, y]

  let upLeft = null;
  let upRight = null;
  let rightUp = null;
  let rightDown = null;
  let downRight = null;
  let downLeft = null;
  let leftDown = null;
  let leftUp = null;

  return {coordinates, upLeft, upRight, rightUp, rightDown, downRight, downLeft, leftDown, leftUp}
}

function setMove(moveDirX, moveDirY, board) {
  if (moveDirX < 8 && moveDirX > -1 && moveDirY < 8 && moveDirY > -1) return board[moveDirX][moveDirY]
  else return null
}

function boardWithPaths() {

  //first create the blank game board and initiate squares
  function createBoard() {
    let gameBoard = [];
    for (let i = 0; i < 8; i++) {
      let subArr = [];
      for (let j = 0; j < 8; j++) {
        subArr.push(squareConstructor(i, j))
      }      
      gameBoard.push(subArr)
    
    } return gameBoard
  }

  //then in another iteration, create the connections between squares
  function createEdges(board) {
    for (let x = 0; x < 8; x++) {
      for (let y = 0; y < 8; y++) {
        board[x][y].upLeft = setMove(x+2, y-1, board);
        board[x][y].upRight = setMove(x+2, y+1, board);
        board[x][y].rightUp = setMove(x+1, y+2, board);
        board[x][y].rightDown = setMove(x-1, y+2, board);
        board[x][y].downRight = setMove(x-2, y+1, board);
        board[x][y].downLeft = setMove(x-2, y-1, board);
        board[x][y].leftDown = setMove(x-1, y-2, board);
        board[x][y].leftUp = setMove(x+1, y-2, board);
      }
    }
  }

  //first create the blank game board
  let board = createBoard()

  //then in another iteration, create the connections between squares
  createEdges(board)

  return board
}

function knightMoves(start, end) {
  let startSquare = board[start[0]][start[1]];
  let endSquare = board[end[0]][end[1]];

  let q = [[startSquare, [startSquare.coordinates]]];
  let visited = new Set();

  while (q.length > 0) {
    let [current, path] = q.shift();
    
    if (visited.has(current)) continue;
    visited.add(current);

    if (current === endSquare) return printPath(path)

    let moves = [
      current.upLeft, current.upRight,
      current.rightUp, current.rightDown,
      current.downRight, current.downLeft,
      current.leftDown, current.leftUp
    ];

    for (let move of moves) {
      if (move !== null && !visited.has(move)) {
        q.push([move, [...path, move.coordinates]]);
      }
    }
  }

  return null;
}

function printPath(path) {
  console.log(`You made it in ${path.length} moves! Here's your path:`)
  for (let square of path) {
    console.log(square)
  }
}

let board = boardWithPaths()
knightMoves([0, 0], [3, 3])