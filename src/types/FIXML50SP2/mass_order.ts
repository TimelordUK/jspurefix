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
  MassOrderRequestID: string// 2423
  OrderResponseLevel?: number// 2427
  MarketID?: string// 1301
  MarketSegmentID?: string// 1300
  TradingCapacity?: number// 1815
  ClearingAccountType?: number// 1816
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  CustOrderCapacity?: number// 582
  ManualOrderIndicator?: boolean// 1028
  CustOrderHandlingInst?: string// 1031
  TransactTime?: Date// 60
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  ThrottleInst?: number// 1685
  TotNoOrderEntries?: number// 2432
  LastFragment?: boolean// 893
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  OrderEntryGrp?: IOrderEntryGrp[]
}
