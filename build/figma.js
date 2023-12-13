/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/base64-js/index.js":
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),

/***/ "./node_modules/buffer/index.js":
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



const base64 = __webpack_require__(/*! base64-js */ "./node_modules/base64-js/index.js")
const ieee754 = __webpack_require__(/*! ieee754 */ "./node_modules/ieee754/index.js")
const customInspectSymbol =
  (typeof Symbol === 'function' && typeof Symbol['for'] === 'function') // eslint-disable-line dot-notation
    ? Symbol['for']('nodejs.util.inspect.custom') // eslint-disable-line dot-notation
    : null

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

const K_MAX_LENGTH = 0x7fffffff
exports.kMaxLength = K_MAX_LENGTH

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Print warning and recommend using `buffer` v4.x which has an Object
 *               implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * We report that the browser does not support typed arrays if the are not subclassable
 * using __proto__. Firefox 4-29 lacks support for adding new properties to `Uint8Array`
 * (See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438). IE 10 lacks support
 * for __proto__ and has a buggy typed array implementation.
 */
Buffer.TYPED_ARRAY_SUPPORT = typedArraySupport()

if (!Buffer.TYPED_ARRAY_SUPPORT && typeof console !== 'undefined' &&
    typeof console.error === 'function') {
  console.error(
    'This browser lacks typed array (Uint8Array) support which is required by ' +
    '`buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
  )
}

function typedArraySupport () {
  // Can typed array instances can be augmented?
  try {
    const arr = new Uint8Array(1)
    const proto = { foo: function () { return 42 } }
    Object.setPrototypeOf(proto, Uint8Array.prototype)
    Object.setPrototypeOf(arr, proto)
    return arr.foo() === 42
  } catch (e) {
    return false
  }
}

Object.defineProperty(Buffer.prototype, 'parent', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.buffer
  }
})

Object.defineProperty(Buffer.prototype, 'offset', {
  enumerable: true,
  get: function () {
    if (!Buffer.isBuffer(this)) return undefined
    return this.byteOffset
  }
})

function createBuffer (length) {
  if (length > K_MAX_LENGTH) {
    throw new RangeError('The value "' + length + '" is invalid for option "size"')
  }
  // Return an augmented `Uint8Array` instance
  const buf = new Uint8Array(length)
  Object.setPrototypeOf(buf, Buffer.prototype)
  return buf
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new TypeError(
        'The "string" argument must be of type string. Received type number'
      )
    }
    return allocUnsafe(arg)
  }
  return from(arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

function from (value, encodingOrOffset, length) {
  if (typeof value === 'string') {
    return fromString(value, encodingOrOffset)
  }

  if (ArrayBuffer.isView(value)) {
    return fromArrayView(value)
  }

  if (value == null) {
    throw new TypeError(
      'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
      'or Array-like Object. Received type ' + (typeof value)
    )
  }

  if (isInstance(value, ArrayBuffer) ||
      (value && isInstance(value.buffer, ArrayBuffer))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof SharedArrayBuffer !== 'undefined' &&
      (isInstance(value, SharedArrayBuffer) ||
      (value && isInstance(value.buffer, SharedArrayBuffer)))) {
    return fromArrayBuffer(value, encodingOrOffset, length)
  }

  if (typeof value === 'number') {
    throw new TypeError(
      'The "value" argument must not be of type number. Received type number'
    )
  }

  const valueOf = value.valueOf && value.valueOf()
  if (valueOf != null && valueOf !== value) {
    return Buffer.from(valueOf, encodingOrOffset, length)
  }

  const b = fromObject(value)
  if (b) return b

  if (typeof Symbol !== 'undefined' && Symbol.toPrimitive != null &&
      typeof value[Symbol.toPrimitive] === 'function') {
    return Buffer.from(value[Symbol.toPrimitive]('string'), encodingOrOffset, length)
  }

  throw new TypeError(
    'The first argument must be one of type string, Buffer, ArrayBuffer, Array, ' +
    'or Array-like Object. Received type ' + (typeof value)
  )
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(value, encodingOrOffset, length)
}

// Note: Change prototype *after* Buffer.from is defined to workaround Chrome bug:
// https://github.com/feross/buffer/pull/148
Object.setPrototypeOf(Buffer.prototype, Uint8Array.prototype)
Object.setPrototypeOf(Buffer, Uint8Array)

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be of type number')
  } else if (size < 0) {
    throw new RangeError('The value "' + size + '" is invalid for option "size"')
  }
}

function alloc (size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpreted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(size).fill(fill, encoding)
      : createBuffer(size).fill(fill)
  }
  return createBuffer(size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(size, fill, encoding)
}

function allocUnsafe (size) {
  assertSize(size)
  return createBuffer(size < 0 ? 0 : checked(size) | 0)
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(size)
}

function fromString (string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('Unknown encoding: ' + encoding)
  }

  const length = byteLength(string, encoding) | 0
  let buf = createBuffer(length)

  const actual = buf.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    buf = buf.slice(0, actual)
  }

  return buf
}

function fromArrayLike (array) {
  const length = array.length < 0 ? 0 : checked(array.length) | 0
  const buf = createBuffer(length)
  for (let i = 0; i < length; i += 1) {
    buf[i] = array[i] & 255
  }
  return buf
}

function fromArrayView (arrayView) {
  if (isInstance(arrayView, Uint8Array)) {
    const copy = new Uint8Array(arrayView)
    return fromArrayBuffer(copy.buffer, copy.byteOffset, copy.byteLength)
  }
  return fromArrayLike(arrayView)
}

function fromArrayBuffer (array, byteOffset, length) {
  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('"offset" is outside of buffer bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('"length" is outside of buffer bounds')
  }

  let buf
  if (byteOffset === undefined && length === undefined) {
    buf = new Uint8Array(array)
  } else if (length === undefined) {
    buf = new Uint8Array(array, byteOffset)
  } else {
    buf = new Uint8Array(array, byteOffset, length)
  }

  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(buf, Buffer.prototype)

  return buf
}

function fromObject (obj) {
  if (Buffer.isBuffer(obj)) {
    const len = checked(obj.length) | 0
    const buf = createBuffer(len)

    if (buf.length === 0) {
      return buf
    }

    obj.copy(buf, 0, 0, len)
    return buf
  }

  if (obj.length !== undefined) {
    if (typeof obj.length !== 'number' || numberIsNaN(obj.length)) {
      return createBuffer(0)
    }
    return fromArrayLike(obj)
  }

  if (obj.type === 'Buffer' && Array.isArray(obj.data)) {
    return fromArrayLike(obj.data)
  }
}

function checked (length) {
  // Note: cannot use `length < K_MAX_LENGTH` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= K_MAX_LENGTH) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + K_MAX_LENGTH.toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return b != null && b._isBuffer === true &&
    b !== Buffer.prototype // so Buffer.isBuffer(Buffer.prototype) will be false
}

