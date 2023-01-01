import { ContainedFieldType } from './contained-field-type'

export class ContainedField {
  constructor (public readonly name: string, public readonly position: number,
    public readonly type: ContainedFieldType, readonly required: boolean) {
  }

  public toString (): string {
    return this.name
  }
}
