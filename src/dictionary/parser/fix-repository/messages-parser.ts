import { BaseParser } from './base-parser'
import { RepositoryXmlParser } from './repository-xml-parser'

export class MessagesParser extends BaseParser {
  constructor (readonly parser: RepositoryXmlParser) {
    super(parser, 'Message')
  }
}
