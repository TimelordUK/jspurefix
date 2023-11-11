import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IOrderEntryGrp } from './set/order_entry_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMassOrder {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  MassOrderRequestID: string// [2] 2423 (String)
  OrderResponseLevel?: number// [3] 2427 (Int)
  MarketID?: string// [4] 1301 (String)
  MarketSegmentID?: string// [5] 1300 (String)
  Parties?: IParties// [6] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradingCapacity?: number// [7] 1815 (Int)
  ClearingAccountType?: number// [8] 1816 (Int)
  Account?: string// [9] 1 (String)
  AcctIDSource?: number// [10] 660 (Int)
  AccountType?: number// [11] 581 (Int)
  OrderCapacity?: string// [12] 528 (String)
  OrderRestrictions?: string// [13] 529 (String)
  CustOrderCapacity?: number// [14] 582 (Int)
  ManualOrderIndicator?: boolean// [15] 1028 (Boolean)
  CustOrderHandlingInst?: string// [16] 1031 (String)
  TransactTime?: Date// [17] 60 (UtcTimestamp)
  Text?: string// [18] 58 (String)
  EncodedTextLen?: number// [19] 354 (Length)
  EncodedText?: Buffer// [20] 355 (RawData)
  ThrottleInst?: number// [21] 1685 (Int)
  TotNoOrderEntries?: number// [22] 2432 (Int)
  LastFragment?: boolean// [23] 893 (Boolean)
  OrderEntryGrp?: IOrderEntryGrp// [24] NoOrderEntries.2428, OrderEntryAction.2429 .. ExchangeLookAlike.2603
  StandardTrailer: IStandardTrailer// [25] SignatureLength.93, Signature.89, CheckSum.10
}
