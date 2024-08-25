import { INumericKeyed } from '../../collections/collection'
import { ComponentFieldDefinition } from './component-field-definition'
import { MessageDefinition } from './message-definition'
import { SimpleFieldDefinition } from './simple-field-definition'
import { FixVersion } from '../fix-versions'
import { CategorySimpleSet } from './category-simple-set'
import { FixDefinitionSource } from '../fix-definition-source'
import { FixVersionParser } from './fix-version-parser'
import { IContainedSet } from '../contained/contained-set'

export class FixDefinitions {
  /**
   * all simple fields defined from source definition indexed via name
   * e.g. 'BeginString'
   */
  public readonly simple: Map<string, SimpleFieldDefinition> = new Map<string, SimpleFieldDefinition>()
  /**
   * all components defined from source definition indexed via name
   * e.g. 'Instrument'
   */
  public readonly component: Map<string, ComponentFieldDefinition> = new Map<string, ComponentFieldDefinition>()
  /**
   * all messages defined from source definition indexed via name
   * e.g. 'Logon'
   */
  public readonly message: Map<string, MessageDefinition> = new Map<string, MessageDefinition>()
  /**
   * all messages defined from source definition indexed via tag id
   * e.g. 8
   */
  public readonly tagToSimple: INumericKeyed<SimpleFieldDefinition> = {}
  /**
   * all fields within a category indexed via name used for FIXML
   */
  public readonly categorySimple: Map<string, CategorySimpleSet> = new Map<string, CategorySimpleSet>()

  constructor (public readonly source: FixDefinitionSource, public readonly version: FixVersion) {
  }

  public getMajor (): number {
    return FixVersionParser.getMajor(this.version)
  }

  public getMinor (): number {
    return FixVersionParser.getMinor(this.version)
  }

  public getServicePack (): number {
    return FixVersionParser.getServicePack(this.version)
  }

  public toString (): string {
    const msgs = this.message.values()
    const strs: String[] = []
    for (const message of msgs) {
      strs.push(message.toString())
    }
    return JSON.stringify(strs, null, 4)
  }

  public containedSet (type: string): IContainedSet | undefined {
    return this.message.get(type) ?? this.component.get(type)
  }

  /**
   * utility method to return a set representing a message, group or field with
   * a dot denoted path starting with message name e.g.
   * 'SecurityList.SecListGrp.NoRelatedSym.SecurityTradingRules'
   * @param path dot denoted path too field set nested from root
   */
  public getSet (path: string): IContainedSet | undefined {
    const idx = path.indexOf('.')
    let name: string = path
    if (idx > 0) {
      name = path.substring(0, idx)
    } else {
      return this.message.get(name)
    }
    return this.message.get(name)?.getSet(path.substring(idx + 1)) ?? undefined
  }

  /**
   * add a new defined message into definitions these are high level definitions
   * built from simple, component and group fields
   * @param message to add e.g. Logon definition
   */
  public addMessage (message: MessageDefinition): void {
    const messages = this.message
    messages.set(message.name, message)
    if (message.msgType && message.msgType !== message.name) {
      messages.set(message.msgType, message)
    }
    if (message.abbreviation) {
      if (message.abbreviation !== message.name) {
        messages.set(message.abbreviation, message)
      }
    }
  }

  /**
   * add a new defined component from source definition used by parsers
   * @param field
   */
  public addComponentFieldDef (field: ComponentFieldDefinition): void {
    this.component.set(field.name, field)
  }

  /**
   * return a simple field definition either from global set or from
   * within a sub category on case of FIXML
   * @param name of the field to fetch
   * @param cat optional category from which field belongs
   */
  public getSimple (name: string, cat?: string | null): SimpleFieldDefinition | undefined {
    let sf: SimpleFieldDefinition | undefined
    if (cat) {
      const category = this.categorySimple.get(cat)
      if (category) {
        sf = category.simple.get(name)
      }
    }
    if (!sf) {
      sf = this.simple.get(name)
    }
    return sf
  }

  /**
   * add an alias for a simple field used by FIXML
   * @param from the original name
   * @param to the alias being used
   */
  public addSimpleAlias (from: string, to: string): void {
    const simple = this.simple.get(from)
    if (simple) {
      this.simple.set(to, simple)
    }
  }

  /**
   * add a simple field into the definition utility method used by FIX parsers
   * @param field the new field to add
   * @param typeName optional typename
   */

  public addSimpleFieldDef (field: SimpleFieldDefinition, typeName: string | null = null): void {
    this.assignCategory(field)
    const simple = this.simple
    simple.set(field.num, field)
    simple.set(field.name, field)
    this.tagToSimple[field.tag] = field
    if (field.abbreviation && field.abbreviation !== field.name) {
      if (!simple.has(field.abbreviation)) {
        simple.set(field.abbreviation, field)
      }
    }
    if (typeName && typeName !== field.name && field.name && field.type) {
      simple.set(typeName, field)
    }
  }

  private assignCategory (field: SimpleFieldDefinition): void {
    if (field.baseCategory && field.baseCategoryAbbreviation) {
      let category = this.categorySimple.get(field.baseCategory)
      if (!category) {
        category = new CategorySimpleSet(field.baseCategory)
        this.categorySimple.set(field.baseCategory, category)
      }
      category.simple.set(field.baseCategoryAbbreviation, field)
    }
  }
}
