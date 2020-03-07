/*
Copyright 2015, Yahoo Inc.
Code licensed under the MIT License.
See LICENSE.txt
*/
'use strict'

function isTemplateArgs (arg0) {
  return Array.isArray(arg0) && Array.isArray(arg0.raw)
}
module.exports = orig => function (str, ...subs) {
  if (isTemplateArgs(str)) {
    return (...args) => orig.call(this, String.raw(str, ...subs), ...args)
  } else {
    return orig.apply(this, arguments)
  }
}
