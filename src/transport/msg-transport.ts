import { AsciiParser } from '../buffer/ascii/ascii-parser'
import { AsciiMsgTransmitter } from './ascii/ascii-msg-transmitter'
import { MsgParser } from '../buffer/msg-parser'
import { FiXmlParser } from '../buffer/fixml/fixml-parser'
import { MsgTransmitter } from './msg-transmitter'
import { FixmlMsgTransmitter } from './fixml/fixml-msg-transmitter'
import { FixDuplex } from './duplex/fix-duplex'
import { Ascii } from '../buffer/ascii'
import { IJsFixConfig } from '../config/js-fix-config'

export class MsgTransport {
  public readonly transmitter: MsgTransmitter
  public readonly receiver: MsgParser

  constructor (public readonly id: number,
              public readonly config: IJsFixConfig,
              public readonly duplex: FixDuplex) {

    const delimiter = config.delimiter
    if (!delimiter) {
      throw new Error(`no delimiter char given.`)
    }
    const description = config.description
    const definitions = config.definitions
    const protocol = description.application.protocol
    switch (protocol) {
      case 'ascii': {
        this.transmitter = new AsciiMsgTransmitter(config)
        // let parser replace delimiter with Pipe so fix log does not require
        // expensive replace
        this.receiver = new AsciiParser(definitions, duplex.readable, delimiter, Ascii.Pipe)
        break
      }

      case 'fixml': {
        this.transmitter = new FixmlMsgTransmitter(config)
        this.receiver = new FiXmlParser(config, duplex.readable)
        break
      }

      default: {
        throw new Error(`session Protocol must ascii or fixml. got ${protocol}`)
      }
    }

    // pipe the encoder to say a socket.
    if (duplex.writable) {
      this.transmitter.encodeStream.pipe(duplex.writable)
    }
  }

  public end (): void {
    this.duplex.end()
  }

  public wait (): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.receiver.on('end', () => {
        resolve()
      })
      this.receiver.on('error', (e) => {
        reject(e)
      })
      this.transmitter.on('error', (e) => {
        reject(e)
      })
    })
  }
}
