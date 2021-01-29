import { IUndSecAltIDGrp } from './und_sec_alt_id_grp'
import { IUnderlyingStipulations } from './underlying_stipulations'
import { IUndlyInstrumentParties } from './undly_instrument_parties'

/*
****************************************************************
* The UnderlyingInstrument component block, like the           *
* Instrument component block, contains all the fields commonly *
* used to describe a security or instrument. In the case of    *
* the UnderlyingInstrument component block it describes an     *
* instrument which underlies the primary instrument Refer to   *
* the Instrument component block comments as this component    *
* block mirrors Instrument, except for the noted fields.       *
****************************************************************
*/
export interface IUnderlyingInstrument {
  UnderlyingSymbol?: string// 311
  UnderlyingSymbolSfx?: string// 312
  UnderlyingSecurityID?: string// 309
  UnderlyingSecurityIDSource?: string// 305
  UndSecAltIDGrp?: IUndSecAltIDGrp[]
  UnderlyingProduct?: number// 462
  UnderlyingCFICode?: string// 463
  UnderlyingSecurityType?: string// 310
  UnderlyingSecuritySubType?: string// 763
  UnderlyingMaturityMonthYear?: string// 313
  UnderlyingMaturityDate?: Date// 542
  UnderlyingMaturityTime?: string// 1213
  UnderlyingCouponPaymentDate?: Date// 241
  UnderlyingIssueDate?: Date// 242
  UnderlyingRepoCollateralSecurityType?: string// 243
  UnderlyingRepurchaseTerm?: number// 244
  UnderlyingRepurchaseRate?: number// 245
  UnderlyingFactor?: number// 246
  UnderlyingCreditRating?: string// 256
  UnderlyingInstrRegistry?: string// 595
  UnderlyingCountryOfIssue?: string// 592
  UnderlyingStateOrProvinceOfIssue?: string// 593
  UnderlyingLocaleOfIssue?: string// 594
  UnderlyingRedemptionDate?: Date// 247
  UnderlyingStrikePrice?: number// 316
  UnderlyingStrikeCurrency?: string// 941
  UnderlyingOptAttribute?: string// 317
  UnderlyingContractMultiplier?: number// 436
  UnderlyingUnitOfMeasure?: string// 998
  UnderlyingUnitOfMeasureQty?: number// 1423
  UnderlyingPriceUnitOfMeasure?: string// 1424
  UnderlyingPriceUnitOfMeasureQty?: number// 1425
  UnderlyingTimeUnit?: string// 1000
  UnderlyingExerciseStyle?: number// 1419
  UnderlyingCouponRate?: number// 435
  UnderlyingSecurityExchange?: string// 308
  UnderlyingIssuer?: string// 306
  EncodedUnderlyingIssuerLen?: number// 362
  EncodedUnderlyingIssuer?: Buffer// 363
  UnderlyingSecurityDesc?: string// 307
  EncodedUnderlyingSecurityDescLen?: number// 364
  EncodedUnderlyingSecurityDesc?: Buffer// 365
  UnderlyingCPProgram?: string// 877
  UnderlyingCPRegType?: string// 878
  UnderlyingAllocationPercent?: number// 972
  UnderlyingCurrency?: string// 318
  UnderlyingQty?: number// 879
  UnderlyingSettlementType?: number// 975
  UnderlyingCashAmount?: number// 973
  UnderlyingCashType?: string// 974
  UnderlyingPx?: number// 810
  UnderlyingDirtyPrice?: number// 882
  UnderlyingEndPrice?: number// 883
  UnderlyingStartValue?: number// 884
  UnderlyingCurrentValue?: number// 885
  UnderlyingEndValue?: number// 886
  UnderlyingStipulations?: IUnderlyingStipulations[]
  UnderlyingAdjustedQuantity?: number// 1044
  UnderlyingFXRate?: number// 1045
  UnderlyingFXRateCalc?: string// 1046
  UnderlyingCapValue?: number// 1038
  UndlyInstrumentParties?: IUndlyInstrumentParties[]
  UnderlyingSettlMethod?: string// 1039
  UnderlyingPutOrCall?: number// 315
  UnderlyingContractMultiplierUnit?: number// 1437
  UnderlyingFlowScheduleType?: number// 1441
  UnderlyingRestructuringType?: string// 1453
  UnderlyingSeniority?: string// 1454
  UnderlyingNotionalPercentageOutstanding?: number// 1455
  UnderlyingOriginalNotionalPercentageOutstanding?: number// 1456
  UnderlyingAttachmentPoint?: number// 1459
  UnderlyingDetachmentPoint?: number// 1460
}
