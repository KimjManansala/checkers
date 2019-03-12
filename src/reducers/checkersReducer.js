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
  showCapture: false,
  didCapture: false
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
    return startPieceMove(newState, action.row ,action.column, action.color)
      // return movePiece(action.row, action.color, action.column, newState);
    default:
      return state;
  }
};
export default checkerReducer;

// // ACTION MOVE PIECE
// function movePiece(row, color, column, newState) {
//   if (checkHighlight(newState.board)) {
//     switch (color) {
//       case "black":
//         if (newState.currentTurn === "BLACK") {
//           return createHighLight(newState, row, column, -1, "red", "black");
//         } else {
//           return newState;
//         }
//       case "red":
//         if (newState.currentTurn === "RED") {
//           return createHighLight(newState, row, column, 1, "black", "red");
//         } else {
//           return newState;
//         }
//       case "blackking":
//         if (newState.currentTurn === "BLACK") {
//           return kingHighlight(newState, row, column, "red", "blackking");
//         } else {
//           return newState;
//         }
//       case "redking":
//         if (newState.currentTurn === "RED") {
//           return kingHighlight(newState, row, column, "black", "redking");
//         } else {
//           return newState;
//         }
//       default:
//         return newState;
//     }
//   } else {
//     switch (color) {
//       case "highlight":
//         if (newState.currentTurn === "BLACK") {
//           capturePiece(row, column, 1, newState, "red");
//           if (newState.canContinue) {
//             moveToHighlight(row, column, newState, "black", "RED");
//             newState.canContinue = false;
//             return newState;
//           } else {
//             moveToHighlight(row, column, newState, "black", "RED");
//             newState.currentTurn = "RED";
//             return removeHighlight(newState);
//           }
//         } else {
//           // checkDouble(newState, row, column, "black");
//           capturePiece(row, column, -1, newState, "black");
//           if (newState.canContinue) {
//             moveToHighlight(row, column, newState, "red", "BLACK");
//             newState.canContinue = false;
//             return newState;
//           } else {
//             moveToHighlight(row, column, newState, "red", "BLACK");
//             newState.currentTurn = "BLACK";
//             return removeHighlight(newState);
//           }
//         }
//       // break;
//       default:
//         return newState;
//     }
//   }
// }

// // FUNCTION FOR CHECK DOUBLE ONLY IN ONE DIRECTION
// function pieceCheckDouble(newState, row, column, moveMent, eatPosColor) {
//   let first = false;
//   let second = false;

//   if (row > 0 && row < 7) {
//     if (newState.board[row - moveMent][column - 1] === eatPosColor) {
//       first = checkIfCapture(
//         newState,
//         row - moveMent,
//         column - 1,
//         -moveMent,
//         -1,
//         eatPosColor
//       );
//     }
//     if (newState.board[row - moveMent][column + 1] === eatPosColor) {
//       second = checkIfCapture(
//         newState,
//         row - moveMent,
//         column + 1,
//         -moveMent,
//         1,
//         eatPosColor
//       );
//     }

//     if (first || second) {
//       newState.board[newState.pieceBeforeMove.row][
//         newState.pieceBeforeMove.column
//       ] = "empty";
//       newState.pieceBeforeMove.row = row;
//       newState.pieceBeforeMove.column = column;
//       newState.canContinue = true;
//     } else {
//       newState.canContinue = false;
//     }
//   }
//   // newState,
//   // row,
//   // column,
//   // rowMovement,
//   // columnMovement,
//   // eatPosColor
// }
// // FUNCTION CHECK IF DOUBLE


// // FINSIH MOVE
// // function moveToHighlight(row, column, newState, color, currentTurn) {
// //   if (row === 0 && color === "black") {
// //     newState.board[row][column] = color + "king";
// //   } else if (row === 7 && color === "red") {
// //     newState.board[row][column] = color + "king";
// //   } else {
// //     newState.board[row][column] = newState.pieceBeforeMove.oldColor;
// //   }
// //   newState.board[newState.pieceBeforeMove.row][
// //     newState.pieceBeforeMove.column
// //   ] = "empty";
// // }

// // CAPTURE PIECE
// function capturePiece(row, column, direction, newState, color) {
//   console.log("Being passed into capture Piece", row, column);

//   if (newState.pieceBeforeMove.column > column) {
//     if (newState.board[row + direction][column + 1] === color) {
//       newState.board[row + direction][column + 1] = "empty";
//       newState[color] -= 1;

//       pieceCheckDouble(newState, row, column, direction, color);
//       newState.showCapture = true;

