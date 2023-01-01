import { AsciiChars } from '../buffer/ascii'
import { ISessionDescription, ISessionMsgFactory } from '../transport/'
import { IJsFixConfig, JsFixConfig, JsFixLoggerFactory } from '../config'
import { FixDefinitions } from '../dictionary/definition'
import { DefinitionFactory } from '../util/'
import { injectable, inject } from 'tsyringe'
import { DITokens } from './di-tokens'

@injectable()
export class RuntimeFactory {
  constructor (
    @inject(DefinitionFactory) public readonly definitionFactory: DefinitionFactory,
    @inject(DITokens.JsFixLoggerFactory) public readonly logFactory: JsFixLoggerFactory,
    @inject(DITokens.ISessionMsgFactory) public readonly msgFactory: ISessionMsgFactory,
    @inject(DITokens.ISessionDescription) public readonly description: ISessionDescription) {}

  async makeConfig (): Promise<IJsFixConfig> {
    const description = this.description || null
    return await new Promise<IJsFixConfig>((resolve, reject) => {
      try {
        if (!description) reject(new Error('no description object'))
        const path = description.application?.dictionary ?? 'na'
        if (!path) reject(new Error('no dictionary in application object'))
        const type = description.application?.type ?? null
        if (!type) reject(new Error('no application type in application object'))
        this.definitionFactory.getDefinitions(path,
          (t: string) => {
            return this.logFactory.logger(`${type}.${t}`)
          }).then((definitions: FixDefinitions) => {
          const config = new JsFixConfig(this.msgFactory, definitions, description, AsciiChars.Soh, this.logFactory)
          resolve(config)
        }).catch(e => {
          reject(e)
        })
      } catch (e) {
        reject(e)
      }
    })
  }
}
