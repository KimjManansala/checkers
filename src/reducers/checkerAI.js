



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
console.log(
    `
    1: 1-0-3-0-5-0-7-0
    2: 0-2-0-4-0-6-0-8
    3: 1-0-3-0-5-0-7-0
    4: 0-2-0-4-0-6-0-8
    5: 1-0-3-0-5-0-7-0
    6: 0-2-0-4-0-6-0-8
    7: 1-0-3-0-5-0-7-0
    8: 0-2-0-4-0-6-0-8    
    `
)

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
    switch(action.type){



        default: 
        return newState
    }
  }

export default checkerReducer

// THIS WILL BE THE CHECKERS AI FOR RED PLAYER
scanBoard(gameState)
function scanBoard(newState){

    // FUNCTION TO CHECK WHICH PIECE IS VALID TO MOVE
    let redPieces =[]
    for(let i = 0; i < newState.board.length; i++){
        for(let j =0; j <newState.board[i].length; j++){
            if(newState.board[i][j] === 'red'){
                redPieces.push({row: i, column: j})
            }
        }

    }
    console.log(redPieces)
    canPieceMove(newState, redPieces)
}
function canPieceMove(newState, reddPieces){
    let possibleMoves = []
    reddPieces.forEach(elm=>{
        if(newState.board[elm.row+1]){

        }

    })
}

function checkNextColumn(newState, row, column){
    if(newState.board[row][column+1] === 'empty'){
        newState.board[row][column+1] = 'highlight'
    }
    if(newState.board[row][column-1] === 'empty'){
        newState.board[row][column-1] = 'highlight'
    }
}