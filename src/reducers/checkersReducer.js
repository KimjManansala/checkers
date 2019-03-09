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
  pieceBeforeMove: { row: 0, column: 0, oldColor: "black" },
  canContinue: false,
  showCapture: false
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
          return createHighLight(newState, row, column, -1, "red", "black");
        } else {
          return newState;
        }
      case "red":
        if (newState.currentTurn === "RED") {
          return createHighLight(newState, row, column, 1, "black", "red");
        } else {
          return newState;
        }
      case "blackking":
        if (newState.currentTurn === "BLACK") {
          return kingHighlight(newState, row, column, "red", "blackking");
        } else {
          return newState;
        }
      case "redking":
        if (newState.currentTurn === "RED") {
          return kingHighlight(newState, row, column, "black", "redking");
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

// FUNCTION FOR CHECK DOUBLE ONLY IN ONE DIRECTION
function pieceCheckDouble(newState, row, column, moveMent, eatPosColor) {
  let first = false;
  let second = false;

  if (row > 0 && row < 7) {
    if (newState.board[row - moveMent][column - 1] === eatPosColor) {
      console.log("first");
      first = checkIfCapture(
        newState,
        row - moveMent,
        column - 1,
        -moveMent,
        -1,
        eatPosColor
      );
    }
    if (newState.board[row - moveMent][column + 1] === eatPosColor) {
      console.log("second");
      second = checkIfCapture(
        newState,
        row - moveMent,
        column + 1,
        -moveMent,
        1,
        eatPosColor
      );
    }

    if (first || second) {
      console.log("true");
      newState.board[newState.pieceBeforeMove.row][
        newState.pieceBeforeMove.column
      ] = "empty";
      newState.pieceBeforeMove.row = row;
      newState.pieceBeforeMove.column = column;
      newState.canContinue = true;
    } else {
      console.log("false");
      newState.canContinue = false;
    }
  }
  // newState,
  // row,
  // column,
  // rowMovement,
  // columnMovement,
  // eatPosColor
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
    newState.board[newState.pieceBeforeMove.row][
      newState.pieceBeforeMove.column
    ] = "empty";
    newState.pieceBeforeMove.row = row;
    newState.pieceBeforeMove.column = column;
    newState.canContinue = true;
  }
}

// FINSIH MOVE
function moveToHighlight(row, column, newState, color, currentTurn) {
  if (row === 0 && color === "black") {
    newState.board[row][column] = color + "king";
  } else if (row === 7 && color === "red") {
    newState.board[row][column] = color + "king";
  } else {
    newState.board[row][column] = newState.pieceBeforeMove.oldColor;
  }
  newState.board[newState.pieceBeforeMove.row][
    newState.pieceBeforeMove.column
  ] = "empty";
}

