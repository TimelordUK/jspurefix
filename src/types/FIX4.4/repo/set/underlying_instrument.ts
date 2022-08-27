import { IUndSecAltIDGrp } from './und_sec_alt_id_grp'
import { IUnderlyingStipulations } from './underlying_stipulations'

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
  UnderlyingPutOrCall?: number// [12] 315 (Int)
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
  UnderlyingCouponRate?: number// [29] 435 (Float)
  UnderlyingSecurityExchange?: string// [30] 308 (String)
  UnderlyingIssuer?: string// [31] 306 (String)
  EncodedUnderlyingIssuerLen?: number// [32] 362 (Int)
  EncodedUnderlyingIssuer?: Buffer// [33] 363 (RawData)
  UnderlyingSecurityDesc?: string// [34] 307 (String)
  EncodedUnderlyingSecurityDescLen?: number// [35] 364 (Int)
  EncodedUnderlyingSecurityDesc?: Buffer// [36] 365 (RawData)
  UnderlyingCPProgram?: string// [37] 877 (String)
  UnderlyingCPRegType?: string// [38] 878 (String)
  UnderlyingCurrency?: string// [39] 318 (String)
  UnderlyingQty?: number// [40] 879 (Float)
  UnderlyingPx?: number// [41] 810 (Float)
  UnderlyingDirtyPrice?: number// [42] 882 (Float)
  UnderlyingEndPrice?: number// [43] 883 (Float)
  UnderlyingStartValue?: number// [44] 884 (Float)
  UnderlyingCurrentValue?: number// [45] 885 (Float)
  UnderlyingEndValue?: number// [46] 886 (Float)
  UnderlyingStipulations?: IUnderlyingStipulations[]// [47] UnderlyingStipType.888, UnderlyingStipValue.889
}
