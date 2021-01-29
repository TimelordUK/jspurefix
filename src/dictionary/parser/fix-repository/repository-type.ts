import { ILooseObject } from '../../../collections/collection'

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

export interface IRepositoryDataType extends ILooseObject {
  Name: string
  BaseType: string
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
