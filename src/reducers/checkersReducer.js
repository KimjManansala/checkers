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
function deepCopy(x) {
  return JSON.parse(JSON.stringify(x));
}

// INITIAL STATE

const gameState = {
  player: "Black's Turn",
  board: initialBoard(),
  redPiece: 12,
  blackPiece: 12,
  winnder: null
};

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
  console.log('This is the current', row, column)
  console.log('Will this be the orignal piece', row-rowMovement, column-columnMovement)
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

// EAT PIECE
function eatPiece(newState, row, color, column) {

}

function createHighLight(newState, row, column, moveMent, eatPosColor) {
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
        if (newState.player === "Black's Turn") {
          newState.board[row][column] = "black";
          newState.player = "Red's Turn";
          return removeHighlight(newState);
        } else {
          newState.board[row][column] = "red";
          newState.player = "Black's Turn";
          return removeHighlight(newState);
        }

      default:
        return newState;
    }
  }
}
