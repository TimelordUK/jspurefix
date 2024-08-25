import { ILooseObject } from '../../../collections/collection'
import {
  SimpleFieldDefinition, GroupFieldDefinition, ComponentFieldDefinition,
  MessageDefinition, FixDefinitions
} from '../../definition'

import {
  IContainedSet,
  ContainedComponentField,
  ContainedGroupField,
  ContainedSimpleField,
  ContainedSetBuilder
} from '../../contained'
import { FixVersion } from '../../fix-versions'
import { GetJsFixLogger, IJsFixLogger } from '../../../config'
import { FixDefinitionSource } from '../../fix-definition-source'
import { ContainedSetType } from '../../contained-set-type'
import { IRepositoryMessage } from './repository-message'
import { IRepositoryEnum } from './repository-enum'
import { IRepositoryDataType } from './repository-data-type'
import { IRepositoryComponent } from './repository-component'
import { IRepositoryField } from './repository-field'
import { IRepositoryAbbreviation } from './repository-abbreviation'
import { IRepositoryMsgContent } from './repository-msg-content'

export class Repository {
  public Enums: IRepositoryEnum[]
  public Fields: IRepositoryField[]
  public DataTypes: IRepositoryDataType[]
  public Components: IRepositoryComponent[]
  public Messages: IRepositoryMessage[]
  public MsgContents: IRepositoryMsgContent[]
  public Abbreviations: IRepositoryAbbreviation[]
  public includesAbbreviations: boolean
  // derived from above
  public readonly definitions: FixDefinitions
  private readonly groupLookup: Map<string, GroupFieldDefinition> = new Map<string, GroupFieldDefinition>()
  private contentLookup: Map<string, IRepositoryMsgContent[]>
  private componentLookup: Map<string, IRepositoryComponent>
  private dataTypeLookup: Map<string, IRepositoryDataType>
  private readonly logger: IJsFixLogger

  constructor (public readonly version: FixVersion, public readonly getLogger: GetJsFixLogger) {
    this.logger = getLogger('Repository')
    this.includesAbbreviations = Repository.doesIncludeAbbreviations(version)
    this.definitions = new FixDefinitions(FixDefinitionSource.FixRepo, version)
  }

