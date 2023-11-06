import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'

/*
*******************************************************
* SecurityListRequest can be found in Volume 3 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface ISecurityListRequest {
  SecurityReqID: string// [2] 320 (String)
  SecurityListRequestType: number// [2] 559 (Int)
  SecurityListID?: string// [2] 1465 (String)
  SecurityListType?: number// [2] 1470 (Int)
  SecurityListTypeSource?: number// [2] 1471 (Int)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  Currency?: string// [2] 15 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [3] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [4] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [6] Sym.600, Sfx.601 .. ExchLookAlike.2607
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [7] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
}
