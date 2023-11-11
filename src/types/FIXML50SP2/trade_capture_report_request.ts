import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ITrdCapDtGrp } from './set/trd_cap_dt_grp'

/*
*************************************************************
* TradeCaptureReportRequest can be found in Volume 5 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ITradeCaptureReportRequest {
  TradeRequestID: string// [2] 568 (String)
  TradeID?: string// [2] 1003 (String)
  SecondaryTradeID?: string// [2] 1040 (String)
  FirmTradeID?: string// [2] 1041 (String)
  SecondaryFirmTradeID?: string// [2] 1042 (String)
  TradeRequestType: number// [2] 569 (Int)
  SubscriptionRequestType?: string// [2] 263 (String)
  TradeReportID?: string// [2] 571 (String)
  SecondaryTradeReportID?: string// [2] 818 (String)
  SecondaryExecID?: string// [2] 527 (String)
  ExecID?: string// [2] 17 (String)
  ExecType?: string// [2] 150 (String)
  OrderID?: string// [2] 37 (String)
  ClOrdID?: string// [2] 11 (String)
  MatchStatus?: string// [2] 573 (String)
  TrdType?: number// [2] 828 (Int)
  TrdSubType?: number// [2] 829 (Int)
  OffsetInstruction?: number// [2] 1849 (Int)
  TradeHandlingInstr?: string// [2] 1123 (String)
  TransferReason?: string// [2] 830 (String)
  SecondaryTrdType?: number// [2] 855 (Int)
  TradeLinkID?: string// [2] 820 (String)
  TrdMatchID?: string// [2] 880 (String)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  TimeBracket?: string// [2] 943 (String)
  Side?: string// [2] 54 (String)
  MultiLegReportingType?: string// [2] 442 (String)
  TradeInputSource?: string// [2] 578 (String)
  TradeInputDevice?: string// [2] 579 (String)
  ResponseTransportType?: number// [2] 725 (Int)
  ResponseDestination?: string// [2] 726 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  MessageEventSource?: string// [2] 1011 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [4] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [5] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [7] Sym.600, Sfx.601 .. ExchLookAlike.2607
  TrdCapDtGrp?: ITrdCapDtGrp[]// [8] TrdDt.75, LastUpdateTm.779, TxnTm.60
}
