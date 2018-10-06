import { INumericKeyed } from '../../collections/collection'
import { Dictionary } from '../../collections/dictionary'
import { ComponentFieldDefinition } from './component-field-definition'
import { MessageDefinition } from './message-definition'
import { SimpleFieldDefinition } from './simple-field-definition'
import { FixDefinitionSource, FixVersion } from '../fix-versions'
import { CategorySimpleSet } from './category-simple-set'
import { ContainedFieldSet } from '../contained/contained-field-set'

export class FixDefinitions {
  public readonly simple: Dictionary<SimpleFieldDefinition> = new Dictionary<SimpleFieldDefinition>()
  public readonly component: Dictionary<ComponentFieldDefinition> = new Dictionary<ComponentFieldDefinition>()
  public readonly message: Dictionary<MessageDefinition> = new Dictionary<MessageDefinition>()
  public readonly tagToSimple: INumericKeyed<SimpleFieldDefinition> = {}
  public readonly categorySimple: Dictionary<CategorySimpleSet> = new Dictionary<CategorySimpleSet>()

  constructor (public readonly source: FixDefinitionSource, public readonly version: FixVersion) {
  }

  public containedSet (type: string): ContainedFieldSet {
    return this.message.get(type) || this.component.get(type)
  }

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

  public addComponentFieldDef (field: ComponentFieldDefinition): void {
    this.component.addUpdate(field.name, field)
  }

  public getSimple (name: string, cat?: string): SimpleFieldDefinition {
    let sf: SimpleFieldDefinition = null
    if (cat) {
      let category: CategorySimpleSet = this.categorySimple.get(cat)
      if (category) {
        sf = category.simple.get(name)
      }
    }
    if (!sf) {
      sf = this.simple.get(name)
    }
    return sf
  }

  public addSimpleAlias (from: string, to: string): void {
    const simple = this.simple.get(from)
    if (simple) {
      this.simple.addUpdate(to, simple)
    }
  }

  public addSimpleFieldDef (field: SimpleFieldDefinition, typeName: string = null): void {
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

  private assignCategory (field: SimpleFieldDefinition) {
    if (field.baseCategory && field.baseCategoryAbbreviation) {
      let category: CategorySimpleSet = this.categorySimple.get(field.baseCategory)
      if (!category) {
        category = new CategorySimpleSet(field.baseCategory)
        this.categorySimple.add(field.baseCategory, category)
      }
      category.simple.addUpdate(field.baseCategoryAbbreviation, field)
    }
  }
}
