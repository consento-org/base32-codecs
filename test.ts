/* eslint-disable @typescript-eslint/no-floating-promises */
import { test } from 'zora'
import codecs from '.'
import { randomBytes } from 'crypto'

const names = ['base32', 'base32c', 'base32cp', 'base32h', 'base32hp', 'base32p']

type Name = 'base32' | 'base32c' | 'base32cp' | 'base32h' | 'base32hp' | 'base32p'

for (const name of names) {
  test(name, t => {
    const codec = codecs[name as Name]
    t.notEq(codec, undefined)
    t.equals(codec.name, name)
    const input = randomBytes(10)
    const any = codec.decode(input)
    t.equals(typeof any, 'string', 'returns a string')
    t.deepEqual(codec.encode(any), input)
  })
}
