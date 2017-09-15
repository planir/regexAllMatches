# (⚫➕❓) regexAllMatches
[![Donate](https://cdn.rawgit.com/planir/fcb70b10c97f788c15280d42eacb9bb5/raw/e7f003585ced9ae9f55e69710d77121a168ce3cb/dnota.svg)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QM58HNRZZN238)

regexAllMatches is a simple module that works to get all matches of a regular expression

# ◼ Installation
```
npm install regexallmatches --save
```
# 📋 Usage

### ```regexAllMatches(string, regex)```;

####  __Params__
- __string__ - String to which matches will be searched
- __regex__  - Regex object or a string with a valid regex expression


```javascript 
const regexAllMatches = require("regexallmatches");

regexAllMatches("planir", /^[a-z0-9_-]{3,16}$/);

/** =>
 * {
 *     regex: /^[a-z0-9_-]{3,16}$/, 
 *     string: 'planir',
 *     groups: {'0': [ 'planir' ]}
 * }
 */
 
// Multiple matches
regexAllMatches("uno dos tres", /[a-z]+/g)

/** =>
 * {
 *     regex: /[a-z]+/g, 
 *     string: 'uno dos tres',
 *     groups: { '0': [ 'uno', 'dos', 'tres' ] }
 * }
 */ 
 
 /**
 * Digits allowed to username
 * @var Number between_digits
 */
var between_digits = "3,16";

// You can pass a string on the second argument and a third argument in the function to indicate the flags
regexAllMatches("marcos8", '^[a-z0-9_-]{' + between_digits + '}$', 'g').groups);

// => { '0': [ 'marcos8' ] }
```

## 💖 Donations
####  Soon I will be creating other modules that will help them improve their code, I would really appreciate it if they helped me by donating