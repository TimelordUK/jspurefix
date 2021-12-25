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
