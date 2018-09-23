import { INestedParties } from './nested_parties'

export interface IPositionQty {
  UnderlyingReturnRateValuationDateType?: number// 43073
  LongQty?: number// 704
  ShortQty?: number// 705
  CoveredQty?: number// 1654
  MDStatisticStatus?: number// 2477
  QuantityDate?: Date// 976
  UnderlyingStreamCommodityUnitOfMeasure?: string// 41971
  AllocCommissionUnitOfMeasureCurrency?: string// 2659
  NestedParties?: INestedParties[]
}