Buffer.compare = function compare (a, b) {
  if (isInstance(a, Uint8Array)) a = Buffer.from(a, a.offset, a.byteLength)
  if (isInstance(b, Uint8Array)) b = Buffer.from(b, b.offset, b.byteLength)
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError(
      'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
    )
  }

  if (a === b) return 0

  let x = a.length
  let y = b.length

  for (let i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!Array.isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  let i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  const buffer = Buffer.allocUnsafe(length)
  let pos = 0
  for (i = 0; i < list.length; ++i) {
    let buf = list[i]
    if (isInstance(buf, Uint8Array)) {
      if (pos + buf.length > buffer.length) {
        if (!Buffer.isBuffer(buf)) buf = Buffer.from(buf)
        buf.copy(buffer, pos)
      } else {
        Uint8Array.prototype.set.call(
          buffer,
          buf,
          pos
        )
      }
    } else if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    } else {
      buf.copy(buffer, pos)
    }
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (ArrayBuffer.isView(string) || isInstance(string, ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    throw new TypeError(
      'The "string" argument must be one of type string, Buffer, or ArrayBuffer. ' +
      'Received type ' + typeof string
    )
  }

  const len = string.length
  const mustMatch = (arguments.length > 2 && arguments[2] === true)
  if (!mustMatch && len === 0) return 0

  // Use a for loop to avoid recursion
  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) {
          return mustMatch ? -1 : utf8ToBytes(string).length // assume utf8
        }
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  let loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coercion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// This property is used by `Buffer.isBuffer` (and the `is-buffer` npm package)
// to detect a Buffer instance. It's not possible to use `instanceof Buffer`
// reliably in a browserify context because there could be multiple different
// copies of the 'buffer' package in use. This method works even for Buffer
// instances that were created from another copy of the `buffer` package.
// See: https://github.com/feross/buffer/issues/154
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  const i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  const len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (let i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  const len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (let i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  const len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (let i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  const length = this.length
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.toLocaleString = Buffer.prototype.toString

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  let str = ''
  const max = exports.INSPECT_MAX_BYTES
  str = this.toString('hex', 0, max).replace(/(.{2})/g, '$1 ').trim()
  if (this.length > max) str += ' ... '
  return '<Buffer ' + str + '>'
}
if (customInspectSymbol) {
  Buffer.prototype[customInspectSymbol] = Buffer.prototype.inspect
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (isInstance(target, Uint8Array)) {
    target = Buffer.from(target, target.offset, target.byteLength)
  }
  if (!Buffer.isBuffer(target)) {
    throw new TypeError(
      'The "target" argument must be one of type Buffer or Uint8Array. ' +
      'Received type ' + (typeof target)
    )
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  let x = thisEnd - thisStart
  let y = end - start
  const len = Math.min(x, y)

  const thisCopy = this.slice(thisStart, thisEnd)
  const targetCopy = target.slice(start, end)

  for (let i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset // Coerce to Number.
  if (numberIsNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [val], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  let indexSize = 1
  let arrLength = arr.length
  let valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  let i
  if (dir) {
    let foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      let found = true
      for (let j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  const remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  const strLen = string.length

  if (length > strLen / 2) {
    length = strLen / 2
  }
  let i
  for (i = 0; i < length; ++i) {
    const parsed = parseInt(string.substr(i * 2, 2), 16)
    if (numberIsNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset >>> 0
    if (isFinite(length)) {
      length = length >>> 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  const remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  let loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
      case 'latin1':
      case 'binary':
        return asciiWrite(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  const res = []

  let i = start
  while (i < end) {
    const firstByte = buf[i]
    let codePoint = null
    let bytesPerSequence = (firstByte > 0xEF)
      ? 4
      : (firstByte > 0xDF)
          ? 3
          : (firstByte > 0xBF)
              ? 2
              : 1

    if (i + bytesPerSequence <= end) {
      let secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
const MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  const len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  let res = ''
  let i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  let ret = ''
  end = Math.min(buf.length, end)

  for (let i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  const len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  let out = ''
  for (let i = start; i < end; ++i) {
    out += hexSliceLookupTable[buf[i]]
  }
  return out
}

function utf16leSlice (buf, start, end) {
  const bytes = buf.slice(start, end)
  let res = ''
  // If bytes.length is odd, the last 8 bits must be ignored (same as node.js)
  for (let i = 0; i < bytes.length - 1; i += 2) {
    res += String.fromCharCode(bytes[i] + (bytes[i + 1] * 256))
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  const len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  const newBuf = this.subarray(start, end)
  // Return an augmented `Uint8Array` instance
  Object.setPrototypeOf(newBuf, Buffer.prototype)

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUintLE =
Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUintBE =
Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  let val = this[offset + --byteLength]
  let mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUint8 =
Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUint16LE =
Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUint16BE =
Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUint32LE =
Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUint32BE =
Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readBigUInt64LE = defineBigIntMethod(function readBigUInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const lo = first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24

  const hi = this[++offset] +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    last * 2 ** 24

  return BigInt(lo) + (BigInt(hi) << BigInt(32))
})

Buffer.prototype.readBigUInt64BE = defineBigIntMethod(function readBigUInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const hi = first * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  const lo = this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last

  return (BigInt(hi) << BigInt(32)) + BigInt(lo)
})

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let val = this[offset]
  let mul = 1
  let i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  let i = byteLength
  let mul = 1
  let val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 2, this.length)
  const val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readBigInt64LE = defineBigIntMethod(function readBigInt64LE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = this[offset + 4] +
    this[offset + 5] * 2 ** 8 +
    this[offset + 6] * 2 ** 16 +
    (last << 24) // Overflow

  return (BigInt(val) << BigInt(32)) +
    BigInt(first +
    this[++offset] * 2 ** 8 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 24)
})

Buffer.prototype.readBigInt64BE = defineBigIntMethod(function readBigInt64BE (offset) {
  offset = offset >>> 0
  validateNumber(offset, 'offset')
  const first = this[offset]
  const last = this[offset + 7]
  if (first === undefined || last === undefined) {
    boundsError(offset, this.length - 8)
  }

  const val = (first << 24) + // Overflow
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    this[++offset]

  return (BigInt(val) << BigInt(32)) +
    BigInt(this[++offset] * 2 ** 24 +
    this[++offset] * 2 ** 16 +
    this[++offset] * 2 ** 8 +
    last)
})

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  offset = offset >>> 0
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUintLE =
Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let mul = 1
  let i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUintBE =
Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  byteLength = byteLength >>> 0
  if (!noAssert) {
    const maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  let i = byteLength - 1
  let mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUint8 =
Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeUint16LE =
Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeUint16BE =
Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeUint32LE =
Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset + 3] = (value >>> 24)
  this[offset + 2] = (value >>> 16)
  this[offset + 1] = (value >>> 8)
  this[offset] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeUint32BE =
Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

function wrtBigUInt64LE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  lo = lo >> 8
  buf[offset++] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  hi = hi >> 8
  buf[offset++] = hi
  return offset
}

function wrtBigUInt64BE (buf, value, offset, min, max) {
  checkIntBI(value, min, max, buf, offset, 7)

  let lo = Number(value & BigInt(0xffffffff))
  buf[offset + 7] = lo
  lo = lo >> 8
  buf[offset + 6] = lo
  lo = lo >> 8
  buf[offset + 5] = lo
  lo = lo >> 8
  buf[offset + 4] = lo
  let hi = Number(value >> BigInt(32) & BigInt(0xffffffff))
  buf[offset + 3] = hi
  hi = hi >> 8
  buf[offset + 2] = hi
  hi = hi >> 8
  buf[offset + 1] = hi
  hi = hi >> 8
  buf[offset] = hi
  return offset + 8
}

Buffer.prototype.writeBigUInt64LE = defineBigIntMethod(function writeBigUInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeBigUInt64BE = defineBigIntMethod(function writeBigUInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, BigInt(0), BigInt('0xffffffffffffffff'))
})

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = 0
  let mul = 1
  let sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    const limit = Math.pow(2, (8 * byteLength) - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  let i = byteLength - 1
  let mul = 1
  let sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  this[offset] = (value >>> 8)
  this[offset + 1] = (value & 0xff)
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  this[offset] = (value & 0xff)
  this[offset + 1] = (value >>> 8)
  this[offset + 2] = (value >>> 16)
  this[offset + 3] = (value >>> 24)
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  this[offset] = (value >>> 24)
  this[offset + 1] = (value >>> 16)
  this[offset + 2] = (value >>> 8)
  this[offset + 3] = (value & 0xff)
  return offset + 4
}

Buffer.prototype.writeBigInt64LE = defineBigIntMethod(function writeBigInt64LE (value, offset = 0) {
  return wrtBigUInt64LE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

Buffer.prototype.writeBigInt64BE = defineBigIntMethod(function writeBigInt64BE (value, offset = 0) {
  return wrtBigUInt64BE(this, value, offset, -BigInt('0x8000000000000000'), BigInt('0x7fffffffffffffff'))
})

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  value = +value
  offset = offset >>> 0
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!Buffer.isBuffer(target)) throw new TypeError('argument should be a Buffer')
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('Index out of range')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  const len = end - start

  if (this === target && typeof Uint8Array.prototype.copyWithin === 'function') {
    // Use built-in when available, missing from IE11
    this.copyWithin(targetStart, start, end)
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, end),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
    if (val.length === 1) {
      const code = val.charCodeAt(0)
      if ((encoding === 'utf8' && code < 128) ||
          encoding === 'latin1') {
        // Fast path: If `val` fits into a single byte, use that numeric value.
        val = code
      }
    }
  } else if (typeof val === 'number') {
    val = val & 255
  } else if (typeof val === 'boolean') {
    val = Number(val)
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  let i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    const bytes = Buffer.isBuffer(val)
      ? val
      : Buffer.from(val, encoding)
    const len = bytes.length
    if (len === 0) {
      throw new TypeError('The value "' + val +
        '" is invalid for argument "value"')
    }
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// CUSTOM ERRORS
// =============

// Simplified versions from Node, changed for Buffer-only usage
const errors = {}
function E (sym, getMessage, Base) {
  errors[sym] = class NodeError extends Base {
    constructor () {
      super()

      Object.defineProperty(this, 'message', {
        value: getMessage.apply(this, arguments),
        writable: true,
        configurable: true
      })

      // Add the error code to the name to include it in the stack trace.
      this.name = `${this.name} [${sym}]`
      // Access the stack to generate the error message including the error code
      // from the name.
      this.stack // eslint-disable-line no-unused-expressions
      // Reset the name to the actual name.
      delete this.name
    }

    get code () {
      return sym
    }

    set code (value) {
      Object.defineProperty(this, 'code', {
        configurable: true,
        enumerable: true,
        value,
        writable: true
      })
    }

    toString () {
      return `${this.name} [${sym}]: ${this.message}`
    }
  }
}

E('ERR_BUFFER_OUT_OF_BOUNDS',
  function (name) {
    if (name) {
      return `${name} is outside of buffer bounds`
    }

    return 'Attempt to access memory outside buffer bounds'
  }, RangeError)
E('ERR_INVALID_ARG_TYPE',
  function (name, actual) {
    return `The "${name}" argument must be of type number. Received type ${typeof actual}`
  }, TypeError)
E('ERR_OUT_OF_RANGE',
  function (str, range, input) {
    let msg = `The value of "${str}" is out of range.`
    let received = input
    if (Number.isInteger(input) && Math.abs(input) > 2 ** 32) {
      received = addNumericalSeparator(String(input))
    } else if (typeof input === 'bigint') {
      received = String(input)
      if (input > BigInt(2) ** BigInt(32) || input < -(BigInt(2) ** BigInt(32))) {
        received = addNumericalSeparator(received)
      }
      received += 'n'
    }
    msg += ` It must be ${range}. Received ${received}`
    return msg
  }, RangeError)

function addNumericalSeparator (val) {
  let res = ''
  let i = val.length
  const start = val[0] === '-' ? 1 : 0
  for (; i >= start + 4; i -= 3) {
    res = `_${val.slice(i - 3, i)}${res}`
  }
  return `${val.slice(0, i)}${res}`
}

// CHECK FUNCTIONS
// ===============

function checkBounds (buf, offset, byteLength) {
  validateNumber(offset, 'offset')
  if (buf[offset] === undefined || buf[offset + byteLength] === undefined) {
    boundsError(offset, buf.length - (byteLength + 1))
  }
}

function checkIntBI (value, min, max, buf, offset, byteLength) {
  if (value > max || value < min) {
    const n = typeof min === 'bigint' ? 'n' : ''
    let range
    if (byteLength > 3) {
      if (min === 0 || min === BigInt(0)) {
        range = `>= 0${n} and < 2${n} ** ${(byteLength + 1) * 8}${n}`
      } else {
        range = `>= -(2${n} ** ${(byteLength + 1) * 8 - 1}${n}) and < 2 ** ` +
                `${(byteLength + 1) * 8 - 1}${n}`
      }
    } else {
      range = `>= ${min}${n} and <= ${max}${n}`
    }
    throw new errors.ERR_OUT_OF_RANGE('value', range, value)
  }
  checkBounds(buf, offset, byteLength)
}

function validateNumber (value, name) {
  if (typeof value !== 'number') {
    throw new errors.ERR_INVALID_ARG_TYPE(name, 'number', value)
  }
}

function boundsError (value, length, type) {
  if (Math.floor(value) !== value) {
    validateNumber(value, type)
    throw new errors.ERR_OUT_OF_RANGE(type || 'offset', 'an integer', value)
  }

  if (length < 0) {
    throw new errors.ERR_BUFFER_OUT_OF_BOUNDS()
  }

  throw new errors.ERR_OUT_OF_RANGE(type || 'offset',
                                    `>= ${type ? 1 : 0} and <= ${length}`,
                                    value)
}

// HELPER FUNCTIONS
// ================

const INVALID_BASE64_RE = /[^+/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node takes equal signs as end of the Base64 encoding
  str = str.split('=')[0]
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = str.trim().replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  let codePoint
  const length = string.length
  let leadSurrogate = null
  const bytes = []

  for (let i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  let c, hi, lo
  const byteArray = []
  for (let i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  let i
  for (i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

// ArrayBuffer or Uint8Array objects from other contexts (i.e. iframes) do not pass
// the `instanceof` check but they should be treated as of that type.
// See: https://github.com/feross/buffer/issues/166
function isInstance (obj, type) {
  return obj instanceof type ||
    (obj != null && obj.constructor != null && obj.constructor.name != null &&
      obj.constructor.name === type.name)
}
function numberIsNaN (obj) {
  // For IE11 support
  return obj !== obj // eslint-disable-line no-self-compare
}

// Create lookup table for `toString('hex')`
// See: https://github.com/feross/buffer/issues/219
const hexSliceLookupTable = (function () {
  const alphabet = '0123456789abcdef'
  const table = new Array(256)
  for (let i = 0; i < 16; ++i) {
    const i16 = i * 16
    for (let j = 0; j < 16; ++j) {
      table[i16 + j] = alphabet[i] + alphabet[j]
    }
  }
  return table
})()

// Return not function with Error if BigInt not supported
function defineBigIntMethod (fn) {
  return typeof BigInt === 'undefined' ? BufferBigIntNotDefined : fn
}

function BufferBigIntNotDefined () {
  throw new Error('BigInt not supported')
}


/***/ }),

/***/ "./node_modules/ieee754/index.js":
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {

/*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */
exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),

/***/ "./node_modules/natural-compare-lite/index.js":
/*!****************************************************!*\
  !*** ./node_modules/natural-compare-lite/index.js ***!
  \****************************************************/
/***/ ((module) => {




/*
 * @version    1.4.0
 * @date       2015-10-26
 * @stability  3 - Stable
 * @author     Lauri Rooden (https://github.com/litejs/natural-compare-lite)
 * @license    MIT License
 */


var naturalCompare = function(a, b) {
	var i, codeA
	, codeB = 1
	, posA = 0
	, posB = 0
	, alphabet = String.alphabet

	function getCode(str, pos, code) {
		if (code) {
			for (i = pos; code = getCode(str, i), code < 76 && code > 65;) ++i;
			return +str.slice(pos - 1, i)
		}
		code = alphabet && alphabet.indexOf(str.charAt(pos))
		return code > -1 ? code + 76 : ((code = str.charCodeAt(pos) || 0), code < 45 || code > 127) ? code
			: code < 46 ? 65               // -
			: code < 48 ? code - 1
			: code < 58 ? code + 18        // 0-9
			: code < 65 ? code - 11
			: code < 91 ? code + 11        // A-Z
			: code < 97 ? code - 37
			: code < 123 ? code + 5        // a-z
			: code - 63
	}


	if ((a+="") != (b+="")) for (;codeB;) {
		codeA = getCode(a, posA++)
		codeB = getCode(b, posB++)

		if (codeA < 76 && codeB < 76 && codeA > 66 && codeB > 66) {
			codeA = getCode(a, posA, posA)
			codeB = getCode(b, posB, posA = i)
			posB = i
		}

		if (codeA != codeB) return (codeA < codeB) ? -1 : 1
	}
	return 0
}

try {
	module.exports = naturalCompare;
} catch (e) {
	String.naturalCompare = naturalCompare;
}


/***/ }),

/***/ "./src/figma/app/PdfBuilder.ts":
/*!*************************************!*\
  !*** ./src/figma/app/PdfBuilder.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities */ "./src/utilities/index.ts");
/* provided dependency */ var Buffer = __webpack_require__(/*! buffer */ "./node_modules/buffer/index.js")["Buffer"];
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

//const TextDecoder = require('text-decoding').TextDecoder;
const apiKEY = "1255146474787882010";
function Encode2(unicodeString) {
    const bf = Buffer.from(unicodeString);
    let result = "";
    for (const char of bf) {
        if (char >= 127)
            result += "&#" + char + ";";
        else
            result += String.fromCharCode(char);
    }
    return result;
}
function Encode(unicodeString) {
    let result = "";
    for (let i = 0; i < unicodeString.length; i++) {
        const char = unicodeString.charCodeAt(i);
        if (char >= 127)
            result += "&#" + char + ";";
        else
            result += String.fromCharCode(char);
    }
    return result;
}
const getTextNodeInfo = (text, frame) => __awaiter(void 0, void 0, void 0, function* () {
    /* 		const json = await frame.exportAsync({
          format: 'JSON_REST_V1',
          //svgIdAttribute: true,
          //contentsOnly: false,
          //svgOutlineText: false,
          });
   */
    let json = null;
    let parentJson = null;
    /*      json = await text.exportAsync({
      format: 'JSON_REST_V1',
      //svgIdAttribute: true,
      //contentsOnly: false,
      //svgOutlineText: false,
    });
     if (text.parent) {
      //@ts-ignore
           parentJson = await text.parent.exportAsync({
        format: 'JSON_REST_V1',
        //svgIdAttribute: true,
        //contentsOnly: false,
        //svgOutlineText: false,
      });
   
    }
    */
    if (figma && text.componentPropertyReferences && figma.currentPage) {
        // Font size stimmt nicht immer
        //	figma.currentPage.selection = [text];
        //console.log('select ', figma.currentPage.selection);
    }
    let name = Encode(text.name);
    let offsetTop = null;
    let renderOffset = {
        x: 0,
        y: 0,
    };
    if (text.absoluteBoundingBox && frame.absoluteBoundingBox) {
        offsetTop = {
            x: text.absoluteBoundingBox.x - frame.absoluteBoundingBox.x,
            y: text.absoluteBoundingBox.y - frame.absoluteBoundingBox.y,
        };
    }
    if (text.absoluteRenderBounds && frame.absoluteRenderBounds) {
        renderOffset = {
            x: text.absoluteRenderBounds.x - frame.absoluteRenderBounds.x - text.x,
            y: text.absoluteRenderBounds.y - frame.absoluteRenderBounds.y - text.y,
        };
    }
    const info = {
        id: text.id,
        name: name,
        visible: text.visible,
        x: text.x,
        y: text.y,
        renderOffset: renderOffset,
        offset: getParentFrameOffset(text.parent, frame),
        offsetTop: offsetTop,
        absoluteBoundingBox: text.absoluteBoundingBox,
        width: text.width,
        height: text.height,
        textAutoResize: text.textAutoResize,
        textAlignHorizontal: text.textAlignHorizontal,
        textAlignVertical: text.textAlignVertical,
        leadingTrim: text.leadingTrim,
        //  lineHeight:text.lineHeight,
        //listSpacing:text.listSpacing,
        //    letterSpacing:text.letterSpacing,
        rotation: text.rotation,
        paragraphIndent: text.paragraphIndent,
        paragraphSpacing: text.paragraphSpacing,
        //absoluteTransform: text.absoluteTransform,
        //relativeTransform:text.relativeTransform,
        opacity: text.opacity,
        stroke: {
            strokes: text.strokes,
            strokeAlign: text.strokeAlign,
            strokeCap: text.strokeCap,
            //strokeGeometry: text.strokeGeometry,
            strokeJoin: text.strokeJoin,
            strokeWeight: text.strokeWeight,
        },
        effect: text.effects,
        style: text.getStyledTextSegments([
            "fontSize",
            "fontName",
            "fontWeight",
            "textDecoration",
            "textCase",
            "lineHeight",
            "letterSpacing",
            "fills",
            "textStyleId",
            "fillStyleId",
            "listOptions",
            "indentation",
            "hyperlink",
        ]),
        json: json,
        parentJson: parentJson,
    };
    return info;
});
//
const getSvgNamesForNodes = (frame, textInfos, frameInfos = {}, textStyles = {}) => __awaiter(void 0, void 0, void 0, function* () {
    let names = {
        names: {},
        ids: {},
    };
    let nameIndices = {};
    //nameIndices[frame.name] = 1;
    const textNodes = [];
    const compoentNodes = [];
    //figma.skipInvisibleInstanceChildren = true;
    //console.log("gstart frame", frame.name, frame.visible, frame.type, frame.id)
    function recursiv(node, frame) {
        return __awaiter(this, void 0, void 0, function* () {
            if (node.visible) {
                let index = "";
                const fname = node.name;
                if (nameIndices[fname]) {
                    index = "_" + (nameIndices[fname] + 1);
                    nameIndices[fname] += 1;
                }
                else {
                    nameIndices[fname] = 1;
                }
                const fidx = fname + index;
                //console.log("...",fidx,node.id,node.type)
                names.names[fidx] = "" + node.id;
                names.names[Encode(fidx)] = "" + node.id;
                names.names[Encode2(fidx)] = "" + node.id;
                names.ids["" + node.id] = 1;
                if (node.type == "TEXT") {
                    textNodes.push(node);
                    if (node.componentPropertyReferences) {
                        compoentNodes.push(node);
                    }
                }
                if (node.type == "FRAME") {
                    var parent = node;
                    var ox = 0;
                    var oy = 0;
                    //console.log("before", frame.name, node.name, "ox1", node.x, "oy1", node.y);
                    while (parent) {
                        if (parent == frame)
                            break;
                        //console.log(parent.name, "ox1", ox, "oy1", oy);
                        //@ts-ignore
                        ox += parent.x;
                        //@ts-ignore
                        oy += parent.y;
                        //@ts-ignore
                        parent = parent.parent;
                    }
                    //console.log("end", "ox1", ox, "oy1", oy);
                    frameInfos[node.id] = {
                        layoutGridNodes: node.layoutGrids,
                        effectNodes: node.effects,
                        x: node.x,
                        y: node.y,
                        ax: ox,
                        ay: oy,
                        width: node.width,
                        height: node.height,
                    };
                }
                if (node.children)
                    for (const child of node.children) {
                        yield recursiv(child, frame);
                    }
            }
        });
    }
    yield recursiv(frame, frame);
    const page = frame.parent;
    //@ts-ignore
    const lastSelction = figma.currentPage.selection;
    try {
        figma.currentPage.selection = compoentNodes;
    }
    catch (e) { }
    for (const text of textNodes) {
        const nodeInfo = yield getTextNodeInfo(text, frame);
        /* const tStyleId=nodeInfo.style[0].textStyleId;
        if (tStyleId && !textStyles[tStyleId])
        {
          textStyles[tStyleId]=figma.getStyleById(tStyleId)
          
          } */
        textInfos.push(nodeInfo);
    }
    figma.currentPage.selection = lastSelction;
    return names;
});
function getParentFrameOffset(node, frame) {
    if (node.id == frame.id) {
        return { x: 0, y: 0 };
    }
    //frame.absoluteBoundingBox;
    if (node.parent) {
        let offset = getParentFrameOffset(node.parent, frame);
        //if ( node.name == 'Sed ut perspiciatis')
        //@ts-ignore
        //   console.log("button is ",node.type,node.x,node.y)
        if (node.type == "FRAME" ||
            node.type == "INSTANCE" ||
            node.type == "COMPONENT" ||
            node.type == "COMPONENT_SET") {
            return { x: node.x + offset.x, y: node.y + offset.y };
        }
        if (node.type == "GROUP") {
            return offset;
        }
    }
    return { x: 0, y: 0 };
}
function collectFrameInfo(frame, info) {
    return __awaiter(this, void 0, void 0, function* () {
        //  const svg = await exportSVG(frame);
        let svg = "";
        let json = {};
        let parent = {};
        //console.log('PDF_GENERATOR collectFrameInfo start');
        if (!info.shortInfo) {
            try {
                svg = yield frame.exportAsync({
                    format: "SVG_STRING",
                    svgIdAttribute: true,
                    //contentsOnly: false,
                    svgOutlineText: false,
                });
            }
            catch (e) {
                console.error("PDF_GENERATOR exportAsync ", e, frame, frame.name);
            }
        }
        const textInfos = [];
        const textStyles = {};
        const frameInfos = {};
        const nodeNames = !info.shortInfo
            ? yield getSvgNamesForNodes(frame, textInfos, frameInfos, textStyles)
            : {};
        //console.log('PDF_GENERATOR collectFrameInfo end');
        return {
            svg: svg,
            /*     json: json,
            parent: parent,
         */ //allNames: {},
            textInfos: textInfos,
            frameInfos: frameInfos,
            // textStyles:textStyles,
            width: frame.width,
            height: frame.height,
            id: frame.id,
            name: frame.name,
            x: frame.x,
            y: frame.y,
            absoluteBoundingBox: frame.absoluteBoundingBox,
            nodeNames: nodeNames.names,
        };
    });
}
function exportAllPages(info) {
    return __awaiter(this, void 0, void 0, function* () {
        const pluginData = figma.root.getPluginData(apiKEY);
        const pdfResult = {
            name: figma.root.name,
            id: figma.root.id,
            pages: [],
            printFrames: [],
            pluginData: pluginData,
        };
        figma.skipInvisibleInstanceChildren = true;
        /*   const pages = figma.root.findAllWithCriteria({
          types: ["PAGE"],
        });
       */
        for (const page of figma.root.children) {
            //for (const page of pages) {
            //console.log("page...",page.name,page.children);
            const pageInfo = {
                name: page.name,
                id: page.id,
                frames: [],
            };
            for (const child of page.children) {
                if (child.type == "FRAME") {
                    const finfo = yield collectFrameInfo(child, info);
                    //pageInfo.frames.push(finfo);
                    pageInfo.frames.unshift(finfo);
                }
            }
            pdfResult.pages.push(pageInfo);
        }
        //console.log("exportAllPages", pdfResult);
        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("PDF_GENERATOR_RESULT", pdfResult);
    });
}
function exportFrame(frameId) {
    return __awaiter(this, void 0, void 0, function* () {
        const pluginData = figma.root.getPluginData(apiKEY);
        const pdfResult = {
            name: figma.root.name,
            id: figma.root.id,
            pages: [],
            printFrames: [],
            pluginData: pluginData,
        };
        figma.skipInvisibleInstanceChildren = true;
        /* for (const page of figma.root.children) {
          const frames = figma.root.findAllWithCriteria({
            types: ["FRAME"],
          });
      
          for (const frame of frames) {
            if (frame.id == frameId) {
              let page = null;
              let parent: any = frame;
              while (parent) {
                if (parent.parent && parent.parent.type == "PAGE") {
                  page = parent.parent;
                  break;
                }
                if (!parent) break;
                parent = parent?.parent;
              }
              if (page) {
                const pageInfo: PDFPageInfo = {
                  name: page.name,
                  id: page.id,
                  frames: [],
                };
                pageInfo.frames.push(
                  await collectFrameInfo(frame, {
                    shortInfo: false,
                    showPreviews: false,
      
                    useAllFrames: false,
                  })
                );
                pdfResult.pages.push(pageInfo);
              }
              break;
            }
          }
        } */
        if (true) {
            const frames = figma.root.findAllWithCriteria({
                types: ["FRAME"],
            });
            for (const frame of frames) {
                if (frame.id == frameId) {
                    let page = null;
                    let parent = frame;
                    while (parent) {
                        if (parent.parent && parent.parent.type == "PAGE") {
                            page = parent.parent;
                            break;
                        }
                        if (!parent)
                            break;
                        parent = parent === null || parent === void 0 ? void 0 : parent.parent;
                    }
                    if (page) {
                        const pageInfo = {
                            name: page.name,
                            id: page.id,
                            frames: [],
                        };
                        pageInfo.frames.push(yield collectFrameInfo(frame, {
                            shortInfo: false,
                            showPreviews: false,
                            useAllFrames: false,
                        }));
                        pdfResult.pages.push(pageInfo);
                    }
                    break;
                }
            }
        }
        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("PDF_FRAME_RESULT", pdfResult);
    });
}
(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("GLOBAL_OPTION", function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (data) {
            yield figma.clientStorage.setAsync("GLOBAL_OPTION", data);
            return;
        }
        const figmaData = yield figma.clientStorage.getAsync("GLOBAL_OPTION");
        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("GLOBAL_OPTION", figmaData);
    });
});
(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("PLUGIN_DATA", function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        if (data) {
            figma.root.setPluginData(apiKEY, data);
            return;
        }
        const figmaData = figma.root.getPluginData(apiKEY);
        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("PLUGIN_DATA", figmaData);
    });
});
function exportSelectPages(info) {
    return __awaiter(this, void 0, void 0, function* () {
        const pluginData = figma.root.getPluginData(apiKEY);
        const pdfResult = {
            name: figma.root.name,
            id: figma.root.id,
            pages: [],
            printFrames: [],
            pluginData: pluginData,
        };
        const selections = figma.currentPage.selection;
        if (selections.length > 0) {
            const pagesMap = {};
            for (const elm of selections) {
                if (elm.type == "FRAME") {
                    let page = null;
                    let parent = elm;
                    while (parent) {
                        if (parent.parent && parent.parent.type == "PAGE") {
                            page = parent.parent;
                            break;
                        }
                        if (!parent)
                            break;
                        parent = parent === null || parent === void 0 ? void 0 : parent.parent;
                    }
                    if (page && page.id) {
                        if (!pagesMap[page.id])
                            pagesMap[page.id] = {
                                page: page,
                                frames: [],
                            };
                        pagesMap[page.id].frames.push(elm);
                    }
                }
            }
            for (const pf of Object.values(pagesMap)) {
                const pageInfo = {
                    name: pf.page.name,
                    id: pf.page.id,
                    frames: [],
                };
                for (const frame of pf.frames) {
                    pageInfo.frames.push(yield collectFrameInfo(frame, info));
                }
                pdfResult.pages.push(pageInfo);
            }
        }
        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("PDF_GENERATOR_RESULT", pdfResult);
    });
}
function exportSelectFrames() {
    return __awaiter(this, void 0, void 0, function* () {
        const selections = figma.currentPage.selection;
        let result = [];
        for (const elm of selections) {
            if (elm.type == "FRAME") {
                result.push(yield collectFrameInfo(elm, {
                    shortInfo: false,
                    showPreviews: false,
                    useAllFrames: false,
                }));
            }
        }
        return {
            state: "ok",
            type: "framedata",
            payload: result,
        };
    });
}
function localFonts() {
    return __awaiter(this, void 0, void 0, function* () {
        const fonts = (yield figma.listAvailableFontsAsync()).filter((f) => f.fontName.family == "LiebherrLogo");
        for (const font of fonts)
            yield figma.loadFontAsync(font.fontName);
        return {
            state: "ok",
            type: "localfont",
            payload: {},
        };
    });
}
function fetchBuffer(data) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield fetch(data.url);
        if (result && result.ok) {
            return {
                state: "ok",
                type: "fetchbuffer",
                payload: {
                    state: "ok",
                    buffer: yield result.arrayBuffer(),
                },
            };
        }
        return {
            state: "ok",
            type: "fetchbuffer",
            payload: {
                state: "failed",
                buffer: null,
            },
        };
    });
}
(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("PDF_GENERATOR", function (info) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (info.useAllFrames) {
                return yield exportAllPages(info);
            }
            return yield exportSelectPages(info);
        }
        catch (e) {
            console.log("PDF_GENERATOR exception ", e);
        }
    });
});
(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("PDF_FRAME", function (info) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            return yield exportFrame(info.frameId);
        }
        catch (e) {
            console.log("PDF_GENERATOR exception ", e);
        }
    });
});
figma.on("selectionchange", () => __awaiter(void 0, void 0, void 0, function* () {
    const selections = figma.currentPage.selection;
    let c = 0;
    for (const elm of selections) {
        if (elm.type == "FRAME") {
            c++;
        }
    }
    //if (__IS_DEBUG) console.log("figma.on('selectionchange'", c);
    (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("FIGMA_SELECTIONCHANGE", { frames: c });
}));
/*   frame.findAll().forEach((o) => {
    let index = '';
    if ( o.id == 'I7:1877;277:16688'){
      console.log("getSvgNamesForNodes",o.name,o.visible,o.type,o.id)
    }
    if (o.visible) {
      //const fname = Encode(o.name);
      const fname = o.name;
      if (nameIndices[fname]) {
        index = '_' + (nameIndices[fname] + 1);
        nameIndices[fname] += 1;
      } else {
        nameIndices[fname] = 1;
      }
      names.names[fname + index] = '' + o.id;
      names.names[Encode(fname + index)] = '' + o.id;
      names.names[Encode2(fname + index)] = '' + o.id;
      names.ids['' + o.id]=1;
    }
  });
 */ //  console.log(names.ids)
(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)("USER_SCRIPT", function (data) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            if (data.func) {
                switch (data.func) {
                    case "exportSelectFrames":
                        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("USER_SCRIPT", yield exportSelectFrames());
                        break;
                    case "localfont":
                        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("USER_SCRIPT", yield localFonts());
                        break;
                    case "fetchbuffer":
                        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("USER_SCRIPT", yield fetchBuffer(data.params));
                        break;
                }
            }
            else {
                const result = eval(data.script);
                if (result && result.then) {
                    result.then((result) => {
                        (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("USER_SCRIPT", result);
                    });
                }
                else {
                    (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("USER_SCRIPT", result);
                }
            }
        }
        catch (e) {
            (0,utilities__WEBPACK_IMPORTED_MODULE_0__.emit)("USER_SCRIPT", { state: "FAILED", e: "" + e });
        }
    });
});


