import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IUnderlyingInstrument } from './set/underlying_instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The order mass status request message requests the status  *
* for orders matching criteria specified within the request. *
**************************************************************
*/
export interface IOrderMassStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  Parties?: IParties[]// [2] 
  Account?: string// [3] 1 (String)
  TradingSessionID?: string// [4] 336 (String)
  Instrument?: IInstrument// [5] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  UnderlyingInstrument?: IUnderlyingInstrument// [6] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. EncodedUnderlyingSecurityDesc.365
  Side?: string// [7] 54 (String)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
