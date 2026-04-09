import { XDocument, XNode } from './x-element'
import {
  DictionaryValidationException,
  ValidationError,
  ValidationSeverity
} from './validation-error'

interface FieldDefinitionInfo {
  readonly name: string
  readonly tag: number
  readonly type: string
  readonly lineNumber?: number
}

interface ComponentDefinitionInfo {
  readonly name: string
  readonly lineNumber?: number
}

interface MessageDefinitionInfo {
  readonly name: string
  readonly msgType: string
  readonly lineNumber?: number
}

/**
 * Validates FIX dictionary XML for common errors like duplicates, missing references, etc.
 * Port of C# DictionaryValidator — operates on an XDocument tree built by SaxTreeBuilder.
 */
export class DictionaryValidator {
  private readonly _errors: ValidationError[] = []

  // Track definitions — case-sensitive for exact matching
  private readonly fieldsByName = new Map<string, FieldDefinitionInfo>()
  private readonly fieldsByTag = new Map<number, FieldDefinitionInfo>()
  private readonly componentsByName = new Map<string, ComponentDefinitionInfo>()
  private readonly messagesByName = new Map<string, MessageDefinitionInfo>()
  private readonly messagesByMsgType = new Map<string, MessageDefinitionInfo>()

  // Case-insensitive lookup for "did you mean" suggestions
  private readonly fieldNamesCaseInsensitive = new Map<string, string>()
  private readonly componentNamesCaseInsensitive = new Map<string, string>()

  // Track what's referenced (to find unused definitions)
  private readonly referencedFields = new Set<string>()
  private readonly referencedComponents = new Set<string>()

  // All known names for "did you mean" suggestions
  private readonly allFieldNames: string[] = []
  private readonly allComponentNames: string[] = []

  get errors (): ReadonlyArray<ValidationError> {
    return this._errors
  }

  get hasErrors (): boolean {
    return this._errors.some(e => e.severity === ValidationSeverity.Error)
  }

  get hasWarnings (): boolean {
    return this._errors.some(e => e.severity === ValidationSeverity.Warning)
  }

  validate (doc: XDocument): void {
    // First pass: collect all definitions
    this.collectFieldDefinitions(doc)
    this.collectComponentDefinitions(doc)
    this.collectMessageDefinitions(doc)

    // Second pass: validate references
    this.validateHeader(doc)
    this.validateTrailer(doc)
    this.validateComponentReferences(doc)
    this.validateMessageReferences(doc)

    // Third pass: check for unused definitions (warnings only)
    this.checkUnusedDefinitions()
  }

  throwIfErrors (): void {
    if (this.hasErrors) {
      throw new DictionaryValidationException(this._errors)
    }
  }

  // ── Field Validation ──

  private collectFieldDefinitions (doc: XDocument): void {
    const fieldsNode = doc.firstDescendant('fields')
    if (!fieldsNode) {
      this.addError('MISSING_FIELDS', 'No <fields> section found in dictionary')
      return
    }

    for (const field of fieldsNode.elements('field')) {
      this.validateFieldDefinition(field)
    }
  }

