function square(x) {
    return x * x;
  }
  
  function squareRoot(x) {
    return Math.sqrt(x);
  }
  
  function distance(x1, y1, x2, y2) {
    return squareRoot(square(x2 - x1) + square(y2 - y1));
  }
  
  // Export the distance function
  module.exports = { distance };
  