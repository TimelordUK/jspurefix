/**
 * Graph-based QuickFix XML dictionary parser.
 *
 * Verbatim port of C# QuickFixXmlFileParser. Uses XDocument tree (from SaxTreeBuilder)
 * for random-access XML traversal and a Node/Edge/work-queue pattern for forward
 * reference resolution. Replaces the iterative N-pass SAX-streaming approach.
 *
 * Pre-parse validation via DictionaryValidator catches missing fields, duplicates,
 * and undefined references with "did you mean" suggestions before parsing begins.
 */
import { XDocument, XNode } from './x-element'
import { SaxTreeBuilder } from './sax-tree-builder'
import { DictionaryValidator } from './dictionary-validator'
import { FixDefinitions } from '../../definition/fix-definitions'
import { SimpleFieldDefinition } from '../../definition/simple-field-definition'
import { ComponentFieldDefinition } from '../../definition/component-field-definition'
import { GroupFieldDefinition } from '../../definition/group-field-definition'
import { MessageDefinition } from '../../definition/message-definition'
import { ContainedFieldSet } from '../../contained/contained-field-set'
import { ContainedSimpleField } from '../../contained/contained-simple-field'
import { ContainedComponentField } from '../../contained/contained-component-field'
import { ContainedGroupField } from '../../contained/contained-group-field'
import { ContainedSetBuilder } from '../../contained/contained-set-builder'
import { FixDefinitionSource } from '../../fix-definition-source'
import { VersionUtil } from '../../version-util'
import { IndexVisitor } from './index-visitor'

export enum NodeElementType {
  MessageDefinition = 'MessageDefinition',
  SimpleFieldDefinition = 'SimpleFieldDefinition',
  SimpleFieldDeclaration = 'SimpleFieldDeclaration',
  InlineGroupDefinition = 'InlineGroupDefinition',
  GroupDefinition = 'GroupDefinition',
  GroupDeclaration = 'GroupDeclaration',
  ComponentDefinition = 'ComponentDefinition',
  ComponentDeclaration = 'ComponentDeclaration'
}

export interface Edge {
  readonly head: number
  readonly tail: number
}

export class GraphNode {
  private readonly _edges: Edge[] = []

  constructor (
    public readonly id: number,
    public readonly name: string,
    public readonly type: NodeElementType,
    public readonly element: XNode
  ) {}

  get edges (): ReadonlyArray<Edge> {
    return this._edges
  }

  makeEdge (tail: number): Edge {
    const edge: Edge = { head: this.id, tail }
    this._edges.push(edge)
    return edge
  }

  isRequired (): boolean {
    if (this.name === 'StandardHeader' || this.name === 'StandardTrailer') return true
    return this.element.attribute('required') === 'Y'
  }

  toString (): string {
    return `Node: id=${this.id}, name=${this.name}, type=${this.type}`
  }
}

export interface QuickFixGraphParserOptions {
  validateBeforeParsing?: boolean
}

export class QuickFixGraphParser {
  private readonly definitions: FixDefinitions
  private readonly nodes = new Map<number, GraphNode>()
  private readonly containedSets = new Map<number, ContainedFieldSet>()
  private readonly queue: GraphNode[] = []
  private nextId = 0
  private header: GraphNode | null = null
  private trailer: GraphNode | null = null

  public validator: DictionaryValidator | null = null
  public readonly validateBeforeParsing: boolean

  constructor (definitions: FixDefinitions, options: QuickFixGraphParserOptions = {}) {
    this.definitions = definitions
    this.validateBeforeParsing = options.validateBeforeParsing ?? true
  }

  /**
   * Parse XML text into the FixDefinitions provided at construction.
   * Throws DictionaryValidationException if validation is enabled and errors are found.
   */
  parseText (xml: string): FixDefinitions {
    const doc = SaxTreeBuilder.parse(xml)
    return this.parseDocument(doc)
  }

