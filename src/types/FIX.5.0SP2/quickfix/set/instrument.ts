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
  SymbolSfx?: string// [2] 65 (String)
  SecurityID?: string// [3] 48 (String)
  SecurityIDSource?: string// [4] 22 (String)
  SecAltIDGrp?: ISecAltIDGrp// [5] NoSecurityAltID.454, SecurityAltID.455 .. SymbolPositionNumber.2957
  Product?: number// [6] 460 (Int)
  ProductComplex?: string// [7] 1227 (String)
  SecurityGroup?: string// [8] 1151 (String)
  CFICode?: string// [9] 461 (String)
  UPICode?: string// [10] 2891 (String)
  SecurityType?: string// [11] 167 (String)
  SecuritySubType?: string// [12] 762 (String)
  MaturityMonthYear?: string// [13] 200 (String)
  MaturityDate?: Date// [14] 541 (LocalDate)
  MaturityTime?: string// [15] 1079 (String)
  SettleOnOpenFlag?: string// [16] 966 (String)
  InstrmtAssignmentMethod?: string// [17] 1049 (String)
  SecurityStatus?: string// [18] 965 (String)
  CouponPaymentDate?: Date// [19] 224 (LocalDate)
  RestructuringType?: string// [20] 1449 (String)
  Seniority?: string// [21] 1450 (String)
  NotionalPercentageOutstanding?: number// [22] 1451 (Float)
  OriginalNotionalPercentageOutstanding?: number// [23] 1452 (Float)
  AttachmentPoint?: number// [24] 1457 (Float)
  DetachmentPoint?: number// [25] 1458 (Float)
  ObligationType?: string// [26] 1739 (String)
  AssetGroup?: number// [27] 2210 (Int)
  AssetClass?: number// [28] 1938 (Int)
  AssetSubClass?: number// [29] 1939 (Int)
  AssetType?: string// [30] 1940 (String)
  AssetSubType?: string// [31] 2735 (String)
  SecondaryAssetGrp?: ISecondaryAssetGrp// [32] NoSecondaryAssetClasses.1976, SecondaryAssetClass.1977 .. SecondaryAssetSubType.2741
  AssetAttributeGrp?: IAssetAttributeGrp// [33] NoAssetAttributes.2304, AssetAttributeType.2305 .. AssetAttributeLimit.2307
  SwapClass?: string// [34] 1941 (String)
  SwapSubClass?: string// [35] 1575 (String)
  NthToDefault?: number// [36] 1942 (Int)
  MthToDefault?: number// [37] 1943 (Int)
  SettledEntityMatrixSource?: string// [38] 1944 (String)
  SettledEntityMatrixPublicationDate?: Date// [39] 1945 (LocalDate)
  CouponType?: number// [40] 1946 (Int)
  TotalIssuedAmount?: number// [41] 1947 (Float)
  CouponFrequencyPeriod?: number// [42] 1948 (Int)
  CouponFrequencyUnit?: string// [43] 1949 (String)
  CouponDayCount?: number// [44] 1950 (Int)
  CouponOtherDayCount?: string// [45] 2879 (String)
  ConvertibleBondEquityID?: string// [46] 1951 (String)
  ConvertibleBondEquityIDSource?: string// [47] 1952 (String)
  ContractPriceRefMonth?: string// [48] 1953 (String)
  LienSeniority?: number// [49] 1954 (Int)
  LoanFacility?: number// [50] 1955 (Int)
  ReferenceEntityType?: number// [51] 1956 (Int)
  IndexSeries?: number// [52] 1957 (Int)
  IndexAnnexVersion?: number// [53] 1958 (Int)
  IndexAnnexDate?: Date// [54] 1959 (LocalDate)
  IndexAnnexSource?: string// [55] 1960 (String)
  SettlRateIndex?: string// [56] 1577 (String)
  SettlRateIndexLocation?: string// [57] 1580 (String)
  OptionExpirationDesc?: string// [58] 1581 (String)
  EncodedOptionExpirationDescLen?: number// [59] 1678 (Length)
  EncodedOptionExpirationDesc?: Buffer// [60] 1697 (RawData)
  IssueDate?: Date// [61] 225 (LocalDate)
  RepoCollateralSecurityType?: string// [62] 239 (String)
  RepurchaseTerm?: number// [63] 226 (Int)
  RepurchaseRate?: number// [64] 227 (Float)
  Factor?: number// [65] 228 (Float)
  CreditRating?: string// [66] 255 (String)
  InstrRegistry?: string// [67] 543 (String)
  CountryOfIssue?: string// [68] 470 (String)
  StateOrProvinceOfIssue?: string// [69] 471 (String)
  LocaleOfIssue?: string// [70] 472 (String)
  RedemptionDate?: Date// [71] 240 (LocalDate)
  StrikePrice?: number// [72] 202 (Float)
  OrigStrikePrice?: number// [73] 2578 (Float)
  StrikePricePrecision?: number// [74] 2577 (Int)
  StrikeCurrency?: string// [75] 947 (String)
  StrikeCurrencyCodeSource?: string// [76] 2904 (String)
  StrikeMultiplier?: number// [77] 967 (Float)
  StrikeValue?: number// [78] 968 (Float)
  StrikeUnitOfMeasure?: string// [79] 1698 (String)
  StrikeIndex?: string// [80] 1866 (String)
  StrikeIndexCurvePoint?: string// [81] 2600 (String)
  StrikeIndexSpread?: number// [82] 2001 (Float)
  StrikeIndexQuote?: number// [83] 2601 (Int)
  StrikePriceDeterminationMethod?: number// [84] 1478 (Int)
  StrikePriceBoundaryMethod?: number// [85] 1479 (Int)
  StrikePriceBoundaryPrecision?: number// [86] 1480 (Float)
  UnderlyingPriceDeterminationMethod?: number// [87] 1481 (Int)
  OptAttribute?: string// [88] 206 (String)
  ContractMultiplier?: number// [89] 231 (Float)
  ContractMultiplierUnit?: number// [90] 1435 (Int)
  TradingUnitPeriodMultiplier?: number// [91] 2353 (Int)
  FlowScheduleType?: number// [92] 1439 (Int)
  MinPriceIncrement?: number// [93] 969 (Float)
  MinPriceIncrementAmount?: number// [94] 1146 (Float)
  UnitOfMeasure?: string// [95] 996 (String)
  UnitOfMeasureQty?: number// [96] 1147 (Float)
  UnitOfMeasureCurrency?: string// [97] 1716 (String)
  UnitOfMeasureCurrencyCodeSource?: string// [98] 2905 (String)
  PriceUnitOfMeasure?: string// [99] 1191 (String)
  PriceUnitOfMeasureQty?: number// [100] 1192 (Float)
  PriceUnitOfMeasureCurrency?: string// [101] 1717 (String)
  PriceUnitOfMeasureCurrencyCodeSource?: string// [102] 2906 (String)
  SettlMethod?: string// [103] 1193 (String)
  SettlSubMethod?: number// [104] 2579 (Int)
  ExerciseStyle?: number// [105] 1194 (Int)
  OptPayoutType?: number// [106] 1482 (Int)
  OptPayoutAmount?: number// [107] 1195 (Float)
  ReturnTrigger?: number// [108] 2753 (Int)
  PriceQuoteMethod?: string// [109] 1196 (String)
  ValuationMethod?: string// [110] 1197 (String)
  ValuationSource?: string// [111] 2002 (String)
  ValuationReferenceModel?: string// [112] 2140 (String)
  PriceQuoteCurrency?: string// [113] 1524 (String)
  PriceQuoteCurrencyCodeSource?: string// [114] 2907 (String)
  ListMethod?: number// [115] 1198 (Int)
  CapPrice?: number// [116] 1199 (Float)
  FloorPrice?: number// [117] 1200 (Float)
  PutOrCall?: number// [118] 201 (Int)
  InTheMoneyCondition?: number// [119] 2681 (Int)
  ContraryInstructionEligibilityIndicator?: boolean// [120] 2685 (Boolean)
  FlexibleIndicator?: boolean// [121] 1244 (Boolean)
  FlexProductEligibilityIndicator?: boolean// [122] 1242 (Boolean)
  BlockTradeEligibilityIndicator?: boolean// [123] 2575 (Boolean)
  LowExercisePriceOptionIndicator?: boolean// [124] 2574 (Boolean)
  TimeUnit?: string// [125] 997 (String)
  CouponRate?: number// [126] 223 (Float)
  SecurityExchange?: string// [127] 207 (String)
  PositionLimit?: number// [128] 970 (Int)
  NTPositionLimit?: number// [129] 971 (Int)
  Issuer?: string// [130] 106 (String)
  EncodedIssuerLen?: number// [131] 348 (Length)
  EncodedIssuer?: Buffer// [132] 349 (RawData)
  FinancialInstrumentShortName?: string// [133] 2737 (String)
  FinancialInstrumentFullName?: string// [134] 2714 (String)
  EncodedFinancialInstrumentFullNameLen?: number// [135] 2715 (Length)
  EncodedFinancialInstrumentFullName?: Buffer// [136] 2716 (RawData)
  SecurityDesc?: string// [137] 107 (String)
  EncodedSecurityDescLen?: number// [138] 350 (Length)
  EncodedSecurityDesc?: Buffer// [139] 351 (RawData)
  SecurityXML?: ISecurityXML// [140] SecurityXMLLen.1184, SecurityXML.1185, SecurityXMLSchema.1186
  Pool?: string// [141] 691 (String)
  ContractSettlMonth?: string// [142] 667 (String)
  CPProgram?: number// [143] 875 (Int)
  CPRegType?: string// [144] 876 (String)
  EvntGrp?: IEvntGrp// [145] NoEvents.864, EventType.865 .. EncodedEventText.1579
  DatedDate?: Date// [146] 873 (LocalDate)
  InterestAccrualDate?: Date// [147] 874 (LocalDate)
  InstrumentParties?: IInstrumentParties// [148] NoInstrumentParties.1018, InstrumentPartyID.1019 .. InstrumentPartySubIDType.1054
  ShortSaleRestriction?: number// [149] 1687 (Int)
  ComplexEvents?: IComplexEvents// [150] NoComplexEvents.1483, ComplexEventType.1484 .. ComplexEventXIDRef.2139
  RefTickTableID?: number// [151] 1787 (Int)
  StrategyType?: string// [152] 2141 (String)
  CommonPricingIndicator?: boolean// [153] 2142 (Boolean)
  SettlDisruptionProvision?: number// [154] 2143 (Int)
  DeliveryRouteOrCharter?: string// [155] 2752 (String)
  InstrumentRoundingDirection?: string// [156] 2144 (String)
  InstrumentRoundingPrecision?: number// [157] 2145 (Int)
  InstrumentPricePrecision?: number// [158] 2576 (Int)
  SecurityReferenceDataSupplement?: string// [159] 2962 (String)
  DateAdjustment?: IDateAdjustment// [160] BusinessDayConvention.40921, BusinessCenterGrp.40278 .. DateRollConvention.40922
  PricingDateTime?: IPricingDateTime// [161] PricingDateUnadjusted.41232, PricingDateBusinessDayConvention.41233 .. PricingTimeBusinessCenter.41236
  MarketDisruption?: IMarketDisruption// [162] MarketDisruptionProvision.41087, MarketDisruptionEventGrp.41092 .. MarketDisruptionMinimumFuturesContracts.41091
  OptionExercise?: IOptionExercise// [163] ExerciseDesc.41106, EncodedExerciseDescLen.41107 .. MakeWholeInterpolationMethod.42597
  StreamGrp?: IStreamGrp// [164] NoStreams.40049, StreamType.40050 .. EncodedStreamText.40983
  ProvisionGrp?: IProvisionGrp// [165] NoProvisions.40090, ProvisionType.40091 .. ProvisionPartySubIDType.40180
  AdditionalTermGrp?: IAdditionalTermGrp// [166] NoAdditionalTerms.40019, AdditionalTermConditionPrecedentBondIndicator.40020 .. AdditionalTermBondDayCount.40018
  ProtectionTermGrp?: IProtectionTermGrp// [167] NoProtectionTerms.40181, ProtectionTermNotional.40182 .. ProtectionTermXID.40190
  CashSettlTermGrp?: ICashSettlTermGrp// [168] NoCashSettlTerms.40022, CashSettlCurrency.40023 .. CashSettlTermXID.40039
  PhysicalSettlTermGrp?: IPhysicalSettlTermGrp// [169] NoPhysicalSettlTerms.40204, NoPhysicalSettlTerms.40209 .. PhysicalSettlTermXID.40208
  ExtraordinaryEventGrp?: IExtraordinaryEventGrp// [170] NoExtraordinaryEvents.42296, ExtraordinaryEventType.42297, ExtraordinaryEventValue.42298
  ExtraordinaryEventAdjustmentMethod?: number// [171] 2602 (Int)
  ExchangeLookAlike?: boolean// [172] 2603 (Boolean)
}
