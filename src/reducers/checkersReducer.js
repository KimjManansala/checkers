const init = {
  a: [
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" }
  ],
  b: [
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" }
  ],
  c: [
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "red-piece" },
    { backgoundColor: "white", pieceColor: "" }
  ],
  d: [
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "" }
  ],
  e: [
    { backgoundColor: "grey", pieceColor: "" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "" },
    { backgoundColor: "white", pieceColor: "" }
  ],
  f: [
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" }
  ],
  g: [
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" }
  ],
  h: [
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" },
    { backgoundColor: "white", pieceColor: "" },
    { backgoundColor: "grey", pieceColor: "black-piece" }
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
