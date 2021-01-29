import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Request For Positions message is used by the owner of a  *
* position to request a Position Report from the holder of the *
* position, usually the central counter party or clearing      *
* organization. The request can be made at several levels of   *
* granularity.                                                 *
****************************************************************
*/
export interface IRequestForPositions {
  StandardHeader: IStandardHeader
  PosReqID: string// 710
  PosReqType: number// 724
  MatchStatus?: string// 573
  SubscriptionRequestType?: string// 263
  SettlCurrency?: string// 120
  Parties: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Instrument?: IInstrument
  Currency?: string// 15
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  ClearingBusinessDate: Date// 715
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  TrdgSesGrp?: ITrdgSesGrp[]
  TransactTime: Date// 60
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
