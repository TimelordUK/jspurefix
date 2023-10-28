import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ITrdCapDtGrp } from './set/trd_cap_dt_grp'
import { IStandardTrailer } from './set/standard_trailer'

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
  SecondaryExecID?: string// [11] 527 (String)
  ExecID?: string// [12] 17 (String)
  ExecType?: string// [13] 150 (String)
  OrderID?: string// [14] 37 (String)
  ClOrdID?: string// [15] 11 (String)
  MatchStatus?: string// [16] 573 (String)
  TrdType?: number// [17] 828 (Int)
  TrdSubType?: number// [18] 829 (Int)
  OffsetInstruction?: number// [19] 1849 (Int)
  TradeHandlingInstr?: string// [20] 1123 (String)
  TransferReason?: string// [21] 830 (String)
  SecondaryTrdType?: number// [22] 855 (Int)
  TradeLinkID?: string// [23] 820 (String)
  TrdMatchID?: string// [24] 880 (String)
  Parties?: IParties// [25] NoPartyIDs.453, PartyID.448 .. PartySubIDType.803
  Instrument?: IInstrument// [26] Symbol.55, SymbolSfx.65 .. ExchangeLookAlike.2603
  InstrumentExtension?: IInstrumentExtension// [27] DeliveryForm.668, PctAtRisk.869 .. ReferenceDataDateType.2748
  FinancingDetails?: IFinancingDetails// [28] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp// [29] NoUnderlyings.711, UnderlyingSymbol.311 .. UnderlyingInstrumentXID.2631
  InstrmtLegGrp?: IInstrmtLegGrp// [30] NoLegs.555, LegSymbol.600 .. LegMarginRatio.2508
  TrdCapDtGrp?: ITrdCapDtGrp// [31] NoDates.580, TradeDate.75 .. TransactTime.60
  ClearingBusinessDate?: Date// [32] 715 (LocalDate)
  TradingSessionID?: string// [33] 336 (String)
  TradingSessionSubID?: string// [34] 625 (String)
  TimeBracket?: string// [35] 943 (String)
  Side?: string// [36] 54 (String)
  MultiLegReportingType?: string// [37] 442 (String)
  TradeInputSource?: string// [38] 578 (String)
  TradeInputDevice?: string// [39] 579 (String)
  ResponseTransportType?: number// [40] 725 (Int)
  ResponseDestination?: string// [41] 726 (String)
  Text?: string// [42] 58 (String)
  EncodedTextLen?: number// [43] 354 (Length)
  EncodedText?: Buffer// [44] 355 (RawData)
  MessageEventSource?: string// [45] 1011 (String)
  StandardTrailer: IStandardTrailer// [46] SignatureLength.93, Signature.89, CheckSum.10
}
