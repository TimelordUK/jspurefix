import { MsgView } from '../buffer'
import { FixDefinitions } from '../dictionary/definition'
import { ISessionDescription, FileDuplex } from '../transport'
import { JsFixConfig } from '../config'
import { MsgTransport } from '../transport/factory'

export async function replayFixFile (definitions: FixDefinitions,
                                    sessionDescription: ISessionDescription,
                                    replayFile: string,
                                    delimiter: number): Promise<MsgView[]> {
  return new Promise<MsgView[]>((accept, reject) => {
    const arr: MsgView[] = []
    const config = new JsFixConfig(null, definitions, sessionDescription, delimiter)
    const transport: MsgTransport = new MsgTransport(1, config, new FileDuplex(replayFile))
    transport.receiver.on('msg', (msgType: string, m: MsgView) => {
      // note must clone if a view is to be saved after this call
      arr.push(m.clone())
    })
    transport.receiver.on('end', () => {
      accept(arr)
    })
    transport.receiver.on('error', (e) => {
      reject(e)
    })
  })
}
