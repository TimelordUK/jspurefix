import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IOrderEntryGrp } from './set/order_entry_grp'

/*
*********************************************
* MassOrder can be found in Volume 4 of the *
*                                           *
* specification                             *
*********************************************
*/
export interface IMassOrder {
  MassOrderRequestID: string// [2] 2423 (String)
  OrderResponseLevel?: number// [2] 2427 (Int)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingCapacity?: number// [2] 1815 (Int)
  ClearingAccountType?: number// [2] 1816 (Int)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  OrderCapacity?: string// [2] 528 (String)
  OrderRestrictions?: string// [2] 529 (String)
  CustOrderCapacity?: number// [2] 582 (Int)
  ManualOrderIndicator?: boolean// [2] 1028 (Boolean)
  CustOrderHandlingInst?: string// [2] 1031 (String)
  TransactTime?: Date// [2] 60 (UtcTimestamp)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  ThrottleInst?: number// [2] 1685 (Int)
  TotNoOrderEntries?: number// [2] 2432 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  OrderEntryGrp?: IOrderEntryGrp[]// [3] OrdEntryActn.2429, OrdEntryID.2430 .. TmInForce.59
}
