export class FieldEnum {
  constructor (public readonly key: string,
    public readonly val: string,
    public readonly description: string) {
  }

  public toString (): string {
    return `${this.key} = ${this.val}`
  }
}
