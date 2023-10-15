import { Dictionary } from '../../../collections'
import { XsdParser } from './xsd-parser'
import {
  ComponentFieldDefinition, SimpleFieldDefinition,
  GroupFieldDefinition, FixDefinitions, MessageDefinition
} from '../../definition'
import {
  ContainedSimpleField, ContainedComponentField,
  ContainedFieldSet, ContainedGroupField
} from '../../contained'
import { ISaxNode } from '../../sax-node'

interface IElement {
  ref: string
  name: string
  type: string
  minOccurs: string
  maxOccurs: string
  substitutionGroup: string
}

interface IAttribute {
  name: string
  type: string
  use: string
}

interface IAttributeGroup {
  name: string
  attributes: IAttribute[]
}

interface IGroup {
  name: string
  elements: IElement[]
}

interface IAppInfo {
  Protocol: string
  MsgID: string
  name: string
  ComponentType: string
  Category: string
}

/*
      <xs:complexContent>
         <xs:extension base="BaseHeader_t">
            <xs:sequence>
               <xs:group ref="BatchHeaderElements"/>
            </xs:sequence>
            <xs:attributeGroup ref="BatchHeaderAttributes"/>
         </xs:extension>
      </xs:complexContent>
 */

interface IAnnotation {
  documentation: string
}

interface IComplexType {
  annotation: IAnnotation
  extensionBase: string // where a reference to base class
  element: IElement[]
  messageName: string
  name: string
  appInfo: IAppInfo
  group: string
  attributeGroup: string
}

export class ComponentsParser extends XsdParser {
  private readonly attributeGroups: Dictionary<IAttributeGroup> = new Dictionary<IAttributeGroup>()
  private readonly groups: Dictionary<IGroup> = new Dictionary<IGroup>()
  private readonly unboundElements: IElement[] = []
  private readonly complexTypes: Dictionary<IComplexType> = new Dictionary<IComplexType>()

  private newComplexTypes: IComplexType[]
  private currentGroup: IGroup | null
  private readonly currentAttributeGroupStack: IAttributeGroup[] = []
  private currentComplexType: IComplexType | null
  private previousComplexType: IComplexType

  public constructor (public readonly definitions: FixDefinitions) {
    super(definitions)
  }

  private static getName (group: IGroup, attributeGroup: IAttributeGroup, type: IComplexType): string {
    let name: string
    if (type?.appInfo) {
      name = type.appInfo.name
    } else if (group) {
      name = group.name
    } else if (attributeGroup) {
      name = attributeGroup.name
    } else {
      name = type.name
    }
    return name
  }

  public value (line: number, n: string, v: string): void {
    // do nothing
    switch (n) {
      case 'xs:documentation': {
        if (this.currentComplexType?.annotation) {
          this.currentComplexType.annotation.documentation = v
        }
        break
      }
    }
    this.pending = null
  }

  public close (line: number, node: string): void {
    switch (node) {
      case 'xs:complexType': {
        if (this.currentComplexType != null) {
          const complex: IComplexType = this.currentComplexType
          this.previousComplexType = complex
          this.complexTypes.addUpdate(complex.name, complex)
          this.newComplexTypes.push(complex)
          this.currentComplexType = null
        }
        break
      }

      case 'xs:group': {
        if (this.currentGroup) {
          this.groups.addUpdate(this.currentGroup.name, this.currentGroup)
          this.currentGroup = null
        }
        break
      }

      case 'xs:attributeGroup': {
        const attributeStack = this.currentAttributeGroupStack
        if (attributeStack.length > 0) {
          const group: IAttributeGroup | null = attributeStack.pop() ?? null
          if (group) {
            this.attributeGroups.addUpdate(group.name, group)
          }
        }
        break
      }

      case 'xs:schema': {
        this.insertFields()
        break
      }
    }
  }

  public open (line: number, node: ISaxNode): void {
    switch (node.name) {
      case 'xs:schema': {
        this.newComplexTypes = []
        break
      }

      case 'xs:group': {
        this.xsGroup(node)
        break
      }

      case 'xs:attributeGroup': {
        this.xsAttributeGroup(node)
        break
      }

      case 'xs:element': {
        this.xsElement(node)
        break
      }

      case 'xs:appinfo': {
        const ct = this.currentComplexType
        if (ct) {
          ct.appInfo = {} as IAppInfo
        }
        break
      }

      case 'xs:attribute': {
        this.xsAttribute(node)
        break
      }

      case 'xs:complexType': {
        const unbound = this.unboundElements
        this.currentComplexType = {
          name: node.attributes.name || unbound[unbound.length - 1].name
        } as IComplexType
        break
      }

      case 'xs:extension': {
        const current = this.currentComplexType
        if (current && node.attributes.base) {
          current.extensionBase = node.attributes.base
        }
        break
      }

      case 'fm:Xref': {
        this.assign(node, this.currentComplexType?.appInfo)
        break
      }

      case 'xs:annotation': {
        if (this.currentComplexType) {
          this.currentComplexType.annotation = {} as IAnnotation
        }
        break
      }

      case 'xs:documentation': {
        if (this.currentComplexType) {
          this.pending = node.name
        }
        break
      }
    }
  }

