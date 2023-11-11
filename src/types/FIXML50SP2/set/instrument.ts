import { ISecAltIDGrp } from './sec_alt_id_grp'
import { ISecondaryAssetGrp } from './secondary_asset_grp'
import { IAssetAttributeGrp } from './asset_attribute_grp'
import { ISecurityXML } from './security_xml'
import { IEvntGrp } from './evnt_grp'
import { IInstrumentParties } from './instrument_parties'
import { IComplexEvents } from './complex_events'
import { IDateAdjustment } from './date_adjustment'
import { IPricingDateTime } from './pricing_date_time'
import { IMarketDisruption } from './market_disruption'
import { IOptionExercise } from './option_exercise'
import { IStreamGrp } from './stream_grp'
import { IProvisionGrp } from './provision_grp'
import { IAdditionalTermGrp } from './additional_term_grp'
import { IProtectionTermGrp } from './protection_term_grp'
import { ICashSettlTermGrp } from './cash_settl_term_grp'
import { IPhysicalSettlTermGrp } from './physical_settl_term_grp'
import { IExtraordinaryEventGrp } from './extraordinary_event_grp'

export interface IInstrument {
  Symbol?: string// [1] 55 (String)
  SymbolSfx?: string// [1] 65 (String)
  SecurityID?: string// [1] 48 (String)
  SecurityIDSource?: string// [1] 22 (String)
  Product?: number// [1] 460 (Int)
  ProductComplex?: string// [1] 1227 (String)
  SecurityGroup?: string// [1] 1151 (String)
  CFICode?: string// [1] 461 (String)
  SecurityType?: string// [1] 167 (String)
  SecuritySubType?: string// [1] 762 (String)
  MaturityMonthYear?: string// [1] 200 (String)
  MaturityDate?: Date// [1] 541 (LocalDate)
  MaturityTime?: string// [1] 1079 (String)
  SettleOnOpenFlag?: string// [1] 966 (String)
  InstrmtAssignmentMethod?: string// [1] 1049 (String)
  SecurityStatus?: string// [1] 965 (String)
  CouponPaymentDate?: Date// [1] 224 (LocalDate)
  RestructuringType?: string// [1] 1449 (String)
  Seniority?: string// [1] 1450 (String)
  NotionalPercentageOutstanding?: number// [1] 1451 (Float)
  OriginalNotionalPercentageOutstanding?: number// [1] 1452 (Float)
  AttachmentPoint?: number// [1] 1457 (Float)
  DetachmentPoint?: number// [1] 1458 (Float)
  ObligationType?: string// [1] 1739 (String)
  AssetGroup?: number// [1] 2210 (Int)
  AssetClass?: number// [1] 1938 (Int)
  AssetSubClass?: number// [1] 1939 (Int)
  AssetType?: string// [1] 1940 (String)
  SwapClass?: string// [1] 1941 (String)
  SwapSubClass?: string// [1] 1575 (String)
  NthToDefault?: number// [1] 1942 (Int)
  MthToDefault?: number// [1] 1943 (Int)
  SettledEntityMatrixSource?: string// [1] 1944 (String)
  SettledEntityMatrixPublicationDate?: Date// [1] 1945 (LocalDate)
  CouponType?: number// [1] 1946 (Int)
  TotalIssuedAmount?: number// [1] 1947 (Float)
  CouponFrequencyPeriod?: number// [1] 1948 (Int)
  CouponFrequencyUnit?: string// [1] 1949 (String)
  CouponDayCount?: number// [1] 1950 (Int)
  ConvertibleBondEquityID?: string// [1] 1951 (String)
  ConvertibleBondEquityIDSource?: string// [1] 1952 (String)
  ContractPriceRefMonth?: string// [1] 1953 (String)
  LienSeniority?: number// [1] 1954 (Int)
  LoanFacility?: number// [1] 1955 (Int)
  ReferenceEntityType?: number// [1] 1956 (Int)
  IndexSeries?: number// [1] 1957 (Int)
  IndexAnnexVersion?: number// [1] 1958 (Int)
  IndexAnnexDate?: Date// [1] 1959 (LocalDate)
  IndexAnnexSource?: string// [1] 1960 (String)
  SettlRateIndex?: string// [1] 1577 (String)
  SettlRateIndexLocation?: string// [1] 1580 (String)
  OptionExpirationDesc?: string// [1] 1581 (String)
  EncodedOptionExpirationDescLen?: number// [1] 1678 (Length)
  EncodedOptionExpirationDesc?: Buffer// [1] 1697 (RawData)
  IssueDate?: Date// [1] 225 (LocalDate)
  RepoCollateralSecurityType?: string// [1] 239 (String)
  RepurchaseTerm?: number// [1] 226 (Int)
  RepurchaseRate?: number// [1] 227 (Float)
  Factor?: number// [1] 228 (Float)
  CreditRating?: string// [1] 255 (String)
  InstrRegistry?: string// [1] 543 (String)
  CountryOfIssue?: string// [1] 470 (String)
  StateOrProvinceOfIssue?: string// [1] 471 (String)
  LocaleOfIssue?: string// [1] 472 (String)
  RedemptionDate?: Date// [1] 240 (LocalDate)
  StrikePrice?: number// [1] 202 (Float)
  OrigStrikePrice?: number// [1] 2578 (Float)
  StrikePricePrecision?: number// [1] 2577 (Int)
  StrikeCurrency?: string// [1] 947 (String)
  StrikeMultiplier?: number// [1] 967 (Float)
  StrikeValue?: number// [1] 968 (Float)
  StrikeUnitOfMeasure?: string// [1] 1698 (String)
  StrikeIndex?: string// [1] 1866 (String)
  StrikeIndexCurvePoint?: string// [1] 2600 (String)
  StrikeIndexSpread?: number// [1] 2001 (Float)
  StrikeIndexQuote?: number// [1] 2601 (Int)
  StrikePriceDeterminationMethod?: number// [1] 1478 (Int)
  StrikePriceBoundaryMethod?: number// [1] 1479 (Int)
  StrikePriceBoundaryPrecision?: number// [1] 1480 (Float)
  UnderlyingPriceDeterminationMethod?: number// [1] 1481 (Int)
  OptAttribute?: string// [1] 206 (String)
  ContractMultiplier?: number// [1] 231 (Float)
  ContractMultiplierUnit?: number// [1] 1435 (Int)
  TradingUnitPeriodMultiplier?: number// [1] 2353 (Int)
  FlowScheduleType?: number// [1] 1439 (Int)
  MinPriceIncrement?: number// [1] 969 (Float)
  MinPriceIncrementAmount?: number// [1] 1146 (Float)
  UnitOfMeasure?: string// [1] 996 (String)
  UnitOfMeasureQty?: number// [1] 1147 (Float)
  UnitOfMeasureCurrency?: string// [1] 1716 (String)
  PriceUnitOfMeasure?: string// [1] 1191 (String)
  PriceUnitOfMeasureQty?: number// [1] 1192 (Float)
  PriceUnitOfMeasureCurrency?: string// [1] 1717 (String)
  SettlMethod?: string// [1] 1193 (String)
  SettlSubMethod?: number// [1] 2579 (Int)
  ExerciseStyle?: number// [1] 1194 (Int)
  OptPayoutType?: number// [1] 1482 (Int)
  OptPayoutAmount?: number// [1] 1195 (Float)
  PriceQuoteMethod?: string// [1] 1196 (String)
  ValuationMethod?: string// [1] 1197 (String)
  ValuationSource?: string// [1] 2002 (String)
  ValuationReferenceModel?: string// [1] 2140 (String)
  PriceQuoteCurrency?: string// [1] 1524 (String)
  ListMethod?: number// [1] 1198 (Int)
  CapPrice?: number// [1] 1199 (Float)
  FloorPrice?: number// [1] 1200 (Float)
  PutOrCall?: number// [1] 201 (Int)
  InTheMoneyCondition?: number// [1] 2681 (Int)
  ContraryInstructionEligibilityIndicator?: boolean// [1] 2685 (Boolean)
  FlexibleIndicator?: boolean// [1] 1244 (Boolean)
  FlexProductEligibilityIndicator?: boolean// [1] 1242 (Boolean)
  BlockTradeEligibilityIndicator?: boolean// [1] 2575 (Boolean)
  LowExercisePriceOptionIndicator?: boolean// [1] 2574 (Boolean)
  TimeUnit?: string// [1] 997 (String)
  CouponRate?: number// [1] 223 (Float)
  SecurityExchange?: string// [1] 207 (String)
  PositionLimit?: number// [1] 970 (Int)
  NTPositionLimit?: number// [1] 971 (Int)
  Issuer?: string// [1] 106 (String)
  EncodedIssuerLen?: number// [1] 348 (Length)
  EncodedIssuer?: Buffer// [1] 349 (RawData)
  SecurityDesc?: string// [1] 107 (String)
  EncodedSecurityDescLen?: number// [1] 350 (Length)
  EncodedSecurityDesc?: Buffer// [1] 351 (RawData)
  Pool?: string// [1] 691 (String)
  ContractSettlMonth?: string// [1] 667 (String)
  CPProgram?: number// [1] 875 (Int)
  CPRegType?: string// [1] 876 (String)
  DatedDate?: Date// [1] 873 (LocalDate)
  InterestAccrualDate?: Date// [1] 874 (LocalDate)
  ShortSaleRestriction?: number// [1] 1687 (Int)
  RefTickTableID?: number// [1] 1787 (Int)
  StrategyType?: string// [1] 2141 (String)
  CommonPricingIndicator?: boolean// [1] 2142 (Boolean)
  SettlDisruptionProvision?: number// [1] 2143 (Int)
  InstrumentRoundingDirection?: string// [1] 2144 (String)
  InstrumentRoundingPrecision?: number// [1] 2145 (Int)
  InstrumentPricePrecision?: number// [1] 2576 (Int)
  ExtraordinaryEventAdjustmentMethod?: number// [1] 2602 (Int)
  ExchangeLookAlike?: boolean// [1] 2603 (Boolean)
  SecAltIDGrp?: ISecAltIDGrp[]// [1] AltID.455, AltIDSrc.456
  SecondaryAssetGrp?: ISecondaryAssetGrp[]// [2] Clss.1977, SubClss.1978, Typ.1979
  AssetAttributeGrp?: IAssetAttributeGrp[]// [3] Typ.2305, Val.2306, Lmt.2307
  SecurityXML?: ISecurityXML// [4] Schema.1186
  EvntGrp?: IEvntGrp[]// [5] EventTyp.865, Dt.866 .. EncTxt.1579
  InstrumentParties?: IInstrumentParties[]// [6] ID.1019, Src.1050 .. Qual.2378
  ComplexEvents?: IComplexEvents[]// [7] Typ.1484, OptPay.2117 .. XIDRef.2139
  DateAdjustment?: IDateAdjustment// [8] BizDayCnvtn.40921, Roll.40922
  PricingDateTime?: IPricingDateTime// [9] DtUnadj.41232, BizDayCnvtn.41233 .. TmBizCtr.41236
  MarketDisruption?: IMarketDisruption// [10] Prov.41087, FallbckProv.41088 .. MinCtrcts.41091
  OptionExercise?: IOptionExercise// [11] Desc.41106, EncDescLen.41107 .. SettlMethElctngSide.42590
  StreamGrp?: IStreamGrp[]// [12] Typ.40050, XID.41303 .. EncTxt.40983
  ProvisionGrp?: IProvisionGrp[]// [13] Typ.40091, DtUnadj.40092 .. EncTxt.40987
  AdditionalTermGrp?: IAdditionalTermGrp[]// [14] PrcdntInd.40020, DscrpncyInd.40021
  ProtectionTermGrp?: IProtectionTermGrp[]// [15] Notl.40182, Ccy.40183 .. XID.40190
  CashSettlTermGrp?: ICashSettlTermGrp[]// [16] Ccy.40023, BizDayOfst.40024 .. XID.40039
  PhysicalSettlTermGrp?: IPhysicalSettlTermGrp[]// [17] Ccy.40205, BizDays.40206 .. XID.40208
  ExtraordinaryEventGrp?: IExtraordinaryEventGrp[]// [18] Typ.42297, Val.42298
}
