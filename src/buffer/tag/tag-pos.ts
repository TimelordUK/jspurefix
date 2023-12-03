export class TagPos {
  constructor (public position: number, public tag: number, public start: number, public len: number) {
  }

  public static compare = (lhs: TagPos, rhs: TagPos): number => {
    if (lhs.tag < rhs.tag) {
      return -1
    }
    if (lhs.tag > rhs.tag) {
      return 1
    }
    if (lhs.tag === rhs.tag && lhs.start === rhs.start) {
      return 0
    }
    return ((lhs.start < rhs.start) ? -1 : ((lhs.start > rhs.start) ? 1 : 0))
  }

  public static binarySearch (ar: TagPos[], tag: number): number {
    let m: number = 0
    let n: number = ar.length - 1
    while (m <= n) {
      const k: number = (n + m) >> 1
      const cmp: number = tag - (ar[k].tag)
      if (cmp > 0) {
        m = k + 1
      } else if (cmp < 0) {
        n = k - 1
      } else {
        return k
      }
    }
    return -m - 1
  }

  public assign (position: number, tag: number, start: number, len: number): void {
    this.position = position
    this.tag = tag
    this.start = start
    this.len = len
  }

  public toString (): string {
    return `[${this.position}] = ${this.tag} (${this.start}..${this.start + this.len})`
  }

  public clone (): TagPos {
    return new TagPos(this.position, this.tag, this.start, this.len)
  }
}
