import { QuickFixXmlFileParser } from '../dictionary/parser/quickfix/quick-fix-xml-file-parser'
import { FixParser } from '../dictionary/fix-parser'
import { RepositoryXmlParser } from '../dictionary/parser/fix-repository/repository-xml-parser'
import { FixDefinitions } from '../dictionary/definition/fix-definitions'
import { FixXsdParser } from '../dictionary/parser/fixml/fix-xsd-parser'
import { GetJsFixLogger, makeEmptyLogger } from '../config/js-fix-logger'
import * as path from 'path'
import * as fs from 'fs'

export async function getDefinitions (path: string, getLogger: GetJsFixLogger = makeEmptyLogger): Promise<FixDefinitions> {
  let parser: FixParser
  path = norm(path)
  if (fs.lstatSync(path).isDirectory() && path.indexOf('fixml') >= 0) {
    parser = new FixXsdParser(path, getLogger)
  } else if (fs.lstatSync(path).isDirectory()) {
    parser = new RepositoryXmlParser(path, getLogger)
  } else {
    parser = new QuickFixXmlFileParser(path, getLogger)
  }
  return parser.parse()
}

const root: string = path.join(__dirname, '../../')

function norm (p: string): string {
  let f: string = p
  if (!path.isAbsolute(p)) {
    f = path.join(root, f)
  }
  return f
}
