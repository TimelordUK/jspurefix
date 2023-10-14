import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The Trade Capture Request Ack message is used to:            *
* " Provide an acknowledgement to a Trade Capture Report       *
* Request in the case where the Trade Capture Report Request   *
* is used to specify a subscription or delivery of reports via *
* an out-of-band ResponseTransmissionMethod.                   *
* " Provide an acknowledgement to a Trade Capture Report       *
* Request in the case when the return of the Trade Capture     *
* Reports matching that request will be delayed or delivered   *
* asynchronously. This is useful in distributed trading system *
* environments.                                                *
* " Indicate that no trades were found that matched the        *
* selection criteria specified on the Trade Capture Report     *
* Request                                                      *
* " The Trade Capture Request was invalid for some business    *
* reason, such as request is not authorized, invalid or        *
* unknown instrument, party, trading session, etc.             *
****************************************************************
*/
export interface ITradeCaptureReportRequestAck {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeRequestID: string// [2] 568 (String)
  TradeID?: string// [3] 1003 (String)
  SecondaryTradeID?: string// [4] 1040 (String)
  FirmTradeID?: string// [5] 1041 (String)
  SecondaryFirmTradeID?: string// [6] 1042 (String)
  TradeRequestType: number// [7] 569 (Int)
  SubscriptionRequestType?: string// [8] 263 (String)
  TotNumTradeReports?: number// [9] 748 (Int)
  TradeRequestResult: number// [10] 749 (Int)
  TradeRequestStatus: number// [11] 750 (Int)
  Instrument?: IInstrument// [12] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  UndInstrmtGrp?: IUndInstrmtGrp// [13] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [14] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  MultiLegReportingType?: string// [15] 442 (String)
  ResponseTransportType?: number// [16] 725 (Int)
  ResponseDestination?: string// [17] 726 (String)
  Text?: string// [18] 58 (String)
  EncodedTextLen?: number// [19] 354 (Int)
  EncodedText?: Buffer// [20] 355 (RawData)
  MessageEventSource?: string// [21] 1011 (String)
  StandardTrailer: IStandardTrailer// [22] SignatureLength.93, Signature.89, CheckSum.10
}
