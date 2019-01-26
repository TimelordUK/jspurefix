export enum AdvSide {
  Buy = 'B',
  Sell = 'S',
  Cross = 'X',
  Trade = 'T'
}

export enum AdvTransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R'
}

export enum CommType {
  PerUnit = '1',
  Percentage = '2',
  Absolute = '3',
  E4 = '4',
  E5 = '5',
  PointsPerBondOrContractSupplyContractmultiplier = '6'
}

export enum ExecInst {
  StayOnOfferside = '0',
  NotHeld = '1',
  Work = '2',
  GoAlong = '3',
  OverTheDay = '4',
  Held = '5',
  ParticipateDontInitiate = '6',
  StrictScale = '7',
  TryToScale = '8',
  StayOnBidside = '9',
  NoCross = 'A',
  OkToCross = 'B',
  CallFirst = 'C',
  PercentOfVolume = 'D',
  DoNotIncrease = 'E',
  DoNotReduce = 'F',
  AllOrNone = 'G',
  ReinstateOnSystemFailure = 'H',
  InstitutionsOnly = 'I',
  ReinstateOnTradingHalt = 'J',
  CancelOnTradingHalt = 'K',
  LastPeg = 'L',
  MidPricePeg = 'M',
  NonNegotiable = 'N',
  OpeningPeg = 'O',
  MarketPeg = 'P',
  CancelOnSystemFailure = 'Q',
  PrimaryPeg = 'R',
  Suspend = 'S',
  CustomerDisplayInstruction = 'U',
  Netting = 'V',
  PegToVwap = 'W',
  TradeAlong = 'X',
  TryToStop = 'Y',
  CancelIfNotBest = 'Z',
  TrailingStopPeg = 'a',
  StrictLimit = 'b',
  IgnorePriceValidityChecks = 'c',
  PegToLimitPrice = 'd',
  WorkToTargetStrategy = 'e'
}

export enum HandlInst {
  AutomatedExecutionOrderPrivateNoBrokerIntervention = '1',
  AutomatedExecutionOrderPublicBrokerInterventionOk = '2',
  ManualOrderBestExecution = '3'
}

export enum SecurityIDSource {
  Cusip = '1',
  Sedol = '2',
  Quik = '3',
  IsinNumber = '4',
  RicCode = '5',
  IsoCurrencyCode = '6',
  IsoCountryCode = '7',
  ExchangeSymbol = '8',
  ConsolidatedTapeAssociation = '9',
  BloombergSymbol = 'A',
  Wertpapier = 'B',
  Dutch = 'C',
  Valoren = 'D',
  Sicovam = 'E',
  Belgian = 'F',
  Common = 'G',
  ClearingHouse = 'H',
  IsdaFpmlProductSpecification = 'I',
  OptionsPriceReportingAuthority = 'J'
}

export enum IOIQltyInd {
  Low = 'L',
  Medium = 'M',
  High = 'H'
}

export enum IOIQty {
  Small = 'S',
  Medium = 'M',
  Large = 'L'
}

export enum IOITransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R'
}

export enum LastCapacity {
  Agent = '1',
  CrossAsAgent = '2',
  CrossAsPrincipal = '3',
  Principal = '4'
}

export enum MsgType {
  Heartbeat = '0',
  TestRequest = '1',
  ResendRequest = '2',
  Reject = '3',
  SequenceReset = '4',
  Logout = '5',
  IndicationOfInterest = '6',
  Advertisement = '7',
  ExecutionReport = '8',
  OrderCancelReject = '9',
  Logon = 'A',
  News = 'B',
  Email = 'C',
  OrderSingle = 'D',
  OrderList = 'E',
  OrderCancelRequest = 'F',
  OrderCancelReplaceRequest = 'G',
  OrderStatusRequest = 'H',
  AllocationInstruction = 'J',
  ListCancelRequest = 'K',
  ListExecute = 'L',
  ListStatusRequest = 'M',
  ListStatus = 'N',
  AllocationInstructionAck = 'P',
  DontKnowTrade = 'Q',
  QuoteRequest = 'R',
  Quote = 'S',
  SettlementInstructions = 'T',
  MarketDataRequest = 'V',
  MarketDataSnapshotFullRefresh = 'W',
  MarketDataIncrementalRefresh = 'X',
  MarketDataRequestReject = 'Y',
  QuoteCancel = 'Z',
  QuoteStatusRequest = 'a',
  MassQuoteAcknowledgement = 'b',
  SecurityDefinitionRequest = 'c',
  SecurityDefinition = 'd',
  SecurityStatusRequest = 'e',
  SecurityStatus = 'f',
  TradingSessionStatusRequest = 'g',
  TradingSessionStatus = 'h',
  MassQuote = 'i',
  BusinessMessageReject = 'j',
  BidRequest = 'k',
  BidResponse = 'l',
  ListStrikePrice = 'm',
  XmlMessage = 'n',
  RegistrationInstructions = 'o',
  RegistrationInstructionsResponse = 'p',
  OrderMassCancelRequest = 'q',
  OrderMassCancelReport = 'r',
  NewOrderS = 's',
  CrossOrderCancelReplaceRequest = 't',
  CrossOrderCancelRequest = 'u',
  SecurityTypeRequest = 'v',
  SecurityTypes = 'w',
  SecurityListRequest = 'x',
  SecurityList = 'y',
  DerivativeSecurityListRequest = 'z',
  DerivativeSecurityList = 'AA',
  NewOrderAb = 'AB',
  MultilegOrderCancelReplace = 'AC',
  TradeCaptureReportRequest = 'AD',
  TradeCaptureReport = 'AE',
  OrderMassStatusRequest = 'AF',
  QuoteRequestReject = 'AG',
  RfqRequest = 'AH',
  QuoteStatusReport = 'AI',
  QuoteResponse = 'AJ',
  Confirmation = 'AK',
  PositionMaintenanceRequest = 'AL',
  PositionMaintenanceReport = 'AM',
  RequestForPositions = 'AN',
  RequestForPositionsAck = 'AO',
  PositionReport = 'AP',
  TradeCaptureReportRequestAck = 'AQ',
  TradeCaptureReportAck = 'AR',
  AllocationReport = 'AS',
  AllocationReportAck = 'AT',
  ConfirmationAck = 'AU',
  SettlementInstructionRequest = 'AV',
  AssignmentReport = 'AW',
  CollateralRequest = 'AX',
  CollateralAssignment = 'AY',
  CollateralResponse = 'AZ',
  CollateralReport = 'BA',
  CollateralInquiry = 'BB',
  NetworkBc = 'BC',
  NetworkBd = 'BD',
  UserRequest = 'BE',
  UserResponse = 'BF',
  CollateralInquiryAck = 'BG',
  ConfirmationRequest = 'BH'
}

export enum OrdStatus {
  New = '0',
  PartiallyFilled = '1',
  Filled = '2',
  DoneForDay = '3',
  Canceled = '4',
  PendingCancel = '6',
  Stopped = '7',
  Rejected = '8',
  Suspended = '9',
  PendingNew = 'A',
  Calculated = 'B',
  Expired = 'C',
  AcceptedForBidding = 'D',
  PendingReplace = 'E'
}

export enum OrdType {
  Market = '1',
  Limit = '2',
  Stop = '3',
  StopLimit = '4',
  WithOrWithout = '6',
  LimitOrBetter = '7',
  LimitWithOrWithout = '8',
  OnBasis = '9',
  PreviouslyQuoted = 'D',
  PreviouslyIndicated = 'E',
  Forex = 'G',
  Funari = 'I',
  MarketIfTouched = 'J',
  MarketWithLeftoverAsLimit = 'K',
  PreviousFundValuationPoint = 'L',
  NextFundValuationPoint = 'M',
  Pegged = 'P'
}

export enum PossDupFlag {
  Yes = 'Y',
  No = 'N'
}

export enum Side {
  Buy = '1',
  Sell = '2',
  BuyMinus = '3',
  SellPlus = '4',
  SellShort = '5',
  SellShortExempt = '6',
  Undisclosed = '7',
  Cross = '8',
  CrossShort = '9',
  CrossShortExempt = 'A',
  AsDefined = 'B',
  Opposite = 'C',
  Subscribe = 'D',
  Redeem = 'E',
  Lend = 'F',
  Borrow = 'G'
}

export enum TimeInForce {
  Day = '0',
  GoodTillCancel = '1',
  AtTheOpening = '2',
  ImmediateOrCancel = '3',
  FillOrKill = '4',
  GoodTillCrossing = '5',
  GoodTillDate = '6',
  AtTheClose = '7'
}

export enum Urgency {
  Normal = '0',
  Flash = '1',
  Background = '2'
}

export enum SettlType {
  Regular = '0',
  Cash = '1',
  NextDay = '2',
  TPlus2 = '3',
  TPlus3 = '4',
  TPlus4 = '5',
  Future = '6',
  WhenAndIfIssued = '7',
  SellersOption = '8',
  TPlus5 = '9'
}

export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2'
}

export enum PositionEffect {
  Open = 'O',
  Close = 'C',
  Rolled = 'R',
  Fifo = 'F'
}

