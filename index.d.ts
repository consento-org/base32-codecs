import { NamedCodec } from 'codecs'

declare namespace base32codecs {
  type Base32Codec = NamedCodec<'base32', string>
  type Base32cCodec = NamedCodec<'base32c', string>
  type Base32cpCodec = NamedCodec<'base32cp', string>
  type Base32hCodec = NamedCodec<'base32h', string>
  type Base32hpCodec = NamedCodec<'base32hp', string>
  type Base32pCodec = NamedCodec<'base32p', string>

  const base32: Base32Codec
  const base32c: Base32cCodec
  const base32cp: Base32cpCodec
  const base32h: Base32hCodec
  const base32hp: Base32hpCodec
  const base32p: Base32pCodec

}

export = base32codecs
