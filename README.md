# Unexpected NaN Comparison in JavaScript
This repository demonstrates a common yet subtle bug in JavaScript related to comparing NaN (Not a Number) values using the loose equality operator (==).

## The Problem
In JavaScript, NaN is a special value representing an undefined or unrepresentable numerical result.  A unique characteristic of NaN is that it is not equal to itself.  Using the loose equality operator (==) to compare NaN to another NaN value will always result in 'false'.  This often causes unexpected behavior in programs.

## Example
The file `bug.js` shows how comparing NaN to itself using '==' yields 'false', which contradicts the expectation.

## Solution
The solution is to use the `Number.isNaN()` function which correctly identifies NaN values. The corrected code is presented in `bugSolution.js`