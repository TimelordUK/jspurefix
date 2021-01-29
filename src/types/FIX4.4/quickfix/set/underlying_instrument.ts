import { IUndSecAltIDGrp } from './und_sec_alt_id_grp'
import { IUnderlyingStipulations } from './underlying_stipulations'

export interface IUnderlyingInstrument {
  UnderlyingSymbol?: string// 311
  UnderlyingSymbolSfx?: string// 312
  UnderlyingSecurityID?: string// 309
  UnderlyingSecurityIDSource?: string// 305
  UndSecAltIDGrp?: IUndSecAltIDGrp
  UnderlyingProduct?: number// 462
  UnderlyingCFICode?: string// 463
  UnderlyingSecurityType?: string// 310
  UnderlyingSecuritySubType?: string// 763
  UnderlyingMaturityMonthYear?: string// 313
  UnderlyingMaturityDate?: Date// 542
  UnderlyingPutOrCall?: number// 315
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
  UnderlyingCurrency?: string// 318
  UnderlyingQty?: number// 879
  UnderlyingPx?: number// 810
  UnderlyingDirtyPrice?: number// 882
  UnderlyingEndPrice?: number// 883
  UnderlyingStartValue?: number// 884
  UnderlyingCurrentValue?: number// 885
  UnderlyingEndValue?: number// 886
  UnderlyingStipulations?: IUnderlyingStipulations
}
