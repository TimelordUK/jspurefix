import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
**********************************************************
* RequestForPositionsAck can be found in Volume 5 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IRequestForPositionsAck {
  PosMaintRptID: string// 721
  PosReqID?: string// 710
  TotalNumPosReports?: number// 727
  TotNumReports?: number// 911
  UnsolicitedIndicator?: boolean// 325
  PosMaintResult: number// 723
  PosReqStatus: number// 729
  PosReqType?: number// 724
  MatchStatus?: string// 573
  ClearingBusinessDate?: Date// 715
  SubscriptionRequestType?: string// 263
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  SettlCurrency?: string// 120
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Currency?: string// 15
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp[]
  UndInstrmtGrp?: IUndInstrmtGrp[]
}
