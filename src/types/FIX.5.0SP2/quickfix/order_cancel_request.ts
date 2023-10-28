import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { IStandardTrailer } from './set/standard_trailer'

export interface IOrderCancelRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderRequestID?: number// [2] 2422 (Int)
  OrigClOrdID?: string// [3] 41 (String)
  OrderID?: string// [4] 37 (String)
  ClOrdID: string// [5] 11 (String)
  SecondaryClOrdID?: string// [6] 526 (String)
  ClOrdLinkID?: string// [7] 583 (String)
  ListID?: string// [8] 66 (String)
  OrigOrdModTime?: Date// [9] 586 (UtcTimestamp)
  Account?: string// [10] 1 (String)
  AcctIDSource?: number// [11] 660 (Int)
  AccountType?: number// [12] 581 (Int)
  Parties?: IParties// [13] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Instrument?: IInstrument// [14] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  FinancingDetails?: IFinancingDetails// [15] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [16] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  MarketSegmentID?: string// [17] 1300 (String)
  ExDestination?: string// [18] 100 (String)
  ExDestinationIDSource?: string// [19] 1133 (String)
  Side: string// [20] 54 (String)
  TransactTime: Date// [21] 60 (UtcTimestamp)
  OrderQtyData?: IOrderQtyData// [22] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  ComplianceID?: string// [23] 376 (String)
  ComplianceText?: string// [24] 2404 (String)
  EncodedComplianceTextLen?: number// [25] 2351 (Length)
  EncodedComplianceText?: Buffer// [26] 2352 (RawData)
  Text?: string// [27] 58 (String)
  EncodedTextLen?: number// [28] 354 (Length)
  EncodedText?: Buffer// [29] 355 (RawData)
  StandardTrailer: IStandardTrailer// [30] SignatureLength.93, Signature.89, CheckSum.10
}
