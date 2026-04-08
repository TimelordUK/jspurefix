import { XDocument, XElement } from './x-element'

/**
 * Builds an in-memory XElement tree from XML using a single SAX pass.
 * After construction, the tree provides DOM-like random access for
 * graph-based parsing and validation.
 */
export class SaxTreeBuilder {
  /**
   * Parse XML text into an XDocument.
   */
  static parse (xml: string): XDocument {
    const sax = require('sax')
    const parser = sax.parser(true, {})
    const stack: XElement[] = []
    let root: XElement | null = null
    let lastWasSelfClosing = false

    parser.onopentag = (node: { name: string, attributes: Record<string, string>, isSelfClosing: boolean }) => {
      const element: XElement = {
        name: node.name,
        attributes: { ...node.attributes },
        children: [],
        line: parser.line + 1
      }

      if (stack.length > 0) {
        stack[stack.length - 1].children.push(element)
      }

      lastWasSelfClosing = node.isSelfClosing
      if (!node.isSelfClosing) {
        stack.push(element)
      }
      if (!root) root = element
    }

    parser.onclosetag = () => {
      if (lastWasSelfClosing) {
        lastWasSelfClosing = false
        return
      }
      stack.pop()
    }

    parser.onerror = (err: Error) => {
      throw new Error(`XML parse error at line ${parser.line + 1}: ${err.message}`)
    }

    parser.write(xml).close()

    if (!root) {
      throw new Error('empty XML document')
    }

    return new XDocument(root)
  }

  /**
   * Parse XML from a readable stream into an XDocument.
   */
  static async parseStream (readable: NodeJS.ReadableStream): Promise<XDocument> {
    return await new Promise<XDocument>((resolve, reject) => {
      const sax = require('sax')
      const saxStream = sax.createStream(true, {})
      const stack: XElement[] = []
      let root: XElement | null = null
      let lastWasSelfClosing = false

      saxStream.on('opentag', (node: { name: string, attributes: Record<string, string>, isSelfClosing: boolean }) => {
        const element: XElement = {
          name: node.name,
          attributes: { ...node.attributes },
          children: [],
          line: saxStream._parser.line + 1
        }

        if (stack.length > 0) {
          stack[stack.length - 1].children.push(element)
        }

        lastWasSelfClosing = node.isSelfClosing
        if (!node.isSelfClosing) {
          stack.push(element)
        }
        if (!root) root = element
      })

      saxStream.on('closetag', () => {
        if (lastWasSelfClosing) {
          lastWasSelfClosing = false
          return
        }
        stack.pop()
      })

      saxStream.on('error', (err: Error) => {
        reject(new Error(`XML parse error: ${err.message}`))
      })

      saxStream.on('end', () => {
        if (!root) {
          reject(new Error('empty XML document'))
        } else {
          resolve(new XDocument(root))
        }
      })

      readable.pipe(saxStream)
    })
  }
}
