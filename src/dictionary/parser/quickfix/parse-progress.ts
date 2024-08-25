import { ParseState } from './parse-state'
import { FixDefinitions, GroupFieldDefinition } from '../../definition'

export class ParseProgress {
  public definitions: FixDefinitions
  public parseState: ParseState = ParseState.Begin
  public numberPasses: number = 0
  public cacheMisses: number = 0
  public newDefines: number = 0
  public newAdds: number = 0
  public newContexts: number = 0
  public previousDelta: number = 0
  public componentPasses: number = 0
  public readonly maxIterations: number = 5
  public groupDefinitionCache: Map<string, GroupFieldDefinition> = new Map<string, GroupFieldDefinition>()

  public toString (): string {
    return `parseState = ${this.parseState}, numberPasses = ${this.numberPasses}, componentPasses = ${this.componentPasses}, groupCount = ${this.groupDefinitionCache.size}, cacheMisses = ${this.cacheMisses}, newContexts = ${this.newContexts}, newDefines = ${this.newDefines}, newAdds = ${this.newAdds}, previousDelta = ${this.previousDelta}, delta = ${this.delta()}, changed = ${this.changed()}`
  }

  public delta (): number {
    return this.newDefines + this.newAdds + this.newContexts
  }

  public changed (): boolean {
    return this.cacheMisses > 0 || this.delta() !== this.previousDelta
  }

  public reset (): void {
    this.previousDelta = this.delta()
    this.cacheMisses = 0
    this.newDefines = 0
    this.newAdds = 0
    this.newContexts = 0
  }

  public next (): void {
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
        this.componentPasses++
        const endComponentPass = this.numberPasses > this.maxIterations
        if (endComponentPass) {
          this.parseState = ParseState.Messages
        }
        break
      }
      case ParseState.Messages: {
        this.parseState = ParseState.End
        break
      }
    }
  }
}
