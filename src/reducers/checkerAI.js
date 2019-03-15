


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