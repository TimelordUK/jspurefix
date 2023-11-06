import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'

/*
****************************************************************
* TradeCaptureReportRequestAck can be found in Volume 5 of the *
*                                                              *
* specification                                                *
****************************************************************
*/
export interface ITradeCaptureReportRequestAck {
  TradeRequestID: string// [2] 568 (String)
  TradeID?: string// [2] 1003 (String)
  SecondaryTradeID?: string// [2] 1040 (String)
  FirmTradeID?: string// [2] 1041 (String)
  SecondaryFirmTradeID?: string// [2] 1042 (String)
  TradeRequestType: number// [2] 569 (Int)
  SubscriptionRequestType?: string// [2] 263 (String)
  TotNumTradeReports?: number// [2] 748 (Int)
  SecurityRequestResult: number// [2] 560 (Int)
  TradeRequestStatus: number// [2] 750 (Int)
  MultiLegReportingType?: string// [2] 442 (String)
  ResponseTransportType?: number// [2] 725 (Int)
  ResponseDestination?: string// [2] 726 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  MessageEventSource?: string// [2] 1011 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [3] DlvryForm.668, PctAtRisk.869
  UndInstrmtGrp?: IUndInstrmtGrp[]// [4] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [5] Sym.600, Sfx.601 .. ExchLookAlike.2607
}
