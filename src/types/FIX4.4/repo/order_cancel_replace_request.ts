import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocGrp } from './set/pre_alloc_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
**********************************************************
* The order cancel/replace request is used to change the *
* parameters of an existing order.                       *
**********************************************************
*/
export interface IOrderCancelReplaceRequest {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  Parties?: IParties[]// [3] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [4] 229 (LocalDate)
  TradeDate?: Date// [5] 75 (LocalDate)
  OrigClOrdID: string// [6] 41 (String)
  ClOrdID: string// [7] 11 (String)
  SecondaryClOrdID?: string// [8] 526 (String)
  ClOrdLinkID?: string// [9] 583 (String)
  ListID?: string// [10] 66 (String)
  OrigOrdModTime?: Date// [11] 586 (UtcTimestamp)
  Account?: string// [12] 1 (String)
  AcctIDSource?: number// [13] 660 (Int)
  AccountType?: number// [14] 581 (Int)
  DayBookingInst?: string// [15] 589 (String)
  BookingUnit?: string// [16] 590 (String)
  PreallocMethod?: string// [17] 591 (String)
  AllocID?: string// [18] 70 (String)
  PreAllocGrp?: IPreAllocGrp[]// [19] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [20] 63 (String)
  SettlDate?: Date// [21] 64 (LocalDate)
  CashMargin?: string// [22] 544 (String)
  ClearingFeeIndicator?: string// [23] 635 (String)
  HandlInst?: string// [24] 21 (String)
  ExecInst?: string// [25] 18 (String)
  MinQty?: number// [26] 110 (Float)
  MaxFloor?: number// [27] 111 (Float)
  ExDestination?: string// [28] 100 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [29] TradingSessionID.336, TradingSessionSubID.625
  Instrument: IInstrument// [30] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  FinancingDetails?: IFinancingDetails// [31] AgreementDesc.913, AgreementID.914 .. MarginRatio.898
  UndInstrmtGrp?: IUndInstrmtGrp[]// [32] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  Side: string// [33] 54 (String)
  TransactTime: Date// [34] 60 (UtcTimestamp)
  QtyType?: number// [35] 854 (Int)
  OrderQtyData: IOrderQtyData// [36] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [37] 40 (String)
  PriceType?: number// [38] 423 (Int)
  Price?: number// [39] 44 (Float)
  StopPx?: number// [40] 99 (Float)
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData// [41] Spread.218, BenchmarkCurveCurrency.220 .. BenchmarkSecurityIDSource.761
  YieldData?: IYieldData// [42] YieldType.235, Yield.236 .. YieldRedemptionPriceType.698
  PegInstructions?: IPegInstructions// [43] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [44] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [45] 847 (Int)
  TargetStrategyParameters?: string// [46] 848 (String)
  ParticipationRate?: number// [47] 849 (Float)
  ComplianceID?: string// [48] 376 (String)
  SolicitedFlag?: boolean// [49] 377 (Boolean)
  Currency?: string// [50] 15 (String)
  TimeInForce?: string// [51] 59 (String)
  EffectiveTime?: Date// [52] 168 (UtcTimestamp)
  ExpireDate?: Date// [53] 432 (LocalDate)
  ExpireTime?: Date// [54] 126 (UtcTimestamp)
  GTBookingInst?: number// [55] 427 (Int)
  CommissionData?: ICommissionData// [56] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [57] 528 (String)
  OrderRestrictions?: string// [58] 529 (String)
  CustOrderCapacity?: number// [59] 582 (Int)
  ForexReq?: boolean// [60] 121 (Boolean)
  SettlCurrency?: string// [61] 120 (String)
  BookingType?: number// [62] 775 (Int)
  Text?: string// [63] 58 (String)
  EncodedTextLen?: number// [64] 354 (Int)
  EncodedText?: Buffer// [65] 355 (RawData)
  SettlDate2?: Date// [66] 193 (LocalDate)
  OrderQty2?: number// [67] 192 (Float)
  Price2?: number// [68] 640 (Float)
  PositionEffect?: string// [69] 77 (String)
  CoveredOrUncovered?: number// [70] 203 (Int)
  MaxShow?: number// [71] 210 (Float)
  LocateReqd?: boolean// [72] 114 (Boolean)
  CancellationRights?: string// [73] 480 (String)
  MoneyLaunderingStatus?: string// [74] 481 (String)
  RegistID?: string// [75] 513 (String)
  Designation?: string// [76] 494 (String)
  StandardTrailer: IStandardTrailer// [77] SignatureLength.93, Signature.89, CheckSum.10
}