export enum ProcessCode {
  Regular = '0',
  SoftDollar = '1',
  StepIn = '2',
  StepOut = '3',
  SoftDollarStepIn = '4',
  SoftDollarStepOut = '5',
  PlanSponsor = '6'
}

export enum AllocStatus {
  Accepted = 0,
  BlockLevelReject = 1,
  AccountLevelReject = 2,
  Received = 3,
  Incomplete = 4,
  RejectedByIntermediary = 5
}

export enum AllocRejCode {
  UnknownAccount = 0,
  IncorrectQuantity = 1,
  IncorrectAveragePrice = 2,
  UnknownExecutingBrokerMnemonic = 3,
  CommissionDifference = 4,
  UnknownOrderid = 5,
  UnknownListid = 6,
  Other = 7,
  IncorrectAllocatedQuantity = 8,
  CalculationDifference = 9,
  UnknownOrStaleExecid = 10,
  MismatchedDataValue = 11,
  UnknownClordid = 12,
  WarehouseRequestRejected = 13
}

export enum EmailType {
  New = '0',
  Reply = '1',
  AdminReply = '2'
}

export enum PossResend {
  Yes = 'Y',
  No = 'N'
}

export enum EncryptMethod {
  None = 0,
  Pkcs = 1,
  Des = 2,
  PkcsDes = 3,
  PgpDes = 4,
  PgpDesMd5 = 5,
  PemDesMd5 = 6
}

export enum CxlRejReason {
  TooLateToCancel = 0,
  UnknownOrder = 1,
  Broker = 2,
  OrderAlreadyInPendingCancelOrPendingReplaceStatus = 3,
  UnableToProcessOrderMassCancelRequest = 4,
  Origordmodtime = 5,
  DuplicateClordid = 6,
  Other = 99
}

export enum OrdRejReason {
  Broker = 0,
  UnknownSymbol = 1,
  ExchangeClosed = 2,
  OrderExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownOrder = 5,
  DuplicateOrder = 6,
  DuplicateOfAVerballyCommunicatedOrder = 7,
  StaleOrder = 8,
  TradeAlongRequired = 9,
  InvalidInvestorId = 10,
  UnsupportedOrderCharacteristic12SurveillenceOption = 11,
  IncorrectQuantity = 13,
  IncorrectAllocatedQuantity = 14,
  UnknownAccount = 15,
  Other = 99
}

export enum IOIQualifier {
  AllOrNone = 'A',
  MarketOnClose = 'B',
  AtTheClose = 'C',
  Vwap = 'D',
  InTouchWith = 'I',
  Limit = 'L',
  MoreBehind = 'M',
  AtTheOpen = 'O',
  TakingAPosition = 'P',
  AtTheMarket = 'Q',
  ReadyToTrade = 'R',
  PortfolioShown = 'S',
  ThroughTheDay = 'T',
  Versus = 'V',
  Indication = 'W',
  CrossingOpportunity = 'X',
  AtTheMidpoint = 'Y',
  PreOpen = 'Z'
}

export enum ReportToExch {
  Yes = 'Y',
  No = 'N'
}

export enum LocateReqd {
  Yes = 'Y',
  No = 'N'
}

export enum ForexReq {
  Yes = 'Y',
  No = 'N'
}

export enum GapFillFlag {
  Yes = 'Y',
  No = 'N'
}

export enum DKReason {
  UnknownSymbol = 'A',
  WrongSide = 'B',
  QuantityExceedsOrder = 'C',
  NoMatchingOrder = 'D',
  PriceExceedsLimit = 'E',
  CalculationDifference = 'F',
  Other = 'Z'
}

export enum IOINaturalFlag {
  Yes = 'Y',
  No = 'N'
}

export enum MiscFeeType {
  Regulatory = '1',
  Tax = '2',
  LocalCommission = '3',
  ExchangeFees = '4',
  Stamp = '5',
  Levy = '6',
  Other = '7',
  Markup = '8',
  ConsumptionTax = '9',
  PerTransaction = '10',
  Conversion = '11',
  Agent = '12'
}

export enum ResetSeqNumFlag {
  Yes = 'Y',
  No = 'N'
}

export enum ExecType {
  New = '0',
  DoneForDay = '3',
  Canceled = '4',
  Replace = '5',
  PendingCancel = '6',
  Stopped = '7',
  Rejected = '8',
  Suspended = '9',
  PendingNew = 'A',
  Calculated = 'B',
  Expired = 'C',
  Restated = 'D',
  PendingReplace = 'E',
  Trade = 'F',
  TradeCorrect = 'G',
  TradeCancel = 'H',
  OrderStatus = 'I'
}

export enum SettlCurrFxRateCalc {
  Multiply = 'M',
  Divide = 'D'
}

export enum SettlInstMode {
  StandingInstructionsProvided = '1',
  SpecificOrderForASingleAccount = '4',
  RequestReject = '5'
}

export enum SettlInstTransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R',
  Restate = 'T'
}

export enum SettlInstSource {
  BrokersInstructions = '1',
  InstitutionsInstructions = '2',
  Investor = '3'
}

export enum SecurityType {
  Future = 'FUT',
  Option = 'OPT',
  EuroSupranationalCoupons = 'EUSUPRA',
  FederalAgencyCoupon = 'FAC',
  FederalAgencyDiscountNote = 'FADN',
  PrivateExportFunding = 'PEF',
  UsdSupranationalCoupons = 'SUPRA',
  CorporateBond = 'CORP',
  CorporatePrivatePlacement = 'CPP',
  ConvertibleBond = 'CB',
  DualCurrency = 'DUAL',
  EuroCorporateBond = 'EUCORP',
  IndexedLinked = 'XLINKD',
  StructuredNotes = 'STRUCT',
  YankeeCorporateBond = 'YANK',
  ForeignExchangeContract = 'FOR',
  CommonStock = 'CS',
  PreferredStock = 'PS',
  BradyBond = 'BRADY',
  EuroSovereigns = 'EUSOV',
  UsTreasuryBond = 'TBOND',
  InterestStripFromAnyBondOrNote = 'TINT',
  TreasuryInflationProtectedSecurities = 'TIPS',
  PrincipalStripOfACallableBondOrNote = 'TCAL',
  PrincipalStripFromANonCallableBondOrNote = 'TPRN',
  UsTreasuryNoteUst = 'UST',
  UsTreasuryBillUstb = 'USTB',
  UsTreasuryNoteTnote = 'TNOTE',
  UsTreasuryBillTbill = 'TBILL',
  Repurchase = 'REPO',
  Forward = 'FORWARD',
  BuySellback = 'BUYSELL',
  SecuritiesLoan = 'SECLOAN',
  SecuritiesPledge = 'SECPLEDGE',
  TermLoan = 'TERM',
  RevolverLoan = 'RVLV',
  RevolverTermLoan = 'RVLVTRM',
  BridgeLoan = 'BRIDGE',
  LetterOfCredit = 'LOFC',
  SwingLineFacility = 'SWING',
  DebtorInPossession = 'DINP',
  Defaulted = 'DEFLTED',
  Withdrawn = 'WITHDRN',
  Replaced = 'REPLACD',
  Matured = 'MATURED',
  AmendedRestated = 'AMENDED',
  Retired = 'RETIRED',
  BankersAcceptance = 'BA',
  BankNotes = 'BN',
  BillOfExchanges = 'BOX',
  CertificateOfDeposit = 'CD',
  CallLoans = 'CL',
  CommercialPaper = 'CP',
  DepositNotes = 'DN',
  EuroCertificateOfDeposit = 'EUCD',
  EuroCommercialPaper = 'EUCP',
  LiquidityNote = 'LQN',
  MediumTermNotes = 'MTN',
  Overnight = 'ONITE',
  PromissoryNote = 'PN',
  PlazosFijos = 'PZFJ',
  ShortTermLoanNote = 'STN',
  TimeDeposit = 'TD',
  ExtendedCommNote = 'XCN',
  YankeeCertificateOfDeposit = 'YCD',
  AssetBackedSecurities = 'ABS',
  CorpMortgageBackedSecurities = 'CMBS',
  CollateralizedMortgageObligation = 'CMO',
  IoetteMortgage = 'IET',
  MortgageBackedSecurities = 'MBS',
  MortgageInterestOnly = 'MIO',
  MortgagePrincipalOnly = 'MPO',
  MortgagePrivatePlacement = 'MPP',
  MiscellaneousPassThrough = 'MPT',
  Pfandbriefe = 'PFAND',
  ToBeAnnounced = 'TBA',
  OtherAnticipationNotesBanGanEtc = 'AN',
  CertificateOfObligation = 'COFO',
  CertificateOfParticipation = 'COFP',
  GeneralObligationBonds = 'GO',
  MandatoryTender = 'MT',
  RevenueAnticipationNote = 'RAN',
  RevenueBonds = 'REV',
  SpecialAssessment = 'SPCLA',
  SpecialObligation = 'SPCLO',
  SpecialTax = 'SPCLT',
  TaxAnticipationNote = 'TAN',
  TaxAllocation = 'TAXA',
  TaxExemptCommercialPaper = 'TECP',
  TaxRevenueAnticipationNote = 'TRAN',
  VariableRateDemandNote = 'VRDN',
  Warrant = 'WAR',
  MutualFund = 'MF',
  MultiLegInstrument = 'MLEG',
  NoSecurityType = 'NONE'
}