//       return true;
//     }
//   } else if (newState.pieceBeforeMove.column < column) {
//     if (newState.board[row + direction][column - 1] === color) {
//       newState[color] -= 1;
//       newState.board[row + direction][column - 1] = "empty";
//       pieceCheckDouble(newState, row, column, direction, color);
//       newState.showCapture = true;

//       return true;
//     }
//   } else {
//     return false;
//     //DO NOTHING
//   }
// }





// // CHECK IF CAN EAT PIECE
// function checkIfCapture(
//   newState,
//   row,
//   column,
//   rowMovement,
//   columnMovement,
//   eatPosColor
// ) {
//   // PASS THE PIECE THAT WILL BE CHECK IF YOU CAN EAT IT
//   console.log(
//     "This is being passed into checkIfCapture",
//     row,
//     column,
//     rowMovement,
//     columnMovement,
//     eatPosColor
//   );

//   if (row > 0 && row < 7) {
//     if (newState.board[row][column] === eatPosColor) {

//       if (
//         newState.board[row + rowMovement][column + columnMovement] === "empty"
//       ) {
//         newState.board[row + rowMovement][column + columnMovement] =
//           "highlight";

//         // newState.board[row - rowMovement][column - columnMovement] = newState.currentTurn.toLowerCase();
//         return true;
//       }
//     } else {
//       return false;
//     }
//   }
// }

// function kingHighlight(newState, row, column, eatPosColor, currentColor) {
//   newState.pieceBeforeMove.row = row;
//   newState.pieceBeforeMove.column = column;
//   newState.pieceBeforeMove.oldColor = currentColor;
 
//   let canCaptureOther = null
//   switch (eatPosColor){
//     case 'red':
//     canCaptureOther = 'redking'
//     break;
//     case'black':
//     canCaptureOther = 'blackking'
//     break;
//     default:
//     break;
//   }
//   if (column === 0) {
//     if (newState.board[row + 1]) {
//       if (newState.board[row + 1][column + 1] === "empty") {
//         newState.board[row + 1][column + 1] = "highlight";
//         // newState.board[row][column] = "empty";
//       } else {
//         checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
//         checkIfCapture(newState, row + 1, column - 1, 1, -1, canCaptureOther);
//       }
//     }
//     if (newState.board[row - 1]) {
//       if (newState.board[row - 1][column + 1] === "empty") {
//         newState.board[row - 1][column + 1] = "highlight";
//       } else {
//         checkIfCapture(newState, row - 1, column + 1, -1, 1, eatPosColor);
//         checkIfCapture(newState, row - 1, column + 1, -1, 1, canCaptureOther);
//       }
//     }
//   }
//   if (column === 7) {
//     if (newState.board[row + 1]) {
//       if (newState.board[row + 1][column - 1] === "empty") {
//         newState.board[row + 1][column - 1] = "highlight";
//       } else {
//         checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
//         checkIfCapture(newState, row + 1, column - 1, 1, -1, canCaptureOther);
//       }
//     }
//     if (newState.board[row - 1]) {
//       if (newState.board[row - 1][column - 1] === "empty") {
//         newState.board[row - 1][column - 1] = "highlight";
//       } else {
//         checkIfCapture(newState, row - 1, column - 1, -1, -1, eatPosColor);
//         checkIfCapture(newState, row - 1, column - 1, -1, -1, canCaptureOther);
//       }
//     }
//   }

//   if (column < 7 && column > 0) {
//     if (newState.board[row + 1]) {
//       if (newState.board[row + 1][column - 1] === "empty") {
//         newState.board[row + 1][column - 1] = "highlight";
//       }else{
//         checkIfCapture(newState, row + 1, column - 1, 1, -1, eatPosColor);
//         checkIfCapture(newState, row + 1, column - 1, 1, -1, canCaptureOther);
//       }
//       if (newState.board[row + 1][column + 1] === "empty") {
//         newState.board[row + 1][column + 1] = "highlight";
//       }else{
//         checkIfCapture(newState, row + 1, column + 1, 1, 1, eatPosColor);
//         checkIfCapture(newState, row + 1, column + 1, 1, 1, canCaptureOther);
//       }
//     }
//     if (newState.board[row - 1]) {
//       if (newState.board[row - 1][column - 1] === "empty") {
//         newState.board[row - 1][column - 1] = "highlight";
//       }else{
//         checkIfCapture(newState, row - 1, column - 1, -1, -1, eatPosColor);
//         checkIfCapture(newState, row - 1, column - 1, -1, -1, canCaptureOther);
//       }
//       if (newState.board[row - 1][column + 1] === "empty") {
//         newState.board[row - 1][column + 1] = "highlight";
//         checkIfCapture(newState, row - 1, column + 1, -1, 1, eatPosColor);
//         checkIfCapture(newState, row - 1, column + 1, -1, 1, canCaptureOther);
//       }
//     }
//   }
//   return newState;
// }
// function createHighLight(
//   newState,
//   row,
//   column,
//   moveMent,
//   eatPosColor,
//   currentColor
// ) {

