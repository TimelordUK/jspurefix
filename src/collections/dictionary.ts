import { IDictIteratorCb } from './collection'

export class Dictionary<T> {
  private container: Record<string, T> = {}

  public count (): number {
    const keys: string[] = Object.keys(this.container)
    return keys.length
  }

  public values (): T[] {
    const va: T[] = []
    const keys: string[] = Object.keys(this.container)
    keys.forEach((k) => va.push(this.container[k]))
    return va
  }

  public keys (): string[] {
    return Object.keys(this.container)
  }

  public toString (): string {
    return this.keys().reduce((a: string, current: string) => {
      const token = a.length > 0 ? ', ' : ''
      return a + `${token}${this.container[current]?.toString() ?? ''}`
    }, '')
  }

  public containsKey (key: string): boolean {
    return this.container[key] != null
  }

  public add (key: string, v: T): void {
    if (this.containsKey(key)) {
      const msg: string = `duplicate key ${key}`
      throw new Error(msg)
    }
    this.container[key] = v
  }

  public addUpdate (key: string, v: T): void {
    this.container[key] = v
  }

  public remove (key: string): void {
    delete this.container[key]
  }

  public get (key: string): T | null {
    return this.container[key]
  }

  public clear (): void {
    this.keys().forEach(k => {
      this.remove(k)
    })
  }

  public forEach (cb: IDictIteratorCb<T>): void {
    Object.keys(this.container).forEach((k: string) => cb(k, this.container[k]))
  }
}
