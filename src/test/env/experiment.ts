import { AsciiSessionMsgFactory } from '../../transport/ascii'
import { FixDuplex, StringDuplex, StringDuplexTraits } from '../../transport'
import { Setup } from './setup'
import { MsgView } from '../../buffer'
import { IJsFixConfig } from '../../config'
import { MsgTransport } from '../../transport/factory'

class FixEntity {
  public readonly views: MsgView[] = []
  public readonly errors: Error[] = []

  constructor (public readonly config: IJsFixConfig,
    public readonly duplex: FixDuplex = new StringDuplex('', StringDuplexTraits.None),
    public readonly transport: MsgTransport = new MsgTransport(0, config, duplex)) {
  }
}

export class Experiment {
  public readonly client: FixEntity
  public readonly clientFactory: AsciiSessionMsgFactory
  public readonly serverFactory: AsciiSessionMsgFactory
  public readonly server: FixEntity

  loopBack (lhs: FixDuplex, rhs: FixDuplex): void {
    lhs.writable.on('data', (data: Buffer) => {
      rhs.readable.push(data)
    })
  }

  constructor (setup: Setup) {
    this.clientFactory = setup.client.sessionMsgFactory as AsciiSessionMsgFactory
    this.serverFactory = setup.server.sessionMsgFactory as AsciiSessionMsgFactory

    const clientConfig = setup.clientConfig
    const serverConfig = setup.serverConfig

    this.client = new FixEntity(clientConfig)
    this.server = new FixEntity(serverConfig)

    // using a string duplex so pipe to client to read to server
    // to simulate a tcp connection.
    this.loopBack(this.client.duplex, this.server.duplex)
    this.loopBack(this.server.duplex, this.client.duplex)
  }
}
