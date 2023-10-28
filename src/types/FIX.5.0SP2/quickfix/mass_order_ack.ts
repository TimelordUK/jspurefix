import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IThrottleResponse } from './set/throttle_response'
import { IOrderEntryAckGrp } from './set/order_entry_ack_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface IMassOrderAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  MassOrderRequestID?: string// [3] 2423 (String)
  MassOrderReportID?: string// [4] 2424 (String)
  MassOrderRequestStatus: number// [5] 2425 (Int)
  MassOrderRequestResult?: number// [6] 2426 (Int)
  OrderResponseLevel?: number// [7] 2427 (Int)
  RejectText?: string// [8] 1328 (String)
  EncodedRejectTextLen?: number// [9] 1664 (Length)
  EncodedRejectText?: Buffer// [10] 1665 (RawData)
  MarketID?: string// [11] 1301 (String)
  MarketSegmentID?: string// [12] 1300 (String)
  Parties?: IParties// [13] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  TradingCapacity: number// [14] 1815 (Int)
  ClearingAccountType?: number// [15] 1816 (Int)
  Account?: string// [16] 1 (String)
  AcctIDSource?: number// [17] 660 (Int)
  AccountType?: number// [18] 581 (Int)
  OrderCapacity?: string// [19] 528 (String)
  OrderRestrictions?: string// [20] 529 (String)
  CustOrderCapacity?: number// [21] 582 (Int)
  ManualOrderIndicator?: boolean// [22] 1028 (Boolean)
  CustOrderHandlingInst?: string// [23] 1031 (String)
  TransactTime?: Date// [24] 60 (UtcTimestamp)
  Text?: string// [25] 58 (String)
  EncodedTextLen?: number// [26] 354 (Length)
  EncodedText?: Buffer// [27] 355 (RawData)
  CopyMsgIndicator?: boolean// [28] 797 (Boolean)
  TotNoOrderEntries?: number// [29] 2432 (Int)
  LastFragment?: boolean// [30] 893 (Boolean)
  ThrottleResponse?: IThrottleResponse// [31] ThrottleInst.1685, ThrottleStatus.1609, ThrottleCountIndicator.1686
  OrderEntryAckGrp?: IOrderEntryAckGrp// [32] NoOrderEntries.2428, OrdStatus.39 .. ExchangeLookAlike.2603
  StandardTrailer: IStandardTrailer// [33] SignatureLength.93, Signature.89, CheckSum.10
}