// CAPTURE PIECE
function capturePiece(row, column, direction, newState, color) {
  console.log("Being passed into capture Piece", row, column);
  if (newState.pieceBeforeMove.column > column) {
    if (newState.board[row + direction][column + 1] === color) {
      newState.board[row + direction][column + 1] = "empty";
      newState[color] -= 1;

      pieceCheckDouble(newState, row, column, direction, color);
      newState.showCapture = true;

      return true;
    }
  } else if (newState.pieceBeforeMove.column < column) {
    if (newState.board[row + direction][column - 1] === color) {
      newState[color] -= 1;
      newState.board[row + direction][column - 1] = "empty";
      pieceCheckDouble(newState, row, column, direction, color);
      newState.showCapture = true;

      return true;
    }
  } else {
    console.log("Hello");
    return false;
    //DO NOTHING
  }
}
function createMultipleCapture(row, column, direction, newState, color) {}

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
  console.log(
    "This is being passed into checkIfCapture",
    row,
    column,
    rowMovement,
    columnMovement,
    eatPosColor
  );

  if (row > 0 && row < 7) {
    if (newState.board[row][column] === eatPosColor) {
      console.log(row, rowMovement, column, columnMovement);
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

function kingHighlight(newState, row, column, eatPosColor, currentColor) {
  newState.pieceBeforeMove.row = row;
  newState.pieceBeforeMove.column = column;
  newState.pieceBeforeMove.oldColor = currentColor;
 
  let canCaptureOther = null
  switch (eatPosColor){
    case 'red':
    canCaptureOther = 'redking'
    break;
    case'black':
    canCaptureOther = 'blackking'
    break;
    default:
    break;
  }
  if (column === 0) {
    if (newState.board[row + 1]) {
      if (newState.board[row + 1][column + 1] === "empty") {
        newState.board[row + 1][column + 1] = "highlight";
        // newState.board[row][column] = "empty";
      } else {
        checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
        checkIfCapture(newState, row + 1, column - 1, 1, -1, canCaptureOther);
      }
    }
    if (newState.board[row - 1]) {
      if (newState.board[row - 1][column + 1] === "empty") {
        newState.board[row - 1][column + 1] = "highlight";
      } else {
        checkIfCapture(newState, row - 1, column + 1, -1, 1, eatPosColor);
        checkIfCapture(newState, row - 1, column + 1, -1, 1, canCaptureOther);
      }
    }
  }
  if (column === 7) {
    if (newState.board[row + 1]) {
      if (newState.board[row + 1][column - 1] === "empty") {
        newState.board[row + 1][column - 1] = "highlight";
      } else {
        checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
        checkIfCapture(newState, row + 1, column - 1, 1, -1, canCaptureOther);
      }
    }
    if (newState.board[row - 1]) {
      if (newState.board[row - 1][column - 1] === "empty") {
        newState.board[row - 1][column - 1] = "highlight";
      } else {
        checkIfCapture(newState, row - 1, column - 1, -1, -1, eatPosColor);
        checkIfCapture(newState, row - 1, column - 1, -1, -1, canCaptureOther);
      }
    }
  }

  if (column < 7 && column > 0) {
    if (newState.board[row + 1]) {
      if (newState.board[row + 1][column - 1] === "empty") {
        newState.board[row + 1][column - 1] = "highlight";
      }else{
        checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
        checkIfCapture(newState, row + 1, column - 1, 1, -1, canCaptureOther);
      }
      if (newState.board[row + 1][column + 1] === "empty") {
        newState.board[row + 1][column + 1] = "highlight";
      }else{
        checkIfCapture(newState, row + 1, column + 1, 1, 1, eatPosColor);
        checkIfCapture(newState, row + 1, column + 1, 1, 1, canCaptureOther);
      }
    }
    if (newState.board[row - 1]) {
      if (newState.board[row - 1][column - 1] === "empty") {
        newState.board[row - 1][column - 1] = "highlight";
      }else{
        checkIfCapture(newState, row - 1, column - 1, -1, -1, eatPosColor);
        checkIfCapture(newState, row - 1, column - 1, -1, -1, canCaptureOther);
      }
      if (newState.board[row - 1][column + 1] === "empty") {
        newState.board[row - 1][column + 1] = "highlight";
        checkIfCapture(newState, row - 1, column + 1, -1, 1, eatPosColor);
        checkIfCapture(newState, row - 1, column + 1, -1, 1, canCaptureOther);
      }
    }
  }
  return newState;
}
function createHighLight(
  newState,
  row,
  column,
  moveMent,
  eatPosColor,
  currentColor
) {

  newState.pieceBeforeMove.row = row;
  newState.pieceBeforeMove.column = column;
  newState.pieceBeforeMove.oldColor = currentColor;
  let canCaptureOther = null
  console.log(eatPosColor)

  switch (eatPosColor){
    case 'red':
    canCaptureOther = 'redking'
    break;
    case'black':
    canCaptureOther = 'blackking'
    break;
    default:
    break;
  }

  console.log(canCaptureOther)
  console.log(eatPosColor)



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
      checkIfCapture(
        newState,
        row + moveMent,
        column + 1,
        moveMent,
        1,
        canCaptureOther
      )
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
      checkIfCapture(
        newState,
        row + moveMent,
        column - 1,
        moveMent,
        -1,
        canCaptureOther
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
      checkIfCapture(
        newState,
        row + moveMent,
        column - 1,
        moveMent,
        -1,
        canCaptureOther
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
      checkIfCapture(
        newState,
        row + moveMent,
        column + 1,
        moveMent,
        1,
        canCaptureOther
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
