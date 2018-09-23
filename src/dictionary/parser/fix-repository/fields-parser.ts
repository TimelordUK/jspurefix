import { BaseParser } from './base-parser'
import { RepositoryXmlParser } from './repository-xml-parser'

export class FieldsParser extends BaseParser {
  constructor (readonly parser: RepositoryXmlParser) {
    super(parser, 'Field')
  }
}
