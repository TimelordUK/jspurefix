import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
*************************************************************
* The Request for Positions Ack message is returned by the  *
* holder of the position in response to a Request for       *
* Positions message. The purpose of the message is to       *
* acknowledge that a request has been received and is being *
* processed.                                                *
*************************************************************
*/
export interface IRequestForPositionsAck {
  StandardHeader: IStandardHeader
  PosMaintRptID: string// 721
  PosReqID?: string// 710
  TotalNumPosReports?: number// 727
  UnsolicitedIndicator?: boolean// 325
  PosReqResult: number// 728
  PosReqStatus: number// 729
  PosReqType?: number// 724
  MatchStatus?: string// 573
  ClearingBusinessDate?: Date// 715
  SubscriptionRequestType?: string// 263
  SettlSessID?: string// 716
  SettlSessSubID?: string// 717
  SettlCurrency?: string// 120
  Parties: IParties[]
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  Instrument?: IInstrument
  Currency?: string// 15
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardTrailer: IStandardTrailer
}
