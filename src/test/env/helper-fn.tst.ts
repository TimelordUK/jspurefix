import { ILooseObject } from '../../collections/collection'
import { AsciiMsgTransmitter } from '../../transport/ascii/ascii-msg-transmitter'
import { ElasticBuffer } from '../../buffer'
import { DITokens } from '../../runtime'
import { AsciiParser, AsciiView } from '../../buffer/ascii'
import { IJsFixConfig } from '../../config'

export async function testEncodeDecode (config: IJsFixConfig, msgType: string, msg: ILooseObject): Promise<(ILooseObject | null)> {
  // encode to FIX format from provided object.
  return await new Promise(async function (resolve, reject) {
    const session: AsciiMsgTransmitter = new AsciiMsgTransmitter(config)
    const parseBuffer = config.sessionContainer.resolve<ElasticBuffer>(DITokens.ParseBuffer)
    const parser: AsciiParser = new AsciiParser(config, session.encodeStream, parseBuffer)
    parser.on('msg', (_: string, view: AsciiView) => {
      const o = view.toObject() as ILooseObject
      delete o.StandardHeader
      delete o.StandardTrailer
      resolve(o)
    })
    parser.on('error', (e: Error) => {
      reject(e)
    })
    session.send(msgType, msg)
  })
}
