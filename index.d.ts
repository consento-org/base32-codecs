import { NamedCodec } from 'codecs'

declare const base32: {
  base32: NamedCodec<'base32', string>
  base32c: NamedCodec<'base32c', string>
  base32cp: NamedCodec<'base32cp', string>
  base32h: NamedCodec<'base32h', string>
  base32hp: NamedCodec<'base32hp', string>
  base32p: NamedCodec<'base32p', string>
}

export = base32
