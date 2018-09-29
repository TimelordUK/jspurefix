import { ISessionDescription } from './session-description'
import { JsFixLoggerFactory } from '../config/js-fix-logger-factory'
import { IAsciiSessionMsgFactory } from './fix-msg-factory'
import { IJsFixConfig, JsFixConfig } from '../config/js-fix-config'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { getDefinitions } from '../util/dictionary-definitions'
import { Ascii } from '../buffer/ascii'

export async function makeConfig (description: ISessionDescription, logFactory: JsFixLoggerFactory, msgFactory: IAsciiSessionMsgFactory): Promise<IJsFixConfig> {
  return new Promise<IJsFixConfig>(async (accept, reject) => {
    try {
      const definitions: FixDefinitions = await getDefinitions(description.application.dictionary,
        (t: string) => logFactory.logger(`${description.application.type}.${t}`))
      const config = new JsFixConfig(msgFactory, definitions, description, Ascii.Soh, logFactory)
      accept(config)
    } catch (e) {
      reject(e)
    }
  })
}
