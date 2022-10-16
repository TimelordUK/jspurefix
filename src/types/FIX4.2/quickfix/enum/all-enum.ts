export enum AdvSide {
  Buy = 'B',
  Sell = 'S',
  Trade = 'T',
  Cross = 'X'
}

export enum AdvTransType {
  Cancel = 'C',
  New = 'N',
  Replace = 'R'
}

export enum CommType {
  PerShare = '1',
  Percentage = '2',
  Absolute = '3'
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
  InstitutionsOnly = 'I',
  LastPeg = 'L',
  MidPricePeg = 'M',
  NonNegotiable = 'N',
  OpeningPeg = 'O',
  MarketPeg = 'P',
  PrimaryPeg = 'R',
  Suspend = 'S',
  FixedPegToLocalBestBidOrOfferAtTimeOfOrder = 'T',
  CustomerDisplayInstruction = 'U',
  Netting = 'V',
  PegToVwap = 'W'
}

export enum ExecTransType {
  New = '0',
  Cancel = '1',
  Correct = '2',
  Status = '3'
}

export enum HandlInst {
  AutomatedExecutionOrderPrivateNoBrokerIntervention = '1',
  AutomatedExecutionOrderPublicBrokerInterventionOk = '2',
  ManualOrderBestExecution = '3'
}

export enum IDSource {
  Cusip = '1',
  Sedol = '2',
  Quik = '3',
  IsinNumber = '4',
  RicCode = '5',
  IsoCurrencyCode = '6',
  IsoCountryCode = '7',
  ExchangeSymbol = '8',
  ConsolidatedTapeAssociation = '9'
}

export enum IOIQltyInd {
  High = 'H',
  Low = 'L',
  Medium = 'M'
}

export enum IOIShares {
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
  News = 'B',
  QuoteAcknowledgement = 'b',
  Email = 'C',
  SecurityDefinitionRequest = 'c',
  OrderSingle = 'D',
  SecurityDefinition = 'd',
  OrderList = 'E',
  SecurityStatusRequest = 'e',
  SecurityStatus = 'f',
  OrderCancelRequest = 'F',
  OrderCancelReplaceRequest = 'G',
  TradingSessionStatusRequest = 'g',
  OrderStatusRequest = 'H',
  TradingSessionStatus = 'h',
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
  AllocationAck = 'P',
  DontKnowTrade = 'Q',
  QuoteRequest = 'R',
  Quote = 'S',
  SettlementInstructions = 'T',
  MarketDataRequest = 'V',
  MarketDataSnapshotFullRefresh = 'W',
  MarketDataIncrementalRefresh = 'X',
  MarketDataRequestReject = 'Y',
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
  OnClose = 'A',
  LimitOnClose = 'B',
  ForexC = 'C',
  PreviouslyQuoted = 'D',
  PreviouslyIndicated = 'E',
  ForexF = 'F',
  ForexG = 'G',
  ForexH = 'H',
  Funari = 'I',
  Pegged = 'P'
}

export enum PossDupFlag {
  No = 'N',
  Yes = 'Y'
}

export enum Rule80A {
  AgencySingleOrder = 'A',
  ShortExemptTransactionB = 'B',
  ProgramOrderNonIndexArbForMemberFirmOrg = 'C',
  ProgramOrderIndexArbForMemberFirmOrg = 'D',
  RegisteredEquityMarketMakerTrades = 'E',
  ShortExemptTransactionF = 'F',
  ShortExemptTransactionH = 'H',
  IndividualInvestorSingleOrder = 'I',
  ProgramOrderIndexArbForIndividualCustomer = 'J',
  ProgramOrderNonIndexArbForIndividualCustomer = 'K',
  ShortExemptTransactionForMemberCompetingMarketMakerAffiliatedWithTheFirmClearingTheTrade = 'L',
  ProgramOrderIndexArbForOtherMember = 'M',
  ProgramOrderNonIndexArbForOtherMember = 'N',
  CompetingDealerTradesO = 'O',
  Principal = 'P',
  CompetingDealerTradesR = 'R',
  SpecialistTrades = 'S',
  CompetingDealerTradesT = 'T',
  ProgramOrderIndexArbForOtherAgency = 'U',
  AllOtherOrdersAsAgentForOtherMember = 'W',
  ShortExemptTransactionForMemberCompetingMarketMakerNotAffiliatedWithTheFirmClearingTheTrade = 'X',
  ProgramOrderNonIndexArbForOtherAgency = 'Y',
  ShortExemptTransactionForNonMemberCompetingMarketMaker = 'Z'
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
  CrossShort = '9'
}