  private validateFieldDefinition (field: XNode): void {
    const name = field.attribute('name')
    const numberStr = field.attribute('number')
    const type = field.attribute('type')
    const lineNumber = field.line

    if (!name) {
      this.addError('FIELD_NO_NAME', 'Field definition missing \'name\' attribute', undefined, undefined, lineNumber)
      return
    }

    const tag = numberStr != null ? parseInt(numberStr, 10) : NaN
    if (!numberStr || isNaN(tag)) {
      this.addError('FIELD_NO_TAG', `Field '${name}' missing or invalid 'number' attribute`, name, 'field', lineNumber)
      return
    }

    if (!type) {
      this.addWarning('FIELD_NO_TYPE', `Field '${name}' missing 'type' attribute, defaulting to STRING`, name, 'field', lineNumber)
    }

    this.allFieldNames.push(name)

    // Check for duplicate by name
    const existingByName = this.fieldsByName.get(name)
    if (existingByName) {
      this.addError('DUPLICATE_FIELD_NAME',
        `Duplicate field name '${name}' (tag ${tag}). Previously defined with tag ${existingByName.tag}`,
        name, 'field', lineNumber,
        existingByName.tag === tag ? 'Remove the duplicate definition' : 'Use unique field names')
      return
    }

    // Check for duplicate by tag
    const existingByTag = this.fieldsByTag.get(tag)
    if (existingByTag) {
      this.addError('DUPLICATE_FIELD_TAG',
        `Duplicate field tag ${tag} for '${name}'. Tag already used by field '${existingByTag.name}'`,
        name, 'field', lineNumber,
        'Each tag number must be unique')
      return
    }

    const info: FieldDefinitionInfo = { name, tag, type: type ?? 'STRING', lineNumber }
    this.fieldsByName.set(name, info)
    this.fieldsByTag.set(tag, info)
    this.fieldNamesCaseInsensitive.set(name.toLowerCase(), name)

    this.validateFieldEnums(field, name, lineNumber)
  }

  private validateFieldEnums (field: XNode, fieldName: string, lineNumber?: number): void {
    const values = field.elements('value')
    if (values.length === 0) return

    const seenEnumKeys = new Set<string>()
    const seenEnumDescriptions = new Set<string>()

    for (const value of values) {
      const enumKey = value.attribute('enum')
      const description = value.attribute('description')
      const valueLine = value.line ?? lineNumber

      if (!enumKey) {
        this.addError('ENUM_NO_KEY', `Field '${fieldName}' has enum value without 'enum' attribute`,
          fieldName, 'field', valueLine)
        continue
      }

      if (!description) {
        this.addWarning('ENUM_NO_DESC', `Field '${fieldName}' enum '${enumKey}' has no description`,
          fieldName, 'field', valueLine)
      }

      if (seenEnumKeys.has(enumKey)) {
        this.addError('DUPLICATE_ENUM_KEY',
          `Field '${fieldName}' has duplicate enum key '${enumKey}'`,
          fieldName, 'field', valueLine)
      }
      seenEnumKeys.add(enumKey)

      if (description != null) {
        const descLower = description.toLowerCase()
        if (seenEnumDescriptions.has(descLower)) {
          this.addWarning('DUPLICATE_ENUM_DESC',
            `Field '${fieldName}' has duplicate enum description '${description}' which may cause naming conflicts`,
            fieldName, 'field', valueLine)
        }
        seenEnumDescriptions.add(descLower)
      }
    }
  }

  // ── Component Validation ──

  private collectComponentDefinitions (doc: XDocument): void {
    const componentsNode = doc.firstDescendant('components')
    if (!componentsNode) {
      // Components are optional
      return
    }

    for (const component of componentsNode.elements('component')) {
      this.validateComponentDefinition(component)
    }
  }

  private validateComponentDefinition (component: XNode): void {
    const name = component.attribute('name')
    const lineNumber = component.line

    if (!name) {
      this.addError('COMPONENT_NO_NAME', 'Component definition missing \'name\' attribute', undefined, undefined, lineNumber)
      return
    }

    this.allComponentNames.push(name)

    const existing = this.componentsByName.get(name)
    if (existing) {
      this.addError('DUPLICATE_COMPONENT',
        `Duplicate component name '${name}'`,
        name, 'component', lineNumber,
        `Previously defined at line ${existing.lineNumber ?? '?'}`)
      return
    }

    this.componentsByName.set(name, { name, lineNumber })
    this.componentNamesCaseInsensitive.set(name.toLowerCase(), name)

    this.validateFieldReferences(component, name, 'component')
  }

  // ── Message Validation ──

  private collectMessageDefinitions (doc: XDocument): void {
    const messagesNode = doc.firstDescendant('messages')
    if (!messagesNode) {
      this.addError('MISSING_MESSAGES', 'No <messages> section found in dictionary')
      return
    }

    for (const message of messagesNode.elements('message')) {
      this.validateMessageDefinition(message)
    }
  }

