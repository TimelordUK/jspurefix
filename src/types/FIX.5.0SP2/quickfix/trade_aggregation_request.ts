import { IStandardHeader } from './set/standard_header'
import { IOrderAggregationGrp } from './set/order_aggregation_grp'
import { IExecutionAggregationGrp } from './set/execution_aggregation_grp'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradeAggregationRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeAggregationRequestID: string// [2] 2786 (String)
  TradeAggregationRequestRefID?: string// [3] 2787 (String)
  TradeAggregationTransType: number// [4] 2788 (Int)
  AggregatedQty?: number// [5] 2789 (Float)
  Currency?: string// [6] 15 (String)
  CurrencyCodeSource?: string// [7] 2897 (String)
  AvgPx?: number// [8] 6 (Float)
  Side: string// [9] 54 (String)
  PricePrecision?: number// [10] 2349 (Int)
  OrderAggregationGrp?: IOrderAggregationGrp// [11] NoOrders.73, ClOrdID.11 .. OrderAvgPx.799
  ExecutionAggregationGrp?: IExecutionAggregationGrp// [12] NoExecs.124, LastQty.32 .. LastPx.31
  Account?: string// [13] 1 (String)
  Instrument?: IInstrument// [14] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Parties?: IParties// [15] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  StandardTrailer: IStandardTrailer// [16] SignatureLength.93, Signature.89, CheckSum.10
}
