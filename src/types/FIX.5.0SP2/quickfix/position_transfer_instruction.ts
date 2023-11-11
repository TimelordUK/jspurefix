import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IPositionTransferInstruction {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TransferInstructionID: string// [2] 2436 (String)
  TransferID?: string// [3] 2437 (String)
  TransferTransType?: number// [4] 2439 (Int)
  TransferType?: number// [5] 2440 (Int)
  TransferScope?: number// [6] 2441 (Int)
  Parties?: IParties// [7] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TargetParties?: ITargetParties// [8] NoTargetPartyIDs.1461, TargetPartyID.1462 .. TargetPartySubIDType.2435
  ClearingBusinessDate?: Date// [9] 715 (LocalDate)
  TradeDate?: Date// [10] 75 (LocalDate)
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [13] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  PositionQty?: IPositionQty// [14] NoPositions.702, PosType.703 .. NestedPartySubIDType.805
  ClearingTradePrice?: number// [15] 1596 (Float)
  Currency?: string// [16] 15 (String)
  CurrencyCodeSource?: string// [17] 2897 (String)
  PriceType?: number// [18] 423 (Int)
  PositionAmountData?: IPositionAmountData// [19] NoPosAmt.753, PosAmtType.707 .. PosAmtPriceType.2877
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Length)
  EncodedText?: Buffer// [22] 355 (RawData)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