/***/ }),

/***/ "./src/utilities/color/convert-hex-color-to-rgb-color.ts":
/*!***************************************************************!*\
  !*** ./src/utilities/color/convert-hex-color-to-rgb-color.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertHexColorToRgbColor: () => (/* binding */ convertHexColorToRgbColor)
/* harmony export */ });
/* harmony import */ var hex_rgb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hex-rgb */ "./node_modules/hex-rgb/index.js");

/**
 * Converts the given `hexColor` (eg. `000000`) to RGB format
 * (eg. `{ r: 0, g: 0, b: 0 }`). Each value in the returned
 * [RGB](https://figma.com/plugin-docs/api/RGB/) plain object is
 * between `0` and `1`.
 *
 * @returns Returns an [RGB](https://figma.com/plugin-docs/api/RGB/) plain
 * object, else `null` if `hexColor` was invalid.
 * @category Color
 */
function convertHexColorToRgbColor(hexColor) {
    if (hexColor.length !== 3 && hexColor.length !== 6) {
        return null;
    }
    try {
        const { red, green, blue } = (0,hex_rgb__WEBPACK_IMPORTED_MODULE_0__["default"])(hexColor);
        return {
            b: blue / 255,
            g: green / 255,
            r: red / 255
        };
    }
    catch (_a) {
        return null;
    }
}


/***/ }),

/***/ "./src/utilities/color/convert-named-color-to-hex-color.ts":
/*!*****************************************************************!*\
  !*** ./src/utilities/color/convert-named-color-to-hex-color.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertNamedColorToHexColor: () => (/* binding */ convertNamedColorToHexColor)
/* harmony export */ });
/* harmony import */ var _private_named_colors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/named-colors */ "./src/utilities/color/private/named-colors.ts");

/**
 * Converts the given `namedColor` (eg. `black`) to hexadecimal format
 * (eg. `000000`).
 *
 * @returns Returns a hexadecimal color as an uppercase string, else `null`
 * if `namedColor` was invalid.
 * @category Color
 */
function convertNamedColorToHexColor(namedColor) {
    const hexColor = _private_named_colors__WEBPACK_IMPORTED_MODULE_0__.NAMED_COLORS[namedColor.toLowerCase()];
    if (typeof hexColor === 'undefined') {
        return null;
    }
    return hexColor;
}


/***/ }),

/***/ "./src/utilities/color/convert-rgb-color-to-hex-color.ts":
/*!***************************************************************!*\
  !*** ./src/utilities/color/convert-rgb-color-to-hex-color.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   convertRgbColorToHexColor: () => (/* binding */ convertRgbColorToHexColor)
/* harmony export */ });
/* harmony import */ var rgb_hex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rgb-hex */ "./node_modules/rgb-hex/index.js");

/**
 * Converts the given `rgbColor` (eg. `{ r: 0, g: 0, b: 0 }`) to hexadecimal
 * format (eg. `000000`). Each value in the given
 * [RGB](https://figma.com/plugin-docs/api/RGB/) plain object must be
 * between `0` and `1`.
 *
 * @returns Returns a hexadecimal color as an uppercase string, else `null`
 * if `rgbColor` was invalid.
 * @category Color
 */
function convertRgbColorToHexColor(rgbColor) {
    const { r, g, b } = rgbColor;
    if (r < 0 || r > 1 || g < 0 || g > 1 || b < 0 || b > 1) {
        return null;
    }
    try {
        return (0,rgb_hex__WEBPACK_IMPORTED_MODULE_0__["default"])(Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)).toUpperCase();
    }
    catch (_a) {
        return null;
    }
}


/***/ }),

/***/ "./src/utilities/color/is-valid-hex-color.ts":
/*!***************************************************!*\
  !*** ./src/utilities/color/is-valid-hex-color.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidHexColor: () => (/* binding */ isValidHexColor)
/* harmony export */ });
/* harmony import */ var _convert_hex_color_to_rgb_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./convert-hex-color-to-rgb-color */ "./src/utilities/color/convert-hex-color-to-rgb-color.ts");

/**
 * Returns `true` if `hexColor` is a valid hexadecimal color.
 *
 * @category Color
 */
function isValidHexColor(hexColor) {
    return (0,_convert_hex_color_to_rgb_color__WEBPACK_IMPORTED_MODULE_0__.convertHexColorToRgbColor)(hexColor) !== null;
}


/***/ }),

/***/ "./src/utilities/color/private/named-colors.ts":
/*!*****************************************************!*\
  !*** ./src/utilities/color/private/named-colors.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   NAMED_COLORS: () => (/* binding */ NAMED_COLORS)
/* harmony export */ });
// Adapted from https://github.com/bahamas10/css-color-names/blob/a981685d57b3bed64f5c2a2a0027478b44f14cb5/css-color-names.json
const NAMED_COLORS = {
    aliceblue: 'F0F8FF',
    antiquewhite: 'FAEBD7',
    aqua: '00FFFF',
    aquamarine: '7FFFD4',
    azure: 'F0FFFF',
    beige: 'F5F5DC',
    bisque: 'FFE4C4',
    black: '000000',
    blanchedalmond: 'FFEBCD',
    blue: '0000FF',
    blueviolet: '8A2BE2',
    brown: 'A52A2A',
    burlywood: 'DEB887',
    cadetblue: '5F9EA0',
    chartreuse: '7FFF00',
    chocolate: 'D2691E',
    coral: 'FF7F50',
    cornflowerblue: '6495ED',
    cornsilk: 'FFF8DC',
    crimson: 'DC143C',
    cyan: '00FFFF',
    darkblue: '00008B',
    darkcyan: '008B8B',
    darkgoldenrod: 'B8860B',
    darkgray: 'A9A9A9',
    darkgreen: '006400',
    darkgrey: 'A9A9A9',
    darkkhaki: 'BDB76B',
    darkmagenta: '8B008B',
    darkolivegreen: '556B2F',
    darkorange: 'FF8C00',
    darkorchid: '9932CC',
    darkred: '8B0000',
    darksalmon: 'E9967A',
    darkseagreen: '8FBC8F',
    darkslateblue: '483D8B',
    darkslategray: '2F4F4F',
    darkslategrey: '2F4F4F',
    darkturquoise: '00CED1',
    darkviolet: '9400D3',
    deeppink: 'FF1493',
    deepskyblue: '00BFFF',
    dimgray: '696969',
    dimgrey: '696969',
    dodgerblue: '1E90FF',
    firebrick: 'B22222',
    floralwhite: 'FFFAF0',
    forestgreen: '228B22',
    fuchsia: 'FF00FF',
    gainsboro: 'DCDCDC',
    ghostwhite: 'F8F8FF',
    gold: 'FFD700',
    goldenrod: 'DAA520',
    gray: '808080',
    green: '008000',
    greenyellow: 'ADFF2F',
    grey: '808080',
    honeydew: 'F0FFF0',
    hotpink: 'FF69B4',
    indianred: 'CD5C5C',
    indigo: '4B0082',
    ivory: 'FFFFF0',
    khaki: 'F0E68C',
    lavender: 'E6E6FA',
    lavenderblush: 'FFF0F5',
    lawngreen: '7CFC00',
    lemonchiffon: 'FFFACD',
    lightblue: 'ADD8E6',
    lightcoral: 'F08080',
    lightcyan: 'E0FFFF',
    lightgoldenrodyellow: 'FAFAD2',
    lightgray: 'D3D3D3',
    lightgreen: '90EE90',
    lightgrey: 'D3D3D3',
    lightpink: 'FFB6C1',
    lightsalmon: 'FFA07A',
    lightseagreen: '20B2AA',
    lightskyblue: '87CEFA',
    lightslategray: '778899',
    lightslategrey: '778899',
    lightsteelblue: 'B0C4DE',
    lightyellow: 'FFFFE0',
    lime: '00FF00',
    limegreen: '32CD32',
    linen: 'FAF0E6',
    magenta: 'FF00FF',
    maroon: '800000',
    mediumaquamarine: '66CDAA',
    mediumblue: '0000CD',
    mediumorchid: 'BA55D3',
    mediumpurple: '9370DB',
    mediumseagreen: '3CB371',
    mediumslateblue: '7B68EE',
    mediumspringgreen: '00FA9A',
    mediumturquoise: '48D1CC',
    mediumvioletred: 'C71585',
    midnightblue: '191970',
    mintcream: 'F5FFFA',
    mistyrose: 'FFE4E1',
    moccasin: 'FFE4B5',
    navajowhite: 'FFDEAD',
    navy: '000080',
    oldlace: 'FDF5E6',
    olive: '808000',
    olivedrab: '6B8E23',
    orange: 'FFA500',
    orangered: 'FF4500',
    orchid: 'DA70D6',
    palegoldenrod: 'EEE8AA',
    palegreen: '98FB98',
    paleturquoise: 'AFEEEE',
    palevioletred: 'DB7093',
    papayawhip: 'FFEFD5',
    peachpuff: 'FFDAB9',
    peru: 'CD853F',
    pink: 'FFC0CB',
    plum: 'DDA0DD',
    powderblue: 'B0E0E6',
    purple: '800080',
    rebeccapurple: '663399',
    red: 'FF0000',
    rosybrown: 'BC8F8F',
    royalblue: '4169E1',
    saddlebrown: '8B4513',
    salmon: 'FA8072',
    sandybrown: 'F4A460',
    seagreen: '2E8B57',
    seashell: 'FFF5EE',
    sienna: 'A0522D',
    silver: 'C0C0C0',
    skyblue: '87CEEB',
    slateblue: '6A5ACD',
    slategray: '708090',
    slategrey: '708090',
    snow: 'FFFAFA',
    springgreen: '00FF7F',
    steelblue: '4682B4',
    tan: 'D2B48C',
    teal: '008080',
    thistle: 'D8BFD8',
    tomato: 'FF6347',
    turquoise: '40E0D0',
    violet: 'EE82EE',
    wheat: 'F5DEB3',
    white: 'FFFFFF',
    whitesmoke: 'F5F5F5',
    yellow: 'FFFF00',
    yellowgreen: '9ACD32'
};


/***/ }),

/***/ "./src/utilities/events.ts":
/*!*********************************!*\
  !*** ./src/utilities/events.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emit: () => (/* binding */ emit),
/* harmony export */   on: () => (/* binding */ on),
/* harmony export */   once: () => (/* binding */ once)
/* harmony export */ });
const eventHandlers = {};
let currentId = 0;
/**
 * Registers an event `handler` for the given event `name`.
 *
 * @returns Returns a function for deregistering the `handler`.
 * @category Events
 */
