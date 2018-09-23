import { Readable, Writable } from 'stream'

export abstract class FixDuplex {
  constructor (public readonly readable: Readable, public readonly writable: Writable) {
  }
  public abstract end (): void
}
