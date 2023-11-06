import { IStandardHeader } from './set/standard_header'
import { ICollInqQualGrp } from './set/coll_inq_qual_grp'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
********************************************************
* CollateralInquiryAck can be found in Volume 5 of the *
*                                                      *
* specification                                        *
********************************************************
*/
export interface ICollateralInquiryAck {
  CollInquiryID: string// [2] 909 (String)
  CollInquiryStatus: number// [2] 945 (Int)
  PosMaintResult?: number// [2] 723 (Int)
  TotNumReports?: number// [2] 911 (Int)
  Account?: string// [2] 1 (String)
  AccountType?: number// [2] 581 (Int)
  ClOrdID?: string// [2] 11 (String)
  OrderID?: string// [2] 37 (String)
  SecondaryOrderID?: string// [2] 198 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  Quantity?: number// [2] 53 (Float)
  QtyType?: number// [2] 854 (Int)
  Currency?: string// [2] 15 (String)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SettlSessID?: string// [2] 716 (String)
  SettlSessSubID?: string// [2] 717 (String)
  ClearingBusinessDate?: Date// [2] 715 (LocalDate)
  ResponseTransportType?: number// [2] 725 (Int)
  ResponseDestination?: string// [2] 726 (String)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  CollInqQualGrp?: ICollInqQualGrp[]// [2] Qual.896
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  ExecCollGrp?: IExecCollGrp[]// [4] ExecID.17
  TrdCollGrp?: ITrdCollGrp[]// [5] RptID.571, TrdRptID2.818
  Instrument?: IInstrument// [6] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [7] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  InstrmtLegGrp?: IInstrmtLegGrp[]// [8] Sym.600, Sfx.601 .. ExchLookAlike.2607
  UndInstrmtGrp?: IUndInstrmtGrp[]// [9] Sym.311, Sfx.312 .. XID.2631
}