function on(name, handler) {
    const id = `${currentId}`;
    currentId += 1;
    eventHandlers[id] = { handler, name };
    return function () {
        delete eventHandlers[id];
    };
}
/**
 * Registers an event `handler` that will run at most once for the given
 * event `name`.
 *
 * @returns Returns a function for deregistering the `handler`.
 * @category Events
 */
function once(name, handler) {
    let done = false;
    return on(name, function (...args) {
        if (done === true) {
            return;
        }
        done = true;
        handler(...args);
    });
}
/**
 * Calling `emit` in the [main context](https://figma.com/plugin-docs/how-plugins-run/) invokes the event
 * handler for the matching event `name` in your UI. Correspondingly, calling
 * `emit` in your UI invokes the event handler for the matching event `name`
 * in the main context.
 *
 * All `args` passed after `name` will be directly
 * [applied](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/apply)
 * on the event handler.
 *
 * See the [recipe for passing data between the main and UI contexts](<%- query('page', 'recipes').url %>#passing-data-between-the-plugin-widgets-main-and-ui-contexts).
 *
 * @category Events
 */
const emit = typeof window === "undefined"
    ? function (name, ...args) {
        //console.log("emit:figma");
        figma.ui.postMessage([name, ...args]);
    }
    : function (name, ...args) {
        //console.log("emit:window.parent.postMessage");
        if (window !== window.parent)
            window.parent.postMessage({
                pluginMessage: [name, ...args],
            }, "*");
    };
function invokeEventHandler(name, args) {
    for (const id in eventHandlers) {
        if (eventHandlers[id].name === name) {
            eventHandlers[id].handler.apply(null, args);
        }
    }
}
if (typeof window === "undefined") {
    figma.ui.onmessage = function ([name, ...args]) {
        invokeEventHandler(name, args);
    };
}
else {
    window.onmessage = function (event) {
        //console.log("onmessage:...");
        try {
            if (typeof event.data.pluginMessage === "undefined") {
                return;
            }
        }
        catch (e) {
            return;
        }
        try {
            const [name, ...args] = event.data.pluginMessage;
            invokeEventHandler(name, args);
        }
        catch (e) {
            // AUIT
            console.error("onmessage:", '' + e);
        }
    };
}


/***/ }),

/***/ "./src/utilities/function/ensure-minimum-time.ts":
/*!*******************************************************!*\
  !*** ./src/utilities/function/ensure-minimum-time.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ensureMinimumTime: () => (/* binding */ ensureMinimumTime)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Creates an `async` function that will invoke the given `callback` and run
 * for at least `minimumTime` (in milliseconds).
 *
 * @category Function
 */
function ensureMinimumTime(minimumTime, callback) {
    return function (...args) {
        return __awaiter(this, void 0, void 0, function* () {
            const startTimestamp = Date.now();
            const result = yield callback(...args);
            const elapsedTime = Date.now() - startTimestamp;
            if (elapsedTime >= minimumTime) {
                return result;
            }
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(result);
                }, minimumTime - elapsedTime);
            });
        });
    };
}


/***/ }),

/***/ "./src/utilities/image/create-canvas-element-from-blob-async.ts":
/*!**********************************************************************!*\
  !*** ./src/utilities/image/create-canvas-element-from-blob-async.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCanvasElementFromBlobAsync: () => (/* binding */ createCanvasElementFromBlobAsync)
/* harmony export */ });
/* harmony import */ var _create_canvas_element_from_image_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-canvas-element-from-image-element */ "./src/utilities/image/create-canvas-element-from-image-element.ts");
/* harmony import */ var _create_image_element_from_blob_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-image-element-from-blob-async */ "./src/utilities/image/create-image-element-from-blob-async.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Creates an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * from a [`blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
 * representing an image.
 *
 * @category Image
 */
function createCanvasElementFromBlobAsync(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageElement = yield (0,_create_image_element_from_blob_async__WEBPACK_IMPORTED_MODULE_1__.createImageElementFromBlobAsync)(blob);
        return (0,_create_canvas_element_from_image_element__WEBPACK_IMPORTED_MODULE_0__.createCanvasElementFromImageElement)(imageElement);
    });
}


/***/ }),

/***/ "./src/utilities/image/create-canvas-element-from-bytes-async.ts":
/*!***********************************************************************!*\
  !*** ./src/utilities/image/create-canvas-element-from-bytes-async.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCanvasElementFromBytesAsync: () => (/* binding */ createCanvasElementFromBytesAsync)
/* harmony export */ });
/* harmony import */ var _create_canvas_element_from_image_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-canvas-element-from-image-element */ "./src/utilities/image/create-canvas-element-from-image-element.ts");
/* harmony import */ var _create_image_element_from_bytes_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./create-image-element-from-bytes-async */ "./src/utilities/image/create-image-element-from-bytes-async.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


/**
 * Creates an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * from the `bytes` of an image.
 *
 * @category Image
 */
function createCanvasElementFromBytesAsync(bytes) {
    return __awaiter(this, void 0, void 0, function* () {
        const imageElement = yield (0,_create_image_element_from_bytes_async__WEBPACK_IMPORTED_MODULE_1__.createImageElementFromBytesAsync)(bytes);
        return (0,_create_canvas_element_from_image_element__WEBPACK_IMPORTED_MODULE_0__.createCanvasElementFromImageElement)(imageElement);
    });
}


/***/ }),

/***/ "./src/utilities/image/create-canvas-element-from-image-element.ts":
/*!*************************************************************************!*\
  !*** ./src/utilities/image/create-canvas-element-from-image-element.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createCanvasElementFromImageElement: () => (/* binding */ createCanvasElementFromImageElement)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Creates an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement)
 * from an [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement).
 *
 * @category Image
 */
function createCanvasElementFromImageElement(imageElement) {
    return __awaiter(this, void 0, void 0, function* () {
        const canvasElement = document.createElement('canvas');
        canvasElement.width = imageElement.width;
        canvasElement.height = imageElement.height;
        const context = canvasElement.getContext('2d');
        context.drawImage(imageElement, 0, 0);
        return canvasElement;
    });
}


/***/ }),

/***/ "./src/utilities/image/create-image-element-from-blob-async.ts":
/*!*********************************************************************!*\
  !*** ./src/utilities/image/create-image-element-from-blob-async.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImageElementFromBlobAsync: () => (/* binding */ createImageElementFromBlobAsync)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Creates an [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * from a [`blob`](https://developer.mozilla.org/en-US/docs/Web/API/Blob)
 * representing an image.
 *
 * @category Image
 */
function createImageElementFromBlobAsync(blob) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            const imageElement = new Image();
            imageElement.onload = function () {
                resolve(imageElement);
            };
            imageElement.onerror = reject;
            imageElement.src = URL.createObjectURL(blob);
        });
    });
}


/***/ }),

/***/ "./src/utilities/image/create-image-element-from-bytes-async.ts":
/*!**********************************************************************!*\
  !*** ./src/utilities/image/create-image-element-from-bytes-async.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImageElementFromBytesAsync: () => (/* binding */ createImageElementFromBytesAsync)
/* harmony export */ });
/* harmony import */ var _create_image_element_from_blob_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./create-image-element-from-blob-async */ "./src/utilities/image/create-image-element-from-blob-async.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Creates an [`HTMLImageElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement)
 * from the `bytes` of an image.
 *
 * @category Image
 */
function createImageElementFromBytesAsync(bytes) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0,_create_image_element_from_blob_async__WEBPACK_IMPORTED_MODULE_0__.createImageElementFromBlobAsync)(new Blob([bytes]));
    });
}


/***/ }),

/***/ "./src/utilities/image/create-image-paint.ts":
/*!***************************************************!*\
  !*** ./src/utilities/image/create-image-paint.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createImagePaint: () => (/* binding */ createImagePaint)
/* harmony export */ });
/**
 * Creates an [`ImagePaint`](https://figma.com/plugin-docs/api/Paint/#imagepaint)
 * object from the `bytes` of an image.
 *
 * @category Image
 */
function createImagePaint(bytes) {
    const image = figma.createImage(bytes);
    return {
        imageHash: image.hash,
        scaleMode: 'FILL',
        scalingFactor: 0.5,
        type: 'IMAGE'
    };
}


/***/ }),