export enum StandInstDbType {
  Other = 0,
  DtcSid = 1,
  ThomsonAlert = 2,
  AGlobalCustodian = 3,
  Accountnet = 4
}

export enum SettlDeliveryType {
  VersusPaymentDeliver = 0,
  FreeDeliver = 1,
  TriParty = 2,
  HoldInCustody = 3
}

export enum AllocLinkType {
  FXNetting = 0,
  FXSwap = 1
}

export enum PutOrCall {
  Put = 0,
  Call = 1
}

export enum CoveredOrUncovered {
  Covered = 0,
  Uncovered = 1
}

export enum NotifyBrokerOfCredit {
  Yes = 'Y',
  No = 'N'
}

export enum AllocHandlInst {
  Match = 1,
  Forward = 2,
  ForwardAndMatch = 3
}

export enum RoutingType {
  TargetFirm = 1,
  TargetList = 2,
  BlockFirm = 3,
  BlockList = 4
}

export enum StipulationType {
  Amt = 'AMT',
  AutoReinvestmentAtRateOrBetter = 'AUTOREINV',
  BankQualified = 'BANKQUAL',
  BargainConditionsSee = 'BGNCON',
  CouponRange = 'COUPON',
  IsoCurrencyCode = 'CURRENCY',
  CustomStartEndDate = 'CUSTOMDATE',
  GeographicsAndRange = 'GEOG',
  ValuationDiscount = 'HAIRCUT',
  Insured = 'INSURED',
  YearOrYearMonthOfIssue = 'ISSUE',
  IssuersTicker = 'ISSUER',
  IssueSizeRange = 'ISSUESIZE',
  LookbackDays = 'LOOKBACK',
  ExplicitLotIdentifier = 'LOT',
  LotVariance = 'LOTVAR',
  MaturityYearAndMonth = 'MAT',
  MaturityRange = 'MATURITY',
  MaximumSubstitutions = 'MAXSUBS',
  MinimumQuantity = 'MINQTY',
  MinimumIncrement = 'MININCR',
  MinimumDenomination = 'MINDNOM',
  PaymentFrequencyCalendar = 'PAYFREQ',
  NumberOfPieces = 'PIECES',
  PoolsMaximum = 'PMAX',
  PoolsPerMillion = 'PPM',
  PoolsPerLot = 'PPL',
  PoolsPerTrade = 'PPT',
  PriceRange = 'PRICE',
  PricingFrequency = 'PRICEFREQ',
  ProductionYear = 'PROD',
  CallProtection = 'PROTECT',
  Purpose = 'PURPOSE',
  BenchmarkPriceSource = 'PXSOURCE',
  RatingSourceAndRange = 'RATING',
  TypeOfRedemptionValuesAreNoncallableCallablePrefundedEscrowedtomaturityPutableConvertible = 'REDEMPTION',
  Restricted = 'RESTRICTED',
  MarketSector = 'SECTOR',
  SecuritytypeIncludedOrExcluded = 'SECTYPE',
  Structure = 'STRUCT',
  SubstitutionsFrequency = 'SUBSFREQ',
  SubstitutionsLeft = 'SUBSLEFT',
  FreeformText = 'TEXT',
  TradeVariance = 'TRDVAR',
  WeightedAverageCouponvalueInPercent = 'WAC',
  WeightedAverageLifeCouponValueInPercent = 'WAL',
  WeightedAverageLoanAgeValueInMonths = 'WALA',
  WeightedAverageMaturityValueInMonths = 'WAM',
  WholePool = 'WHOLE',
  YieldRange = 'YIELD'
}

export enum YieldType {
  AfterTaxYield = 'AFTERTAX',
  AnnualYield = 'ANNUAL',
  YieldAtIssue = 'ATISSUE',
  YieldToAverageMaturity = 'AVGMATURITY',
  BookYield = 'BOOK',
  YieldToNextCall = 'CALL',
  YieldChangeSinceClose = 'CHANGE',
  ClosingYield = 'CLOSE',
  CompoundYield = 'COMPOUND',
  CurrentYield = 'CURRENT',
  TrueGrossYield = 'GROSS',
  GovernmentEquivalentYield = 'GOVTEQUIV',
  YieldWithInflationAssumption = 'INFLATION',
  InverseFloaterBondYield = 'INVERSEFLOATER',
  MostRecentClosingYield = 'LASTCLOSE',
  ClosingYieldMostRecentMonth = 'LASTMONTH',
  ClosingYieldMostRecentQuarter = 'LASTQUARTER',
  ClosingYieldMostRecentYear = 'LASTYEAR',
  YieldToLongestAverageLife = 'LONGAVGLIFE',
  MarkToMarketYield = 'MARK',
  YieldToMaturity = 'MATURITY',
  YieldToNextRefund = 'NEXTREFUND',
  OpenAverageYield = 'OPENAVG',
  YieldToNextPut = 'PUT',
  PreviousCloseYield = 'PREVCLOSE',
  ProceedsYield = 'PROCEEDS',
  SemiAnnualYield = 'SEMIANNUAL',
  YieldToShortestAverageLife = 'SHORTAVGLIFE',
  SimpleYield = 'SIMPLE',
  TaxEquivalentYield = 'TAXEQUIV',
  YieldToTenderDate = 'TENDER',
  TrueYield = 'TRUE',
  YieldValueOf132 = 'VALUE1/32',
  YieldToWorst = 'WORST'
}

export enum TradedFlatSwitch {
  Yes = 'Y',
  No = 'N'
}

export enum SubscriptionRequestType {
  Snapshot = '0',
  SnapshotPlusUpdates = '1',
  DisablePreviousSnapshotPlusUpdateRequest = '2'
}

export enum MDUpdateType {
  FullRefresh = 0,
  IncrementalRefresh = 1
}

export enum AggregatedBook {
  Yes = 'Y',
  No = 'N'
}

export enum MDEntryType {
  Bid = '0',
  Offer = '1',
  Trade = '2',
  IndexValue = '3',
  OpeningPrice = '4',
  ClosingPrice = '5',
  SettlementPrice = '6',
  TradingSessionHighPrice = '7',
  TradingSessionLowPrice = '8',
  TradingSessionVwapPrice = '9',
  Imbalance = 'A',
  TradeVolume = 'B',
  OpenInterest = 'C'
}

export enum TickDirection {
  PlusTick = '0',
  ZeroPlusTick = '1',
  MinusTick = '2',
  ZeroMinusTick = '3'
}

export enum QuoteCondition {
  Open = 'A',
  Closed = 'B',
  ExchangeBest = 'C',
  ConsolidatedBest = 'D',
  Locked = 'E',
  Crossed = 'F',
  Depth = 'G',
  FastTrading = 'H',
  NonFirm = 'I'
}

export enum TradeCondition {
  Cash = 'A',
  AveragePriceTrade = 'B',
  CashTrade = 'C',
  NextDay = 'D',
  Opening = 'E',
  IntradayTradeDetail = 'F',
  Rule127Trade = 'G',
  Rule155Trade = 'H',
  SoldLast = 'I',
  NextDayTrade = 'J',
  Opened = 'K',
  Seller = 'L',
  Sold = 'M',
  StoppedStock = 'N',
  ImbalanceMoreBuyers = 'P',
  ImbalanceMoreSellers = 'Q',
  OpeningPrice = 'R'
}

export enum MDUpdateAction {
  New = '0',
  Change = '1',
  Delete = '2'
}

export enum MDReqRejReason {
  UnknownSymbol = '0',
  DuplicateMdreqid = '1',
  InsufficientBandwidth = '2',
  InsufficientPermissions = '3',
  UnsupportedSubscriptionrequesttype = '4',
  UnsupportedMarketdepth = '5',
  UnsupportedMdupdatetype = '6',
  UnsupportedAggregatedbook = '7',
  UnsupportedMdentrytype = '8',
  UnsupportedTradingsessionid = '9',
  UnsupportedScope = 'A',
  UnsupportedOpenclosesettleflag = 'B',
  UnsupportedMdimplicitdelete = 'C'
}

export enum DeleteReason {
  Cancelation = '0',
  Error = '1'
}

export enum OpenCloseSettlFlag {
  DailyOpen = '0',
  SessionOpen = '1',
  DeliverySettlementEntry = '2',
  ExpectedEntry = '3',
  EntryFromPreviousBusinessDay = '4',
  TheoreticalPriceValue = '5'
}

export enum FinancialStatus {
  Bankrupt = '1',
  PendingDelisting = '2'
}

export enum CorporateAction {
  ExDividend = 'A',
  ExDistribution = 'B',
  ExRights = 'C',
  New = 'D',
  ExInterest = 'E'
}

