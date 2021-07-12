'use strict'

function solveEquation(a, b, c) {

  let arr = [];
  let x1 = 0;
  let x2 = 0;
 
  let d = (b**b) - (4 * a * c); 
  
   if (d === 0) {
    x1 = -b / (2 * a);
    arr.unshift(x1);
  } else if (d > 0) {
    x1 = (-b + Math.sqrt(d) ) / (2 * a);
    x2 = (-b - Math.sqrt(d) ) / (2 * a);
     arr.unshift(x1, x2);
  }
  return arr;
}


