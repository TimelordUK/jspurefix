import { TagPos } from '../tag/tag-pos'

export interface AsciiSegmentParserSummary {
  readonly msgType: string
  readonly tags: TagPos[]
  readonly last: number
  readonly msgDefinition: string | undefined
  readonly currentTagPosition: number
  readonly peek: String
  readonly segments: String[]
  readonly structureStack: String[]
  buffer: string
}
