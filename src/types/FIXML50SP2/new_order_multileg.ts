import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IPreAllocMlegGrp } from './set/pre_alloc_mleg_grp'
import { IValueChecksGrp } from './set/value_checks_grp'
import { IMatchingInstructions } from './set/matching_instructions'
import { IDisplayInstruction } from './set/display_instruction'
import { IDisclosureInstructionGrp } from './set/disclosure_instruction_grp'
import { ITrdgSesGrp } from './set/trdg_ses_grp'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { ILegOrdGrp } from './set/leg_ord_grp'
import { IOrderQtyData } from './set/order_qty_data'
import { ITriggeringInstruction } from './set/triggering_instruction'
import { ICommissionData } from './set/commission_data'
import { ICommissionDataGrp } from './set/commission_data_grp'
import { IOrderAttributeGrp } from './set/order_attribute_grp'
import { IPegInstructions } from './set/peg_instructions'
import { IDiscretionInstructions } from './set/discretion_instructions'
import { IStrategyParametersGrp } from './set/strategy_parameters_grp'

/*
****************************************************
* NewOrderMultileg can be found in Volume 4 of the *
*                                                  *
* specification                                    *
****************************************************
*/
export interface INewOrderMultileg {
  ClOrdID: string// [2] 11 (String)
  OrderRequestID?: number// [2] 2422 (Int)
  SecondaryClOrdID?: string// [2] 526 (String)
  ClOrdLinkID?: string// [2] 583 (String)
  TradeOriginationDate?: Date// [2] 229 (LocalDate)
  TradeDate?: Date// [2] 75 (LocalDate)
  Account?: string// [2] 1 (String)
  AcctIDSource?: number// [2] 660 (Int)
  AccountType?: number// [2] 581 (Int)
  DayBookingInst?: string// [2] 589 (String)
  BookingUnit?: string// [2] 590 (String)
  PreallocMethod?: string// [2] 591 (String)
  AllocID?: string// [2] 70 (String)
  SettlType?: string// [2] 63 (String)
  SettlDate?: Date// [2] 64 (LocalDate)
  CashMargin?: string// [2] 544 (String)
  ClearingFeeIndicator?: string// [2] 635 (String)
  HandlInst?: string// [2] 21 (String)
  ExecInst?: string// [2] 18 (String)
  AuctionInstruction?: number// [2] 1805 (Int)
  MinQty?: number// [2] 110 (Float)
  MinQtyMethod?: number// [2] 1822 (Int)
  MatchIncrement?: number// [2] 1089 (Float)
  MaxPriceLevels?: number// [2] 1090 (Int)
  MaximumPricePercentage?: number// [2] 2676 (Float)
  SelfMatchPreventionID?: string// [2] 2362 (String)
  MaxFloor?: number// [2] 111 (Float)
  MarketSegmentID?: string// [2] 1300 (String)
  ExDestination?: string// [2] 100 (String)
  ExDestinationIDSource?: string// [2] 1133 (String)
  ExDestinationType?: number// [2] 2704 (Int)
  ProcessCode?: string// [2] 81 (String)
  Side: string// [2] 54 (String)
  ShortMarkingExemptIndicator?: boolean// [2] 2102 (Boolean)
  PrevClosePx?: number// [2] 140 (Float)
  SwapPoints?: number// [2] 1069 (Float)
  LocateReqd?: boolean// [2] 114 (Boolean)
  TransactTime: Date// [2] 60 (UtcTimestamp)
  QtyType?: number// [2] 854 (Int)
  OrdType: string// [2] 40 (String)
  MultilegModel?: number// [2] 1377 (Int)
  MultilegPriceMethod?: number// [2] 1378 (Int)
  PriceType?: number// [2] 423 (Int)
  Price?: number// [2] 44 (Float)
  PriceProtectionScope?: string// [2] 1092 (String)
  StopPx?: number// [2] 99 (Float)
  Currency?: string// [2] 15 (String)
  TradePriceNegotiationMethod?: number// [2] 1740 (Int)
  UpfrontPriceType?: number// [2] 1741 (Int)
  UpfrontPrice?: number// [2] 1742 (Float)
  ComplianceID?: string// [2] 376 (String)
  ComplianceText?: string// [2] 2404 (String)
  EncodedComplianceTextLen?: number// [2] 2351 (Length)
  EncodedComplianceText?: Buffer// [2] 2352 (RawData)
  SolicitedFlag?: boolean// [2] 377 (Boolean)
  IOIID?: string// [2] 23 (String)
  QuoteID?: string// [2] 117 (String)
  RefOrderID?: string// [2] 1080 (String)
  RefOrderIDSource?: string// [2] 1081 (String)
  RefClOrdID?: string// [2] 1806 (String)
  TimeInForce?: string// [2] 59 (String)
  EffectiveTime?: Date// [2] 168 (UtcTimestamp)
  ExpireDate?: Date// [2] 432 (LocalDate)
  ExpireTime?: Date// [2] 126 (UtcTimestamp)
  GTBookingInst?: number// [2] 427 (Int)
  ExposureDuration?: number// [2] 1629 (Int)
  ExposureDurationUnit?: number// [2] 1916 (Int)
  OrderCapacity?: string// [2] 528 (String)
  OrderRestrictions?: string// [2] 529 (String)
  TradingCapacity?: number// [2] 1815 (Int)
  PreTradeAnonymity?: boolean// [2] 1091 (Boolean)
  TradePublishIndicator?: number// [2] 1390 (Int)
  CustOrderCapacity?: number// [2] 582 (Int)
  OrderOrigination?: number// [2] 1724 (Int)
  ForexReq?: boolean// [2] 121 (Boolean)
  SettlCurrency?: string// [2] 120 (String)
  BookingType?: number// [2] 775 (Int)
  Text?: string// [2] 58 (String)
  EncodedTextLen?: number// [2] 354 (Length)
  EncodedText?: Buffer// [2] 355 (RawData)
  ClearingAccountType?: number// [2] 1816 (Int)
  PositionEffect?: string// [2] 77 (String)
  CoveredOrUncovered?: number// [2] 203 (Int)
  MaxShow?: number// [2] 210 (Float)
  TargetStrategy?: number// [2] 847 (Int)
  TargetStrategyParameters?: string// [2] 848 (String)
  RiskFreeRate?: number// [2] 1190 (Float)
  ParticipationRate?: number// [2] 849 (Float)
  CancellationRights?: string// [2] 480 (String)
  MoneyLaunderingStatus?: string// [2] 481 (String)
  RegistID?: string// [2] 513 (String)
  Designation?: string// [2] 494 (String)
  MultiLegRptTypeReq?: number// [2] 563 (Int)
  ThrottleInst?: number// [2] 1685 (Int)
  AuctionType?: number// [2] 1803 (Int)
  AuctionAllocationPct?: number// [2] 1804 (Float)
  RelatedHighPrice?: number// [2] 1819 (Float)
  RelatedLowPrice?: number// [2] 1820 (Float)
  RelatedPriceSource?: number// [2] 1821 (Int)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  Parties?: IParties[]// [2] ID.448, Src.447 .. Qual.2376
  TargetParties?: ITargetParties[]// [3] ID.1462, Src.1463 .. Qual.1818
  PreAllocMlegGrp?: IPreAllocMlegGrp[]// [4] Acct.79, ActIDSrc.661 .. CurCostBasis.1755
  ValueChecksGrp?: IValueChecksGrp[]// [5] Typ.1869, Actn.1870
  MatchingInstructions?: IMatchingInstructions[]// [6] Inst.1625, MktID.1673 .. Valu.1627
  DisplayInstruction?: IDisplayInstruction// [7] DisplayQty.1138, SecDspQty.1082 .. RfrshQty.1088
  DisclosureInstructionGrp?: IDisclosureInstructionGrp[]// [8] Typ.139, Inst.1814
  TrdgSesGrp?: ITrdgSesGrp[]// [9] SesID.336, SesSub.625
  Instrument?: IInstrument// [10] Sym.55, Sfx.65 .. ExchLookAlike.2603
  UndInstrmtGrp?: IUndInstrmtGrp[]// [11] Sym.311, Sfx.312 .. XID.2631
  LegOrdGrp?: ILegOrdGrp[]// [12] OrdQty.685, Qty.687 .. ShrtSaleExmptnRsn.1689
  OrderQtyData?: IOrderQtyData// [13] Qty.38, Cash.152 .. RndMod.469
  TriggeringInstruction?: ITriggeringInstruction// [14] TrgrTyp.1100, TrgrActn.1101 .. TrgrTrdSessSubID.1114
  CommissionData?: ICommissionData// [15] Comm.12, CommTyp.13 .. FundRenewWaiv.497
  CommissionDataGrp?: ICommissionDataGrp[]// [16] Amt.2640, Typ.2641 .. EncDesc.2652
  OrderAttributeGrp?: IOrderAttributeGrp[]// [17] Typ.139, Val.2595
  PegInstructions?: IPegInstructions// [18] OfstVal.211, PegPxTyp.1094 .. PegSecDesc.1099
  DiscretionInstructions?: IDiscretionInstructions// [19] DsctnInst.388, OfstValu.389 .. Scope.846
  StrategyParametersGrp?: IStrategyParametersGrp[]// [20] StrtPrmNme.958, StrtPrmTyp.959, StrtPrmVal.960
}
