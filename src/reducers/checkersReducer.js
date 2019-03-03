const init = {
  0: [
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" }
  ],
  1: [
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" }
  ],
  2: [
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"}
  ],
  3: [
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" }
  ],
  4: [
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"}
  ],
  5: [
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" }
  ],
  6: [
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"}
  ],
  7: [
    {  backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {  backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {  backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {  backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" }
  ]
};

const checkerReducer = (state = init, action) => {
  switch (action.type) {
    case "UPDATE":
      break;
    default:
      return state;
  }
};

export default checkerReducer;
