import { MsgView } from '../buffer'
import { FileDuplex } from '../transport'
import { IJsFixConfig } from '../config'
import { MsgTransport } from '../transport/factory'

export class FileReplayer {
  constructor (public readonly config: IJsFixConfig) {
  }

  async replayFixFile (replayFile: string): Promise<MsgView[]> {
    return new Promise<MsgView[]>((resolve, reject) => {
      try {
        const arr: MsgView[] = []
        const transport: MsgTransport = new MsgTransport(1, this.config, new FileDuplex(replayFile))
        transport.receiver.on('msg', (msgType: string, m: MsgView) => {
          // note must clone if a view is to be saved after this call
          arr.push(m.clone())
        })
        transport.receiver.on('end', () => {
          resolve(arr)
        })
        transport.receiver.on('error', (e) => {
          reject(e)
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
