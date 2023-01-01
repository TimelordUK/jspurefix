import { SegmentDescription } from './segment-description'

export class SegmentSummary {
  constructor (
    public readonly name: string,
    public readonly depth: number,
    public readonly startTag: number,
    public readonly startPosition: number,
    public readonly endTag: number,
    public readonly endPosition: number,
    public readonly delimiterTag: number,
    public readonly delimiterPositions: number[]) {
  }

  public static fromDescription (d: SegmentDescription): SegmentSummary {
    return new SegmentSummary(d.set?.name ?? 'na', d.depth, d.startTag, d.startPosition,
      d.endTag, d.endPosition, d.delimiterTag, d.delimiterPositions || [])
  }
}
