/**
 * Lightweight in-memory XML element tree — provides DOM-like random access
 * over XML parsed by SAX. Mirrors the C# XDocument/XElement API surface
 * used by QuickFixXmlFileParser and DictionaryValidator.
 */
export interface XElement {
  readonly name: string
  readonly attributes: Record<string, string>
  readonly children: XElement[]
  readonly line?: number
}

/**
 * Query helper wrapping an XElement tree with C#-style traversal methods.
 * Mirrors XDocument/XElement LINQ-to-XML API used in cspurefix.
 */
export class XNode {
  constructor (public readonly element: XElement) {}

  /** Attribute value by name, or undefined if not present. */
  attribute (name: string): string | undefined {
    return this.element.attributes[name]
  }

  /** Direct children with the given tag name. */
  elements (name?: string): XNode[] {
    const children = name
      ? this.element.children.filter(c => c.name === name)
      : this.element.children
    return children.map(c => new XNode(c))
  }

  /** First direct child with the given tag name, or undefined. */
  firstElement (name: string): XNode | undefined {
    const child = this.element.children.find(c => c.name === name)
    return child ? new XNode(child) : undefined
  }

  /** All descendants (recursive) with the given tag name. */
  descendants (name: string): XNode[] {
    const result: XNode[] = []
    this.collectDescendants(this.element, name, result)
    return result
  }

  /** First descendant with the given tag name, or undefined. */
  firstDescendant (name: string): XNode | undefined {
    return this.findDescendant(this.element, name)
  }

  /** Shorthand: attribute value, throwing if missing. */
  requiredAttribute (name: string): string {
    const val = this.element.attributes[name]
    if (val === undefined) {
      throw new Error(`missing required attribute '${name}' on <${this.element.name}> at line ${this.element.line ?? '?'}`)
    }
    return val
  }

  /** The element's tag name. */
  get name (): string {
    return this.element.name
  }

  /** The element's source line number, if available. */
  get line (): number | undefined {
    return this.element.line
  }

  private collectDescendants (el: XElement, name: string, result: XNode[]): void {
    for (const child of el.children) {
      if (child.name === name) {
        result.push(new XNode(child))
      }
      this.collectDescendants(child, name, result)
    }
  }

  private findDescendant (el: XElement, name: string): XNode | undefined {
    for (const child of el.children) {
      if (child.name === name) {
        return new XNode(child)
      }
      const found = this.findDescendant(child, name)
      if (found) return found
    }
    return undefined
  }
}

/**
 * Parsed XML document — wraps the root element with query methods.
 * Equivalent to C# XDocument.
 */
export class XDocument {
  public readonly root: XNode

  constructor (rootElement: XElement) {
    this.root = new XNode(rootElement)
  }

  /** All descendants of the root with the given tag name (including the root itself if it matches). */
  descendants (name: string): XNode[] {
    const result: XNode[] = []
    if (this.root.name === name) result.push(this.root)
    result.push(...this.root.descendants(name))
    return result
  }

  /** First descendant of the root with the given tag name (including the root itself if it matches). */
  firstDescendant (name: string): XNode | undefined {
    if (this.root.name === name) return this.root
    return this.root.firstDescendant(name)
  }
}