  /**
   * Parse a pre-built XDocument tree.
   */
  parseDocument (doc: XDocument): FixDefinitions {
    if (this.validateBeforeParsing) {
      this.validator = new DictionaryValidator()
      this.validator.validate(doc)
      this.validator.throwIfErrors()
    }

    this.parseVersion(doc)
    this.parseFields(doc)
    this.parseComponents(doc)
    this.parseHeader(doc)
    this.parseTrailer(doc)
    this.parseMessages(doc)

    while (this.queue.length > 0) {
      const node = this.queue.shift()!
      this.work(node)
    }

    /*
     * At this point all fields on all sets are placed, however the parent (e.g. an
     * Instrument component) is not aware of the tags contained in nested groups/components
     * that were resolved AFTER it. The IndexVisitor walks every message and re-indexes
     * its tree post-order so each set knows all tags below it — essential for the segment
     * parser to work.
     */
    new IndexVisitor().compute(this.definitions)

    return this.definitions
  }

  // ── Graph construction ──

  private makeNode (name: string, element: XNode, type: NodeElementType): GraphNode {
    const node = new GraphNode(this.nextId++, name, type, element)
    this.nodes.set(node.id, node)
    this.queue.push(node)
    return node
  }

  private constructTailNode (name: string, headNode: GraphNode, element: XNode, type: NodeElementType): void {
    const tailNode = this.makeNode(name, element, type)
    headNode.makeEdge(tailNode.id)
    tailNode.makeEdge(headNode.id)
  }

  // ── Parsing entry points ──

  private parseVersion (doc: XDocument): void {
    const version = doc.firstDescendant('fix')
    if (!version) throw new Error('no <fix> root element')
    const major = parseInt(version.attribute('major') ?? '0', 10)
    const minor = parseInt(version.attribute('minor') ?? '0', 10)
    const servicepack = parseInt(version.attribute('servicepack') ?? '0', 10)
    const description = (major !== 5 || servicepack === 0)
      ? `FIX.${major}.${minor}`
      : `FIX.${major}.${minor}SP${servicepack}`
    const resolved = VersionUtil.resolve(description)
    // FixDefinitions doesn't have a setVersion — version is set at construction
    if (resolved !== this.definitions.version) {
      throw new Error(`version mismatch: dictionary declares ${description} but FixDefinitions was constructed with ${this.definitions.version}`)
    }
  }

  private parseFields (doc: XDocument): void {
    const fieldsNode = doc.firstDescendant('fields')
    if (!fieldsNode) return
    for (const fieldElement of fieldsNode.elements('field')) {
      this.makeNode(QuickFixGraphParser.nameFrom(fieldElement), fieldElement, NodeElementType.SimpleFieldDefinition)
    }
  }

  private parseComponents (doc: XDocument): void {
    const componentsNode = doc.firstDescendant('components')
    if (!componentsNode) return
    for (const componentElement of componentsNode.elements('component')) {
      this.makeNode(QuickFixGraphParser.nameFrom(componentElement), componentElement, NodeElementType.ComponentDefinition)
    }
  }

  private parseHeader (doc: XDocument): void {
    const header = doc.firstDescendant('header')
    if (!header) throw new Error('no header declared in fix definitions')
    this.header = this.makeNode('StandardHeader', header, NodeElementType.ComponentDefinition)
  }

  private parseTrailer (doc: XDocument): void {
    const trailer = doc.firstDescendant('trailer')
    if (!trailer) throw new Error('no trailer declared in fix definitions')
    this.trailer = this.makeNode('StandardTrailer', trailer, NodeElementType.ComponentDefinition)
  }

  private parseMessages (doc: XDocument): void {
    const messagesNode = doc.firstDescendant('messages')
    if (!messagesNode) return
    for (const messageElement of messagesNode.elements('message')) {
      const msgType = messageElement.attribute('msgtype')
      if (!msgType) continue
      this.makeNode(msgType, messageElement, NodeElementType.MessageDefinition)
    }
  }

  // ── Work queue dispatch ──

