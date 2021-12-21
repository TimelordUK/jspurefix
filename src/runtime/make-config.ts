import { AsciiChars } from '../buffer/ascii'
import { ISessionDescription, ISessionMsgFactory } from '../transport/'
import { IJsFixConfig, JsFixConfig, JsFixLoggerFactory } from '../config'
import { FixDefinitions } from '../dictionary/definition'
import { DefinitionFactory } from '../util/'

export class RuntimeFactory {
  constructor (public readonly logFactory: JsFixLoggerFactory,
               public readonly msgFactory: ISessionMsgFactory) {
  }

  makeConfig (description: ISessionDescription): Promise<IJsFixConfig> {
    return new Promise<IJsFixConfig>(async (accept, reject) => {
      try {
        const definitions: FixDefinitions = await new DefinitionFactory().getDefinitions(description.application.dictionary,
          (t: string) => {
            return this.logFactory.logger(`${description.application.type}.${t}`)
          })

        const config = new JsFixConfig(this.msgFactory, definitions, description, AsciiChars.Soh, this.logFactory)
        accept(config)
      } catch (e) {
        reject(e)
      }
    })
  }
}
