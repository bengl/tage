# tage

[![js-standard-style](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)

**tage** will turn your functions into template tags.

Just take a function that has a string as its first argument, then pass it into
tage to get a function that works as a template tag, returning a new function.

The new function acts exactly as the old one as well, so you can use it both
ways.

> NOTE: This only works in environments that support template tags.

## Example

```js
var tage = require('tage')
var assert = require('assert')

function foo(str, arg1, arg2) {
  return str + arg1 + arg2
}

var tageFoo = tage(foo)

assert.equal(tageFoo('one', 'two', 'three'), 'onetwothree')
assert.equal(tageFoo `one` ('two', 'three'), 'onetwothree')
```

## License

See LICENSE.txt
