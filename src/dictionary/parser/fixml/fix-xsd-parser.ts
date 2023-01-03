import { FixDefinitions } from '../../definition'
import { FixParser } from '../../fix-parser'
import { FieldsParser } from './fields-parser'
import { IncludeGraph } from './include-graph'
import { ComponentsParser } from './components-parser'
import { XsdParser } from './xsd-parser'
import { GetJsFixLogger, IJsFixLogger } from '../../../config'
import * as path from 'path'
import { FixDefinitionSource } from '../../fix-definition-source'
import { FixVersion } from '../../fix-versions'

export class FixXsdParser extends FixParser {
  public readonly definitions: FixDefinitions
  private readonly logger: IJsFixLogger

  constructor (public readonly rootPath: string, public getLogger: GetJsFixLogger) {
    super()
    this.logger = getLogger('FixXsdParser')
    this.definitions = new FixDefinitions(FixDefinitionSource.FixmlRepo, FixVersion.FIXML50SP2)
  }

  async parse (): Promise<FixDefinitions> {
    const definitions: FixDefinitions = this.definitions
    const ver: string = '5-0-SP2'
    const main: string = `fixml-main-${ver}.xsd`
    const logger = this.logger
    logger.info(`resolve includes ${main} from root ${this.rootPath}`)
    const t = new IncludeGraph(this.rootPath, main)
    await t.build()
    const resolved: string[] = t.resolve(main) ?? []
    const fields: FieldsParser = new FieldsParser(definitions)
    const components: ComponentsParser = new ComponentsParser(definitions)
    const filtered: string[] = resolved.reduce((a: string[], f: string) => {
      if (f.indexOf('-impl-') || f.indexOf('-base-')) {
        a.push(f)
      }
      return a
    }, [])

    for (const f of filtered) {
      const parser: XsdParser = f.indexOf('-fields-') > 0 ? fields : components
      logger.info(`parsing file ${f}`)
      await parser.parse(path.join(this.rootPath, f))
    }
    return this.definitions
  }
}
