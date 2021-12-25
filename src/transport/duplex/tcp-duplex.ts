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
}