//   newState.pieceBeforeMove.row = row;
//   newState.pieceBeforeMove.column = column;
//   newState.pieceBeforeMove.oldColor = currentColor;
//   let canCaptureOther = null


//   switch (eatPosColor){
//     case 'red':
//     canCaptureOther = 'redking'
//     break;
//     case'black':
//     canCaptureOther = 'blackking'
//     break;
//     default:
//     break;
//   }

 



//   if (column === 0) {
//     if (newState.board[row + moveMent][column + 1] === "empty") {
//       newState.board[row + moveMent][column + 1] = "highlight";
//       // newState.board[row][column] = "empty";
//     } else {
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column + 1,
//         moveMent,
//         1,
//         eatPosColor
//       );
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column + 1,
//         moveMent,
//         1,
//         canCaptureOther
//       )
//     }
//   }
//   if (column === 7) {
//     if (newState.board[row + moveMent][column - 1] === "empty") {
//       newState.board[row + moveMent][column - 1] = "highlight";
//       // newState.board[row][column] = "empty";
//     } else {
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column - 1,
//         moveMent,
//         -1,
//         eatPosColor
//       );
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column - 1,
//         moveMent,
//         -1,
//         canCaptureOther
//       );
//     }
//   }

//   if (column < 7 && column > 0) {
//     if (newState.board[row + moveMent][column - 1] === "empty") {
//       newState.board[row + moveMent][column - 1] = "highlight";
//       // newState.board[row][column] = "empty";
//     } else {
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column - 1,
//         moveMent,
//         -1,
//         eatPosColor
//       );
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column - 1,
//         moveMent,
//         -1,
//         canCaptureOther
//       );
//     }
//     if (newState.board[row + moveMent][column + 1] === "empty") {
//       newState.board[row + moveMent][column + 1] = "highlight";
//       // newState.board[row][column] = "empty";
//     } else {
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column + 1,
//         moveMent,
//         1,
//         eatPosColor
//       );
//       checkIfCapture(
//         newState,
//         row + moveMent,
//         column + 1,
//         moveMent,
//         1,
//         canCaptureOther
//       );
//     }
//   }
//   return newState;
// }

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


// CNECKS FOR MOVE PIECE
function checkHighlight(state) {
  for (let i = 0; i < state.length; i++) {
    for (let j = 0; j < state[i].length; j++) {
      if (state[i][j] === "highlight") return false;
    }
  }
  return true;
}




function startPieceMove(newState, row ,column, color){
if(checkHighlight(newState.board)){
  switch(color){
    case 'red':
    console.log('red')
    if(newState.currentTurn === 'RED')
    return createHighlight(newState, row, column, color, false)
    else
    return newState
    case 'black': 
    if(newState.currentTurn === 'BLACK')
    return createHighlight(newState, row, column, color, false)
    else
    return newState
    case 'redking':
    if(newState.currentTurn === 'RED')
    return createHighlight(newState, row, column, color, true)
    else
    return newState
    case 'blackking':
    if(newState.currentTurn === 'BLACK')
    return createHighlight(newState, row, column, color, true)
    else
    return newState
    default:
    return newState
  }
}else{
  switch(color){
    case 'highlight':
    if(newState.currentTurn === 'BLACK'){
  return moveToHighlight(newState, row, column, 'black')
    }else{
     return moveToHighlight(newState, row, column, 'red')
    }
    default:
    return newState
  }
}
}
function removeHighlight(newState) {
  for (let i = 0; i < newState.board.length; i++) {
    for (let j = 0; j < newState.board[i].length; j++) {
      if (newState.board[i][j] === "highlight") newState.board[i][j] = "empty";
    }
  }
  return newState;
}

