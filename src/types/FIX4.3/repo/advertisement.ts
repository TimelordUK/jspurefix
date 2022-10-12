import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
*********************************************************
* Advertisement messages are used to announce completed *
* transactions.                                         *
*********************************************************
*/
export interface IAdvertisement {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  AdvId: string// [2] 2 (String)
  AdvTransType: string// [3] 5 (String)
  AdvRefID?: string// [4] 3 (String)
  Instrument: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  AdvSide: string// [6] 4 (String)
  Shares: number// [7] 53 (Float)
  Price?: number// [8] 44 (Float)
  Currency?: string// [9] 15 (String)
  TradeDate?: Date// [10] 75 (LocalDate)
  TransactTime?: Date// [11] 60 (UtcTimestamp)
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Int)
  EncodedText?: Buffer// [14] 355 (RawData)
  URLLink?: string// [15] 149 (String)
  LastMkt?: string// [16] 30 (String)
  TradingSessionID?: string// [17] 336 (String)
  StandardTrailer: IStandardTrailer// [18] SignatureLength.93, Signature.89, CheckSum.10
}
