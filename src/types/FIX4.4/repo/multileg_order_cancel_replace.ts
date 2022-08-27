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
**************************************************************
* Used to modify a multileg order previously submitted using *
* the New Order - Multileg message. See Order Cancel Replace *
* Request for details concerning message usage.              *
**************************************************************
*/
export interface IMultilegOrderCancelReplace {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  OrderID?: string// [2] 37 (String)
  OrigClOrdID: string// [3] 41 (String)
  ClOrdID: string// [4] 11 (String)
  SecondaryClOrdID?: string// [5] 526 (String)
  ClOrdLinkID?: string// [6] 583 (String)
  OrigOrdModTime?: Date// [7] 586 (UtcTimestamp)
  Parties?: IParties[]// [8] PartyID.448, PartyIDSource.447 .. PartySubIDType.803
  TradeOriginationDate?: Date// [9] 229 (LocalDate)
  TradeDate?: Date// [10] 75 (LocalDate)
  Account?: string// [11] 1 (String)
  AcctIDSource?: number// [12] 660 (Int)
  AccountType?: number// [13] 581 (Int)
  DayBookingInst?: string// [14] 589 (String)
  BookingUnit?: string// [15] 590 (String)
  PreallocMethod?: string// [16] 591 (String)
  AllocID?: string// [17] 70 (String)
  PreAllocMlegGrp?: IPreAllocMlegGrp[]// [18] AllocAccount.79, AllocAcctIDSource.661 .. AllocQty.80
  SettlType?: string// [19] 63 (String)
  SettlDate?: Date// [20] 64 (LocalDate)
  CashMargin?: string// [21] 544 (String)
  ClearingFeeIndicator?: string// [22] 635 (String)
  HandlInst?: string// [23] 21 (String)
  ExecInst?: string// [24] 18 (String)
  MinQty?: number// [25] 110 (Float)
  MaxFloor?: number// [26] 111 (Float)
  ExDestination?: string// [27] 100 (String)
  TrdgSesGrp?: ITrdgSesGrp[]// [28] TradingSessionID.336, TradingSessionSubID.625
  ProcessCode?: string// [29] 81 (String)
  Side: string// [30] 54 (String)
  Instrument: IInstrument// [31] Symbol.55, SymbolSfx.65 .. InterestAccrualDate.874
  UndInstrmtGrp?: IUndInstrmtGrp[]// [32] UnderlyingSymbol.311, UnderlyingSymbolSfx.312 .. UnderlyingStipValue.889
  PrevClosePx?: number// [33] 140 (Float)
  LegOrdGrp: ILegOrdGrp[]// [34] LegSymbol.600, LegSymbolSfx.601 .. LegSettlDate.588
  LocateReqd?: boolean// [35] 114 (Boolean)
  TransactTime: Date// [36] 60 (UtcTimestamp)
  QtyType?: number// [37] 854 (Int)
  OrderQtyData: IOrderQtyData// [38] OrderQty.38, CashOrderQty.152 .. RoundingModulus.469
  OrdType: string// [39] 40 (String)
  PriceType?: number// [40] 423 (Int)
  Price?: number// [41] 44 (Float)
  StopPx?: number// [42] 99 (Float)
  Currency?: string// [43] 15 (String)
  ComplianceID?: string// [44] 376 (String)
  SolicitedFlag?: boolean// [45] 377 (Boolean)
  IOIID?: string// [46] 23 (String)
  QuoteID?: string// [47] 117 (String)
  TimeInForce?: string// [48] 59 (String)
  EffectiveTime?: Date// [49] 168 (UtcTimestamp)
  ExpireDate?: Date// [50] 432 (LocalDate)
  ExpireTime?: Date// [51] 126 (UtcTimestamp)
  GTBookingInst?: number// [52] 427 (Int)
  CommissionData?: ICommissionData// [53] Commission.12, CommType.13 .. FundRenewWaiv.497
  OrderCapacity?: string// [54] 528 (String)
  OrderRestrictions?: string// [55] 529 (String)
  CustOrderCapacity?: number// [56] 582 (Int)
  ForexReq?: boolean// [57] 121 (Boolean)
  SettlCurrency?: string// [58] 120 (String)
  BookingType?: number// [59] 775 (Int)
  Text?: string// [60] 58 (String)
  EncodedTextLen?: number// [61] 354 (Int)
  EncodedText?: Buffer// [62] 355 (RawData)
  PositionEffect?: string// [63] 77 (String)
  CoveredOrUncovered?: number// [64] 203 (Int)
  MaxShow?: number// [65] 210 (Float)
  PegInstructions?: IPegInstructions// [66] PegOffsetValue.211, PegMoveType.835 .. PegScope.840
  DiscretionInstructions?: IDiscretionInstructions// [67] DiscretionInst.388, DiscretionOffsetValue.389 .. DiscretionScope.846
  TargetStrategy?: number// [68] 847 (Int)
  TargetStrategyParameters?: string// [69] 848 (String)
  ParticipationRate?: number// [70] 849 (Float)
  CancellationRights?: string// [71] 480 (String)
  MoneyLaunderingStatus?: string// [72] 481 (String)
  RegistID?: string// [73] 513 (String)
  Designation?: string// [74] 494 (String)
  MultiLegRptTypeReq?: number// [75] 563 (Int)
  StandardTrailer: IStandardTrailer// [76] SignatureLength.93, Signature.89, CheckSum.10
}