export enum QuoteStatus {
  Accepted = 0,
  CanceledForSymbol = 1,
  CanceledForSecurityType = 2,
  CanceledForUnderlying = 3,
  CanceledAll = 4,
  Rejected = 5,
  RemovedFromMarket = 6,
  Expired = 7,
  Query = 8,
  QuoteNotFound = 9,
  Pending = 10,
  Pass = 11,
  LockedMarketWarning = 12,
  CrossMarketWarning = 13,
  CanceledDueToLockMarket = 14,
  CanceledDueToCrossMarket = 15
}

export enum QuoteCancelType {
  CancelForSymbol = 1,
  CancelForSecurityType = 2,
  CancelForUnderlyingSymbol = 3,
  CancelAllQuotes = 4
}

export enum QuoteRejectReason {
  UnknownSymbol = 1,
  Exchange = 2,
  QuoteRequestExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownQuote = 5,
  DuplicateQuote = 6,
  InvalidBidAskSpread = 7,
  InvalidPrice = 8,
  NotAuthorizedToQuoteSecurity = 9,
  Other = 99
}

export enum QuoteResponseLevel {
  NoAcknowledgement = 0,
  AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
  AcknowledgeEachQuoteMessages = 2
}

export enum QuoteRequestType {
  Manual = 1,
  Automatic = 2
}

export enum SecurityRequestType {
  RequestSecurityIdentityAndSpecifications = 0,
  RequestSecurityIdentityForTheSpecificationsProvided = 1,
  RequestListSecurityTypes = 2,
  RequestListSecurities = 3
}

export enum SecurityResponseType {
  AcceptSecurityProposalAsIs = 1,
  AcceptSecurityProposalWithRevisionsAsIndicatedInTheMessage = 2,
  RejectSecurityProposal = 5,
  CanNotMatchSelectionCriteria = 6
}

export enum UnsolicitedIndicator {
  Yes = 'Y',
  No = 'N'
}

export enum SecurityTradingStatus {
  OpeningDelay = 1,
  TradingHalt = 2,
  Resume = 3,
  NoOpenNoResume = 4,
  PriceIndication = 5,
  TradingRangeIndication = 6,
  MarketImbalanceBuy = 7,
  MarketImbalanceSell = 8,
  MarketOnCloseImbalanceBuy = 9,
  MarketOnCloseImbalanceSell = 10,
  NoMarketImbalance = 12,
  NoMarketOnCloseImbalance = 13,
  ItsPreOpening = 14,
  NewPriceIndication = 15,
  TradeDisseminationTime = 16,
  ReadyToTrade = 17,
  NotAvailableForTrading = 18,
  NotTradedOnThisMarket = 19,
  UnknownOrInvalid = 20,
  PreOpen = 21,
  OpeningRotation = 22,
  FastMarket = 23
}

export enum HaltReasonChar {
  OrderImbalance = 'I',
  EquipmentChangeover = 'X',
  NewsPending = 'P',
  NewsDissemination = 'D',
  OrderInflux = 'E',
  AdditionalInformation = 'M'
}

export enum InViewOfCommon {
  Yes = 'Y',
  No = 'N'
}

export enum DueToRelated {
  Yes = 'Y',
  No = 'N'
}

export enum Adjustment {
  Cancel = 1,
  Error = 2,
  Correction = 3
}

export enum TradSesMethod {
  Electronic = 1,
  OpenOutcry = 2,
  TwoParty = 3
}

export enum TradSesMode {
  Testing = 1,
  Simulated = 2,
  Production = 3
}

export enum TradSesStatus {
  Unknown = 0,
  Halted = 1,
  Open = 2,
  Closed = 3,
  PreOpen = 4,
  PreClose = 5,
  RequestRejected = 6
}

export enum MessageEncoding {
  Jis = 'ISO-2022-JP',
  Euc = 'EUC-JP',
  ForUsingSjis = 'Shift_JIS',
  Unicode = 'UTF-8'
}

export enum SessionRejectReason {
  InvalidTagNumber = 0,
  RequiredTagMissing = 1,
  TagNotDefinedForThisMessageType = 2,
  UndefinedTag = 3,
  TagSpecifiedWithoutAValue = 4,
  ValueIsIncorrect = 5,
  IncorrectDataFormatForValue = 6,
  DecryptionProblem = 7,
  SignatureProblem = 8,
  CompidProblem = 9,
  SendingtimeAccuracyProblem = 10,
  InvalidMsgtype = 11,
  XmlValidationError = 12,
  TagAppearsMoreThanOnce = 13,
  TagSpecifiedOutOfRequiredOrder = 14,
  RepeatingGroupFieldsOutOfOrder = 15,
  IncorrectNumingroupCountForRepeatingGroup = 16,
  NonDataValueIncludesFieldDelimiter = 17,
  Other = 99
}

export enum BidRequestTransType {
  New = 'N',
  Cancel = 'C'
}

export enum SolicitedFlag {
  Yes = 'Y',
  No = 'N'
}

export enum ExecRestatementReason {
  GtCorporateAction = 0,
  GtRenewal = 1,
  VerbalChange = 2,
  RepricingOfOrder = 3,
  BrokerOption = 4,
  PartialDeclineOfOrderqty = 5,
  CancelOnTradingHalt = 6,
  CancelOnSystemFailure = 7,
  Market = 8,
  CanceledNotBest = 9,
  WarehouseRecap = 10,
  Other = 99
}

export enum BusinessRejectReason {
  Other = 0,
  UnkownId = 1,
  UnknownSecurity = 2,
  UnsupportedMessageType = 3,
  ApplicationNotAvailable = 4,
  ConditionallyRequiredFieldMissing = 5,
  NotAuthorized = 6,
  DelivertoFirmNotAvailableAtThisTime = 7
}

export enum MsgDirection {
  Send = 'S',
  Receive = 'R'
}

export enum DiscretionInst {
  RelatedToDisplayedPrice = '0',
  RelatedToMarketPrice = '1',
  RelatedToPrimaryPrice = '2',
  RelatedToLocalPrimaryPrice = '3',
  RelatedToMidpointPrice = '4',
  RelatedToLastTradePrice = '5',
  RelatedToVwap = '6'
}

export enum BidType {
  NonDisclosedStyle = 1,
  DisclosedStyle = 2,
  NoBiddingProcess = 3
}

export enum BidDescriptorType {
  Sector = 1,
  Country = 2,
  Index = 3
}

export enum SideValueInd {
  Sidevalue1 = 1,
  Sidevalue2 = 2
}

export enum LiquidityIndType {
  E5DayMovingAverage = 1,
  E20DayMovingAverage = 2,
  NormalMarketSize = 3,
  Other = 4
}

export enum ExchangeForPhysical {
  Yes = 'Y',
  No = 'N'
}

export enum ProgRptReqs {
  BuysideExplicitlyRequestsStatusUsingStatusrequest = 1,
  SellsidePeriodicallySendsStatusUsingListstatusPeriodOptionallySpecifiedInProgressperiod = 2,
  RealTimeExecutionReports = 3
}

export enum IncTaxInd {
  Net = 1,
  Gross = 2
}

export enum BidTradeType {
  RiskTrade = 'R',
  VwapGuarantee = 'G',
  Agency = 'A',
  GuaranteedClose = 'J'
}

export enum BasisPxType {
  ClosingPriceAtMorningSession = '2',
  ClosingPrice = '3',
  CurrentPrice = '4',
  Sq = '5',
  VwapThroughADay = '6',
  VwapThroughAMorningSession = '7',
  VwapThroughAnAfternoonSession = '8',
  VwapThroughADayExceptYori = '9',
  VwapThroughAMorningSessionExceptYori = 'A',
  VwapThroughAnAfternoonSessionExceptYori = 'B',
  Strike = 'C',
  Open = 'D',
  Others = 'Z'
}

export enum PriceType {
  Percentage = 1,
  PerUnit = 2,
  FixedAmount = 3,
  DiscountPercentagePointsBelowPar = 4,
  PremiumPercentagePointsOverPar = 5,
  Spread = 6,
  TedPrice = 7,
  TedYield = 8,
  Yield = 9,
  FixedCabinetTradePrice = 10,
  VariableCabinetTradePrice = 11
}

export enum GTBookingInst {
  BookOutAllTradesOnDayOfExecution = 0,
  AccumulateExecutionsUntilOrderIsFilledOrExpires = 1,
  AccumulateUntilVerballyNotifiedOtherwise = 2
}

export enum ListStatusType {
  Ack = 1,
  Response = 2,
  Timed = 3,
  Execstarted = 4,
  Alldone = 5,
  Alert = 6
}

export enum NetGrossInd {
  Net = 1,
  Gross = 2
}

export enum ListOrderStatus {
  Inbiddingprocess = 1,
  Receivedforexecution = 2,
  Executing = 3,
  Canceling = 4,
  Alert = 5,
  AllDone = 6,
  Reject = 7
}

export enum ListExecInstType {
  Immediate = '1',
  WaitForExecuteInstruction = '2',
  ExchangeSwitchCivOrderSellDriven = '3',
  ExchangeSwitchCivOrderBuyDrivenCashTopUp = '4',
  ExchangeSwitchCivOrderBuyDrivenCashWithdraw = '5'
}

export enum CxlRejResponseTo {
  OrderCancelRequest = '1',
  OrderCancelReplaceRequest = '2'
}

