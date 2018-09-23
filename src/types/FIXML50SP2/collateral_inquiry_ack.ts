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
  BatchID: string// 50000
  MDStatisticStatus: number// 2477
  EntitlementResult?: number// 1884
  TotNumReports?: number// 911
  LegAccount?: string// 2680
  AllocAccountType?: number// 798
  ClOrdID?: string// 11
  NotAffectedOrderID?: string// 1371
  NotAffSecondaryOrderID?: string// 1825
  SecondaryClOrdID?: string// 526
  LegSettlDate?: Date// 588
  RelatedTradeQuantity?: number// 1860
  LegQtyType?: number// 1591
  UnderlyingReturnRatePriceCurrency?: string// 43067
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  ClearingBusinessDate?: Date// 715
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  CollInqQualGrp?: ICollInqQualGrp[]
  Parties?: IParties[]
  ExecCollGrp?: IExecCollGrp[]
  TrdCollGrp?: ITrdCollGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
