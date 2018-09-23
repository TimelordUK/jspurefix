import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { MsgTransport } from '../transport/msg-transport'
import { MsgView } from '../buffer/msg-view'
import { ISessionDescription } from '../transport/session-description'
import { FileDuplex } from '../transport/duplex/file-duplex'
import { JsFixConfig } from '../config/js-fix-config'

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