  private xsAttribute (node: ISaxNode): void {
    const attribute: IAttribute = {} as IAttribute
    this.assign(node, attribute)
    const stack = this.currentAttributeGroupStack
    if (stack.length > 0) {
      const peek = stack[stack.length - 1]
      const groupAttributes: IAttribute[] = peek.attributes
      groupAttributes[groupAttributes.length] = attribute
    }
  }

  private xsGroup (node: ISaxNode): void {
    if (node.attributes.name) {
      this.currentGroup = {
        name: node.attributes.name,
        elements: [] as IElement[]
      } as IGroup
    } else if (node.attributes.ref) {
      if (this.currentComplexType) {
        this.currentComplexType.group = node.attributes.ref
      } else if (this.currentGroup) {
        // this is part of a sequence for a group
        const elements = this.currentGroup.elements
        elements[elements.length] = {
          type: node.name,
          name: node.attributes.ref
        } as IElement
      }
    }
  }

  private xsAttributeGroup (node: ISaxNode): void {
    const attributeStack = this.currentAttributeGroupStack
    if (node.attributes.name) {
      attributeStack.push({
        name: node.attributes.name,
        attributes: [] as IAttribute[]
      } as IAttributeGroup)
    } else if (node.attributes.ref) {
      if (this.currentComplexType) {
        this.currentComplexType.attributeGroup = node.attributes.ref
      } else if (attributeStack.length > 0) {
        const peek: IAttributeGroup = attributeStack[attributeStack.length - 1]
        peek.attributes[peek.attributes.length] = {
          type: node.name,
          name: node.attributes.ref
        } as IAttribute
      }
    }
  }

  private xsElement (node: ISaxNode): void {
    const element: IElement = {} as IElement
    this.assign(node, element)
    const currentComplex = this.currentComplexType
    const currentGroup = this.currentGroup
    if (!currentGroup && currentComplex) {
      if (!currentComplex.element) {
        currentComplex.element = []
      }
      const elements: IElement[] = currentComplex.element
      elements[elements.length] = element
    } else if (currentGroup) {
      const elements = currentGroup.elements
      elements[elements.length] = element
    } else {
      if (element.substitutionGroup && this.previousComplexType) {
        this.previousComplexType.messageName = element.name
      } else {
        this.unboundElements.push(element)
      }
    }
  }

  private addElement (set: ContainedFieldSet, element: IElement): void {
    const minOccurs: number = parseInt(element.minOccurs, 10)
    const isGroup: boolean = element.maxOccurs === 'unbounded'
    const isComponent: boolean = element.maxOccurs === '1' || !isGroup
    const key = element.type || element.ref || element.name
    const containedType: IComplexType | null = this.complexTypes.get(key)
    if (containedType) {
      if (isComponent) {
        const containedDefinition: ComponentFieldDefinition = this.getComponent(containedType)
        const containedField: ContainedComponentField =
          new ContainedComponentField(containedDefinition,
            set.fields.length,
            minOccurs > 0,
            element.name)
        set.add(containedField)
      } else if (isGroup) {
        const containedDefinition: GroupFieldDefinition = this.getGroup(containedType)
        const containedField: ContainedGroupField =
          new ContainedGroupField(containedDefinition,
            set.fields.length,
            minOccurs > 0,
            element.name)
        set.add(containedField)
      }
    } else {
      if (key !== 'Message') {
        throw new Error(`cannot resolve component ${key} contained in ${set.name}`)
      }
    }
  }

  private addElements (set: ContainedFieldSet, elements: IElement[]): void {
    if (elements) {
      elements.forEach((element: IElement) => {
        switch (element.type) {
          case 'xs:group': {
            const groupElements: IGroup | null = this.groups.get(element.name)
            if (groupElements) {
              this.addElements(set, groupElements.elements)
            } else {
              throw new Error(`unable to get xs:group ${element.name}`)
            }
            break
          }

          default: {
            this.addElement(set, element)
          }
        }
      })
    }
  }

  private addSimpleAttribute (set: ContainedFieldSet, attribute: IAttribute): void {
    let sf: SimpleFieldDefinition | null = this.definitions.getSimple(attribute.type)
    if (!sf) {
      sf = this.definitions.getSimple(attribute.name, set.category)
    }
    if (sf) {
      const contained: ContainedSimpleField = new ContainedSimpleField(sf,
        set.fields.length,
        attribute.use !== 'optional',
        true,
        attribute.name)
      set.add(contained)
    } else if (set.name !== 'FixmlAttributes') {
      throw new Error(`unable to resolve simple attribute ${attribute.name}`)
    }
  }

