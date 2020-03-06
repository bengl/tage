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
  wrapped: wrapped
}
const p = fn => Promise.resolve().then(fn)

test`function works as normal`(p(() => {
  equal(wrapped('foo', 'bar', 'baz'), 'foo bar baz ' + topThis)
}))

test`function works as normal with context`(p(() => {
  equal(bop.wrapped('foo', 'bar', 'baz'), 'foo bar baz bop')
}))

test`function works with template string`(p(() => {
  equal(wrapped`foo`('bar', 'baz'), 'foo bar baz ' + topThis)
}))

test`function works with template string with context`(p(() => {
  equal(bop.wrapped`foo`('bar', 'baz'), 'foo bar baz bop')
}))

test()
