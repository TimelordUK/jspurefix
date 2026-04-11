/**
 * Drop-in replacement for QuickFixXmlFileParser that uses the graph-based
 * parser internally. Maintains the same constructor signature so it can be
 * swapped in the DefinitionFactory without changes to call sites.
 */
import { FixParser } from '../../fix-parser'
import { FixDefinitions } from '../../definition/fix-definitions'
import { GetJsFixLogger } from '../../../config'
import { MakeDuplex } from '../../../transport'
import { SaxTreeBuilder } from './sax-tree-builder'
import { QuickFixGraphParser, QuickFixGraphParserOptions } from './quick-fix-graph-parser'
import { FixDefinitionSource } from '../../fix-definition-source'
import { VersionUtil } from '../../version-util'

export class QuickFixGraphFileParser extends FixParser {
  constructor (
    public readonly make: MakeDuplex,
    public readonly getLogger: GetJsFixLogger,
    public readonly options: QuickFixGraphParserOptions = {}
  ) {
    super()
  }

  public async parse (): Promise<FixDefinitions> {
    const xml = await this.readAll()
    const doc = SaxTreeBuilder.parse(xml)

    const fixRoot = doc.firstDescendant('fix')
    if (!fixRoot) throw new Error('no <fix> root element')
    const major = parseInt(fixRoot.attribute('major') ?? '0', 10)
    const minor = parseInt(fixRoot.attribute('minor') ?? '0', 10)
    const servicepack = parseInt(fixRoot.attribute('servicepack') ?? '0', 10)
    const description = (major !== 5 || servicepack === 0)
      ? `FIX.${major}.${minor}`
      : `FIX.${major}.${minor}SP${servicepack}`

    const definitions = new FixDefinitions(FixDefinitionSource.QuickFix, VersionUtil.resolve(description))
    const parser = new QuickFixGraphParser(definitions, this.options)
    return parser.parseDocument(doc)
  }

  /**
   * Read the entire duplex stream into a UTF-8 string. The graph parser
   * needs the full document in memory because it walks the XDocument tree
   * with random access — unlike the legacy SAX-streaming parser.
   */
  private async readAll (): Promise<string> {
    const duplex = this.make()
    const readable = duplex.readable
    return await new Promise<string>((resolve, reject) => {
      const chunks: Buffer[] = []
      readable.on('data', (chunk: Buffer | string) => {
        chunks.push(typeof chunk === 'string' ? Buffer.from(chunk) : chunk)
      })
      readable.on('end', () => {
        resolve(Buffer.concat(chunks).toString('utf-8'))
      })
      readable.on('error', (err: Error) => {
        reject(err)
      })
    })
  }
}
