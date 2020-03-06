const pitesti = require('pitesti')
const tage = require('./index')
const { strictEqual: equal } = require('assert')

const test = pitesti()

function testFn (str, arg1, arg2) {
  return [str, arg1, arg2, this].join(' ')
}

const wrapped = tage(testFn)
const topThis = (function () { return this })()
const bop = {
  toString: () => 'bop',
  wrapped
}

test`function works as normal`(() => {
  equal(wrapped('foo', 'bar', 'baz'), 'foo bar baz ' + topThis)
})

test`function works as normal with context`(() => {
  equal(bop.wrapped('foo', 'bar', 'baz'), 'foo bar baz bop')
})

test`function works with template string`(() => {
  equal(wrapped`foo`('bar', 'baz'), 'foo bar baz ' + topThis)
})

test`function works with template string with context`(() => {
  equal(bop.wrapped`foo`('bar', 'baz'), 'foo bar baz bop')
})

test()
