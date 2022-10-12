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
  PerShare = '1',
  Percentage = '2',
  Absolute = '3',
  E4 = '4',
  E5 = '5',
  PerBond = '6'
}

export enum ExecInst {
  Stayoffer = '0',
  Notheld = '1',
  Work = '2',
  Goalong = '3',
  Overday = '4',
  Held = '5',
  Partnotinit = '6',
  Strictscale = '7',
  Trytoscale = '8',
  Staybid = '9',
  Trytostop = 'Y',
  Midprcpeg = 'M',
  Markpeg = 'P',
  Cancelonsysfail = 'Q',
  Primpeg = 'R',
  Suspend = 'S',
  Custdispinst = 'U',
  Netting = 'V',
  Pegvwap = 'W',
  Tradealong = 'X',
  Percvol = 'D',
  Nocross = 'A',
  Openpeg = 'O',
  Callfirst = 'C',
  Nonnego = 'N',
  Dni = 'E',
  Dnr = 'F',
  Aon = 'G',
  Restateonsysfail = 'H',
  Institonly = 'I',
  Restateontradinghalt = 'J',
  Cancelontradinghalt = 'K',
  Lastpeg = 'L',
  Okcross = 'B'
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
  Sicovam = 'E',
  Belgian = 'F',
  Valoren = 'D',
  Dutch = 'C',
  Wertpapier = 'B',
  BloombergSymbol = 'A',
  Common = 'G'
}

export enum IOIQltyInd {
  Medium = 'M',
  High = 'H',
  Low = 'L'
}

export enum IOIQty {
  Large = 'L',
  Medium = 'M',
  Small = 'S'
}

export enum IOITransType {
  Cancel = 'C',
  New = 'N',
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
  QuoteStatusRequest = 'a',
  Logon = 'A',
  DerivativeSecurityList = 'AA',
  NewOrderAb = 'AB',
  MultilegOrderCancelReplace = 'AC',
  TradeCaptureReportRequest = 'AD',
  TradeCaptureReport = 'AE',
  OrderMassStatusRequest = 'AF',
  QuoteRequestReject = 'AG',
  RfqRequest = 'AH',
  QuoteStatusReport = 'AI',
  MassQuoteAcknowledgement = 'b',
  News = 'B',
  SecurityDefinitionRequest = 'c',
  Email = 'C',
  SecurityDefinition = 'd',
  OrderSingle = 'D',
  SecurityStatusRequest = 'e',
  OrderList = 'E',
  SecurityStatus = 'f',
  OrderCancelRequest = 'F',
  OrderCancelReplaceRequest = 'G',
  TradingSessionStatusRequest = 'g',
  TradingSessionStatus = 'h',
  OrderStatusRequest = 'H',
  MassQuote = 'i',
  BusinessMessageReject = 'j',
  Allocation = 'J',
  ListCancelRequest = 'K',
  BidRequest = 'k',
  BidResponse = 'l',
  ListExecute = 'L',
  ListStrikePrice = 'm',
  ListStatusRequest = 'M',
  ListStatus = 'N',
  XmlMessage = 'n',
  RegistrationInstructions = 'o',
  AllocationAck = 'P',
  RegistrationInstructionsResponse = 'p',
  OrderMassCancelRequest = 'q',
  DontKnowTrade = 'Q',
  OrderMassCancelReport = 'r',
  QuoteRequest = 'R',
  NewOrderS = 's',
  Quote = 'S',
  CrossOrderCancelReplaceRequest = 't',
  SettlementInstructions = 'T',
  CrossOrderCancelRequest = 'u',
  SecurityTypeRequest = 'v',
  MarketDataRequest = 'V',
  SecurityTypes = 'w',
  MarketDataSnapshotFullRefresh = 'W',
  SecurityListRequest = 'x',
  MarketDataIncrementalRefresh = 'X',
  SecurityList = 'y',
  MarketDataRequestReject = 'Y',
  DerivativeSecurityListRequest = 'z',
  QuoteCancel = 'Z'
}

