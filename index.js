// Write your solution here!


// First, we're going to create four arrays of pets. Define 4 `const` called:
// `append`, `prepend`, `removeLast` and `removeFirst`, and set all to an initial
// value of `["Milo", "Otis", "Garfield"]`. These are the `array`s that we'll work
// with for each exercise.

const append      =      ["Milo", "Otis", "Garfield"];
const prepend     =      ["Milo", "Otis", "Garfield"];
const removeLast  =      ["Milo", "Otis", "Garfield"];
const removeFirst =      ["Milo", "Otis", "Garfield"];



// 1. Append the pet "Odie" to the end of `append`.
append.push("Odie");

// 2. Prepend the pet "Odie" to the beginning of `prepend`.
prepend.unshift("Odie");

// 3. Remove the _last_ pet from `removeLast`.
removeLast.pop();
// 4. Remove the _first_ pet from `removeFirst`.
removeFirst.shift();
