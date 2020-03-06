/*
Copyright 2015, Yahoo Inc.
Code licensed under the MIT License.
See LICENSE.txt
*/
'use strict'

module.exports = orig => function (str, ...subs) {
  if (Array.isArray(str)) {
    return (...args) => orig.call(this, String.raw(str, ...subs), ...args)
  } else {
    return orig.apply(this, arguments)
  }
}