export enum TimeInForce {
  Day = '0',
  GoodTillCancel = '1',
  AtTheOpening = '2',
  ImmediateOrCancel = '3',
  FillOrKill = '4',
  GoodTillCrossing = '5',
  GoodTillDate = '6'
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
  WhenIssued = '7',
  SellersOption = '8',
  TPlus5 = '9'
}

export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2',
  Preliminary = '3',
  Calculated = '4',
  CalculatedWithoutPreliminary = '5'
}

export enum OpenClose {
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
  BrokerOption = 2,
  OrderAlreadyInPendingCancelOrPendingReplaceStatus = 3
}

export enum OrdRejReason {
  BrokerOption = 0,
  UnknownSymbol = 1,
  ExchangeClosed = 2,
  OrderExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownOrder = 5,
  DuplicateOrder = 6,
  DuplicateOfAVerballyCommunicatedOrder = 7,
  StaleOrder = 8
}

export enum IOIQualifier {
  AllOrNone = 'A',
  AtTheClose = 'C',
  InTouchWith = 'I',
  Limit = 'L',
  MoreBehind = 'M',
  AtTheOpen = 'O',
  TakingAPosition = 'P',
  AtTheMarket = 'Q',
  ReadyToTrade = 'R',
  PortfolioShowN = 'S',
  ThroughTheDay = 'T',
  Versus = 'V',
  Indication = 'W',
  CrossingOpportunity = 'X',
  AtTheMidpoint = 'Y',
  PreOpen = 'Z'
}

export enum ReportToExch {
  No = 'N',
  Yes = 'Y'
}

export enum LocateReqd {
  No = 'N',
  Yes = 'Y'
}

export enum ForexReq {
  No = 'N',
  Yes = 'Y'
}

export enum GapFillFlag {
  No = 'N',
  Yes = 'Y'
}

export enum DKReason {
  UnknownSymbol = 'A',
  WrongSide = 'B',
  QuantityExceedsOrder = 'C',
  NoMatchingOrder = 'D',
  PriceExceedsLimit = 'E',
  Other = 'Z'
}

export enum IOINaturalFlag {
  No = 'N',
  Yes = 'Y'
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
  No = 'N',
  Yes = 'Y'
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
  PendingReplace = 'E'
}

export enum SettlCurrFxRateCalc {
  Multiply = 'M',
  Divide = 'D'
}

export enum SettlInstMode {
  Default = '0',
  StandingInstructionsProvided = '1',
  SpecificAllocationAccountOverriding = '2',
  SpecificAllocationAccountStanding = '3'
}

export enum SettlInstTransType {
  Cancel = 'C',
  New = 'N',
  Replace = 'R'
}

export enum SettlInstSource {
  BrokersInstructions = '1',
  InstitutionsInstructions = '2'
}

export enum SettlLocation {
  Cedel = 'CED',
  DepositoryTrustCompany = 'DTC',
  Euroclear = 'EUR',
  FederalBookEntry = 'FED',
  LocalMarketSettleLocation = 'ISO Country Code',
  Physical = 'PNY',
  ParticipantTrustCompany = 'PTC'
}

export enum SecurityType {
  WildcardEntry = '?',
  BankersAcceptance = 'BA',
  ConvertibleBond = 'CB',
  CertificateOfDeposit = 'CD',
  CollateralizeMortgageObligation = 'CMO',
  CorporateBond = 'CORP',
  CommercialPaper = 'CP',
  CorporatePrivatePlacement = 'CPP',
  CommonStock = 'CS',
  FederalHousingAuthority = 'FHA',
  FederalHomeLoan = 'FHL',
  FederalNationalMortgageAssociation = 'FN',
  ForeignExchangeContract = 'FOR',
  Future = 'FUT',
  GovernmentNationalMortgageAssociation = 'GN',
  TreasuriesPlusAgencyDebenture = 'GOVT',
  MortgageIoette = 'IET',
  MutualFund = 'MF',
  MortgageInterestOnly = 'MIO',
  MortgagePrincipalOnly = 'MPO',
  MortgagePrivatePlacement = 'MPP',
  MiscellaneousPassThru = 'MPT',
  MunicipalBond = 'MUNI',
  NoIsitcSecurityType = 'NONE',
  Option = 'OPT',
  PreferredStock = 'PS',
  RepurchaseAgreement = 'RP',
  ReverseRepurchaseAgreement = 'RVRP',
  StudentLoanMarketingAssociation = 'SL',
  TimeDeposit = 'TD',
  UsTreasuryBill = 'USTB',
  Warrant = 'WAR',
  CatsTigersLions = 'ZOO'
}

