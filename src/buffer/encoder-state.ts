export class EncodedStatus {
  public ptr: number = 0
  public bodyLengthPos: number
  public bodyEndPos: number
  public begin: Date
  public end: Date
  public elapsed (): number {
    return this.begin.getTime() - this.end.getTime()
  }
  public reset (): void {
    this.ptr = 0
    this.bodyLengthPos = 0
    this.bodyEndPos = 0
    this.begin = null
    this.end = null
  }
}