export enum OrdStatus {
  New = '0',
  PartiallyFilled = '1',
  Filled = '2',
  DoneForDay = '3',
  Canceled = '4',
  Replaced = '5',
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
  MarketOnClose = '5',
  WithOrWithout = '6',
  LimitOrBetter = '7',
  LimitWithOrWithout = '8',
  OnBasis = '9',
  PreviouslyQuoted = 'D',
  OnClose = 'A',
  ForexC = 'C',
  ForexF = 'F',
  PreviouslyIndicated = 'E',
  ForexG = 'G',
  Funari = 'I',
  MarketIfTouched = 'J',
  MarketWithLeftoverAsLimit = 'K',
  PreviousFundValuationPoint = 'L',
  NextFundValuationPoint = 'M',
  Pegged = 'P',
  LimitOnClose = 'B',
  ForexH = 'H'
}

export enum PossDupFlag {
  No = 'N',
  Yes = 'Y'
}

export enum Rule80A {
  ProgramOrderNonIndexArbForOtherMember = 'N',
  ShortExemptTransactionB = 'B',
  ProgramOrderIndexArbForMemberFirmOrg = 'D',
  ShortExemptTransactionForPrincipal = 'E',
  ShortExemptTransactionF = 'F',
  ShortExemptTransactionH = 'H',
  IndividualInvestorSingleOrder = 'I',
  ProgramOrderIndexArbForIndividualCustomer = 'J',
  ProgramOrderNonIndexArbForIndividualCustomer = 'K',
  ProgramOrderIndexArbForOtherMember = 'M',
  AgencySingleOrder = 'A',
  ProprietaryTransactionsForCompetingMarketMakerThatIsAffiliatedWithTheClearingMember = 'O',
  Principal = 'P',
  TransactionsForTheAccountOfANonMemberCompetingMarketMaker = 'R',
  SpecialistTrades = 'S',
  TransactionsForTheAccountOfAnUnaffiliatedMembersCompetingMarketMaker = 'T',
  ProgramOrderIndexArbForOtherAgency = 'U',
  AllOtherOrdersAsAgentForOtherMember = 'W',
  ShortExemptTransactionForMemberCompetingMarketMakerNotAffiliatedWithTheFirmClearingTheTrade = 'X',
  ProgramOrderNonIndexArbForOtherAgency = 'Y',
  ShortExemptTransactionForNonMemberCompetingMarketMaker = 'Z',
  ShortExemptTransactionForMemberCompetingMarketMakerAffiliatedWithTheFirmClearingTheTrade = 'L',
  ProgramOrderNonIndexArbForMemberFirmOrg = 'C'
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
  AsDefined = 'B',
  Opposite = 'C',
  CrossShortExempt = 'A'
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

export enum SettlmntTyp {
  Regular = '0',
  Cash = '1',
  NextDay = '2',
  TPlus2 = '3',
  TPlus3 = '4',
  TPlus4 = '5',
  Future = '6',
  WhenAndIfIssued = '7',
  SellersOption = '8',
  TPlus5 = '9',
  TPlus1 = 'A'
}

export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2',
  Preliminary = '3',
  Calculated = '4',
  CalculatedWithoutPreliminary = '5'
}

export enum PositionEffect {
  Fifo = 'F',
  Rolled = 'R',
  Close = 'C',
  Open = 'O'
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
  Rejected = 1,
  PartialAccept = 2,
  Received = 3
}

export enum AllocRejCode {
  UnknownAccount = 0,
  IncorrectQuantity = 1,
  IncorrectAveragePrice = 2,
  UnknownExecutingBrokerMnemonic = 3,
  CommissionDifference = 4,
  UnknownOrderid = 5,
  UnknownListid = 6,
  Other = 7
}

export enum EmailType {
  New = '0',
  Reply = '1',
  AdminReply = '2'
}

