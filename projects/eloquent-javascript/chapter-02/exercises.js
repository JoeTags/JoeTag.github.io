
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) {
let i = 0;
let result = "";
while (i < num) {
  result += "#";
  console.log(result);
    i++;
}
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() {
 /* let num = 1;
  while (num <= 100) {
    if (num % 5 === 0 && num % 3 === 0) {
      console.log("fizzbuzz");
    } else if (num % 3 === 0) {
      console.log("fizz");
    } else if (num % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(num);
    }
    num++
  } */
   for (let i = 1; i <= 15; i++) {
       
            if (i % 3 === 0 && i % 5 === 0) {
           console.log('fizzbuzz');
         } else if (i % 3 === 0) {
           console.log('fizz');
             } else if (i % 5 === 0) {
            console.log('buzz');
              } else { 
            console.log(i);
            
        }
         
        } 
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(num) {
let chessboard = "";
let size = num;
for (let i = 0; i < size; i++) {
  for (let j = 0; j < size; j++) {
    if ((i + j) % 2 === 0) {
 chessboard += " ";
    } else {
    chessboard += "#";
  }
  }
 chessboard += "\n";
}
console.log(chessboard);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
