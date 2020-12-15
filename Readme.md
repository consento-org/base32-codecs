# base32-codecs

`base32-codecs` is a [codecs][codecs] compatible adapter to [base32-encode][encode] and [base32-decode][decode].

[codecs]: (https://github.com/mafintosh/codecs)
[encode]: https://github.com/LinusU/base32-encode
[decode]: https://github.com/LinusU/base32-decode

## Usage

```javascript
const {
  base32, // RFC4648, unpadded
  base32c, // Crockford, unpadded
  base32cp, // Crockford, padded
  base32h, // RFC4648-HEX, unpadded
  base32hp, // RFC4648-HEX, padded
  base32p // RFC4648, Padded 
} = require('base32-codecs')

for (const codec of [base32, base32c, base32cp, base32h, base32hp, base32p]) {
  codec.encode(
    codec.decode(crypto.randomBytes(10))
  )
}
```

## License

[MIT](./LICENSE)