/***/ "./src/utilities/image/read-bytes-from-canvas-element-async.ts":
/*!*********************************************************************!*\
  !*** ./src/utilities/image/read-bytes-from-canvas-element-async.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   readBytesFromCanvasElementAsync: () => (/* binding */ readBytesFromCanvasElementAsync)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Read the bytes off an [`HTMLCanvasElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement).
 *
 * @category Image
 */
function readBytesFromCanvasElementAsync(canvasElement) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise(function (resolve, reject) {
            canvasElement.toBlob(function (blob) {
                const reader = new FileReader();
                reader.onload = function () {
                    resolve(new Uint8Array(reader.result));
                };
                reader.onerror = reject;
                reader.readAsArrayBuffer(blob);
            });
        });
    });
}


/***/ }),

/***/ "./src/utilities/index.ts":
/*!********************************!*\
  !*** ./src/utilities/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MIXED_NUMBER: () => (/* reexport safe */ _mixed_values__WEBPACK_IMPORTED_MODULE_13__.MIXED_NUMBER),
/* harmony export */   MIXED_STRING: () => (/* reexport safe */ _mixed_values__WEBPACK_IMPORTED_MODULE_13__.MIXED_STRING),
/* harmony export */   areSiblingNodes: () => (/* reexport safe */ _node_sibling_nodes_are_sibling_nodes__WEBPACK_IMPORTED_MODULE_36__.areSiblingNodes),
/* harmony export */   cloneObject: () => (/* reexport safe */ _object_clone_object__WEBPACK_IMPORTED_MODULE_45__.cloneObject),
/* harmony export */   collapseLayer: () => (/* reexport safe */ _node_collapse_layer__WEBPACK_IMPORTED_MODULE_20__.collapseLayer),
/* harmony export */   compareObjects: () => (/* reexport safe */ _object_compare_objects__WEBPACK_IMPORTED_MODULE_46__.compareObjects),
/* harmony export */   compareStringArrays: () => (/* reexport safe */ _object_compare_string_arrays__WEBPACK_IMPORTED_MODULE_47__.compareStringArrays),
/* harmony export */   computeBoundingBox: () => (/* reexport safe */ _node_compute_bounding_box__WEBPACK_IMPORTED_MODULE_21__.computeBoundingBox),
/* harmony export */   computeMaximumBounds: () => (/* reexport safe */ _node_compute_maximum_bounds__WEBPACK_IMPORTED_MODULE_22__.computeMaximumBounds),
/* harmony export */   computeSiblingNodes: () => (/* reexport safe */ _node_sibling_nodes_compute_sibling_nodes__WEBPACK_IMPORTED_MODULE_37__.computeSiblingNodes),
/* harmony export */   convertHexColorToRgbColor: () => (/* reexport safe */ _color_convert_hex_color_to_rgb_color__WEBPACK_IMPORTED_MODULE_0__.convertHexColorToRgbColor),
/* harmony export */   convertNamedColorToHexColor: () => (/* reexport safe */ _color_convert_named_color_to_hex_color__WEBPACK_IMPORTED_MODULE_1__.convertNamedColorToHexColor),
/* harmony export */   convertRgbColorToHexColor: () => (/* reexport safe */ _color_convert_rgb_color_to_hex_color__WEBPACK_IMPORTED_MODULE_2__.convertRgbColorToHexColor),
/* harmony export */   createCanvasElementFromBlobAsync: () => (/* reexport safe */ _image_create_canvas_element_from_blob_async__WEBPACK_IMPORTED_MODULE_6__.createCanvasElementFromBlobAsync),
/* harmony export */   createCanvasElementFromBytesAsync: () => (/* reexport safe */ _image_create_canvas_element_from_bytes_async__WEBPACK_IMPORTED_MODULE_7__.createCanvasElementFromBytesAsync),
/* harmony export */   createCanvasElementFromImageElement: () => (/* reexport safe */ _image_create_canvas_element_from_image_element__WEBPACK_IMPORTED_MODULE_8__.createCanvasElementFromImageElement),
/* harmony export */   createImageElementFromBlobAsync: () => (/* reexport safe */ _image_create_image_element_from_blob_async__WEBPACK_IMPORTED_MODULE_9__.createImageElementFromBlobAsync),
/* harmony export */   createImageElementFromBytesAsync: () => (/* reexport safe */ _image_create_image_element_from_bytes_async__WEBPACK_IMPORTED_MODULE_10__.createImageElementFromBytesAsync),
/* harmony export */   createImagePaint: () => (/* reexport safe */ _image_create_image_paint__WEBPACK_IMPORTED_MODULE_11__.createImagePaint),
/* harmony export */   deduplicateArray: () => (/* reexport safe */ _object_deduplicate_array__WEBPACK_IMPORTED_MODULE_48__.deduplicateArray),
/* harmony export */   deduplicateNodes: () => (/* reexport safe */ _node_deduplicate_nodes__WEBPACK_IMPORTED_MODULE_23__.deduplicateNodes),
/* harmony export */   emit: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_4__.emit),
/* harmony export */   ensureMinimumTime: () => (/* reexport safe */ _function_ensure_minimum_time__WEBPACK_IMPORTED_MODULE_5__.ensureMinimumTime),
/* harmony export */   evaluateNumericExpression: () => (/* reexport safe */ _number_evaluate_numeric_expression__WEBPACK_IMPORTED_MODULE_43__.evaluateNumericExpression),
/* harmony export */   extractAttributes: () => (/* reexport safe */ _object_extract_attributes__WEBPACK_IMPORTED_MODULE_49__.extractAttributes),
/* harmony export */   formatErrorMessage: () => (/* reexport safe */ _string_format_message__WEBPACK_IMPORTED_MODULE_51__.formatErrorMessage),
/* harmony export */   formatSuccessMessage: () => (/* reexport safe */ _string_format_message__WEBPACK_IMPORTED_MODULE_51__.formatSuccessMessage),
/* harmony export */   formatWarningMessage: () => (/* reexport safe */ _string_format_message__WEBPACK_IMPORTED_MODULE_51__.formatWarningMessage),
/* harmony export */   getAbsolutePosition: () => (/* reexport safe */ _node_absolute_position_get_absolute_position__WEBPACK_IMPORTED_MODULE_18__.getAbsolutePosition),
/* harmony export */   getDocumentComponents: () => (/* reexport safe */ _node_get_nodes_get_document_components__WEBPACK_IMPORTED_MODULE_24__.getDocumentComponents),
/* harmony export */   getDocumentUseCount: () => (/* reexport safe */ _monetization_document_use_count__WEBPACK_IMPORTED_MODULE_14__.getDocumentUseCount),
/* harmony export */   getParentNode: () => (/* reexport safe */ _node_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_25__.getParentNode),
/* harmony export */   getSceneNodeById: () => (/* reexport safe */ _node_get_nodes_get_scene_node_by_id__WEBPACK_IMPORTED_MODULE_26__.getSceneNodeById),
/* harmony export */   getSelectedNodesOrAllNodes: () => (/* reexport safe */ _node_get_nodes_get_selected_nodes_or_all_nodes__WEBPACK_IMPORTED_MODULE_27__.getSelectedNodesOrAllNodes),
/* harmony export */   getTotalUseCountAsync: () => (/* reexport safe */ _monetization_total_use_count__WEBPACK_IMPORTED_MODULE_17__.getTotalUseCountAsync),
/* harmony export */   incrementDocumentUseCount: () => (/* reexport safe */ _monetization_document_use_count__WEBPACK_IMPORTED_MODULE_14__.incrementDocumentUseCount),
/* harmony export */   incrementTotalUseCountAsync: () => (/* reexport safe */ _monetization_total_use_count__WEBPACK_IMPORTED_MODULE_17__.incrementTotalUseCountAsync),
/* harmony export */   insertAfterNode: () => (/* reexport safe */ _node_insert_node_insert_after_node__WEBPACK_IMPORTED_MODULE_28__.insertAfterNode),
/* harmony export */   insertBeforeNode: () => (/* reexport safe */ _node_insert_node_insert_before_node__WEBPACK_IMPORTED_MODULE_29__.insertBeforeNode),
/* harmony export */   isLocked: () => (/* reexport safe */ _node_is_locked__WEBPACK_IMPORTED_MODULE_30__.isLocked),
/* harmony export */   isValidHexColor: () => (/* reexport safe */ _color_is_valid_hex_color__WEBPACK_IMPORTED_MODULE_3__.isValidHexColor),
/* harmony export */   isValidNumericInput: () => (/* reexport safe */ _number_is_valid_numeric_input__WEBPACK_IMPORTED_MODULE_44__.isValidNumericInput),
/* harmony export */   isVisible: () => (/* reexport safe */ _node_is_visible__WEBPACK_IMPORTED_MODULE_31__.isVisible),
/* harmony export */   isWithinInstanceNode: () => (/* reexport safe */ _node_is_within_instance_node__WEBPACK_IMPORTED_MODULE_32__.isWithinInstanceNode),
/* harmony export */   loadFontsAsync: () => (/* reexport safe */ _node_load_fonts_async__WEBPACK_IMPORTED_MODULE_33__.loadFontsAsync),
/* harmony export */   loadSettingsAsync: () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_50__.loadSettingsAsync),
/* harmony export */   on: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_4__.on),
/* harmony export */   once: () => (/* reexport safe */ _events__WEBPACK_IMPORTED_MODULE_4__.once),
/* harmony export */   pluralize: () => (/* reexport safe */ _string_pluralize__WEBPACK_IMPORTED_MODULE_52__.pluralize),
/* harmony export */   readBytesFromCanvasElementAsync: () => (/* reexport safe */ _image_read_bytes_from_canvas_element_async__WEBPACK_IMPORTED_MODULE_12__.readBytesFromCanvasElementAsync),
/* harmony export */   resetDocumentUseCount: () => (/* reexport safe */ _monetization_document_use_count__WEBPACK_IMPORTED_MODULE_14__.resetDocumentUseCount),
/* harmony export */   resetTotalUseCountAsync: () => (/* reexport safe */ _monetization_total_use_count__WEBPACK_IMPORTED_MODULE_17__.resetTotalUseCountAsync),
/* harmony export */   saveSettingsAsync: () => (/* reexport safe */ _settings__WEBPACK_IMPORTED_MODULE_50__.saveSettingsAsync),
/* harmony export */   setAbsolutePosition: () => (/* reexport safe */ _node_absolute_position_set_absolute_position__WEBPACK_IMPORTED_MODULE_19__.setAbsolutePosition),
/* harmony export */   setRelaunchButton: () => (/* reexport safe */ _node_relaunch_button_set_relaunch_button__WEBPACK_IMPORTED_MODULE_34__.setRelaunchButton),
/* harmony export */   showUI: () => (/* reexport safe */ _ui__WEBPACK_IMPORTED_MODULE_53__.showUI),
/* harmony export */   sortNodesByCanonicalOrder: () => (/* reexport safe */ _node_sort_nodes_sort_nodes_by_canonical_order__WEBPACK_IMPORTED_MODULE_38__.sortNodesByCanonicalOrder),
/* harmony export */   sortNodesByName: () => (/* reexport safe */ _node_sort_nodes_sort_nodes_by_name__WEBPACK_IMPORTED_MODULE_39__.sortNodesByName),
/* harmony export */   traverseNode: () => (/* reexport safe */ _node_traverse_node__WEBPACK_IMPORTED_MODULE_41__.traverseNode),
/* harmony export */   traverseNodeAsync: () => (/* reexport safe */ _node_traverse_node_async__WEBPACK_IMPORTED_MODULE_42__.traverseNodeAsync),
/* harmony export */   unsetRelaunchButton: () => (/* reexport safe */ _node_relaunch_button_unset_relaunch_button__WEBPACK_IMPORTED_MODULE_35__.unsetRelaunchButton),
/* harmony export */   updateNodesSortOrder: () => (/* reexport safe */ _node_sort_nodes_update_nodes_sort_order__WEBPACK_IMPORTED_MODULE_40__.updateNodesSortOrder),
/* harmony export */   validateGumroadLicenseKeyMainAsync: () => (/* reexport safe */ _monetization_gumroad_validate_gumroad_license_key_main_async__WEBPACK_IMPORTED_MODULE_15__.validateGumroadLicenseKeyMainAsync),
/* harmony export */   validateGumroadLicenseKeyUiAsync: () => (/* reexport safe */ _monetization_gumroad_validate_gumroad_license_key_ui_async__WEBPACK_IMPORTED_MODULE_16__.validateGumroadLicenseKeyUiAsync)
/* harmony export */ });
/* harmony import */ var _color_convert_hex_color_to_rgb_color__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./color/convert-hex-color-to-rgb-color */ "./src/utilities/color/convert-hex-color-to-rgb-color.ts");
/* harmony import */ var _color_convert_named_color_to_hex_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./color/convert-named-color-to-hex-color */ "./src/utilities/color/convert-named-color-to-hex-color.ts");
/* harmony import */ var _color_convert_rgb_color_to_hex_color__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./color/convert-rgb-color-to-hex-color */ "./src/utilities/color/convert-rgb-color-to-hex-color.ts");
/* harmony import */ var _color_is_valid_hex_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./color/is-valid-hex-color */ "./src/utilities/color/is-valid-hex-color.ts");
/* harmony import */ var _events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./events */ "./src/utilities/events.ts");
/* harmony import */ var _function_ensure_minimum_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./function/ensure-minimum-time */ "./src/utilities/function/ensure-minimum-time.ts");
/* harmony import */ var _image_create_canvas_element_from_blob_async__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./image/create-canvas-element-from-blob-async */ "./src/utilities/image/create-canvas-element-from-blob-async.ts");
/* harmony import */ var _image_create_canvas_element_from_bytes_async__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image/create-canvas-element-from-bytes-async */ "./src/utilities/image/create-canvas-element-from-bytes-async.ts");
/* harmony import */ var _image_create_canvas_element_from_image_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./image/create-canvas-element-from-image-element */ "./src/utilities/image/create-canvas-element-from-image-element.ts");
/* harmony import */ var _image_create_image_element_from_blob_async__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./image/create-image-element-from-blob-async */ "./src/utilities/image/create-image-element-from-blob-async.ts");
/* harmony import */ var _image_create_image_element_from_bytes_async__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./image/create-image-element-from-bytes-async */ "./src/utilities/image/create-image-element-from-bytes-async.ts");
/* harmony import */ var _image_create_image_paint__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./image/create-image-paint */ "./src/utilities/image/create-image-paint.ts");
/* harmony import */ var _image_read_bytes_from_canvas_element_async__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./image/read-bytes-from-canvas-element-async */ "./src/utilities/image/read-bytes-from-canvas-element-async.ts");
/* harmony import */ var _mixed_values__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./mixed-values */ "./src/utilities/mixed-values.ts");
/* harmony import */ var _monetization_document_use_count__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./monetization/document-use-count */ "./src/utilities/monetization/document-use-count.ts");
/* harmony import */ var _monetization_gumroad_validate_gumroad_license_key_main_async__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./monetization/gumroad/validate-gumroad-license-key-main-async */ "./src/utilities/monetization/gumroad/validate-gumroad-license-key-main-async.ts");
/* harmony import */ var _monetization_gumroad_validate_gumroad_license_key_ui_async__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./monetization/gumroad/validate-gumroad-license-key-ui-async */ "./src/utilities/monetization/gumroad/validate-gumroad-license-key-ui-async.ts");
/* harmony import */ var _monetization_total_use_count__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./monetization/total-use-count */ "./src/utilities/monetization/total-use-count.ts");
/* harmony import */ var _node_absolute_position_get_absolute_position__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./node/absolute-position/get-absolute-position */ "./src/utilities/node/absolute-position/get-absolute-position.ts");
/* harmony import */ var _node_absolute_position_set_absolute_position__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./node/absolute-position/set-absolute-position */ "./src/utilities/node/absolute-position/set-absolute-position.ts");
/* harmony import */ var _node_collapse_layer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./node/collapse-layer */ "./src/utilities/node/collapse-layer.ts");
/* harmony import */ var _node_compute_bounding_box__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./node/compute-bounding-box */ "./src/utilities/node/compute-bounding-box.ts");
/* harmony import */ var _node_compute_maximum_bounds__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./node/compute-maximum-bounds */ "./src/utilities/node/compute-maximum-bounds.ts");
/* harmony import */ var _node_deduplicate_nodes__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./node/deduplicate-nodes */ "./src/utilities/node/deduplicate-nodes.ts");
/* harmony import */ var _node_get_nodes_get_document_components__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./node/get-nodes/get-document-components */ "./src/utilities/node/get-nodes/get-document-components.ts");
/* harmony import */ var _node_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./node/get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");
/* harmony import */ var _node_get_nodes_get_scene_node_by_id__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./node/get-nodes/get-scene-node-by-id */ "./src/utilities/node/get-nodes/get-scene-node-by-id.ts");
/* harmony import */ var _node_get_nodes_get_selected_nodes_or_all_nodes__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./node/get-nodes/get-selected-nodes-or-all-nodes */ "./src/utilities/node/get-nodes/get-selected-nodes-or-all-nodes.ts");
/* harmony import */ var _node_insert_node_insert_after_node__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./node/insert-node/insert-after-node */ "./src/utilities/node/insert-node/insert-after-node.ts");
/* harmony import */ var _node_insert_node_insert_before_node__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./node/insert-node/insert-before-node */ "./src/utilities/node/insert-node/insert-before-node.ts");
/* harmony import */ var _node_is_locked__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./node/is-locked */ "./src/utilities/node/is-locked.ts");
/* harmony import */ var _node_is_visible__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./node/is-visible */ "./src/utilities/node/is-visible.ts");
/* harmony import */ var _node_is_within_instance_node__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./node/is-within-instance-node */ "./src/utilities/node/is-within-instance-node.ts");
/* harmony import */ var _node_load_fonts_async__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./node/load-fonts-async */ "./src/utilities/node/load-fonts-async.ts");
/* harmony import */ var _node_relaunch_button_set_relaunch_button__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./node/relaunch-button/set-relaunch-button */ "./src/utilities/node/relaunch-button/set-relaunch-button.ts");
/* harmony import */ var _node_relaunch_button_unset_relaunch_button__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./node/relaunch-button/unset-relaunch-button */ "./src/utilities/node/relaunch-button/unset-relaunch-button.ts");
/* harmony import */ var _node_sibling_nodes_are_sibling_nodes__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./node/sibling-nodes/are-sibling-nodes */ "./src/utilities/node/sibling-nodes/are-sibling-nodes.ts");
/* harmony import */ var _node_sibling_nodes_compute_sibling_nodes__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./node/sibling-nodes/compute-sibling-nodes */ "./src/utilities/node/sibling-nodes/compute-sibling-nodes.ts");
/* harmony import */ var _node_sort_nodes_sort_nodes_by_canonical_order__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./node/sort-nodes/sort-nodes-by-canonical-order */ "./src/utilities/node/sort-nodes/sort-nodes-by-canonical-order.ts");
/* harmony import */ var _node_sort_nodes_sort_nodes_by_name__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./node/sort-nodes/sort-nodes-by-name */ "./src/utilities/node/sort-nodes/sort-nodes-by-name.ts");
/* harmony import */ var _node_sort_nodes_update_nodes_sort_order__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./node/sort-nodes/update-nodes-sort-order */ "./src/utilities/node/sort-nodes/update-nodes-sort-order.ts");
/* harmony import */ var _node_traverse_node__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./node/traverse-node */ "./src/utilities/node/traverse-node.ts");
/* harmony import */ var _node_traverse_node_async__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./node/traverse-node-async */ "./src/utilities/node/traverse-node-async.ts");
/* harmony import */ var _number_evaluate_numeric_expression__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./number/evaluate-numeric-expression */ "./src/utilities/number/evaluate-numeric-expression.ts");
/* harmony import */ var _number_is_valid_numeric_input__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./number/is-valid-numeric-input */ "./src/utilities/number/is-valid-numeric-input.ts");
/* harmony import */ var _object_clone_object__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./object/clone-object */ "./src/utilities/object/clone-object.ts");
/* harmony import */ var _object_compare_objects__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./object/compare-objects */ "./src/utilities/object/compare-objects.ts");
/* harmony import */ var _object_compare_string_arrays__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./object/compare-string-arrays */ "./src/utilities/object/compare-string-arrays.ts");
/* harmony import */ var _object_deduplicate_array__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./object/deduplicate-array */ "./src/utilities/object/deduplicate-array.ts");
/* harmony import */ var _object_extract_attributes__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./object/extract-attributes */ "./src/utilities/object/extract-attributes.ts");
/* harmony import */ var _settings__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./settings */ "./src/utilities/settings.ts");
/* harmony import */ var _string_format_message__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./string/format-message */ "./src/utilities/string/format-message.ts");
/* harmony import */ var _string_pluralize__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./string/pluralize */ "./src/utilities/string/pluralize.ts");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./ui */ "./src/utilities/ui.ts");
// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
























































/***/ }),

/***/ "./src/utilities/mixed-values.ts":
/*!***************************************!*\
  !*** ./src/utilities/mixed-values.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   MIXED_NUMBER: () => (/* binding */ MIXED_NUMBER),
/* harmony export */   MIXED_STRING: () => (/* binding */ MIXED_STRING)
/* harmony export */ });
const MIXED_NUMBER = 999999999999999;
const MIXED_STRING = '999999999999999';


/***/ }),

/***/ "./src/utilities/monetization/document-use-count.ts":
/*!**********************************************************!*\
  !*** ./src/utilities/monetization/document-use-count.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocumentUseCount: () => (/* binding */ getDocumentUseCount),
/* harmony export */   incrementDocumentUseCount: () => (/* binding */ incrementDocumentUseCount),
/* harmony export */   resetDocumentUseCount: () => (/* binding */ resetDocumentUseCount)
/* harmony export */ });
const DEFAULT_KEY = 'documentUseCount';
/**
 * Returns the plugin’s use count for the current document.
 *
 * @param key  The key on the current document on which to store the use
 * count. Defaults to `'documentUseCount'`.
 * @category Monetization
 */
function getDocumentUseCount(key = DEFAULT_KEY) {
    const value = figma.root.getPluginData(key);
    if (value === '') {
        return 0;
    }
    const pluginData = JSON.parse(value);
    return pluginData.useCount;
}
/**
 * Increments the plugin’s use count for the current document.
 *
 * @param key  The key on the current document on which to store the use
 * count. Defaults to `'documentUseCount'`.
 * @returns Returns the plugin’s new use count for the current document.
 * @category Monetization
 */
function incrementDocumentUseCount(key = DEFAULT_KEY) {
    const useCount = getDocumentUseCount(key);
    const pluginData = {
        useCount: useCount + 1
    };
    figma.root.setPluginData(key, JSON.stringify(pluginData));
    return pluginData.useCount;
}
/**
 * Resets the plugin’s use count for the current document to `0`.
 *
 * @param key  The key on the current document on which to store the use
 * count. Defaults to `'documentUseCount'`.
 * @category Monetization
 */
function resetDocumentUseCount(key = DEFAULT_KEY) {
    const pluginData = {
        useCount: 0
    };
    figma.root.setPluginData(key, JSON.stringify(pluginData));
}


/***/ }),

/***/ "./src/utilities/monetization/gumroad/private/empty-license.ts":
/*!*********************************************************************!*\
  !*** ./src/utilities/monetization/gumroad/private/empty-license.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   emptyLicense: () => (/* binding */ emptyLicense)
/* harmony export */ });
const emptyLicense = {
    email: null,
    licenseKey: null,
    purchaseTimestamp: null,
    validationTimestamp: null,
    variant: null
};


/***/ }),

/***/ "./src/utilities/monetization/gumroad/validate-gumroad-license-key-main-async.ts":
/*!***************************************************************************************!*\
  !*** ./src/utilities/monetization/gumroad/validate-gumroad-license-key-main-async.ts ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateGumroadLicenseKeyMainAsync: () => (/* binding */ validateGumroadLicenseKeyMainAsync)
/* harmony export */ });
/* harmony import */ var _private_empty_license__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/empty-license */ "./src/utilities/monetization/gumroad/private/empty-license.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Validates the given [Gumroad license key](https://help.gumroad.com/article/76-license-keys)
 * for the product with the given `productPermalink` in the
 * [main context](https://figma.com/plugin-docs/how-plugins-run/).
 *
 * @param options.productPermalink  The Gumroad “product permalink”. If the
 * Gumroad product URL is `https://gumroad.com/l/QGMY`, then the product
 * permalink is `'QGMY'`.
 * @param options.licenseKey  The Gumroad license key to validate.
 * @param options.incrementUseCount  Set to `true` to increment the license
 * key use count tracked by Gumroad. Defaults to `false`.
 * @return Returns a
 * [`LicenseKeyValidationResult`](https://github.com/yuanqing/create-figma-plugin/blob/main/packages/utilities/src/monetization/types.ts) object.
 * @category Monetization
 */
function validateGumroadLicenseKeyMainAsync(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { licenseKey, productPermalink } = options;
        const incrementUseCount = options.incrementUseCount === true ? 'true' : 'false';
        const trimmedLicenseKey = licenseKey.trim();
        if (trimmedLicenseKey === '') {
            return Object.assign(Object.assign({}, _private_empty_license__WEBPACK_IMPORTED_MODULE_0__.emptyLicense), { result: 'INVALID_EMPTY' });
        }
        if (trimmedLicenseKey.length !== 35) {
            return Object.assign(Object.assign({}, _private_empty_license__WEBPACK_IMPORTED_MODULE_0__.emptyLicense), { result: 'INVALID' });
        }
        const onmessage = figma.ui.onmessage; // Keep a reference to the previous `figma.ui.onmessage`
        return new Promise(function (resolve) {
            figma.ui.onmessage = function (result) {
                figma.ui.onmessage = onmessage;
                resolve(result);
                figma.ui.close();
            };
            const validationTimestamp = new Date().toISOString();
            // The script below is inserted via `scripts/interpolate-gumroad-script.ts`
            const __html__ = `<script>const emptyLicense={email:null,licenseKey:null,purchaseTimestamp:null,validationTimestamp:null,variant:null};async function main(){async function n(){try{const t=await(await window.fetch("https://api.gumroad.com/v2/licenses/verify",{body:"increment_uses_count=${incrementUseCount}&license_key="+encodeURIComponent("${trimmedLicenseKey}")+"&product_permalink="+encodeURIComponent("${productPermalink}"),headers:{"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"},method:"POST"})).json(),{purchase:e,success:a}=t;return a===!1||e.chargebacked===!0||e.disputed===!0||e.refunded===!0?{...emptyLicense,result:"INVALID"}:{email:e.email,licenseKey:"${trimmedLicenseKey}",purchaseTimestamp:e.sale_timestamp,result:"VALID",validationTimestamp:"${validationTimestamp}",variant:e.variants===""?null:e.variants}}catch{return{...emptyLicense,result:"ENDPOINT_DOWN"}}}window.parent.postMessage({pluginMessage:await n()},"*")}main();</script>`;
            figma.showUI(__html__, { visible: false });
        });
    });
}