// UPDATE FUNCTIONS
function createHighlight(newState, row, column, color, kingBo){
// The parameters being passed into this function should be the newState, ther row of piece, column, of piece, color of piece, and if king
newState.pieceBeforeMove.row = row;
newState.pieceBeforeMove.column = column;
newState.pieceBeforeMove.oldColor = color;
let canCapture1;
let canCapture2;

switch(color){
  case 'red':
  canCapture1 = 'black'
  canCapture2 = 'blackking'
  break;
  case 'redking':
  canCapture1 = 'black'
  canCapture2 = 'blackking'
  break;
  case 'black':
  canCapture1 = 'red'
  canCapture2 = 'redking'
  break;
  case 'blackking':
  canCapture1 = 'red'
  canCapture2 = 'redking'
  break;
  default:
  break;
}
console.log(canCapture1, canCapture2)

if(kingBo){
  // MOVEMENT FOR KINGS
  return kingCheckHighlight(newState, color, canCapture1, canCapture2)
}else{
  // console.log('Can do pieceCheckHighlight')
// MOVEMENT FOR PAWNS
let piece = pieceCheckHighlight(newState, color, canCapture1, canCapture2)

return piece
}
}

function kingCheckHighlight(newState, color, capColor1, capColor2){
  let ogRow= newState.pieceBeforeMove.row
  let ogCol = newState.pieceBeforeMove.column
  if(newState.board[ogRow+1]){
    kingCheckRow(newState, color,ogRow+1, ogCol, capColor1, capColor2)
  }

  if(newState.board[ogRow-1]){
    kingCheckRow(newState, color,ogRow-1, ogCol, capColor1, capColor2)
  }

  return newState
}


function kingCheckRow(newState, color,newRow, ogCol, capColor1, capColor2){
  let rowDir = newRow - newState.pieceBeforeMove.row

  if(newState.board[newRow][ogCol+1] === 'empty'){
    pieceHighLight(newState, newRow, ogCol+1)

  }else if(newState.board[newRow][ogCol+1] === capColor1 || newState.board[newRow][ogCol+1] === capColor2){
    // ROW DIRECTION 
    console.log(rowDir)
    pieceCaptureHighlight(newState, newRow, ogCol+1, rowDir, +1, capColor1, capColor2)
  }

  if(newState.board[newRow][ogCol-1] === 'empty'){
    pieceHighLight(newState, newRow, ogCol-1)
  }else if(newState.board[newRow][ogCol-1] === capColor1 || newState.board[newRow][ogCol-1] === capColor2){
    console.log(rowDir)
    pieceCaptureHighlight(newState, newRow, ogCol-1, rowDir, -1, capColor1, capColor2)
  }


}


function pieceCheckHighlight(newState, color, capColor1, capColor2){

let moveColor = (color === 'black' || color ==='blackking')
let moveMent = 0
moveColor? moveMent = -1: moveMent= 1;
// CHECKS IF NEW ROW EXIST
if(newState.board[newState.pieceBeforeMove.row + moveMent]){
  
  let pieceOnLeft = newState.board[newState.pieceBeforeMove.row + moveMent][newState.pieceBeforeMove.column+1]
  let pieceOnRight = newState.board[newState.pieceBeforeMove.row + moveMent][newState.pieceBeforeMove.column-1]
  // CHECKS PIECES ON LEFT EXIST
  console.log('piece ON LEFT', newState.pieceBeforeMove.row + moveMent, newState.pieceBeforeMove.column+1, pieceOnLeft)
  console.log('piece on right', newState.pieceBeforeMove.row + moveMent, newState.pieceBeforeMove.column-1, pieceOnRight)
  if(pieceOnLeft){
    // CHECKS IF EMPTY
    if(pieceOnLeft === 'empty'){
      pieceHighLight(newState, newState.pieceBeforeMove.row + moveMent, newState.pieceBeforeMove.column+1 )
    }else{
    // CHECKS IF PIECE CAN BE CAPTURED
      pieceCaptureHighlight(newState, newState.pieceBeforeMove.row + moveMent, newState.pieceBeforeMove.column+1 , moveMent, 1, capColor1, capColor2)

    }
  }else{
    // DO NOTHING
  }
  // THEN AFTER CHECKING THE LEFT IT CHECKS THE RIGHT
  // CHECKS PIECE ON RIGHT EXIST
  if(pieceOnRight){

    // CHECKS IF EMPTY

    if(pieceOnRight === 'empty'){
      pieceHighLight(newState, newState.pieceBeforeMove.row + moveMent, newState.pieceBeforeMove.column-1);
    }else{

      // CHECKS IF PIECE CAN BE CAPTURED
      pieceCaptureHighlight(newState, newState.pieceBeforeMove.row + moveMent, newState.pieceBeforeMove.column-1 , moveMent, -1, capColor1, capColor2)
    }
  }
}else{
console.log('It failed')
  // DO NOTHING
}

return newState
}
function pieceHighLight(newState, row, column){
  newState.board[row][column] = 'highlight'
}

