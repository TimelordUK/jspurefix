import { ILooseObject } from '../../../collections/collection'

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
