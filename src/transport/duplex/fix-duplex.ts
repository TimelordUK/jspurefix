import { Readable, Writable } from 'stream'

export type MakeDuplex = () => FixDuplex

export abstract class FixDuplex {
  public readable: Readable
  public writable: Writable
  public abstract end (): void
}
