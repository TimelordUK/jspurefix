import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'

/*
******************************************************
* QuoteStatusRequest can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IQuoteStatusRequest {
  QuoteStatusReqID?: string// [2] 649 (String)
  QuoteID?: string// [2] 117 (String)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  TradingSessionID?: string// [2] 336 (String)
  TradingSessionSubID?: string// [2] 625 (String)
  SubscriptionRequestType?: string// [2] 263 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Instrument?: IInstrument// [2] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [3] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [4] Sym.311, Sfx.312 .. XID.2631
  InstrmtLegGrp?: IInstrmtLegGrp[]// [5] Sym.600, Sfx.601 .. ExchLookAlike.2607
  Parties?: IParties[]// [6] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [7] ID.1462, Src.1463 .. Qual.1818
}
