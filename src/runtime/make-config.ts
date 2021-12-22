import { AsciiChars } from '../buffer/ascii'
import { ISessionDescription, ISessionMsgFactory } from '../transport/'
import { IJsFixConfig, JsFixConfig, JsFixLoggerFactory } from '../config'
import { FixDefinitions } from '../dictionary/definition'
import { DefinitionFactory } from '../util/'
import { injectable, inject } from 'tsyringe'

@injectable()
export class RuntimeFactory {
  constructor (
    @inject(DefinitionFactory) public readonly definitionFactory: DefinitionFactory,
    @inject('JsFixLoggerFactory') public readonly logFactory: JsFixLoggerFactory,
    @inject('ISessionMsgFactory') public readonly msgFactory: ISessionMsgFactory,
    @inject('ISessionDescription') public readonly description: ISessionDescription) {}

  makeConfig (): Promise<IJsFixConfig> {
    const description = this.description
    return new Promise<IJsFixConfig>((accept, reject) => {
      this.definitionFactory.getDefinitions(description.application.dictionary,
          (t: string) => {
            return this.logFactory.logger(`${description.application.type}.${t}`)
          }).then((definitions: FixDefinitions) => {
            const config = new JsFixConfig(this.msgFactory, definitions, description, AsciiChars.Soh, this.logFactory)
            accept(config)
          }).catch(e => {
            reject(e)
          })
    })
  }
}
