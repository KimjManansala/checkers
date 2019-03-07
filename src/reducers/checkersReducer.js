function initialBoard() {
  return [
    ["red", null, "red", null, "red", null, "red", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "red", null, "red", null, "red", null],
    [null, "empty", null, "empty", null, "empty", null, "empty"],
    ["empty", null, "empty", null, "empty", null, "empty", null],
    [null, "black", null, "black", null, "black", null, "black"],
    ["black", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ];
}


// INITIAL STATE

const gameState = {
  player: "Black's Turn",
  board: initialBoard(),
  redPiece: 12,
  blackPiece: 12,
  winner: null,
  pieceBeforeMove: {row: 0, column: 0}
};
function deepCopy(x) {
  return JSON.parse(JSON.stringify(x));
}

const checkerReducer = (state = gameState, action) => {
  switch (action.type) {
    case "UPDATE":
      break;
    case "PIECE_MOVE":
      let newState = deepCopy(state);
      return movePiece(action.row, action.color, action.column, newState);
    default:
      return state;
  }
};
export default checkerReducer;

// ACTION MOVE PIECE
function movePiece(row, color, column, newState) {
  if (checkHighlight(newState.board)) {
    switch (color) {
      case "black":
        if (newState.player === "Black's Turn") {
          return createHighLight(newState, row, column, -1, 'red');
        } else {
          return newState;
        }
      case "red":
        if (newState.player === "Red's Turn") {
          return createHighLight(newState, row, column, 1, 'black');
        } else {
          return newState;
        }
      default:
        return newState;
    }
  } else {
    switch (color) {
      case "highlight":
      console.log(row, column)
        if (newState.player === "Black's Turn") {
          eatPiece(row, column, 1, newState, 'red')
          newState.board[row][column] = "black";
          newState.player = "Red's Turn";
          return removeHighlight(newState);
        } else {
          eatPiece(row, column, -1, newState, 'black')
          newState.board[row][column] = "red";
          newState.player = "Black's Turn";
          return removeHighlight(newState);
        }

      default:
        return newState;
    }
  }
}
// FINSIH MOVE
function moveToHighlight(row, column, different,newState){

}

// EAT PIECE
function eatPiece(row, column, direction,newState, color){
  console.log('hi', color)

  if(newState.pieceBeforeMove.column > column){
    console.log('will eat piece to empty')
    console.log(row, column)
    console.log(row + direction,column +1 )
    if(newState.board[row + direction][column+1] === color)
    newState.board[row+ direction][column+1] = 'empty'
  }else if(newState.pieceBeforeMove.column < column){
    console.log('will eat piece to empty')
    console.log(row, column)
    console.log(row+ direction,column -1 )
    if(newState.board[row+ direction][column-1] === color)
    newState.board[row+ direction][column-1] = 'empty'
  }else{
    //DO NOTHING
  }
}


// CNECKS FOR MOVE PIECE
function checkHighlight(state) {
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      if (state[i][j] === "highlight") return false;
    }
  }
  return true;
}
function removeHighlight(newState) {
  for (let i = 0; i < newState.board.length; i++) {
    for (let j = 0; j < newState.board[i].length; j++) {
      if (newState.board[i][j] === "highlight") newState.board[i][j] = "empty";
    }
  }
  return newState;
}

// CHECK IF CAN EAT PIECE
function checkIfEat(newState, row, column, rowMovement, columnMovement, eatPosColor) {
  // PASS THE PIECE THAT WILL BE CHECK IF YOU CAN EAT IT
  if(row >  0 && row <7){

  if(newState.board[row][column] === eatPosColor){
    if(newState.board[row + rowMovement][column + columnMovement] === 'empty'){
      newState.board[row + rowMovement][column + columnMovement] = 'highlight'
      newState.board[row-rowMovement][column-columnMovement] = "empty";
    }
  }else{
    console.log('NOPE')
  }
  }
}


function createHighLight(newState, row, column, moveMent, eatPosColor) {
  newState.pieceBeforeMove.row = row
  newState.pieceBeforeMove.column = column
  if (column === 0) {
    if (newState.board[row + moveMent][column + 1] === "empty") {
      newState.board[row + moveMent][column + 1] = "highlight";
      newState.board[row][column] = "empty";
    } else {
      checkIfEat(newState, row + moveMent, column + 1, moveMent, 1, eatPosColor);
    }
  }
  if (column === 7) {
    if (newState.board[row + moveMent][column - 1] === "empty") {
      newState.board[row + moveMent][column - 1] = "highlight";
      newState.board[row][column] = "empty";
    } else {
      checkIfEat(newState, row + moveMent, column -1, moveMent, -1,eatPosColor);
    }
  }

  if (column < 7 && column > 0) {
    if (newState.board[row + moveMent][column - 1] === "empty") {
      newState.board[row + moveMent][column - 1] = "highlight";
      newState.board[row][column] = "empty";
    } else {
      checkIfEat(newState, row + moveMent, column-1, moveMent, -1, eatPosColor);
    }
    if (newState.board[row + moveMent][column + 1] === "empty") {
      newState.board[row + moveMent][column + 1] = "highlight";
      newState.board[row][column] = "empty";
    } else {
      checkIfEat(newState, row + moveMent, column+1, moveMent, 1, eatPosColor);
    }
  }
  return newState;
}


