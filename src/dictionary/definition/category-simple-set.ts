import { SimpleFieldDefinition } from './simple-field-definition'

export class CategorySimpleSet {
  public readonly simple: Map<string, SimpleFieldDefinition> = new Map<string, SimpleFieldDefinition>()
  constructor (public readonly category: string) {
  }
}
