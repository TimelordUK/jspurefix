import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The order status request message is used by the institution *
* to generate an order status message back from the broker.   *
***************************************************************
*/
export interface IOrderStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  OrderID?: string// [2] 37 (String)
  ClOrdID: string// [3] 11 (String)
  Parties?: IParties[]// [4] 
  Account?: string// [5] 1 (String)
  Instrument: IInstrument// [6] Symbol.55, SymbolSfx.65 .. EncodedSecurityDesc.351
  Side: string// [7] 54 (String)
  StandardTrailer: IStandardTrailer// [8] SignatureLength.93, Signature.89, CheckSum.10
}
