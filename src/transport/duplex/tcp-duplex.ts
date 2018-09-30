import { FixDuplex } from './fix-duplex'
import * as net from 'net'

export class TcpDuplex extends FixDuplex {
  constructor (public readonly socket: net.Socket) {
    super()
    this.readable = socket
    this.writable = socket
  }

  end (): void {
    this.socket.end()
  }
}
