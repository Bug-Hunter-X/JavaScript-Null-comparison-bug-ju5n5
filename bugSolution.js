function foo(a, b) {
  if (a === null && b === null) {
    return 0;
  }
  return a + b;
}

console.log(foo(null, 5)); // Output: NaN
console.log(foo(5, null)); // Output: NaN
console.log(foo(null, null)); // Output: 0
console.log(foo(5, 5)); // Output: 10