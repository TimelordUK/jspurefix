import { FixDuplex } from './fix-duplex'
import * as net from 'net'
import { inject, injectable } from 'tsyringe'
import { DITokens } from '../../runtime/di-tokens'

@injectable()
export class TcpDuplex extends FixDuplex {
  constructor (@inject(DITokens.duplexParam) public readonly socket: net.Socket) {
    super()
    this.readable = socket
    this.writable = socket
  }

  end (): void {
    this.socket.end()
  }

  /**
   * A socket whose peer has gone without FIN or RST will never complete the
   * graceful end() above - the FIN is sent and no answer ever comes, so the handle
   * stays open indefinitely.  destroy() drops it regardless.
   */
  destroy (): void {
    if (this.socket.destroyed) return
    this.socket.destroy()
  }
}
