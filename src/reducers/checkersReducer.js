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

function testBoard(){
  return [
    ["red", null, "red", null, "blackking", null, "empty", null],
    [null, "red", null, "red", null, "red", null, "red"],
    ["red", null, "empty", null, "empty", null, "red", null],
    [null, "red", null, "red", null, "empty", null, "empty"],
    ["empty", null, "empty", null, "empty", null, "empty", null],
    [null, "red", null, "black", null, "black", null, "black"],
    ["blackking", null, "black", null, "black", null, "black", null],
    [null, "black", null, "black", null, "black", null, "black"]
  ];
}

// INITIAL STATE

const gameState = {
  currentTurn: "BLACK",
  board: initialBoard(),
  // board: testBoard(),
  red: 12,
  black: 12,
  winner: null,
  pieceBeforeMove: { row: 0, column: 0, oldColor: "black" },
  canContinue: false,
  showCapture: false,
  didCapture: false,
  redArr: [],
  blackArr: []
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
    case 'GET_RUNNING_GAME':
    return startRuningGame(newState, action.value)
    case 'RESTART_GAME':
    return gameState
    default:
      return state;
  }
};
export default checkerReducer;

function startRuningGame(newState, runningGame){
  newState = runningGame
  return newState

}

// currentTurn: "BLACK",
//   board: initialBoard(),
//   // board: testBoard(),
//   red: 12,
//   black: 12,
//   winner: null,
//   pieceBeforeMove: { row: 0, column: 0, oldColor: "black" },
//   canContinue: false,
//   showCapture: false,
//   didCapture: false,
//   redArr: [],
//   blackArr: []
// CHECK WINNER

function checkWinner(newState) {
  if (newState.red === 0) {
    newState.winner = "Black Is the winner!!";
    // return newState;
  } else if (newState.black === 0) {
    newState.winner = "Red Is the winner!!";
    // return newState;
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
    if(newState.pieceBeforeMove.row === row  && newState.pieceBeforeMove.column === column ){
      return removeHighlight(newState)
    }
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
  if(newState.pieceBeforeMove.row === row  && newState.pieceBeforeMove.column === column ){
    newState.pieceBeforeMove.row = null
    newState.pieceBeforeMove.column = null
    return removeHighlight(newState)
  }
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
    }
  }else{
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

    console.log('IT WILL CONTINUE')
    newState.pieceBeforeMove.row = row
    newState.pieceBeforeMove.column = column


  }else{

    newState.didCapture = false
    newState.currentTurn = color === 'black'? 'RED' : 'BLACK';
  }

return newState
}



function checkContinue(newState, color, capColor1, capColor2, ogRow, ogCol){
  let show1;
    let show2;

  let moveColor = (color === 'black' || color ==='blackking')
  let moveMent = 0
  moveColor? moveMent = -1: moveMent= 1;

  if(newState.board[ogRow + moveMent]){
    
  let pieceOnLeft = newState.board[ogRow + moveMent][ogCol+1]
  let pieceOnRight = newState.board[ogRow + moveMent][ogCol-1]

  // newState.board[row+rowDir][column+colDir] === 'empty'    
  // pieceCaptureHighlight(newState, row, column, rowDir, colDir, capColor1, capColor2)
  console.log('This is the ogRow', ogRow)
  console.log('This is line 374', ogRow + moveMent+moveMent, ogCol+1+1)
    if(newState.board[ogRow + moveMent+moveMent]){
        if((pieceOnLeft === capColor1 || pieceOnLeft === capColor2) && newState.board[ogRow + moveMent+moveMent][ogCol+1+1] === 'empty'){
          pieceCaptureHighlight(newState, ogRow + moveMent, ogCol+1 , moveMent, 1, capColor1, capColor2)
        }else{
          show1 = true
        }
      if((pieceOnRight === capColor1 || pieceOnRight === capColor2) && newState.board[ogRow + moveMent+moveMent][ogCol-1-1] === 'empty'){
        pieceCaptureHighlight(newState, ogRow + moveMent, ogCol-1 , moveMent, -1, capColor1, capColor2)
      }else{
        show2 = true
      }
      console.log(show1, show2,false && false)
      if(show1 && show2){
        newState.canContinue = false
      }
      
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
      newState.redArr.push({color:'red'})
    }else if(color === 'black' || color ==='blackking'){
      newState.black -=1
      newState.blackArr.push({color:'black'})
    }
    newState.didCapture = true
    checkWinner(newState)
    newState.board[row][column+1] = 'empty'
    // pieceCheckHighlight(newState, orgColor, capColor1, capColor2)

  }else if(newState.pieceBeforeMove.column - column === -2){
    // newState.pieceBeforeMove.column + 1
    color = newState.board[row][column-1]
    if(color === 'red' || color ==='redking'){
      newState.red -=1
      newState.redArr.push({color:'red'})
    }else if(color === 'black' || color ==='blackking'){
      newState.black -=1
      newState.blackArr.push({color:'black'})
    }
    newState.didCapture = true
    newState.board[row][column-1] = 'empty'
    checkWinner(newState)
  }else{
    newState.canContinue = false;
  }
}