  private validateMessageDefinition (message: XNode): void {
    const name = message.attribute('name')
    const msgType = message.attribute('msgtype')
    const lineNumber = message.line

    if (!name) {
      this.addError('MESSAGE_NO_NAME', 'Message definition missing \'name\' attribute', undefined, undefined, lineNumber)
      return
    }

    if (!msgType) {
      this.addError('MESSAGE_NO_MSGTYPE', `Message '${name}' missing 'msgtype' attribute`,
        name, 'message', lineNumber)
      return
    }

    const existingByName = this.messagesByName.get(name)
    if (existingByName) {
      this.addError('DUPLICATE_MESSAGE_NAME',
        `Duplicate message name '${name}'`,
        name, 'message', lineNumber,
        `Previously defined at line ${existingByName.lineNumber ?? '?'}`)
      return
    }

    const existingByType = this.messagesByMsgType.get(msgType)
    if (existingByType) {
      this.addError('DUPLICATE_MESSAGE_TYPE',
        `Duplicate message type '${msgType}' for message '${name}'. Type already used by '${existingByType.name}'`,
        name, 'message', lineNumber)
      return
    }

    const info: MessageDefinitionInfo = { name, msgType, lineNumber }
    this.messagesByName.set(name, info)
    this.messagesByMsgType.set(msgType, info)

    this.validateFieldReferences(message, name, 'message')
  }

  // ── Reference Validation ──

  private validateHeader (doc: XDocument): void {
    const header = doc.firstDescendant('header')
    if (!header) {
      this.addError('MISSING_HEADER', 'No <header> section found in dictionary')
      return
    }
    this.validateFieldReferences(header, 'StandardHeader', 'header')
  }

  private validateTrailer (doc: XDocument): void {
    const trailer = doc.firstDescendant('trailer')
    if (!trailer) {
      this.addError('MISSING_TRAILER', 'No <trailer> section found in dictionary')
      return
    }
    this.validateFieldReferences(trailer, 'StandardTrailer', 'trailer')
  }

  private validateComponentReferences (doc: XDocument): void {
    const componentsNode = doc.firstDescendant('components')
    if (!componentsNode) return

    for (const component of componentsNode.elements('component')) {
      const name = component.attribute('name')
      if (!name) continue

      for (const compRef of component.descendants('component')) {
        this.validateComponentReference(compRef, name, 'component')
      }
    }
  }

  private validateMessageReferences (doc: XDocument): void {
    const messagesNode = doc.firstDescendant('messages')
    if (!messagesNode) return

    for (const message of messagesNode.elements('message')) {
      const name = message.attribute('name')
      if (!name) continue

      for (const compRef of message.descendants('component')) {
        this.validateComponentReference(compRef, name, 'message')
      }
    }
  }

  private validateFieldReferences (container: XNode, containerName: string, containerType: string): void {
    for (const fieldRef of container.elements('field')) {
      const fieldName = fieldRef.attribute('name')
      const lineNumber = fieldRef.line

      if (!fieldName) {
        this.addError('FIELD_REF_NO_NAME',
          `Field reference in ${containerType} '${containerName}' missing 'name' attribute`,
          containerName, containerType, lineNumber)
        continue
      }

      this.referencedFields.add(fieldName)

      if (!this.fieldsByName.has(fieldName)) {
        // Check for case mismatch first
        const correctCase = this.fieldNamesCaseInsensitive.get(fieldName.toLowerCase())
        const suggestion = correctCase ?? DictionaryValidator.findSimilar(fieldName, this.allFieldNames)

        this.addError('UNDEFINED_FIELD',
          `Field '${fieldName}' referenced in ${containerType} '${containerName}' is not defined`,
          fieldName, 'field reference', lineNumber,
          suggestion != null ? `Did you mean '${suggestion}'?` : 'Add the field to the <fields> section')
      }
    }

    // Recursively check groups
    for (const group of container.elements('group')) {
      const groupName = group.attribute('name') ?? 'unknown'
      this.referencedFields.add(groupName)

      if (groupName !== 'unknown' && !this.fieldsByName.has(groupName)) {
        const lineNumber = group.line
        const suggestion = DictionaryValidator.findSimilar(groupName, this.allFieldNames)

        this.addError('UNDEFINED_GROUP_FIELD',
          `Group '${groupName}' in ${containerType} '${containerName}' has no corresponding field definition (for the repeating count)`,
          groupName, 'group', lineNumber,
          suggestion != null ? `Did you mean '${suggestion}'?` : 'Add a NUMINGROUP field for this group')
      }

      this.validateFieldReferences(group, `${containerName}.${groupName}`, 'group')
    }
  }

