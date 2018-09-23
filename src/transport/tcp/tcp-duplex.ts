import { FixDuplex } from '../duplex/fix-duplex'
import * as net from 'net'

export class TcpDuplex extends FixDuplex {
  constructor (public readonly socket: net.Socket) {
    super(socket, socket)
  }

  end (): void {
    this.socket.end()
  }
}