/***/ }),

/***/ "./src/utilities/monetization/gumroad/validate-gumroad-license-key-ui-async.ts":
/*!*************************************************************************************!*\
  !*** ./src/utilities/monetization/gumroad/validate-gumroad-license-key-ui-async.ts ***!
  \*************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   validateGumroadLicenseKeyUiAsync: () => (/* binding */ validateGumroadLicenseKeyUiAsync)
/* harmony export */ });
/* harmony import */ var _private_empty_license__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/empty-license */ "./src/utilities/monetization/gumroad/private/empty-license.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

/**
 * Validates the given [Gumroad license key](https://help.gumroad.com/article/76-license-keys)
 * for the product with the given `productPermalink` in the
 * [UI context](https://figma.com/plugin-docs/how-plugins-run/).
 *
 * @param options.productPermalink  The Gumroad “product permalink”. If the
 * Gumroad product URL is `https://gumroad.com/l/QGMY`, then the product
 * permalink is `'QGMY'`.
 * @param options.licenseKey  The Gumroad license key to validate.
 * @param options.incrementUseCount  Set to `true` to increment the license
 * key use count tracked by Gumroad. Defaults to `false`.
 * @return Returns a
 * [`LicenseKeyValidationResult`](https://github.com/yuanqing/create-figma-plugin/blob/main/packages/utilities/src/monetization/types.ts) object.
 * @category Monetization
 */
function validateGumroadLicenseKeyUiAsync(options) {
    return __awaiter(this, void 0, void 0, function* () {
        const { licenseKey, productPermalink } = options;
        const incrementUseCount = options.incrementUseCount === true ? 'true' : 'false';
        const trimmedLicenseKey = licenseKey.trim();
        if (trimmedLicenseKey === '') {
            return Object.assign(Object.assign({}, _private_empty_license__WEBPACK_IMPORTED_MODULE_0__.emptyLicense), { result: 'INVALID_EMPTY' });
        }
        if (trimmedLicenseKey.length !== 35) {
            return Object.assign(Object.assign({}, _private_empty_license__WEBPACK_IMPORTED_MODULE_0__.emptyLicense), { result: 'INVALID' });
        }
        try {
            const response = yield window.fetch('https://api.gumroad.com/v2/licenses/verify', {
                body: `increment_uses_count=${incrementUseCount}&license_key=` +
                    encodeURIComponent(trimmedLicenseKey) +
                    '&product_permalink=' +
                    encodeURIComponent(productPermalink),
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                method: 'POST'
            });
            const json = yield response.json();
            const { purchase, success } = json;
            if (success === false ||
                purchase.chargebacked === true ||
                purchase.disputed === true ||
                purchase.refunded === true) {
                return Object.assign(Object.assign({}, _private_empty_license__WEBPACK_IMPORTED_MODULE_0__.emptyLicense), { result: 'INVALID' });
            }
            return {
                email: purchase.email,
                licenseKey: trimmedLicenseKey,
                purchaseTimestamp: purchase.sale_timestamp,
                result: 'VALID',
                validationTimestamp: new Date().toISOString(),
                variant: purchase.variants === '' ? null : purchase.variants
            };
        }
        catch (_a) {
            return Object.assign(Object.assign({}, _private_empty_license__WEBPACK_IMPORTED_MODULE_0__.emptyLicense), { result: 'ENDPOINT_DOWN' });
        }
    });
}


/***/ }),

/***/ "./src/utilities/monetization/total-use-count.ts":
/*!*******************************************************!*\
  !*** ./src/utilities/monetization/total-use-count.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTotalUseCountAsync: () => (/* binding */ getTotalUseCountAsync),
/* harmony export */   incrementTotalUseCountAsync: () => (/* binding */ incrementTotalUseCountAsync),
/* harmony export */   resetTotalUseCountAsync: () => (/* binding */ resetTotalUseCountAsync)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_KEY = 'totalUseCount';
/**
 * Returns the plugin’s total use count.
 *
 * @param key  The key in [`figma.clientStorage`](https://figma.com/plugin-docs/api/figma-clientStorage/)
 * on which to store the use count. Defaults to `'totalUseCount'`.
 * @category Monetization
 */
function getTotalUseCountAsync(key = DEFAULT_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        const useCount = yield figma.clientStorage.getAsync(key);
        if (typeof useCount === 'undefined') {
            return 0;
        }
        return useCount;
    });
}
/**
 * Increments the plugin’s total use count.
 *
 * @param key  The key in [`figma.clientStorage`](https://figma.com/plugin-docs/api/figma-clientStorage/)
 * on which to store the use count. Defaults to `'totalUseCount'`.
 * @returns Returns the plugin’s new total use count.
 * @category Monetization
 */
function incrementTotalUseCountAsync(key = DEFAULT_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        const useCount = yield getTotalUseCountAsync(key);
        const newUseCount = useCount + 1;
        yield figma.clientStorage.setAsync(key, newUseCount);
        return newUseCount;
    });
}
/**
 * Resets the plugin’s total use count to `0`.
 *
 * @param key  The key in [`figma.clientStorage`](https://figma.com/plugin-docs/api/figma-clientStorage/)
 * on which to store the use count. Defaults to `'totalUseCount'`.
 * @category Monetization
 */
function resetTotalUseCountAsync(key = DEFAULT_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.clientStorage.setAsync(key, 0);
    });
}


/***/ }),

/***/ "./src/utilities/node/absolute-position/get-absolute-position.ts":
/*!***********************************************************************!*\
  !*** ./src/utilities/node/absolute-position/get-absolute-position.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAbsolutePosition: () => (/* binding */ getAbsolutePosition)
/* harmony export */ });
/**
 * Returns the `x` and `y` position of the given `node` relative to the page.
 *
 * @returns Returns a [`Vector`](https://figma.com/plugin-docs/api/Vector/).
 * @category Node
 */
function getAbsolutePosition(node) {
    return {
        x: node.absoluteTransform[0][2],
        y: node.absoluteTransform[1][2]
    };
}


/***/ }),

/***/ "./src/utilities/node/absolute-position/set-absolute-position.ts":
/*!***********************************************************************!*\
  !*** ./src/utilities/node/absolute-position/set-absolute-position.ts ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setAbsolutePosition: () => (/* binding */ setAbsolutePosition)
/* harmony export */ });
/**
 * Moves the `node` to the given `x` and `y` position relative to the page.
 * At least one of `x` or `y` of `vector` must be specified.
 *
 * @category Node
 */
function setAbsolutePosition(node, vector) {
    if (typeof vector.x === 'undefined' && typeof vector.y === 'undefined') {
        throw new Error('Need at least one of `x` or `y`');
    }
    let x = typeof vector.x === 'undefined' ? null : vector.x;
    let y = typeof vector.y === 'undefined' ? null : vector.y;
    let parentNode = node.parent;
    while (parentNode !== null && parentNode.type !== 'PAGE') {
        if (parentNode.type === 'FRAME' || parentNode.type === 'SECTION') {
            if (x !== null) {
                x = x - parentNode.x;
            }
            if (y !== null) {
                y = y - parentNode.y;
            }
        }
        parentNode = parentNode.parent;
    }
    if (x !== null) {
        node.x = x;
    }
    if (y !== null) {
        node.y = y;
    }
}


/***/ }),

/***/ "./src/utilities/node/collapse-layer.ts":
/*!**********************************************!*\
  !*** ./src/utilities/node/collapse-layer.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   collapseLayer: () => (/* binding */ collapseLayer)
/* harmony export */ });
/* harmony import */ var _traverse_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./traverse-node */ "./src/utilities/node/traverse-node.ts");

/**
 * Collapses `node` and all its child nodes in the layer list.
 *
 * @returns Returns `true` if at least one layer in the layer list was
 * collapsed by the function, else `false`.
 * @category Node
 */
function collapseLayer(node) {
    let didChange = false;
    (0,_traverse_node__WEBPACK_IMPORTED_MODULE_0__.traverseNode)(node, function (node) {
        if ('expanded' in node && node.expanded === true) {
            node.expanded = false;
            didChange = true;
        }
    });
    return didChange;
}


/***/ }),

/***/ "./src/utilities/node/compute-bounding-box.ts":
/*!****************************************************!*\
  !*** ./src/utilities/node/compute-bounding-box.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeBoundingBox: () => (/* binding */ computeBoundingBox)
/* harmony export */ });
/* harmony import */ var _absolute_position_get_absolute_position__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./absolute-position/get-absolute-position */ "./src/utilities/node/absolute-position/get-absolute-position.ts");
/* harmony import */ var _get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");


/**
 * Computes the coordinates (`x`, `y`) and dimensions (`width`, `height`) of
 * the smallest bounding box that contains the given `node`. (Does not account
 * for strokes or effects that could extend beyond the node’s bounding box.)
 *
 * @returns Returns the bounding box as a [`Rect`](https://figma.com/plugin-docs/api/Rect/).
 * @category Node
 */
function computeBoundingBox(node) {
    if ('rotation' in node && node.rotation === 0) {
        const absolutePosition = (0,_absolute_position_get_absolute_position__WEBPACK_IMPORTED_MODULE_0__.getAbsolutePosition)(node);
        const { width, height } = node;
        return Object.assign(Object.assign({}, absolutePosition), { height, width });
    }
    const parentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_1__.getParentNode)(node);
    const index = parentNode.children.indexOf(node);
    const group = figma.group([node], parentNode, index);
    const absolutePosition = (0,_absolute_position_get_absolute_position__WEBPACK_IMPORTED_MODULE_0__.getAbsolutePosition)(group);
    const { width, height } = group;
    parentNode.insertChild(index, node);
    return Object.assign(Object.assign({}, absolutePosition), { height, width });
}


/***/ }),

/***/ "./src/utilities/node/compute-maximum-bounds.ts":
/*!******************************************************!*\
  !*** ./src/utilities/node/compute-maximum-bounds.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeMaximumBounds: () => (/* binding */ computeMaximumBounds)
/* harmony export */ });
/* harmony import */ var _compute_bounding_box__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute-bounding-box */ "./src/utilities/node/compute-bounding-box.ts");

/**
 * Computes the absolute coordinates of the top-left and bottom-right
 * corners of the smallest bounding box that contains the given `nodes`.
 * (Does not account for strokes or effects that could extend beyond the
 * nodes’ bounding box.)
 *
 * @returns Returns an array of two [`Vector`](https://figma.com/plugin-docs/api/Vector/)
 * objects, one for the top-left corner and another for the
 * bottom-right corner.
 * @category Node
 */
function computeMaximumBounds(nodes) {
    let maximumBounds = [
        {
            x: Number.MAX_VALUE,
            y: Number.MAX_VALUE
        },
        {
            x: -1 * Number.MAX_VALUE,
            y: -1 * Number.MAX_VALUE
        }
    ];
    for (const node of nodes) {
        const { x, y, width, height } = (0,_compute_bounding_box__WEBPACK_IMPORTED_MODULE_0__.computeBoundingBox)(node);
        maximumBounds = [
            {
                x: Math.min(maximumBounds[0].x, x),
                y: Math.min(maximumBounds[0].y, y)
            },
            {
                x: Math.max(maximumBounds[1].x, x + width),
                y: Math.max(maximumBounds[1].y, y + height)
            }
        ];
    }
    return maximumBounds;
}


/***/ }),

/***/ "./src/utilities/node/deduplicate-nodes.ts":
/*!*************************************************!*\
  !*** ./src/utilities/node/deduplicate-nodes.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deduplicateNodes: () => (/* binding */ deduplicateNodes)
/* harmony export */ });
/**
 * Returns the result of deduplicating the nodes in `nodes`. Does not modify
 * the original `nodes` array.
 *
 * @returns Returns a new array of unique `SceneNode` objects.
 * @category Node
 */
function deduplicateNodes(nodes) {
    const result = {};
    for (const node of nodes) {
        result[node.id] = node;
    }
    return Object.values(result);
}


/***/ }),

/***/ "./src/utilities/node/get-nodes/get-document-components.ts":
/*!*****************************************************************!*\
  !*** ./src/utilities/node/get-nodes/get-document-components.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDocumentComponents: () => (/* binding */ getDocumentComponents)
/* harmony export */ });
/* harmony import */ var _traverse_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../traverse-node */ "./src/utilities/node/traverse-node.ts");

/**
 * Returns all the local Components in the current document.
 *
 * @category Node
 */
function getDocumentComponents() {
    const result = [];
    for (const page of figma.root.children) {
        for (const node of page.children) {
            (0,_traverse_node__WEBPACK_IMPORTED_MODULE_0__.traverseNode)(node, function (node) {
                if (node.type === 'COMPONENT') {
                    result.push(node);
                }
            }, function (node) {
                const { type } = node;
                return type === 'COMPONENT' || type === 'FRAME' || type === 'GROUP';
            });
        }
    }
    return result;
}


/***/ }),

/***/ "./src/utilities/node/get-nodes/get-parent-node.ts":
/*!*********************************************************!*\
  !*** ./src/utilities/node/get-nodes/get-parent-node.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getParentNode: () => (/* binding */ getParentNode)
/* harmony export */ });
/**
 * Returns the parent node of the given `node`.
 *
 * @returns Throws an error if `node.parent` is `null`, else returns
 * `node.parent`.
 * @category Node
 */
function getParentNode(node) {
    const parentNode = node.parent;
    if (parentNode === null) {
        throw new Error(`\`node.parent\` is \`null\``);
    }
    return parentNode;
}


/***/ }),

/***/ "./src/utilities/node/get-nodes/get-scene-node-by-id.ts":
/*!**************************************************************!*\
  !*** ./src/utilities/node/get-nodes/get-scene-node-by-id.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSceneNodeById: () => (/* binding */ getSceneNodeById)
/* harmony export */ });
/**
 * Returns the `SceneNode` in the current document with the given `id`. This
 * is a convenience function that wraps the [`figma.getNodeById`](https://figma.com/plugin-docs/api/figma/#getnodebyid)
 * function.
 *
 * @returns Throws an error if no `SceneNode` with the given `id` exists, else
 * returns the node cast to the specified `Node` type parameter.
 * @category Node
 */
function getSceneNodeById(id) {
    const node = figma.getNodeById(id);
    if (node === null) {
        throw new Error(`No node found with \`id\`: ${id}`);
    }
    if (node.type === 'DOCUMENT' || node.type === 'PAGE') {
        throw new Error('`node` is not a `SceneNode`');
    }
    return node;
}


/***/ }),

/***/ "./src/utilities/node/get-nodes/get-selected-nodes-or-all-nodes.ts":
/*!*************************************************************************!*\
  !*** ./src/utilities/node/get-nodes/get-selected-nodes-or-all-nodes.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getSelectedNodesOrAllNodes: () => (/* binding */ getSelectedNodesOrAllNodes)
/* harmony export */ });
/**
 * Returns the selected nodes, or all the top-level nodes on the current page
 * if no nodes are selected.
 *
 * @category Node
 */
function getSelectedNodesOrAllNodes() {
    const selectedNodes = figma.currentPage.selection;
    if (selectedNodes.length > 0) {
        return selectedNodes.slice();
    }
    return figma.currentPage.children.slice();
}


/***/ }),

/***/ "./src/utilities/node/insert-node/insert-after-node.ts":
/*!*************************************************************!*\
  !*** ./src/utilities/node/insert-node/insert-after-node.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertAfterNode: () => (/* binding */ insertAfterNode)
/* harmony export */ });
/* harmony import */ var _get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");

/**
 * Inserts `node` *after* the `referenceNode` in the layer list.
 *
 * @category Node
 */
function insertAfterNode(node, referenceNode) {
    const parentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(referenceNode);
    const index = parentNode.children.indexOf(referenceNode);
    parentNode.insertChild(index, node);
}


/***/ }),

/***/ "./src/utilities/node/insert-node/insert-before-node.ts":
/*!**************************************************************!*\
  !*** ./src/utilities/node/insert-node/insert-before-node.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   insertBeforeNode: () => (/* binding */ insertBeforeNode)
/* harmony export */ });
/* harmony import */ var _get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");

/**
 * Inserts `node` *before* the `referenceNode` in the layer list.
 *
 * @category Node
 */
function insertBeforeNode(node, referenceNode) {
    const parentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(referenceNode);
    const index = parentNode.children.indexOf(referenceNode);
    parentNode.insertChild(index + 1, node);
}


/***/ }),

/***/ "./src/utilities/node/is-locked.ts":
/*!*****************************************!*\
  !*** ./src/utilities/node/is-locked.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isLocked: () => (/* binding */ isLocked)
/* harmony export */ });
/**
 * Checks if the given `node` is locked.
 *
 * @returns Returns `true` if the `node` or one of its parent nodes is locked,
 * else `false`.
 * @category Node
 */
function isLocked(node) {
    if (node.locked === true) {
        return true;
    }
    if (node.parent === null || node.parent.type === 'PAGE') {
        return false;
    }
    return isLocked(node.parent);
}


/***/ }),

/***/ "./src/utilities/node/is-visible.ts":
/*!******************************************!*\
  !*** ./src/utilities/node/is-visible.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isVisible: () => (/* binding */ isVisible)
/* harmony export */ });
/**
 * Checks if the given `node` is visible.
 *
 * @returns Returns `true` if the `node` and all its parent nodes are visible,
 * else `false`.
 * @category Node
 */
