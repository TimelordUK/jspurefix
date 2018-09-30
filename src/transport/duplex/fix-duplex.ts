import { Readable, Writable } from 'stream'

export abstract class FixDuplex {
  public readable: Readable
  public writable: Writable
  public abstract end (): void
}