export enum MultiLegReportingType {
  SingleSecurity = '1',
  IndividualLegOfAMultiLegSecurity = '2',
  MultiLegSecurity = '3'
}

export enum PartyIDSource {
  KoreanInvestorId = '1',
  TaiwaneseQualifiedForeignInvestorIdQfii = '2',
  TaiwaneseTradingAccount = '3',
  MalaysianCentralDepository = '4',
  ChineseBShare = '5',
  UkNationalInsuranceOrPensionNumber = '6',
  UsSocialSecurityNumber = '7',
  UsEmployerIdentificationNumber = '8',
  AustralianBusinessNumber = '9',
  Bic = 'B',
  GenerallyAcceptedMarketParticipantIdentifier = 'C',
  ProprietaryCustomCode = 'D',
  IsoCountryCode = 'E',
  SettlementEntityLocation = 'F',
  Mic = 'G',
  CsdParticipantMemberCode = 'H',
  AustralianTaxFileNumber = 'A',
  DirectedBrokerThreeCharacterAcronymAsDefinedInIsitcEtcBestPracticeGuidelinesDocument = 'I'
}

export enum PartyRole {
  ExecutingFirm = 1,
  BrokerOfCredit = 2,
  ClientId = 3,
  ClearingFirm = 4,
  InvestorId = 5,
  IntroducingFirm = 6,
  EnteringFirm = 7,
  LocateLendingFirm = 8,
  FundManagerClientId = 9,
  SettlementLocation = 10,
  OrderOriginationTrader = 11,
  ExecutingTrader = 12,
  OrderOriginationFirm = 13,
  GiveupClearingFirm = 14,
  CorrespondantClearingFirm = 15,
  ExecutingSystem = 16,
  ContraFirm = 17,
  ContraClearingFirm = 18,
  SponsoringFirm = 19,
  UnderlyingContraFirm = 20,
  ClearingOrganization = 21,
  Exchange = 22,
  CustomerAccount = 24,
  CorrespondentClearingOrganization = 25,
  CorrespondentBroker = 26,
  BuyerSeller = 27,
  Custodian = 28,
  Intermediary = 29,
  Agent = 30,
  SubCustodian = 31,
  Beneficiary = 32,
  InterestedParty = 33,
  RegulatoryBody = 34,
  LiquidityProvider = 35,
  EnteringTrader = 36,
  ContraTrader = 37,
  PositionAccount = 38
}

export enum Product {
  Agency = 1,
  Commodity = 2,
  Corporate = 3,
  Currency = 4,
  Equity = 5,
  Government = 6,
  Index = 7,
  Loan = 8,
  Moneymarket = 9,
  Mortgage = 10,
  Municipal = 11,
  Other = 12,
  Financing = 13
}

export enum TestMessageIndicator {
  Yes = 'Y',
  No = 'N'
}

export enum RoundingDirection {
  RoundToNearest = '0',
  RoundDown = '1',
  RoundUp = '2'
}

export enum DistribPaymentMethod {
  Crest = 1,
  Nscc = 2,
  Euroclear = 3,
  Clearstream = 4,
  Cheque = 5,
  TelegraphicTransfer = 6,
  Fedwire = 7,
  DirectCredit = 8,
  AchCredit = 9,
  Bpay = 10,
  HighValueClearingSystem = 11,
  ReinvestInFund = 12
}

export enum CancellationRights {
  Yes = 'Y',
  NoExecutionOnly = 'N',
  NoWaiverAgreement = 'M',
  NoInstitutional = 'O'
}

export enum MoneyLaunderingStatus {
  ExemptBelowTheLimit = '1',
  ExemptClientMoneyTypeExemption = '2',
  ExemptAuthorisedCreditOrFinancialInstitution = '3',
  Passed = 'Y',
  NotChecked = 'N'
}

export enum ExecPriceType {
  BidPrice = 'B',
  CreationPrice = 'C',
  CreationPricePlusAdjustment = 'D',
  CreationPricePlusAdjustmentAmount = 'E',
  OfferPrice = 'O',
  OfferPriceMinusAdjustment = 'P',
  OfferPriceMinusAdjustmentAmount = 'Q',
  SinglePrice = 'S'
}

export enum PaymentMethod {
  Crest = 1,
  Nscc = 2,
  Euroclear = 3,
  Clearstream = 4,
  Cheque = 5,
  TelegraphicTransfer = 6,
  Fedwire = 7,
  DebitCard = 8,
  DirectDebit = 9,
  DirectCredit = 10,
  CreditCard = 11,
  AchDebit = 12,
  AchCredit = 13,
  Bpay = 14,
  HighValueClearingSystem = 15
}

export enum TaxAdvantageType {
  NoneNotApplicable = 0,
  MaxiIsa = 1,
  Tessa = 2,
  MiniCashIsa = 3,
  MiniStocksAndSharesIsa = 4,
  MiniInsuranceIsa = 5,
  CurrentYearPayment = 6,
  PriorYearPayment = 7,
  AssetTransfer = 8,
  Employee = 9,
  EmployeeCurrentYear = 10,
  Employer = 11,
  EmployerCurrentYear = 12,
  NonFundPrototypeIra = 13,
  NonFundQualifiedPlan = 14,
  DefinedContributionPlan = 15,
  IndividualRetirementAccount = 16,
  IndividualRetirementAccountRollover = 17,
  Keogh = 18,
  ProfitSharingPlan = 19,
  E401K = 20,
  SelfDirectedIra = 21,
  E403 = 22,
  E457 = 23,
  RothIra24 = 24,
  RothIra25 = 25,
  RothConversionIra26 = 26,
  RothConversionIra27 = 27,
  EducationIra28 = 28,
  EducationIra29 = 29
}

export enum FundRenewWaiv {
  Yes = 'Y',
  No = 'N'
}

export enum RegistStatus {
  Accepted = 'A',
  Rejected = 'R',
  Held = 'H',
  ReminderIeRegistrationInstructionsAreStillOutstanding = 'N'
}

export enum RegistRejReasonCode {
  InvalidUnacceptableAccountType = 1,
  InvalidUnacceptableTaxExemptType = 2,
  InvalidUnacceptableOwnershipType = 3,
  InvalidUnacceptableNoRegDetls = 4,
  InvalidUnacceptableRegSeqNo = 5,
  InvalidUnacceptableRegDtls = 6,
  InvalidUnacceptableMailingDtls = 7,
  InvalidUnacceptableMailingInst = 8,
  InvalidUnacceptableInvestorId = 9,
  InvalidUnacceptableInvestorIdSource = 10,
  InvalidUnacceptableDateOfBirth = 11,
  InvalidUnacceptableInvestorCountryOfResidence = 12,
  InvalidUnacceptableNodistribinstns = 13,
  InvalidUnacceptableDistribPercentage = 14,
  InvalidUnacceptableDistribPaymentMethod = 15,
  InvalidUnacceptableCashDistribAgentAcctName = 16,
  InvalidUnacceptableCashDistribAgentCode = 17,
  InvalidUnacceptableCashDistribAgentAcctNum = 18,
  Other = 99
}

export enum RegistTransType {
  New = '0',
  Replace = '1',
  Cancel = '2'
}

export enum OwnershipType {
  JointTrustees = '2',
  JointInvestors = 'J',
  TenantsInCommon = 'T'
}

export enum ContAmtType {
  CommissionAmount = 1,
  Commission = 2,
  InitialChargeAmount = 3,
  InitialCharge = 4,
  DiscountAmount = 5,
  Discount = 6,
  DilutionLevyAmount = 7,
  DilutionLevy = 8,
  ExitChargeAmount = 9,
  ExitCharge = 10,
  FundBasedRenewalCommission = 11,
  ProjectedFundValue = 12,
  FundBasedRenewalCommissionAmount13 = 13,
  FundBasedRenewalCommissionAmount14 = 14,
  NetSettlementAmount = 15
}

export enum OwnerType {
  IndividualInvestor = 1,
  PublicCompany = 2,
  PrivateCompany = 3,
  IndividualTrustee = 4,
  CompanyTrustee = 5,
  PensionPlan = 6,
  CustodianUnderGiftsToMinorsAct = 7,
  Trusts = 8,
  Fiduciaries = 9,
  NetworkingSubAccount = 10,
  NonProfitOrganization = 11,
  CorporateBody = 12,
  Nominee = 13
}

export enum OrderCapacity {
  Agency = 'A',
  Proprietary = 'G',
  Individual = 'I',
  Principal = 'P',
  RisklessPrincipal = 'R',
  AgentForOtherMember = 'W'
}

export enum OrderRestrictions {
  ProgramTrade = '1',
  IndexArbitrage = '2',
  NonIndexArbitrage = '3',
  CompetingMarketMaker = '4',
  ActingAsMarketMakerOrSpecialistInTheSecurity = '5',
  ActingAsMarketMakerOrSpecialistInTheUnderlyingSecurityOfADerivativeSecurity = '6',
  ForeignEntity = '7',
  ExternalMarketParticipant = '8',
  ExternalInterConnectedMarketLinkage = '9',
  RisklessArbitrage = 'A'
}

