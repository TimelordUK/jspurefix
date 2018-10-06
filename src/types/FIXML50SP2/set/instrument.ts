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
  Symbol?: string// 55
  SymbolSfx?: string// 65
  SecurityID?: string// 48
  LegContractualMatrixSource?: string// 42204
  Product?: number// 460
  ProductComplex?: string// 1227
  SecurityGroup?: string// 1151
  CFICode?: string// 461
  SecurityType?: string// 167
  SecuritySubType?: string// 762
  MaturityMonthYear?: string// 200
  MaturityDate?: Date// 541
  MaturityTime?: string// 1079
  SettleOnOpenFlag?: string// 966
  InstrmtAssignmentMethod?: string// 1049
  SecurityStatus?: string// 965
  CouponPaymentDate?: Date// 224
  RestructuringType?: string// 1449
  Seniority?: string// 1450
  NotionalPercentageOutstanding?: number// 1451
  OriginalNotionalPercentageOutstanding?: number// 1452
  AttachmentPoint?: number// 1457
  DetachmentPoint?: number// 1458
  ObligationType?: string// 1739
  AssetGroup?: number// 2210
  AssetClass?: number// 1938
  LegAssetSubClass?: number// 2068
  AssetType?: string// 1940
  SwapClass?: string// 1941
  SwapSubClass?: string// 1575
  NthToDefault?: number// 1942
  MthToDefault?: number// 1943
  SettledEntityMatrixSource?: string// 1944
  SettledEntityMatrixPublicationDate?: Date// 1945
  CouponType?: number// 1946
  TotalIssuedAmount?: number// 1947
  CouponFrequencyPeriod?: number// 1948
  CouponFrequencyUnit?: string// 1949
  LegCouponDayCount?: number// 2165
  ConvertibleBondEquityID?: string// 1951
  LegConvertibleBondEquityIDSource?: string// 2167
  ContractPriceRefMonth?: string// 1953
  LienSeniority?: number// 1954
  LoanFacility?: number// 1955
  ReferenceEntityType?: number// 1956
  IndexSeries?: number// 1957
  IndexAnnexVersion?: number// 1958
  IndexAnnexDate?: Date// 1959
  IndexAnnexSource?: string// 1960
  SettlRateIndex?: string// 1577
  SettlRateIndexLocation?: string// 1580
  OptionExpirationDesc?: string// 1581
  EncodedOptionExpirationDescLen?: number// 1678
  EncodedOptionExpirationDesc?: Buffer// 1697
  IssueDate?: Date// 225
  RepoCollateralSecurityType?: string// 239
  RepurchaseTerm?: number// 226
  RepurchaseRate?: number// 227
  Factor?: number// 228
  CreditRating?: string// 255
  InstrRegistry?: string// 543
  CountryOfIssue?: string// 470
  StateOrProvinceOfIssue?: string// 471
  LocaleOfIssue?: string// 472
  RedemptionDate?: Date// 240
  StrikePrice?: number// 202
  OrigStrikePrice?: number// 2578
  StrikePricePrecision?: number// 2577
  StrikeCurrency?: string// 947
  StrikeMultiplier?: number// 967
  StrikeValue?: number// 968
  StrikeUnitOfMeasure?: string// 1698
  StrikeIndex?: string// 1866
  StrikeIndexCurvePoint?: string// 2600
  StrikeIndexSpread?: number// 2001
  StrikeIndexQuote?: number// 2601
  LegStrikePriceDeterminationMethod?: number// 2186
  StrikePriceBoundaryMethod?: number// 1479
  StrikePriceBoundaryPrecision?: number// 1480
  UnderlyingPriceDeterminationMethod?: number// 1481
  OptAttribute?: string// 206
  ContractMultiplier?: number// 231
  ContractMultiplierUnit?: number// 1435
  TradingUnitPeriodMultiplier?: number// 2353
  DerivativeFlowScheduleType?: number// 1442
  MinPriceIncrement?: number// 969
  MinPriceIncrementAmount?: number// 1146
  UnitOfMeasure?: string// 996
  UnitOfMeasureQty?: number// 1147
  UnitOfMeasureCurrency?: string// 1716
  PriceUnitOfMeasure?: string// 1191
  PriceUnitOfMeasureQty?: number// 1192
  PriceUnitOfMeasureCurrency?: string// 1717
  SettlMethod?: string// 1193
  SettlSubMethod?: number// 2579
  UnderlyingProvisionOptionExerciseStyle?: number// 42159
  OptPayoutType?: number// 1482
  OptPayoutAmount?: number// 1195
  PriceQuoteMethod?: string// 1196
  ValuationMethod?: string// 1197
  ValuationSource?: string// 2002
  ValuationReferenceModel?: string// 2140
  PriceQuoteCurrency?: string// 1524
  ListMethod?: number// 1198
  CapPrice?: number// 1199
  FloorPrice?: number// 1200
  PutOrCall?: number// 201
  InTheMoneyCondition?: number// 2681
  ContraryInstructionEligibilityIndicator?: boolean// 2685
  FlexibleIndicator?: boolean// 1244
  FlexProductEligibilityIndicator?: boolean// 1242
  BlockTradeEligibilityIndicator?: boolean// 2575
  LowExercisePriceOptionIndicator?: boolean// 2574
  TimeUnit?: string// 997
  CouponRate?: number// 223
  SecurityExchange?: string// 207
  PositionLimit?: number// 970
  NTPositionLimit?: number// 971
  Issuer?: string// 106
  EncodedIssuerLen?: number// 348
  EncodedIssuer?: Buffer// 349
  SecurityDesc?: string// 107
  EncodedSecurityDescLen?: number// 350
  EncodedSecurityDesc?: Buffer// 351
  Pool?: string// 691
  ContractSettlMonth?: string// 667
  LegCPProgram?: number// 2207
  CPRegType?: string// 876
  DatedDate?: Date// 873
  InterestAccrualDate?: Date// 874
  ShortSaleRestriction?: number// 1687
  RefTickTableID?: number// 1787
  StrategyType?: string// 2141
  CommonPricingIndicator?: boolean// 2142
  SettlDisruptionProvision?: number// 2143
  InstrumentRoundingDirection?: string// 2144
  InstrumentRoundingPrecision?: number// 2145
  InstrumentPricePrecision?: number// 2576
  ExtraordinaryEventAdjustmentMethod?: number// 2602
  ExchangeLookAlike?: boolean// 2603
  SecAltIDGrp?: ISecAltIDGrp[]
  SecondaryAssetGrp?: ISecondaryAssetGrp[]
  AssetAttributeGrp?: IAssetAttributeGrp[]
  SecurityXML?: ISecurityXML
  EvntGrp?: IEvntGrp[]
  InstrumentParties?: IInstrumentParties[]
  ComplexEvents?: IComplexEvents[]
  DateAdjustment?: IDateAdjustment
  PricingDateTime?: IPricingDateTime
  MarketDisruption?: IMarketDisruption
  OptionExercise?: IOptionExercise
  StreamGrp?: IStreamGrp[]
  ProvisionGrp?: IProvisionGrp[]
  AdditionalTermGrp?: IAdditionalTermGrp[]
  ProtectionTermGrp?: IProtectionTermGrp[]
  CashSettlTermGrp?: ICashSettlTermGrp[]
  PhysicalSettlTermGrp?: IPhysicalSettlTermGrp[]
  ExtraordinaryEventGrp?: IExtraordinaryEventGrp[]
}
