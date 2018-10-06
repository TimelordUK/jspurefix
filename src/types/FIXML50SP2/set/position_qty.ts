import { INestedParties } from './nested_parties'

export interface IPositionQty {
  PosType?: string// 703
  LongQty?: number// 704
  ShortQty?: number// 705
  CoveredQty?: number// 1654
  PosQtyStatus?: number// 706
  QuantityDate?: Date// 976
  PosQtyUnitOfMeasure?: string// 1836
  PosQtyUnitOfMeasureCurrency?: string// 1835
  NestedParties?: INestedParties[]
}
