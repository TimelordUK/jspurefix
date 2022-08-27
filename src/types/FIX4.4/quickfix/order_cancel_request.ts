import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrigClOrdID: string// [2] 41 (String)
  OrderID?: string// [3] 37 (String)
  ClOrdID: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ClOrdLinkID?: string// [6] 583 (String)
  ListID?: string// [7] 66 (String)
  OrigOrdModTime?: Date// [8] 586 (UtcTimestamp)
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  Parties?: IParties// [12] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Instrument?: IInstrument// [13] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [14] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [15] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingStipValue.889
  Side: string// [16] 54 (String)
  TransactTime: Date// [17] 60 (UtcTimestamp)
  OrderQtyData?: IOrderQtyData// [18] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  ComplianceID?: string// [19] 376 (String)
  Text?: string// [20] 58 (String)
  EncodedTextLen?: number// [21] 354 (Length)
  EncodedText?: Buffer// [22] 355 (RawData)
  StandardTrailer: IStandardTrailer// [23] SignatureLength.93, Signature.89, CheckSum.10
}
