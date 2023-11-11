import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IInstrumentScope } from './set/instrument_scope'
import { ISecMassStatGrp } from './set/sec_mass_stat_grp'

/*
******************************************************
* SecurityMassStatus can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface ISecurityMassStatus {
  SecurityStatusReqID?: string// [2] 324 (String)
  SecurityListID?: string// [2] 1465 (String)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradeDate?: Date// [2] 75 (LocalDate)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  UnsolicitedIndicator?: boolean// [2] 325 (Boolean)
  SecurityMassTradingStatus?: number// [2] 1679 (Int)
  FastMarketIndicator?: boolean// [2] 2447 (Boolean)
  SecurityMassTradingEvent?: number// [2] 1680 (Int)
  MassHaltReason?: number// [2] 1681 (Int)
  MDBookType?: number// [2] 1021 (Int)
  MarketDepth?: number// [2] 264 (Int)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Adjustment?: number// [2] 334 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  InstrumentScope?: IInstrumentScope// [3] Sym.1536, Sfx.1537 .. SettlTyp.63
  SecMassStatGrp?: ISecMassStatGrp[]// [4] TrdgStat.326, SecTrdEvnt.1174 .. EncTxt.355
}
