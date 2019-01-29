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
  StandardHeader: IStandardHeader
  Parties?: IParties[]
  Account?: string// 1
  TradingSessionID?: string// 336
  Instrument?: IInstrument
  UnderlyingInstrument?: IUnderlyingInstrument
  Side?: string// 54
  StandardTrailer: IStandardTrailer
}
