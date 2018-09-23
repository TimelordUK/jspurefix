import { ILooseObject } from '../../../collections/collection'
import { FixDefinitions } from '../../definition/fix-definitions'
import { SimpleFieldDefinition } from '../../definition/simple-field-definition'
import { Dictionary } from '../../../collections/dictionary'
import { GroupFieldDefinition } from '../../definition/group-field-definition'
import { ComponentFieldDefinition } from '../../definition/component-field-definition'
import { ContainedSimpleField } from '../../contained/contained-simple-field'
import { ContainedFieldSet } from '../../contained/contained-field-set'
import { ContainedComponentField } from '../../contained/contained-component-field'
import { ContainedSetType } from '../../dict-primitive'
import { ContainedGroupField } from '../../contained/contained-group-field'
import { MessageDefinition } from '../../definition/message-definition'
import { FixDefinitionSource, FixVersion } from '../../fix-versions'
import { GetJsFixLogger, IJsFixLogger } from '../../../config/js-fix-logger'

export interface IRepositoryField extends ILooseObject {
  Tag: string
  Name: string
  Type: string
  Description: string
  AbbrName: string
  NotReqXML: string
  BaseCategory: string
  BaseCategoryAbbrName: string
}

export interface IRepositoryEnum extends ILooseObject {
  Tag: string
  Value: string
  SymbolicName: string
  Description: string
}

export interface IRepositoryComponent extends ILooseObject {
  ComponentID: string
  ComponentType: string
  CategoryID: string
  Name: string
  AbbrName: string
  NotReqXML: string
  Description: string
}

export interface IRepositoryMessage extends ILooseObject {
  ComponentID: string
  MsgType: string
  Name: string
  CategoryID: string
  SectionID: string
  AbbrName: string
  NotReqXML: string
  Description: string
}

export interface IRepositoryMsgContent extends ILooseObject {
  ComponentID: string
  TagText: string
  Indent: string
  Position: string
  Reqd: string
  Description: string
}

export interface IRepositoryAbbreviation extends ILooseObject {
  Term: string
  AbbrTerm: string
}

export class Repository {
  public Enums: IRepositoryEnum[]
  public Fields: IRepositoryField[]
  public Components: IRepositoryComponent[]
  public Messages: IRepositoryMessage[]
  public MsgContents: IRepositoryMsgContent[]
  public Abbreviations: IRepositoryAbbreviation[]
  public includesAbbreviations: boolean
    // derived from above
  public readonly definitions: FixDefinitions
  private readonly groupLookup: Dictionary<GroupFieldDefinition> = new Dictionary<GroupFieldDefinition>()
  private contentLookup: Dictionary<IRepositoryMsgContent[]>
  private componentLookup: Dictionary<IRepositoryComponent>
  private readonly logger: IJsFixLogger

  constructor (public readonly version: FixVersion, public readonly getLogger: GetJsFixLogger) {
    this.logger = getLogger('Repository')
    switch (version) {
      case FixVersion.FIX44:
      case FixVersion.FIX50:
      case FixVersion.FIX50SP1:
      case FixVersion.FIX50SP2:
        this.includesAbbreviations = true
        break

      default: {
        this.includesAbbreviations = false
        break
      }
    }
    this.definitions = new FixDefinitions(FixDefinitionSource.FixRepo, version)
  }

  public assign (name: string, data: ILooseObject[]): void {
    switch (name) {
      case 'Fields': {
        this.Fields = data as IRepositoryField[]
        break
      }

      case 'Enums': {
        this.Enums = data as IRepositoryEnum[]
        break
      }

      case 'Components': {
        this.Components = data as IRepositoryComponent[]
        break
      }

      case 'Messages': {
        this.Messages = data as IRepositoryMessage[]
        break
      }

      case 'MsgContents': {
        this.MsgContents = data as IRepositoryMsgContent[]
        if (!this.includesAbbreviations) {
          this.toDefinitions()
        }
        break
      }

      case 'Abbreviations': {
        this.Abbreviations = data as IRepositoryAbbreviation[]
        this.toDefinitions()
        break
      }
    }
  }

  private summarise (): void {
    const logger = this.logger
    logger.info(`definitions: ${this.definitions.simple.count()} fields`)
    logger.info(`definitions: ${this.definitions.component.count()} components`)
    logger.info(`definitions: ${this.definitions.message.count()} messages`)
  }

  private toDefinitions (): void {
    this.fields()
    this.complex()
    this.header()
    this.trailer()
    this.summarise()
  }

  private complex (): void {
    this.contentLookup = this.contents()
    this.componentLookup = this.components()
    this.Components.forEach((c: IRepositoryComponent) => this.resolve(c))
    this.Messages.forEach((m: IRepositoryMessage) => {
      const msg = this.message(m)
      this.logger.debug(`${msg.toString()}`)
      this.definitions.addMessage(msg)
    })
  }

