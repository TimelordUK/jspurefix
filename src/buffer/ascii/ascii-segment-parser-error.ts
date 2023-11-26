import { AsciiSegmentParserSummary } from './ascii-segment-parser-summary'

export class AsciiParserError extends Error {
  constructor (message: string, public readonly summary: AsciiSegmentParserSummary) {
    super(message)
  }
}
