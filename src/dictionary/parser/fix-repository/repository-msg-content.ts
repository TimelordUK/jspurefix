import { ILooseObject } from '../../../collections/collection'

export interface IRepositoryMsgContent extends ILooseObject {
  ComponentID: string
  TagText: string
  Indent: string
  Position: string
  Reqd: string
  Description: string
}
