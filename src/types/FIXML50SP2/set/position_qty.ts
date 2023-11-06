import { INestedParties } from './nested_parties'

export interface IPositionQty {
  PosType?: string// [1] 703 (String)
  LongQty?: number// [1] 704 (Float)
  ShortQty?: number// [1] 705 (Float)
  CoveredQty?: number// [1] 1654 (Float)
  PosQtyStatus?: number// [1] 706 (Int)
  QuantityDate?: Date// [1] 976 (LocalDate)
  PosQtyUnitOfMeasure?: string// [1] 1836 (String)
  PosQtyUnitOfMeasureCurrency?: string// [1] 1835 (String)
  NestedParties?: INestedParties[]// [1] ID.524, Src.525 .. Qual.2384
}
