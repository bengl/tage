/*
Copyright 2015, Yahoo Inc.
Code licensed under the MIT License.
See LICENSE.txt
*/
'use strict'

const slice = Array.prototype.slice

function wrap (orig) {
  return function () {
    if (Array.isArray(arguments[0])) {
      let self = this
      let firstArg = String.raw(arguments[0], slice.call(arguments, 1))
      return function () {
        let args = slice.call(arguments)
        args.unshift(firstArg)
        return orig.apply(self, args)
      }
    } else {
      return orig.apply(this, arguments)
    }
  }
}

module.exports = wrap
