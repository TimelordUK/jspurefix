import { ICompilerSettings } from './compiler-settings'
import * as _ from 'lodash'

export class StandardSnippet {
  constructor (public readonly settings: ICompilerSettings) {
  }

  private static rhsJustify (txt: string, width: number): string {
    const align = require('align-text')
    return align(txt, width)
  }

  // import { camelName } from './component/name_underscore'
  public import (name: string, isMsg: boolean, indent: number): string {
    const spaces: string = this.spaces(indent)
    const fileName = _.snakeCase(name)
    const path = isMsg ? `./set/${fileName}` : `./${fileName}`
    return `${spaces}import { I${name} } from '${path}'`
  }

  public interface (name: string, indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}export interface I${name}`
  }

  public startBlockComment (indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}/*`
  }

  public endBlockComment (indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}*/`
  }

  public startBlock (indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}{`
  }

  public endBlock (indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}}`
  }

  public group (name: string, type: string, required: boolean, indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}${name}${required ? '' : '?'}: I${type}[]`
  }

  public component (name: string, required: boolean, indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}${name}${required ? '' : '?'}: I${name}`
  }

  public simple (name: string, type: string, required: boolean, indent: number): string {
    const spaces: string = this.spaces(indent)
    return `${spaces}${name}${required ? '' : '?'}: ${type}`
  }

  public enum (name: string, indent: number): string {
    const spaces: string = this.spaces(indent)
    return `export ${spaces}enum ${name}`
  }

  public enumValue (name: string, val: any, indent: number): string {
    const spaces: string = this.spaces(indent)
    if (typeof (val) === 'string') {
      return `${spaces}${name} = '${val}'`
    }
    return `${spaces}${name} = ${val}`
  }

  public spaces (indent: number): string {
    return ' '.repeat(this.settings.spaces * indent)
  }

  public commentLine (line: string, justify: number): string {
    return StandardSnippet.rhsJustify(`// ${line}`, justify)
  }

  public commentBox (str: string): string {
    const wrap = require('word-wrap')
    const text = wrap(str, {
      width: 60,
      indent: ' '
    }
    )
    let lines = text.split('\n').map((a: string) => a.trim())
    const max = this.longest(lines).length + 2
    const newLine: string = require('os').EOL
    lines = lines.map(function (line: string) {
      line = ` ${line} `
      const diff = max - line.length
      return '*' + line + ' '.repeat(diff) + '*'
    })
    const stars: string = '*'.repeat(lines[0].length)
    const joined: string = lines.join(newLine)
    return stars + newLine +
      joined +
      newLine +
      stars
  }

  private longest (arr: string[]): string {
    return arr.reduce(function (a, b) {
      return a.length > b.length ? a : b
    })
  }
}
