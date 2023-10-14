import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ITrdCapDtGrp } from './set/trd_cap_dt_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**************************************************************
* The Trade Capture Report Request can be used to:           *
* " Request one or more trade capture reports based upon     *
* selection criteria provided on the trade capture report    *
* request                                                    *
* " Subscribe for trade capture reports based upon selection *
* criteria provided on the trade capture report request.     *
**************************************************************
*/
export interface ITradeCaptureReportRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeRequestID: string// [2] 568 (String)
  TradeID?: string// [3] 1003 (String)
  SecondaryTradeID?: string// [4] 1040 (String)
  FirmTradeID?: string// [5] 1041 (String)
  SecondaryFirmTradeID?: string// [6] 1042 (String)
  TradeRequestType: number// [7] 569 (Int)
  SubscriptionRequestType?: string// [8] 263 (String)
  TradeReportID?: string// [9] 571 (String)
  SecondaryTradeReportID?: string// [10] 818 (String)
  ExecID?: string// [11] 17 (String)
  ExecType?: string// [12] 150 (String)
  OrderID?: string// [13] 37 (String)
  ClOrdID?: string// [14] 11 (String)
  MatchStatus?: string// [15] 573 (String)
  TrdType?: number// [16] 828 (Int)
  TrdSubType?: number// [17] 829 (Int)
  TradeHandlingInstr?: string// [18] 1123 (String)
  TransferReason?: string// [19] 830 (String)
  SecondaryTrdType?: number// [20] 855 (Int)
  TradeLinkID?: string// [21] 820 (String)
  TrdMatchID?: string// [22] 880 (String)
  Parties?: IParties[]// [23] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Instrument?: IInstrument// [24] Symbol.55, SymbolSfx.65 .. ComplexEventEndTime.1496
  InstrumentExtension?: IInstrumentExtension// [25] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [26] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [27] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingDetachmentPoint.1460
  InstrmtLegGrp?: IInstrmtLegGrp// [28] NoLegs.555, LegSymbol.600 .. LegFlowScheduleType.1440
  TrdCapDtGrp?: ITrdCapDtGrp[]// [29] TradeDate.75, LastUpdateTime.779, TransactTime.60
  ClearingBusinessDate?: Date// [30] 715 (LocalDate)
  TradingSessionID?: string// [31] 336 (String)
  TradingSessionSubID?: string// [32] 625 (String)
  TimeBracket?: string// [33] 943 (String)
  Side?: string// [34] 54 (String)
  MultiLegReportingType?: string// [35] 442 (String)
  TradeInputSource?: string// [36] 578 (String)
  TradeInputDevice?: string// [37] 579 (String)
  ResponseTransportType?: number// [38] 725 (Int)
  ResponseDestination?: string// [39] 726 (String)
  Text?: string// [40] 58 (String)
  EncodedTextLen?: number// [41] 354 (Int)
  EncodedText?: Buffer// [42] 355 (RawData)
  MessageEventSource?: string// [43] 1011 (String)
  StandardTrailer: IStandardTrailer// [44] SignatureLength.93, Signature.89, CheckSum.10
}
