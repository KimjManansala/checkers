

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
function deepCopy(x){
  return JSON.parse(JSON.stringify(x))
}
const gameState = {
  player: "Player 1",
  board: initialBoard()
};

const checkerReducer = (state = gameState, action) => {
  switch (action.type) {
    case "UPDATE":
      break;
    case "PIECE_MOVE":
      let newState = deepCopy(state)
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
function removeHighlight(newState){

  for (let i = 0; i < newState.board.length; i++) {
    for (let j = 0; j < newState.board[i].length; j++) {
      if (newState.board[i][j] === "highlight") newState.board[i][j] = 'empty';
    }
  }
  return newState
}

// CHECK WHICH USER

function checkUser(user, action){

}


// ACTION MOVE PIECE
function movePiece(row, color, column, newState) {
  if (checkHighlight(newState.board)) {
    switch (color) {
      case "black":
        if (column === 0) {
          if (newState.board[row - 1][column + 1] === "empty") {
            newState.board[row - 1][column + 1] = "highlight";
            newState.board[row][column] = "empty";

            return newState;
          } else {
            return newState;
          }
        } else if (column === 7) {
          if (newState.board[row - 1][column - 1] === "empty") {
            newState.board[row - 1][column - 1] = "highlight";
            newState.board[row][column] = "empty";
            return newState;
          } else {
            return newState;
          }
        } else {
          if (newState.board[row - 1][column - 1] === "empty") {
            newState.board[row - 1][column - 1] = "highlight";
            newState.board[row][column] = "empty";
          }
          if (newState.board[row - 1][column + 1] === "empty") {
            newState.board[row - 1][column + 1] = "highlight";
            newState.board[row][column] = "empty";
          }

          return newState;
        }
        case "red":
        if (column === 0) {
          if (newState.board[row + 1][column + 1] === "empty") {
            newState.board[row + 1][column + 1] = "highlight";
            newState.board[row][column] = "empty";

            return newState;
          } else {
            return newState;
          }
        } else if (column === 7) {
          if (newState.board[row + 1][column - 1] === "empty") {
            newState.board[row + 1][column - 1] = "highlight";
            newState.board[row][column] = "empty";
            return newState;
          } else {
            return newState;
          }
        } else {
          if (newState.board[row + 1][column - 1] === "empty") {
            newState.board[row + 1][column - 1] = "highlight";
            newState.board[row][column] = "empty";
          }
          if (newState.board[row + 1][column + 1] === "empty") {
            newState.board[row + 1][column + 1] = "highlight";
            newState.board[row][column] = "empty";
          }

          return newState;
        }
      
      default:
        return newState;
    }
  } else {
    switch (color) {
      case "highlight":
        if(newState.player === 'Player 1'){
        newState.board[row][column] = "black";
        console.log(newState)
        newState.player ='Player 2';
        return removeHighlight(newState)

        }else{
          newState.board[row][column] = "red";
        newState.player ='Player 1';
        return removeHighlight(newState)

        }

      default:
        return newState;
    }
  }
}



