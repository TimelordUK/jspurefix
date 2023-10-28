import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IAllocAckGrp } from './set/alloc_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationReportAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocReportID: string// [2] 755 (String)
  AllocID?: string// [3] 70 (String)
  AllocRequestID?: string// [4] 2758 (String)
  ClearingBusinessDate?: Date// [5] 715 (LocalDate)
  AvgPxIndicator?: number// [6] 819 (Int)
  Quantity?: number// [7] 53 (Float)
  AllocTransType?: string// [8] 71 (String)
  Instrument?: IInstrument// [9] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Parties?: IParties// [10] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  SecondaryAllocID?: string// [11] 793 (String)
  AllocGroupID?: string// [12] 1730 (String)
  FirmGroupID?: string// [13] 1728 (String)
  AvgPxGroupID?: string// [14] 1731 (String)
  TradeDate?: Date// [15] 75 (LocalDate)
  TransactTime?: Date// [16] 60 (UtcTimestamp)
  AllocStatus?: number// [17] 87 (Int)
  AllocRejCode?: number// [18] 88 (Int)
  AllocReportType?: number// [19] 794 (Int)
  AllocIntermedReqType?: number// [20] 808 (Int)
  MatchStatus?: string// [21] 573 (String)
  CustOrderHandlingInst?: string// [22] 1031 (String)
  OrderHandlingInstSource?: number// [23] 1032 (Int)
  Text?: string// [24] 58 (String)
  EncodedTextLen?: number// [25] 354 (Length)
  EncodedText?: Buffer// [26] 355 (RawData)
  RejectText?: string// [27] 1328 (String)
  EncodedRejectTextLen?: number// [28] 1664 (Length)
  EncodedRejectText?: Buffer// [29] 1665 (RawData)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [30] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  AllocAckGrp?: IAllocAckGrp// [31] NoAllocs.78, AllocAccount.79 .. AllocAvgPxIndicator.2769
  StandardTrailer: IStandardTrailer// [32] SignatureLength.93, Signature.89, CheckSum.10
}
