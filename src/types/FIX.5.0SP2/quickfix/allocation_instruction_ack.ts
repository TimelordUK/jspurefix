import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IParties } from './set/parties'
import { IRegulatoryTradeIDGrp } from './set/regulatory_trade_id_grp'
import { IAllocAckGrp } from './set/alloc_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IAllocationInstructionAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  AllocID: string// [2] 70 (String)
  AllocRequestID?: string// [3] 2758 (String)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  Parties?: IParties// [5] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  SecondaryAllocID?: string// [6] 793 (String)
  AllocGroupID?: string// [7] 1730 (String)
  FirmGroupID?: string// [8] 1728 (String)
  AvgPxGroupID?: string// [9] 1731 (String)
  TradeDate?: Date// [10] 75 (LocalDate)
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  AllocStatus: number// [12] 87 (Int)
  AllocRejCode?: number// [13] 88 (Int)
  AllocType?: number// [14] 626 (Int)
  AllocIntermedReqType?: number// [15] 808 (Int)
  MatchStatus?: string// [16] 573 (String)
  Text?: string// [17] 58 (String)
  EncodedTextLen?: number// [18] 354 (Length)
  EncodedText?: Buffer// [19] 355 (RawData)
  RejectText?: string// [20] 1328 (String)
  EncodedRejectTextLen?: number// [21] 1664 (Length)
  EncodedRejectText?: Buffer// [22] 1665 (RawData)
  RegulatoryTradeIDGrp?: IRegulatoryTradeIDGrp// [23] NoRegulatoryTradeIDs.1907, RegulatoryTradeID.1903 .. RegulatoryTradeIDScope.2397
  AllocAckGrp?: IAllocAckGrp// [24] NoAllocs.78, AllocAccount.79 .. AllocAvgPxIndicator.2769
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
}
