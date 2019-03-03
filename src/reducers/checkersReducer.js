const init = {
  a: [
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" }
  ],
  b: [
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" }
  ],
  c: [
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "red-piece" },
    {backgoundColor: "white"}
  ],
  d: [
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white" },
    { lightup: false, backgoundColor: "grey", pieceColor: "" }
  ],
  e: [
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "" },
    {backgoundColor: "white"}
  ],
  f: [
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" }
  ],
  g: [
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"},
    { lightup: false, backgoundColor: "grey", pieceColor: "black-piece" },
    {backgoundColor: "white"}
  ],
  h: [
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