  private static doesIncludeAbbreviations (version: FixVersion): boolean {
    let includesAbbreviations: boolean
    switch (version) {
      case FixVersion.FIX44:
      case FixVersion.FIX50:
      case FixVersion.FIX50SP1:
      case FixVersion.FIX50SP2:
        includesAbbreviations = true
        break

      default: {
        includesAbbreviations = false
        break
      }
    }
    return includesAbbreviations
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

      case 'Datatypes': {
        this.DataTypes = data as IRepositoryDataType[]
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
    const definitions = this.definitions
    logger.info(`definitions: ${definitions.simple.size} fields`)
    logger.info(`definitions: ${definitions.component.size} components`)
    logger.info(`definitions: ${definitions.message.size} messages`)
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
    const h: ComponentFieldDefinition | undefined = this.definitions.component.get('StandardHeader')
    if (h) {
      this.definitions.component.set('header', h)
    }
  }

  private trailer (): void {
    const t: ComponentFieldDefinition | undefined = this.definitions.component.get('StandardTrailer')
    if (t) {
      this.definitions.component.set('trailer', t)
    }
  }

  private static isNative (f: IRepositoryField): boolean {
    return f.Type === 'Boolean' ||
      f.Type === 'data' ||
      f.Type === 'LocalMktDate' ||
      f.Type === 'UTCDateOnly' ||
      f.Type === 'UTCTimestamp'
  }

  private static makeSimple (f: IRepositoryField, type: string): SimpleFieldDefinition {
    return new SimpleFieldDefinition(
      f.Tag,
      f.Name,
      f.AbbrName ? f.AbbrName : f.Name,
      f.BaseCategory,
      f.BaseCategoryAbbrName,
      type.toUpperCase(),
      f.Description)
  }

  private getType (f: IRepositoryField): string {
    const types = this.dataTypeLookup
    const nativeType = Repository.isNative(f)
    let type = f.Type
    const mapped = !nativeType && types.get(type)
    if (f.Type !== 'Length' && mapped) {
      type = mapped.BaseType ?? type
    }
    return type
  }

  private fieldEnums (): void {
    const definitions = this.definitions
    for (const e of this.Enums) {
      const field: SimpleFieldDefinition = definitions.tagToSimple[parseInt(e.Tag, 10)]
      if (field == null) {
        continue
      }
      if (e.Value && e.SymbolicName) {
        field.addEnum(e.Value, e.SymbolicName, e.Description)
      }
    }
  }

  private fields (): void {
    this.dataTypeLookup = this.types()
    const definitions = this.definitions
    const types = this.dataTypeLookup
    types.delete('boolean')
    types.delete('data')
    this.Fields.forEach((f: IRepositoryField) => {
      const type = this.getType(f)
      definitions.addSimpleFieldDef(Repository.makeSimple(f, type))
    })
    this.fieldEnums()
  }

  private contents (): Map<string, IRepositoryMsgContent[]> {
    return this.MsgContents.reduce((a, current) => {
      let content: IRepositoryMsgContent[] | undefined = a.get(current.ComponentID)
      if (!content) {
        content = []
        a.set(current.ComponentID, content)
      }
      content[content.length] = current
      return a
    }, new Map<string, IRepositoryMsgContent[]>())
  }

  private resolveToFieldSet (content: IRepositoryMsgContent[], parentSet: IContainedSet): void {
    const builder = new ContainedSetBuilder(parentSet)
    content.forEach((current: IRepositoryMsgContent) => {
      const required: boolean = current.Reqd === '1'
      const tag: number = parseInt(current.TagText, 10)
      if (!isNaN(tag)) {
        const sf: SimpleFieldDefinition = this.definitions.tagToSimple[tag]
        if (sf) {
          builder.add(new ContainedSimpleField(sf, parentSet.fields.length, required, false))
        }
      } else {
        // is there a definition for this type yet create.
        let childSet: IContainedSet | undefined = this.definitions.component.get(current.TagText)
        if (!childSet) {
          const cl: IRepositoryComponent | undefined = this.componentLookup.get(current.TagText)
          if (cl) {
            childSet = this.resolve(cl)
          }
        }
        if (childSet) {
          switch (childSet.type) {
            case ContainedSetType.Component: {
              builder.add(new ContainedComponentField(childSet as ComponentFieldDefinition, parentSet.fields.length, required))
              break
            }

            case ContainedSetType.Group: {
              builder.add(new ContainedGroupField(childSet as GroupFieldDefinition, parentSet.fields.length, required))
              break
            }

            default: {
              throw new Error(`unknown set type ${childSet.type}`)
            }
          }
        }
      }
      return parentSet
    })
  }

  private resolve (c: IRepositoryComponent): IContainedSet {
    switch (c.ComponentType) {
      case 'ImplicitBlockRepeating':
      case 'BlockRepeating': {
        const content: IRepositoryMsgContent[] | undefined = this.contentLookup.get(c.ComponentID) ?? []
        const noField: SimpleFieldDefinition = this.definitions.tagToSimple[parseInt(content[0].TagText, 10)]
        let def: GroupFieldDefinition | undefined = this.groupLookup.get(c.ComponentID)
        if (!def) {
          def = new GroupFieldDefinition(c.Name, c.AbbrName, c.CategoryID, noField, c.Description)
          this.resolveToFieldSet(content.slice(1), def)
          this.groupLookup.set(c.ComponentID, def)
        }
        return def
      }

      default: {
        const content: IRepositoryMsgContent[] | null = this.contentLookup.get(c.ComponentID) ?? []
        let def: ComponentFieldDefinition | undefined = this.definitions.component.get(c.Name)
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
    const content: IRepositoryMsgContent[] = this.contentLookup.get(m.ComponentID) ?? []
    let def: MessageDefinition | undefined = definitions.message.get(m.Name)
    if (!def) {
      def = new MessageDefinition(m.Name, m.AbbrName, m.MsgType, m.CategoryID, m.Description)
      this.resolveToFieldSet(content, def)
      definitions.addComponentFieldDef(def)
    }
    return def
  }

  private components (): Map<string, IRepositoryComponent> {
    return this.Components.reduce((a: Map<string, IRepositoryComponent>, current: IRepositoryComponent) => {
      a.set(current.Name, current)
      a.set(current.ComponentID, current)
      return a
    }, new Map<string, IRepositoryComponent>())
  }

  private types (): Map<string, IRepositoryDataType> {
    return this.DataTypes.reduce((a: Map<string, IRepositoryDataType>, current: IRepositoryDataType) => {
      a.set(current.Name, current)
      return a
    }, new Map<string, IRepositoryDataType>())
  }
}
