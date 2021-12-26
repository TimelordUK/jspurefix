import { MsgView } from '../../buffer'
import { AsciiParser } from '../../buffer/ascii'

export class ParsingResult {
  constructor (public readonly event: string,
               public readonly msgType: string,
               public readonly view: MsgView,
               public readonly contents: string,
               public readonly parser: AsciiParser) {
  }
}
