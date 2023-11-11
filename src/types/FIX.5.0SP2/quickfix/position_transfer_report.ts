import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionTransferReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TransferInstructionID?: string// [2] 2436 (String)
  TransferReportID: string// [3] 2438 (String)
  TransferID: string// [4] 2437 (String)
  TransferTransType: number// [5] 2439 (Int)
  TransferReportType: number// [6] 2444 (Int)
  TransferStatus: number// [7] 2442 (Int)
  TransferRejectReason?: number// [8] 2443 (Int)
  TransferScope?: number// [9] 2441 (Int)
  Parties?: IParties// [10] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [11] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  ClearingBusinessDate?: Date// [12] 715 (LocalDate)
  TradeDate?: Date// [13] 75 (LocalDate)
  TransactTime?: Date// [14] 60 (UtcTimestamp)
  Instrument?: IInstrument// [15] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [16] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PositionQty?: IPositionQty// [17] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  ClearingTradePrice?: number// [18] 1596 (Float)
  Currency?: string// [19] 15 (String)
  CurrencyCodeSource?: string// [20] 2897 (String)
  PriceType?: number// [21] 423 (Int)
  PositionAmountData?: IPositionAmountData// [22] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  RejectText?: string// [23] 1328 (String)
  EncodedRejectTextLen?: number// [24] 1664 (Length)
  EncodedRejectText?: Buffer// [25] 1665 (RawData)
  Text?: string// [26] 58 (String)
  EncodedTextLen?: number// [27] 354 (Length)
  EncodedText?: Buffer// [28] 355 (RawData)
  StandardTrailer: IStandardTrailer// [29] SignatureLength.93, Signature.89, CheckSum.10
}
