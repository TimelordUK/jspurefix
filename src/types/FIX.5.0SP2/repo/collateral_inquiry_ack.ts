import { IStandardHeader } from './set/standard_header'
import { ICollInqQualGrp } from './set/coll_inq_qual_grp'
import { IParties } from './set/parties'
import { IExecCollGrp } from './set/exec_coll_grp'
import { ITrdCollGrp } from './set/trd_coll_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* Used to respond to a Collateral Inquiry in the following   *
* situations:                                                *
* " When the CollateralInquiry will result in an out of band *
* response (such as a file transfer).                        *
* " When the inquiry is otherwise valid but no collateral is *
* found to match the criteria specified on the Collateral    *
* Inquiry message.                                           *
* " When the Collateral Inquiry is invalid based upon the    *
* business rules of the counterparty.                        *
**************************************************************
*/
export interface ICollateralInquiryAck {
  StandardHeader: IStandardHeader
  CollInquiryID: string// 909
  CollInquiryStatus: number// 945
  CollInquiryResult?: number// 946
  CollInqQualGrp?: ICollInqQualGrp[]
  TotNumReports?: number// 911
  Parties?: IParties[]
  Account?: string// 1
  AccountType?: number// 581
  ClOrdID?: string// 11
  OrderID?: string// 37
  SecondaryOrderID?: string// 198
  SecondaryClOrdID?: string// 526
  ExecCollGrp?: IExecCollGrp[]
  TrdCollGrp?: ITrdCollGrp[]
  Instrument?: IInstrument
  FinancingDetails?: IFinancingDetails
  SettlDate?: Date// 64
  Quantity?: number// 53
  QtyType?: number// 854
  Currency?: string// 15
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  ClearingBusinessDate?: Date// 715
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