function isVisible(node) {
    if (node.visible === false) {
        return false;
    }
    if (node.parent === null || node.parent.type === 'PAGE') {
        return true;
    }
    return isVisible(node.parent);
}


/***/ }),

/***/ "./src/utilities/node/is-within-instance-node.ts":
/*!*******************************************************!*\
  !*** ./src/utilities/node/is-within-instance-node.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isWithinInstanceNode: () => (/* binding */ isWithinInstanceNode)
/* harmony export */ });
/**
 * Checks if the given `node` is within an Instance node.
 *
 * @returns Returns `true` if the `node` is within an Instance node,
 * else `false`.
 * @category Node
 */
function isWithinInstanceNode(node) {
    const parentNode = node.parent;
    if (parentNode === null ||
        parentNode.type === 'DOCUMENT' ||
        parentNode.type === 'PAGE') {
        return false;
    }
    if (parentNode.type === 'INSTANCE') {
        return true;
    }
    return isWithinInstanceNode(parentNode);
}


/***/ }),

/***/ "./src/utilities/node/load-fonts-async.ts":
/*!************************************************!*\
  !*** ./src/utilities/node/load-fonts-async.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadFontsAsync: () => (/* binding */ loadFontsAsync)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * Loads the fonts used in all the text nodes within the `nodes` array. [This
 * function must be called before modifying any property of a text node that
 * may cause the rendered text to change.](https://www.figma.com/plugin-docs/working-with-text/#loading-fonts)
 *
 * @category Node
 */
function loadFontsAsync(nodes) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = {};
        for (const node of nodes) {
            switch (node.type) {
                case 'CONNECTOR':
                case 'SHAPE_WITH_TEXT':
                case 'STICKY': {
                    collectFontsUsedInNode(node.text, result);
                    break;
                }
                case 'TEXT': {
                    collectFontsUsedInNode(node, result);
                    break;
                }
            }
        }
        yield Promise.all(Object.values(result).map(function (font) {
            return figma.loadFontAsync(font);
        }));
    });
}
function collectFontsUsedInNode(node, result) {
    const length = node.characters.length;
    if (length === 0) {
        const fontName = node.fontName;
        const key = createKey(fontName);
        if (key in result) {
            return;
        }
        result[key] = fontName;
        return;
    }
    let i = -1;
    while (++i < length) {
        const fontName = node.getRangeFontName(i, i + 1);
        const key = createKey(fontName);
        if (key in result) {
            continue;
        }
        result[key] = fontName;
    }
}
function createKey(fontName) {
    return `${fontName.family}-${fontName.style}`;
}


/***/ }),

/***/ "./src/utilities/node/relaunch-button/private/update-relaunch-buttons-data.ts":
/*!************************************************************************************!*\
  !*** ./src/utilities/node/relaunch-button/private/update-relaunch-buttons-data.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getRelaunchButtonsData: () => (/* binding */ getRelaunchButtonsData),
/* harmony export */   setRelaunchButtonsData: () => (/* binding */ setRelaunchButtonsData)
/* harmony export */ });
const RELAUNCH_BUTTONS_PLUGIN_DATA_KEY = 'relaunchButtons';
function getRelaunchButtonsData(node) {
    const pluginData = node.getPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY);
    if (pluginData === '') {
        return {};
    }
    return JSON.parse(pluginData);
}
function setRelaunchButtonsData(node, relaunchButtonsData) {
    if (Object.keys(relaunchButtonsData).length === 0) {
        node.setPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY, '');
        return;
    }
    node.setPluginData(RELAUNCH_BUTTONS_PLUGIN_DATA_KEY, JSON.stringify(relaunchButtonsData));
}


/***/ }),

/***/ "./src/utilities/node/relaunch-button/set-relaunch-button.ts":
/*!*******************************************************************!*\
  !*** ./src/utilities/node/relaunch-button/set-relaunch-button.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   setRelaunchButton: () => (/* binding */ setRelaunchButton)
/* harmony export */ });
/* harmony import */ var _private_update_relaunch_buttons_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/update-relaunch-buttons-data */ "./src/utilities/node/relaunch-button/private/update-relaunch-buttons-data.ts");

/**
 * Sets a [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
 * on `node` for the command with the given `relaunchButtonId` as configured
 * under the [**`"relaunchButtons"`**](<%- query('page', 'configuration').url %>#relaunchbuttons) key in `package.json`.
 * Any relaunch buttons set previously will be retained.
 *
 * See the [recipe for configuring relaunch buttons](<%- query('page', 'recipes').url %>#configuring-relaunch-buttons).
 *
 * @param options.description  The text to display below the relaunch button
 * in the Figma UI.
 * @category Node
 */
function setRelaunchButton(node, relaunchButtonId, options = { description: '' }) {
    const relaunchButtonsData = Object.assign(Object.assign({}, (0,_private_update_relaunch_buttons_data__WEBPACK_IMPORTED_MODULE_0__.getRelaunchButtonsData)(node)), { [relaunchButtonId]: options.description });
    (0,_private_update_relaunch_buttons_data__WEBPACK_IMPORTED_MODULE_0__.setRelaunchButtonsData)(node, relaunchButtonsData);
    node.setRelaunchData(relaunchButtonsData);
}


/***/ }),

/***/ "./src/utilities/node/relaunch-button/unset-relaunch-button.ts":
/*!*********************************************************************!*\
  !*** ./src/utilities/node/relaunch-button/unset-relaunch-button.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unsetRelaunchButton: () => (/* binding */ unsetRelaunchButton)
/* harmony export */ });
/* harmony import */ var _private_update_relaunch_buttons_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/update-relaunch-buttons-data */ "./src/utilities/node/relaunch-button/private/update-relaunch-buttons-data.ts");

/**
 * Unsets the [relaunch button](https://figma.com/plugin-docs/api/properties/nodes-setrelaunchdata/)
 * on `node` for the command with the given `relaunchButtonId`. If
 * `relaunchButtonId` is not specified, unsets all relaunch buttons on `node`.
 *
 * @category Node
 */
function unsetRelaunchButton(node, relaunchButtonId) {
    if (typeof relaunchButtonId === 'undefined') {
        (0,_private_update_relaunch_buttons_data__WEBPACK_IMPORTED_MODULE_0__.setRelaunchButtonsData)(node, {});
        node.setRelaunchData({});
        return;
    }
    const relaunchButtonsData = (0,_private_update_relaunch_buttons_data__WEBPACK_IMPORTED_MODULE_0__.getRelaunchButtonsData)(node);
    if (typeof relaunchButtonsData[relaunchButtonId] !== 'undefined') {
        delete relaunchButtonsData[relaunchButtonId];
    }
    (0,_private_update_relaunch_buttons_data__WEBPACK_IMPORTED_MODULE_0__.setRelaunchButtonsData)(node, relaunchButtonsData);
    node.setRelaunchData(relaunchButtonsData);
}


/***/ }),

/***/ "./src/utilities/node/sibling-nodes/are-sibling-nodes.ts":
/*!***************************************************************!*\
  !*** ./src/utilities/node/sibling-nodes/are-sibling-nodes.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   areSiblingNodes: () => (/* binding */ areSiblingNodes)
/* harmony export */ });
/* harmony import */ var _get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");

/**
 * Checks if all nodes in `nodes` are sibling nodes.
 *
 * @returns Returns `true` if all nodes in `nodes` are sibling nodes,
 * else `false`.
 * @category Node
 */
function areSiblingNodes(nodes) {
    if (nodes.length < 2) {
        return true;
    }
    const [firstNode, ...rest] = nodes;
    const firstParentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(firstNode);
    for (const node of rest) {
        if (node.parent === null || node.parent.id !== firstParentNode.id) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/utilities/node/sibling-nodes/compute-sibling-nodes.ts":
/*!*******************************************************************!*\
  !*** ./src/utilities/node/sibling-nodes/compute-sibling-nodes.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   computeSiblingNodes: () => (/* binding */ computeSiblingNodes)
/* harmony export */ });
/* harmony import */ var _get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");

/**
 * Splits `nodes` into groups of sibling nodes.
 *
 * @returns Returns an array of array of sibling `SceneNode` objects.
 * @category Node
 */
function computeSiblingNodes(nodes) {
    const groups = resolveGroups(nodes);
    const result = [];
    for (const group of groups) {
        const parentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(group[0]);
        const siblingNodes = group
            .map(function (node) {
            return {
                index: parentNode.children.indexOf(node),
                node
            };
        })
            .sort(function (a, b) {
            return a.index - b.index;
        })
            .map(function ({ node }) {
            return node;
        });
        result.push(siblingNodes);
    }
    return result;
}
function resolveGroups(nodes) {
    const result = {};
    for (const node of nodes) {
        const parentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(node);
        const parentId = parentNode.id;
        if (parentId in result === false) {
            result[parentId] = [];
        }
        result[parentId].push(node);
    }
    return Object.values(result);
}


/***/ }),

/***/ "./src/utilities/node/sort-nodes/sort-nodes-by-canonical-order.ts":
/*!************************************************************************!*\
  !*** ./src/utilities/node/sort-nodes/sort-nodes-by-canonical-order.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortNodesByCanonicalOrder: () => (/* binding */ sortNodesByCanonicalOrder)
/* harmony export */ });
/* harmony import */ var _get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");
/* harmony import */ var _sibling_nodes_are_sibling_nodes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../sibling-nodes/are-sibling-nodes */ "./src/utilities/node/sibling-nodes/are-sibling-nodes.ts");


/**
 * Returns the result of sorting the nodes in `siblingNodes` by
 * their layer list order. Does not modify the original
 * `siblingNodes` array.
 *
 * @returns Returns a new array of `SceneNode` objects.
 * @category Node
 */
function sortNodesByCanonicalOrder(siblingNodes) {
    if (siblingNodes.length < 2) {
        return siblingNodes.slice();
    }
    const parentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_0__.getParentNode)(siblingNodes[0]);
    if ((0,_sibling_nodes_are_sibling_nodes__WEBPACK_IMPORTED_MODULE_1__.areSiblingNodes)(siblingNodes) === false) {
        throw new Error('Nodes in `siblingNodes` do not have the same parent');
    }
    return siblingNodes
        .slice()
        .map(function (node) {
        return {
            index: parentNode.children.indexOf(node),
            node
        };
    })
        .sort(function (a, b) {
        return a.index - b.index;
    })
        .map(function ({ node }) {
        return node;
    });
}


/***/ }),

/***/ "./src/utilities/node/sort-nodes/sort-nodes-by-name.ts":
/*!*************************************************************!*\
  !*** ./src/utilities/node/sort-nodes/sort-nodes-by-name.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   sortNodesByName: () => (/* binding */ sortNodesByName)
/* harmony export */ });
/* harmony import */ var natural_compare_lite__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! natural-compare-lite */ "./node_modules/natural-compare-lite/index.js");
/* harmony import */ var natural_compare_lite__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(natural_compare_lite__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Returns the result of sorting `nodes` in alphabetical order. Does not
 * modify the original `nodes` array.
 *
 * @returns Returns a new array of `SceneNode` objects.
 * @category Node
 */
function sortNodesByName(nodes) {
    if (nodes.length < 2) {
        return nodes.slice();
    }
    return nodes.slice().sort(function (a, b) {
        const aName = a.name.toLowerCase();
        const bName = b.name.toLowerCase();
        if (aName !== bName) {
            return natural_compare_lite__WEBPACK_IMPORTED_MODULE_0___default()(bName, aName);
        }
        const y = b.y - a.y;
        if (y !== 0) {
            return y;
        }
        const x = b.x - a.x;
        if (x !== 0) {
            return x;
        }
        return natural_compare_lite__WEBPACK_IMPORTED_MODULE_0___default()(b.id, a.id);
    });
}


/***/ }),

/***/ "./src/utilities/node/sort-nodes/update-nodes-sort-order.ts":
/*!******************************************************************!*\
  !*** ./src/utilities/node/sort-nodes/update-nodes-sort-order.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateNodesSortOrder: () => (/* binding */ updateNodesSortOrder)
/* harmony export */ });
/* harmony import */ var _object_compare_string_arrays__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../object/compare-string-arrays */ "./src/utilities/object/compare-string-arrays.ts");
/* harmony import */ var _get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../get-nodes/get-parent-node */ "./src/utilities/node/get-nodes/get-parent-node.ts");
/* harmony import */ var _sibling_nodes_are_sibling_nodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sibling-nodes/are-sibling-nodes */ "./src/utilities/node/sibling-nodes/are-sibling-nodes.ts");



/**
 * Updates the layer list sort order to follow the sort order of the nodes
 * in the `siblingNodes` array. Does not modify the original `siblingNodes`
 * array.
 *
 * @returns Returns `true` if the layer list sort order was changed by the
 * function, else `false`.
 * @category Node
 */
function updateNodesSortOrder(siblingNodes) {
    const parentNode = (0,_get_nodes_get_parent_node__WEBPACK_IMPORTED_MODULE_1__.getParentNode)(siblingNodes[0]);
    if ((0,_sibling_nodes_are_sibling_nodes__WEBPACK_IMPORTED_MODULE_2__.areSiblingNodes)(siblingNodes) === false) {
        throw new Error('Nodes in `siblingNodes` do not have the same parent');
    }
    const siblingNodesCopy = siblingNodes.slice();
    const ids = parentNode.children.map(function ({ id }) {
        return id;
    });
    const insertIndex = computeInsertIndex(siblingNodesCopy, ids);
    for (const node of siblingNodesCopy) {
        parentNode.insertChild(insertIndex, node);
    }
    const idsAfter = parentNode.children.map(function ({ id }) {
        return id;
    });
    return (0,_object_compare_string_arrays__WEBPACK_IMPORTED_MODULE_0__.compareStringArrays)(ids, idsAfter) === false;
}
function computeInsertIndex(nodes, ids) {
    let insertIndex = -1;
    for (const node of nodes) {
        const index = ids.indexOf(node.id);
        if (index > insertIndex) {
            insertIndex = index;
        }
    }
    return insertIndex + 1;
}


/***/ }),

/***/ "./src/utilities/node/traverse-node-async.ts":
/*!***************************************************!*\
  !*** ./src/utilities/node/traverse-node-async.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   traverseNodeAsync: () => (/* binding */ traverseNodeAsync)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/**
 * An `async` version of [`traverseNode`](#traversenodenode-processnode--stoptraversal),
 * in which both callbacks are `async`.
 *
 * @category Node
 */
function traverseNodeAsync(node, processNodeAsync, stopTraversalAsync) {
    return __awaiter(this, void 0, void 0, function* () {
        if (node.removed === true) {
            return;
        }
        if ('children' in node &&
            (typeof stopTraversalAsync !== 'function' ||
                (yield stopTraversalAsync(node)) === false)) {
            for (const childNode of node.children) {
                yield traverseNodeAsync(childNode, processNodeAsync, stopTraversalAsync);
            }
        }
        yield processNodeAsync(node);
    });
}


/***/ }),

/***/ "./src/utilities/node/traverse-node.ts":
/*!*********************************************!*\
  !*** ./src/utilities/node/traverse-node.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   traverseNode: () => (/* binding */ traverseNode)
/* harmony export */ });
/**
 * Traverses `node` and its child nodes recursively in a *depth-first*
 * manner, passing each node to the specified `processNode` callback.
 *
 * Each node is also passed to a `stopTraversal` function. If you return
 * `true` in `stopTraversal` for a particular node, then its child nodes
 * will not be traversed.
 *
 * @category Node
 */
function traverseNode(node, processNode, stopTraversal) {
    if (node.removed === true) {
        return;
    }
    if ('children' in node &&
        (typeof stopTraversal !== 'function' || stopTraversal(node) === false)) {
        for (const childNode of node.children) {
            traverseNode(childNode, processNode, stopTraversal);
        }
    }
    processNode(node);
}


/***/ }),

/***/ "./src/utilities/number/evaluate-numeric-expression.ts":
/*!*************************************************************!*\
  !*** ./src/utilities/number/evaluate-numeric-expression.ts ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   evaluateNumericExpression: () => (/* binding */ evaluateNumericExpression)
/* harmony export */ });
/* harmony import */ var _private_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/regex */ "./src/utilities/number/private/regex.ts");

/**
 * Evaluates the given numeric `expression`.
 *
 * @returns Returns the result of evaluating the given numeric `expression`,
 * else `null` for an invalid expression.
 * @category Number
 */
function evaluateNumericExpression(value) {
    if (value === '' || _private_regex__WEBPACK_IMPORTED_MODULE_0__.numbersRegex.test(value) === false || _private_regex__WEBPACK_IMPORTED_MODULE_0__.invalidCharactersRegex.test(value) === true) {
        return null;
    }
    if (_private_regex__WEBPACK_IMPORTED_MODULE_0__.operatorRegex.test(value) === true) {
        if (_private_regex__WEBPACK_IMPORTED_MODULE_0__.operatorSuffixRegex.test(value) === true) {
            // Drop the operator suffix
            return eval(value.substring(0, value.length - 1)); // eslint-disable-line no-eval
        }
        return eval(value); // eslint-disable-line no-eval
    }
    return parseFloat(value);
}


/***/ }),

/***/ "./src/utilities/number/is-valid-numeric-input.ts":
/*!********************************************************!*\
  !*** ./src/utilities/number/is-valid-numeric-input.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isValidNumericInput: () => (/* binding */ isValidNumericInput)
/* harmony export */ });
/* harmony import */ var _private_regex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./private/regex */ "./src/utilities/number/private/regex.ts");