export enum MassCancelRequestType {
  CancelOrdersForASecurity = '1',
  CancelOrdersForAnUnderlyingSecurity = '2',
  CancelOrdersForAProduct = '3',
  CancelOrdersForACficode = '4',
  CancelOrdersForASecuritytype = '5',
  CancelOrdersForATradingSession = '6',
  CancelAllOrders = '7'
}

export enum MassCancelResponse {
  CancelRequestRejected = '0',
  CancelOrdersForASecurity = '1',
  CancelOrdersForAnUnderlyingSecurity = '2',
  CancelOrdersForAProduct = '3',
  CancelOrdersForACficode = '4',
  CancelOrdersForASecuritytype = '5',
  CancelOrdersForATradingSession = '6',
  CancelAllOrders = '7'
}

export enum MassCancelRejectReason {
  MassCancelNotSupported = '0',
  InvalidOrUnknownSecurity = '1',
  InvalidOrUnknownUnderlying = '2',
  InvalidOrUnknownProduct = '3',
  InvalidOrUnknownCficode = '4',
  InvalidOrUnknownSecurityType = '5',
  InvalidOrUnknownTradingSession = '6',
  Other = '99'
}

export enum QuoteType {
  Indicative = 0,
  Tradeable = 1,
  RestrictedTradeable = 2,
  Counter = 3
}

export enum CashMargin {
  Cash = '1',
  MarginOpen = '2',
  MarginClose = '3'
}

export enum Scope {
  Local = '1',
  National = '2',
  Global = '3'
}

export enum MDImplicitDelete {
  Yes = 'Y',
  No = 'N'
}

export enum CrossType {
  CrossTradeWhichIsExecutedCompletelyOrNotBothSidesAreTreatedInTheSameMannerThisIsEquivalentToAnAllOrNone = 1,
  CrossTradeWhichIsExecutedPartiallyAndTheRestIsCancelledOneSideIsFullyExecutedTheOtherSideIsPartiallyExecutedWithTheRemainderBeingCancelledThisIsEquivalentToAnImmediateOrCancelOnTheOtherSideNoteTheCrossprioritzation = 2,
  CrossTradeWhichIsPartiallyExecutedWithTheUnfilledPortionsRemainingActiveOneSideOfTheCrossIsFullyExecuted = 3,
  CrossTradeIsExecutedWithExistingOrdersWithTheSamePriceInTheCaseOtherOrdersExistWithTheSamePriceTheQuantityOfTheCrossIsExecutedAgainstTheExistingOrdersAndQuotesTheRemainderOfTheCrossIsExecutedAgainstTheOtherSideOfTheCrossTheTwoSidesPotentiallyHaveDifferentQuantities = 4
}

export enum CrossPrioritization {
  None = 0,
  BuySideIsPrioritized = 1,
  SellSideIsPrioritized = 2
}

export enum NoSides {
  OneSide = 1,
  BothSides = 2
}

export enum SecurityListRequestType {
  Symbol = 0,
  SecuritytypeAndOrCficode = 1,
  Product = 2,
  Tradingsessionid = 3,
  AllSecurities = 4
}

export enum SecurityRequestResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoInstrumentsFoundThatMatchSelectionCriteria = 2,
  NotAuthorizedToRetrieveInstrumentData = 3,
  InstrumentDataTemporarilyUnavailable = 4,
  RequestForInstrumentDataNotSupported = 5
}

export enum MultiLegRptTypeReq {
  ReportByMulitlegSecurityOnly = 0,
  ReportByMultilegSecurityAndByInstrumentLegsBelongingToTheMultilegSecurity = 1,
  ReportByInstrumentLegsBelongingToTheMultilegSecurityOnly = 2
}

export enum TradSesStatusRejReason {
  UnknownOrInvalidTradingsessionid = 1,
  Other = 99
}

export enum TradeRequestType {
  AllTrades = 0,
  MatchedTradesMatchingCriteriaProvidedOnRequest = 1,
  UnmatchedTradesThatMatchCriteria = 2,
  UnreportedTradesThatMatchCriteria = 3,
  AdvisoriesThatMatchCriteria = 4
}

export enum PreviouslyReported {
  Yes = 'Y',
  No = 'N'
}

export enum MatchStatus {
  ComparedMatchedOrAffirmed = '0',
  UncomparedUnmatchedOrUnaffirmed = '1',
  AdvisoryOrAlert = '2'
}

export enum MatchType {
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadgesAndExecutionTime = 'A1',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadges = 'A2',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusTwoBadgesAndExecutionTime = 'A3',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusTwoBadges = 'A4',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusExecutionTime = 'A5',
  ComparedRecordsResultingFromStampedAdvisoriesOrSpecialistAcceptsPairOffs = 'AQ',
  SummarizedMatchUsingA1ExactMatchCriteriaExceptQuantityIsSummarized = 'S1',
  SummarizedMatchUsingA2ExactMatchCriteriaExceptQuantityIsSummarized = 'S2',
  SummarizedMatchUsingA3ExactMatchCriteriaExceptQuantityIsSummarized = 'S3',
  SummarizedMatchUsingA4ExactMatchCriteriaExceptQuantityIsSummarized = 'S4',
  SummarizedMatchUsingA5ExactMatchCriteriaExceptQuantityIsSummarized = 'S5',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorMinusBadgesAndTimesActM1Match = 'M1',
  SummarizedMatchMinusBadgesAndTimesActM2Match = 'M2',
  OcsLockedInNonAct = 'MT',
  ActAcceptedTrade = 'M3',
  ActDefaultTrade = 'M4',
  ActDefaultAfterM2 = 'M5',
  ActM6Match = 'M6'
}

export enum OddLot {
  Yes = 'Y',
  No = 'N'
}

export enum ClearingInstruction {
  ProcessNormally = 0,
  ExcludeFromAllNetting = 1,
  BilateralNettingOnly = 2,
  ExClearing = 3,
  SpecialTrade = 4,
  MultilateralNetting = 5,
  ClearAgainstCentralCounterparty = 6,
  ExcludeFromCentralCounterparty = 7,
  ManualMode = 8,
  AutomaticPostingMode = 9,
  AutomaticGiveUpMode = 10,
  QualifiedServiceRepresentative = 11,
  CustomerTrade = 12,
  SelfClearing = 13
}

export enum AccountType {
  AccountIsCarriedOnCustomerSideOfBooks = 1,
  AccountIsCarriedOnNonCustomerSideOfBooks = 2,
  HouseTrader = 3,
  FloorTrader = 4,
  AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined = 6,
  AccountIsHouseTraderAndIsCrossMargined = 7,
  JointBackofficeAccount = 8
}

export enum CustOrderCapacity {
  MemberTradingForTheirOwnAccount = 1,
  ClearingFirmTradingForItsProprietaryAccount = 2,
  MemberTradingForAnotherMember = 3,
  AllOther = 4
}

export enum MassStatusReqType {
  StatusForOrdersForASecurity = 1,
  StatusForOrdersForAnUnderlyingSecurity = 2,
  StatusForOrdersForAProduct = 3,
  StatusForOrdersForACficode = 4,
  StatusForOrdersForASecuritytype = 5,
  StatusForOrdersForATradingSession = 6,
  StatusForAllOrders = 7,
  StatusForOrdersForAPartyid = 8
}

export enum DayBookingInst {
  CanTriggerBookingWithoutReferenceToTheOrderInitiator = '0',
  SpeakWithOrderInitiatorBeforeBooking = '1',
  Accumulate = '2'
}

export enum BookingUnit {
  EachPartialExecutionIsABookableUnit = '0',
  AggregatePartialExecutionsOnThisOrderAndBookOneTradePerOrder = '1',
  AggregateExecutionsForThisSymbolSideAndSettlementDate = '2'
}

export enum PreallocMethod {
  ProRata = '0',
  DoNotProRataDiscussFirst = '1'
}

export enum AllocType {
  Calculated = 1,
  Preliminary = 2,
  ReadyToBook = 5,
  WarehouseInstruction = 7,
  RequestToIntermediary = 8
}

export enum ClearingFeeIndicator {
  E1stYearDelegateTradingForHisOwnAccount = '1',
  E2ndYearDelegateTradingForHisOwnAccount = '2',
  E3rdYearDelegateTradingForHisOwnAccount = '3',
  E4thYearDelegateTradingForHisOwnAccount = '4',
  E5thYearDelegateTradingForHisOwnAccount = '5',
  E6thYearAndBeyondDelegateTradingForHisOwnAccount = '9',
  CboeMember = 'B',
  NonMemberAndCustomer = 'C',
  EquityMemberAndClearingMember = 'E',
  FullAndAssociateMemberTradingForOwnAccountAndAsFloorBrokers = 'F',
  E106HAnd106JFirms = 'H',
  GimIdemAndComMembershipInterestHolders = 'I',
  LesseeAnd106FEmployees = 'L',
  AllOtherOwnershipTypes = 'M'
}

export enum WorkingIndicator {
  Yes = 'Y',
  No = 'N'
}

export enum PriorityIndicator {
  PriorityUnchanged = 0,
  LostPriorityAsResultOfOrderChange = 1
}

