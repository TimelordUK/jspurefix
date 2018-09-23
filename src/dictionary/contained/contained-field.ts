
export enum ContainedFieldType {
    Component = 0,
    Group = 1,
    Simple = 2
}

export class ContainedField {
  constructor (public readonly name: string, public readonly position: number,
                public readonly type: ContainedFieldType, readonly required: boolean) {

  }
}
