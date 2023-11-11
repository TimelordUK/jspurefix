import { INestedParties } from './nested_parties'

export interface IPositionQtyNoPositions {
  PosType?: string// [1] 703 (String)
  LongQty?: number// [2] 704 (Float)
  ShortQty?: number// [3] 705 (Float)
  CoveredQty?: number// [4] 1654 (Float)
  PosQtyStatus?: number// [5] 706 (Int)
  QuantityDate?: Date// [6] 976 (LocalDate)
  PosQtyUnitOfMeasure?: string// [7] 1836 (String)
  PosQtyUnitOfMeasureCurrency?: string// [8] 1835 (String)
  PosQtyUnitOfMeasureCurrencyCodeSource?: string// [9] 2936 (String)
  NestedParties?: INestedParties// [10] NoNestedPartyIDs.539, NestedPartyID.524 .. NestedPartySubIDType.805
}