export enum LegalConfirm {
  Yes = 'Y',
  No = 'N'
}

export enum QuoteRequestRejectReason {
  UnknownSymbol = 1,
  Exchange = 2,
  QuoteRequestExceedsLimit = 3,
  TooLateToEnter = 4,
  InvalidPrice = 5,
  NotAuthorizedToRequestQuote = 6,
  NoMatchForInquiry = 7,
  NoMarketForInstrument = 8,
  NoInventory = 9,
  Pass = 10,
  Other = 99
}

export enum AcctIDSource {
  Bic = 1,
  SidCode = 2,
  Tfm = 3,
  Omgeo = 4,
  DtccCode = 5,
  Other = 99
}

export enum ConfirmStatus {
  Received = 1,
  MismatchedAccount = 2,
  MissingSettlementInstructions = 3,
  Confirmed = 4,
  RequestRejected = 5
}

export enum ConfirmTransType {
  New = 0,
  Replace = 1,
  Cancel = 2
}

export enum DeliveryForm {
  Bookentry = 1,
  Bearer = 2
}

export enum LegSwapType {
  ParForPar = 1,
  ModifiedDuration = 2,
  Risk = 4,
  Proceeds = 5
}

export enum QuotePriceType {
  Percent = 1,
  PerShare = 2,
  FixedAmount = 3,
  DiscountPercentagePointsBelowPar = 4,
  PremiumPercentagePointsOverPar = 5,
  BasisPointsRelativeToBenchmark = 6,
  TedPrice = 7,
  TedYield = 8,
  YieldSpread = 9,
  Yield = 10
}

export enum QuoteRespType {
  HitLift = 1,
  Counter = 2,
  Expired = 3,
  Cover = 4,
  DoneAway = 5,
  Pass = 6
}

export enum PosType {
  TransactionQuantity = 'TQ',
  IntraSpreadQty = 'IAS',
  InterSpreadQty = 'IES',
  EndOfDayQty = 'FIN',
  StartOfDayQty = 'SOD',
  OptionExerciseQty = 'EX',
  OptionAssignment = 'AS',
  TransactionFromExercise = 'TX',
  TransactionFromAssignment = 'TA',
  PitTradeQty = 'PIT',
  TransferTradeQty = 'TRF',
  ElectronicTradeQty = 'ETR',
  AllocationTradeQty = 'ALC',
  AdjustmentQty = 'PA',
  AsOfTradeQty = 'ASF',
  DeliveryQty = 'DLV',
  TotalTransactionQty = 'TOT',
  CrossMarginQty = 'XM',
  IntegralSplit = 'SPL'
}

export enum PosQtyStatus {
  Submitted = 0,
  Accepted = 1,
  Rejected = 2
}

export enum PosAmtType {
  FinalMarkToMarketAmount = 'FMTM',
  IncrementalMarkToMarketAmount = 'IMTM',
  TradeVariationAmount = 'TVAR',
  StartOfDayMarkToMarketAmount = 'SMTM',
  PremiumAmount = 'PREM',
  CashResidualAmount = 'CRES',
  CashAmount = 'CASH',
  ValueAdjustedAmount = 'VADJ'
}

export enum PosTransType {
  Exercise = 1,
  DoNotExercise = 2,
  PositionAdjustment = 3,
  PositionChangeSubmissionMarginDisposition = 4,
  Pledge = 5
}

export enum PosMaintAction {
  NewUsedToIncrementTheOverallTransactionQuantity = 1,
  ReplaceUsedToOverrideTheOverallTransactionQuantityOrSpecificAddMessagesBasedOnTheReferenceId = 2,
  CancelUsedToRemoveTheOverallTransactionOrSpecificAddMessagesBasedOnReferenceId = 3
}

export enum SettlSessID {
  Intraday = 'ITD',
  RegularTradingHours = 'RTH',
  ElectronicTradingHours = 'ETH'
}

export enum AdjustmentType {
  ProcessRequestAsMarginDisposition = 0,
  DeltaPlus = 1,
  DeltaMinus = 2,
  Final = 3
}

export enum PosMaintStatus {
  Accepted = 0,
  AcceptedWithWarnings = 1,
  Rejected = 2,
  Completed = 3,
  CompletedWithWarnings = 4
}

export enum PosMaintResult {
  SuccessfulCompletion = 0,
  Rejected = 1,
  Other = 99
}

export enum PosReqType {
  Positions = 0,
  Trades = 1,
  Exercises = 2,
  Assignments = 3
}

export enum ResponseTransportType {
  InbandTransportTheRequestWasSentOver = 0,
  OutOfBandPreArrangedOutOfBandDeliveryMechanism = 1
}

export enum PosReqResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoPositionsFoundThatMatchCriteria = 2,
  NotAuthorizedToRequestPositions = 3,
  RequestForPositionNotSupported = 4,
  Other = 99
}

export enum PosReqStatus {
  Completed = 0,
  CompletedWithWarnings = 1,
  Rejected = 2
}

export enum SettlPriceType {
  Final = 1,
  Theoretical = 2
}

export enum AssignmentMethod {
  Random = 'R',
  Prorata = 'P'
}

export enum ExerciseMethod {
  Automatic = 'A',
  Manual = 'M'
}

export enum TradeRequestResult {
  Successful = 0,
  InvalidOrUnknownInstrument = 1,
  InvalidTypeOfTradeRequested = 2,
  InvalidParties = 3,
  InvalidTransportTypeRequested = 4,
  InvalidDestinationRequested = 5,
  TraderequesttypeNotSupported = 8,
  UnauthorizedForTradeCaptureReportRequest = 9,
  Other = 99
}

export enum TradeRequestStatus {
  Accepted = 0,
  Completed = 1,
  Rejected = 2
}

export enum TradeReportRejectReason {
  Successful = 0,
  InvalidPartyInformation = 1,
  UnknownInstrument = 2,
  UnauthorizedToReportTrades = 3,
  InvalidTradeType = 4,
  Other = 99
}

export enum SideMultiLegReportingType {
  SingleSecurity = 1,
  IndividualLegOfAMultiLegSecurity = 2,
  MultiLegSecurity = 3
}

export enum TrdRegTimestampType {
  ExecutionTime = 1,
  TimeIn = 2,
  TimeOut = 3,
  BrokerReceipt = 4,
  BrokerExecution = 5
}

export enum ConfirmType {
  Status = 1,
  Confirmation = 2,
  ConfirmationRequestRejected = 3
}

export enum ConfirmRejReason {
  MismatchedAccount = 1,
  MissingSettlementInstructions = 2,
  Other = 99
}

export enum BookingType {
  RegularBooking = 0,
  Cfd = 1,
  TotalReturnSwap = 2
}

export enum AllocSettlInstType {
  UseDefaultInstructions = 0,
  DeriveFromParametersProvided = 1,
  FullDetailsProvided = 2,
  SsiDbIdsProvided = 3,
  PhoneForInstructions = 4
}

export enum DlvyInstType {
  Securities = 'S',
  Cash = 'C'
}

export enum TerminationType {
  Overnight = 1,
  Term = 2,
  Flexible = 3,
  Open = 4
}

export enum SettlInstReqRejCode {
  UnableToProcessRequest = 0,
  UnknownAccount = 1,
  NoMatchingSettlementInstructionsFound = 2,
  Other = 99
}

export enum AllocReportType {
  SellsideCalculatedUsingPreliminary = 3,
  SellsideCalculatedWithoutPreliminary = 4,
  WarehouseRecap = 5,
  RequestToIntermediary = 8
}

export enum AllocCancReplaceReason {
  OriginalDetailsIncompleteIncorrect = 1,
  ChangeInUnderlyingOrderDetails = 2,
  Other = 99
}

export enum AllocAccountType {
  AccountIsCarriedOnCustomerSideOfBooks = 1,
  AccountIsCarriedOnNonCustomerSideOfBooks = 2,
  HouseTrader = 3,
  FloorTrader = 4,
  AccountIsCarriedOnNonCustomerSideOfBooksAndIsCrossMargined = 6,
  AccountIsHouseTraderAndIsCrossMargined = 7,
  JointBackofficeAccount = 8
}

export enum PartySubIDType {
  Firm = 1,
  Person = 2,
  System = 3,
  Application = 4,
  FullLegalNameOfFirm = 5,
  PostalAddress = 6,
  PhoneNumber = 7,
  EmailAddress = 8,
  ContactName = 9,
  SecuritiesAccountNumber = 10,
  RegistrationNumber = 11,
  RegisteredAddress12 = 12,
  RegulatoryStatus = 13,
  RegistrationName = 14,
  CashAccountNumber = 15,
  Bic = 16,
  CsdParticipantMemberCode = 17,
  RegisteredAddress18 = 18,
  FundAccountName = 19,
  TelexNumber = 20,
  FaxNumber = 21,
  SecuritiesAccountName = 22,
  CashAccountName = 23,
  Department = 24,
  Location = 25,
  PositionAccountType = 26
}

export enum AllocIntermedReqType {
  PendingAccept = 1,
  PendingRelease = 2,
  PendingReversal = 3,
  Accept = 4,
  BlockLevelReject = 5,
  AccountLevelReject = 6
}

