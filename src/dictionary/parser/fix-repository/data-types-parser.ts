import { BaseParser } from './base-parser'
import { RepositoryXmlParser } from './repository-xml-parser'

export class DataTypesParser extends BaseParser {
  constructor (readonly parser: RepositoryXmlParser) {
    super(parser, 'Datatype')
  }
}
