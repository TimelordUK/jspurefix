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
