import { BaseParser } from './base-parser'
import { RepositoryXmlParser } from './repository-xml-parser'

export class MsgContentsParser extends BaseParser {
  constructor (readonly parser: RepositoryXmlParser) {
    super(parser, 'MsgContent')
  }
}
