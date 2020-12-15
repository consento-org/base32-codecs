/* eslint-disable @typescript-eslint/no-floating-promises */
import { test } from 'zora'
import codecs, { Base32Codec, Base32cCodec, Base32hCodec, Base32hpCodec, Base32pCodec } from '.'
import { randomBytes } from 'crypto'

const testCodecs: [Base32Codec, Base32cCodec, Base32hCodec, Base32hpCodec, Base32pCodec] =
  [codecs.base32, codecs.base32c, codecs.base32h, codecs.base32hp, codecs.base32p]

for (const codec of testCodecs) {
  test(codec.name, t => {
    t.notEq(codec, undefined)
    t.equals(typeof codec.name, 'string', 'name exists')
    t.equals(codec, codecs[codec.name], 'name matches key')
    const input = randomBytes(10)
    const any = codec.decode(input)
    t.equals(typeof any, 'string', 'returns a string')
    const encoded = codec.encode(any)
    t.deepEqual(encoded, input, 'output matches input')
    t.equals(codec.decode(encoded), codec.decode(input), '')
  })
}

test('padding', t => {
  const input = new Uint8Array([0x60, 0xcb, 0x89, 0xb6, 0xbd, 0x70])
  t.equals(codecs.base32.decode(input), 'MDFYTNV5OA', 'base32')
  t.equals(codecs.base32c.decode(input), 'C35RKDNXE0', 'base32c')
  t.equals(codecs.base32h.decode(input), 'C35OJDLTE0', 'base32h')
  t.equals(codecs.base32hp.decode(input), 'C35OJDLTE0======', 'base32hp')
  t.equals(codecs.base32p.decode(input), 'MDFYTNV5OA======', 'base32p')
})