export enum PossResend {
  No = 'N',
  Yes = 'Y'
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
  OrigordmodtimeDidNotMatchLastTransacttimeOfOrder = 5,
  DuplicateClordidReceived = 6
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
  UnsupportedOrderCharacteristic = 11,
  SurveillenceOption = 12
}

export enum IOIQualifier {
  AtTheOpen = 'O',
  CrossingOpportunity = 'X',
  Indication = 'W',
  Versus = 'V',
  ThroughTheDay = 'T',
  PortfolioShown = 'S',
  ReadyToTrade = 'R',
  AllOrNone = 'A',
  TakingAPosition = 'P',
  MoreBehind = 'M',
  Limit = 'L',
  InTouchWith = 'I',
  Vwap = 'D',
  AtTheClose = 'C',
  MarketOnClose = 'B',
  AtTheMarket = 'Q',
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
  WrongSide = 'B',
  QuantityExceedsOrder = 'C',
  NoMatchingOrder = 'D',
  PriceExceedsLimit = 'E',
  Other = 'Z',
  UnknownSymbol = 'A'
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
  ConsumptionTax = '9'
}

export enum ResetSeqNumFlag {
  Yes = 'Y',
  No = 'N'
}

export enum ExecType {
  New = '0',
  PartialFill = '1',
  Fill = '2',
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
  Divide = 'D',
  Multiply = 'M'
}

export enum SettlInstMode {
  Default = '0',
  StandingInstructionsProvided = '1',
  SpecificAllocationAccountOverriding = '2',
  SpecificAllocationAccountStanding = '3',
  SpecificOrderForASingleAccount = '4'
}

export enum SettlInstTransType {
  New = 'N',
  Replace = 'R',
  Cancel = 'C'
}

export enum SettlInstSource {
  BrokersInstructions = '1',
  InstitutionsInstructions = '2',
  Investor = '3'
}

export enum SecurityType {
  CommercialPaper = 'CP',
  VariableRateDemandNote = 'VRDN',
  PlazosFijos = 'PZFJ',
  PromissoryNote = 'PN',
  Overnight = 'ONITE',
  MediumTermNotes = 'MTN',
  TaxExemptCommercialPaper = 'TECP',
  AmendedRestated = 'AMENDED',
  BridgeLoan = 'BRIDGE',
  LetterOfCredit = 'LOFC',
  SwingLineFacility = 'SWING',
  DebtorInPossession = 'DINP',
  Defaulted = 'DEFLTED',
  Withdrawn = 'WITHDRN',
  LiquidityNote = 'LQN',
  Matured = 'MATURED',
  DepositNotes = 'DN',
  Retired = 'RETIRED',
  BankersAcceptance = 'BA',
  BankNotes = 'BN',
  BillOfExchanges = 'BOX',
  CertificateOfDeposit = 'CD',
  CallLoans = 'CL',
  Replaced = 'REPLACD',
  MandatoryTender = 'MT',
  RevolverTermLoan = 'RVLVTRM',
  MortgagePrivatePlacement = 'MPP',
  ShortTermLoanNote = 'STN',
  MiscellaneousPassThrough = 'MPT',
  ToBeAnnounced = 'TBA',
  OtherAnticipationNotesBanGanEtc = 'AN',
  MortgageInterestOnly = 'MIO',
  CertificateOfParticipation = 'COFP',
  MortgageBackedSecurities = 'MBS',
  RevenueBonds = 'REV',
  SpecialAssessment = 'SPCLA',
  SpecialObligation = 'SPCLO',
  SpecialTax = 'SPCLT',
  TaxAnticipationNote = 'TAN',
  TaxAllocation = 'TAXA',
  CertificateOfObligation = 'COFO',
  TimeDeposit = 'TD',
  GeneralObligationBonds = 'GO',
  WildcardEntry = '?',
  Warrant = 'WAR',
  MutualFund = 'MF',
  MultiLegInstrument = 'MLEG',
  TaxRevenueAnticipationNote = 'TRAN',
  MortgagePrincipalOnly = 'MPO',
  RepurchaseAgreement = 'RP',
  NoSecurityType = 'NONE',
  ExtendedCommNote = 'XCN',
  AgencyPools = 'POOL',
  AssetBackedSecurities = 'ABS',
  CorpMortgageBackedSecurities = 'CMBS',
  CollateralizedMortgageObligation = 'CMO',
  IoetteMortgage = 'IET',
  ReverseRepurchaseAgreement = 'RVRP',
  ForeignExchangeContract = 'FOR',
  RevenueAnticipationNote = 'RAN',
  RevolverLoan = 'RVLV',
  FederalAgencyCoupon = 'FAC',
  FederalAgencyDiscountNote = 'FADN',
  PrivateExportFunding = 'PEF',
  CorporateBond = 'CORP',
  CorporatePrivatePlacement = 'CPP',
  ConvertibleBond = 'CB',
  DualCurrency = 'DUAL',
  IndexedLinked = 'XLINKD',
  YankeeCorporateBond = 'YANK',
  CommonStock = 'CS',
  PreferredStock = 'PS',
  BradyBond = 'BRADY',
  UsTreasuryBond = 'TBOND',
  InterestStripFromAnyBondOrNote = 'TINT',
  TreasuryInflationProtectedSecurities = 'TIPS',
  PrincipalStripOfACallableBondOrNote = 'TCAL',
  PrincipalStripFromANonCallableBondOrNote = 'TPRN',
  UsTreasuryNoteBond = 'UST',
  UsTreasuryBill = 'USTB',
  TermLoan = 'TERM',
  StructuredNotes = 'STRUCT'
}