export enum ApplQueueResolution {
  NoActionTaken = 0,
  QueueFlushed = 1,
  OverlayLast = 2,
  EndSession = 3
}

export enum ApplQueueAction {
  NoActionTaken = 0,
  QueueFlushed = 1,
  OverlayLast = 2,
  EndSession = 3
}

export enum AvgPxIndicator {
  NoAveragePricing = 0,
  TradeIsPartOfAnAveragePriceGroupIdentifiedByTheTradelinkid = 1,
  LastTradeInTheAveragePriceGroupIdentifiedByTheTradelinkid = 2
}

export enum TradeAllocIndicator {
  AllocationNotRequired = 0,
  AllocationRequired = 1,
  UseAllocationProvidedWithTheTrade = 2
}

export enum ExpirationCycle {
  ExpireOnTradingSessionClose = 0,
  ExpireOnTradingSessionOpen = 1
}

export enum TrdType {
  RegularTrade = 0,
  BlockTrade = 1,
  Efp = 2,
  Transfer = 3,
  LateTrade = 4,
  TTrade = 5,
  WeightedAveragePriceTrade = 6,
  BunchedTrade = 7,
  LateBunchedTrade = 8,
  PriorReferencePriceTrade = 9,
  AfterHoursTrade = 10
}

export enum PegMoveType {
  Floating = 0,
  Fixed = 1
}

export enum PegOffsetType {
  Price = 0,
  BasisPoints = 1,
  Ticks = 2,
  PriceTier = 3
}

export enum PegLimitType {
  OrBetter = 0,
  StrictLimitIsAStrictLimit = 1,
  OrWorseForABuyThePegLimitIsAMinimumAndForASellThePegLimitIsAMaximum = 2
}

export enum PegRoundDirection {
  MoreAggressiveOnABuyOrderRoundThePriceUpRoundUpToTheNearestTickOnASellRoundDownToTheNearestTick = 1,
  MorePassiveOnABuyOrderRoundDownToNearestTickOnASellOrderRoundUpToNearestTick = 2
}

export enum PegScope {
  Local = 1,
  National = 2,
  Global = 3,
  NationalExcludingLocal = 4
}

export enum DiscretionMoveType {
  Floating = 0,
  Fixed = 1
}

export enum DiscretionOffsetType {
  Price = 0,
  BasisPoints = 1,
  Ticks = 2,
  PriceTier = 3
}

export enum DiscretionLimitType {
  OrBetter = 0,
  StrictLimitIsAStrictLimit = 1,
  OrWorseForABuyTheDiscretionPriceIsAMinimumAndForASellTheDiscretionPriceIsAMaximum = 2
}

export enum DiscretionRoundDirection {
  MoreAggressiveOnABuyOrderRoundThePriceUpRoundUpToTheNearestTickOnASellRoundDownToTheNearestTick = 1,
  MorePassiveOnABuyOrderRoundDownToNearestTickOnASellOrderRoundUpToNearestTick = 2
}

export enum DiscretionScope {
  Local = 1,
  National = 2,
  Global = 3,
  NationalExcludingLocal = 4
}

export enum TargetStrategy {
  Vwap = 1,
  Participate = 2,
  MininizeMarketImpact = 3
}

export enum LastLiquidityInd {
  AddedLiquidity = 1,
  RemovedLiquidity = 2,
  LiquidityRoutedOut = 3
}

export enum PublishTrdIndicator {
  Yes = 'Y',
  No = 'N'
}

export enum ShortSaleReason {
  DealerSoldShort = 0,
  DealerSoldShortExempt = 1,
  SellingCustomerSoldShort = 2,
  SellingCustomerSoldShortExempt = 3,
  QualifedServiceRepresentative = 4,
  QsrOrAguContraSideSoldShortExempt = 5
}

export enum QtyType {
  Units = 0,
  Contracts = 1
}

export enum TradeReportType {
  Submit = 0,
  Alleged = 1,
  Accept = 2,
  Decline = 3,
  Addendum = 4,
  NoWas = 5,
  TradeReportCancel = 6,
  LockedInTradeBreak = 7
}

export enum AllocNoOrdersType {
  NotSpecified = 0,
  ExplicitListProvided = 1
}

export enum EventType {
  Put = 1,
  Call = 2,
  Tender = 3,
  SinkingFundCall = 4,
  Other = 99
}

export enum InstrAttribType {
  Flat = 1,
  ZeroCoupon = 2,
  InterestBearing = 3,
  NoPeriodicPayments = 4,
  VariableRate = 5,
  LessFeeForPut = 6,
  SteppedCoupon = 7,
  CouponPeriod = 8,
  WhenAndIfIssued = 9,
  OriginalIssueDiscount = 10,
  CallablePuttable = 11,
  EscrowedToMaturity = 12,
  EscrowedToRedemptionDateCallableSupplyRedemptionDateInTheInstrattribvalue = 13,
  Prerefunded = 14,
  InDefault = 15,
  Unrated = 16,
  Taxable = 17,
  Indexed = 18,
  SubjectToAlternativeMinimumTax = 19,
  OriginalIssueDiscountPriceSupplyPriceInTheInstrattribvalue = 20,
  CallableBelowMaturityValue = 21,
  CallableWithoutNoticeByMailToHolderUnlessRegistered = 22,
  TextSupplyTheTextOfTheAttributeOrDisclaimerInTheInstrattribvalue = 99
}

export enum CPProgram {
  E3 = 1,
  E4 = 2,
  Other = 99
}

export enum MiscFeeBasis {
  Absolute = 0,
  PerUnit = 1,
  Percentage = 2
}

export enum LastFragment {
  Yes = 'Y',
  No = 'N'
}

export enum CollAsgnReason {
  Initial = 0,
  Scheduled = 1,
  TimeWarning = 2,
  MarginDeficiency = 3,
  MarginExcess = 4,
  ForwardCollateralDemand = 5,
  EventOfDefault = 6,
  AdverseTaxEvent = 7
}

export enum CollInquiryQualifier {
  Tradedate = 0,
  GcInstrument = 1,
  Collateralinstrument = 2,
  SubstitutionEligible = 3,
  NotAssigned = 4,
  PartiallyAssigned = 5,
  FullyAssigned = 6,
  OutstandingTrades = 7
}

export enum CollAsgnTransType {
  New = 0,
  Replace = 1,
  Cancel = 2,
  Release = 3,
  Reverse = 4
}

export enum CollAsgnRespType {
  Received = 0,
  Accepted = 1,
  Declined = 2,
  Rejected = 3
}

export enum CollAsgnRejectReason {
  UnknownDeal = 0,
  UnknownOrInvalidInstrument = 1,
  UnauthorizedTransaction = 2,
  InsufficientCollateral = 3,
  InvalidTypeOfCollateral = 4,
  ExcessiveSubstitution = 5,
  Other = 99
}

export enum CollStatus {
  Unassigned = 0,
  PartiallyAssigned = 1,
  AssignmentProposed = 2,
  Assigned = 3,
  Challenged = 4
}

export enum DeliveryType {
  VersusPaymentDeliver = 0,
  FreeDeliver = 1,
  TriParty = 2,
  HoldInCustody = 3
}

export enum UserRequestType {
  Logonuser = 1,
  Logoffuser = 2,
  Changepasswordforuser = 3,
  RequestIndividualUserStatus = 4
}

export enum UserStatus {
  LoggedIn = 1,
  NotLoggedIn = 2,
  UserNotRecognised = 3,
  PasswordIncorrect = 4,
  PasswordChanged = 5,
  Other = 6
}

export enum StatusValue {
  Connected = 1,
  NotConnectedDownExpectedUp = 2,
  NotConnectedDownExpectedDown = 3,
  InProcess = 4
}

export enum NetworkRequestType {
  Snapshot = 1,
  Subscribe = 2,
  StopSubscribing = 4,
  LevelOfDetailThenNocompidsBecomesRequired = 8
}

export enum NetworkStatusResponseType {
  Full = 1,
  IncrementalUpdate = 2
}

export enum TrdRptStatus {
  Accepted = 0,
  Rejected = 1
}

export enum AffirmStatus {
  Received = 1,
  ConfirmRejectedIeNotAffirmed = 2,
  Affirmed = 3
}

export enum CollAction {
  Retain = 0,
  Add = 1,
  Remove = 2
}

export enum CollInquiryStatus {
  Accepted = 0,
  AcceptedWithWarnings = 1,
  Completed = 2,
  CompletedWithWarnings = 3,
  Rejected = 4
}

export enum CollInquiryResult {
  Successful = 0,
  InvalidOrUnknownInstrument = 1,
  InvalidOrUnknownCollateralType = 2,
  InvalidParties = 3,
  InvalidTransportTypeRequested = 4,
  InvalidDestinationRequested = 5,
  NoCollateralFoundForTheTradeSpecified = 6,
  NoCollateralFoundForTheOrderSpecified = 7,
  CollateralInquiryTypeNotSupported = 8,
  UnauthorizedForCollateralInquiry = 9,
  Other = 99
}

