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
**************************************************************
* MultilegOrderCancelReplace can be found in Volume 4 of the *
*                                                            *
* specification                                              *
**************************************************************
*/
export interface IMultilegOrderCancelReplace {
  OrderID?: string// 37
  OrderRequestID?: number// 2422
  OrigClOrdID?: string// 41
  ClOrdID?: string// 11
  SecondaryClOrdID?: string// 526
  ClOrdLinkID?: string// 583
  OrigOrdModTime?: Date// 586
  TradeOriginationDate?: Date// 229
  TradeDate?: Date// 75
  Account?: string// 1
  AcctIDSource?: number// 660
  AccountType?: number// 581
  DayBookingInst?: string// 589
  BookingUnit?: string// 590
  PreallocMethod?: string// 591
  AllocID?: string// 70
  SettlType?: string// 63
  SettlDate?: Date// 64
  CashMargin?: string// 544
  ClearingFeeIndicator?: string// 635
  HandlInst?: string// 21
  ExecInst?: string// 18
  AuctionInstruction?: number// 1805
  MinQty?: number// 110
  MinQtyMethod?: number// 1822
  MatchIncrement?: number// 1089
  MaxPriceLevels?: number// 1090
  MaximumPricePercentage?: number// 2676
  SelfMatchPreventionID?: string// 2362
  MaxFloor?: number// 111
  MarketSegmentID?: string// 1300
  ExDestination?: string// 100
  ExDestinationIDSource?: string// 1133
  ExDestinationType?: number// 2704
  ProcessCode?: string// 81
  Side: string// 54
  ShortMarkingExemptIndicator?: boolean// 2102
  PrevClosePx?: number// 140
  SwapPoints?: number// 1069
  LocateReqd?: boolean// 114
  TransactTime: Date// 60
  QtyType?: number// 854
  OrdType: string// 40
  MultilegModel?: number// 1377
  MultilegPriceMethod?: number// 1378
  PriceType?: number// 423
  Price?: number// 44
  PriceProtectionScope?: string// 1092
  StopPx?: number// 99
  Currency?: string// 15
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: number// 2351
  EncodedComplianceText?: Buffer// 2352
  SolicitedFlag?: boolean// 377
  IOIID?: string// 23
  QuoteID?: string// 117
  TimeInForce?: string// 59
  EffectiveTime?: Date// 168
  ExpireDate?: Date// 432
  ExpireTime?: Date// 126
  GTBookingInst?: number// 427
  ExposureDuration?: number// 1629
  ExposureDurationUnit?: number// 1916
  OrderCapacity?: string// 528
  OrderRestrictions?: string// 529
  TradingCapacity?: number// 1815
  PreTradeAnonymity?: boolean// 1091
  TradePublishIndicator?: number// 1390
  CustOrderCapacity?: number// 582
  OrderOrigination?: number// 1724
  ForexReq?: boolean// 121
  SettlCurrency?: string// 120
  BookingType?: number// 775
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  ClearingAccountType?: number// 1816
  PositionEffect?: string// 77
  CoveredOrUncovered?: number// 203
  MaxShow?: number// 210
  TargetStrategy?: number// 847
  TargetStrategyParameters?: string// 848
  RiskFreeRate?: number// 1190
  ParticipationRate?: number// 849
  CancellationRights?: string// 480
  MoneyLaunderingStatus?: string// 481
  RegistID?: string// 513
  Designation?: string// 494
  OwnerType?: number// 522
  OrderOwnershipIndicator?: number// 2679
  MultiLegRptTypeReq?: number// 563
  ThrottleInst?: number// 1685
  AuctionType?: number// 1803
  AuctionAllocationPct?: number// 1804
  RelatedHighPrice?: number// 1819
  RelatedLowPrice?: number// 1820
  RelatedPriceSource?: number// 1821
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  PreAllocMlegGrp?: IPreAllocMlegGrp[]
  ValueChecksGrp?: IValueChecksGrp[]
  MatchingInstructions?: IMatchingInstructions[]
  DisplayInstruction?: IDisplayInstruction
  DisclosureInstructionGrp?: IDisclosureInstructionGrp[]
  TrdgSesGrp?: ITrdgSesGrp[]
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  LegOrdGrp?: ILegOrdGrp[]
  OrderQtyData?: IOrderQtyData
  TriggeringInstruction?: ITriggeringInstruction
  CommissionData?: ICommissionData
  CommissionDataGrp?: ICommissionDataGrp[]
  OrderAttributeGrp?: IOrderAttributeGrp[]
  PegInstructions?: IPegInstructions
  DiscretionInstructions?: IDiscretionInstructions
  StrategyParametersGrp?: IStrategyParametersGrp[]
}
