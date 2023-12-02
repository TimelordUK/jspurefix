import { FixParser } from '../dictionary'
import { FixDefinitions } from '../dictionary/definition'
import { GetJsFixLogger, makeEmptyLogger } from '../config'
import * as path from 'path'
import * as fs from 'fs'
import { FixXsdParser, QuickFixXmlFileParser, RepositoryXmlParser } from '../dictionary/parser'
import { IDictionaryPath } from './dictionary-path'
import { FileDuplex } from '../transport'

const root: string = path.join(__dirname, '../../')

export class DefinitionFactory {
  getDictPath (p: string): IDictionaryPath {
    const dictionary = require(path.join(root, 'data/dictionary.json'))
    return dictionary[p]
  }

  async getDefinitions (path: string, getLogger: GetJsFixLogger = makeEmptyLogger): Promise<FixDefinitions> {
    const dp: IDictionaryPath = this.getDictPath(path)
    if (dp) {
      path = dp.dict
    }
    path = this.norm(path)
    const parser = this.getParser(path, getLogger)
    return parser.parse()
  }

  getParser (path: string, getLogger: GetJsFixLogger): FixParser {
    let parser: FixParser
    if (fs.lstatSync(path).isDirectory() && path.includes('fixml')) {
      parser = new FixXsdParser(path, getLogger)
    } else if (fs.lstatSync(path).isDirectory()) {
      parser = new RepositoryXmlParser(path, getLogger)
    } else {
      parser = new QuickFixXmlFileParser(() => new FileDuplex(path), getLogger)
    }
    return parser
  }

  norm (p: string): string {
    let f: string = p
    if (!path.isAbsolute(p)) {
      f = path.join(root, f)
    }
    return f
  }
}