  private addAttributes (set: ContainedFieldSet, attributes: IAttribute[]): void {
    attributes.forEach((attribute: IAttribute) => {
      switch (attribute.type) {
        case 'xs:attributeGroup': {
          const attributeGroup: IAttributeGroup | null = this.attributeGroups.get(attribute.name)
          if (attributeGroup) {
            this.addAttributes(set, attributeGroup.attributes)
          } else {
            throw new Error(`unable to get xs:attributeGroup ${attribute.name}`)
          }
          break
        }

        default: {
          this.addSimpleAttribute(set, attribute)
        }
      }
    })
  }

  private getGroup (type: IComplexType): GroupFieldDefinition {
    const group: IGroup | null = this.groups.get(type.group)
    const attributeGroup: IAttributeGroup | null = this.attributeGroups.get(type.attributeGroup)
    const name: string = group && attributeGroup ? ComponentsParser.getName(group, attributeGroup, type) : ''
    const category: string | null = type.appInfo != null ? type.appInfo.Category : null
    const groupDefinition: GroupFieldDefinition = new GroupFieldDefinition(name, name, category, null, null)
    this.populateSet(type, groupDefinition)
    return groupDefinition
  }

  private getComponent (type: IComplexType): ComponentFieldDefinition {
    const definitions = this.definitions
    const group: IGroup | null = this.groups.get(type.group)
    const attributeGroup: IAttributeGroup | null = this.attributeGroups.get(type.attributeGroup)
    let name: string = group && attributeGroup ? ComponentsParser.getName(group, attributeGroup, type) : ''
    const cached: ComponentFieldDefinition | null = definitions.component.get(name)
    if (cached) {
      return cached
    }

    const category: string | null = type.appInfo != null ? type.appInfo.Category : null
    if (type.extensionBase) {
      const base = this.complexTypes.get(type.extensionBase)
      if (base) {
        name = base.appInfo.name
      }
    }
    const component: ComponentFieldDefinition = new ComponentFieldDefinition(name, name, category, null)
    this.populateSet(type, component)
    definitions.component.addUpdate(component.name, component)
    definitions.component.addUpdate(type.name, component)
    return component
  }

  private getMessage (type: IComplexType): MessageDefinition {
    const definitions = this.definitions
    const messages = definitions.message
    const name: string = type.appInfo.name
    const message: MessageDefinition = new MessageDefinition(name,
      type.messageName,
      type.appInfo.MsgID,
      type.appInfo.Category,
      type.annotation.documentation)
    const abstractMessage: ComponentFieldDefinition | null = definitions.component.get('Message')
    abstractMessage?.fields.forEach((f) => {
      message.add(f)
    })
    this.populateSet(type, message)
    messages.addUpdate(message.name, message)
    if (type.messageName && type.messageName !== name) {
      messages.addUpdate(type.messageName, message)
    }

    return message
  }

  private getBaseAttributes (type: IComplexType): IAttributeGroup | null {
    const attributeGroups = this.attributeGroups
    let baseGroup: IAttributeGroup | null = null
    if (type.extensionBase) {
      const base = this.complexTypes.get(type.extensionBase)
      if (base) {
        baseGroup = attributeGroups.get(base.attributeGroup)
      }
      return baseGroup
    }
    return null
  }

  private populateSet (type: IComplexType, set: ContainedFieldSet): void {
    const group: IGroup | null = this.groups.get(type.group)
    const elements: IElement[] = group ? group.elements : type.element
    const attributeGroups = this.attributeGroups
    const attributeGroup: IAttributeGroup | null = attributeGroups.get(type.attributeGroup)
    const baseGroup: IAttributeGroup | null = this.getBaseAttributes(type)
    // if a base is specified add the attributes from there
    if (baseGroup) {
      this.addAttributes(set, baseGroup.attributes)
    }
    if (attributeGroup) {
      this.addAttributes(set, attributeGroup.attributes)
    }
    this.addElements(set, elements)
  }

  private constructType (type: IComplexType): void {
    const componentType: string = type.appInfo != null ? type.appInfo.ComponentType : 'Block'
    switch (componentType) {
      case 'Message': {
        const message: MessageDefinition = this.getMessage(type)
        if (!message) {
          throw new Error(`cannot resolve ${type.name}`)
        }
        break
      }

      // these may be included from top level messages and added into definitions
      case 'Block': {
        const component: ComponentFieldDefinition = this.getComponent(type)
        if (!component) {
          throw new Error(`cannot resolve ${type.name}`)
        }
        break
      }

      case 'ImplicitBlock':
      case 'XMLDataBlock':
      case 'BlockRepeating':
      case 'ImplicitBlockRepeating': {
        break
      }

      default:
        throw new Error(`unknown type ${componentType}`)
    }
  }

  private insertFields (): void {
    this.newComplexTypes.forEach((type: IComplexType) => {
      this.constructType(type)
    })
    this.unboundElements.forEach((e: IElement) => {
      const definitions = this.definitions
      const component = definitions.component.get(e.type)
      if (component) {
        definitions.component.addUpdate(e.name, component)
      }
    })
  }
}
