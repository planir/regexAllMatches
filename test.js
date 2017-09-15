const regexAllMatches = require("./index");

// Object returned
console.log(regexAllMatches("uno dos tres", /[a-z]+/g).groups);
// Get regular expression
console.log(regexAllMatches("planir", /^[a-z0-9_-]{3,16}$/));
// Get string
console.log(regexAllMatches("planir", /^[a-z0-9_-]{3,16}$/).string);

console.log("------------------");

/**
 * Digits allowed to username
 * @var Number between_digits
 */
var between_digits = "3,16";

// You can pass a string on the second argument and a third argument in the function to indicate the flags
console.log(regexAllMatches("marcos8", '^[a-z0-9_-]{' + between_digits + '}$', 'g').groups);
console.log(regexAllMatches("marcos8", '^[a-z0-9_-]{' + between_digits + '}$', 'g').regex);

console.log("------------------");

console.log(regexAllMatches("albert11", '^[a-z0-9_-]{' + between_digits + '}$', ['g', 'i']).groups);
console.log(regexAllMatches("albert11", '^[a-z0-9_-]{' + between_digits + '}$', ['g', 'i']).regex);

console.log("------------------");

