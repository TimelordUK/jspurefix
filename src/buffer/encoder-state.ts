export class EncodedStatus {
  public ptr: number = 0
  public bodyLengthPos: number
  public bodyEndPos: number
  public begin: Date | null
  public end: Date | null
  public elapsed (): number {
    if (this.begin && this.end) {
      return this.begin.getTime() - this.end.getTime()
    }
    return 0
  }

  public reset (): void {
    this.ptr = 0
    this.bodyLengthPos = 0
    this.bodyEndPos = 0
    this.begin = null
    this.end = null
  }
}
