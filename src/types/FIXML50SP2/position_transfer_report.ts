import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

/*
**********************************************************
* PositionTransferReport can be found in Volume 5 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IPositionTransferReport {
  TransferInstructionID?: string// [2] 2436 (String)
  TransferReportID: string// [2] 2438 (String)
  TransferID: string// [2] 2437 (String)
  TransferTransType: number// [2] 2439 (Int)
  TransferReportType: number// [2] 2444 (Int)
  TransferStatus: number// [2] 2442 (Int)
  OrdRejReason?: number// [2] 103 (Int)
  TransferScope?: number// [2] 2441 (Int)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  TradeDate?: Date// [2] 75 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  ClearingTradePrice?: number// [2] 1596 (Float)
  Currency?: string// [2] 15 (String)
  PriceType?: number// [2] 423 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [3] ID.1462, Src.1463 .. Qual.1818
  Instrument?: IInstrument// [4] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
  PositionQty?: IPositionQty[]// [6] Typ.703, Long.704 .. UOMCcy.1835
  PositionAmountData?: IPositionAmountData[]// [7] Typ.707, Amt.708 .. MktID.2100
}