export enum StandInstDbType {
  Other = 0,
  DtcSid = 1,
  ThomsonAlert = 2,
  AGlobalCustodian = 3
}

export enum SettlDeliveryType {
  VersusPayment = 0,
  Free = 1
}

export enum AllocLinkType {
  FXNetting = 0,
  FXSwap = 1
}

export enum CoveredOrUncovered {
  Covered = 0,
  Uncovered = 1
}

export enum NotifyBrokerOfCredit {
  No = 'N',
  Yes = 'Y'
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

export enum Benchmark {
  Curve = '1',
  E5Yr = '2',
  Old5 = '3',
  E10Yr = '4',
  Old10 = '5',
  E30Yr = '6',
  Old30 = '7',
  E3MoLibor = '8',
  E6MoLibor = '9'
}

export enum BenchmarkCurveName {
  Swap = 'SWAP',
  Libid = 'LIBID',
  Other = 'OTHER',
  Treasury = 'Treasury',
  Euribor = 'Euribor',
  Pfandbriefe = 'Pfandbriefe',
  Futureswap = 'FutureSWAP',
  Muniaaa = 'MuniAAA',
  Libor = 'LIBOR'
}

export enum StipulationType {
  AbsolutePrepaymentSpeed = 'ABS',
  WeightedAverageLoanAge = 'WALA',
  WeightedAverageMaturity = 'WAM',
  ConstantPrepaymentRate = 'CPR',
  FinalCprOfHomeEquityPrepaymentCurve = 'HEP',
  WeightedAverageLife = 'WAL',
  OfManufacturedHousingPrepaymentCurve = 'MHP',
  SingleMonthlyMortality = 'SMM',
  MonthlyPrepaymentRate = 'MPR',
  OfBmaPrepaymentCurve = 'PSA',
  OfProspectusPrepaymentCurve = 'PPC',
  ConstantPrepaymentPenalty = 'CPP',
  LotVariance = 'LOTVAR',
  ConstantPrepaymentYield = 'CPY',
  WeightedAverageCoupon = 'WAC',
  YearOfIssue = 'ISSUE',
  MaturityYear = 'MAT',
  NumberOfPieces = 'PIECES',
  PoolsMaximum = 'PMAX',
  PoolsPerMillion = 'PPM',
  PoolsPerLot = 'PPL',
  PoolsPerTrade = 'PPT',
  ProductionYear = 'PROD',
  TradeVariance = 'TRDVAR',
  Geographics = 'GEOG'
}

export enum YieldType {
  TrueYieldTheYieldCalculatedWithCouponDatesMovedFromAWeekendOrHolidayToTheNextValidSettlementDate = 'TRUE',
  PreviousCloseYieldTheYieldOfABondBasedOnTheClosingPrice1DayAgo = 'PREVCLOSE',
  YieldToLongestAverage = 'LONGEST',
  YieldToLongestAverageLifeTheYieldAssumingOnlyMandatorySinksAreTakenThisResultsInALowerPaydownOfDebtTheYieldIsThenCalculatedToTheFinalPaymentDate = 'LONGAVGLIFE',
  YieldToMaturityTheYieldOfABondToItsMaturityDate = 'MATURITY',
  MarkToMarketYieldAnAdjustmentInTheValuationOfASecuritiesPortfolioToReflectTheCurrentMarketValuesOfTheRespectiveSecuritiesInThePortfolio = 'MARK',
  OpenAverageYieldTheAverageYieldOfTheRespectiveSecuritiesInThePortfolio = 'OPENAVG',
  YieldToNextPutTheYieldToTheDateAtWhichTheBondHolderCanNextPutTheBondToTheIssuer = 'PUT',
  ProceedsYieldTheCdEquivalentYieldWhenTheRemainingTimeToMaturityIsLessThanTwoYears = 'PROCEEDS',
  SemiAnnualYieldTheYieldOfABondWhoseCouponPaymentsAreReinvestedSemiAnnually = 'SEMIANNUAL',
  YieldToShortestAverageLifeSameAsAvglifeAbove = 'SHORTAVGLIFE',
  YieldToShortestAverage = 'SHORTEST',
  SimpleYieldTheYieldOfABondAssumingNoReinvestmentOfCouponPayments = 'SIMPLE',
  YieldToTenderDateTheYieldOnAMunicipalBondToItsMandatoryTenderDate = 'TENDER',
  YieldValueOf132TheAmountThatTheYieldWillChangeForA132ndChangeInPrice = 'VALUE1/32',
  YieldToWorstConventionTheLowestYieldToAllPossibleRedemptionDateScenarios = 'WORST',
  TaxEquivalentYieldTheAfterTaxYieldGrossedUpByTheMaximumFederalTaxRateOf396ForComparisonToTaxableYields = 'TAXEQUIV',
  AnnualYieldTheAnnualInterestOrDividendIncomeAnInvestmentEarnsExpressedAsAPercentageOfTheInvestmentsTotalValue = 'ANNUAL',
  ClosingYieldMostRecentYearTheYieldOfABondBasedOnTheClosingPriceAsOfTheMostRecentYearsEnd = 'LASTYEAR',
  YieldToNextRefund = 'NEXTREFUND',
  AfterTaxYield = 'AFTERTAX',
  YieldAtIssue = 'ATISSUE',
  YieldToAverageLifeTheYieldAssumingThatAllSinks = 'AVGLIFE',
  YieldToAverageMaturityTheYieldAchievedBySubstitutingABondsAverageMaturityForTheIssuesFinalMaturityDate = 'AVGMATURITY',
  BookYieldTheYieldOfASecurityCalculatedByUsingItsBookValueInsteadOfTheCurrentMarketPriceThisTermIsTypicallyUsedInTheUsDomesticMarket = 'BOOK',
  YieldToNextCallTheYieldOfABondToTheNextPossibleCallDate = 'CALL',
  YieldChangeSinceCloseTheChangeInTheYieldSinceThePreviousDaysClosingYield = 'CHANGE',
  CompoundYieldTheYieldOfCertainJapaneseBondsBasedOnItsPriceCertainJapaneseBondsHaveIrregularFirstOrLastCouponsAndTheYieldIsCalculatedCompoundForTheseIrregularPeriods = 'COMPOUND',
  CurrentYieldAnnualInterestOnABondDividedByTheMarketValueTheActualIncomeRateOfReturnAsOpposedToTheCouponRateExpressedAsAPercentage = 'CURRENT',
  TrueGrossYieldYieldCalculatedUsingThePriceIncludingAccruedInterestWhereCouponDatesAreMovedFromHolidaysAndWeekendsToTheNextTradingDay = 'GROSS',
  GovernmentEquivalentYieldAskYieldBasedOnSemiAnnualCouponsCompoundingInAllPeriodsAndActualActualCalendar = 'GOVTEQUIV',
  YieldWithInflationAssumptionBasedOnPriceTheReturnAnInvestorWouldRequireOnANormalBondThatWouldMakeTheRealReturnEqualToThatOfTheInflationIndexedBondAssumingAConstantInflationRate = 'INFLATION',
  InverseFloaterBondYieldInverseFloaterSemiAnnualBondEquivalentRate = 'INVERSEFLOATER',
  ClosingYieldMostRecentQuarterTheYieldOfABondBasedOnTheClosingPriceAsOfTheMostRecentQuartersEnd = 'LASTQUARTER',
  MostRecentClosingYieldTheLastAvailableYieldStoredInHistoryComputedUsingPrice = 'LASTCLOSE',
  ClosingYieldMostRecentMonthTheYieldOfABondBasedOnTheClosingPriceAsOfTheMostRecentMonthsEnd = 'LASTMONTH',
  ClosingYieldTheYieldOfABondBasedOnTheClosingPrice = 'CLOSE'
}

export enum TradedFlatSwitch {
  No = 'N',
  Yes = 'Y'
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
  Imbalance = 'A'
}

export enum TickDirection {
  PlusTick = '0',
  ZeroPlusTick = '1',
  MinusTick = '2',
  ZeroMinusTick = '3'
}

export enum QuoteCondition {
  Locked = 'E',
  NonFirm = 'I',
  FastTrading = 'H',
  Crossed = 'F',
  ConsolidatedBest = 'D',
  ExchangeBest = 'C',
  Closed = 'B',
  Open = 'A',
  Depth = 'G'
}

export enum TradeCondition {
  NextDayTrade = 'J',
  Opened = 'K',
  Seller = 'L',
  AveragePriceTrade = 'B',
  Sold = 'M',
  Rule155Trade = 'H',
  StoppedStock = 'N',
  ImbalanceMoreBuyers = 'P',
  ImbalanceMoreSellers = 'Q',
  OpeningPrice = 'R',
  SoldLast = 'I',
  Cash = 'A',
  CashTrade = 'C',
  Opening = 'E',
  IntradayTradeDetail = 'F',
  Rule127Trade = 'G',
  NextDay = 'D'
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
  UnsupportedMdimplicitdelete = 'C',
  UnsupportedOpenclosesettleflag = 'B',
  UnsupportedScope = 'A'
}

export enum DeleteReason {
  Cancelation = '0',
  Error = '1'
}

export enum OpenCloseSettleFlag {
  DailyOpen = '0',
  SessionOpen = '1',
  DeliverySettlementPrice = '2',
  ExpectedPrice = '3',
  PriceFromPreviousBusinessDay = '4'
}

export enum FinancialStatus {
  Bankrupt = '1',
  PendingDelisting = '2'
}

export enum CorporateAction {
  ExDistribution = 'B',
  ExInterest = 'E',
  ExRights = 'C',
  ExDividend = 'A',
  New = 'D'
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
  Pending = 10
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
  NotAuthorizedToQuoteSecurity = 9
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
  ListOfSecurityTypesReturnedPerRequest = 3,
  ListOfSecuritiesReturnedPerRequest = 4,
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
  EquipmentChangeover = 'X',
  AdditionalInformation = 'M',
  OrderInflux = 'E',
  NewsPending = 'P',
  OrderImbalance = 'I',
  NewsDissemination = 'D'
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
  Utf8 = 'UTF-8',
  Iso2022Jp = 'ISO-2022-JP',
  EucJp = 'EUC-JP',
  ShiftJis = 'SHIFT_JIS'
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
  NonDataValueIncludesFieldDelimiter = 17
}

export enum BidRequestTransType {
  New = 'N',
  Cancel = 'C'
}

export enum SolicitedFlag {
  No = 'N',
  Yes = 'Y'
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
  Market = 8
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
  RelatedToLastTradePrice = '5'
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
  No = 'N',
  Yes = 'Y'
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

export enum TradeType {
  VwapGuarantee = 'G',
  Agency = 'A',
  GuaranteedClose = 'J',
  RiskTrade = 'R'
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
  Open = 'D',
  Others = 'Z',
  Strike = 'C',
  VwapThroughAnAfternoonSessionExceptYori = 'B',
  VwapThroughAMorningSessionExceptYori = 'A'
}

export enum PriceType {
  Percentage = 1,
  PerShare = 2,
  FixedAmount = 3,
  Discount = 4,
  Premium = 5,
  BasisPointsRelativeToBenchmark = 6,
  TedPrice = 7,
  TedYield = 8
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
  AustralianTaxFileNumber = 'A',
  IsoCountryCode = 'E',
  Bic = 'B',
  ProprietaryCustomCode = 'D',
  SettlementEntityLocation = 'F',
  GenerallyAcceptedMarketParticipantIdentifier = 'C'
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
  UnderlyingContraFirm = 20
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
  Other = 12
}

export enum TestMessageIndicator {
  Yes = 'Y',
  No = 'N'
}

export enum QuantityType {
  Shares = 1,
  Bonds = 2,
  Currentface = 3,
  Originalface = 4,
  Currency = 5,
  Contracts = 6,
  Other = 7,
  Par = 8
}

export enum RoundingDirection {
  RoundToNearest = '0',
  RoundDown = '1',
  RoundUp = '2'
}

export enum CancellationRights {
  NoWaiverAgreement = 'M',
  NoExecutionOnly = 'N',
  Yes = 'Y',
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
  SinglePrice = 'S',
  OfferPriceMinusAdjustmentAmount = 'Q',
  OfferPriceMinusAdjustment = 'P',
  OfferPrice = 'O',
  CreationPricePlusAdjustmentAmount = 'E',
  CreationPricePlusAdjustment = 'D',
  CreationPrice = 'C',
  BidPrice = 'B'
}

export enum TradeReportTransType {
  New = 'N',
  Replace = 'R',
  Cancel = 'C'
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
  No = 'N',
  Yes = 'Y'
}

export enum RegistStatus {
  Accept = 'A',
  Reminder = 'N',
  Reject = 'R',
  Held = 'H'
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
  InvalidUnacceptableCashDistribAgentAcctNum = 18
}

export enum RegistTransType {
  New = '0',
  Replace = '1',
  Cancel = '2'
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
  RisklessPrincipal = 'R',
  Individual = 'I',
  Principal = 'P',
  AgentForOtherMember = 'W',
  Agency = 'A',
  Proprietary = 'G'
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
  InvalidOrUnknownTradingSession = '6'
}

export enum QuoteType {
  Indicative = 0,
  Tradeable = 1,
  RestrictedTradeable = 2
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
  CrossTradeWhichIsExecutedPartiallyAndTheRestIsCancelledOneSideIsFullyExecutedTheOtherSideIsPartiallyExecutedWithTheRemainderBeingCancelledThisIsEquivalentToAnImmediateOrCancelOnTheOtherSide = 2,
  CrossTradeWhichIsPartiallyExecutedWithTheUnfilledPortionsRemainingActiveOneSideOfTheCrossIsFullyExecuted = 3,
  CrossTradeIsExecutedWithExistingOrdersWithTheSamePrice = 4
}

export enum CrossPrioritization {
  None = 0,
  BuysidePrioritized = 1,
  SellsidePrioritized = 2
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

export enum TradSesStatusRejReason {
  UnknownOrInvalidTradingsessionid = 1
}

export enum TradeRequestType {
  AllTrades = 0,
  MatchedTradesMatchingCriteriaProvidedOnRequest = 1,
  UnmatchedTradesThatMatchCriteria = 2,
  UnreportedTradesThatMatchCriteria = 3,
  AdvisoriesThatMatchCriteria = 4
}

export enum PreviouslyReported {
  No = 'N',
  Yes = 'Y'
}

export enum MatchStatus {
  ComparedMatchedOrAffirmed = '0',
  UncomparedUnmatchedOrUnaffirmed = '1',
  AdvisoryOrAlert = '2'
}

export enum MatchType {
  SummarizedMatchUsingA1ToA5ExactMatchCriteriaExceptQuantityIsSummarizedS5 = 'S5',
  ActM1Match = 'M1',
  ActM6Match = 'M6',
  ActDefaultAfterM2 = 'M5',
  ActAcceptedTrade = 'M3',
  SummarizedMatchUsingA1ToA5ExactMatchCriteriaExceptQuantityIsSummarizedS2 = 'S2',
  SummarizedMatchUsingA1ToA5ExactMatchCriteriaExceptQuantityIsSummarizedS3 = 'S3',
  SummarizedMatchUsingA1ToA5ExactMatchCriteriaExceptQuantityIsSummarizedS4 = 'S4',
  ActM2Match = 'M2',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadges = 'A2',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusTwoBadgesAndExecutionTime = 'A3',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAnd = 'A4',
  ComparedRecordsResultingFromStampedAdvisoriesOrSpecialist = 'AQ',
  NonAct = 'MT',
  ActDefaultTrade = 'M4',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusFourBadgesAndExecutionTime = 'A1',
  SummarizedMatchUsingA1ToA5ExactMatchCriteriaExceptQuantityIsSummarizedS1 = 'S1',
  ExactMatchOnTradeDateStockSymbolQuantityPriceTradeTypeAndSpecialTradeIndicatorPlusExecutionTime = 'A5'
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
  AutomaticGiveUpMode = 10
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
  SpeakWithOrderInitiatorBeforeBooking = '1'
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
  BuysideCalculated = 1,
  BuysidePreliminary = 2,
  SellsideCalculatedUsingPreliminary = 3,
  SellsideCalculatedWithoutPreliminary = 4,
  BuysideReadyToBook5 = 5,
  BuysideReadyToBook6 = 6
}

export enum ClearingFeeIndicator {
  E1stYearDelegateTradingForHisOwnAccount = '1',
  E2ndYearDelegateTradingForHisOwnAccount = '2',
  E3rdYearDelegateTradingForHisOwnAccount = '3',
  E4thYearDelegateTradingForHisOwnAccount = '4',
  E5thYearDelegateTradingForHisOwnAccount = '5',
  E6thYearAndBeyondDelegateTradingForHisOwnAccount = '9',
  E106HAnd106JFirms = 'H',
  AllOtherOwnershipTypes = 'M',
  GimIdemAndComMembershipInterestHolders = 'I',
  FullAndAssociateMemberTradingForOwnAccountAndAsFloor = 'F',
  EquityMemberAndClearingMember = 'E',
  NonMemberAndCustomer = 'C',
  CboeMember = 'B',
  LesseeAnd106FEmployees = 'L'
}

export enum WorkingIndicator {
  No = 'N',
  Yes = 'Y'
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
  NotAuthorizedToRequestQuote = 6
}

