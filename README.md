# Checkers

Checkers is a ReactJS project that will test and refine my skills with React and Redux



<!-- ## Built With -->




## Authors

* **Kim Jasper Manansala** - *Initial work* - [github](https://github.com/KimjManansala)



## License



# Checkers
---

##Live Demo
---

[CHECKERS](https://kimjmanansala.github.io/checkers/)


##Link to Video of Gameplay
---
<a href="https://youtu.be/fFZmwCUExnI" target="_blank"><img src="https://user-images.githubusercontent.com/40606399/54618573-3e43e280-4a31-11e9-96fd-08fdc8d7273c.png" width="240" height="180" border="10" /></a>

Will be uploaded shortly

##Contents
--- 
 * What It Is
  * What We Used
  * Challenges and Solutions
  * Our Stretch Goals
  * Authors
  * Screenshots
  * Github Link

##What It Is
---
This is a React Project to refine my skills using React and Redux. This is a simple checkers game to practice logic.

##What We Used
---
  * HTML5
  * CSS3
  * JavaScript
  * ReactJS
  * Redux

##Challenges and Solutions
---
Simple checkers game

  * Challenge #1: Game checks
    Creating a game is very complex especially with all the possibilities the user can do. I am creating checks for checkers that are pure functions.
  * Challenge #2: Creating checks if User captured a piece
    I create a function that checks if the player is able to captured a player. As of right now the player can skip over it but I need to create checks if the user did choose to eat the piece.
  * Chlallenge # 3: Creating multiple jumps
    After being able to capture a piece I had to create a way to check if I can capture another piece again.
  More challenges to come as I continue to program



##Our Stretch Goals
--
  *Create an AI for single player use

##Authors
---
  * [KimJ Manansala](https://github.com/KimjManansala)

##Github Link
---
[Github](https://github.com/KimjManansala/checkers)

##Screenshots
---
Coming soon
Home Screen
![Screen Shot 2019-03-19 at 10 18 56 AM](https://user-images.githubusercontent.com/40606399/54618573-3e43e280-4a31-11e9-96fd-08fdc8d7273c.png)

Selecting piece to move
![Screen Shot 2019-03-19 at 10 19 13 AM](https://user-images.githubusercontent.com/40606399/54618618-51ef4900-4a31-11e9-87e3-b01f61177db6.png)

King a piece
![Screen Shot 2019-03-19 at 10 19 45 AM](https://user-images.githubusercontent.com/40606399/54618669-66334600-4a31-11e9-8156-d57af17b3fe5.png)

Winning the game
![Screen Shot 2019-03-19 at 10 21 16 AM](https://user-images.githubusercontent.com/40606399/54618699-73e8cb80-4a31-11e9-8d25-2f37b026394f.png)



##Code Examples
---
Comming soon

This is my original State for the checkers board.

```javascript
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
  player: "Black's Turn",
  board: initialBoard(),
  redPiece: 12,
  blackPiece: 12,
  winner: null,
  pieceBeforeMove: {row: 0, column: 0}
};


```
