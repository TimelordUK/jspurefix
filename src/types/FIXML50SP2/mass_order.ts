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
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  TradingCapacity?: number// 1815
  LegClearingAccountType?: number// 1817
  LegAccount?: string// 2680
  AcctIDSource?: number// 660
  AllocAccountType?: number// 798
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  AllocCustomerCapacity?: string// 993
  ManualOrderIndicator?: string// 1028
  CustOrderHandlingInst?: string// 1031
  RelSymTransactTime?: Date// 1504
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  ThrottleInst?: number// 1685
  TotNoOrderEntries?: number// 2432
  LastFragment?: string// 893
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  OrderEntryGrp?: IOrderEntryGrp[]
}
