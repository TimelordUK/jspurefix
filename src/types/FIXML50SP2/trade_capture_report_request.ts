import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ITrdCapDtGrp } from './set/trd_cap_dt_grp'

/*
*************************************************************
* TradeCaptureReportRequest can be found in Volume 5 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ITradeCaptureReportRequest {
  MDStatisticReqID: string// 2452
  LegTradeID?: string// 1894
  SecondaryTradeID?: string// 1
  FirmTradeID?: string// 1041
  SecondaryFirmTradeID?: string// 1042
  RiskLimitRequestType: number// 1760
  SubscriptionRequestType?: string// 263
  MDStatisticRptID?: string// 2453
  SecondaryTradeReportID?: string// 818
  SecondaryExecID?: string// 527
  LegExecID?: string// 1893
  ExecType?: string// 150
  NotAffectedOrderID?: string// 1371
  ClOrdID?: string// 11
  MatchStatus?: string// 573
  TrdType?: number// 828
  SideTrdSubTyp?: number// 1008
  OffsetInstruction?: number// 1849
  TradeHandlingInstr?: string// 1123
  TransferReason?: string// 830
  SecondaryTrdType?: number// 855
  TradeLinkID?: string// 820
  TradeMatchID?: string// 1
  ClearingBusinessDate?: Date// 715
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  TimeBracket?: string// 943
  RelativeValueSide?: number// 2532
  SideMultiLegReportingType?: number// 752
  InputSource?: string// 979
  TradeInputDevice?: string// 579
  ResponseTransportType?: number// 725
  ResponseDestination?: string// 726
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  MessageEventSource?: string// 1011
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  TrdCapDtGrp?: ITrdCapDtGrp[]
}