  private work (node: GraphNode): void {
    switch (node.type) {
      case NodeElementType.SimpleFieldDefinition: {
        const sd = QuickFixGraphParser.getField(node.element)
        this.definitions.addSimpleFieldDef(sd)
        break
      }
      case NodeElementType.MessageDefinition: {
        this.messageDefinition(node)
        break
      }
      case NodeElementType.ComponentDefinition: {
        this.componentDefinition(node)
        break
      }
      case NodeElementType.SimpleFieldDeclaration: {
        this.simpleFieldDeclaration(node)
        break
      }
      case NodeElementType.InlineGroupDefinition: {
        this.inlineGroupDefinition(node)
        break
      }
      case NodeElementType.GroupDefinition: {
        this.groupDefinition(node)
        break
      }
      case NodeElementType.ComponentDeclaration: {
        this.componentDeclaration(node)
        break
      }
      case NodeElementType.GroupDeclaration: {
        // QuickFix XML never has standalone group declarations — groups are always inline
        break
      }
    }
  }

  // ── Definition handlers ──

  private getComponentDefinition (node: GraphNode): ComponentFieldDefinition {
    let definition = this.definitions.component.get(node.name)
    if (definition) return definition
    definition = new ComponentFieldDefinition(node.name, node.name, null, node.name)
    this.definitions.addComponentFieldDef(definition)
    return definition
  }

  private componentDeclaration (node: GraphNode): void {
    const definition = this.getComponentDefinition(node)
    const edge = node.edges[0]
    const parentSet = this.containedSets.get(edge.tail)
    if (!parentSet) {
      throw new Error(`edge tail ${edge.tail} has no contained set on which to place declared component '${node.name}'`)
    }
    const containedComponent = new ContainedComponentField(definition, parentSet.fields.length, node.isRequired())
    new ContainedSetBuilder(parentSet).add(containedComponent)
    this.containedSets.set(edge.head, definition)
  }

  private messageDefinition (node: GraphNode): void {
    if (!this.header) throw new Error('header not set')
    if (!this.trailer) throw new Error('trailer not set')

    const md = QuickFixGraphParser.getMessage(node.element)
    this.definitions.addMessage(md)
    this.containedSets.set(node.id, md)

    // wrap the message body in StandardHeader + content + StandardTrailer
    this.constructTailNode('StandardHeader', node, this.header.element, NodeElementType.ComponentDeclaration)
    this.expandSet(node)
    this.constructTailNode('StandardTrailer', node, this.trailer.element, NodeElementType.ComponentDeclaration)
  }

  private componentDefinition (node: GraphNode): void {
    const definition = this.getComponentDefinition(node)
    this.containedSets.set(node.id, definition)
    this.expandSet(node)
  }

  private groupDefinition (node: GraphNode): void {
    const tail = node.edges[0]?.tail
    if (tail == null) {
      throw new Error(`node ${node} has no edges to find tail for group definition`)
    }
    const definition = this.containedSets.get(tail)
    if (!definition) {
      throw new Error(`node ${node} has no contained set for group definition`)
    }
    this.containedSets.set(node.edges[0].head, definition)
    this.expandSet(node)
  }

  private inlineGroupDefinition (node: GraphNode): void {
    const edge = node.edges[0]
    if (!edge) {
      throw new Error(`node ${node} has no edges to find tail for inline group definition`)
    }
    const parentSet = this.containedSets.get(edge.tail)
    if (!parentSet) {
      throw new Error(`edge tail ${edge.tail} has no contained set for inline group '${node.name}'`)
    }
    const noOFieldDefinition = this.definitions.simple.get(node.name)
    if (!noOFieldDefinition) {
      throw new Error(`${node.name} does not exist in simple field definitions to construct inline group`)
    }
    const name = node.name
    const definition = new GroupFieldDefinition(name, name, null, noOFieldDefinition, name)
    const containedGroup = new ContainedGroupField(definition, parentSet.fields.length, node.isRequired())
    new ContainedSetBuilder(parentSet).add(containedGroup)
    this.containedSets.set(edge.head, definition)
    this.constructTailNode(name, node, node.element, NodeElementType.GroupDefinition)
  }

  private simpleFieldDeclaration (node: GraphNode): void {
    const edge = node.edges[0]
    if (!edge) {
      throw new Error(`node ${node} has no edges to find tail for simple field declaration`)
    }
    const parentSet = this.containedSets.get(edge.tail)
    if (!parentSet) {
      throw new Error(`edge tail ${edge.tail} has no contained set for declared field '${node.name}'`)
    }
    const sd = this.definitions.simple.get(node.name)
    if (!sd) {
      throw new Error(`element ${node} cannot be located as a simple field`)
    }
    const containedSimpleField = new ContainedSimpleField(sd, parentSet.fields.length, node.isRequired(), false)
    new ContainedSetBuilder(parentSet).add(containedSimpleField)
  }

