import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The quote status request message is used for the following *
* purposes in markets that employ tradeable or restricted    *
* tradeable quotes:                                          *
**************************************************************
*/
export interface IQuoteStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteID?: string// [3] 117 (String)
  Instrument: IInstrument// [4] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [5] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [6] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [7] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  Parties?: IParties[]// [8] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  TradingSessionID?: string// [12] 336 (String)
  TradingSessionSubID?: string// [13] 625 (String)
  SubscriptionRequestType?: string// [14] 263 (String)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
}
