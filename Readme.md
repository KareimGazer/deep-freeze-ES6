# deep-freeze-ES6

recursively `Object.freeze()` objects

[![build status](https://secure.travis-ci.org/substack/deep-freeze.png)](http://travis-ci.org/substack/deep-freeze)

# Examples

see `deepFreeze.test.js`

## deepFreeze(obj)

Calls `Object.freeze(obj)` recursively on all unfrozen properties of `obj` that
are functions or objects.