export enum StandInstDbType {
  Other = 0,
  DtcSid = 1,
  ThomsonAlert = 2,
  AGlobalCustodian = 3
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

export enum CustomerOrFirm {
  Customer = 0,
  Firm = 1
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
  No = 'N',
  Yes = 'Y'
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
  TradingSessionVwapPrice = '9'
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
  StoppedStock = 'N'
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
  UnsupportedMdentrytype = '8'
}

export enum DeleteReason {
  Cancelation = '0',
  Error = '1'
}

export enum OpenCloseSettleFlag {
  DailyOpen = '0',
  SessionOpen = '1',
  DeliverySettlementPrice = '2'
}

export enum FinancialStatus {
  Bankrupt = '1'
}

export enum CorporateAction {
  ExDividend = 'A',
  ExDistribution = 'B',
  ExRights = 'C',
  New = 'D',
  ExInterest = 'E'
}

export enum QuoteAckStatus {
  Accepted = 0,
  CanceledForSymbol = 1,
  CanceledForSecurityType = 2,
  CanceledForUnderlying = 3,
  CanceledAll = 4,
  Rejected = 5
}

export enum QuoteCancelType {
  CancelForSymbol = 1,
  CancelForSecurityType = 2,
  CancelForUnderlyingSymbol = 3,
  CancelForAllQuotes = 4
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
  No = 'N',
  Yes = 'Y'
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
  UnknownOrInvalid = 20
}

export enum HaltReasonChar {
  NewsDissemination = 'D',
  OrderInflux = 'E',
  OrderImbalance = 'I',
  AdditionalInformation = 'M',
  NewsPending = 'P',
  EquipmentChangeover = 'X'
}

export enum InViewOfCommon {
  No = 'N',
  Yes = 'Y'
}

export enum DueToRelated {
  No = 'N',
  Yes = 'Y'
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
  Halted = 1,
  Open = 2,
  Closed = 3,
  PreOpen = 4,
  PreClose = 5
}

export enum MessageEncoding {
  EucJp = 'EUC-JP',
  Iso2022Jp = 'ISO-2022-JP',
  ShiftJis = 'SHIFT_JIS',
  Utf8 = 'UTF-8'
}

export enum QuoteEntryRejectReason {
  UnknownSymbol = 1,
  Exchange = 2,
  QuoteExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownQuote = 5,
  DuplicateQuote = 6,
  InvalidBidAskSpread = 7,
  InvalidPrice = 8,
  NotAuthorizedToQuoteSecurity = 9
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
  InvalidMsgtype = 11
}

export enum BidRequestTransType {
  Cancel = 'C',
  No = 'N'
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
  PartialDeclineOfOrderqty = 5
}

export enum BusinessRejectReason {
  Other = 0,
  UnkownId = 1,
  UnknownSecurity = 2,
  UnsupportedMessageType = 3,
  ApplicationNotAvailable = 4,
  ConditionallyRequiredFieldMissing = 5
}

export enum MsgDirection {
  Receive = 'R',
  Send = 'S'
}

export enum DiscretionInst {
  RelatedToDisplayedPrice = '0',
  RelatedToMarketPrice = '1',
  RelatedToPrimaryPrice = '2',
  RelatedToLocalPrimaryPrice = '3',
  RelatedToMidpointPrice = '4',
  RelatedToLastTradePrice = '5'
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
  Agency = 'A',
  VwapGuarantee = 'G',
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
  VwapThroughAMorningSessionExceptYori = 'A',
  VwapThroughAnAfternoonSessionExceptYori = 'B',
  Strike = 'C',
  Open = 'D',
  Others = 'Z'
}

export enum PriceType {
  Percentage = 1,
  PerShare = 2,
  FixedAmount = 3
}

export enum GTBookingInst {
  BookOutAllTradesOnDayOfExecution = 0,
  AccumulateExecutionsUntilOrderIsFilledOrExpires = 1,
  AccumulateUntilVerballyNotifiedOtherwise = 2
}

export enum NetGrossInd {
  Net = 1,
  Gross = 2
}

export enum ListExecInstType {
  Immediate = '1',
  WaitForExecuteInstruction = '2'
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

