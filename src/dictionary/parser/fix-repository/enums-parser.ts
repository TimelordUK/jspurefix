import { BaseParser } from './base-parser'
import { RepositoryXmlParser } from './repository-xml-parser'

export class EnumsParser extends BaseParser {
  constructor (readonly parser: RepositoryXmlParser) {
    super(parser, 'Enum')
  }
}
