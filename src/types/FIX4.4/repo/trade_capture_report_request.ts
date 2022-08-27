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
* Trade Capture Reporting allows sell-side firms (broker,    *
* exchange, ECN) to provide timely reporting of completed    *
* trades to an external entity not involved in the execution *
* of the trade.                                              *
**************************************************************
*/
export interface ITradeCaptureReportRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  TradeRequestID: string// [2] 568 (String)
  TradeRequestType: number// [3] 569 (Int)
  SubscriptionRequestType?: string// [4] 263 (String)
  TradeReportID?: string// [5] 571 (String)
  SecondaryTradeReportID?: string// [6] 818 (String)
  ExecID?: string// [7] 17 (String)
  ExecType?: string// [8] 150 (String)
  OrderID?: string// [9] 37 (String)
  ClOrdID?: string// [10] 11 (String)
  MatchStatus?: string// [11] 573 (String)
  TrdType?: number// [12] 828 (Int)
  TrdSubType?: number// [13] 829 (Int)
  TransferReason?: string// [14] 830 (String)
  SecondaryTrdType?: number// [15] 855 (Int)
  TradeLinkID?: string// [16] 820 (String)
  TrdMatchID?: string// [17] 880 (String)
  Parties?: IParties[]// [18] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  Instrument?: IInstrument// [19] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  InstrumentExtension?: IInstrumentExtension// [20] DeliveryForm.668, PctAtRisk.869 .. InstrAttribValue.872
  FinancingDetails?: IFinancingDetails// [21] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [22] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  InstrmtLegGrp?: IInstrmtLegGrp[]// [23] LegSymbol.600, LegSymbolSfx.601 .. LegInterestAccrualDate.956
  TrdCapDtGrp?: ITrdCapDtGrp[]// [24] TradeDate.75, TransactTime.60
  ClearingBusinessDate?: Date// [25] 715 (LocalDate)
  TradingSessionID?: string// [26] 336 (String)
  TradingSessionSubID?: string// [27] 625 (String)
  TimeBracket?: string// [28] 943 (String)
  Side?: string// [29] 54 (String)
  MultiLegReportingType?: string// [30] 442 (String)
  TradeInputSource?: string// [31] 578 (String)
  TradeInputDevice?: string// [32] 579 (String)
  ResponseTransportType?: number// [33] 725 (Int)
  ResponseDestination?: string// [34] 726 (String)
  Text?: string// [35] 58 (String)
  EncodedTextLen?: number// [36] 354 (Int)
  EncodedText?: Buffer// [37] 355 (RawData)
  StandardTrailer: IStandardTrailer// [38] SignatureLength.93, Signature.89, CheckSum.10
}
