import { INumericKeyed } from '../../collections/collection'
import { Dictionary } from '../../collections'
import { ComponentFieldDefinition } from './component-field-definition'
import { MessageDefinition } from './message-definition'
import { SimpleFieldDefinition } from './simple-field-definition'
import { FixVersion } from '../fix-versions'
import { CategorySimpleSet } from './category-simple-set'
import { ContainedFieldSet } from '../contained'
import { FixDefinitionSource } from '../fix-definition-source'

export class FixDefinitions {
  /**
   * all simple fields defined from source definition indexed via name
   * e.g. 'BeginString'
   */
  public readonly simple: Dictionary<SimpleFieldDefinition> = new Dictionary<SimpleFieldDefinition>()
  /**
   * all components defined from source definition indexed via name
   * e.g. 'Instrument'
   */
  public readonly component: Dictionary<ComponentFieldDefinition> = new Dictionary<ComponentFieldDefinition>()
  /**
   * all messages defined from source definition indexed via name
   * e.g. 'Logon'
   */
  public readonly message: Dictionary<MessageDefinition> = new Dictionary<MessageDefinition>()
  /**
   * all messages defined from source definition indexed via tag id
   * e.g. 8
   */
  public readonly tagToSimple: INumericKeyed<SimpleFieldDefinition> = {}
  /**
   * all fields within a category indexed via name used for FIXML
   */
  public readonly categorySimple: Dictionary<CategorySimpleSet> = new Dictionary<CategorySimpleSet>()

  constructor (public readonly source: FixDefinitionSource, public readonly version: FixVersion) {
  }

  public toString (): string {
    const msgs = this.message.values()
    const strs: String[] = msgs.map(m => m.toString())
    return JSON.stringify(strs, null, 4)
  }

  public containedSet (type: string): ContainedFieldSet | null {
    return this.message.get(type) ?? this.component.get(type)
  }

  /**
   * utility method to return a set representing a message, group or field with
   * a dot denoted path starting with message name e.g.
   * 'SecurityList.SecListGrp.NoRelatedSym.SecurityTradingRules'
   * @param path dot denoted path too field set nested from root
   */
  public getSet (path: string): ContainedFieldSet | null {
    const idx = path.indexOf('.')
    let name: string = path
    if (idx > 0) {
      name = path.substring(0, idx)
    } else {
      return this.message.get(name)
    }
    return this.message.get(name)?.getSet(path.substring(idx + 1)) ?? null
  }

  /**
   * add a new defined message into definitions these are high level definitions
   * built from simple, component and group fields
   * @param message to add e.g. Logon definition
   */
  public addMessage (message: MessageDefinition): void {
    const messages = this.message
    messages.addUpdate(message.name, message)
    if (message.msgType && message.msgType !== message.name) {
      messages.addUpdate(message.msgType, message)
    }
    if (message.abbreviation) {
      if (message.abbreviation !== message.name) {
        messages.addUpdate(message.abbreviation, message)
      }
    }
  }

  /**
   * add a new defined component from source definition used by parsers
   * @param field
   */
  public addComponentFieldDef (field: ComponentFieldDefinition): void {
    this.component.addUpdate(field.name, field)
  }

  /**
   * return a simple field definition either from global set or from
   * within a sub category on case of FIXML
   * @param name of the field to fetch
   * @param cat optional category from which field belongs
   */
  public getSimple (name: string, cat?: string | null): SimpleFieldDefinition | null {
    let sf: SimpleFieldDefinition | null = null
    if (cat) {
      const category: CategorySimpleSet | null = this.categorySimple.get(cat)
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
      this.simple.addUpdate(to, simple)
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
    simple.addUpdate(field.num, field)
    simple.addUpdate(field.name, field)
    this.tagToSimple[field.tag] = field
    if (field.abbreviation && field.abbreviation !== field.name) {
      if (!simple.containsKey(field.abbreviation)) {
        simple.addUpdate(field.abbreviation, field)
      }
    }
    if (typeName && typeName !== field.name && field.name && field.type) {
      simple.addUpdate(typeName, field)
    }
  }

  private assignCategory (field: SimpleFieldDefinition): void {
    if (field.baseCategory && field.baseCategoryAbbreviation) {
      let category: CategorySimpleSet | null = this.categorySimple.get(field.baseCategory)
      if (!category) {
        category = new CategorySimpleSet(field.baseCategory)
        this.categorySimple.add(field.baseCategory, category)
      }
      category.simple.addUpdate(field.baseCategoryAbbreviation, field)
    }
  }
}
