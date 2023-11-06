import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'

/*
******************************************************
* OrderCancelRequest can be found in Volume 4 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface IOrderCancelRequest {
  OrderRequestID?: number// [2] 2422 (Int)
  OrigClOrdID?: string// [2] 41 (String)
  OrderID?: string// [2] 37 (String)
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [2] 526 (String)
  ClOrdLinkID?: string// [2] 583 (String)
  ListID?: string// [2] 66 (String)
  OrigOrdModTime?: Date// [2] 586 (UtcTimestamp)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  MarketSegmentID?: string// [2] 1300 (String)
  ExDestination?: string// [2] 100 (String)
  ExDestinationIDSource?: string// [2] 1133 (String)
  Side: string// [2] 54 (String)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  Instrument?: IInstrument// [3] Sym.55, Sfx.65 .. ExchLookAlike.2603
  FinancingDetails?: IFinancingDetails// [4] AgmtDesc.913, AgmtID.914 .. MgnRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [5] Sym.311, Sfx.312 .. XID.2631
  OrderQtyData?: IOrderQtyData// [6] Qty.38, Cash.152 .. RndMod.469
}
