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
  UnderlyingSymbol?: string// [1] 311 (String)
  UnderlyingSymbolSfx?: string// [2] 312 (String)
  UnderlyingSecurityID?: string// [3] 309 (String)
  UnderlyingSecurityIDSource?: string// [4] 305 (String)
  UndSecAltIDGrp?: IUndSecAltIDGrp[]// [5] UnderlyingSecurityAltID.458, UnderlyingSecurityAltIDSource.459
  UnderlyingProduct?: number// [6] 462 (Int)
  UnderlyingCFICode?: string// [7] 463 (String)
  UnderlyingSecurityType?: string// [8] 310 (String)
  UnderlyingSecuritySubType?: string// [9] 763 (String)
  UnderlyingMaturityMonthYear?: string// [10] 313 (String)
  UnderlyingMaturityDate?: Date// [11] 542 (LocalDate)
  UnderlyingMaturityTime?: string// [12] 1213 (String)
  UnderlyingCouponPaymentDate?: Date// [13] 241 (LocalDate)
  UnderlyingIssueDate?: Date// [14] 242 (LocalDate)
  UnderlyingRepoCollateralSecurityType?: string// [15] 243 (String)
  UnderlyingRepurchaseTerm?: number// [16] 244 (Int)
  UnderlyingRepurchaseRate?: number// [17] 245 (Float)
  UnderlyingFactor?: number// [18] 246 (Float)
  UnderlyingCreditRating?: string// [19] 256 (String)
  UnderlyingInstrRegistry?: string// [20] 595 (String)
  UnderlyingCountryOfIssue?: string// [21] 592 (String)
  UnderlyingStateOrProvinceOfIssue?: string// [22] 593 (String)
  UnderlyingLocaleOfIssue?: string// [23] 594 (String)
  UnderlyingRedemptionDate?: Date// [24] 247 (LocalDate)
  UnderlyingStrikePrice?: number// [25] 316 (Float)
  UnderlyingStrikeCurrency?: string// [26] 941 (String)
  UnderlyingOptAttribute?: string// [27] 317 (String)
  UnderlyingContractMultiplier?: number// [28] 436 (Float)
  UnderlyingUnitOfMeasure?: string// [29] 998 (String)
  UnderlyingUnitOfMeasureQty?: number// [30] 1423 (Float)
  UnderlyingPriceUnitOfMeasure?: string// [31] 1424 (String)
  UnderlyingPriceUnitOfMeasureQty?: number// [32] 1425 (Float)
  UnderlyingTimeUnit?: string// [33] 1000 (String)
  UnderlyingExerciseStyle?: number// [34] 1419 (Int)
  UnderlyingCouponRate?: number// [35] 435 (Float)
  UnderlyingSecurityExchange?: string// [36] 308 (String)
  UnderlyingIssuer?: string// [37] 306 (String)
  EncodedUnderlyingIssuerLen?: number// [38] 362 (Int)
  EncodedUnderlyingIssuer?: Buffer// [39] 363 (RawData)
  UnderlyingSecurityDesc?: string// [40] 307 (String)
  EncodedUnderlyingSecurityDescLen?: number// [41] 364 (Int)
  EncodedUnderlyingSecurityDesc?: Buffer// [42] 365 (RawData)
  UnderlyingCPProgram?: string// [43] 877 (String)
  UnderlyingCPRegType?: string// [44] 878 (String)
  UnderlyingAllocationPercent?: number// [45] 972 (Float)
  UnderlyingCurrency?: string// [46] 318 (String)
  UnderlyingQty?: number// [47] 879 (Float)
  UnderlyingSettlementType?: number// [48] 975 (Int)
  UnderlyingCashAmount?: number// [49] 973 (Float)
  UnderlyingCashType?: string// [50] 974 (String)
  UnderlyingPx?: number// [51] 810 (Float)
  UnderlyingDirtyPrice?: number// [52] 882 (Float)
  UnderlyingEndPrice?: number// [53] 883 (Float)
  UnderlyingStartValue?: number// [54] 884 (Float)
  UnderlyingCurrentValue?: number// [55] 885 (Float)
  UnderlyingEndValue?: number// [56] 886 (Float)
  UnderlyingStipulations?: IUnderlyingStipulations[]// [57] UnderlyingStipType.888, UnderlyingStipValue.889
  UnderlyingAdjustedQuantity?: number// [58] 1044 (Float)
  UnderlyingFXRate?: number// [59] 1045 (Float)
  UnderlyingFXRateCalc?: string// [60] 1046 (String)
  UnderlyingCapValue?: number// [61] 1038 (Float)
  UndlyInstrumentParties?: IUndlyInstrumentParties[]// [62] UnderlyingInstrumentPartyID.1059, UnderlyingInstrumentPartyIDSource.1060 .. UnderlyingInstrumentPartySubIDType.1064
  UnderlyingSettlMethod?: string// [63] 1039 (String)
  UnderlyingPutOrCall?: number// [64] 315 (Int)
  UnderlyingContractMultiplierUnit?: number// [65] 1437 (Int)
  UnderlyingFlowScheduleType?: number// [66] 1441 (Int)
  UnderlyingRestructuringType?: string// [67] 1453 (String)
  UnderlyingSeniority?: string// [68] 1454 (String)
  UnderlyingNotionalPercentageOutstanding?: number// [69] 1455 (Float)
  UnderlyingOriginalNotionalPercentageOutstanding?: number// [70] 1456 (Float)
  UnderlyingAttachmentPoint?: number// [71] 1459 (Float)
  UnderlyingDetachmentPoint?: number// [72] 1460 (Float)
}
