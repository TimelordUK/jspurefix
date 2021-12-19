import { FixXsdParser, FixParser, QuickFixXmlFileParser, RepositoryXmlParser } from '../dictionary'
import { FixDefinitions } from '../dictionary/definition'
import { GetJsFixLogger, makeEmptyLogger } from '../config'
import * as path from 'path'
import * as fs from 'fs'

export interface IDictionaryPath {
  output: string,
  dict: string
}

const root: string = path.join(__dirname, '../../')

export function getDictPath (p: string): IDictionaryPath {
  const dictionary = require(path.join(root, 'data/dictionary.json'))
  return dictionary[p]
}

export async function getDefinitions (path: string, getLogger: GetJsFixLogger = makeEmptyLogger): Promise<FixDefinitions> {
  let parser: FixParser
  const dp: IDictionaryPath = getDictPath(path)
  if (dp) {
    path = dp.dict
  }
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

function norm (p: string): string {
  let f: string = p
  if (!path.isAbsolute(p)) {
    f = path.join(root, f)
  }
  return f
}