  // ── Set expansion ──

  /**
   * Walks the children of a definition node and constructs tail nodes for each
   * field/group/component reference, queuing them for resolution.
   */
  private expandSet (node: GraphNode): void {
    for (const child of node.element.elements()) {
      switch (child.name) {
        case 'field': {
          this.expandField(node, child)
          break
        }
        case 'group': {
          this.expandGroup(node, child)
          break
        }
        case 'component': {
          this.expandComponent(node, child)
          break
        }
      }
    }
  }

  private expandField (node: GraphNode, element: XNode): void {
    this.constructTailNode(QuickFixGraphParser.nameFrom(element), node, element, NodeElementType.SimpleFieldDeclaration)
  }

  private expandGroup (node: GraphNode, element: XNode): void {
    this.expandSetChild(node, element, NodeElementType.InlineGroupDefinition, NodeElementType.GroupDeclaration)
  }

  private expandComponent (node: GraphNode, element: XNode): void {
    this.expandSetChild(node, element, NodeElementType.ComponentDefinition, NodeElementType.ComponentDeclaration)
  }

  private expandSetChild (
    node: GraphNode,
    element: XNode,
    defineElement: NodeElementType,
    declareElement: NodeElementType
  ): void {
    const name = QuickFixGraphParser.nameFrom(element)
    const hasInlinedFields = element.elements().length > 0
    const elementType = hasInlinedFields ? defineElement : declareElement
    this.constructTailNode(name, node, element, elementType)
  }

  // ── Static helpers ──

  /**
   * Extract a name from an element's attributes, with the same conventions as the C# parser:
   * strip spaces, prefix with 'F' if the name starts with a digit.
   */
  static nameFrom (element: XNode): string {
    let name = element.attribute('name') ?? ''
    name = name.replace(/ /g, '')
    if (name.length > 0 && name[0] >= '0' && name[0] <= '9') {
      name = `F${name}`
    }
    return name
  }

  static getField (element: XNode): SimpleFieldDefinition {
    const name = QuickFixGraphParser.nameFrom(element)
    const numberStr = element.attribute('number')
    const tag = numberStr != null ? parseInt(numberStr, 10) : -1
    if (tag < 0) throw new Error(`no tag/number for ${name}`)
    const type = element.attribute('type') ?? 'STRING'

    const sd = new SimpleFieldDefinition(String(tag), name, name, null, null, type, null)
    // Add enum values
    for (const value of element.elements('value')) {
      const enumKey = value.attribute('enum')
      const description = value.attribute('description') ?? ''
      if (enumKey != null) {
        sd.addEnum(enumKey, description, description)
      }
    }
    return sd
  }

  static getMessage (element: XNode): MessageDefinition {
    const name = QuickFixGraphParser.nameFrom(element)
    const msgCat = element.attribute('msgcat') ?? ''
    const msgType = element.attribute('msgtype') ?? ''
    return new MessageDefinition(name, name, msgType, msgCat, name)
  }

  /**
   * Convenience: parse XML text into a fresh FixDefinitions.
   */
  static parse (xml: string, options: QuickFixGraphParserOptions = {}): FixDefinitions {
    // Pre-parse the version so we can construct FixDefinitions correctly
    const doc = SaxTreeBuilder.parse(xml)
    const fixRoot = doc.firstDescendant('fix')
    if (!fixRoot) throw new Error('no <fix> root element')
    const major = parseInt(fixRoot.attribute('major') ?? '0', 10)
    const minor = parseInt(fixRoot.attribute('minor') ?? '0', 10)
    const servicepack = parseInt(fixRoot.attribute('servicepack') ?? '0', 10)
    const description = (major !== 5 || servicepack === 0)
      ? `FIX.${major}.${minor}`
      : `FIX.${major}.${minor}SP${servicepack}`
    const definitions = new FixDefinitions(FixDefinitionSource.QuickFix, VersionUtil.resolve(description))
    const parser = new QuickFixGraphParser(definitions, options)
    return parser.parseDocument(doc)
  }
}
