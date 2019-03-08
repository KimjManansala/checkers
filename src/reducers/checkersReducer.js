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
  pieceBeforeMove: { row: 0, column: 0 },
  canContinue: false
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
          capturePiece(row, column, 1, newState, "red");
          if (newState.canContinue) {
            moveToHighlight(row, column, newState, "black", "RED");
            newState.canContinue = false;
            return newState;
          } else {
            moveToHighlight(row, column, newState, "black", "RED");
            newState.currentTurn = "RED";
            return removeHighlight(newState);
          }
        } else {
          // checkDouble(newState, row, column, "black");
          capturePiece(row, column, -1, newState, "black");
          if (newState.canContinue) {
            moveToHighlight(row, column, newState, "red", "BLACK");
            newState.canContinue = false;
            return newState;
          } else {
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

function checkDouble(newState, row, column, eatPosColor) {
  let first,
    second,
    third,
    fourth = false;
  if (newState.board[row + 1][column + 1] === eatPosColor) {
    // first = true;
    console.log("CAN DOUBLE", row + 1, column + 1);

    first = checkIfCapture(newState, row + 1, column + 1, 1, 1, eatPosColor);
  }
  if (newState.board[row + 1][column - 1] === eatPosColor) {
    console.log("CAN DOUBLE", row + 1, column - 1);
    // second = true;

    second = checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
  }
  if (newState.board[row - 1][column + 1] === eatPosColor) {
    console.log("CAN DOUBLE", row - 1, column + 1);
    // third = true;

    third = checkIfCapture(newState, row - 1, column + 1, -1, 1, eatPosColor);
  }
  if (newState.board[row - 1][column - 1] === eatPosColor) {
    // true;

    console.log("CAN DOUBLE", row - 1, column - 1);
    fourth = checkIfCapture(newState, row - 1, column - 1, -1, -1, eatPosColor);
  }
  if (first || second || third || fourth) {
    newState.board[newState.pieceBeforeMove.row][newState.pieceBeforeMove.column] = 'empty'
    newState.pieceBeforeMove.row = row;
    newState.pieceBeforeMove.column = column;
    newState.canContinue = true;
  }
}

// FINSIH MOVE
function moveToHighlight(row, column, newState, color, currentTurn) {

  newState.board[row][column] = color;
  newState.board[newState.pieceBeforeMove.row][newState.pieceBeforeMove.column] = "empty";
}

// CAPTURE PIECE
function capturePiece(row, column, direction, newState, color) {
  console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~')

  console.log('This is old column',newState.pieceBeforeMove.column)
  console.log('New column',column)
  console.log(direction, 'tHIS')

  if (newState.pieceBeforeMove.column > column) {
    console.log(row + direction, column + 1)
    console.log(newState.board[row + direction][column + 1], color)
    if (newState.board[row + direction][column + 1] === color) {
      newState.board[row + direction][column + 1] = "empty";
      newState[color] -= 1;

      checkDouble(newState, row, column, color);

      return true;
    }
  } else if (newState.pieceBeforeMove.column < column) {
    console.log(row + direction, column - 1)
    console.log(newState.board[row + direction][column - 1], color)
    if (newState.board[row + direction][column - 1] === color) {
      newState[color] -= 1;
      newState.board[row + direction][column - 1] = "empty";
      checkDouble(newState, row, column, color);
      return true;
    }
  } else {
    console.log('Hello')
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

  if (row > 0 && row < 7) {
    if (newState.board[row][column] === eatPosColor) {
      if (
        newState.board[row + rowMovement][column + columnMovement] === "empty"
      ) {
        newState.board[row + rowMovement][column + columnMovement] =
          "highlight";
        // newState.board[row - rowMovement][column - columnMovement] = newState.currentTurn.toLowerCase();
        return true;
      }
    } else {
      return false;
    }
  }
}

function createHighLight(newState, row, column, moveMent, eatPosColor) {

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
