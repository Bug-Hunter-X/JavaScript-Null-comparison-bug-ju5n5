# JavaScript Null Comparison Bug

This repository demonstrates a common, yet subtle, bug in JavaScript related to null value comparisons.

## The Bug
The provided `foo` function aims to return 0 only when both input parameters (`a` and `b`) are null.  However, due to loose comparison in JavaScript, it incorrectly returns 0 if *either* parameter is null.

## The Solution
The solution addresses this by using strict equality (`===`) to explicitly check if both parameters are null, preventing the unintended behavior. 

## How to run
1. Clone the repository.
2. Open `bug.js` and `bugSolution.js` to observe the bug and its fix, respectively.  You can run these files using any JavaScript runtime or browser's developer console.
