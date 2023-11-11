export interface ITradePositionQtyNoPositions {
  PosType?: string// [1] 703 (String)
  LongQty?: number// [2] 704 (Float)
  ShortQty?: number// [3] 705 (Float)
  CoveredQty?: number// [4] 1654 (Float)
  PosQtyStatus?: number// [5] 706 (Int)
  QuantityDate?: Date// [6] 976 (LocalDate)
}
