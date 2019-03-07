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
<!-- [Space Balls](http://paigeniedringhaus.com/spaceBalls/) -->
Link will be uploaded shortly

##Link to Video of Gameplay
---
<!-- <a href="https://www.youtube.com/watch?v=_gJCeyrkUkM" target="_blank"><img src="http://img.youtube.com/vi/_gJCeyrkUkM/0.jpg" width="240" height="180" border="10" /></a> -->

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
  * Challenge #1: Creating checks if User ate a piece
    I create a function that checks if the player is able to eat a player. As of right now the player can skip over it but I need to create checks if the user did choose to eat the piece.

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
<!-- Home Screen
![screen shot 2019-02-12 at 3 27 42 pm](https://user-images.githubusercontent.com/40606399/53651563-862ed100-3c0c-11e9-9b6c-c817c4fd6057.png) -->




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
  winnder: null,
  pieceBeforeMove: {row: 0, column: 0}
};


```
