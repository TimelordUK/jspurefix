import { IStandardHeader } from './standard_header'
import { ILooseObject } from '../../../collections/collection'

export interface IBatch extends ILooseObject {
  StandardHeader: IStandardHeader
  Batch: ILooseObject[]
}
