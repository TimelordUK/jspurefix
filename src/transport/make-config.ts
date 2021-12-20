import { AsciiChars } from '../buffer/ascii'
import { ISessionDescription } from './session-description'
import { ISessionMsgFactory } from './fix-msg-factory'
import { IJsFixConfig, JsFixConfig, JsFixLoggerFactory } from '../config'
import { FixDefinitions } from '../dictionary/definition'
import { DefinitionFactory } from '../util/definition-factory'

export async function makeConfig (description: ISessionDescription, logFactory: JsFixLoggerFactory, msgFactory: ISessionMsgFactory): Promise<IJsFixConfig> {
  return new Promise<IJsFixConfig>(async (accept, reject) => {
    try {
      const definitions: FixDefinitions = await new DefinitionFactory().getDefinitions(description.application.dictionary,
        (t: string) => logFactory.logger(`${description.application.type}.${t}`))
      const config = new JsFixConfig(msgFactory, definitions, description, AsciiChars.Soh, logFactory)
      accept(config)
    } catch (e) {
      reject(e)
    }
  })
}
