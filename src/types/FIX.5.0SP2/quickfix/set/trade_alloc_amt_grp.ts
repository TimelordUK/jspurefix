import { ITradeAllocAmtGrpNoTradeAllocAmts } from './trade_alloc_amt_grp_no_trade_alloc_amts'

export interface ITradeAllocAmtGrp {
  NoTradeAllocAmts?: ITradeAllocAmtGrpNoTradeAllocAmts[]// [1] TradeAllocAmtType.1845, TradeAllocAmt.1846 .. TradeAllocAmtReason.1850
}
