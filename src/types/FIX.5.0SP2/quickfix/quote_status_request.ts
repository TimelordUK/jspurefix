import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IParties } from './set/parties'
import { IStandardTrailer } from './set/standard_trailer'
import { ITargetParties } from './set/target_parties'

/*
***************************************************************
* The quote status request message is used for the following  *
* purposes in markets that employ tradeable or restricted     *
* tradeable quotes:                                           *
* " For the issuer of a quote in a market to query the status *
* of that quote (using the QuoteID to specify the target      *
* quote).                                                     *
* " To subscribe and unsubscribe for Quote Status Report      *
* messages for one or more securities.                        *
***************************************************************
*/
export interface IQuoteStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteID?: string// [3] 117 (String)
  Instrument?: IInstrument// [4] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  FinancingDetails?: IFinancingDetails// [5] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [6] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [7] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  Parties?: IParties[]// [8] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  TradingSessionID?: string// [12] 336 (String)
  TradingSessionSubID?: string// [13] 625 (String)
  SubscriptionRequestType?: string// [14] 263 (String)
  StandardTrailer: IStandardTrailer// [15] SignatureLength.93, Signature.89, CheckSum.10
  TargetParties?: ITargetParties[]// [16] TargetPartyID.1462, TargetPartyIDSource.1463, TargetPartyRole.1464
}
