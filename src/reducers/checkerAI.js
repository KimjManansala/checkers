



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



// THIS WILL BE THE CHECKERS AI FOR RED PLAYER

function scanBoard(newState){
    // FUNCTION TO CHECK WHICH PIECE IS VALID TO MOVE
    let redPieces =[]
    for(let i = 0; i < newState.board; i++){
        for(let j = 0; j < newState.board[i]; i++){
            if(newState.board[i][j] === 'red'){
                redPieces.push({row: i, column: j})
            }
        }
    }

}
function canPieceMove(reddPieces){

}