  private validateComponentReference (compRef: XNode, containerName: string, containerType: string): void {
    const compName = compRef.attribute('name')
    const lineNumber = compRef.line

    if (!compName) {
      this.addError('COMPONENT_REF_NO_NAME',
        `Component reference in ${containerType} '${containerName}' missing 'name' attribute`,
        containerName, containerType, lineNumber)
      return
    }

    this.referencedComponents.add(compName)

    if (!this.componentsByName.has(compName) &&
        compName !== 'StandardHeader' && compName !== 'StandardTrailer') {
      const suggestion = DictionaryValidator.findSimilar(compName, this.allComponentNames)
      this.addError('UNDEFINED_COMPONENT',
        `Component '${compName}' referenced in ${containerType} '${containerName}' is not defined`,
        compName, 'component reference', lineNumber,
        suggestion != null ? `Did you mean '${suggestion}'?` : 'Add the component to the <components> section')
    }
  }

  private checkUnusedDefinitions (): void {
    for (const field of this.fieldsByName.values()) {
      if (!this.referencedFields.has(field.name)) {
        this.addWarning('UNUSED_FIELD',
          `Field '${field.name}' (tag ${field.tag}) is defined but never referenced`,
          field.name, 'field', field.lineNumber)
      }
    }

    for (const comp of this.componentsByName.values()) {
      if (!this.referencedComponents.has(comp.name)) {
        this.addWarning('UNUSED_COMPONENT',
          `Component '${comp.name}' is defined but never referenced`,
          comp.name, 'component', comp.lineNumber)
      }
    }
  }

  // ── Helpers ──

  private addError (code: string, message: string, elementName?: string,
    elementType?: string, lineNumber?: number, suggestion?: string): void {
    this._errors.push({ severity: ValidationSeverity.Error, code, message, elementName, elementType, lineNumber, suggestion })
  }

  private addWarning (code: string, message: string, elementName?: string,
    elementType?: string, lineNumber?: number, suggestion?: string): void {
    this._errors.push({ severity: ValidationSeverity.Warning, code, message, elementName, elementType, lineNumber, suggestion })
  }

  static findSimilar (input: string, candidates: string[]): string | null {
    let bestMatch: string | null = null
    let bestDistance = Infinity
    const maxDistance = Math.max(3, Math.floor(input.length / 2))
    const inputLower = input.toLowerCase()

    for (const candidate of candidates) {
      const distance = DictionaryValidator.levenshteinDistance(inputLower, candidate.toLowerCase())
      if (distance < bestDistance && distance <= maxDistance) {
        bestDistance = distance
        bestMatch = candidate
      }
    }

    return bestMatch
  }

  static levenshteinDistance (s1: string, s2: string): number {
    const n = s1.length
    const m = s2.length
    if (n === 0) return m
    if (m === 0) return n

    const d: number[][] = Array.from({ length: n + 1 }, () => new Array(m + 1).fill(0))

    for (let i = 0; i <= n; i++) d[i][0] = i
    for (let j = 0; j <= m; j++) d[0][j] = j

    for (let i = 1; i <= n; i++) {
      for (let j = 1; j <= m; j++) {
        const cost = s1[i - 1] === s2[j - 1] ? 0 : 1
        d[i][j] = Math.min(
          d[i - 1][j] + 1,
          d[i][j - 1] + 1,
          d[i - 1][j - 1] + cost)
      }
    }

    return d[n][m]
  }
}
