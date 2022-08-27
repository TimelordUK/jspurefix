import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderStatusRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  ClOrdID: string// [3] 11 (String)
  SecondaryClOrdID?: string// [4] 526 (String)
  ClOrdLinkID?: string// [5] 583 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  OrdStatusReqID?: string// [7] 790 (String)
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  Instrument?: IInstrument// [10] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [11] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [12] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  Side: string// [13] 54 (String)
  StandardTrailer: IStandardTrailer// [14] SignatureLength.93, Signature.89, CheckSum.10
}
