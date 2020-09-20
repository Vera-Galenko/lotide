# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @vera/lotide`

**Require it:**

`const _ = require('@vera/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `countLetters(...)`: (string): Given a string of letters, it returns an object with the number of occurrences for each.
* `countOnly(allItems, itemsToCount)`: Given an object and a list of values, it returns the number of occurrences of each.
* `eqArrays(first, second)`: Tests if two arrays are the same.
* `eqObjects(object1, object2)`: Tests if two objects are the same.
* `findKey(items, callback)`: Given an object and a callback, it returns the key associated with it.
* `findKeyByValue(items, value)`: Given an object and a value, it returns the key associated with it.
* `head(array)`: Given an array, it returns the first element.
* `letterPositions(sentence)`: Given a string, it returns an object with an array of positions for each.
* `map(array, callback)`: Given an array and a callback function, it returns an array with the callback applied.
* `middle(arr)`: Returns the middle element of an array. If the array is even, it will return both middle ones. If the array is odd it will return the middle one.
* `tail(words)`: Returns the last element of an array.
* `takeUntil(array, callback)`: Given an array and a callback function, it returns all elements up to a match.
* `without(arr, word)`: Given an array and an exclusion list, returns a new array without excluded elements.
