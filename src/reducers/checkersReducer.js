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
  currentTurn: "BLACK",
  board: initialBoard(),
  red: 12,
  black: 12,
  winner: null,
  pieceBeforeMove: { row: 0, column: 0 }
};
function deepCopy(x) {
  return JSON.parse(JSON.stringify(x));
}

const checkerReducer = (state = gameState, action) => {
  let newState = deepCopy(state);

  switch (action.type) {
    case "UPDATE":
      break;
    case "PIECE_MOVE":
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
        if (newState.currentTurn === "BLACK") {
          return createHighLight(newState, row, column, -1, "red");
        } else {
          return newState;
        }
      case "red":
        if (newState.currentTurn === "RED") {
          return createHighLight(newState, row, column, 1, "black");
        } else {
          return newState;
        }
      default:
        return newState;
    }
  } else {
    switch (color) {
      case "highlight":
        if (newState.currentTurn === "BLACK") {
          if (capturePiece(row, column, 1, newState, "red")) {
            capturePiece(row, column, 1, newState, "red");
            if (checkDouble(newState, row, column, color, "red")) {
              newState.pieceBeforeMove.row = row;
  newState.pieceBeforeMove.column = column;
              moveToHighlight(row, column, newState, "black", "RED")

              checkDouble(newState, row, column, color, "red")
              console.log("will checkDouble");
            } else {
              moveToHighlight(row, column, newState, "black", "RED");
              newState.currentTurn = "RED";
              return removeHighlight(newState);
            }
          } else {
            capturePiece(row, column, 1, newState, "red");
            moveToHighlight(row, column, newState, "black", "RED");
            newState.currentTurn = "RED";
            return removeHighlight(newState);
          }
        } else {
          if (capturePiece(row, column, 1, newState, "red")) {
            capturePiece(row, column, -1, newState, "black");
            if (checkDouble(newState, row, column, color, "black")) {
              newState.pieceBeforeMove.row = row;
  newState.pieceBeforeMove.column = column;
              moveToHighlight(row, column, newState, "red", "BLACK");
              checkDouble(newState, row, column, color, "black")
              console.log("will checkDouble");
            } else {
              capturePiece(row, column, -1, newState, "black");
              moveToHighlight(row, column, newState, "red", "BLACK");
              newState.currentTurn = "BLACK";
              return removeHighlight(newState);
            }
          } else {
            capturePiece(row, column, -1, newState, "black");
            moveToHighlight(row, column, newState, "red", "BLACK");
            newState.currentTurn = "BLACK";
            return removeHighlight(newState);
          }
        }
        // break;
      default:
        return newState;
    }
  }
}
// FUNCTION CHECK IF DOUBLE

function checkDouble(newState, row, column, color, eatPosColor) {
  if (newState.board[row + 1][column + 1] === eatPosColor) {
    console.log("CAN DOUBLE", row + 1, column + 1);
    return checkIfCapture(newState, row + 1, column + 1, 1, 1, eatPosColor);
  }
  if (newState.board[row + 1][column - 1] === eatPosColor) {
    console.log("CAN DOUBLE", row + 1, column - 1);
    return checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
  }
  if (newState.board[row - 1][column + 1] === eatPosColor) {
    console.log("CAN DOUBLE", row - 1, column + 1);
    return checkIfCapture(newState, row - 1, column + 1, -1, 1, eatPosColor);
  }
  if (newState.board[row - 1][column - 1] === eatPosColor) {
    console.log("CAN DOUBLE", row - 1, column - 1);
    return checkIfCapture(newState, row - 1, column - 1, -1, -1, eatPosColor);
  }
}

// FINSIH MOVE
function moveToHighlight(row, column, newState, color, currentTurn) {
  newState.board[row][column] = color;
  newState.board[newState.pieceBeforeMove.row][
    newState.pieceBeforeMove.column
  ] = "empty";
}

// CAPTURE PIECE
function capturePiece(row, column, direction, newState, color) {
  console.log('capturepiece is running')
  if (newState.pieceBeforeMove.column > column) {
    if (newState.board[row + direction][column + 1] === color) {
      console.log(row + direction, column + 1)
      newState.board[row + direction][column + 1] = "empty";
      newState[color] -= 1;
      return true;
    }
  } else if (newState.pieceBeforeMove.column < column) {
    if (newState.board[row + direction][column - 1] === color) {
      console.log(row + direction, column - 1)
      newState[color] -= 1;
      newState.board[row + direction][column - 1] = "empty";
      return true;
    }
  } else {
    return false;
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
function checkIfCapture(
  newState,
  row,
  column,
  rowMovement,
  columnMovement,
  eatPosColor
) {
  // PASS THE PIECE THAT WILL BE CHECK IF YOU CAN EAT IT
  console.log(row, column, rowMovement, columnMovement, eatPosColor);
  if (row > 0 && row < 7) {
    if (newState.board[row][column] === eatPosColor) {
      if (
        newState.board[row + rowMovement][column + columnMovement] === "empty"
      ) {
        console.log(true, row + rowMovement, column + columnMovement);

        newState.board[row + rowMovement][column + columnMovement] =
          "highlight";
          console.log(newState.currentTurn.toLowerCase())
        // newState.board[row - rowMovement][column - columnMovement] = newState.currentTurn.toLowerCase();
        return true;
      }
    } else {
      return false;
    }
  }
}

function createHighLight(newState, row, column, moveMent, eatPosColor) {
  console.log("This is what was clicked", row, column, moveMent, eatPosColor);
  newState.pieceBeforeMove.row = row;
  newState.pieceBeforeMove.column = column;
  if (column === 0) {
    if (newState.board[row + moveMent][column + 1] === "empty") {
      newState.board[row + moveMent][column + 1] = "highlight";
      // newState.board[row][column] = "empty";
    } else {
      checkIfCapture(
        newState,
        row + moveMent,
        column + 1,
        moveMent,
        1,
        eatPosColor
      );
    }
  }
  if (column === 7) {
    if (newState.board[row + moveMent][column - 1] === "empty") {
      newState.board[row + moveMent][column - 1] = "highlight";
      // newState.board[row][column] = "empty";
    } else {
      checkIfCapture(
        newState,
        row + moveMent,
        column - 1,
        moveMent,
        -1,
        eatPosColor
      );
    }
  }

  if (column < 7 && column > 0) {
    if (newState.board[row + moveMent][column - 1] === "empty") {
      newState.board[row + moveMent][column - 1] = "highlight";
      console.log("Hi");

      // newState.board[row][column] = "empty";
    } else {
      checkIfCapture(
        newState,
        row + moveMent,
        column - 1,
        moveMent,
        -1,
        eatPosColor
      );
    }
    if (newState.board[row + moveMent][column + 1] === "empty") {
      console.log("Hi");

      newState.board[row + moveMent][column + 1] = "highlight";
      // newState.board[row][column] = "empty";
    } else {
      checkIfCapture(
        newState,
        row + moveMent,
        column + 1,
        moveMent,
        1,
        eatPosColor
      );
    }
  }
  return newState;
}

// CHECK WINNER

function checkWinner(newState) {
  if (newState.red === 0) {
    newState.winner = "Black Is the winner!!";
    return newState;
  } else if (newState.black === 0) {
    newState.winner = "Red Is the winner!!";
    return newState;
  } else {
    // DO NOTHING
  }
}
