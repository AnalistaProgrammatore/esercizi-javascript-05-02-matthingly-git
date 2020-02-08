/**
* Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
* At each position of the grid there is either a space or a "#" character. 
* The characters should form a chessboard.
*/

let board = "";
let size = 8;
for (var j = 0; j < size; j++) {

  for (var i = 0; i < size; i++) {

    if (j % 2 === 0) {
      if (i === size - 1) {
        board += "\n";
      } else if (board.length % 2 === 0) {
        board += "#";
      } else {
        board += " ";
      }
    } else {
      if (i === size - 1) {
        board += "\n";
      } else if (board.length % 2 === 0) {
        board += " ";
      } else {
        board += "#";
      }
    }

  }

}
console.log(board);