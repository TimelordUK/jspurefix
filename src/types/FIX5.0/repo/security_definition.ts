import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Security Definition message is used for the following: *
* 1. Accept the security defined in a Security Definition    *
* message.                                                   *
* 2. Accept the security defined in a Security Definition    *
* message with changes to the definition and/or identity of  *
* the security.                                              *
* 3. Reject the security requested in a Security Definition  *
* message.                                                   *
* 4. Respond to a request for securities within a specified  *
* market segment.                                            *
* 5. Convey comprehensive security definition for all market *
* segments that the security participates in.                *
* 6. Convey the security's trading rules that differ from    *
* default rules for the market segment.                      *
**************************************************************
*/
export interface ISecurityDefinition {
  StandardHeader: IStandardHeader
  SecurityReportID?: number// 964
  ClearingBusinessDate?: Date// 715
  SecurityReqID?: string// 320
  SecurityResponseID?: string// 322
  SecurityResponseType?: number// 323
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  UndInstrmtGrp?: IUndInstrmtGrp
  Currency?: number// 15
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  InstrmtLegGrp?: IInstrmtLegGrp
  ExpirationCycle?: number// 827
  RoundLot?: number// 561
  MinTradeVol?: number// 562
  StandardTrailer: IStandardTrailer
}
