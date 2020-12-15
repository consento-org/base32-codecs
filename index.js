const decode = require('base32-decode')
const encode = require('base32-encode')

module.exports = [
  ['base32', 'RFC4648', false],
  ['base32c', 'Crockford', false],
  ['base32h', 'RFC4648-HEX', false],
  ['base32hp', 'RFC4648-HEX', true],
  ['base32p', 'RFC4648', true]
].map(([name, variant, padding]) => {
  const options = { padding }
  return {
    name,
    encode: function (val) {
      if (typeof val !== 'string') val = val.toString()
      return Buffer.from(decode(val, variant))
    },
    decode: function (val) {
      return encode(val, variant, options)
    }
  }
}).reduce((obj, codec) => {
  obj[codec.name] = codec
  return obj
}, {})
