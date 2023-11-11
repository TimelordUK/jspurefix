import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IExpirationQty } from './set/expiration_qty'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IContraryIntentionReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  ContIntRptID: string// [3] 977 (String)
  TransactTime?: Date// [4] 60 (UtcTimestamp)
  LateIndicator?: boolean// [5] 978 (Boolean)
  InputSource?: string// [6] 979 (String)
  ClearingBusinessDate: Date// [7] 715 (LocalDate)
  Parties?: IParties// [8] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  ExpirationQty?: IExpirationQty// [9] NoExpiration.981, ExpirationQtyType.982, ExpQty.983
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp// [11] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  Text?: string// [12] 58 (String)
  EncodedTextLen?: number// [13] 354 (Length)
  EncodedText?: Buffer// [14] 355 (RawData)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
