import { MsgView } from '../../buffer'
import { AsciiParser } from '../../buffer/ascii'

export class ParsingResult {
  constructor (public readonly event: string,
    public readonly msgType: string | null,
    public readonly view: MsgView | null,
    public readonly contents: string,
    public readonly parser: AsciiParser) {
  }
}
