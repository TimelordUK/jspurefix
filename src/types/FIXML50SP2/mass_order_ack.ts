import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { IParties } from './set/parties'
import { IThrottleResponse } from './set/throttle_response'
import { IOrderEntryAckGrp } from './set/order_entry_ack_grp'

/*
************************************************
* MassOrderAck can be found in Volume 4 of the *
*                                              *
* specification                                *
************************************************
*/
export interface IMassOrderAck {
  MassOrderRequestID?: string// [2] 2423 (String)
  MassOrderReportID?: string// [2] 2424 (String)
  MassOrderRequestStatus: number// [2] 2425 (Int)
  SecurityRequestResult?: number// [2] 560 (Int)
  OrderResponseLevel?: number// [2] 2427 (Int)
  RejectText?: string// [2] 1328 (String)
  EncodedRejectTextLen?: number// [2] 1664 (Length)
  EncodedRejectText?: Buffer// [2] 1665 (RawData)
  MarketID?: string// [2] 1301 (String)
  MarketSegmentID?: string// [2] 1300 (String)
  TradingCapacity: number// [2] 1815 (Int)
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
  CopyMsgIndicator?: boolean// [2] 797 (Boolean)
  TotNoOrderEntries?: number// [2] 2432 (Int)
  LastFragment?: boolean// [2] 893 (Boolean)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  Parties?: IParties[]// [3] ID.448, Src.447 .. Qual.2376
  ThrottleResponse?: IThrottleResponse// [4] ThrttlInst.1685, ThrttlStat.1609, ThrttlCntInd.1686
  OrderEntryAckGrp?: IOrderEntryAckGrp[]// [5] OrdStat.39, ExecTyp.150 .. TmInForce.59
}
