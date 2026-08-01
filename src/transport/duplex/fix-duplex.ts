import { Readable, Writable } from 'stream'

export type MakeDuplex = () => FixDuplex

export abstract class FixDuplex {
  public readable: Readable
  public writable: Writable
  /** graceful shutdown - for a socket this is a FIN, which the peer may never answer */
  public abstract end (): void
  /**
   * Release the underlying resource unconditionally.  A half open socket - one whose
   * peer has vanished without FIN or RST - will not complete a graceful end, so the
   * acceptor needs a way to stop holding it (issue #153).  Defaults to end().
   */
  public destroy (): void {
    this.end()
  }
}