  private header (): void {
    const h: ComponentFieldDefinition = this.definitions.component.get('StandardHeader')
    this.definitions.component.add('header', h)
  }

  private trailer (): void {
    const t: ComponentFieldDefinition = this.definitions.component.get('StandardTrailer')
    this.definitions.component.add('trailer', t)
  }

  private fields (): void {
    const definitions = this.definitions
    this.Fields.forEach((f: IRepositoryField) => {
      definitions.addSimpleFieldDef(new SimpleFieldDefinition(
                f.Tag,
                f.Name,
                f.AbbrName ? f.AbbrName : f.Name,
                f.BaseCategory,
                f.BaseCategoryAbbrName,
                f.Type.toUpperCase(),
                f.Description))
    })

    for (const e of this.Enums) {
      const field: SimpleFieldDefinition =
                definitions.tagToSimple[parseInt(e.Tag, 10)]
      if (field == null) {
        continue
      }
      if (e.Value && e.SymbolicName) {
        field.addEnum(e.Value, e.SymbolicName, e.Description)
      }
    }
  }

  private contents (): Dictionary<IRepositoryMsgContent[]> {
    return this.MsgContents.reduce((a, current) => {
      let content: IRepositoryMsgContent[] = a.get(current.ComponentID)
      if (!content) {
        content = []
        a.add(current.ComponentID, content)
      }
      content[content.length] = current
      return a
    }, new Dictionary<IRepositoryMsgContent[]>())
  }

  private resolveToFieldSet (content: IRepositoryMsgContent[], parentSet: ContainedFieldSet): void {
    content.forEach((current: IRepositoryMsgContent) => {
      const required: boolean = current.Reqd === '1'
      const tag: number = parseInt(current.TagText, 10)
      if (!isNaN(tag)) {
        const sf: SimpleFieldDefinition = this.definitions.tagToSimple[tag]
        if (sf) {
          parentSet.add(new ContainedSimpleField(sf, parentSet.fields.length, required, false))
        }
      } else {
                // is there a definition for this type yet create.
        let childSet: ContainedFieldSet = this.definitions.component.get(current.TagText)
        if (!childSet) {
          const cl: IRepositoryComponent = this.componentLookup.get(current.TagText)
          if (cl) {
            childSet = this.resolve(cl)
          }
        }
        switch (childSet.type) {
          case ContainedSetType.Component: {
            parentSet.add(new ContainedComponentField(childSet, parentSet.fields.length, required))
            break
          }

          case ContainedSetType.Group: {
            parentSet.add(new ContainedGroupField(childSet as GroupFieldDefinition, parentSet.fields.length, required))
            break
          }

          default: {
            throw new Error(`unknown set type ${childSet.type}`)
          }
        }
      }
      return parentSet
    })
  }

  private resolve (c: IRepositoryComponent): ContainedFieldSet {
    switch (c.ComponentType) {
      case 'ImplicitBlockRepeating':
      case 'BlockRepeating': {
        const content: IRepositoryMsgContent[] = this.contentLookup.get(c.ComponentID)
        const noField: SimpleFieldDefinition = this.definitions.tagToSimple[parseInt(content[0].TagText, 10)]
        let def: GroupFieldDefinition = this.groupLookup.get(c.ComponentID)
        if (!def) {
          def = new GroupFieldDefinition(c.Name, c.AbbrName, c.CategoryID, noField, c.Description)
          this.resolveToFieldSet(content.slice(1), def)
          this.groupLookup.add(c.ComponentID, def)
        }
        return def
      }

      default: {
        const content: IRepositoryMsgContent[] = this.contentLookup.get(c.ComponentID)
        let def: ComponentFieldDefinition = this.definitions.component.get(c.Name)
        if (!def) {
          def = new ComponentFieldDefinition(c.Name, c.AbbrName, c.CategoryID, c.Description)
          this.resolveToFieldSet(content, def)
          this.definitions.addComponentFieldDef(def)
        }
        return def
      }
    }
  }

  private message (m: IRepositoryMessage): MessageDefinition {
    const definitions = this.definitions
    const content: IRepositoryMsgContent[] = this.contentLookup.get(m.ComponentID)
    let def: MessageDefinition = definitions.message.get(m.Name)
    if (!def) {
      def = new MessageDefinition(m.Name, m.AbbrName, m.MsgType, m.CategoryID, m.Description)
      this.resolveToFieldSet(content, def)
      definitions.addComponentFieldDef(def)
    }
    return def
  }

  private components (): Dictionary<IRepositoryComponent> {
    return this.Components.reduce((a: Dictionary<IRepositoryComponent>, current: IRepositoryComponent) => {
      a.add(current.Name, current)
      a.add(current.ComponentID, current)
      return a
    }, new Dictionary<IRepositoryComponent>())
  }
}