/**
 * Checks if `value` is a numeric expression, as input by a user. “Partial”
 * inputs are considered valid.
 *
 * @param options.integersOnly  Set to `true` to check that the expression
 * contains only integers. Defaults to `false`.
 * @returns Returns `true` if `value` is a valid numeric expression,
 * else `false`.
 * @category Number
 */
function isValidNumericInput(value, options = { integersOnly: false }) {
    const split = (value[0] === '-' ? value.substring(1) : value).split(_private_regex__WEBPACK_IMPORTED_MODULE_0__.operatorRegex);
    let i = -1;
    while (++i < split.length) {
        const operand = split[i];
        if ((operand === '' && i !== split.length - 1) ||
            (options.integersOnly === true ? _private_regex__WEBPACK_IMPORTED_MODULE_0__.integerOperandRegex : _private_regex__WEBPACK_IMPORTED_MODULE_0__.floatOperandRegex).test(operand) === false) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/utilities/number/private/regex.ts":
/*!***********************************************!*\
  !*** ./src/utilities/number/private/regex.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   floatOperandRegex: () => (/* binding */ floatOperandRegex),
/* harmony export */   integerOperandRegex: () => (/* binding */ integerOperandRegex),
/* harmony export */   invalidCharactersRegex: () => (/* binding */ invalidCharactersRegex),
/* harmony export */   numbersRegex: () => (/* binding */ numbersRegex),
/* harmony export */   operatorRegex: () => (/* binding */ operatorRegex),
/* harmony export */   operatorSuffixRegex: () => (/* binding */ operatorSuffixRegex)
/* harmony export */ });
const floatOperandRegex = /^-?\d*(?:\.\d*)?$/;
const integerOperandRegex = /^-?\d*$/;
const operatorRegex = /[+\-*/]/;
const operatorSuffixRegex = /[+\-*/]$/;
const numbersRegex = /\d/;
const invalidCharactersRegex = /[^\d.+\-*/]/;


/***/ }),

/***/ "./src/utilities/object/clone-object.ts":
/*!**********************************************!*\
  !*** ./src/utilities/object/clone-object.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneObject: () => (/* binding */ cloneObject)
/* harmony export */ });
/**
 * Creates a deep copy of the given object.
 *
 * @category Object
 */
function cloneObject(object) {
    if (object === null ||
        typeof object === 'undefined' ||
        typeof object === 'boolean' ||
        typeof object === 'number' ||
        typeof object === 'string') {
        return object;
    }
    if (Array.isArray(object)) {
        const result = [];
        for (const value of object) {
            result.push(cloneObject(value));
        }
        return result;
    }
    const result = {};
    for (const key in object) {
        result[key] = cloneObject(object[key]);
    }
    return result;
}


/***/ }),

/***/ "./src/utilities/object/compare-objects.ts":
/*!*************************************************!*\
  !*** ./src/utilities/object/compare-objects.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareObjects: () => (/* binding */ compareObjects)
/* harmony export */ });
/**
 * Performs a *deep* equality comparison of objects `a` and `b`.
 *
 * @returns Returns `true` if `a` and `b` are the same, else `false`.
 * @category Object
 */
function compareObjects(a, b) {
    if (a === null ||
        typeof a === 'undefined' ||
        typeof a === 'boolean' ||
        typeof a === 'number' ||
        typeof a === 'string') {
        return a === b;
    }
    if (Array.isArray(a)) {
        if (!Array.isArray(b)) {
            return false;
        }
        if (a.length !== b.length) {
            return false;
        }
        for (const index in a) {
            if (compareObjects(a[index], b[index]) === false) {
                return false;
            }
        }
        return true;
    }
    if (b === null ||
        typeof b === 'undefined' ||
        typeof b === 'boolean' ||
        typeof b === 'number' ||
        typeof b === 'string' ||
        Array.isArray(b)) {
        return false;
    }
    if (Object.keys(a).length !== Object.keys(b).length) {
        return false;
    }
    for (const key in a) {
        if (compareObjects(a[key], b[key]) === false) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/utilities/object/compare-string-arrays.ts":
/*!*******************************************************!*\
  !*** ./src/utilities/object/compare-string-arrays.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   compareStringArrays: () => (/* binding */ compareStringArrays)
/* harmony export */ });
/**
 * Compares the string arrays `a` and `b`.
 *
 * @returns Returns `true` if `a` and `b` are the same, else `false`.
 * @category Object
 */
function compareStringArrays(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (const index in a) {
        if (a[index] !== b[index]) {
            return false;
        }
    }
    return true;
}


/***/ }),

/***/ "./src/utilities/object/deduplicate-array.ts":
/*!***************************************************!*\
  !*** ./src/utilities/object/deduplicate-array.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   deduplicateArray: () => (/* binding */ deduplicateArray)
/* harmony export */ });
/**
 * Returns the result of deduplicating the given `array`. Does not modify the
 * original `array`.
 *
 * @returns Returns a new array with unique values.
 * @category Object
 */
function deduplicateArray(array) {
    const object = {};
    const result = [];
    for (const value of array) {
        if (object[`${value}`] === true) {
            continue;
        }
        object[`${value}`] = true;
        result.push(value);
    }
    return result;
}


/***/ }),

/***/ "./src/utilities/object/extract-attributes.ts":
/*!****************************************************!*\
  !*** ./src/utilities/object/extract-attributes.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   extractAttributes: () => (/* binding */ extractAttributes)
/* harmony export */ });
/**
 * Extracts the specified list of `attributes` from the given `array` of
 * plain objects.
 *
 * @returns Returns an array of plain objects.
 * @category Object
 */
function extractAttributes(array, attributes) {
    const result = [];
    for (const object of array) {
        result.push(pick(object, attributes));
    }
    return result;
}
function pick(object, keys) {
    const result = {};
    for (const key of keys) {
        const value = object[key];
        if (typeof value === 'undefined') {
            throw new Error(`Key \`${String(key)}\` does not exist on \`object\``);
        }
        result[key] = value;
    }
    return result;
}


/***/ }),

/***/ "./src/utilities/settings.ts":
/*!***********************************!*\
  !*** ./src/utilities/settings.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadSettingsAsync: () => (/* binding */ loadSettingsAsync),
/* harmony export */   saveSettingsAsync: () => (/* binding */ saveSettingsAsync)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const DEFAULT_SETTINGS_KEY = 'settings';
/**
 * Loads your plugin/widget’s settings (stored locally on the user’s computer under
 * the given `settingsKey`).
 *
 * @param settingsKey  The key in [`figma.clientStorage`](https://figma.com/plugin-docs/api/figma-clientStorage/)
 * on which to store the settings. Defaults to `'settings'`.
 * @category Settings
 */
function loadSettingsAsync(defaultSettings, settingsKey = DEFAULT_SETTINGS_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        const settings = yield figma.clientStorage.getAsync(settingsKey);
        if (typeof settings === 'undefined') {
            return defaultSettings;
        }
        return Object.assign({}, defaultSettings, settings);
    });
}
/**
 * Saves the given `settings` for your plugin/widget (stored locally on the user’s
 * computer under the given `settingsKey`).
 *
 * @param settingsKey  The key in [`figma.clientStorage`](https://figma.com/plugin-docs/api/figma-clientStorage/)
 * on which to store the settings. Defaults to `'settings'`.
 * @category Settings
 */
function saveSettingsAsync(settings, settingsKey = DEFAULT_SETTINGS_KEY) {
    return __awaiter(this, void 0, void 0, function* () {
        yield figma.clientStorage.setAsync(settingsKey, settings);
    });
}


/***/ }),

/***/ "./src/utilities/string/format-message.ts":
/*!************************************************!*\
  !*** ./src/utilities/string/format-message.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatErrorMessage: () => (/* binding */ formatErrorMessage),
/* harmony export */   formatSuccessMessage: () => (/* binding */ formatSuccessMessage),
/* harmony export */   formatWarningMessage: () => (/* binding */ formatWarningMessage)
/* harmony export */ });
const CHECK = '✔';
const CROSS = '✘';
const WARNING = '⚠';
const SPACE = '\u00a0';
/**
 * Adds a `✔` prefix to the given `message`.
 *
 * @category String
 */
function formatSuccessMessage(message) {
    return `${CHECK} ${SPACE} ${message}`;
}
/**
 * Adds a `✘` prefix to the given `message`.
 *
 * @category String
 */
function formatErrorMessage(message) {
    return `${CROSS} ${SPACE} ${message}`;
}
/**
 * Adds a `⚠` prefix to the given `message`.
 *
 * @category String
 */
function formatWarningMessage(message) {
    return `${WARNING} ${SPACE} ${message}`;
}


/***/ }),

/***/ "./src/utilities/string/pluralize.ts":
/*!*******************************************!*\
  !*** ./src/utilities/string/pluralize.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   pluralize: () => (/* binding */ pluralize)
/* harmony export */ });
/**
 * Returns `singular` if `number` is exactly `1`, else returns `plural`.
 * `plural` defaults to `` `${singular}s` `` if not specified.
 *
 * @category String
 */
function pluralize(number, singular, plural) {
    if (number === 1) {
        return singular;
    }
    return typeof plural === 'undefined' ? `${singular}s` : plural;
}


/***/ }),

/***/ "./src/utilities/ui.ts":
/*!*****************************!*\
  !*** ./src/utilities/ui.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showUI: () => (/* binding */ showUI)
/* harmony export */ });
/**
 * Renders the UI correponding to the command in a modal within the Figma UI.
 * Specify the modal’s `width`, `height`, `title`, and whether it is `visible`
 * via [`options`](https://figma.com/plugin-docs/api/properties/figma-showui/).
 * Optionally pass on some initialising `data` from the command to the UI.
 *
 * Learn how to [add a UI to your plugin/widget](<%- query('page', 'ui').url %>).
 *
 * @category UI
 */
function showUI(options, data) {
    if (typeof __html__ === 'undefined') {
        throw new Error('No UI defined');
    }
    console.log("showUI 2222222222222");
    //  const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === 'undefined' ? '' : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === 'undefined' ? {} : data)};${__html__}</script>`;
    figma.showUI(html, Object.assign(Object.assign({}, options), { themeColors: typeof options.themeColors === 'undefined' ? true : options.themeColors }));
}


/***/ }),

/***/ "./node_modules/hex-rgb/index.js":
/*!***************************************!*\
  !*** ./node_modules/hex-rgb/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ hexRgb)
/* harmony export */ });
const hexCharacters = 'a-f\\d';
const match3or4Hex = `#?[${hexCharacters}]{3}[${hexCharacters}]?`;
const match6or8Hex = `#?[${hexCharacters}]{6}([${hexCharacters}]{2})?`;
const nonHexChars = new RegExp(`[^#${hexCharacters}]`, 'gi');
const validHexSize = new RegExp(`^${match3or4Hex}$|^${match6or8Hex}$`, 'i');

function hexRgb(hex, options = {}) {
	if (typeof hex !== 'string' || nonHexChars.test(hex) || !validHexSize.test(hex)) {
		throw new TypeError('Expected a valid hex string');
	}

	hex = hex.replace(/^#/, '');
	let alphaFromHex = 1;

	if (hex.length === 8) {
		alphaFromHex = Number.parseInt(hex.slice(6, 8), 16) / 255;
		hex = hex.slice(0, 6);
	}

	if (hex.length === 4) {
		alphaFromHex = Number.parseInt(hex.slice(3, 4).repeat(2), 16) / 255;
		hex = hex.slice(0, 3);
	}

	if (hex.length === 3) {
		hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
	}

	const number = Number.parseInt(hex, 16);
	const red = number >> 16;
	const green = (number >> 8) & 255;
	const blue = number & 255;
	const alpha = typeof options.alpha === 'number' ? options.alpha : alphaFromHex;

	if (options.format === 'array') {
		return [red, green, blue, alpha];
	}

	if (options.format === 'css') {
		const alphaString = alpha === 1 ? '' : ` / ${Number((alpha * 100).toFixed(2))}%`;
		return `rgb(${red} ${green} ${blue}${alphaString})`;
	}

	return {red, green, blue, alpha};
}


/***/ }),

/***/ "./node_modules/rgb-hex/index.js":
/*!***************************************!*\
  !*** ./node_modules/rgb-hex/index.js ***!
  \***************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ rgbHex)
/* harmony export */ });
// TODO: Remove this ignore comment.
// eslint-disable-next-line no-mixed-operators
const toHex = (red, green, blue, alpha) => ((blue | green << 8 | red << 16) | 1 << 24).toString(16).slice(1) + alpha;

function rgbHex(red, green, blue, alpha) {
	let isPercent = (red + (alpha || '')).toString().includes('%');

	if (typeof red === 'string' && !green) { // Single string parameter.
		const parsed = parseCssRgbString(red);
		if (!parsed) {
			throw new TypeError('Invalid or unsupported color format.');
		}

		isPercent = false;
		[red, green, blue, alpha] = parsed;
	} else if (alpha !== undefined) {
		alpha = Number.parseFloat(alpha);
	}

	if (typeof red !== 'number' ||
		typeof green !== 'number' ||
		typeof blue !== 'number' ||
		red > 255 ||
		green > 255 ||
		blue > 255
	) {
		throw new TypeError('Expected three numbers below 256');
	}

	if (typeof alpha === 'number') {
		if (!isPercent && alpha >= 0 && alpha <= 1) {
			alpha = Math.round(255 * alpha);
		} else if (isPercent && alpha >= 0 && alpha <= 100) {
			alpha = Math.round(255 * alpha / 100);
		} else {
			throw new TypeError(`Expected alpha value (${alpha}) as a fraction or percentage`);
		}

		alpha = (alpha | 1 << 8).toString(16).slice(1); // eslint-disable-line no-mixed-operators
	} else {
		alpha = '';
	}

	return toHex(red, green, blue, alpha);
}

const parseCssRgbString = input => {
	const parts = input.replace(/rgba?\(([^)]+)\)/, '$1').split(/[,\s/]+/).filter(Boolean);
	if (parts.length < 3) {
		return;
	}

	const parseValue = (value, max) => {
		value = value.trim();

		if (value.endsWith('%')) {
			return Math.min(Number.parseFloat(value) * max / 100, max);
		}

		return Math.min(Number.parseFloat(value), max);
	};

	const red = parseValue(parts[0], 255);
	const green = parseValue(parts[1], 255);
	const blue = parseValue(parts[2], 255);
	let alpha;

	if (parts.length === 4) {
		alpha = parseValue(parts[3], 1);
	}

	return [red, green, blue, alpha];
};


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!****************************!*\
  !*** ./src/figma/figma.ts ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var utilities__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! utilities */ "./src/utilities/index.ts");
/* harmony import */ var _app_PdfBuilder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app/PdfBuilder */ "./src/figma/app/PdfBuilder.ts");


/* async function getLocalFonts(){
    console.log('getLocalFonts ', globalThis);
    //@ts-ignore
    const array = await globalThis.parent.queryLocalFonts();
    array.forEach(async (font: { postscriptName: any; fullName: any; family: any; style: any; }) => {
        console.log(font.postscriptName);
    } );
}
getLocalFonts(); */
function showUI(options, data) {
    if (typeof __html__ === 'undefined') {
        throw new Error('No UI defined');
    }
    //console.log("showUI------------------------", figma, options);
    //globalThis.process.env.NODE_DEBUG="no";
    //const html = `<div></div><script>document.body.classList.add('theme-${
    const html = `<div id="create-figma-plugin"></div><script>document.body.classList.add('theme-${figma.editorType}');const __FIGMA_COMMAND__='${typeof figma.command === 'undefined' ? '' : figma.command}';const __SHOW_UI_DATA__=${JSON.stringify(typeof data === 'undefined' ? {} : data)};</script><script>__FIGMA__MKITFPDF=true;</script>${__html__}`;
    figma.showUI(html, Object.assign(Object.assign({}, options), { themeColors: true }));
}
showUI({
    height: 480,
    width: 480,
});
(0,utilities__WEBPACK_IMPORTED_MODULE_0__.on)('RESIZE_WINDOW', function (windowSize) {
    //@ts-ignore
    const { width, height } = windowSize;
    figma.ui.resize(width, height);
});
/* "currentpagechange"
"drop"
"close"
"run" */
// figma.on("documentchange", (event) => {
//   for (const change of event.documentChanges) {
//     switch (change.type) {
//       case "CREATE":
//         console.log(`Node ${change.id} created by a ${change.origin.toLowerCase()} user`);
//         break;
//       case "DELETE":
//         console.log(`Node ${change.id} deleted by a ${change.origin.toLowerCase()} user`);
//         break;
//       case "PROPERTY_CHANGE":
//         for (const prop of change.properties) {
//           console.log(`Node ${change.id} had ${prop} changed by a ${change.origin.toLowerCase()} user`);
//         }
//         break;
//       case "STYLE_CREATE":
//         console.log(`Style ${change.id} created by a ${change.origin.toLowerCase()} user`);
//         break;
//       case "STYLE_DELETE":
//         console.log(`Style ${change.id} deleted by a ${change.origin.toLowerCase()} user`);
//         break;
//       case "STYLE_PROPERTY_CHANGE":
//         for (const prop of change.properties) {
//           console.log(`Style ${change.id} had ${prop} changed by a ${change.origin.toLowerCase()} user`);
//         }
//         break;
//     }
//   }
// });
figma.clientStorage
    .getAsync('size')
    .then((size) => {
    if (size)
        figma.ui.resize(size.w, size.h);
})
    .catch((err) => { });

})();

/******/ })()
;
//# sourceMappingURL=figma.js.map