export interface ITradePositionQty {
  PosType?: string// [1] 703 (String)
  LongQty?: number// [1] 704 (Float)
  ShortQty?: number// [1] 705 (Float)
  CoveredQty?: number// [1] 1654 (Float)
  PosQtyStatus?: number// [1] 706 (Int)
  QuantityDate?: Date// [1] 976 (LocalDate)
}
