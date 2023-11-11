import { IStandardHeader } from './set/standard_header'
import { IRequestingPartyGrp } from './set/requesting_party_grp'
import { IParties } from './set/parties'
import { IRelatedPartyDetailGrp } from './set/related_party_detail_grp'
import { IInstrument } from './set/instrument'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'

/*
**************************************************************
* PartyRiskLimitCheckRequest can be found in Volume 3 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IPartyRiskLimitCheckRequest {
  RiskLimitCheckRequestID?: string// [2] 2318 (String)
  RiskLimitCheckID?: string// [2] 2319 (String)
  RiskLimitCheckTransType: number// [2] 2320 (Int)
  RiskLimitCheckType: number// [2] 2321 (Int)
  RiskLimitCheckRequestRefID?: number// [2] 2322 (Int)
  RefOrderID?: string// [2] 1080 (String)
  RefOrderIDSource?: string// [2] 1081 (String)
  RiskLimitCheckRequestType?: number// [2] 2323 (Int)
  RiskLimitCheckAmount?: number// [2] 2324 (Float)
  Currency?: string// [2] 15 (String)
  RiskLimitID?: string// [2] 1670 (String)
  Side?: string// [2] 54 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  RequestingPartyGrp?: IRequestingPartyGrp[]// [2] ID.1658, Src.1659 .. Qual.2338
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  RelatedPartyDetailGrp?: IRelatedPartyDetailGrp[]// [4] ID.1563, Src.1564 .. Qual.1675
  Instrument?: IInstrument// [5] Sym.55, Sfx.65 .. ExchLookAlike.2603
  LegOrdGrp?: ILegOrdGrp[]// [6] OrdQty.685, Qty.687 .. ShrtSaleExmptnRsn.1689
  UndInstrmtGrp?: IUndInstrmtGrp[]// [7] Sym.311, Sfx.312 .. XID.2631
}