function pieceCaptureHighlight(newState, row, column, rowDir, colDir, capColor1, capColor2){
  // ROW AND COLUMN ARE THE COOR FOR PIECE TO BE CAPTURED
  // COLRIR AND ROW DIR TO DETERMINE WHERE PIECE CAN GO IF CAPTURE

  if(newState.board[row][column] === capColor1 || newState.board[row][column] === capColor2){

    if(newState.board[row+rowDir]){
    if(newState.board[row+rowDir][column+colDir] === 'empty'){
      newState.board[row+rowDir][column+colDir] = 'highlight'
      newState.canContinue = true
    }else{
      newState.canContinue = false
    }
  }else{
    newState.canContinue = false
  }
}
}



function moveToHighlight(newState, row, column, color){
  newState.board[newState.pieceBeforeMove.row][newState.pieceBeforeMove.column] = 'empty'


  NEWcapturePiece(newState, row, column, color)
  if(row === 0 && color === 'black')
  newState.board[row][column] = color + "king";
  else if(row === 7 && color === "red")
  newState.board[row][column] = color + "king";
  else
  newState.board[row][column] = newState.pieceBeforeMove.oldColor

  removeHighlight(newState)
  
if(newState.didCapture){
  let capColor1;
    let capColor2;

    switch(color){
      case 'red':
      capColor1 = 'black'
      capColor2 = 'blackking'
      break;
      case 'redking':
      capColor1 = 'black'
      capColor2 = 'blackking'
      break;
      case 'black':
      capColor1 = 'red'
      capColor2 = 'redking'
      break;
      case 'blackking':
      capColor1 = 'red'
      capColor2 = 'redking'
      break;
      default:
      break;
    }
    checkContinue(newState, color, capColor1, capColor2, row, column)
}
  if(newState.canContinue){


    newState.pieceBeforeMove.row = row
    newState.pieceBeforeMove.column = column


  }else{
    newState.didCapture = false
    newState.currentTurn = color === 'black'? 'RED' : 'BLACK';
  }

return newState
}



function checkContinue(newState, color, capColor1, capColor2, ogRow, ogCol){

  let moveColor = (color === 'black' || color ==='blackking')
  let moveMent = 0
  moveColor? moveMent = -1: moveMent= 1;
console.log(moveMent)
  if(newState.board[ogRow + moveMent]){
    
  let pieceOnLeft = newState.board[ogRow + moveMent][ogCol+1]
  let pieceOnRight = newState.board[ogRow + moveMent][ogCol-1]


    if(pieceOnLeft === capColor1 || pieceOnLeft === capColor2){
      pieceCaptureHighlight(newState, ogRow + moveMent, ogCol+1 , moveMent, 1, capColor1, capColor2)
    }else{
      newState.canContinue = false
    }
  if(pieceOnRight === capColor1 || pieceOnRight === capColor2){
    pieceCaptureHighlight(newState, ogRow + moveMent, ogCol-1 , moveMent, -1, capColor1, capColor2)

  }else{
    newState.canContinue = false
  }

  }else{
    newState.canContinue = false
  }

}


// FUNCTION TO CAPTURE A PIECE
function NEWcapturePiece(newState, row, column, color){
  
  if(newState.pieceBeforeMove.row - row === 2){
    findCaptureCol(newState, row+1, column, color ,row)
    // ROW TO BE CAPTURED WILL BE ROW-1
  }else if(newState.pieceBeforeMove.row - row === -2){
    findCaptureCol(newState, row-1, column, row)
    // ROW TO BE CAPTURED WIL BE ROW+1
  }else{
    newState.canContinue =  false
  }
}

function findCaptureCol(newState, row, column, orgColor, origRow){


  let color
  if(newState.pieceBeforeMove.column - column === 2){
    color = newState.board[row][column+1]
    if(color === 'red' || color ==='redking'){
      newState.red -=1
    }else if(color === 'black' || color ==='blackking'){
      newState.black -=1
    }
    newState.didCapture = true
    newState.board[row][column+1] = 'empty'
    // pieceCheckHighlight(newState, orgColor, capColor1, capColor2)

  }else if(newState.pieceBeforeMove.column - column === -2){
    // newState.pieceBeforeMove.column + 1
    color = newState.board[row][column-1]
    if(color === 'red' || color ==='redking'){
      newState.red -=1
    }else if(color === 'black' || color ==='blackking'){
      newState.black -=1
    }
    newState.didCapture = true
    newState.board[row][column-1] = 'empty'
    
  }else{
    newState.canContinue = false;
  }
}



