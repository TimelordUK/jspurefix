import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { IPreAllocMlegGrp } from './set/pre_alloc_mleg_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { ICommissionData } from './set/commission_data'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStandardTrailer } from './set/standard_trailer'

/*
****************************************************************
* The New Order - Multileg is provided to submit orders for    *
* securities that are made up of multiple securities, known as *
* legs.                                                        *
****************************************************************
*/
export interface INewOrderMultileg {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ClOrdID: string// [2] 11 (String)
  SecondaryClOrdID?: string// [3] 526 (String)
  ClOrdLinkID?: string// [4] 583 (String)
  Parties?: IParties[]// [5] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [6] 229 (LocalDate)
  TradeDate?: Date// [7] 75 (LocalDate)
  Account?: string// [8] 1 (String)
  AcctIDSource?: number// [9] 660 (Int)
  AccountType?: number// [10] 581 (Int)
  DayBookingInst?: string// [11] 589 (String)
  BookingUnit?: string// [12] 590 (String)
  PreallocMethod?: string// [13] 591 (String)
  AllocID?: string// [14] 70 (String)
  PreAllocMlegGrp?: IPreAllocMlegGrp[]// [15] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [16] 63 (String)
  SettlDate?: Date// [17] 64 (LocalDate)
  CashMargin?: string// [18] 544 (String)
  ClearingFeeIndicator?: string// [19] 635 (String)
  HandlInst?: string// [20] 21 (String)
  ExecInst?: string// [21] 18 (String)
  MinQty?: number// [22] 110 (Float)
  MaxFloor?: number// [23] 111 (Float)
  ExDestination?: string// [24] 100 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [25] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [26] 81 (String)
  Side: string// [27] 54 (String)
  Instrument: IInstrument// [28] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp[]// [29] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  PrevClosePx?: number// [30] 140 (Float)
  LegOrdGrp: ILegOrdGrp[]// [31] LegSymbol.600, LegSymbolSfx.601 .. LegSettlDate.588
  LocateReqd?: boolean// [32] 114 (Boolean)
  TransactTime: Date// [33] 60 (UtcTimestamp)
  QtyType?: number// [34] 854 (Int)
  OrderQtyData: IOrderQtyData// [35] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [36] 40 (String)
  PriceType?: number// [37] 423 (Int)
  Price?: number// [38] 44 (Float)
  StopPx?: number// [39] 99 (Float)
  Currency?: string// [40] 15 (String)
  ComplianceID?: string// [41] 376 (String)
  SolicitedFlag?: boolean// [42] 377 (Boolean)
  IOIID?: string// [43] 23 (String)
  QuoteID?: string// [44] 117 (String)
  TimeInForce?: string// [45] 59 (String)
  EffectiveTime?: Date// [46] 168 (UtcTimestamp)
  ExpireDate?: Date// [47] 432 (LocalDate)
  ExpireTime?: Date// [48] 126 (UtcTimestamp)
  GTBookingInst?: number// [49] 427 (Int)
  CommissionData?: ICommissionData// [50] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [51] 528 (String)
  OrderRestrictions?: string// [52] 529 (String)
  CustOrderCapacity?: number// [53] 582 (Int)
  ForexReq?: boolean// [54] 121 (Boolean)
  SettlCurrency?: string// [55] 120 (String)
  BookingType?: number// [56] 775 (Int)
  Text?: string// [57] 58 (String)
  EncodedTextLen?: number// [58] 354 (Int)
  EncodedText?: Buffer// [59] 355 (RawData)
  PositionEffect?: string// [60] 77 (String)
  CoveredOrUncovered?: number// [61] 203 (Int)
  MaxShow?: number// [62] 210 (Float)
  PegInstructions?: IPegInstructions// [63] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [64] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [65] 847 (Int)
  TargetStrategyParameters?: string// [66] 848 (String)
  ParticipationRate?: number// [67] 849 (Float)
  CancellationRights?: string// [68] 480 (String)
  MoneyLaunderingStatus?: string// [69] 481 (String)
  RegistID?: string// [70] 513 (String)
  Designation?: string// [71] 494 (String)
  MultiLegRptTypeReq?: number// [72] 563 (Int)
  StandardTrailer: IStandardTrailer// [73] SignatureLength.93, Signature.89, CheckSum.10
}
