import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'

/*
*******************************************************
* RequestForPositions can be found in Volume 5 of the *
*                                                     *
* specification                                       *
*******************************************************
*/
export interface IRequestForPositions {
  PosReqID: string// 710
  PosReqType: number// 724
  MatchStatus?: string// 573
  SubscriptionRequestType?: string// 263
  SettlCurrency?: string// 120
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Currency?: string// 15
  ClearingBusinessDate: Date// 715
  SettlDate?: Date// 64
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  TransactTime: Date// 60
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
  TrdgSesGrp?: ITrdgSesGrp[]
}
