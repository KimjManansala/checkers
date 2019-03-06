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

function checkHighlight(state) {
  for(let i = 0 ; i < state.length; i++){
    for(let j = 0; j <state[i].length; j++){
      if (state[i][j] === "highlight")return false
    }
  }
  return true

}

function movePiece(row, color, column, newState) {

  if(checkHighlight(newState)){
  switch (color) {
    case "black":
      if (column === 0) {
        newState[row - 1][column + 1] = "highlight";
        return newState;
      } else if (column === 7) {
        newState[row - 1][column - 1] = "highlight";
        return newState;
      } else {
        newState[row - 1][column - 1] = "highlight";
        newState[row - 1][column + 1] = "highlight";
        return newState;
      }
    default:
      return newState;
  }}else{
    return newState
  }
}
const checkerReducer = (state = initialBoard(), action) => {
  switch (action.type) {
    case "UPDATE":
      break;
    case "PIECE_MOVE":
      let newState = [...state];
      return movePiece(action.row, action.color, action.column, newState);
    default:
      return state;
  }
};

export default checkerReducer;
