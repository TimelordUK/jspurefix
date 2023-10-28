import { ParseState } from './parse-state'
import { FixDefinitions } from '../../definition'

export class ParseProgress {
  public parseState: ParseState = ParseState.Begin
  public numberPasses: number = 0
  public definitions: FixDefinitions
  public cacheMisses: number = 0
  public previousCacheMisses: number = 0
  public readonly maxIterations: number = 5

  public next (): void {
    this.previousCacheMisses = this.cacheMisses
    this.numberPasses++
    switch (this.parseState) {
      case ParseState.Begin: {
        this.parseState = ParseState.FieldDefinitions
        break
      }
      case ParseState.FieldDefinitions: {
        this.parseState = ParseState.Components
        break
      }
      case ParseState.Components: {
        if (this.numberPasses === this.maxIterations) {
          this.parseState = ParseState.Messages
        } else {
          this.cacheMisses = 0
        }
        break
      }
    }
  }
}
