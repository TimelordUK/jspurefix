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
  Currency?: string// [13] 15 (String)
  InstrumentCustom?: string// [14] 20460 (String)
  MaturityMonthYear?: string// [15] 200 (String)
  MaturityDate?: Date// [16] 541 (LocalDate)
  MaturityTime?: string// [17] 1079 (String)
  SettleOnOpenFlag?: string// [18] 966 (String)
  InstrmtAssignmentMethod?: string// [19] 1049 (String)
  SecurityStatus?: string// [20] 965 (String)
  CouponPaymentDate?: Date// [21] 224 (LocalDate)
  RestructuringType?: string// [22] 1449 (String)
  Seniority?: string// [23] 1450 (String)
  NotionalPercentageOutstanding?: number// [24] 1451 (Float)
  OriginalNotionalPercentageOutstanding?: number// [25] 1452 (Float)
  AttachmentPoint?: number// [26] 1457 (Float)
  DetachmentPoint?: number// [27] 1458 (Float)
  ObligationType?: string// [28] 1739 (String)
  AssetGroup?: number// [29] 2210 (Int)
  AssetClass?: number// [30] 1938 (Int)
  AssetSubClass?: number// [31] 1939 (Int)
  AssetType?: string// [32] 1940 (String)
  AssetSubType?: string// [33] 2735 (String)
  SecondaryAssetGrp?: ISecondaryAssetGrp// [34] NoSecondaryAssetClasses.1976, SecondaryAssetClass.1977 .. SecondaryAssetSubType.2741
  AssetAttributeGrp?: IAssetAttributeGrp// [35] NoAssetAttributes.2304, AssetAttributeType.2305 .. AssetAttributeLimit.2307
  SwapClass?: string// [36] 1941 (String)
  SwapSubClass?: string// [37] 1575 (String)
  NthToDefault?: number// [38] 1942 (Int)
  MthToDefault?: number// [39] 1943 (Int)
  SettledEntityMatrixSource?: string// [40] 1944 (String)
  SettledEntityMatrixPublicationDate?: Date// [41] 1945 (LocalDate)
  CouponType?: number// [42] 1946 (Int)
  TotalIssuedAmount?: number// [43] 1947 (Float)
  CouponFrequencyPeriod?: number// [44] 1948 (Int)
  CouponFrequencyUnit?: string// [45] 1949 (String)
  CouponDayCount?: number// [46] 1950 (Int)
  CouponOtherDayCount?: string// [47] 2879 (String)
  ConvertibleBondEquityID?: string// [48] 1951 (String)
  ConvertibleBondEquityIDSource?: string// [49] 1952 (String)
  ContractPriceRefMonth?: string// [50] 1953 (String)
  LienSeniority?: number// [51] 1954 (Int)
  LoanFacility?: number// [52] 1955 (Int)
  ReferenceEntityType?: number// [53] 1956 (Int)
  IndexSeries?: number// [54] 1957 (Int)
  IndexAnnexVersion?: number// [55] 1958 (Int)
  IndexAnnexDate?: Date// [56] 1959 (LocalDate)
  IndexAnnexSource?: string// [57] 1960 (String)
  SettlRateIndex?: string// [58] 1577 (String)
  SettlRateIndexLocation?: string// [59] 1580 (String)
  OptionExpirationDesc?: string// [60] 1581 (String)
  EncodedOptionExpirationDescLen?: number// [61] 1678 (Length)
  EncodedOptionExpirationDesc?: Buffer// [62] 1697 (RawData)
  IssueDate?: Date// [63] 225 (LocalDate)
  RepoCollateralSecurityType?: string// [64] 239 (String)
  RepurchaseTerm?: number// [65] 226 (Int)
  RepurchaseRate?: number// [66] 227 (Float)
  Factor?: number// [67] 228 (Float)
  CreditRating?: string// [68] 255 (String)
  InstrRegistry?: string// [69] 543 (String)
  CountryOfIssue?: string// [70] 470 (String)
  StateOrProvinceOfIssue?: string// [71] 471 (String)
  LocaleOfIssue?: string// [72] 472 (String)
  RedemptionDate?: Date// [73] 240 (LocalDate)
  StrikePrice?: number// [74] 202 (Float)
  OrigStrikePrice?: number// [75] 2578 (Float)
  StrikePricePrecision?: number// [76] 2577 (Int)
  StrikeCurrency?: string// [77] 947 (String)
  StrikeCurrencyCodeSource?: string// [78] 2904 (String)
  StrikeMultiplier?: number// [79] 967 (Float)
  StrikeValue?: number// [80] 968 (Float)
  StrikeUnitOfMeasure?: string// [81] 1698 (String)
  StrikeIndex?: string// [82] 1866 (String)
  StrikeIndexCurvePoint?: string// [83] 2600 (String)
  StrikeIndexSpread?: number// [84] 2001 (Float)
  StrikeIndexQuote?: number// [85] 2601 (Int)
  StrikePriceDeterminationMethod?: number// [86] 1478 (Int)
  StrikePriceBoundaryMethod?: number// [87] 1479 (Int)
  StrikePriceBoundaryPrecision?: number// [88] 1480 (Float)
  UnderlyingPriceDeterminationMethod?: number// [89] 1481 (Int)
  OptAttribute?: string// [90] 206 (String)
  ContractMultiplier?: number// [91] 231 (Float)
  ContractMultiplierUnit?: number// [92] 1435 (Int)
  TradingUnitPeriodMultiplier?: number// [93] 2353 (Int)
  FlowScheduleType?: number// [94] 1439 (Int)
  MinPriceIncrement?: number// [95] 969 (Float)
  MinPriceIncrementAmount?: number// [96] 1146 (Float)
  UnitOfMeasure?: string// [97] 996 (String)
  UnitOfMeasureQty?: number// [98] 1147 (Float)
  UnitOfMeasureCurrency?: string// [99] 1716 (String)
  UnitOfMeasureCurrencyCodeSource?: string// [100] 2905 (String)
  PriceUnitOfMeasure?: string// [101] 1191 (String)
  PriceUnitOfMeasureQty?: number// [102] 1192 (Float)
  PriceUnitOfMeasureCurrency?: string// [103] 1717 (String)
  PriceUnitOfMeasureCurrencyCodeSource?: string// [104] 2906 (String)
  SettlMethod?: string// [105] 1193 (String)
  SettlSubMethod?: number// [106] 2579 (Int)
  ExerciseStyle?: number// [107] 1194 (Int)
  OptPayoutType?: number// [108] 1482 (Int)
  OptPayoutAmount?: number// [109] 1195 (Float)
  ReturnTrigger?: number// [110] 2753 (Int)
  PriceQuoteMethod?: string// [111] 1196 (String)
  ValuationMethod?: string// [112] 1197 (String)
  ValuationSource?: string// [113] 2002 (String)
  ValuationReferenceModel?: string// [114] 2140 (String)
  PriceQuoteCurrency?: string// [115] 1524 (String)
  PriceQuoteCurrencyCodeSource?: string// [116] 2907 (String)
  ListMethod?: number// [117] 1198 (Int)
  CapPrice?: number// [118] 1199 (Float)
  FloorPrice?: number// [119] 1200 (Float)
  PutOrCall?: number// [120] 201 (Int)
  InTheMoneyCondition?: number// [121] 2681 (Int)
  ContraryInstructionEligibilityIndicator?: boolean// [122] 2685 (Boolean)
  FlexibleIndicator?: boolean// [123] 1244 (Boolean)
  FlexProductEligibilityIndicator?: boolean// [124] 1242 (Boolean)
  BlockTradeEligibilityIndicator?: boolean// [125] 2575 (Boolean)
  LowExercisePriceOptionIndicator?: boolean// [126] 2574 (Boolean)
  TimeUnit?: string// [127] 997 (String)
  CouponRate?: number// [128] 223 (Float)
  SecurityExchange?: string// [129] 207 (String)
  PositionLimit?: number// [130] 970 (Int)
  NTPositionLimit?: number// [131] 971 (Int)
  Issuer?: string// [132] 106 (String)
  EncodedIssuerLen?: number// [133] 348 (Length)
  EncodedIssuer?: Buffer// [134] 349 (RawData)
  FinancialInstrumentShortName?: string// [135] 2737 (String)
  FinancialInstrumentFullName?: string// [136] 2714 (String)
  EncodedFinancialInstrumentFullNameLen?: number// [137] 2715 (Length)
  EncodedFinancialInstrumentFullName?: Buffer// [138] 2716 (RawData)
  SecurityDesc?: string// [139] 107 (String)
  EncodedSecurityDescLen?: number// [140] 350 (Length)
  EncodedSecurityDesc?: Buffer// [141] 351 (RawData)
  SecurityXML?: ISecurityXML// [142] SecurityXMLLen.1184, SecurityXML.1185, SecurityXMLSchema.1186
  Pool?: string// [143] 691 (String)
  ContractSettlMonth?: string// [144] 667 (String)
  CPProgram?: number// [145] 875 (Int)
  CPRegType?: string// [146] 876 (String)
  EvntGrp?: IEvntGrp// [147] NoEvents.864, EventType.865 .. EncodedEventText.1579
  DatedDate?: Date// [148] 873 (LocalDate)
  InterestAccrualDate?: Date// [149] 874 (LocalDate)
  InstrumentParties?: IInstrumentParties// [150] NoInstrumentParties.1018, InstrumentPartyID.1019 .. InstrumentPartySubIDType.1054
  ShortSaleRestriction?: number// [151] 1687 (Int)
  ComplexEvents?: IComplexEvents// [152] NoComplexEvents.1483, ComplexEventType.1484 .. ComplexEventXIDRef.2139
  RefTickTableID?: number// [153] 1787 (Int)
  StrategyType?: string// [154] 2141 (String)
  CommonPricingIndicator?: boolean// [155] 2142 (Boolean)
  SettlDisruptionProvision?: number// [156] 2143 (Int)
  DeliveryRouteOrCharter?: string// [157] 2752 (String)
  InstrumentRoundingDirection?: string// [158] 2144 (String)
  InstrumentRoundingPrecision?: number// [159] 2145 (Int)
  InstrumentPricePrecision?: number// [160] 2576 (Int)
  SecurityReferenceDataSupplement?: string// [161] 2962 (String)
  DateAdjustment?: IDateAdjustment// [162] BusinessDayConvention.40921, BusinessCenterGrp.40278 .. DateRollConvention.40922
  PricingDateTime?: IPricingDateTime// [163] PricingDateUnadjusted.41232, PricingDateBusinessDayConvention.41233 .. PricingTimeBusinessCenter.41236
  MarketDisruption?: IMarketDisruption// [164] MarketDisruptionProvision.41087, MarketDisruptionEventGrp.41092 .. MarketDisruptionMinimumFuturesContracts.41091
  OptionExercise?: IOptionExercise// [165] ExerciseDesc.41106, EncodedExerciseDescLen.41107 .. MakeWholeInterpolationMethod.42597
  StreamGrp?: IStreamGrp// [166] NoStreams.40049, StreamType.40050 .. EncodedStreamText.40983
  ProvisionGrp?: IProvisionGrp// [167] NoProvisions.40090, ProvisionType.40091 .. ProvisionPartySubIDType.40180
  AdditionalTermGrp?: IAdditionalTermGrp// [168] NoAdditionalTerms.40019, AdditionalTermConditionPrecedentBondIndicator.40020 .. AdditionalTermBondDayCount.40018
  ProtectionTermGrp?: IProtectionTermGrp// [169] NoProtectionTerms.40181, ProtectionTermNotional.40182 .. ProtectionTermXID.40190
  CashSettlTermGrp?: ICashSettlTermGrp// [170] NoCashSettlTerms.40022, CashSettlCurrency.40023 .. CashSettlTermXID.40039
  PhysicalSettlTermGrp?: IPhysicalSettlTermGrp// [171] NoPhysicalSettlTerms.40204, NoPhysicalSettlTerms.40209 .. PhysicalSettlTermXID.40208
  ExtraordinaryEventGrp?: IExtraordinaryEventGrp// [172] NoExtraordinaryEvents.42296, ExtraordinaryEventType.42297, ExtraordinaryEventValue.42298
  ExtraordinaryEventAdjustmentMethod?: number// [173] 2602 (Int)
  ExchangeLookAlike?: boolean// [174] 2603 (Boolean)
}
