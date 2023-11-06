import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'

/*
*************************************************
* Advertisement can be found in Volume 3 of the *
*                                               *
* specification                                 *
*************************************************
*/
export interface IAdvertisement {
  AdvId: string// [2] 2 (String)
  AdvTransType: string// [2] 5 (String)
  AdvRefID?: string// [2] 3 (String)
  AdvSide: string// [2] 4 (String)
  Quantity: number// [2] 53 (Float)
  QtyType?: number// [2] 854 (Int)
  Price?: number// [2] 44 (Float)
  Currency?: string// [2] 15 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  URLLink?: string// [2] 149 (String)
  LastMkt?: string// [2] 30 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [3] DlvryForm.668, PctAtRisk.869
  FinancingDetails?: IFinancingDetails// [4] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  InstrmtLegGrp?: IInstrmtLegGrp[]// [5] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] Sym.311, Sfx.312 .. XID.2631
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]// [7] InstrmtTyp.1648, Sym.1649 .. XIDRef.2417
}
