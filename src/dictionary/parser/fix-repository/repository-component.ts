import { ILooseObject } from '../../../collections/collection'

export interface IRepositoryComponent extends ILooseObject {
  ComponentID: string
  ComponentType: string
  CategoryID: string
  Name: string
  AbbrName: string
  NotReqXML: string
  Description: string
}
