import { IStandardHeader } from './set/standard_header'
import { IInstrument } from './set/instrument'
import { IInstrumentExtension } from './set/instrument_extension'
import { IFinancingDetails } from './set/financing_details'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IRelatedInstrumentGrp } from './set/related_instrument_grp'
import { IStipulations } from './set/stipulations'
import { IInstrmtLegGrp } from './set/instrmt_leg_grp'
import { ISpreadOrBenchmarkCurveData } from './set/spread_or_benchmark_curve_data'
import { IYieldData } from './set/yield_data'

/*
*************************************************************
* SecurityDefinitionRequest can be found in Volume 3 of the *
*                                                           *
* specification                                             *
*************************************************************
*/
export interface ISecurityDefinitionRequest {
  MDStatisticReqID: string// 2452
  RiskLimitRequestType: number// 1760
  SideCollateralAmountMarketID?: string// 2692
  SideCollateralAmountMarketSegmentID?: string// 2693
  UnderlyingReturnRatePriceCurrency?: string// 43067
  ComplianceID?: string// 376
  ComplianceText?: string// 2404
  EncodedComplianceTextLen?: string// 2351
  EncodedComplianceText?: Buffer// 2352
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  TradingSessionID?: string// 336
  TradingSessionSubID?: string// 625
  ExpirationCycle?: number// 827
  SubscriptionRequestType?: string// 263
  StandardHeader?: IStandardHeader
  Instrument?: IInstrument
  InstrumentExtension?: IInstrumentExtension
  FinancingDetails?: IFinancingDetails
  UndInstrmtGrp?: IUndInstrmtGrp[]
  RelatedInstrumentGrp?: IRelatedInstrumentGrp[]
  Stipulations?: IStipulations[]
  InstrmtLegGrp?: IInstrmtLegGrp[]
  SpreadOrBenchmarkCurveData?: ISpreadOrBenchmarkCurveData
  YieldData?: IYieldData
}
