const assertEqual = require('../assertEqual');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
assertEqual(assertArraysEqual(middle([1]), []), true);
assertEqual(assertArraysEqual(middle([1, 2]), []), true);
assertEqual(assertArraysEqual(middle([1, 2, 5, 7]), [2, 5]), true); 
assertEqual(assertArraysEqual(middle([1, 2, 5, 7, 8, 9, 8, 9]), [ 7, 8 ]), true);
assertEqual(assertArraysEqual(middle([1, 2, 5, 7, 6]), [ 5 ]), true);