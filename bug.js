function foo(a, b) {
  if (a === b) {
    return true;
  } else {
    return false; 
  }
}

console.log(foo(NaN, NaN)); // Output: false
console.log(NaN === NaN); // Output: false