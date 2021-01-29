import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* Advertisement messages are used to announce completed        *
* transactions. The advertisement message can be transmitted   *
* in various transaction types; NEW, CANCEL and REPLACE. All   *
* message types other than NEW modify the state of a           *
* previously transmitted advertisement identified in AdvRefID. *
****************************************************************
*/
export interface IAdvertisement {
  StandardHeader: IStandardHeader
  AdvId: string// 2
  AdvTransType: string// 5
  AdvRefID?: string// 3
  Instrument: IInstrument
  InstrmtLegGrp?: IInstrmtLegGrp
  UndInstrmtGrp?: IUndInstrmtGrp
  AdvSide: string// 4
  Quantity: number// 53
  QtyType?: number// 854
  Price?: number// 44
  Currency?: string// 15
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  URLLink?: string// 149
  LastMkt?: string// 30
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  StandardTrailer: IStandardTrailer
}
