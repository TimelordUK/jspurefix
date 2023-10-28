export enum AdvSide {
  Buy = 'B',
  Sell = 'S',
  Trade = 'T',
  Cross = 'X'
}

export enum AdvTransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R'
}

export enum BeginString {
  Fix42 = 'FIX.4.2',
  Fix44 = 'FIX.4.4',
  Fixt11 = 'FIXT.1.1'
}

export enum CommType {
  PerUnit = '1',
  Percent = '2',
  Absolute = '3',
  PercentageWaivedCashDiscount = '4',
  PercentageWaivedEnhancedUnits = '5',
  PointsPerBondOrContract = '6',
  BasisPoints = '7',
  AmountPerContract = '8'
}

export enum ExecInst {
  StayOnOfferSide = '0',
  NotHeld = '1',
  Work = '2',
  GoAlong = '3',
  OverTheDay = '4',
  Held = '5',
  ParticipateDoNotInitiate = '6',
  StrictScale = '7',
  TryToScale = '8',
  StayOnBidSide = '9',
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
  FixedPegToLocalBestBidOrOfferAtTimeOfOrder = 'T',
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
  WorkToTargetStrategy = 'e',
  IntermarketSweep = 'f',
  ExternalRoutingAllowed = 'g',
  ExternalRoutingNotAllowed = 'h',
  ImbalanceOnly = 'i',
  SingleExecutionRequestedForBlockTrade = 'j',
  BestExecution = 'k',
  SuspendOnSystemFailure = 'l',
  SuspendOnTradingHalt = 'm',
  ReinstateOnConnectionLoss = 'n',
  CancelOnConnectionLoss = 'o',
  SuspendOnConnectionLoss = 'p',
  Release = 'q',
  ExecuteAsDeltaNeutral = 'r',
  ExecuteAsDurationNeutral = 's',
  ExecuteAsFxNeutral = 't',
  MinGuaranteedFillEligible = 'u',
  BypassNonDisplayLiquidity = 'v',
  Lock = 'w',
  IgnoreNotionalValueChecks = 'x',
  TrdAtRefPx = 'y',
  AllowFacilitation = 'z'
}

export enum HandlInst {
  AutomatedExecutionNoIntervention = '1',
  AutomatedExecutionInterventionOk = '2',
  ManualOrder = '3'
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
  IsdaFpMlSpecification = 'I',
  OptionPriceReportingAuthority = 'J',
  IsdaFpMlurl = 'K',
  LetterOfCredit = 'L',
  MarketplaceAssignedIdentifier = 'M',
  MarkitRedEntityClip = 'N',
  MarkitRedPairClip = 'P',
  CftcCommodityCode = 'Q',
  IsdaCommodityReferencePrice = 'R',
  FinancialInstrumentGlobalIdentifier = 'S',
  LegalEntityIdentifier = 'T',
  Synthetic = 'U',
  FidessaInstrumentMnemonic = 'V',
  IndexName = 'W',
  UniformSymbol = 'X',
  DigitalTokenIdentifier = 'Y'
}

export enum IOIQltyInd {
  High = 'H',
  Low = 'L',
  Medium = 'M'
}

export enum IOIQty {
  Small = 'S',
  Medium = 'M',
  Large = 'L',
  UndisclosedQuantity = 'U'
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
  Principal = '4',
  RisklessPrincipal = '5'
}

export enum MsgType {
  Heartbeat = '0',
  TestRequest = '1',
  ResendRequest = '2',
  Reject = '3',
  SequenceReset = '4',
  Logout = '5',
  Ioi = '6',
  Advertisement = '7',
  ExecutionReport = '8',
  OrderCancelReject = '9',
  Logon = 'A',
  News = 'B',
  Email = 'C',
  NewOrderSingle = 'D',
  NewOrderList = 'E',
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
  MassQuoteAck = 'b',
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
  XmLnonFix = 'n',
  RegistrationInstructions = 'o',
  RegistrationInstructionsResponse = 'p',
  OrderMassCancelRequest = 'q',
  OrderMassCancelReport = 'r',
  NewOrderCross = 's',
  CrossOrderCancelReplaceRequest = 't',
  CrossOrderCancelRequest = 'u',
  SecurityTypeRequest = 'v',
  SecurityTypes = 'w',
  SecurityListRequest = 'x',
  SecurityList = 'y',
  DerivativeSecurityListRequest = 'z',
  DerivativeSecurityList = 'AA',
  NewOrderMultileg = 'AB',
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
  NetworkCounterpartySystemStatusRequest = 'BC',
  NetworkCounterpartySystemStatusResponse = 'BD',
  UserRequest = 'BE',
  UserResponse = 'BF',
  CollateralInquiryAck = 'BG',
  ConfirmationRequest = 'BH',
  ContraryIntentionReport = 'BO',
  SecurityDefinitionUpdateReport = 'BP',
  SecurityListUpdateReport = 'BK',
  AdjustedPositionReport = 'BL',
  AllocationInstructionAlert = 'BM',
  ExecutionAck = 'BN',
  TradingSessionList = 'BJ',
  TradingSessionListRequest = 'BI',
  SettlementObligationReport = 'BQ',
  DerivativeSecurityListUpdateReport = 'BR',
  TradingSessionListUpdateReport = 'BS',
  MarketDefinitionRequest = 'BT',
  MarketDefinition = 'BU',
  MarketDefinitionUpdateReport = 'BV',
  ApplicationMessageRequest = 'BW',
  ApplicationMessageRequestAck = 'BX',
  ApplicationMessageReport = 'BY',
  OrderMassActionReport = 'BZ',
  OrderMassActionRequest = 'CA',
  UserNotification = 'CB',
  StreamAssignmentRequest = 'CC',
  StreamAssignmentReport = 'CD',
  StreamAssignmentReportAck = 'CE',
  PartyDetailsListRequest = 'CF',
  PartyDetailsListReport = 'CG',
  MarginRequirementInquiry = 'CH',
  MarginRequirementInquiryAck = 'CI',
  MarginRequirementReport = 'CJ',
  PartyDetailsListUpdateReport = 'CK',
  PartyRiskLimitsRequest = 'CL',
  PartyRiskLimitsReport = 'CM',
  SecurityMassStatusRequest = 'CN',
  SecurityMassStatus = 'CO',
  AccountSummaryReport = 'CQ',
  PartyRiskLimitsUpdateReport = 'CR',
  PartyRiskLimitsDefinitionRequest = 'CS',
  PartyRiskLimitsDefinitionRequestAck = 'CT',
  PartyEntitlementsRequest = 'CU',
  PartyEntitlementsReport = 'CV',
  QuoteAck = 'CW',
  PartyDetailsDefinitionRequest = 'CX',
  PartyDetailsDefinitionRequestAck = 'CY',
  PartyEntitlementsUpdateReport = 'CZ',
  PartyEntitlementsDefinitionRequest = 'DA',
  PartyEntitlementsDefinitionRequestAck = 'DB',
  TradeMatchReport = 'DC',
  TradeMatchReportAck = 'DD',
  PartyRiskLimitsReportAck = 'DE',
  PartyRiskLimitCheckRequest = 'DF',
  PartyRiskLimitCheckRequestAck = 'DG',
  PartyActionRequest = 'DH',
  PartyActionReport = 'DI',
  MassOrder = 'DJ',
  MassOrderAck = 'DK',
  PositionTransferInstruction = 'DL',
  PositionTransferInstructionAck = 'DM',
  PositionTransferReport = 'DN',
  MarketDataStatisticsRequest = 'DO',
  MarketDataStatisticsReport = 'DP',
  CollateralReportAck = 'DQ',
  MarketDataReport = 'DR',
  CrossRequest = 'DS',
  CrossRequestAck = 'DT',
  AllocationInstructionAlertRequest = 'DU',
  AllocationInstructionAlertRequestAck = 'DV',
  TradeAggregationRequest = 'DW',
  TradeAggregationReport = 'DX',
  PayManagementReport = 'EA',
  PayManagementReportAck = 'EB',
  PayManagementRequest = 'DY',
  PayManagementRequestAck = 'DZ'
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
  ForexMarket = 'C',
  PreviouslyQuoted = 'D',
  PreviouslyIndicated = 'E',
  ForexLimit = 'F',
  ForexSwap = 'G',
  ForexPreviouslyQuoted = 'H',
  Funari = 'I',
  MarketIfTouched = 'J',
  MarketWithLeftOverAsLimit = 'K',
  PreviousFundValuationPoint = 'L',
  NextFundValuationPoint = 'M',
  Pegged = 'P',
  CounterOrderSelection = 'Q',
  StopOnBidOrOffer = 'R',
  StopLimitOnBidOrOffer = 'S'
}

export enum PossDupFlag {
  No = 'N',
  Yes = 'Y'
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
  Borrow = 'G',
  SellUndisclosed = 'H'
}

export enum TimeInForce {
  Day = '0',
  GoodTillCancel = '1',
  AtTheOpening = '2',
  ImmediateOrCancel = '3',
  FillOrKill = '4',
  GoodTillCrossing = '5',
  GoodTillDate = '6',
  AtTheClose = '7',
  GoodThroughCrossing = '8',
  AtCrossing = '9',
  GoodForTime = 'A',
  GoodForAuction = 'B',
  GoodForMonth = 'C'
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
  TPlus5 = '9',
  BrokenDate = 'B',
  FxSpotNextSettlement = 'C'
}

export enum SymbolSfx {
  EucpWithLumpSumInterest = 'CD',
  WhenIssued = 'WI'
}

export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2',
  Preliminary = '3',
  Calculated = '4',
  CalculatedWithoutPreliminary = '5',
  Reversal = '6'
}

export enum PositionEffect {
  Close = 'C',
  Fifo = 'F',
  Open = 'O',
  Rolled = 'R',
  CloseButNotifyOnOpen = 'N',
  Default = 'D'
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
  RejectedByIntermediary = 5,
  AllocationPending = 6,
  Reversed = 7,
  CancelledByIntermediary = 8,
  Claimed = 9,
  Refused = 10,
  PendingGiveUpApproval = 11,
  Cancelled = 12,
  PendingTakeUpApproval = 13,
  ReversalPending = 14
}

export enum AllocRejCode {
  UnknownAccount = 0,
  IncorrectQuantity = 1,
  IncorrectAveragePrice = 2,
  UnknownExecutingBrokerMnemonic = 3,
  CommissionDifference = 4,
  UnknownOrderId = 5,
  UnknownListId = 6,
  OtherSeeText = 7,
  IncorrectAllocatedQuantity = 8,
  CalculationDifference = 9,
  UnknownOrStaleExecId = 10,
  MismatchedData = 11,
  UnknownClOrdId = 12,
  WarehouseRequestRejected = 13,
  DuplicateOrMissingIndividualAllocId = 14,
  TradeNotRecognized = 15,
  DuplicateTrade = 16,
  IncorrectOrMissingInstrument = 17,
  IncorrectOrMissingSettlDate = 18,
  IncorrectOrMissingFundIdOrFundName = 19,
  IncorrectOrMissingSettlInstructions = 20,
  IncorrectOrMissingFees = 21,
  IncorrectOrMissingTax = 22,
  UnknownOrMissingParty = 23,
  IncorrectOrMissingSide = 24,
  IncorrectOrMissingNetMoney = 25,
  IncorrectOrMissingTradeDate = 26,
  IncorrectOrMissingSettlCcyInstructions = 27,
  IncorrectOrMissingProcessCode = 28,
  Other = 99
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
  Pkcsdes = 3,
  Pgpdes = 4,
  Pgpdesmd5 = 5,
  Pem = 6
}

export enum CxlRejReason {
  TooLateToCancel = 0,
  UnknownOrder = 1,
  BrokerCredit = 2,
  OrderAlreadyInPendingStatus = 3,
  UnableToProcessOrderMassCancelRequest = 4,
  OrigOrdModTime = 5,
  DuplicateClOrdId = 6,
  PriceExceedsCurrentPrice = 7,
  PriceExceedsCurrentPriceBand = 8,
  InvalidPriceIncrement = 18,
  Other = 99
}

export enum OrdRejReason {
  BrokerCredit = 0,
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
  SurveillanceOption = 12,
  IncorrectQuantity = 13,
  IncorrectAllocatedQuantity = 14,
  UnknownAccount = 15,
  PriceExceedsCurrentPriceBand = 16,
  InvalidPriceIncrement = 18,
  ReferencePriceNotAvailable = 19,
  NotionalValueExceedsThreshold = 20,
  AlgorithmRiskThresholdBreached = 21,
  ShortSellNotPermitted = 22,
  ShortSellSecurityPreBorrowRestriction = 23,
  ShortSellAccountPreBorrowRestriction = 24,
  InsufficientCreditLimit = 25,
  ExceededClipSizeLimit = 26,
  ExceededMaxNotionalOrderAmt = 27,
  ExceededDv01Pv01Limit = 28,
  ExceededCs01Limit = 29,
  Other = 99
}

export enum IOIQualifier {
  QuantityNegotiable = '1',
  AllowLateBids = '2',
  ImmediateOrCounter = '3',
  AutoTrade = '4',
  AllOrNone = 'A',
  MarketOnClose = 'B',
  AtTheClose = 'C',
  Vwap = 'D',
  Axe = 'E',
  AxeOnBid = 'F',
  AxeOnOffer = 'G',
  ClientNaturalWorking = 'H',
  InTouchWith = 'I',
  PositionWanted = 'J',
  MarketMaking = 'K',
  Limit = 'L',
  MoreBehind = 'M',
  ClientNaturalBlock = 'N',
  AtTheOpen = 'O',
  TakingAPosition = 'P',
  AtTheMarket = 'Q',
  ReadyToTrade = 'R',
  PortfolioShown = 'S',
  ThroughTheDay = 'T',
  Unwind = 'U',
  Versus = 'V',
  Indication = 'W',
  CrossingOpportunity = 'X',
  AtTheMidpoint = 'Y',
  PreOpen = 'Z',
  AutomaticSpot = 'a',
  PlatformCalculatedSpot = 'b',
  OutsideSpread = 'c',
  DeferredSpot = 'd',
  NegotiatedSpot = 'n'
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
  CalculationDifference = 'F',
  NoMatchingExecutionReport = 'G',
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
  ConsumptionTax = '9',
  PerTransaction = '10',
  Conversion = '11',
  Agent = '12',
  TransferFee = '13',
  SecurityLending = '14',
  TradeReporting = '15',
  TaxOnPrincipalAmount = '16',
  TaxOnAccruedInterestAmount = '17',
  NewIssuanceFee = '18',
  ServiceFee = '19',
  OddLotFee = '20',
  AuctionFee = '21',
  ValueAddedTax = '22',
  SalesTax = '23',
  ExecutionFee = '24',
  OrderEntryFee = '25',
  OrderModificationFee = '26',
  OrdersCancellationFee = '27',
  MarketDataAccessFee = '28',
  MarketDataTerminalFee = '29',
  MarketDataVolumeFee = '30',
  ClearingFee = '31',
  SettlementFee = '32',
  Rebates = '33',
  Discounts = '34',
  Payments = '35',
  NonMonetaryPayments = '36'
}

export enum ResetSeqNumFlag {
  No = 'N',
  Yes = 'Y'
}

export enum ExecType {
  New = '0',
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
  Restated = 'D',
  PendingReplace = 'E',
  Trade = 'F',
  TradeCorrect = 'G',
  TradeCancel = 'H',
  OrderStatus = 'I',
  TradeInAClearingHold = 'J',
  TradeHasBeenReleasedToClearing = 'K',
  TriggeredOrActivatedBySystem = 'L',
  Locked = 'M',
  Released = 'N'
}

export enum SettlCurrFxRateCalc {
  Multiply = 'M',
  Divide = 'D'
}

export enum SettlInstMode {
  Default = '0',
  StandingInstructionsProvided = '1',
  SpecificAllocationAccountOverriding = '2',
  SpecificAllocationAccountStanding = '3',
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
  BrokerCredit = '1',
  Institution = '2',
  Investor = '3'
}

export enum SecurityType {
  UsTreasuryNoteOld = 'UST',
  UsTreasuryBillOld = 'USTB',
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
  EuroCorporateFloatingRateNotes = 'EUFRN',
  UsCorporateFloatingRateNotes = 'FRN',
  IndexedLinked = 'XLINKD',
  StructuredNotes = 'STRUCT',
  YankeeCorporateBond = 'YANK',
  OffshoreIssuedChineseYuanCorporateBond = 'DIMSUMCORP',
  PreferredCorporateBond = 'PRCORP',
  ForeignExchangeContract = 'FOR',
  NonDeliverableForward = 'FXNDF',
  FxSpot = 'FXSPOT',
  FxForward = 'FXFWD',
  FxSwap = 'FXSWAP',
  NonDeliverableSwap = 'FXNDS',
  FxBankNote = 'FXBN',
  ForeignCurrencyDiscountNote = 'FXDN',
  Cap = 'CAP',
  CreditDefaultSwap = 'CDS',
  Collar = 'CLLR',
  CommoditySwap = 'CMDTYSWAP',
  Exotic = 'EXOTIC',
  OptionsOnCombo = 'OOC',
  Floor = 'FLR',
  Fra = 'FRA',
  Future = 'FUT',
  DerivativeForward = 'FWD',
  InterestRateSwap = 'IRS',
  TotalReturnSwap = 'TRS',
  LoanLease = 'LOANLEASE',
  OptionsOnFutures = 'OOF',
  OptionsOnPhysical = 'OOP',
  Option = 'OPT',
  SpotForward = 'SPOTFWD',
  SwapOption = 'SWAPTION',
  Transmission = 'XMISSION',
  Index = 'INDEX',
  BondBasket = 'BDBSKT',
  ContractForDifference = 'CFD',
  CorrelationSwap = 'CRLTNSWAP',
  DiviendSwap = 'DVDNDSWAP',
  EquityBasket = 'EQBSKT',
  EquityForward = 'EQFWD',
  ReturnSwap = 'RTRNSWAP',
  VarianceSwap = 'VARSWAP',
  PortfolioSwaps = 'PRTFLIOSWAP',
  FuturesOnASwap = 'FUTSWAP',
  ForwardsOnASwap = 'FWDSWAP',
  ForwardFreightAgreement = 'FWDFRTAGMT',
  SpreadBetting = 'SPREADBET',
  ExchangeTradedCommodity = 'ETC',
  CommonStock = 'CS',
  PreferredStock = 'PS',
  DepositoryReceipts = 'DR',
  Repurchase = 'REPO',
  Forward = 'FORWARD',
  BuySellback = 'BUYSELL',
  SecuritiesLoan = 'SECLOAN',
  SecuritiesPledge = 'SECPLEDGE',
  DeliveryVersusPledge = 'DVPLDG',
  CollateralBasket = 'COLLBSKT',
  StructuredFinanceProduct = 'SFP',
  MarginLoan = 'MRGNLOAN',
  BradyBond = 'BRADY',
  CanadianTreasuryNotes = 'CAN',
  CanadianTreasuryBills = 'CTB',
  EuroSovereigns = 'EUSOV',
  CanadianProvincialBonds = 'PROV',
  TreasuryBill = 'TB',
  UsTreasuryBond = 'TBOND',
  InterestStripFromAnyBondOrNote = 'TINT',
  UsTreasuryBill = 'TBILL',
  TreasuryInflationProtectedSecurities = 'TIPS',
  PrincipalStripOfACallableBondOrNote = 'TCAL',
  PrincipalStripFromANonCallableBondOrNote = 'TPRN',
  UsTreasuryNote = 'TNOTE',
  OffshoreIssuedChineseYuanSovereignBond = 'DIMSUMSOV',
  SovereignBond = 'SOV',
  UsTreasuryFloatingRateNote = 'TFRN',
  TermLoan = 'TERM',
  RevolverLoan = 'RVLV',
  Revolver = 'RVLVTRM',
  BridgeLoan = 'BRIDGE',
  LetterOfCredit = 'LOFC',
  SwingLineFacility = 'SWING',
  DebtorInPossession = 'DINP',
  Defaulted = 'DEFLTED',
  Withdrawn = 'WITHDRN',
  Replaced = 'REPLACD',
  Matured = 'MATURED',
  Amended = 'AMENDED',
  Retired = 'RETIRED',
  BankersAcceptance = 'BA',
  BankDepositoryNote = 'BDN',
  BankNotes = 'BN',
  BillOfExchanges = 'BOX',
  CanadianMoneyMarkets = 'CAMM',
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
  ShortTermLoanNote = 'STN',
  PlazosFijos = 'PZFJ',
  SecuredLiquidityNote = 'SLQN',
  TimeDeposit = 'TD',
  TermLiquidityNote = 'TLQN',
  ExtendedCommNote = 'XCN',
  YankeeCertificateOfDeposit = 'YCD',
  BankAcceptedBill = 'BAB',
  ShortTermBankNote = 'BNST',
  CallableCommercialPaper = 'CLCP',
  CommercialNote = 'CN',
  InterestBearingCommercialPaper = 'CPIB',
  EuroMediumTermNote = 'EUMTN',
  EuroNegotiableCommercialPaper = 'EUNCP',
  EuroStructuredLiquidityNote = 'EUSTLQN',
  EuroTimeDeposit = 'EUTD',
  JumboCertificateOfDeposit = 'JCD',
  MoneyMarketFund = 'MMF',
  MasterNote = 'MN',
  NegotiableCertificateOfDeposit = 'NCD',
  NegotiableCommercialPaper = 'NCP',
  RetailCertificateOfDeposit = 'RCD',
  TermDepositReceipt = 'TDR',
  AssetBackedSecurities = 'ABS',
  CanadianMortgageBonds = 'CMB',
  Corp = 'CMBS',
  CollateralizedMortgageObligation = 'CMO',
  IoetteMortgage = 'IET',
  MortgageBackedSecurities = 'MBS',
  MortgageInterestOnly = 'MIO',
  MortgagePrincipalOnly = 'MPO',
  MortgagePrivatePlacement = 'MPP',
  MiscellaneousPassThrough = 'MPT',
  Pfandbrief = 'PFAND',
  ToBeAnnounced = 'TBA',
  OtherAnticipationNotes = 'AN',
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
  TaxableMunicipalCp = 'TMCP',
  TaxRevenueAnticipationNote = 'TRAN',
  VariableRateDemandNote = 'VRDN',
  Warrant = 'WAR',
  MunicipalInterestBearingCommercialPaper = 'MCPIB',
  TaxableMunicipalBond = 'TMB',
  VariableRateDemandObligation = 'VRDO',
  MutualFund = 'MF',
  MultilegInstrument = 'MLEG',
  NoSecurityType = 'NONE',
  Wildcard = '?',
  Cash = 'CASH',
  Other = 'Other',
  ExchangeTradedNote = 'ETN',
  SecuritizedDerivative = 'SECDERIV',
  ExchangeTradedFund = 'ETF',
  DigitalAsset = 'DIGITAL'
}

export enum StandInstDbType {
  Other = 0,
  Dtcsid = 1,
  ThomsonAlert = 2,
  AGlobalCustodian = 3,
  AccountNet = 4
}

export enum SettlDeliveryType {
  Versus = 0,
  Free = 1,
  TriParty = 2,
  HoldInCustody = 3
}

export enum AllocLinkType {
  FxNetting = 0,
  FxSwap = 1
}

export enum PutOrCall {
  Put = 0,
  Call = 1,
  Other = 2,
  Chooser = 3
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
  ForwardAndMatch = 3,
  AutoClaimGiveUp = 4
}

export enum RoutingType {
  TargetFirm = 1,
  TargetList = 2,
  BlockFirm = 3,
  BlockList = 4,
  TargetPerson = 5,
  BlockPerson = 6
}

export enum BenchmarkCurveName {
  Eonia = 'EONIA',
  Eurepo = 'EUREPO',
  Euribor = 'Euribor',
  FutureSwap = 'FutureSWAP',
  Libid = 'LIBID',
  Libor = 'LIBOR',
  MuniAaa = 'MuniAAA',
  Other = 'OTHER',
  Pfandbriefe = 'Pfandbriefe',
  Sonia = 'SONIA',
  Swap = 'SWAP',
  Treasury = 'Treasury',
  FedFundRateEffective = 'FEDEFF',
  FedOpen = 'FEDOPEN',
  Euribor2 = 'EURIBOR',
  Aubsw = 'AUBSW',
  Bubor = 'BUBOR',
  Cdor = 'CDOR',
  Cibor = 'CIBOR',
  Eoniaswap = 'EONIASWAP',
  Estr = 'ESTR',
  Eurodollar = 'EURODOLLAR',
  Euroswiss = 'EUROSWISS',
  Gcfrepo = 'GCFREPO',
  Isdafix = 'ISDAFIX',
  Jibar = 'JIBAR',
  Mosprim = 'MOSPRIM',
  Nibor = 'NIBOR',
  Pribor = 'PRIBOR',
  Sofr = 'SOFR',
  Stibor = 'STIBOR',
  Telbor = 'TELBOR',
  Tibor = 'TIBOR',
  Wibor = 'WIBOR',
  Aonia = 'AONIA',
  Aoniar = 'AONIA-R',
  Bkbm = 'BKBM',
  Cd19D = 'CD91D',
  Corra = 'CORRA',
  Dirrtn = 'DIRR-TN',
  Eibor = 'EIBOR',
  FixingRepoRate = 'FixingRepoRate',
  Hibor = 'HIBOR',
  Ibr = 'IBR',
  Klibor = 'KLIBOR',
  Mibor = 'MIBOR',
  Nzonia = 'NZONIA',
  Phiref = 'PHIREF',
  Reibor = 'REIBOR',
  Saibor = 'SAIBOR',
  Saron = 'SARON',
  Sora = 'SORA',
  Tlref = 'TLREF',
  Tiie = 'TIIE',
  Thbfix = 'THBFIX',
  Tonar = 'TONAR'
}

export enum StipulationType {
  AlternativeMinimumTax = 'AMT',
  AutoReinvestment = 'AUTOREINV',
  BankQualified = 'BANKQUAL',
  BargainConditions = 'BGNCON',
  CouponRange = 'COUPON',
  IsoCurrencyCode = 'CURRENCY',
  CustomStart = 'CUSTOMDATE',
  Geographics = 'GEOG',
  ValuationDiscount = 'HAIRCUT',
  Insured = 'INSURED',
  IssueDate = 'ISSUE',
  Issuer = 'ISSUER',
  IssueSizeRange = 'ISSUESIZE',
  LookbackDays = 'LOOKBACK',
  ExplicitLotIdentifier = 'LOT',
  LotVariance = 'LOTVAR',
  MaturityYearAndMonth = 'MAT',
  MaturityRange = 'MATURITY',
  MaximumSubstitutions = 'MAXSUBS',
  MinimumDenomination = 'MINDNOM',
  MinimumIncrement = 'MININCR',
  MinimumQuantity = 'MINQTY',
  PaymentFrequency = 'PAYFREQ',
  NumberOfPieces = 'PIECES',
  PoolsMaximum = 'PMAX',
  PoolsPerLot = 'PPL',
  PoolsPerMillion = 'PPM',
  PoolsPerTrade = 'PPT',
  PriceRange = 'PRICE',
  PricingFrequency = 'PRICEFREQ',
  ProductionYear = 'PROD',
  CallProtection = 'PROTECT',
  Purpose = 'PURPOSE',
  BenchmarkPriceSource = 'PXSOURCE',
  RatingSourceAndRange = 'RATING',
  TypeOfRedemption = 'REDEMPTION',
  Restricted = 'RESTRICTED',
  MarketSector = 'SECTOR',
  SecurityTypeIncludedOrExcluded = 'SECTYPE',
  Structure = 'STRUCT',
  SubstitutionsFrequency = 'SUBSFREQ',
  SubstitutionsLeft = 'SUBSLEFT',
  FreeformText = 'TEXT',
  TradeVariance = 'TRDVAR',
  WeightedAverageCoupon = 'WAC',
  WeightedAverageLifeCoupon = 'WAL',
  WeightedAverageLoanAge = 'WALA',
  WeightedAverageMaturity = 'WAM',
  WholePool = 'WHOLE',
  YieldRange = 'YIELD',
  OriginalAmount = 'ORIGAMT',
  PoolEffectiveDate = 'POOLEFFDT',
  PoolInitialFactor = 'POOLINITFCTR',
  Tranche = 'TRANCHE',
  Substitution = 'SUBSTITUTION',
  Multexchfllbck = 'MULTEXCHFLLBCK',
  Compsecfllbck = 'COMPSECFLLBCK',
  Locljrsdctn = 'LOCLJRSDCTN',
  Relvjrsdctn = 'RELVJRSDCTN',
  IncurredRecovery = 'INCURRCVY',
  AdditionalTerm = 'ADDTRM',
  ModifiedEquityDelivery = 'MODEQTYDLVY',
  NoReferenceOblication = 'NOREFOBLIG',
  UnknownReferenceObligation = 'UNKREFOBLIG',
  AllGuarantees = 'ALLGUARANTEES',
  ReferencePrice = 'REFPX',
  ReferencePolicy = 'REFPOLICY',
  SecuredList = 'SECRDLIST',
  AverageFicoScore = 'AVFICO',
  AverageLoanSize = 'AVSIZE',
  MaximumLoanBalance = 'MAXBAL',
  PoolIdentifier = 'POOL',
  TypeOfRollTrade = 'ROLLTYPE',
  ReferenceToRollingOrClosingTrade = 'REFTRADE',
  PrincipalOfRollingOrClosingTrade = 'REFPRIN',
  InterestOfRollingOrClosingTrade = 'REFINT',
  AvailableOfferQuantityToBeShownToTheStreet = 'AVAILQTY',
  BrokerCredit = 'BROKERCREDIT',
  OfferPriceToBeShownToInternalBrokers = 'INTERNALPX',
  OfferQuantityToBeShownToInternalBrokers = 'INTERNALQTY',
  TheMinimumResidualOfferQuantity = 'LEAVEQTY',
  MaximumOrderSize = 'MAXORDQTY',
  OrderQuantityIncrement = 'ORDRINCR',
  PrimaryOrSecondaryMarketIndicator = 'PRIMARY',
  BrokerSalesCreditOverride = 'SALESCREDITOVR',
  TraderCredit = 'TRADERCREDIT',
  DiscountRate = 'DISCOUNT',
  YieldToMaturity = 'YTM',
  InterestPayoffOfRollingOrAmendingTrade = 'PAYOFF',
  AbsolutePrepaymentSpeed = 'ABS',
  ConstantPrepaymentPenalty = 'CPP',
  ConstantPrepaymentRate = 'CPR',
  ConstantPrepaymentYield = 'CPY',
  FinalCprOfHomeEquityPrepaymentCurve = 'HEP',
  PercentOfManufacturedHousingPrepaymentCurve = 'MHP',
  MonthlyPrepaymentRate = 'MPR',
  PercentOfProspectusPrepaymentCurve = 'PPC',
  PercentOfBmaPrepaymentCurve = 'PSA',
  SingleMonthlyMortality = 'SMM'
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
  GvntEquivalentYield = 'GOVTEQUIV',
  TrueGrossYield = 'GROSS',
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
  PreviousCloseYield = 'PREVCLOSE',
  ProceedsYield = 'PROCEEDS',
  YieldToNextPut = 'PUT',
  SemiAnnualYield = 'SEMIANNUAL',
  YieldToShortestAverageLife = 'SHORTAVGLIFE',
  SimpleYield = 'SIMPLE',
  TaxEquivalentYield = 'TAXEQUIV',
  YieldToTenderDate = 'TENDER',
  TrueYield = 'TRUE',
  YieldValueOf32Nds = 'VALUE1_32',
  YieldToWorst = 'WORST'
}

export enum TradedFlatSwitch {
  No = 'N',
  Yes = 'Y'
}

export enum SubscriptionRequestType {
  Snapshot = '0',
  SnapshotAndUpdates = '1',
  DisablePreviousSnapshot = '2'
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
  Vwap = '9',
  Imbalance = 'A',
  TradeVolume = 'B',
  OpenInterest = 'C',
  CompositeUnderlyingPrice = 'D',
  SimulatedSellPrice = 'E',
  SimulatedBuyPrice = 'F',
  MarginRate = 'G',
  MidPrice = 'H',
  EmptyBook = 'J',
  SettleHighPrice = 'K',
  SettleLowPrice = 'L',
  PriorSettlePrice = 'M',
  SessionHighBid = 'N',
  SessionLowOffer = 'O',
  EarlyPrices = 'P',
  AuctionClearingPrice = 'Q',
  SwapValueFactor = 'S',
  DailyValueAdjustmentForLongPositions = 'R',
  CumulativeValueAdjustmentForLongPositions = 'T',
  DailyValueAdjustmentForShortPositions = 'U',
  CumulativeValueAdjustmentForShortPositions = 'V',
  FixingPrice = 'W',
  CashRate = 'X',
  RecoveryRate = 'Y',
  RecoveryRateForLong = 'Z',
  RecoveryRateForShort = 'a',
  MarketBid = 'b',
  MarketOffer = 'c',
  ShortSaleMinPrice = 'd',
  PreviousClosingPrice = 'e',
  ThresholdLimitPriceBanding = 'g',
  DailyFinancingValue = 'h',
  AccruedFinancingValue = 'i',
  Twap = 't'
}

export enum TickDirection {
  PlusTick = '0',
  ZeroPlusTick = '1',
  MinusTick = '2',
  ZeroMinusTick = '3'
}

export enum QuoteCondition {
  ReservedSam = '0',
  NoActiveSam = '1',
  Restricted = '2',
  RestOfBookVwap = '3',
  BetterPricesInConditionalOrders = '4',
  MedianPrice = '5',
  FullCurve = '6',
  FlatCurve = '7',
  Open = 'A',
  Closed = 'B',
  ExchangeBest = 'C',
  ConsolidatedBest = 'D',
  Locked = 'E',
  Crossed = 'F',
  Depth = 'G',
  FastTrading = 'H',
  NonFirm = 'I',
  Manual = 'L',
  OutrightPrice = 'J',
  ImpliedPrice = 'K',
  DepthOnOffer = 'M',
  DepthOnBid = 'N',
  Closing = 'O',
  NewsDissemination = 'P',
  TradingRange = 'Q',
  OrderInflux = 'R',
  DueToRelated = 'S',
  NewsPending = 'T',
  AdditionalInfo = 'U',
  AdditionalInfoDueToRelated = 'V',
  Resume = 'W',
  ViewOfCommon = 'X',
  VolumeAlert = 'Y',
  OrderImbalance = 'Z',
  EquipmentChangeover = 'a',
  NoOpen = 'b',
  RegularEth = 'c',
  AutomaticExecution = 'd',
  AutomaticExecutionEth = 'e',
  FastMarketEth = 'f',
  InactiveEth = 'g',
  Rotation = 'h',
  RotationEth = 'i',
  Halt = 'j',
  HaltEth = 'k',
  DueToNewsDissemination = 'l',
  DueToNewsPending = 'm',
  TradingResume = 'n',
  OutOfSequence = 'o',
  BidSpecialist = 'p',
  OfferSpecialist = 'q',
  BidOfferSpecialist = 'r',
  EndOfDaySam = 's',
  ForbiddenSam = 't',
  FrozenSam = 'u',
  PreOpeningSam = 'v',
  OpeningSam = 'w',
  OpenSam = 'x',
  SurveillanceSam = 'y',
  SuspendedSam = 'z'
}

export enum TradeCondition {
  Cancel = '0',
  ImpliedTrade = '1',
  MarketplaceEnteredTrade = '2',
  MultiAssetClassMultilegTrade = '3',
  MultilegToMultilegTrade = '4',
  ShortSaleMinPrice = '5',
  Benchmark = '6',
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
  OpeningPrice = 'R',
  BargainCondition = 'S',
  ConvertedPriceIndicator = 'T',
  ExchangeLast = 'U',
  FinalPriceOfSession = 'V',
  ExPit = 'W',
  Crossed = 'X',
  TradesResultingFromManual = 'Y',
  TradesResultingFromIntermarketSweep = 'Z',
  VolumeOnly = 'a',
  DirectPlus = 'b',
  Acquisition = 'c',
  Bunched = 'd',
  Distribution = 'e',
  BunchedSale = 'f',
  SplitTrade = 'g',
  CancelStopped = 'h',
  CancelEth = 'i',
  CancelStoppedEth = 'j',
  OutOfSequenceEth = 'k',
  CancelLastEth = 'l',
  SoldLastSaleEth = 'm',
  CancelLast = 'n',
  SoldLastSale = 'o',
  CancelOpen = 'p',
  CancelOpenEth = 'q',
  OpenedSaleEth = 'r',
  CancelOnly = 's',
  CancelOnlyEth = 't',
  LateOpenEth = 'u',
  AutoExecutionEth = 'v',
  Reopen = 'w',
  ReopenEth = 'x',
  Adjusted = 'y',
  AdjustedEth = 'z',
  Spread = 'AA',
  SpreadEth = 'AB',
  Straddle = 'AC',
  StraddleEth = 'AD',
  Stopped = 'AE',
  StoppedEth = 'AF',
  RegularEth = 'AG',
  Combo = 'AH',
  ComboEth = 'AI',
  OfficialClosingPrice = 'AJ',
  PriorReferencePrice = 'AK',
  StoppedSoldLast = 'AL',
  StoppedOutOfSequence = 'AM',
  OfficialClosingPriceDup = 'AN',
  CrossedOld = 'AO',
  FastMarket = 'AP',
  AutomaticExecution = 'AQ',
  FormT = 'AR',
  BasketIndex = 'AS',
  BurstBasket = 'AT',
  TradeThroughExempt = 'AU',
  QuoteSpread = 'AV',
  LastAuctionPrice = 'AW',
  HighPrice = 'AX',
  LowPrice = 'AY',
  SystematicInternaliser = 'AZ',
  AwayMarket = 'BA',
  MidpointPrice = 'BB',
  TradedBeforeIssueDate = 'BC',
  PreviousClosingPrice = 'BD',
  NationalBestBidOffer = 'BE'
}

export enum MDUpdateAction {
  New = '0',
  Change = '1',
  Delete = '2',
  DeleteThru = '3',
  DeleteFrom = '4',
  Overlay = '5'
}

export enum MDReqRejReason {
  UnknownSymbol = '0',
  DuplicateMdReqId = '1',
  InsufficientBandwidth = '2',
  InsufficientPermissions = '3',
  UnsupportedSubscriptionRequestType = '4',
  UnsupportedMarketDepth = '5',
  UnsupportedMdUpdateType = '6',
  UnsupportedAggregatedBook = '7',
  UnsupportedMdEntryType = '8',
  UnsupportedTradingSessionId = '9',
  UnsupportedScope = 'A',
  UnsupportedOpenCloseSettleFlag = 'B',
  UnsupportedMdImplicitDelete = 'C',
  InsufficientCredit = 'D'
}

export enum DeleteReason {
  Cancellation = '0',
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
  PendingDelisting = '2',
  Restricted = '3'
}

export enum CorporateAction {
  ExDividend = 'A',
  ExDistribution = 'B',
  ExRights = 'C',
  New = 'D',
  ExInterest = 'E',
  CashDividend = 'F',
  StockDividend = 'G',
  NonIntegerStockSplit = 'H',
  ReverseStockSplit = 'I',
  StandardIntegerStockSplit = 'J',
  PositionConsolidation = 'K',
  LiquidationReorganization = 'L',
  MergerReorganization = 'M',
  RightsOffering = 'N',
  ShareholderMeeting = 'O',
  Spinoff = 'P',
  TenderOffer = 'Q',
  Warrant = 'R',
  SpecialAction = 'S',
  SymbolConversion = 'T',
  Cusip = 'U',
  LeapRollover = 'V',
  SuccessionEvent = 'W'
}

export enum QuoteStatus {
  Accepted = 0,
  CancelForSymbol = 1,
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
  CanceledDueToCrossMarket = 15,
  Active = 16,
  Canceled = 17,
  UnsolicitedQuoteReplenishment = 18,
  PendingEndTrade = 19,
  TooLateToEnd = 20,
  Traded = 21,
  TradedAndRemoved = 22,
  ContractTerminates = 23
}

export enum QuoteCancelType {
  CancelForOneOrMoreSecurities = 1,
  CancelForSecurityType = 2,
  CancelForUnderlyingSecurity = 3,
  CancelAllQuotes = 4,
  CancelSpecifiedSingleQuote = 5,
  CancelByTypeOfQuote = 6,
  CancelForSecurityIssuer = 7,
  CancelForIssuerOfUnderlyingSecurity = 8
}

export enum QuoteRejectReason {
  UnknownSymbol = 1,
  Exchange = 2,
  QuoteRequestExceedsLimit = 3,
  TooLateToEnter = 4,
  UnknownQuote = 5,
  DuplicateQuote = 6,
  InvalidBid = 7,
  InvalidPrice = 8,
  NotAuthorizedToQuoteSecurity = 9,
  PriceExceedsCurrentPriceBand = 10,
  QuoteLocked = 11,
  InvalidOrUnknownSecurityIssuer = 12,
  InvalidOrUnknownIssuerOfUnderlyingSecurity = 13,
  NotionalValueExceedsThreshold = 14,
  PriceExceedsCurrentPriceBandDepr = 15,
  ReferencePriceNotAvailable = 16,
  InsufficientCreditLimit = 17,
  ExceededClipSizeLimit = 18,
  ExceededMaxNotionalOrderAmt = 19,
  ExceededDv01Pv01Limit = 20,
  ExceededCs01Limit = 21,
  Other = 99
}

export enum QuoteResponseLevel {
  NoAcknowledgement = 0,
  AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
  AcknowledgeEachQuoteMessage = 2,
  SummaryAcknowledgement = 3
}

export enum QuoteRequestType {
  Manual = 1,
  Automatic = 2,
  ConfirmQuote = 3
}

export enum SecurityRequestType {
  RequestSecurityIdentityAndSpecifications = 0,
  RequestSecurityIdentityForSpecifications = 1,
  RequestListSecurityTypes = 2,
  RequestListSecurities = 3,
  Symbol = 4,
  SecurityTypeAndOrCfiCode = 5,
  Product = 6,
  TradingSessionId = 7,
  AllSecurities = 8,
  MarketIdOrMarketId = 9
}

export enum SecurityResponseType {
  AcceptAsIs = 1,
  AcceptWithRevisions = 2,
  ListOfSecurityTypesReturnedPerRequest = 3,
  ListOfSecuritiesReturnedPerRequest = 4,
  RejectSecurityProposal = 5,
  CannotMatchSelectionCriteria = 6
}

export enum UnsolicitedIndicator {
  No = 'N',
  Yes = 'Y'
}

export enum SecurityTradingStatus {
  OpeningDelay = 1,
  TradingHalt = 2,
  Resume = 3,
  NoOpen = 4,
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
  FastMarket = 23,
  PreCross = 24,
  Cross = 25,
  PostClose = 26,
  NoCancel = 27
}

export enum HaltReasonInt {
  NewsDissemination = 0,
  OrderInflux = 1,
  OrderImbalance = 2,
  AdditionalInformation = 3,
  NewsPending = 4,
  EquipmentChangeover = 5
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

export enum TradingSessionID {
  Day = '1',
  HalfDay = '2',
  Morning = '3',
  Afternoon = '4',
  Evening = '5',
  AfterHours = '6',
  Holiday = '7'
}

export enum TradSesMethod {
  Electronic = 1,
  OpenOutcry = 2,
  TwoParty = 3,
  Voice = 4
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
  CompIdProblem = 9,
  SendingTimeAccuracyProblem = 10,
  InvalidMsgType = 11,
  XmlValidationError = 12,
  TagAppearsMoreThanOnce = 13,
  TagSpecifiedOutOfRequiredOrder = 14,
  RepeatingGroupFieldsOutOfOrder = 15,
  IncorrectNumInGroupCountForRepeatingGroup = 16,
  NonDataValueIncludesFieldDelimiter = 17,
  InvalidUnsupportedApplVer = 18,
  Other = 99
}

export enum BidRequestTransType {
  Cancel = 'C',
  New = 'N'
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
  PartialDeclineOfOrderQty = 5,
  CancelOnTradingHalt = 6,
  CancelOnSystemFailure = 7,
  Market = 8,
  Canceled = 9,
  WarehouseRecap = 10,
  PegRefresh = 11,
  CancelOnConnectionLoss = 12,
  CancelOnLogout = 13,
  AssignTimePriority = 14,
  CancelledForTradePriceViolation = 15,
  CancelledForCrossImbalance = 16,
  CxldSmp = 17,
  CxldSmpAggressive = 18,
  CxldSmpPassive = 19,
  CxldSmpAggressivePassive = 20,
  Other = 99
}

export enum BusinessRejectReason {
  Other = 0,
  UnknownId = 1,
  UnknownSecurity = 2,
  UnsupportedMessageType = 3,
  ApplicationNotAvailable = 4,
  ConditionallyRequiredFieldMissing = 5,
  NotAuthorized = 6,
  DeliverToFirmNotAvailableAtThisTime = 7,
  ThrottleLimitExceeded = 8,
  ThrottleLimitExceededSessionDisconnected = 9,
  ThrottledMessagesRejectedOnRequest = 10,
  InvalidPriceIncrement = 18
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
  RelatedToLastTradePrice = '5',
  RelatedToVwap = '6',
  AveragePriceGuarantee = '7'
}

export enum BidType {
  NonDisclosed = 1,
  Disclosed = 2,
  NoBiddingProcess = 3
}

export enum BidDescriptorType {
  Sector = 1,
  Country = 2,
  Index = 3
}

export enum SideValueInd {
  SideValue1 = 1,
  SideValue2 = 2
}

export enum LiquidityIndType {
  FiveDayMovingAverage = 1,
  TwentyDayMovingAverage = 2,
  NormalMarketSize = 3,
  Other = 4
}

export enum ExchangeForPhysical {
  No = 'N',
  Yes = 'Y'
}

export enum ProgRptReqs {
  BuySideRequests = 1,
  SellSideSends = 2,
  RealTimeExecutionReports = 3
}

export enum IncTaxInd {
  Net = 1,
  Gross = 2
}

export enum BidTradeType {
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
  VwapThroughADayExcept = '9',
  VwapThroughAMorningSessionExcept = 'A',
  VwapThroughAnAfternoonSessionExcept = 'B',
  Strike = 'C',
  Open = 'D',
  Others = 'Z'
}

export enum PriceType {
  Percentage = 1,
  PerUnit = 2,
  FixedAmount = 3,
  Discount = 4,
  Premium = 5,
  Spread = 6,
  TedPrice = 7,
  TedYield = 8,
  Yield = 9,
  FixedCabinetTradePrice = 10,
  VariableCabinetTradePrice = 11,
  PriceSpread = 12,
  ProductTicksInHalves = 13,
  ProductTicksInFourths = 14,
  ProductTicksInEighths = 15,
  ProductTicksInSixteenths = 16,
  ProductTicksInThirtySeconds = 17,
  ProductTicksInSixtyFourths = 18,
  ProductTicksInOneTwentyEighths = 19,
  NormalRateRepresentation = 20,
  InverseRateRepresentation = 21,
  BasisPoints = 22,
  UpfrontPoints = 23,
  InterestRate = 24,
  PercentageNotional = 25
}

export enum GTBookingInst {
  BookOutAllTradesOnDayOfExecution = 0,
  AccumulateUntilFilledOrExpired = 1,
  AccumulateUntilVerballyNotifiedOtherwise = 2
}

export enum ListStatusType {
  Ack = 1,
  Response = 2,
  Timed = 3,
  ExecStarted = 4,
  AllDone = 5,
  Alert = 6
}

export enum NetGrossInd {
  Net = 1,
  Gross = 2
}

export enum ListOrderStatus {
  InBiddingProcess = 1,
  ReceivedForExecution = 2,
  Executing = 3,
  Cancelling = 4,
  Alert = 5,
  AllDone = 6,
  Reject = 7
}

export enum ListExecInstType {
  Immediate = '1',
  WaitForInstruction = '2',
  SellDriven = '3',
  BuyDrivenCashTopUp = '4',
  BuyDrivenCashWithdraw = '5'
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
  TaiwaneseForeignInvestorId = '2',
  TaiwaneseTradingAcct = '3',
  MalaysianCentralDepository = '4',
  ChineseInvestorId = '5',
  UkNationalInsuranceOrPensionNumber = '6',
  UsSocialSecurityNumber = '7',
  UsEmployerOrTaxIdNumber = '8',
  AustralianBusinessNumber = '9',
  AustralianTaxFileNumber = 'A',
  TaxId = 'J',
  IsitcAcronym = 'I',
  Bic = 'B',
  GeneralIdentifier = 'C',
  Proprietary = 'D',
  IsoCountryCode = 'E',
  SettlementEntityLocation = 'F',
  Mic = 'G',
  CsdParticipant = 'H',
  AustralianCompanyNumber = 'K',
  AustralianRegisteredBodyNumber = 'L',
  CftcReportingFirmIdentifier = 'M',
  LegalEntityIdentifier = 'N',
  InterimIdentifier = 'O',
  ShortCodeIdentifier = 'P',
  NationalIdNaturalPerson = 'Q',
  IndiaPermanentAccountNumber = 'R',
  Fdid = 'S',
  Spsaid = 'T',
  MasterSpsaid = 'U'
}

export enum PartyRole {
  ExecutingFirm = 1,
  BrokerOfCredit = 2,
  ClientId = 3,
  ClearingFirm = 4,
  InvestorId = 5,
  IntroducingFirm = 6,
  EnteringFirm = 7,
  Locate = 8,
  FundManagerClientId = 9,
  SettlementLocation = 10,
  OrderOriginationTrader = 11,
  ExecutingTrader = 12,
  OrderOriginationFirm = 13,
  GiveupClearingFirmDepr = 14,
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
  Buyer = 27,
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
  PositionAccount = 38,
  ContraInvestorId = 39,
  TransferToFirm = 40,
  ContraPositionAccount = 41,
  ContraExchange = 42,
  InternalCarryAccount = 43,
  OrderEntryOperatorId = 44,
  SecondaryAccountNumber = 45,
  ForeignFirm = 46,
  ThirdPartyAllocationFirm = 47,
  ClaimingAccount = 48,
  AssetManager = 49,
  PledgorAccount = 50,
  PledgeeAccount = 51,
  LargeTraderReportableAccount = 52,
  TraderMnemonic = 53,
  SenderLocation = 54,
  SessionId = 55,
  AcceptableCounterparty = 56,
  UnacceptableCounterparty = 57,
  EnteringUnit = 58,
  ExecutingUnit = 59,
  IntroducingBroker = 60,
  QuoteOriginator = 61,
  ReportOriginator = 62,
  SystematicInternaliser = 63,
  MultilateralTradingFacility = 64,
  RegulatedMarket = 65,
  MarketMaker = 66,
  InvestmentFirm = 67,
  HostCompetentAuthority = 68,
  HomeCompetentAuthority = 69,
  CompetentAuthorityLiquidity = 70,
  CompetentAuthorityTransactionVenue = 71,
  ReportingIntermediary = 72,
  ExecutionVenue = 73,
  MarketDataEntryOriginator = 74,
  LocationId = 75,
  DeskId = 76,
  MarketDataMarket = 77,
  AllocationEntity = 78,
  PrimeBroker = 79,
  StepOutFirm = 80,
  BrokerClearingId = 81,
  CentralRegistrationDepository = 82,
  ClearingAccount = 83,
  AcceptableSettlingCounterparty = 84,
  UnacceptableSettlingCounterparty = 85,
  ClsMemberBank = 86,
  InConcertGroup = 87,
  InConcertControllingEntity = 88,
  LargePositionsReportingAccount = 89,
  SettlementFirm = 90,
  SettlementAccount = 91,
  ReportingMarketCenter = 92,
  RelatedReportingMarketCenter = 93,
  AwayMarket = 94,
  GiveupTradingFirm = 95,
  TakeupTradingFirm = 96,
  GiveupClearingFirm = 97,
  TakeupClearingFirm = 98,
  OriginatingMarket = 99,
  MarginAccount = 100,
  CollateralAssetAccount = 101,
  DataRepository = 102,
  CalculationAgent = 103,
  ExerciseNoticeSender = 104,
  ExerciseNoticeReceiver = 105,
  RateReferenceBank = 106,
  Correspondent = 107,
  BeneficiaryBank = 109,
  Borrower = 110,
  PrimaryObligator = 111,
  Guarantor = 112,
  ExcludedReferenceEntity = 113,
  DeterminingParty = 114,
  HedgingParty = 115,
  ReportingEntity = 116,
  SalesPerson = 117,
  Operator = 118,
  Csd = 119,
  Icsd = 120,
  TradingSubAccount = 121,
  InvestmentDecisionMaker = 122,
  PublishingIntermediary = 123,
  CsdParticipant = 124,
  Issuer = 125,
  ContraCustomerAccount = 126,
  ContraInvestmentDecisionMaker = 127
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
  No = 'N',
  Yes = 'Y'
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
  FedWire = 7,
  DirectCredit = 8,
  AchCredit = 9,
  Bpay = 10,
  HighValueClearingSystemHvacs = 11,
  ReinvestInFund = 12,
  Other = 999
}

export enum CancellationRights {
  Yes = 'Y',
  NoExecutionOnly = 'N',
  NoWaiverAgreement = 'M',
  NoInstitutional = 'O'
}

export enum MoneyLaunderingStatus {
  ExemptBelowLimit = '1',
  ExemptMoneyType = '2',
  ExemptAuthorised = '3',
  Passed = 'Y',
  NotChecked = 'N'
}

export enum ExecPriceType {
  BidPrice = 'B',
  CreationPrice = 'C',
  CreationPricePlusAdjustmentPercent = 'D',
  CreationPricePlusAdjustmentAmount = 'E',
  OfferPrice = 'O',
  OfferPriceMinusAdjustmentPercent = 'P',
  OfferPriceMinusAdjustmentAmount = 'Q',
  SinglePrice = 'S'
}

export enum TradeReportTransType {
  New = 0,
  Cancel = 1,
  Replace = 2,
  Release = 3,
  Reverse = 4,
  CancelDueToBackOutOfTrade = 5
}

export enum PaymentMethod {
  Crest = 1,
  Nscc = 2,
  Euroclear = 3,
  Clearstream = 4,
  Cheque = 5,
  TelegraphicTransfer = 6,
  FedWire = 7,
  DebitCard = 8,
  DirectDebit = 9,
  DirectCredit = 10,
  CreditCard = 11,
  AchDebit = 12,
  AchCredit = 13,
  Bpay = 14,
  HighValueClearingSystem = 15,
  Chips = 16,
  Swift = 17,
  Chaps = 18,
  Sic = 19,
  EuroSic = 20,
  Other = 999
}

export enum TaxAdvantageType {
  None = 0,
  MaxiIsa = 1,
  Tessa = 2,
  MiniCashIsa = 3,
  MiniStocksAndSharesIsa = 4,
  MiniInsuranceIsa = 5,
  CurrentYearPayment = 6,
  PriorYearPayment = 7,
  AssetTransfer = 8,
  EmployeePriorYear = 9,
  EmployeeCurrentYear = 10,
  EmployerPriorYear = 11,
  EmployerCurrentYear = 12,
  NonFundPrototypeIra = 13,
  NonFundQualifiedPlan = 14,
  DefinedContributionPlan = 15,
  Ira = 16,
  IraRollover = 17,
  Keogh = 18,
  ProfitSharingPlan = 19,
  Us401K = 20,
  SelfDirectedIra = 21,
  Us403B = 22,
  Us457 = 23,
  RothIraPrototype = 24,
  RothIraNonPrototype = 25,
  RothConversionIraPrototype = 26,
  RothConversionIraNonPrototype = 27,
  EducationIraPrototype = 28,
  EducationIraNonPrototype = 29,
  Other = 999
}

export enum FundRenewWaiv {
  No = 'N',
  Yes = 'Y'
}

export enum RegistStatus {
  Accepted = 'A',
  Rejected = 'R',
  Held = 'H',
  Reminder = 'N'
}

export enum RegistRejReasonCode {
  InvalidAccountType = 1,
  InvalidTaxExemptType = 2,
  InvalidOwnershipType = 3,
  NoRegDetails = 4,
  InvalidRegSeqNo = 5,
  InvalidRegDetails = 6,
  InvalidMailingDetails = 7,
  InvalidMailingInstructions = 8,
  InvalidInvestorId = 9,
  InvalidInvestorIdSource = 10,
  InvalidDateOfBirth = 11,
  InvalidCountry = 12,
  InvalidDistribInstns = 13,
  InvalidPercentage = 14,
  InvalidPaymentMethod = 15,
  InvalidAccountName = 16,
  InvalidAgentCode = 17,
  InvalidAccountNum = 18,
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
  CommissionPercent = 2,
  InitialChargeAmount = 3,
  InitialChargePercent = 4,
  DiscountAmount = 5,
  DiscountPercent = 6,
  DilutionLevyAmount = 7,
  DilutionLevyPercent = 8,
  ExitChargeAmount = 9,
  ExitChargePercent = 10,
  FundBasedRenewalCommissionPercent = 11,
  ProjectedFundValue = 12,
  FundBasedRenewalCommissionOnOrder = 13,
  FundBasedRenewalCommissionOnFund = 14,
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
  Nominee = 13,
  InstitutionalCustomer = 14,
  Combined = 15,
  MemberFirmEmployee = 16,
  MarketMakingAccount = 17,
  ProprietaryAccount = 18,
  NonbrokerDealer = 19,
  UnknownBeneficialOwnerType = 20,
  FirmsErrorAccount = 21,
  FirmAgencyAveragePriceAccount = 22
}

export enum OrderCapacity {
  Agency = 'A',
  Proprietary = 'G',
  Individual = 'I',
  Principal = 'P',
  RisklessPrincipal = 'R',
  AgentForOtherMember = 'W',
  MixedCapacity = 'M'
}

export enum OrderRestrictions {
  ProgramTrade = '1',
  IndexArbitrage = '2',
  NonIndexArbitrage = '3',
  CompetingMarketMaker = '4',
  ActingAsMarketMakerOrSpecialistInSecurity = '5',
  ActingAsMarketMakerOrSpecialistInUnderlying = '6',
  ForeignEntity = '7',
  ExternalMarketParticipant = '8',
  ExternalInterConnectedMarketLinkage = '9',
  RisklessArbitrage = 'A',
  IssuerHolding = 'B',
  IssuePriceStabilization = 'C',
  NonAlgorithmic = 'D',
  Algorithmic = 'E',
  Cross = 'F',
  InsiderAccount = 'G',
  SignificantShareholder = 'H',
  NormalCourseIssuerBid = 'I'
}

export enum MassCancelRequestType {
  CancelOrdersForASecurity = '1',
  CancelOrdersForAnUnderlyingSecurity = '2',
  CancelOrdersForAProduct = '3',
  CancelOrdersForAcfiCode = '4',
  CancelOrdersForASecurityType = '5',
  CancelOrdersForATradingSession = '6',
  CancelAllOrders = '7',
  CancelOrdersForAMarket = '8',
  CancelOrdersForAMarketSegment = '9',
  CancelOrdersForASecurityGroup = 'A',
  CancelOrdersForSecurityIssuer = 'B',
  CancelForIssuerOfUnderlyingSecurity = 'C'
}

export enum MassCancelResponse {
  CancelRequestRejected = '0',
  CancelOrdersForASecurity = '1',
  CancelOrdersForAnUnderlyingSecurity = '2',
  CancelOrdersForAProduct = '3',
  CancelOrdersForAcfiCode = '4',
  CancelOrdersForASecurityType = '5',
  CancelOrdersForATradingSession = '6',
  CancelAllOrders = '7',
  CancelOrdersForAMarket = '8',
  CancelOrdersForAMarketSegment = '9',
  CancelOrdersForASecurityGroup = 'A',
  CancelOrdersForASecuritiesIssuer = 'B',
  CancelOrdersForIssuerOfUnderlyingSecurity = 'C'
}

export enum MassCancelRejectReason {
  MassCancelNotSupported = 0,
  InvalidOrUnknownSecurity = 1,
  InvalidOrUnknownUnderlyingSecurity = 2,
  InvalidOrUnknownProduct = 3,
  InvalidOrUnknownCfiCode = 4,
  InvalidOrUnknownSecurityType = 5,
  InvalidOrUnknownTradingSession = 6,
  InvalidOrUnknownMarket = 7,
  InvalidOrUnkownMarketSegment = 8,
  InvalidOrUnknownSecurityGroup = 9,
  InvalidOrUnknownSecurityIssuer = 10,
  InvalidOrUnknownIssuerOfUnderlyingSecurity = 11,
  Other = 99
}

export enum QuoteType {
  Indicative = 0,
  Tradeable = 1,
  RestrictedTradeable = 2,
  Counter = 3,
  InitiallyTradeable = 4
}

export enum CashMargin {
  Cash = '1',
  MarginOpen = '2',
  MarginClose = '3'
}

export enum Scope {
  LocalMarket = '1',
  National = '2',
  Global = '3'
}

export enum MDImplicitDelete {
  No = 'N',
  Yes = 'Y'
}

export enum CrossType {
  CrossAon = 1,
  CrossIoc = 2,
  CrossOneSide = 3,
  CrossSamePrice = 4,
  BasisCross = 5,
  ContingentCross = 6,
  VwapCross = 7,
  StsCross = 8,
  CustomerToCustomer = 9
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
  SecurityTypeAnd = 1,
  Product = 2,
  TradingSessionId = 3,
  AllSecurities = 4,
  MarketIdOrMarketId = 5
}

export enum SecurityRequestResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoInstrumentsFound = 2,
  NotAuthorizedToRetrieveInstrumentData = 3,
  InstrumentDataTemporarilyUnavailable = 4,
  RequestForInstrumentDataNotSupported = 5
}

export enum MultiLegRptTypeReq {
  ReportByMulitlegSecurityOnly = 0,
  ReportByMultilegSecurityAndInstrumentLegs = 1,
  ReportByInstrumentLegsOnly = 2
}

export enum TradSesStatusRejReason {
  UnknownOrInvalidTradingSessionId = 1,
  Other = 99
}

export enum TradeRequestType {
  AllTrades = 0,
  MatchedTradesMatchingCriteria = 1,
  UnmatchedTradesThatMatchCriteria = 2,
  UnreportedTradesThatMatchCriteria = 3,
  AdvisoriesThatMatchCriteria = 4
}

export enum PreviouslyReported {
  No = 'N',
  Yes = 'Y'
}

export enum MatchStatus {
  Compared = '0',
  Uncompared = '1',
  AdvisoryOrAlert = '2',
  Mismatched = '3'
}

export enum MatchType {
  OnePartyTradeReport = '1',
  TwoPartyTradeReport = '2',
  ConfirmedTradeReport = '3',
  AutoMatch = '4',
  CrossAuction = '5',
  CounterOrderSelection = '6',
  CallAuction = '7',
  Issuing = '8',
  SystematicInternaliser = '9',
  AutoMatchLastLook = '10',
  CrossAuctionLastLook = '11',
  ActAcceptedTrade = 'M3',
  ActDefaultTrade = 'M4',
  ActDefaultAfterM2 = 'M5',
  Actm6Match = 'M6',
  ExactMatchPlus4BadgesExecTime = 'A1',
  ExactMatchPlus4Badges = 'A2',
  ExactMatchPlus2BadgesExecTime = 'A3',
  ExactMatchPlus2Badges = 'A4',
  ExactMatchPlusExecTime = 'A5',
  StampedAdvisoriesOrSpecialistAccepts = 'AQ',
  A1ExactMatchSummarizedQuantity = 'S1',
  A2ExactMatchSummarizedQuantity = 'S2',
  A3ExactMatchSummarizedQuantity = 'S3',
  A4ExactMatchSummarizedQuantity = 'S4',
  A5ExactMatchSummarizedQuantity = 'S5',
  ExactMatchMinusBadgesTimes = 'M1',
  SummarizedMatchMinusBadgesTimes = 'M2',
  OcsLockedIn = 'MT'
}

export enum OddLot {
  No = 'N',
  Yes = 'Y'
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
  QualifiedServiceRepresentativeQsr = 11,
  CustomerTrade = 12,
  SelfClearing = 13,
  BuyIn = 14
}

export enum AccountType {
  CarriedCustomerSide = 1,
  CarriedNonCustomerSide = 2,
  HouseTrader = 3,
  FloorTrader = 4,
  CarriedNonCustomerSideCrossMargined = 6,
  HouseTraderCrossMargined = 7,
  JointBackOfficeAccount = 8,
  EquitiesSpecialist = 9,
  OptionsMarketMaker = 10,
  OptionsFirmAccount = 11,
  AccountCustomerNonCustomerOrders = 12,
  AccountOrdersMultipleCustomers = 13
}

export enum CustOrderCapacity {
  MemberTradingForTheirOwnAccount = 1,
  ClearingFirmTradingForItsProprietaryAccount = 2,
  MemberTradingForAnotherMember = 3,
  AllOther = 4,
  RetailCustomer = 5
}

export enum MassStatusReqType {
  StatusForOrdersForASecurity = 1,
  StatusForOrdersForAnUnderlyingSecurity = 2,
  StatusForOrdersForAProduct = 3,
  StatusForOrdersForAcfiCode = 4,
  StatusForOrdersForASecurityType = 5,
  StatusForOrdersForATradingSession = 6,
  StatusForAllOrders = 7,
  StatusForOrdersForAPartyId = 8,
  StatusForSecurityIssuer = 9,
  StatusForIssuerOfUnderlyingSecurity = 10
}

export enum DayBookingInst {
  Auto = '0',
  SpeakWithOrderInitiatorBeforeBooking = '1',
  Accumulate = '2'
}

export enum BookingUnit {
  EachPartialExecutionIsABookableUnit = '0',
  AggregatePartialExecutionsOnThisOrder = '1',
  AggregateExecutionsForThisSymbol = '2'
}

export enum PreallocMethod {
  ProRata = '0',
  DoNotProRata = '1'
}

export enum TradingSessionSubID {
  PreTrading = '1',
  OpeningOrOpeningAuction = '2',
  Continuous = '3',
  ClosingOrClosingAuction = '4',
  PostTrading = '5',
  ScheduledIntradayAuction = '6',
  Quiescent = '7',
  AnyAuction = '8',
  UnscheduledIntradayAuction = '9',
  OutOfMainSessionTrading = '10',
  PrivateAuction = '11',
  PublicAuction = '12',
  GroupAuction = '13'
}

export enum AllocType {
  Calculated = 1,
  Preliminary = 2,
  SellsideCalculatedUsingPreliminary = 3,
  SellsideCalculatedWithoutPreliminary = 4,
  ReadyToBook = 5,
  BuysideReadyToBook = 6,
  WarehouseInstruction = 7,
  RequestToIntermediary = 8,
  Accept = 9,
  Reject = 10,
  AcceptPending = 11,
  IncompleteGroup = 12,
  CompleteGroup = 13,
  ReversalPending = 14,
  ReopenGroup = 15,
  CancelGroup = 16,
  Giveup = 17,
  Takeup = 18,
  RefuseTakeup = 19,
  InitiateReversal = 20,
  Reverse = 21,
  RefuseReversal = 22,
  SubAllocationGiveup = 23,
  ApproveGiveup = 24,
  ApproveTakeup = 25,
  NotionalValueAveragePxGroupAlloc = 26
}

export enum ClearingFeeIndicator {
  FirstYearDelegate = '1',
  SecondYearDelegate = '2',
  ThirdYearDelegate = '3',
  FourthYearDelegate = '4',
  FifthYearDelegate = '5',
  SixthYearDelegate = '9',
  CboeMember = 'B',
  NonMemberAndCustomer = 'C',
  EquityMemberAndClearingMember = 'E',
  FullAndAssociateMember = 'F',
  Firms106HAnd106J = 'H',
  Gim = 'I',
  Lessee106FEmployees = 'L',
  AllOtherOwnershipTypes = 'M'
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
  No = 'N',
  Yes = 'Y'
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
  InsufficientCredit = 11,
  ExceededClipSizeLimit = 12,
  ExceededMaxNotionalOrderAmt = 13,
  ExceededDv01Pv01Limit = 14,
  ExceededCs01Limit = 15,
  Other = 99
}

export enum AcctIDSource {
  Bic = 1,
  SidCode = 2,
  Tfm = 3,
  Omgeo = 4,
  DtccCode = 5,
  Spsaid = 6,
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
  BookEntry = 1,
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
  Discount = 4,
  Premium = 5,
  Spread = 6,
  TedPrice = 7,
  TedYield = 8,
  YieldSpread = 9,
  Yield = 10,
  PriceSpread = 12,
  ProductTicksInHalves = 13,
  ProductTicksInFourths = 14,
  ProductTicksInEighths = 15,
  ProductTicksInSixteenths = 16,
  ProductTicksInThirtySeconds = 17,
  ProductTicksInSixtyFourths = 18,
  ProductTicksInOneTwentyEighths = 19,
  NormalRateRepresentation = 20,
  InverseRateRepresentation = 21,
  BasisPoints = 22,
  UpFrontPoints = 23,
  InterestRate = 24,
  PercentageOfNotional = 25
}

export enum QuoteRespType {
  Hit = 1,
  Counter = 2,
  Expired = 3,
  Cover = 4,
  DoneAway = 5,
  Pass = 6,
  EndTrade = 7,
  TimedOut = 8,
  Tied = 9,
  TiedCover = 10,
  Accept = 11,
  TerminateContract = 12
}

export enum PosType {
  AllocationTradeQty = 'ALC',
  OptionAssignment = 'AS',
  AsOfTradeQty = 'ASF',
  DeliveryQty = 'DLV',
  ElectronicTradeQty = 'ETR',
  OptionExerciseQty = 'EX',
  EndOfDayQty = 'FIN',
  IntraSpreadQty = 'IAS',
  InterSpreadQty = 'IES',
  AdjustmentQty = 'PA',
  PitTradeQty = 'PIT',
  StartOfDayQty = 'SOD',
  IntegralSplit = 'SPL',
  TransactionFromAssignment = 'TA',
  TotalTransactionQty = 'TOT',
  TransactionQuantity = 'TQ',
  TransferTradeQty = 'TRF',
  TransactionFromExercise = 'TX',
  CrossMarginQty = 'XM',
  ReceiveQuantity = 'RCV',
  CorporateActionAdjustment = 'CAA',
  DeliveryNoticeQty = 'DN',
  ExchangeForPhysicalQty = 'EP',
  PrivatelyNegotiatedTradeQty = 'PNTN',
  NetDeltaQty = 'DLT',
  CreditEventAdjustment = 'CEA',
  SuccessionEventAdjustment = 'SEA',
  NetQty = 'NET',
  GrossQty = 'GRS',
  IntradayQty = 'ITD',
  GrossLongNonDeltaAdjustedSwaptionPosition = 'NDAS',
  LongDeltaAdjustedPairedSwaptionPosition = 'DAS',
  ExpiringQuantity = 'EXP',
  QuantityNotExercised = 'UNEX',
  RequestedExerciseQuantity = 'REQ',
  CashFuturesEquivalentQuantity = 'CFE',
  LoanOrBorrowedQuantity = 'SECLN'
}

export enum PosQtyStatus {
  Submitted = 0,
  Accepted = 1,
  Rejected = 2
}

export enum PosAmtType {
  CashAmount = 'CASH',
  CashResidualAmount = 'CRES',
  FinalMarkToMarketAmount = 'FMTM',
  IncrementalMarkToMarketAmount = 'IMTM',
  PremiumAmount = 'PREM',
  StartOfDayMarkToMarketAmount = 'SMTM',
  TradeVariationAmount = 'TVAR',
  ValueAdjustedAmount = 'VADJ',
  SettlementValue = 'SETL',
  InitialTradeCouponAmount = 'ICPN',
  AccruedCouponAmount = 'ACPN',
  CouponAmount = 'CPN',
  IncrementalAccruedCoupon = 'IACPN',
  CollateralizedMarkToMarket = 'CMTM',
  IncrementalCollateralizedMarkToMarket = 'ICMTM',
  CompensationAmount = 'DLV',
  TotalBankedAmount = 'BANK',
  TotalCollateralizedAmount = 'COLAT',
  LongPairedSwapNotionalValue = 'LSNV',
  ShortPairedSwapNotionalValue = 'SSNV',
  StartOfDayAccruedCoupon = 'SACPN',
  NetPresentValue = 'NPV',
  StartOfDayNetPresentValue = 'SNPV',
  NetCashFlow = 'NCF',
  PresentValueOfFees = 'PVFEES',
  PresentValueOneBasisPoints = 'PV01',
  FiveYearEquivalentNotional = '5YREN',
  UndiscountedMarkToMarket = 'UMTM',
  MarkToModel = 'MTD',
  MarkToMarketVariance = 'VMTM',
  MarkToModelVariance = 'VMTD',
  UpfrontPayment = 'UPFRNT',
  EndVale = 'ENDV',
  OutstandingMarginLoan = 'MGNLN',
  LoanValue = 'LNVL'
}

export enum PosTransType {
  Exercise = 1,
  DoNotExercise = 2,
  PositionAdjustment = 3,
  PositionChangeSubmission = 4,
  Pledge = 5,
  LargeTraderSubmission = 6,
  LargePositionsReportingSubmission = 7,
  LongHoldings = 8,
  InternalTransfer = 9,
  TransferOfFirm = 10,
  ExternalTransfer = 11,
  CorporateAction = 12,
  Notification = 13,
  PositionCreation = 14,
  Closeout = 15,
  Reopen = 16
}

export enum PosMaintAction {
  New = 1,
  Replace = 2,
  Cancel = 3,
  Reverse = 4
}

export enum SettlSessID {
  Intraday = 'ITD',
  RegularTradingHours = 'RTH',
  ElectronicTradingHours = 'ETH',
  EndOfDay = 'EOD'
}

export enum AdjustmentType {
  ProcessRequestAsMarginDisposition = 0,
  DeltaPlus = 1,
  DeltaMinus = 2,
  Final = 3,
  CustomerSpecificPosition = 4
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
  Assignments = 3,
  SettlementActivity = 4,
  BackoutMessage = 5,
  DeltaPositions = 6,
  NetPosition = 7,
  LargePositionsReporting = 8,
  ExercisePositionReportingSubmission = 9,
  PositionLimitReportingSubmissing = 10
}

export enum ResponseTransportType {
  Inband = 0,
  OutOfBand = 1
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
  ProRata = 'P',
  Random = 'R'
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
  TradeRequestTypeNotSupported = 8,
  NotAuthorized = 9,
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
  PriceExceedsCurrentPriceBand = 5,
  ReferencePriceNotAvailable = 6,
  NotionalValueExceedsThreshold = 7,
  Other = 99
}

export enum SideMultiLegReportingType {
  SingleSecurity = 1,
  IndividualLegOfAMultilegSecurity = 2,
  MultilegSecurity = 3
}

export enum TrdRegTimestampType {
  ExecutionTime = 1,
  TimeIn = 2,
  TimeOut = 3,
  BrokerReceipt = 4,
  BrokerExecution = 5,
  DeskReceipt = 6,
  SubmissionToClearing = 7,
  TimePriority = 8,
  OrderbookEntryTime = 9,
  OrderSubmissionTime = 10,
  PubliclyReported = 11,
  PublicReportUpdated = 12,
  NonPubliclyReported = 13,
  NonPublicReportUpdated = 14,
  SubmittedForConfirmation = 15,
  UpdatedForConfirmation = 16,
  Confirmed = 17,
  UpdatedForClearing = 18,
  Cleared = 19,
  AllocationsSubmitted = 20,
  AllocationsUpdated = 21,
  AllocationsCompleted = 22,
  SubmittedToRepository = 23,
  PostTrdContntnEvnt = 24,
  PostTradeValuation = 25,
  PreviousTimePriority = 26,
  IdentifierAssigned = 27,
  PreviousIdentifierAssigned = 28,
  OrderCancellationTime = 29,
  OrderModificationTime = 30,
  OrderRoutingTime = 31,
  TradeCancellationTime = 32,
  TradeModificationTime = 33,
  ReferenceTimeForNbbo = 34
}

export enum ConfirmType {
  Status = 1,
  Confirmation = 2,
  ConfirmationRequestRejected = 3
}

export enum ConfirmRejReason {
  MismatchedAccount = 1,
  MissingSettlementInstructions = 2,
  UnknownOrMissingIndividualAllocId = 3,
  TransactionNotRecognized = 4,
  DuplicateTransaction = 5,
  IncorrectOrMissingInstrument = 6,
  IncorrectOrMissingPrice = 7,
  IncorrectOrMissingCommission = 8,
  IncorrectOrMissingSettlDate = 9,
  IncorrectOrMissingFundIdOrFundName = 10,
  IncorrectOrMissingQuantity = 11,
  IncorrectOrMissingFees = 12,
  IncorrectOrMissingTax = 13,
  IncorrectOrMissingParty = 14,
  IncorrectOrMissingSide = 15,
  IncorrectOrMissingNetMoney = 16,
  IncorrectOrMissingTradeDate = 17,
  IncorrectOrMissingSettlCcyInstructions = 18,
  IncorrectOrMissingCapacity = 19,
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
  SsidbiDsProvided = 3,
  PhoneForInstructions = 4
}

export enum DlvyInstType {
  Cash = 'C',
  Securities = 'S'
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
  PreliminaryRequestToIntermediary = 2,
  SellsideCalculatedUsingPreliminary = 3,
  SellsideCalculatedWithoutPreliminary = 4,
  WarehouseRecap = 5,
  RequestToIntermediary = 8,
  Accept = 9,
  Reject = 10,
  AcceptPending = 11,
  Complete = 12,
  ReversePending = 14,
  Giveup = 15,
  Takeup = 16,
  Reversal = 17,
  Alleged = 18,
  SubAllocationGiveup = 19
}

export enum AllocCancReplaceReason {
  OriginalDetailsIncomplete = 1,
  ChangeInUnderlyingOrderDetails = 2,
  CancelledByGiveupFirm = 3,
  Other = 99
}

export enum AllocAccountType {
  CarriedCustomerSide = 1,
  CarriedNonCustomerSide = 2,
  HouseTrader = 3,
  FloorTrader = 4,
  CarriedNonCustomerSideCrossMargined = 6,
  HouseTraderCrossMargined = 7,
  JointBackOfficeAccount = 8
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
  RegisteredAddressForConfirmation = 12,
  RegulatoryStatus = 13,
  RegistrationName = 14,
  CashAccountNumber = 15,
  Bic = 16,
  CsdParticipantMemberCode = 17,
  RegisteredAddress = 18,
  FundAccountName = 19,
  TelexNumber = 20,
  FaxNumber = 21,
  SecuritiesAccountName = 22,
  CashAccountName = 23,
  Department = 24,
  LocationDesk = 25,
  PositionAccountType = 26,
  SecurityLocateId = 27,
  MarketMaker = 28,
  EligibleCounterparty = 29,
  ProfessionalClient = 30,
  Location = 31,
  ExecutionVenue = 32,
  CurrencyDeliveryIdentifier = 33,
  AddressCity = 34,
  AddressStateOrProvince = 35,
  AddressPostalCode = 36,
  AddressStreet = 37,
  AddressIsoCountryCode = 38,
  IsoCountryCode = 39,
  MarketSegment = 40,
  CustomerAccountType = 41,
  OmnibusAccount = 42,
  FundsSegregationType = 43,
  GuaranteeFund = 44,
  SwapDealer = 45,
  MajorParticipant = 46,
  FinancialEntity = 47,
  UsPerson = 48,
  ReportingEntityIndicator = 49,
  ElectedClearingRequirementException = 50,
  BusinessCenter = 51,
  ReferenceText = 52,
  ShortMarkingExemptAccount = 53,
  ParentFirmIdentifier = 54,
  ParentFirmName = 55,
  DealIdentifier = 56,
  SystemTradeId = 57,
  SystemTradeSubId = 58,
  FcmCode = 59,
  DlvryTrmlCode = 60,
  VolntyRptEntity = 61,
  RptObligJursdctn = 62,
  VolntyRptJursdctn = 63,
  CompanyActivities = 64,
  EeAreaDomiciled = 65,
  ContractLinked = 66,
  ContractAbove = 67,
  VolntyRptPty = 68,
  EndUser = 69,
  LocationOrJurisdiction = 70,
  DerivativesDealer = 71,
  Domicile = 72,
  ExemptFromRecognition = 73,
  Payer = 74,
  Receiver = 75,
  SystematicInternaliser = 76,
  PublishingEntityIndicator = 77,
  FirstName = 78,
  Surname = 79,
  DateOfBirth = 80,
  OrderTransmittingFirm = 81,
  OrderTransmittingFirmBuyer = 82,
  OrderTransmitterSeller = 83,
  LegalEntityIdentifier = 84,
  SubSectorClassification = 85,
  PartySide = 86,
  LegalRegistrationCountry = 87
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
  Trade = 1,
  LastTrade = 2,
  NotionalValueAveragePxGroupTrade = 3,
  AveragePricedTrade = 4
}

export enum TradeAllocIndicator {
  AllocationNotRequired = 0,
  AllocationRequired = 1,
  UseAllocationProvidedWithTheTrade = 2,
  AllocationGiveUpExecutor = 3,
  AllocationFromExecutor = 4,
  AllocationToClaimAccount = 5,
  TradeSplit = 6
}

export enum ExpirationCycle {
  ExpireOnTradingSessionClose = 0,
  ExpireOnTradingSessionOpen = 1,
  SpecifiedExpiration = 2
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
  AfterHoursTrade = 10,
  ExchangeForRisk = 11,
  ExchangeForSwap = 12,
  ExchangeOfFuturesFor = 13,
  ExchangeOfOptionsForOptions = 14,
  TradingAtSettlement = 15,
  AllOrNone = 16,
  FuturesLargeOrderExecution = 17,
  ExchangeOfFuturesForFutures = 18,
  OptionInterimTrade = 19,
  OptionCabinetTrade = 20,
  PrivatelyNegotiatedTrades = 22,
  SubstitutionOfFuturesForForwards = 23,
  ErrorTrade = 24,
  SpecialCumDividend = 25,
  SpecialExDividend = 26,
  SpecialCumCoupon = 27,
  SpecialExCoupon = 28,
  CashSettlement = 29,
  SpecialPrice = 30,
  GuaranteedDelivery = 31,
  SpecialCumRights = 32,
  SpecialExRights = 33,
  SpecialCumCapitalRepayments = 34,
  SpecialExCapitalRepayments = 35,
  SpecialCumBonus = 36,
  SpecialExBonus = 37,
  LargeTrade = 38,
  WorkedPrincipalTrade = 39,
  BlockTrades = 40,
  NameChange = 41,
  PortfolioTransfer = 42,
  ProrogationBuy = 43,
  ProrogationSell = 44,
  OptionExercise = 45,
  DeltaNeutralTransaction = 46,
  FinancingTransaction = 47,
  NonStandardSettlement = 48,
  DerivativeRelatedTransaction = 49,
  PortfolioTrade = 50,
  VolumeWeightedAverageTrade = 51,
  ExchangeGrantedTrade = 52,
  RepurchaseAgreement = 53,
  Otc = 54,
  ExchangeBasisFacility = 55,
  OpeningTrade = 56,
  NettedTrade = 57,
  BlockSwapTrade = 58,
  CreditEventTrade = 59,
  SuccessionEventTrade = 60,
  GiveUpGiveInTrade = 61,
  DarkTrade = 62,
  TechnicalTrade = 63,
  Benchmark = 64,
  PackageTrade = 65,
  RollTrade = 66
}

export enum TrdSubType {
  Cmta = 0,
  InternalTransferOrAdjustment = 1,
  ExternalTransferOrTransferOfAccount = 2,
  RejectForSubmittingSide = 3,
  AdvisoryForContraSide = 4,
  OffsetDueToAnAllocation = 5,
  OnsetDueToAnAllocation = 6,
  DifferentialSpread = 7,
  ImpliedSpreadLegExecutedAgainstAnOutright = 8,
  TransactionFromExercise = 9,
  TransactionFromAssignment = 10,
  Acats = 11,
  Ai = 14,
  B = 15,
  K = 16,
  Lc = 17,
  M = 18,
  N = 19,
  Nm = 20,
  Nr = 21,
  P = 22,
  Pa = 23,
  Pc = 24,
  Pn = 25,
  R = 26,
  Ro = 27,
  Rt = 28,
  Sw = 29,
  T = 30,
  Wn = 31,
  Wt = 32,
  OffHoursTrade = 33,
  OnHoursTrade = 34,
  OtcQuote = 35,
  ConvertedSwap = 36,
  CrossedTrade = 37,
  InterimProtectedTrade = 38,
  LargeInScale = 39,
  WashTrade = 40,
  TradeAtSettlement = 41,
  AuctionTrade = 42,
  TradeAtMarker = 43,
  CreditDefault = 44,
  CreditRestructuring = 45,
  Merger = 46,
  SpinOff = 47,
  MultilateralCompression = 48,
  Balancing = 50,
  BasisTradeIndexClose = 51,
  TradeAtCashOpen = 52,
  TrdSubmitVenueClrSettl = 53,
  BilateralCompression = 54
}

export enum PegMoveType {
  Floating = 0,
  Fixed = 1
}

export enum PegOffsetType {
  Price = 0,
  BasisPoints = 1,
  Ticks = 2,
  PriceTier = 3,
  Percentage = 4
}

export enum PegLimitType {
  OrBetter = 0,
  Strict = 1,
  OrWorse = 2
}

export enum PegRoundDirection {
  MoreAggressive = 1,
  MorePassive = 2
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
  Strict = 1,
  OrWorse = 2
}

export enum DiscretionRoundDirection {
  MoreAggressive = 1,
  MorePassive = 2
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
  NeitherAddedNorRemovedLiquidity = 0,
  AddedLiquidity = 1,
  RemovedLiquidity = 2,
  LiquidityRoutedOut = 3,
  Auction = 4,
  TriggeredStopOrder = 5,
  TriggeredContingencyOrder = 6,
  TriggeredMarketOrder = 7,
  RemovedLiquidityAfterFirmOrderCommitment = 8,
  AuctionExecutionAfterFirmOrderCommitment = 9,
  Unknown = 10,
  Other = 11
}

export enum PublishTrdIndicator {
  No = 'N',
  Yes = 'Y'
}

export enum ShortSaleReason {
  DealerSoldShort = 0,
  DealerSoldShortExempt = 1,
  SellingCustomerSoldShort = 2,
  SellingCustomerSoldShortExempt = 3,
  QualifiedServiceRepresentative = 4,
  QsrOrAguContraSideSoldShortExempt = 5
}

export enum QtyType {
  Units = 0,
  Contracts = 1,
  UnitsOfMeasurePerTimeUnit = 2
}

export enum TradeReportType {
  Submit = 0,
  Alleged = 1,
  Accept = 2,
  Decline = 3,
  Addendum = 4,
  No = 5,
  TradeReportCancel = 6,
  LockedIn = 7,
  Defaulted = 8,
  InvalidCmta = 9,
  Pended = 10,
  AllegedNew = 11,
  AllegedAddendum = 12,
  AllegedNo = 13,
  AllegedTradeReportCancel = 14,
  AllegedTradeBreak = 15,
  Verify = 16,
  Dispute = 17,
  NonMaterialUpdate = 18
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
  Activation = 5,
  Inactiviation = 6,
  LastEligibleTradeDate = 7,
  SwapStartDate = 8,
  SwapEndDate = 9,
  SwapRollDate = 10,
  SwapNextStartDate = 11,
  SwapNextRollDate = 12,
  FirstDeliveryDate = 13,
  LastDeliveryDate = 14,
  InitialInventoryDueDate = 15,
  FinalInventoryDueDate = 16,
  FirstIntentDate = 17,
  LastIntentDate = 18,
  PositionRemovalDate = 19,
  MinimumNotice = 20,
  DeliveryStartTime = 21,
  DeliveryEndTime = 22,
  FirstNoticeDate = 23,
  LastNoticeDate = 24,
  FirstExerciseDate = 25,
  RedemptionDate = 26,
  TrdCntntnEfctvDt = 27,
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
  When = 9,
  OriginalIssueDiscount = 10,
  Callable = 11,
  EscrowedToMaturity = 12,
  EscrowedToRedemptionDate = 13,
  PreRefunded = 14,
  InDefault = 15,
  Unrated = 16,
  Taxable = 17,
  Indexed = 18,
  SubjectToAlternativeMinimumTax = 19,
  OriginalIssueDiscountPrice = 20,
  CallableBelowMaturityValue = 21,
  CallableWithoutNotice = 22,
  PriceTickRulesForSecurity = 23,
  TradeTypeEligibilityDetailsForSecurity = 24,
  InstrumentDenominator = 25,
  InstrumentNumerator = 26,
  InstrumentPricePrecision = 27,
  InstrumentStrikePrice = 28,
  TradeableIndicator = 29,
  InstrumentEligibleAnonOrders = 30,
  MinGuaranteedFillVolume = 31,
  MinGuaranteedFillStatus = 32,
  TradeAtSettlementEligibility = 33,
  TestInstrument = 34,
  DummyInstrument = 35,
  NegativeSettlementPriceEligibility = 36,
  NegativeStrikePriceEligibility = 37,
  UsStdContractInd = 38,
  AdmittedToTradingOnTradingVenue = 39,
  AverageDailyNotionalAmount = 40,
  AverageDailyNumberTrades = 41,
  Text = 99
}

export enum CPProgram {
  Program3A3 = 1,
  Program42 = 2,
  Program3A2 = 3,
  Program3A3And3C7 = 4,
  Program3A4 = 5,
  Program3A5 = 6,
  Program3A7 = 7,
  Program3C7 = 8,
  Other = 99
}

export enum MiscFeeBasis {
  Absolute = 0,
  PerUnit = 1,
  Percentage = 2
}

export enum LastFragment {
  No = 'N',
  Yes = 'Y'
}

export enum CollAsgnReason {
  Initial = 0,
  Scheduled = 1,
  TimeWarning = 2,
  MarginDeficiency = 3,
  MarginExcess = 4,
  ForwardCollateralDemand = 5,
  EventOfDefault = 6,
  AdverseTaxEvent = 7,
  TransferDeposit = 8,
  TransferWithdrawal = 9,
  Pledge = 10
}

export enum CollInquiryQualifier {
  TradeDate = 0,
  GcInstrument = 1,
  CollateralInstrument = 2,
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
  Rejected = 3,
  TransactionPending = 4,
  TransactionCompletedWithWarning = 5
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
  Challenged = 4,
  Reused = 5
}

export enum LastRptRequested {
  No = 'N',
  Yes = 'Y'
}

export enum DeliveryType {
  VersusPayment = 0,
  Free = 1,
  TriParty = 2,
  HoldInCustody = 3,
  DeliverByValue = 4
}

export enum UserRequestType {
  LogOnUser = 1,
  LogOffUser = 2,
  ChangePasswordForUser = 3,
  RequestIndividualUserStatus = 4,
  RequestThrottleLimit = 5
}

export enum UserStatus {
  LoggedIn = 1,
  NotLoggedIn = 2,
  UserNotRecognised = 3,
  PasswordIncorrect = 4,
  PasswordChanged = 5,
  Other = 6,
  ForcedUserLogoutByExchange = 7,
  SessionShutdownWarning = 8,
  ThrottleParametersChanged = 9
}

export enum StatusValue {
  Connected = 1,
  NotConnectedUnexpected = 2,
  NotConnectedExpected = 3,
  InProcess = 4
}

export enum NetworkRequestType {
  Snapshot = 1,
  Subscribe = 2,
  StopSubscribing = 4,
  LevelOfDetail = 8
}

export enum NetworkStatusResponseType {
  Full = 1,
  IncrementalUpdate = 2
}

export enum TrdRptStatus {
  Accepted = 0,
  Rejected = 1,
  Cancelled = 2,
  AcceptedWithErrors = 3,
  PendingNew = 4,
  PendingCancel = 5,
  PendingReplace = 6,
  Terminated = 7,
  PendingVerification = 8,
  DeemedVerified = 9,
  Verified = 10,
  Disputed = 11
}

export enum AffirmStatus {
  Received = 1,
  ConfirmRejected = 2,
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

export enum StrategyParameterType {
  Int = 1,
  Length = 2,
  NumInGroup = 3,
  SeqNum = 4,
  TagNum = 5,
  Float = 6,
  Qty = 7,
  Price = 8,
  PriceOffset = 9,
  Amt = 10,
  Percentage = 11,
  Char = 12,
  Boolean = 13,
  String = 14,
  MultipleCharValue = 15,
  Currency = 16,
  Exchange = 17,
  MonthYear = 18,
  UtcTimestamp = 19,
  UtcTimeOnly = 20,
  LocalMktDate = 21,
  UtcDateOnly = 22,
  Data = 23,
  MultipleStringValue = 24,
  Country = 25,
  Language = 26,
  TzTimeOnly = 27,
  TzTimestamp = 28,
  Tenor = 29
}

export enum SecurityStatus {
  Active = '1',
  Inactive = '2',
  ActiveClosingOrdersOnly = '3',
  Expired = '4',
  Delisted = '5',
  KnockedOut = '6',
  KnockOutRevoked = '7',
  PendingExpiry = '8',
  Suspended = '9',
  Published = '10',
  PendingDeletion = '11'
}

export enum UnderlyingCashType {
  Fixed = 'FIXED',
  Diff = 'DIFF'
}

export enum UnderlyingSettlementType {
  TPlus1 = 2,
  TPlus3 = 4,
  TPlus4 = 5
}

export enum SecurityUpdateAction {
  Add = 'A',
  Delete = 'D',
  Modify = 'M'
}

export enum ExpirationQtyType {
  AutoExercise = 1,
  NonAutoExercise = 2,
  FinalWillBeExercised = 3,
  ContraryIntention = 4,
  Difference = 5
}

export enum IndividualAllocType {
  SubAllocate = 1,
  ThirdPartyAllocation = 2
}

export enum UnitOfMeasure {
  BillionCubicFeet = 'Bcf',
  CubicMeters = 'CBM',
  Gigajoules = 'GJ',
  HeatRate = 'kHR',
  KilowattHours = 'kWh',
  MegaHeatRate = 'MHR',
  OneMillionBtu = 'MMBtu',
  MegawattHours = 'MWh',
  Therms = 'thm',
  TonsOfCarbonDioxide = 'tnCO2',
  MillionBarrels = 'MMbbl',
  Allowances = 'Alw',
  Barrels = 'Bbl',
  BoardFeet = 'BDFT',
  Bushels = 'Bu',
  Currency = 'Ccy',
  CoolingDegreeDay = 'CDD',
  CertifiedEmissionsReduction = 'CER',
  CriticalPrecipDay = 'CPD',
  ClimateReserveTonnes = 'CRT',
  Hundredweight = 'cwt',
  Day = 'day',
  DryMetricTons = 'dt',
  EnvAllwncCert = 'EnvAllwnc',
  EnvironmentalCredit = 'EnvCrd',
  EnvironmentalOffset = 'EnvOfst',
  Grams = 'g',
  Gallons = 'Gal',
  GrossTons = 'GT',
  HeatingDegreeDay = 'HDD',
  IndexPoint = 'IPNT',
  Kilograms = 'kg',
  Kiloliters = 'kL',
  KilowattYear = 'kW-a',
  KilowattDay = 'kW-d',
  KilowattHour = 'kW-h',
  KilowattMonth = 'kW-M',
  KilowattMinute = 'kW-min',
  Liters = 'L',
  Pounds = 'lbs',
  MegawattYear = 'MW-a',
  MegawattDay = 'MW-d',
  MegawattHour = 'MW-h',
  MegawattMonth = 'MW-M',
  MegawattMinute = 'MW-min',
  TroyOunces = 'oz_tr',
  PrincipalWithRelationToDebtInstrument = 'PRINC',
  MetricTons = 't',
  Tons = 'tn',
  Are = 'a',
  Acre = 'ac',
  Centiliter = 'cL',
  Centimeter = 'cM',
  DieselGallonEquivalent = 'DGE',
  Foot = 'ft',
  GbGallon = 'Gal_gb',
  GasolineGallonEquivalent = 'GGE',
  Hectare = 'ha',
  Inch = 'in',
  Kilometer = 'kM',
  Meter = 'M',
  Mile = 'mi',
  Milliliter = 'mL',
  Millimeter = 'mM',
  UsOunce = 'oz',
  Piece = 'pc',
  UsPint = 'pt',
  GbPint = 'pt_gb',
  UsQuart = 'qt',
  GbQuart = 'qt_gb',
  SquareCentimeter = 'SqcM',
  SquareFoot = 'Sqft',
  SquareInch = 'Sqin',
  SquareKilometer = 'SqkM',
  SquareMeter = 'SqM',
  SquareMile = 'Sqmi',
  SquareMillimeter = 'SqmM',
  SquareYard = 'Sqyd',
  Yard = 'yd',
  UsDollars = 'USD'
}

export enum TimeUnit {
  Hour = 'H',
  Minute = 'Min',
  Second = 'S',
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr',
  Quarter = 'Q'
}

export enum AllocMethod {
  Automatic = 1,
  Guarantor = 2,
  Manual = 3,
  BrokerAssigned = 4
}

export enum AsOfIndicator {
  False = '0',
  True = '1'
}

export enum MDBookType {
  TopOfBook = 1,
  PriceDepth = 2,
  OrderDepth = 3
}

export enum MDOriginType {
  Book = 0,
  OffBook = 1,
  Cross = 2,
  QuoteDrivenMarket = 3,
  DarkOrderBook = 4,
  AuctionDrivenMarket = 5,
  QuoteNegotiation = 6,
  VoiceNegotiation = 7,
  HybridMarket = 8
}

export enum CustOrderHandlingInst {
  PhoneSimple = 'A',
  PhoneComplex = 'B',
  FcmProvidedScreen = 'C',
  OtherProvidedScreen = 'D',
  ClientProvidedPlatformControlledByFcm = 'E',
  ClientProvidedPlatformDirectToExchange = 'F',
  AlgoEngine = 'H',
  PriceAtExecution = 'J',
  DeskElectronic = 'W',
  DeskPit = 'X',
  ClientElectronic = 'Y',
  ClientPit = 'Z',
  AddOnOrder = 'ADD',
  AllOrNone = 'AON',
  ConditionalOrder = 'CND',
  CashNotHeld = 'CNH',
  DeliveryInstructionsCash = 'CSH',
  DirectedOrder = 'DIR',
  DiscretionaryLimitOrder = 'DLO',
  ExchangeForPhysicalTransaction = 'E.W',
  FillOrKill = 'FOK',
  IntraDayCross = 'IDX',
  ImbalanceOnly = 'IO',
  ImmediateOrCancel = 'IOC',
  IntermarketSweepOrder = 'ISO',
  LimitOnOpen = 'LOO',
  LimitOnClose = 'LOC',
  MarketAtOpen = 'MAO',
  MarketAtClose = 'MAC',
  MarketOnOpen = 'MOO',
  MarketOnClose = 'MOC',
  MergerRelatedTransferPosition = 'MPT',
  MinimumQuantity = 'MQT',
  MarketToLimit = 'MTL',
  DeliveryInstructionsNextDay = 'ND',
  NotHeld = 'NH',
  OptionsRelatedTransaction = 'OPT',
  OverTheDay = 'OVD',
  Pegged = 'PEG',
  ReserveSizeOrder = 'RSV',
  StopStockTransaction = 'S.W',
  Scale = 'SCL',
  DeliveryInstructionsSellersOption = 'SLR',
  TimeOrder = 'TMO',
  TrailingStop = 'TS',
  Work = 'WRK',
  StayOnOfferside = 'F0',
  GoAlong = 'F3',
  ParticipateDoNotInitiate = 'F6',
  StrictScale = 'F7',
  TryToScale = 'F8',
  StayOnBidside = 'F9',
  NoCross = 'FA',
  OkToCross = 'FB',
  CallFirst = 'FC',
  PercentOfVolume = 'FD',
  ReinstateOnSystemFailure = 'FH',
  InstitutionOnly = 'FI',
  ReinstateOnTradingHalt = 'FJ',
  CancelOnTradingHalf = 'FK',
  LastPeg = 'FL',
  MidPricePeg = 'FM',
  NonNegotiable = 'FN',
  OpeningPeg = 'FO',
  MarketPeg = 'FP',
  CancelOnSystemFailure = 'FQ',
  PrimaryPeg = 'FR',
  Suspend = 'FS',
  FixedPegToLocalBbo = 'FT',
  PegToVwap = 'FW',
  TradeAlong = 'FX',
  TryToStop = 'FY',
  CancelIfNotBest = 'FZ',
  StrictLimit = 'Fb',
  IgnorePriceValidityChecks = 'Fc',
  PegToLimitPrice = 'Fd',
  WorkToTargetStrategy = 'Fe',
  GOrderAndFcmapIorFix = 'G'
}

export enum OrderHandlingInstSource {
  Finraoats = 1,
  FiaExecutionSourceCode = 2
}

export enum DeskType {
  Agency = 'A',
  Arbitrage = 'AR',
  BlockTrading = 'B',
  ConvertibleDesk = 'C',
  CentralRiskBooks = 'CR',
  Derivatives = 'D',
  EquityCapitalMarkets = 'EC',
  International = 'IN',
  Institutional = 'IS',
  Other = 'O',
  PreferredTrading = 'PF',
  Proprietary = 'PR',
  ProgramTrading = 'PT',
  Sales = 'S',
  Swaps = 'SW',
  TradingDeskSystem = 'T',
  Treasury = 'TR',
  FloorBroker = 'FB'
}

export enum DeskTypeSource {
  Finraoats = 1
}

export enum ExecAckStatus {
  Received = '0',
  Accepted = '1',
  DontKnow = '2'
}

export enum CollApplType {
  SpecificDeposit = 0,
  General = 1
}

export enum UnderlyingFXRateCalc {
  Divide = 'D',
  Multiply = 'M'
}

export enum AllocPositionEffect {
  Open = 'O',
  Close = 'C',
  Rolled = 'R',
  Fifo = 'F'
}

export enum DealingCapacity {
  Agent = 'A',
  Principal = 'P',
  RisklessPrincipal = 'R'
}

export enum InstrmtAssignmentMethod {
  ProRata = 'P',
  Random = 'R'
}

export enum AggressorIndicator {
  Yes = 'Y',
  No = 'N'
}

export enum MDQuoteType {
  Indicative = 0,
  Tradeable = 1,
  RestrictedTradeable = 2,
  Counter = 3,
  IndicativeAndTradeable = 4
}

export enum RefOrderIDSource {
  SecondaryOrderId = '0',
  OrderId = '1',
  MdEntryId = '2',
  QuoteEntryId = '3',
  OriginalOrderId = '4',
  QuoteId = '5',
  QuoteReqId = '6',
  PreviousOrderIdentifier = '7',
  PreviousQuoteIdentifier = '8',
  ParentOrderIdentifier = '9',
  ManualOrderIdentifier = 'A'
}

export enum DisplayWhen {
  Immediate = '1',
  Exhaust = '2'
}

export enum DisplayMethod {
  Initial = '1',
  New = '2',
  Random = '3',
  Undisclosed = '4'
}

export enum PriceProtectionScope {
  None = '0',
  Local = '1',
  National = '2',
  Global = '3'
}

export enum LotType {
  OddLot = '1',
  RoundLot = '2',
  BlockLot = '3',
  RoundLotBasedUpon = '4'
}

export enum PegPriceType {
  LastPeg = 1,
  MidPricePeg = 2,
  OpeningPeg = 3,
  MarketPeg = 4,
  PrimaryPeg = 5,
  PegToVwap = 7,
  TrailingStopPeg = 8,
  PegToLimitPrice = 9,
  ShortSaleMinPricePeg = 10
}

export enum TriggerType {
  PartialExecution = '1',
  SpecifiedTradingSession = '2',
  NextAuction = '3',
  PriceMovement = '4',
  OnOrderEntryOrModification = '5'
}

export enum TriggerAction {
  Activate = '1',
  Modify = '2',
  Cancel = '3'
}

export enum TriggerPriceType {
  BestOffer = '1',
  LastTrade = '2',
  BestBid = '3',
  BestBidOrLastTrade = '4',
  BestOfferOrLastTrade = '5',
  BestMid = '6'
}

export enum TriggerPriceTypeScope {
  None = '0',
  Local = '1',
  National = '2',
  Global = '3'
}

export enum TriggerPriceDirection {
  Up = 'U',
  Down = 'D'
}

export enum TriggerOrderType {
  Market = '1',
  Limit = '2'
}

export enum OrderCategory {
  Order = '1',
  Quote = '2',
  PrivatelyNegotiatedTrade = '3',
  MultilegOrder = '4',
  LinkedOrder = '5',
  QuoteRequest = '6',
  ImpliedOrder = '7',
  CrossOrder = '8',
  StreamingPrice = '9',
  InternalCrossOrder = 'A'
}

export enum TradeHandlingInstr {
  TradeConfirmation = '0',
  TwoPartyReport = '1',
  OnePartyReportForMatching = '2',
  OnePartyReportForPassThrough = '3',
  AutomatedFloorOrderRouting = '4',
  TwoPartyReportForClaim = '5',
  OnePartyReport = '6',
  ThirdPtyRptForPassThrough = '7',
  OnePartyReportAutoMatch = '8'
}

export enum ApplVerID {
  Fix27 = '0',
  Fix30 = '1',
  Fix40 = '2',
  Fix41 = '3',
  Fix42 = '4',
  Fix43 = '5',
  Fix44 = '6',
  Fix50 = '7',
  Fix50Sp1 = '8',
  Fix50Sp2 = '9',
  FixLatest = '10'
}

export enum ExDestinationIDSource {
  Bic = 'B',
  GeneralIdentifier = 'C',
  Proprietary = 'D',
  IsoCountryCode = 'E',
  Mic = 'G'
}

export enum ImpliedMarketIndicator {
  NotImplied = 0,
  ImpliedIn = 1,
  ImpliedOut = 2,
  BothImpliedInAndImpliedOut = 3
}

export enum SettlObligMode {
  Preliminary = 1,
  Final = 2
}

export enum SettlObligTransType {
  Cancel = 'C',
  New = 'N',
  Replace = 'R',
  Restate = 'T'
}

export enum SettlObligSource {
  InstructionsOfBroker = '1',
  InstructionsForInstitution = '2',
  Investor = '3',
  BuyersSettlementInstructions = '4',
  SellersSettlementInstructions = '5'
}

export enum QuoteEntryStatus {
  Accepted = 0,
  Rejected = 5,
  RemovedFromMarket = 6,
  Expired = 7,
  LockedMarketWarning = 12,
  CrossMarketWarning = 13,
  CanceledDueToLockMarket = 14,
  CanceledDueToCrossMarket = 15,
  Active = 16
}

export enum PrivateQuote {
  Yes = 'Y',
  No = 'N'
}

export enum RespondentType {
  AllMarketParticipants = 1,
  SpecifiedMarketParticipants = 2,
  AllMarketMakers = 3,
  PrimaryMarketMaker = 4
}

export enum SecurityTradingEvent {
  OrderImbalance = 1,
  TradingResumes = 2,
  PriceVolatilityInterruption = 3,
  ChangeOfTradingSession = 4,
  ChangeOfTradingSubsession = 5,
  ChangeOfSecurityTradingStatus = 6,
  ChangeOfBookType = 7,
  ChangeOfMarketDepth = 8,
  CorporateAction = 9
}

export enum StatsType {
  ExchangeLast = 1,
  High = 2,
  AveragePrice = 3,
  Turnover = 4
}

export enum MDSecSizeType {
  Customer = 1,
  CustomerProfessional = 2,
  DoNotTradeThrough = 3
}

export enum SettlMethod {
  CashSettlementRequired = 'C',
  PhysicalSettlementRequired = 'P',
  Election = 'E'
}

export enum ExerciseStyle {
  European = 0,
  American = 1,
  Bermuda = 2,
  Other = 99
}

export enum PriceQuoteMethod {
  Standard = 'STD',
  Index = 'INX',
  InterestRateIndex = 'INT',
  PercentOfPar = 'PCTPAR'
}

export enum ValuationMethod {
  PremiumStyle = 'EQTY',
  FuturesStyleMarkToMarket = 'FUT',
  FuturesStyleWithAnAttachedCashAdjustment = 'FUTDA',
  CdsStyleCollateralization = 'CDS',
  CdsInDeliveryUseRecoveryRateToCalculate = 'CDSD'
}

export enum ListMethod {
  PreListedOnly = 0,
  UserRequested = 1
}

export enum TickRuleType {
  RegularTrading = 0,
  VariableCabinet = 1,
  FixedCabinet = 2,
  TradedAsASpreadLeg = 3,
  SettledAsASpreadLeg = 4,
  TradedAsSpread = 5
}

export enum MaturityMonthYearIncrementUnits {
  Months = 0,
  Days = 1,
  Weeks = 2,
  Years = 3
}

export enum MaturityMonthYearFormat {
  YearMonthOnly = 0,
  YearMonthDay = 1,
  YearMonthWeek = 2
}

export enum PriceLimitType {
  Price = 0,
  Ticks = 1,
  Percentage = 2
}

export enum ListUpdateAction {
  Add = 'A',
  Delete = 'D',
  Modify = 'M',
  Snapshot = 'S'
}

export enum ApplReqType {
  Retransmission = 0,
  Subscription = 1,
  RequestLastSeqNum = 2,
  RequestApplications = 3,
  Unsubscribe = 4,
  CancelRetransmission = 5,
  CancelRetransmissionUnsubscribe = 6
}

export enum ApplResponseType {
  RequestSuccessfullyProcessed = 0,
  ApplicationDoesNotExist = 1,
  MessagesNotAvailable = 2
}

export enum ApplResponseError {
  ApplicationDoesNotExist = 0,
  MessagesRequestedAreNotAvailable = 1,
  UserNotAuthorizedForApplication = 2
}

export enum TradSesEvent {
  TradingResumes = 0,
  ChangeOfTradingSession = 1,
  ChangeOfTradingSubsession = 2,
  ChangeOfTradingStatus = 3
}

export enum MassActionType {
  SuspendOrders = 1,
  ReleaseOrdersFromSuspension = 2,
  CancelOrders = 3
}

export enum MassActionScope {
  AllOrdersForASecurity = 1,
  AllOrdersForAnUnderlyingSecurity = 2,
  AllOrdersForAProduct = 3,
  AllOrdersForAcfiCode = 4,
  AllOrdersForASecurityType = 5,
  AllOrdersForATradingSession = 6,
  AllOrders = 7,
  AllOrdersForAMarket = 8,
  AllOrdersForAMarketSegment = 9,
  AllOrdersForASecurityGroup = 10,
  CancelForSecurityIssuer = 11,
  CancelForIssuerOfUnderlyingSecurity = 12
}

export enum MassActionResponse {
  Rejected = 0,
  Accepted = 1,
  Completed = 2
}

export enum MassActionRejectReason {
  MassActionNotSupported = 0,
  InvalidOrUnknownSecurity = 1,
  InvalidOrUnknownUnderlyingSecurity = 2,
  InvalidOrUnknownProduct = 3,
  InvalidOrUnknownCfiCode = 4,
  InvalidOrUnknownSecurityType = 5,
  InvalidOrUnknownTradingSession = 6,
  InvalidOrUnknownMarket = 7,
  InvalidOrUnknownMarketSegment = 8,
  InvalidOrUnknownSecurityGroup = 9,
  InvalidOrUnknownSecurityIssuer = 10,
  InvalidOrUnknownIssuerOfUnderlyingSecurity = 11,
  Other = 99
}

export enum MultilegModel {
  PredefinedMultilegSecurity = 0,
  UserDefinedMultilegSecurity = 1,
  UserDefined = 2
}

export enum MultilegPriceMethod {
  NetPrice = 0,
  ReversedNetPrice = 1,
  YieldDifference = 2,
  Individual = 3,
  ContractWeightedAveragePrice = 4,
  MultipliedPrice = 5
}

export enum ContingencyType {
  OneCancelsTheOther = 1,
  OneTriggersTheOther = 2,
  OneUpdatesTheOtherAbsolute = 3,
  OneUpdatesTheOtherProportional = 4,
  BidAndOffer = 5,
  BidAndOfferOco = 6
}

export enum ListRejectReason {
  BrokerCredit = 0,
  ExchangeClosed = 2,
  TooLateToEnter = 4,
  UnknownOrder = 5,
  DuplicateOrder = 6,
  UnsupportedOrderCharacteristic = 11,
  Other = 99
}

export enum TradePublishIndicator {
  DoNotPublishTrade = 0,
  PublishTrade = 1,
  DeferredPublication = 2,
  Published = 3
}

export enum SessionStatus {
  SessionActive = 0,
  SessionPasswordChanged = 1,
  SessionPasswordDueToExpire = 2,
  NewSessionPasswordDoesNotComplyWithPolicy = 3,
  SessionLogoutComplete = 4,
  InvalidUsernameOrPassword = 5,
  AccountLocked = 6,
  LogonsAreNotAllowedAtThisTime = 7,
  PasswordExpired = 8,
  ReceivedMsgSeqNumTooLow = 9,
  ReceivedNextExpectedMsgSeqNumTooHigh = 10
}

export enum ApplReportType {
  ApplSeqNumReset = 0,
  LastMessageSent = 1,
  ApplicationAlive = 2,
  ResendComplete = 3
}

export enum OrderDelayUnit {
  Seconds = 0,
  TenthsOfASecond = 1,
  HundredthsOfASecond = 2,
  Milliseconds = 3,
  Microseconds = 4,
  Nanoseconds = 5,
  Minutes = 10,
  Hours = 11,
  Days = 12,
  Weeks = 13,
  Months = 14,
  Years = 15
}

export enum VenueType {
  Electronic = 'E',
  Pit = 'P',
  ExPit = 'X',
  ClearingHouse = 'C',
  RegisteredMarket = 'R',
  OffMarket = 'O',
  CentralLimitOrderBook = 'B',
  QuoteDrivenMarket = 'Q',
  DarkOrderBook = 'D',
  AuctionDrivenMarket = 'A',
  QuoteNegotiation = 'N',
  VoiceNegotiation = 'V',
  HybridMarket = 'H',
  OtherMarket = 'z'
}

export enum RefOrdIDReason {
  GtcFromPreviousDay = 0,
  PartialFillRemaining = 1,
  OrderChanged = 2
}

export enum OrigCustOrderCapacity {
  MemberTradingForTheirOwnAccount = 1,
  ClearingFirmTradingForItsProprietaryAccount = 2,
  MemberTradingForAnotherMember = 3,
  AllOther = 4
}

export enum ModelType {
  UtilityProvidedStandardModel = 0,
  ProprietaryModel = 1
}

export enum ContractMultiplierUnit {
  Shares = 0,
  Hours = 1,
  Days = 2
}

export enum FlowScheduleType {
  NercEasternOffPeak = 0,
  NercWesternOffPeak = 1,
  NercCalendarAllDaysInMonth = 2,
  NercEasternPeak = 3,
  NercWesternPeak = 4,
  AllTimes = 5,
  OnPeak = 6,
  OffPeak = 7,
  Base = 8,
  Block = 9,
  Other = 99
}

export enum RateSource {
  Bloomberg = 0,
  Reuters = 1,
  Telerate = 2,
  IsdaRateOption = 3,
  Other = 99
}

export enum RateSourceType {
  Primary = 0,
  Secondary = 1
}

export enum RestructuringType {
  FullRestructuring = 'FR',
  ModifiedRestructuring = 'MR',
  ModifiedModRestructuring = 'MM',
  NoRestructuringSpecified = 'XR'
}

export enum Seniority {
  SeniorSecured = 'SD',
  Senior = 'SR',
  Subordinated = 'SB',
  Junior = 'JR',
  Mezzanine = 'MZ',
  SeniorNonPreferred = 'SN'
}

export enum SecurityListType {
  IndustryClassification = 1,
  TradingList = 2,
  Market = 3,
  NewspaperList = 4
}

export enum SecurityListTypeSource {
  Icb = 1,
  Naics = 2,
  Gics = 3
}

export enum NewsCategory {
  CompanyNews = 0,
  MarketplaceNews = 1,
  FinancialMarketNews = 2,
  TechnicalNews = 3,
  OtherNews = 99
}

export enum NewsRefType {
  Replacement = 0,
  OtherLanguage = 1,
  Complimentary = 2,
  Withdrawal = 3
}

export enum StrikePriceDeterminationMethod {
  FixedStrike = 1,
  StrikeSetAtExpiration = 2,
  StrikeSetToAverageAcrossLife = 3,
  StrikeSetToOptimalValue = 4
}

export enum StrikePriceBoundaryMethod {
  LessThan = 1,
  LessThanOrEqual = 2,
  Equal = 3,
  GreaterThanOrEqual = 4,
  GreaterThan = 5
}

export enum UnderlyingPriceDeterminationMethod {
  Regular = 1,
  SpecialReference = 2,
  OptimalValue = 3,
  AverageValue = 4
}

export enum OptPayoutType {
  Vanilla = 1,
  Capped = 2,
  Binary = 3,
  Asian = 4,
  Barrier = 5,
  DigitalBarrier = 6,
  Lookback = 7,
  OtherPathDependent = 8,
  Other = 99
}

export enum ComplexEventType {
  Capped = 1,
  Trigger = 2,
  KnockInUp = 3,
  KnockInDown = 4,
  KnockOutUp = 5,
  KnockOutDown = 6,
  Underlying = 7,
  ResetBarrier = 8,
  RollingBarrier = 9,
  OneTouch = 10,
  NoTouch = 11,
  DblOneTouch = 12,
  DblNoTouch = 13,
  FxComposite = 14,
  FxQuanto = 15,
  FxCrssCcy = 16,
  StrkSpread = 17,
  ClndrSpread = 18,
  PxObsvtn = 19,
  PassThrough = 20,
  StrkSched = 21,
  EquityValuation = 22,
  DividendValuation = 23
}

export enum ComplexEventPriceBoundaryMethod {
  LessThanComplexEventPrice = 1,
  LessThanOrEqualToComplexEventPrice = 2,
  EqualToComplexEventPrice = 3,
  GreaterThanOrEqualToComplexEventPrice = 4,
  GreaterThanComplexEventPrice = 5
}

export enum ComplexEventPriceTimeType {
  Expiration = 1,
  Immediate = 2,
  SpecifiedDate = 3,
  Close = 4,
  Open = 5,
  OfficialSettlPrice = 6,
  DerivativesClose = 7,
  AsSpecifiedMasterConfirmation = 8
}

export enum ComplexEventCondition {
  And = 1,
  Or = 2
}

export enum StreamAsgnReqType {
  StreamAssignmentForNewCustomer = 1,
  StreamAssignmentForExistingCustomer = 2
}

export enum StreamAsgnRejReason {
  UnknownClient = 0,
  ExceedsMaximumSize = 1,
  UnknownOrInvalidCurrencyPair = 2,
  NoAvailableStream = 3,
  Other = 99
}

export enum StreamAsgnAckType {
  AssignmentAccepted = 0,
  AssignmentRejected = 1
}

export enum RequestResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoDataFound = 2,
  NotAuthorized = 3,
  DataTemporarilyUnavailable = 4,
  RequestForDataNotSupported = 5,
  Other = 99
}

export enum PartyRelationship {
  IsAlso = 0,
  ClearsFor = 1,
  ClearsThrough = 2,
  TradesFor = 3,
  TradesThrough = 4,
  Sponsors = 5,
  SponsoredThrough = 6,
  ProvidesGuaranteeFor = 7,
  IsGuaranteedBy = 8,
  MemberOf = 9,
  HasMembers = 10,
  ProvidesMarketplaceFor = 11,
  ParticipantOfMarketplace = 12,
  CarriesPositionsFor = 13,
  PostsTradesTo = 14,
  EntersTradesFor = 15,
  EntersTradesThrough = 16,
  ProvidesQuotesTo = 17,
  RequestsQuotesFrom = 18,
  InvestsFor = 19,
  InvestsThrough = 20,
  BrokersTradesFor = 21,
  BrokersTradesThrough = 22,
  ProvidesTradingServicesFor = 23,
  UsesTradingServicesOf = 24,
  ApprovesOf = 25,
  ApprovedBy = 26,
  ParentFirmFor = 27,
  SubsidiaryOf = 28,
  RegulatoryOwnerOf = 29,
  OwnedByRegulatory = 30,
  Controls = 31,
  IsControlledBy = 32,
  LegalOwnerOf = 33,
  OwnedByLegal = 34,
  BeneficialOwnerOf = 35,
  OwnedByBeneficial = 36,
  SettlesFor = 37,
  SettlesThrough = 38
}

export enum TrdAckStatus {
  Accepted = 0,
  Rejected = 1,
  Received = 2
}

export enum RiskLimitType {
  CreditLimit = 0,
  GrossLimit = 1,
  NetLimit = 2,
  Exposure = 3,
  LongLimit = 4,
  ShortLimit = 5,
  CashMargin = 6,
  AdditionalMargin = 7,
  TotalMargin = 8,
  LimitConsumed = 9,
  ClipSize = 10,
  MaxNotionalOrderSize = 11,
  Dv01Pv01Limit = 12,
  Cs01Limit = 13,
  VolumeLimitPerTimePeriod = 14,
  VolFilledPctOrdVolTmPeriod = 15,
  NotlFilledPctNotlTmPeriod = 16,
  TransactionExecutionLimitPerTimePeriod = 17
}

export enum InstrumentScopeOperator {
  Include = 1,
  Exclude = 2
}

export enum SwapSubClass {
  Amortizing = 'AMTZ',
  Compounding = 'COMP',
  ConstantNotionalSchedule = 'CNST',
  AccretingNotionalSchedule = 'ACRT',
  CustomNotionalSchedule = 'CUST'
}

export enum SecurityClassificationReason {
  Fee = 0,
  CreditControls = 1,
  Margin = 2,
  EntitlementOrEligibility = 3,
  MarketData = 4,
  AccountSelection = 5,
  DeliveryProcess = 6,
  Sector = 7
}

export enum PosAmtReason {
  OptionsSettlement = 0,
  PendingErosionAdjustment = 1,
  FinalErosionAdjustment = 2,
  TearUpCouponAmount = 3,
  PriceAlignmentInterest = 4,
  DeliveryInvoiceCharges = 5,
  DeliveryStorageCharges = 6
}

export enum SideClearingTradePriceType {
  TradeClearingAtExecutionPrice = 0,
  TradeClearingAtAlternateClearingPrice = 1
}

export enum SecurityRejectReason {
  InvalidInstrumentRequested = 1,
  InstrumentAlreadyExists = 2,
  RequestTypeNotSupported = 3,
  SystemUnavailableForInstrumentCreation = 4,
  IneligibleInstrumentGroup = 5,
  InstrumentIdUnavailable = 6,
  InvalidOrMissingDataOnOptionLeg = 7,
  InvalidOrMissingDataOnFutureLeg = 8,
  InvalidOrMissingDataOnFxLeg = 10,
  InvalidLegPriceSpecified = 11,
  InvalidInstrumentStructureSpecified = 12
}

export enum ThrottleStatus {
  ThrottleLimitNotExceededNotQueued = 0,
  QueuedDueToThrottleLimitExceeded = 1
}

export enum ThrottleAction {
  QueueInbound = 0,
  QueueOutbound = 1,
  Reject = 2,
  Disconnect = 3,
  Warning = 4
}

export enum ThrottleType {
  InboundRate = 0,
  OutstandingRequests = 1
}

export enum StreamAsgnType {
  Assignment = 1,
  Rejected = 2,
  Terminate = 3
}

export enum MatchInst {
  Match = 1,
  DoNotMatch = 2
}

export enum TriggerScope {
  ThisOrder = 0,
  OtherOrder = 1,
  AllOtherOrdersForGivenSecurity = 2,
  AllOtherOrdersForGivenSecurityAndPrice = 3,
  AllOtherOrdersForGivenSecurityAndSide = 4,
  AllOtherOrdersForGivenSecurityPriceAndSide = 5
}

export enum LimitAmtType {
  CreditLimit = 0,
  GrossPositionLimit = 1,
  NetPositionLimit = 2,
  RiskExposureLimit = 3,
  LongPositionLimit = 4,
  ShortPositionLimit = 5
}

export enum MarginReqmtInqQualifier {
  Summary = 0,
  Detail = 1,
  ExcessDeficit = 2,
  NetPosition = 3
}

export enum MarginReqmtRptType {
  Summary = 0,
  Detail = 1,
  ExcessDeficit = 2
}

export enum MarginReqmtInqResult {
  Successful = 0,
  InvalidOrUnknownInstrument = 1,
  InvalidOrUnknownMarginClass = 2,
  InvalidParties = 3,
  InvalidTransportTypeReq = 4,
  InvalidDestinationReq = 5,
  NoMarginReqFound = 6,
  MarginReqInquiryQualifierNotSupported = 7,
  UnauthorizedForMarginReqInquiry = 8,
  Other = 99
}

export enum MarginAmtType {
  AdditionalMargin = 1,
  AdjustedMargin = 2,
  UnadjustedMargin = 3,
  BinaryAddOnAmount = 4,
  CashBalanceAmount = 5,
  ConcentrationMargin = 6,
  CoreMargin = 7,
  DeliveryMargin = 8,
  DiscretionaryMargin = 9,
  FuturesSpreadMargin = 10,
  InitialMargin = 11,
  LiquidatingMargin = 12,
  MarginCallAmount = 13,
  MarginDeficitAmount = 14,
  MarginExcessAmount = 15,
  OptionPremiumAmount = 16,
  PremiumMargin = 17,
  ReserveMargin = 18,
  SecurityCollateralAmount = 19,
  StressTestAddOnAmount = 20,
  SuperMargin = 21,
  TotalMargin = 22,
  VariationMargin = 23,
  SecondaryVariationMargin = 24,
  RolledUpMarginDeficit = 25,
  SpreadResponseMargin = 26,
  SystemicRiskMargin = 27,
  CurveRiskMargin = 28,
  IndexSpreadRiskMargin = 29,
  SectorRiskMargin = 30,
  JumpToDefaultRiskMargin = 31,
  BasisRiskMargin = 32,
  InterestRateRiskMargin = 33,
  JumpToHealthRiskMargin = 34,
  OtherRiskMargin = 35
}

export enum RelatedInstrumentType {
  HedgesForInstrument = 1,
  Underlier = 2,
  EquityEquivalent = 3,
  NearestExchangeTradedContract = 4,
  RetailEquivalent = 5,
  Leg = 6
}

export enum MarketMakerActivity {
  NoParticipation = 0,
  BuyParticipation = 1,
  SellParticipation = 2,
  BothBuyAndSellParticipation = 3
}

export enum PartyDetailStatus {
  Active = 0,
  Suspended = 1,
  Halted = 2
}

export enum PartyDetailRoleQualifier {
  Agency = 0,
  Principal = 1,
  RisklessPrincipal = 2,
  GeneralClearingMember = 3,
  IndividualClearingMember = 4,
  PreferredMarketMaker = 5,
  DirectedMarketMaker = 6,
  Bank = 7,
  Hub = 8,
  PrimaryTrdRepository = 9,
  OrigTrdRepository = 10,
  AddtnlIntlTrdRepository = 11,
  AddtnlDomesticTrdRepository = 12,
  RelatedExchange = 13,
  OptionsExchange = 14,
  SpecifiedExchange = 15,
  ConstituentExchange = 16,
  ExemptFromTradeReporting = 17,
  Current = 18,
  New = 19,
  DesignatedSponsor = 20,
  Specialist = 21,
  Algorithm = 22,
  FirmOrLegalEntity = 23,
  NaturalPerson = 24,
  RegularTrader = 25,
  HeadTrader = 26,
  Supervisor = 27,
  TriParty = 28,
  Lender = 29,
  ExchangeOrderSubmitter = 30
}

export enum ThrottleInst {
  RejectIfThrottleLimitExceeded = 0,
  QueueIfThrottleLimitExceeded = 1
}

export enum ThrottleCountIndicator {
  OutstandingRequestsUnchanged = 0,
  OutstandingRequestsDecreased = 1
}

export enum ShortSaleRestriction {
  NoRestrictions = 0,
  SecurityNotShortable = 1,
  SecurityNotShortableAtOrBelowBestBid = 2,
  SecurityNotShortableWithoutPreBorrow = 3
}

export enum ShortSaleExemptionReason {
  ExemptionReasonUnknown = 0,
  IncomingSse = 1,
  AboveNationalBestBid = 2,
  DelayedDelivery = 3,
  OddLot = 4,
  DomesticArbitrage = 5,
  InternationalArbitrage = 6,
  UnderwriterOrSyndicateDistribution = 7,
  RisklessPrincipal = 8,
  Vwap = 9
}

export enum OrderOrigination {
  OrderReceivedFromCustomer = 1,
  OrderReceivedFromWithinFirm = 2,
  OrderReceivedFromAnotherBrokerDealer = 3,
  OrderReceivedFromCustomerOrWithFirm = 4,
  OrderReceivedFromDirectAccessCustomer = 5,
  OrderReceivedFromForeignDealerEquivalent = 6,
  OrderReceivedFromExecutionOnlyService = 7
}

export enum AllocationRollupInstruction {
  Rollup = 0,
  DoNotRollUp = 1
}

export enum AllocReversalStatus {
  Completed = 0,
  Refused = 1,
  Cancelled = 2
}

export enum ObligationType {
  Bond = '0',
  ConvertBond = '1',
  Mortgage = '2',
  Loan = '3'
}

export enum TradePriceNegotiationMethod {
  PercentPar = 0,
  DealSpread = 1,
  UpfrontPnts = 2,
  UpfrontAmt = 3,
  ParUpfrontAmt = 4,
  SpreadUpfrontAmt = 5,
  UpfrontPntsAmt = 6
}

export enum UpfrontPriceType {
  Percentage = 1,
  FixedAmount = 3
}

export enum ApplLevelRecoveryIndicator {
  NoApplRecoveryNeeded = 0,
  ApplRecoveryNeeded = 1
}

export enum RiskLimitRequestType {
  Definitions = 1,
  Utilization = 2,
  DefinitionsAndUtilizations = 3
}

export enum RiskLimitRequestResult {
  Successful = 0,
  InvalidParty = 1,
  InvalidRelatedParty = 2,
  InvalidRiskLimitType = 3,
  InvalidRiskLimitId = 4,
  InvalidRiskLimitAmount = 5,
  InvalidRiskWarningLevelAction = 6,
  InvalidRiskInstrumentScope = 7,
  RiskLimitActionsNotSupported = 8,
  WarningLevelsNotSupported = 9,
  WarningLevelActionsNotSupported = 10,
  RiskInstrumentScopeNotSupported = 11,
  RiskLimitNotApprovedForParty = 12,
  RiskLimitAlreadyDefinedForParty = 13,
  InstrumentNotApprovedForParty = 14,
  NotAuthorized = 98,
  Other = 99
}

export enum RiskLimitAction {
  QueueInbound = 0,
  QueueOutbound = 1,
  Reject = 2,
  Disconnect = 3,
  Warning = 4,
  PingCreditCheckWithRevalidation = 5,
  PingCreditCheckNoRevalidation = 6,
  PushCreditCheckWithRevalidation = 7,
  PushCreditCheckNoRevalidation = 8,
  Suspend = 9,
  HaltTrading = 10
}

export enum EntitlementType {
  Trade = 0,
  MakeMarkets = 1,
  HoldPositions = 2,
  PerformGiveUps = 3,
  SubmitIoIs = 4,
  SubscribeMarketData = 5,
  ShortWithPreBorrow = 6,
  SubmitQuoteRequests = 7,
  RespondToQuoteRequests = 8
}

export enum EntitlementAttribDatatype {
  Int = 1,
  Length = 2,
  NumInGroup = 3,
  SeqNum = 4,
  TagNum = 5,
  Float = 6,
  Qty = 7,
  Price = 8,
  PriceOffset = 9,
  Amt = 10,
  Percentage = 11,
  Char = 12,
  Boolean = 13,
  String = 14,
  MultipleCharValue = 15,
  Currency = 16,
  Exchange = 17,
  MonthYear = 18,
  UtcTimestamp = 19,
  UtcTimeOnly = 20,
  LocalMktDate = 21,
  UtcDateOnly = 22,
  Data = 23,
  MultipleStringValue = 24,
  Country = 25,
  Language = 26,
  TzTimeOnly = 27,
  TzTimestamp = 28,
  Tenor = 29,
  DayOfMonth = 30,
  XmlData = 31,
  Pattern = 32,
  Reserved100Plus = 33,
  Reserved1000Plus = 34,
  Reserved4000Plus = 35
}

export enum TradSesControl {
  Automatic = 0,
  Manual = 1
}

export enum TradeVolType {
  NumberOfUnits = 0,
  NumberOfRoundLots = 1
}

export enum OrderEventType {
  Added = 1,
  Modified = 2,
  Deleted = 3,
  PartiallyFilled = 4,
  Filled = 5,
  Suspended = 6,
  Released = 7,
  Restated = 8,
  Locked = 9,
  Triggered = 10,
  Activated = 11
}

export enum OrderEventReason {
  AddOrderRequest = 1,
  ModifyOrderRequest = 2,
  DeleteOrderRequest = 3,
  OrderEnteredOob = 4,
  OrderModifiedOob = 5,
  OrderDeletedOob = 6,
  OrderActivatedOrTriggered = 7,
  OrderExpired = 8,
  ReserveOrderRefreshed = 9,
  AwayMarketBetter = 10,
  CorporateAction = 11,
  StartOfDay = 12,
  EndOfDay = 13
}

export enum AuctionType {
  None = 0,
  BlockOrderAuction = 1,
  DirectedOrderAuction = 2,
  ExposureOrderAuction = 3,
  FlashOrderAuction = 4,
  FacilitationOrderAuction = 5,
  SolicitationOrderAuction = 6,
  PriceImprovementMechanism = 7,
  DirectedOrderPriceImprovementMechanism = 8
}

export enum AuctionInstruction {
  AutomatedAuctionPermitted = 0,
  AutomatedAuctionNotPermitted = 1
}

export enum LockType {
  NotLocked = 0,
  AwayMarketNetter = 1,
  ThreeTickLocked = 2,
  LockedByMarketMaker = 3,
  DirectedOrderLock = 4,
  MultilegLock = 5,
  MarketOrderLock = 6,
  PreAssignmentLock = 7
}

export enum ReleaseInstruction {
  Iso = 1,
  NoAwayMarketBetterCheck = 2
}

export enum DisclosureType {
  Volume = 1,
  Price = 2,
  Side = 3,
  Aon = 4,
  General = 5,
  ClearingAccount = 6,
  CmtaAccount = 7
}

export enum DisclosureInstruction {
  No = 0,
  Yes = 1,
  UseDefaultSetting = 2
}

export enum TradingCapacity {
  Customer = 1,
  CustomerProfessional = 2,
  BrokerDealer = 3,
  CustomerBrokerDealer = 4,
  Principal = 5,
  MarketMaker = 6,
  AwayMarketMaker = 7,
  SystematicInternaliser = 8
}

export enum ClearingAccountType {
  Customer = 1,
  Firm = 2,
  MarketMaker = 3
}

export enum RelatedPriceSource {
  NbBid = 1,
  NbOffer = 2
}

export enum MinQtyMethod {
  Once = 1,
  Multiple = 2
}

export enum Triggered {
  NotTriggered = 0,
  Triggered = 1,
  StopOrderTriggered = 2,
  OcoOrderTriggered = 3,
  OtoOrderTriggered = 4,
  OuoOrderTriggered = 5
}

export enum EventTimeUnit {
  Hour = 'H',
  Minute = 'Min',
  Second = 'S',
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

export enum ClearedIndicator {
  NotCleared = 0,
  Cleared = 1,
  Submitted = 2,
  Rejected = 3
}

export enum ContractRefPosType {
  TwoComponentIntercommoditySpread = 0,
  IndexOrBasket = 1,
  TwoComponentLocationBasis = 2,
  Other = 99
}

export enum PositionCapacity {
  Principal = 0,
  Agent = 1,
  Customer = 2,
  Counterparty = 3
}

export enum TradePriceCondition {
  SpecialCumDividend = 0,
  SpecialCumRights = 1,
  SpecialExDividend = 2,
  SpecialExRights = 3,
  SpecialCumCoupon = 4,
  SpecialCumCapitalRepayments = 5,
  SpecialExCoupon = 6,
  SpecialExCapitalRepayments = 7,
  CashSettlement = 8,
  SpecialCumBonus = 9,
  SpecialPrice = 10,
  SpecialExBonus = 11,
  GuaranteedDelivery = 12,
  SpecialDividend = 13,
  PriceImprovement = 14,
  NonPriceFormingTrade = 15,
  TradeExemptedFromTradingObligation = 16,
  PricePending = 17,
  PriceNotApplicable = 18
}

export enum TradeAllocStatus {
  PendingClear = 0,
  Claimed = 1,
  Cleared = 2,
  Rejected = 3
}

export enum TradeQtyType {
  ClearedQuantity = 0,
  LongSideClaimedQuantity = 1,
  ShortSideClaimedQuantity = 2,
  LongSideRejectedQuantity = 3,
  ShortSideRejectedQuantity = 4,
  PendingQuantity = 5,
  TransactionQuantity = 6,
  RemainingQuantity = 7,
  PreviousRemainingQuantity = 8
}

export enum TradeAllocGroupInstruction {
  Add = 0,
  DoNotAdd = 1
}

export enum OffsetInstruction {
  Offset = 0,
  Onset = 1
}

export enum SideAvgPxIndicator {
  NoAvgPricing = 0,
  TradeIsPartAvgPriceGrp = 1,
  LastTradeIsPartAvgPriceGrp = 2
}

export enum RelatedTradeIDSource {
  NonFixSource = 0,
  TradeId = 1,
  SecondaryTradeId = 2,
  TradeReportId = 3,
  FirmTradeId = 4,
  SecondaryFirmTradeId = 5,
  RegulatoryTradeId = 6
}

export enum RelatedPositionIDSource {
  PosMaintRptId = 1,
  TransferId = 2,
  PositionEntityId = 3
}

export enum QuoteAckStatus {
  ReceivedNotYetProcessed = 0,
  Accepted = 1,
  Rejected = 2
}

export enum ValueCheckType {
  PriceCheck = 1,
  NotionalValueCheck = 2,
  QuantityCheck = 3
}

export enum ValueCheckAction {
  DoNotCheck = 0,
  Check = 1,
  BestEffort = 2
}

export enum PartyDetailRequestResult {
  Successful = 0,
  InvalidParty = 1,
  InvalidRelatedParty = 2,
  InvalidPartyStatus = 3,
  NotAuthorized = 98,
  Other = 99
}

export enum PartyDetailRequestStatus {
  Accepted = 0,
  AcceptedWithChanges = 1,
  Rejected = 2,
  AcceptancePending = 3
}

export enum PartyDetailDefinitionStatus {
  Accepted = 0,
  AcceptedWithChanges = 1,
  Rejected = 2
}

export enum EntitlementRequestResult {
  Successful = 0,
  InvalidParty = 1,
  InvalidRelatedParty = 2,
  InvalidEntitlementType = 3,
  InvalidEntitlementId = 4,
  InvalidEntitlementAttribute = 5,
  InvalidInstrumentScope = 6,
  InvalidMarketSegmentScope = 7,
  InvalidStartDate = 8,
  InvalidEndDate = 9,
  InstrumentScopeNotSupported = 10,
  MarketSegmentScopeNotSupported = 11,
  EntitlementNotApprovedForParty = 12,
  EntitlementAlreadyDefinedForParty = 13,
  InstrumentNotApprovedForParty = 14,
  NotAuthorized = 98,
  Other = 99
}

export enum EntitlementStatus {
  Accepted = 0,
  AcceptedWithChanges = 1,
  Rejected = 2,
  Pending = 3,
  Requested = 4,
  Deferred = 5
}

export enum TradeMatchAckStatus {
  ReceivedNotProcessed = 0,
  Accepted = 1,
  Rejected = 2
}

export enum TradeMatchRejectReason {
  Successful = 0,
  InvalidPartyInformation = 1,
  UnknownInstrument = 2,
  Unauthorized = 3,
  InvalidTradeType = 4,
  Other = 99
}

export enum RegulatoryTradeIDEvent {
  InitialBlockTrade = 0,
  Allocation = 1,
  Clearing = 2,
  Compression = 3,
  Novation = 4,
  Termination = 5,
  PostTrdVal = 6
}

export enum RegulatoryTradeIDSource {
  UniqueTransactionIdentifier = '1'
}

export enum RegulatoryTradeIDType {
  Current = 0,
  Previous = 1,
  Block = 2,
  Related = 3,
  ClearedBlockTrade = 4,
  TradingVenueTransactionIdentifier = 5
}

export enum PriceMovementType {
  Amount = 0,
  Percentage = 1
}

export enum ClearingIntention {
  DoNotIntendToClear = 0,
  IntendToClear = 1
}

export enum ConfirmationMethod {
  NonElectronic = 0,
  Electronic = 1,
  Unconfirmed = 2
}

export enum VerificationMethod {
  NonElectronic = 0,
  Electronic = 1
}

export enum ClearingRequirementException {
  NoException = 0,
  Exception = 1,
  EndUserException = 2,
  InterAffiliateException = 3,
  TreasuryAffiliateException = 4,
  CooperativeException = 5
}

export enum IRSDirection {
  Pay = 'PAY',
  Rcv = 'RCV',
  Na = 'NA'
}

export enum RegulatoryReportType {
  Rt = 0,
  Pet = 1,
  Snapshot = 2,
  Confirmation = 3,
  Rtpet = 4,
  PetConfirmation = 5,
  RtpetConfirmation = 6,
  PostTrade = 7,
  Verification = 8,
  PstTrdEvnt = 9,
  PstTrdEvntRtReportable = 10,
  Lmtf = 11,
  Datf = 12,
  Volo = 13,
  Fwaf = 14,
  Idaf = 15,
  Volw = 16,
  Fulf = 17,
  Fula = 18,
  Fulv = 19,
  Fulj = 20,
  Coaf = 21,
  Order = 22,
  ChildOrder = 23,
  OrderRoute = 24,
  Trade = 25,
  Quote = 26,
  Supplement = 27,
  NewTransaction = 28,
  TransactionCorrection = 29,
  TransactionModification = 30,
  CollateralUpdate = 31,
  MarginUpdate = 32,
  TransactionReportedInError = 33,
  TerminationEarlyTermination = 34
}

export enum TradeCollateralization {
  Uncollateralized = 0,
  PartiallyCollateralized = 1,
  OneWayCollaterallization = 2,
  FullyCollateralized = 3,
  NetExposure = 4
}

export enum TradeContinuation {
  Novation = 0,
  PartialNovation = 1,
  TradeUnwind = 2,
  PartialTradeUnwind = 3,
  Exercise = 4,
  Netting = 5,
  FullNetting = 6,
  PartialNetting = 7,
  Amendment = 8,
  Increase = 9,
  CreditEvent = 10,
  StrategicRestructuring = 11,
  SuccessionEventReorganization = 12,
  SuccessionEventRenaming = 13,
  Porting = 14,
  Withdrawl = 15,
  Void = 16,
  AccountTransfer = 17,
  GiveUp = 18,
  TakeUp = 19,
  AveragePricing = 20,
  Reversal = 21,
  AllocTrdPosting = 22,
  Cascade = 23,
  Delivery = 24,
  OptionAsgn = 25,
  Expiration = 26,
  Maturity = 27,
  EqualPosAdj = 28,
  UnequalPosAdj = 29,
  Correction = 30,
  EarlyTermination = 31,
  Rerate = 32,
  Other = 99
}

export enum AssetClass {
  InterestRate = 1,
  Currency = 2,
  Credit = 3,
  Equity = 4,
  Commodity = 5,
  Other = 6,
  Cash = 7,
  Debt = 8,
  Fund = 9,
  LoanFacility = 10,
  Index = 11
}

export enum AssetSubClass {
  SingleCurrency = 1,
  CrossCurrency = 2,
  Basket = 3,
  SingleName = 4,
  CreditIndex = 5,
  IndexTranche = 6,
  CreditBasket = 7,
  Exotic = 8,
  Common = 9,
  Preferred = 10,
  EquityIndex = 11,
  EquityBasket = 12,
  Metals = 13,
  Bullion = 14,
  Energy = 15,
  CommodityIndex = 16,
  Agricultural = 17,
  Environmental = 18,
  Freight = 19,
  Government = 20,
  Agency = 21,
  Corporate = 22,
  Financing = 23,
  MoneyMarket = 24,
  Mortgage = 25,
  Municipal = 26,
  MutualFund = 27,
  CollectiveInvestmentVehicle = 28,
  InvestmentProgram = 29,
  SpecializedAccountProgram = 30,
  TermLoan = 31,
  BridgeLoan = 32,
  LetterOfCredit = 33,
  DividendIndex = 34,
  StockDividend = 35,
  ExchangeTradedFund = 36,
  VolatilityIndex = 37,
  FxCrossRates = 38,
  FxEmergingMarkets = 39,
  FxMajors = 40,
  Fertilizer = 41,
  IndustrialProduct = 42,
  Inflation = 43,
  Paper = 44,
  Polypropylene = 45,
  OfficialEconomicStatistics = 46,
  OtherC10 = 47,
  Other = 48
}

export enum SwapClass {
  BasisSwap = 'BS',
  IndexSwap = 'IX',
  BroadBasedSecuritySwap = 'BB',
  BasketSwap = 'SK'
}

export enum CouponType {
  Zero = 0,
  FixedRate = 1,
  FloatingRate = 2,
  Structured = 3
}

export enum CouponFrequencyUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr',
  Hour = 'H',
  Minute = 'Min',
  Second = 'S',
  Term = 'T'
}

export enum CouponDayCount {
  OneOne = 0,
  ThirtyThreeSixtyUs = 1,
  ThirtyThreeSixtySia = 2,
  ThirtyThreeSixtyM = 3,
  ThirtyEThreeSixty = 4,
  ThirtyEThreeSixtyIsda = 5,
  ActThreeSixty = 6,
  ActThreeSixtyFiveFixed = 7,
  ActActAfb = 8,
  ActActIcma = 9,
  ActActIsmaUltimo = 10,
  ActActIsda = 11,
  BusTwoFiftyTwo = 12,
  ThirtyEPlusThreeSixty = 13,
  ActThreeSixtyFiveL = 14,
  NlThreeSixtyFive = 15,
  NlThreeSixty = 16,
  Act364 = 17,
  ThirtyThreeSixtyFive = 18,
  ThirtyActual = 19,
  ThirtyThreeSixtyIcma = 20,
  ThirtyETwoThreeSixty = 21,
  ThirtyEThreeThreeSixty = 22,
  Other = 99
}

export enum LienSeniority {
  Unknown = 0,
  FirstLien = 1,
  SecondLien = 2,
  ThirdLien = 3
}

export enum LoanFacility {
  BridgeLoan = 0,
  LetterOfCredit = 1,
  RevolvingLoan = 2,
  SwinglineFunding = 3,
  TermLoan = 4,
  TradeClaim = 5
}

export enum ReferenceEntityType {
  Asian = 1,
  AustralianNewZealand = 2,
  EuropeanEmergingMarkets = 3,
  Japanese = 4,
  NorthAmericanHighYield = 5,
  NorthAmericanInsurance = 6,
  NorthAmericanInvestmentGrade = 7,
  Singaporean = 8,
  WesternEuropean = 9,
  WesternEuropeanInsurance = 10
}

export enum BlockTrdAllocIndicator {
  BlockToBeAllocated = 0,
  BlockNotToBeAllocated = 1,
  AllocatedTrade = 2
}

export enum UnderlyingObligationType {
  Bond = '0',
  ConvertibleBond = '1',
  Mortgage = '2',
  Loan = '3'
}

export enum AttachmentEncodingType {
  Base64 = 0,
  RawBinary = 1
}

export enum NegotiationMethod {
  AutoSpot = 0,
  NegotiatedSpot = 1,
  PhoneSpot = 2
}

export enum ComplexOptPayoutTime {
  Close = 0,
  Open = 1,
  OfficialSettl = 2,
  ValuationTime = 3,
  ExcahgneSettlTime = 4,
  DerivativesClose = 5,
  AsSpecified = 6
}

export enum ComplexEventQuoteBasis {
  Currency1PerCurrency2 = 0,
  Currency2PerCurrency1 = 1
}

export enum ComplexEventCreditEventNotifyingParty {
  SellerNotifies = 0,
  BuyerNotifies = 1,
  SellerOrBuyerNotifies = 2
}

export enum StrategyType {
  Straddle = 'STD',
  Strangle = 'STG',
  Butterfly = 'BF',
  Condor = 'CNDR',
  CallableInversibleSnowball = 'CISN',
  Other = 'OTHER'
}

export enum SettlDisruptionProvision {
  Negotiation = 1,
  Cancellation = 2
}

export enum AssetGroup {
  Financials = 1,
  Commodities = 2,
  AlternativeInvestments = 3
}

export enum RiskLimitReportStatus {
  Accepted = 0,
  Rejected = 1
}

export enum RiskLimitReportRejectReason {
  UnkRiskLmtRprtId = 0,
  UnkPty = 1,
  Other = 99
}

export enum RiskLimitCheckTransType {
  New = 0,
  Cancel = 1,
  Replace = 2
}

export enum RiskLimitCheckType {
  Submit = 0,
  LimitConsumed = 1
}

export enum RiskLimitCheckRequestType {
  AllOrNone = 0,
  Partial = 1
}

export enum RiskLimitCheckRequestStatus {
  Approved = 0,
  PartiallyApproved = 1,
  Rejected = 2,
  ApprovalPending = 3,
  Cancelled = 4
}

export enum RiskLimitCheckRequestResult {
  Successful = 0,
  InvalidParty = 1,
  ReqExceedsCreditLimit = 2,
  ReqExceedsClipSizeLimit = 3,
  ReqExceedsMaxNotional = 4,
  Other = 99
}

export enum PartyActionType {
  Suspend = 0,
  HaltTrading = 1,
  Reinstate = 2
}

export enum PartyActionResponse {
  Accepted = 0,
  Completed = 1,
  Rejected = 2
}

export enum PartyActionRejectReason {
  InvalidParty = 0,
  UnkReqParty = 1,
  NotAuthorized = 98,
  Other = 99
}

export enum RefRiskLimitCheckIDType {
  RiskLimitRequestId = 0,
  RiskLimitCheckId = 1,
  OutOfBandId = 3
}

export enum RiskLimitCheckModelType {
  None = 0,
  PlusOneModel = 1,
  PingModel = 2,
  PushModel = 3
}

export enum RiskLimitCheckStatus {
  Accepted = 0,
  Rejected = 1,
  ClaimRequired = 2,
  PreDefinedLimitCheckSucceeded = 3,
  PreDefinedLimitCheckFailed = 4,
  PreDefinedAutoAcceptRuleInvoked = 5,
  PreDefinedAutoRejectRuleInvoked = 6,
  AcceptedByClearingFirm = 7,
  RejectedByClearingFirm = 8,
  Pending = 9,
  AcceptedByCreditHub = 10,
  RejectedByCreditHub = 11,
  PendingCreditHubCheck = 12,
  AcceptedByExecVenue = 13,
  RejectedByExecVenue = 14
}

export enum RegulatoryTransactionType {
  None = 0,
  SefRequiredTransaction = 1,
  SefPermittedTransaction = 2
}

export enum PartyRiskLimitStatus {
  Disabled = 0,
  Enabled = 1
}

export enum RemunerationIndicator {
  NoRemunerationPaid = 0,
  RemunerationPaid = 1
}

export enum TaxonomyType {
  IsinOrAltInstrmtId = 'I',
  InterimTaxonomy = 'E'
}

export enum TradeContingency {
  DoesNotApply = 0,
  ContingentTrade = 1,
  NonContingentTrade = 2
}

export enum RegulatoryTradeIDScope {
  ClearingMember = 1,
  Client = 2
}

export enum EntitlementSubType {
  OrderEntry = 1,
  HItLift = 2,
  ViewIndicativePx = 3,
  ViewExecutablePx = 4,
  SingleQuote = 5,
  StreamingQuotes = 6,
  SingleBroker = 7,
  MultiBrokers = 8
}

export enum QuoteModelType {
  QuoteEntry = 1,
  QuoteModification = 2
}

export enum ExecMethod {
  Unspecified = 0,
  Manual = 1,
  Automated = 2,
  VoiceBrokered = 3
}

export enum MassOrderRequestStatus {
  Accepted = 1,
  AcceptedWithAdditionalEvents = 2,
  Rejected = 3
}

export enum MassOrderRequestResult {
  Successful = 0,
  ResponseLevelNotSupported = 1,
  InvalidMarket = 2,
  InvalidMarketSegment = 3,
  Other = 99
}

export enum OrderResponseLevel {
  NoAck = 0,
  MinimumAck = 1,
  AckEach = 2,
  SummaryAck = 3
}

export enum OrderEntryAction {
  Add = '1',
  Modify = '2',
  Delete = '3',
  Suspend = '4',
  Release = '5'
}

export enum ExecTypeReason {
  OrdAddedOnRequest = 1,
  OrdReplacedOnRequest = 2,
  OrdCxldOnRequest = 3,
  UnsolicitedOrdCxl = 4,
  NonRestingOrdAddedOnRequest = 5,
  OrdReplacedWithNonRestingOrdOnRequest = 6,
  TriggerOrdReplacedOnRequest = 7,
  SuspendedOrdReplacedOnRequest = 8,
  SuspendedOrdCxldOnRequest = 9,
  OrdCxlPending = 10,
  PendingCxlExecuted = 11,
  RestingOrdTriggered = 12,
  SuspendedOrdActivated = 13,
  ActiveOrdSuspended = 14,
  OrdExpired = 15
}

export enum TransferTransType {
  New = 0,
  Replace = 1,
  Cancel = 2
}

export enum TransferType {
  RequestTransfer = 0,
  AcceptTransfer = 1,
  DeclineTransfer = 2
}

export enum TransferScope {
  InterFirmTransfer = 0,
  IntraFirmTransfer = 1,
  Cmta = 2
}

export enum TransferStatus {
  Received = 0,
  RejectedByIntermediary = 1,
  AcceptPending = 2,
  Accepted = 3,
  Declined = 4,
  Cancelled = 5
}

export enum TransferRejectReason {
  Success = 0,
  InvalidParty = 1,
  UnknownInstrument = 2,
  UnauthorizedToSubmitXfer = 3,
  UnknownPosition = 4,
  Other = 99
}

export enum TransferReportType {
  Submit = 0,
  Alleged = 1
}

export enum MDStatisticType {
  Count = 1,
  AverageVolume = 2,
  TotalVolume = 3,
  Distribution = 4,
  Ratio = 5,
  Liquidity = 6,
  Vwap = 7,
  Volatility = 8,
  Duration = 9,
  Tick = 10,
  AverageValue = 11,
  TotalValue = 12,
  High = 13,
  Low = 14,
  Midpoint = 15,
  First = 16,
  Last = 17,
  Final = 18,
  ExchangeBest = 19,
  ExchangeBestWithVolume = 20,
  ConsolidatedBest = 21,
  ConsolidatedBestWithVolume = 22,
  Twap = 23,
  AverageDuration = 24,
  AveragePrice = 25,
  TotalFees = 26,
  TotalBenefits = 27,
  MedianValue = 28,
  AverageLiquidity = 29,
  MedianDuration = 30
}

export enum MDStatisticScope {
  BidPrices = 1,
  OfferPrices = 2,
  BidDepth = 3,
  OfferDepth = 4,
  Orders = 5,
  Quotes = 6,
  OrdersAndQuotes = 7,
  Trades = 8,
  TradePrices = 9,
  AuctionPrices = 10,
  OpeningPrices = 11,
  ClosingPrices = 12,
  SettlementPrices = 13,
  UnderlyingPrices = 14,
  OpenInterest = 15,
  IndexValues = 16,
  MarginRates = 17,
  Outages = 18,
  ScheduledAuctions = 19,
  ReferencePrices = 20,
  TradeValue = 21,
  MarketDataFeeItems = 22,
  Rebates = 23,
  Discounts = 24,
  Payments = 25,
  Taxes = 26,
  Levies = 27,
  Benefits = 28,
  Fees = 29,
  OrdersRfQs = 30,
  MarketMakers = 31,
  TradingInterruptions = 32,
  TradingSuspensions = 33,
  NoQuotes = 34,
  RequestForQuotes = 35,
  TradeVolume = 36
}

export enum MDStatisticSubScope {
  Visible = 1,
  Hidden = 2,
  Indicative = 3,
  Tradeable = 4,
  Passive = 5,
  MarketConsensus = 6,
  Power = 7,
  HardwareError = 8,
  SoftwareError = 9,
  NetworkError = 10,
  Failed = 11,
  Executed = 12,
  Entered = 13,
  Modified = 14,
  Cancelled = 15,
  MarketDataAccess = 16,
  TerminalAccess = 17,
  Volume = 18,
  Cleared = 19,
  Settled = 20,
  Other = 21,
  Monetary = 22,
  NonMonetary = 23,
  Gross = 24,
  LargeInScale = 25,
  NeitherHiddenNorLargeInScale = 26,
  CorporateAction = 27,
  VenueDecision = 28,
  MinimumTimePeriod = 29,
  Open = 30,
  NotExecuted = 31,
  Aggressive = 32,
  Directed = 33
}

export enum MDStatisticScopeType {
  EntryRate = 1,
  ModificationRate = 2,
  CancelRate = 3,
  DownwardMove = 4,
  UpwardMove = 5
}

export enum MDStatisticIntervalType {
  SlidingWindow = 1,
  SlidingWindowPeak = 2,
  FixedDateRange = 3,
  FixedTimeRange = 4,
  CurrentTimeUnit = 5,
  PreviousTimeUnit = 6,
  MaximumRange = 7,
  MaximumRangeUpToPreviousTimeUnit = 8
}

export enum MDStatisticRatioType {
  BuyersToSellers = 1,
  UpticksToDownticks = 2,
  MarketMakerToNonMarketMaker = 3,
  AutomatedToNonAutomated = 4,
  OrdersToTrades = 5,
  QuotesToTrades = 6,
  OrdersAndQuotesToTrades = 7,
  FailedToTotalTradedValue = 8,
  BenefitsToTotalTradedValue = 9,
  FeesToTotalTradedValue = 10,
  TradeVolumeToTotalTradedVolume = 11,
  OrdersToTotalNumberOrders = 12
}

export enum MDStatisticRequestResult {
  Successful = 0,
  InvalidOrUnknownMarket = 1,
  InvalidOrUnknownMarketSegment = 2,
  InvalidOrUnknownSecurityList = 3,
  InvalidOrUnknownInstruments = 4,
  InvalidParties = 5,
  TradeDateOutOfSupportedRange = 6,
  UnsupportedStatisticType = 7,
  UnsupportedScopeOrSubScope = 8,
  UnsupportedScopeType = 9,
  MarketDepthNotSupported = 10,
  FrequencyNotSupported = 11,
  UnsupportedStatisticInterval = 12,
  UnsupportedStatisticDateRange = 13,
  UnsupportedStatisticTimeRange = 14,
  UnsupportedRatioType = 15,
  InvalidOrUnknownTradeInputSource = 16,
  InvalidOrUnknownTradingSession = 17,
  UnauthorizedForStatisticRequest = 18,
  Other = 99
}

export enum MDStatisticStatus {
  Active = 1,
  Inactive = 2
}

export enum MDStatisticValueType {
  Absolute = 1,
  Percentage = 2
}

export enum CollRptRejectReason {
  UnknownTrade = 0,
  UnknownInstrument = 1,
  UnknownCounterparty = 2,
  UnknownPosition = 3,
  UnacceptableCollateral = 4,
  Other = 99
}

export enum CollRptStatus {
  Accepted = 0,
  Received = 1,
  Rejected = 2
}

export enum CrossedIndicator {
  NoCross = 0,
  CrossRejected = 1,
  CrossAccepted = 2
}

export enum TradeReportingIndicator {
  NotReported = 0,
  OnBook = 1,
  SiSeller = 2,
  SiBuyer = 3,
  NonSiSeller = 4,
  SubDelegationByFirm = 5,
  Reportable = 6,
  NonSiBuyer = 7,
  OffBook = 8,
  NotReportable = 9
}

export enum RelativeValueType {
  AswSpread = 1,
  Ois = 2,
  ZSpread = 3,
  DiscountMargin = 4,
  ISpread = 5,
  Oas = 6,
  GSpread = 7,
  CdsBasis = 8,
  CdsInterpolatedBasis = 9,
  Dv01 = 10,
  Pv01 = 11,
  Cs01 = 12
}

export enum RelativeValueSide {
  Bid = 1,
  Mid = 2,
  Offer = 3
}

export enum MDReportEvent {
  StartInstrumentRefData = 1,
  EndInstrumentRefData = 2,
  StartOffMarketTrades = 3,
  EndOffMarketTrades = 4,
  StartOrderBookTrades = 5,
  EndOrderBookTrades = 6,
  StartOpenInterest = 7,
  EndOpenInterest = 8,
  StartSettlementPrices = 9,
  EndSettlementPrices = 10,
  StartStatsRefData = 11,
  EndStatsRefData = 12,
  StartStatistics = 13,
  EndStatistics = 14
}

export enum MarketSegmentStatus {
  Active = 1,
  Inactive = 2,
  Published = 3
}

export enum MarketSegmentType {
  Pool = 1,
  Retail = 2,
  Wholesale = 3
}

export enum MarketSegmentSubType {
  InterProductSpread = 1
}

export enum MarketSegmentRelationship {
  MarketSegmentPoolMember = 1,
  RetailSegment = 2,
  WholesaleSegment = 3
}

export enum QuoteSideIndicator {
  No = 'N',
  Yes = 'Y'
}

export enum CustomerPriority {
  NoPriority = 0,
  UnconditionalPriority = 1
}

export enum SettlSubMethod {
  Shares = 1,
  Derivatives = 2,
  PaymentVsPayment = 3,
  Notional = 4,
  Cascade = 5,
  Repurchase = 6,
  Other = 99
}

export enum CalculationMethod {
  Automatic = 0,
  Manual = 1
}

export enum OrderAttributeType {
  AggregatedOrder = 0,
  PendingAllocation = 1,
  LiquidityProvisionActivityOrder = 2,
  RiskReductionOrder = 3,
  AlgorithmicOrder = 4,
  SystematicInternaliserOrder = 5,
  AllExecutionsSubmittedToApa = 6,
  OrderExecutionInstructedByClient = 7,
  LargeInScale = 8,
  Hidden = 9,
  SubjectToEusto = 10,
  SubjectToUksto = 11,
  RepresentativeOrder = 12,
  LinkageType = 13,
  ExemptFromSto = 14
}

export enum ComplexEventPVFinalPriceElectionFallback {
  Close = 0,
  HedgeElection = 1
}

export enum StrikeIndexQuote {
  Bid = 0,
  Mid = 1,
  Offer = 2
}

export enum ExtraordinaryEventAdjustmentMethod {
  CalculationAgent = 0,
  OptionsExchange = 1
}

export enum UnderlyingNotionalAdjustments {
  Execution = 0,
  PortfolioRebalancing = 1,
  Standard = 2
}

export enum CollateralAmountType {
  MarketValuation = 0,
  PortfolioValue = 1,
  ValueConfirmed = 2,
  CollateralCreditValue = 3,
  AdditionalCollateralValue = 4,
  EstimatedMarketValuation = 5
}

export enum CommissionAmountType {
  Unspecified = 0,
  Acceptance = 1,
  Broker = 2,
  ClearingBroker = 3,
  Retail = 4,
  SalesCommission = 5,
  LocalCommission = 6,
  ResearchPayment = 7
}

export enum AlgorithmicTradeIndicator {
  NonAlgorithmicTrade = 0,
  AlgorithmicTrade = 1
}

export enum TrdRegPublicationType {
  PreTradeTransparencyWaiver = 0,
  PostTradeDeferral = 1,
  ExemptFromPublication = 2,
  OrderLevelPublicationToSubscribers = 3,
  PriceLevelPublicationToSubscribers = 4,
  OrderLevelPublicationToThePublic = 5,
  PublicationInternalToExecutionVenue = 6
}

export enum TrdRegPublicationReason {
  NoBookOrderDueToAverageSpreadPrice = 0,
  NoBookOrderDueToRefPrice = 1,
  NoBookOrderDueToOtherConditions = 2,
  NoPublicPriceDueToRefPrice = 3,
  NoPublicPriceDueToIlliquid = 4,
  NoPublicPriceDueToOrderSize = 5,
  DeferralDueToLargeInScale = 6,
  DeferralDueToIlliquid = 7,
  DeferralDueToSizeSpecific = 8,
  NoPublicPriceDueToLargeInScale = 9,
  NoPublicPriceSizeDueToOrderHidden = 10,
  ExemptedDueToSecuritiesFinancingTransaction = 11,
  ExemptedDueToEscbPolicyTransaction = 12,
  ExceptionDueToReportByPaper = 13,
  ExceptionDueToTradeExecutedWithNonReportingParty = 14,
  ExceptionDueToIntraFirmOrder = 15,
  ReportedOutsideReportingHours = 16
}

export enum MassActionReason {
  None = 0,
  TradingRiskControl = 1,
  ClearingRiskControl = 2,
  MarketMakerProtection = 3,
  StopTrading = 4,
  EmergencyAction = 5,
  SessionLossLogout = 6,
  DuplicateLogin = 7,
  ProductNotTraded = 8,
  InstrumentNotTraded = 9,
  CompleInstrumentDeleted = 10,
  CircuitBreakerActivated = 11,
  Other = 99
}

export enum NotAffectedReason {
  OrderSuspended = 0,
  InstrumentSuspended = 1
}

export enum OrderOwnershipIndicator {
  NoChange = 0,
  ExecutingPartyChange = 1,
  EnteringPartyChange = 2,
  SpecifiedPartyChange = 3
}

export enum InTheMoneyCondition {
  StandardItm = 0,
  Atmitm = 1,
  AtmCallItm = 2,
  AtmPutItm = 3
}

export enum ExDestinationType {
  NoRestriction = 0,
  TradedOnlyOnTradingVenue = 1,
  TradedOnlyOnSi = 2,
  TradedOnTradingVenueOrSi = 3
}

export enum MarketCondition {
  Normal = 0,
  Stressed = 1,
  Exceptional = 2
}

export enum QuoteAttributeType {
  QuoteAboveStandardMarketSize = 0,
  QuoteAboveSpecificInstrumentSize = 1,
  QuoteApplicableForLiquidtyProvisionActivity = 2,
  QuoteIssuerStatus = 3,
  BidOrAskRequest = 4
}

export enum PriceQualifier {
  AccruedInterestIsFactored = 0,
  TaxIsFactored = 1,
  BondAmortizationIsFactored = 2
}

export enum MDValueTier {
  Range1 = 1,
  Range2 = 2,
  Range3 = 3
}

export enum MiscFeeQualifier {
  Contributes = 0,
  DoesNotContribute = 1
}

export enum CommissionAmountSubType {
  ResearchPaymentAccount = 0,
  CommissionSharingAgreement = 1,
  OtherTypeResearchPayment = 2
}

export enum CommodityFinalPriceType {
  ArgusMcCloskey = 0,
  Baltic = 1,
  Exchange = 2,
  GlobalCoal = 3,
  IhsMcCloskey = 4,
  Platts = 5,
  Other = 99
}

export enum ReferenceDataDateType {
  AdmitToTradeRequestDate = 0,
  AdmitToTradeApprovalDate = 1,
  AdmitToTradeOrFirstTradeDate = 2,
  TerminationDate = 3
}

export enum ReturnTrigger {
  Dividend = 1,
  Variance = 2,
  Volatility = 3,
  TotalReturn = 4,
  ContractForDifference = 5,
  CreditDefault = 6,
  SpreadBet = 7,
  Price = 8,
  ForwardPriceUnderlyingInstrument = 9,
  Other = 99
}

export enum AveragePriceType {
  TimeWeightedAveragePrice = 0,
  VolumeWeightedAveragePrice = 1,
  PercentOfVolumeAveragePrice = 2,
  LimitOrderAveragePrice = 3
}

export enum AllocGroupStatus {
  Added = 0,
  Canceled = 1,
  Replaced = 2,
  Changed = 3,
  Pending = 4
}

export enum AllocRequestStatus {
  Accepted = 0,
  Rejected = 1
}

export enum MatchExceptionType {
  NoMatchingConfirmation = 0,
  NoMatchingAllocation = 1,
  AllocationDataElementMissing = 2,
  ConfirmationDataElementMissing = 3,
  DataDifferenceNotWithinTolerance = 4,
  MatchWithinTolerance = 5,
  Other = 99
}

export enum MatchExceptionElementType {
  AccruedInterest = 1,
  DealPrice = 2,
  TradeDate = 3,
  SettlementDate = 4,
  SideIndicator = 5,
  TradedCurrency = 6,
  AccountId = 7,
  ExecutingBrokerId = 8,
  SettlementCurrencyAndAmount = 9,
  InvestmentManagerId = 10,
  NetAmount = 11,
  PlaceOfSettlement = 12,
  Commissions = 13,
  SecurityIdentifier = 14,
  QualityAllocated = 15,
  Principal = 16,
  Fees = 17,
  Tax = 18
}

export enum MatchExceptionToleranceValueType {
  FixedAmount = 1,
  Percentage = 2
}

export enum MatchingDataPointIndicator {
  Mandatory = 1,
  Optional = 2
}

export enum TradeAggregationTransType {
  New = 0,
  Cancel = 1,
  Replace = 2
}

export enum TradeAggregationRequestStatus {
  Accepted = 0,
  Rejected = 1
}

export enum TradeAggregationRejectReason {
  UnknownOrders = 0,
  UnknownExecutionFills = 1,
  Other = 99
}

export enum OffshoreIndicator {
  Regular = 0,
  Offshore = 1,
  Onshore = 2
}

export enum PayReportTransType {
  New = 0,
  Replace = 1,
  Status = 2
}

export enum PayReportStatus {
  Received = 0,
  Accepted = 1,
  Rejected = 2,
  Disputed = 3
}

export enum PayRequestTransType {
  New = 0,
  Cancel = 1
}

export enum PayRequestStatus {
  Received = 0,
  Accepted = 1,
  Rejected = 2,
  Disputed = 3
}

export enum PostTradePaymentDebitOrCredit {
  DebitPay = 0,
  CreditReceive = 1
}

export enum PostTradePaymentStatus {
  New = 0,
  Initiated = 1,
  Pending = 2,
  Confirmed = 3,
  Rejected = 4
}

export enum DuplicateClOrdIDIndicator {
  No = 'N',
  Yes = 'Y'
}

export enum EventInitiatorType {
  CustomerOrClient = 'C',
  ExchangeOrExecutionVenue = 'E',
  FirmOrBroker = 'F'
}

export enum NBBOEntryType {
  Bid = 0,
  Offer = 1,
  MidPrice = 2
}

export enum NBBOSource {
  NotApplicable = 0,
  Direct = 1,
  Sip = 2,
  Hybrid = 3
}

export enum SingleQuoteIndicator {
  No = 'N',
  Yes = 'Y'
}

export enum TrdRegTimestampManualIndicator {
  No = 'N',
  Yes = 'Y'
}

export enum CollateralReinvestmentType {
  MoneyMarketFund = 0,
  OtherComingledPool = 1,
  RepoMarket = 2,
  DirectPurchaseOfSecurities = 3,
  OtherInvestments = 4
}

export enum FundingSource {
  Repo = 0,
  Cash = 1,
  FreeCedits = 2,
  CustomerShortSales = 3,
  BrokerShortSales = 4,
  UnsecuredBorrowing = 5,
  Other = 99
}

export enum MarginDirection {
  Posted = 0,
  Received = 1
}

export enum TransactionAttributeType {
  ExclusiveArrangement = 0,
  CollateralReuse = 1,
  CollateralArrangmentType = 2
}

export enum RoutingArrangmentIndicator {
  NoRoutingArrangmentInPlace = 0,
  RoutingArrangementInPlace = 1
}

export enum RelatedOrderIDSource {
  NonFixSource = 0,
  SystemOrderIdentifier = 1,
  ClientOrderIdentifier = 2,
  SecondaryOrderIdentifier = 3,
  SecondaryClientOrderIdentifier = 4
}

export enum OrderRelationship {
  NotSpecified = 0,
  OrderAggregation = 1,
  OrderSplit = 2
}

export enum CurrencyCodeSource {
  Cusip = '1',
  Sedol = '2',
  IsinNumber = '4',
  IsoCurrencyCode = '6',
  FinancialInstrumentGlobalIdentifier = 'S',
  DigitalTokenIdentifier = 'Y'
}

export enum MultiJurisdictionReportingIndicator {
  NotMultiJrsdctnEligible = 0,
  MultiJrsdctnEligible = 1
}

export enum SelfMatchPreventionInstruction {
  CancelAggressive = 1,
  CancelPassive = 2,
  CancelAggressivePassive = 3
}

export enum CashSettlQuoteMethod {
  Bid = 0,
  Mid = 1,
  Offer = 2
}

export enum CashSettlValuationMethod {
  Market = 0,
  Highest = 1,
  AverageMarket = 2,
  AverageHighest = 3,
  BlendedMarket = 4,
  BlendedHighest = 5,
  AverageBlendedMarket = 6,
  AverageBlendedHighest = 7
}

export enum StreamType {
  PaymentCashSettlement = 0,
  PhysicalDelivery = 1
}

export enum ProvisionType {
  MandatoryEarlyTermination = 0,
  OptionalEarlyTermination = 1,
  Cancelable = 2,
  Extendable = 3,
  MutualEarlyTermination = 4,
  Evergreen = 5,
  Callable = 6,
  Puttable = 7
}

export enum ProvisionDateTenorUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

export enum ProvisionCalculationAgent {
  ExercisingParty = 0,
  NonExercisingParty = 1,
  MasterAgreeent = 2,
  Supplement = 3
}

export enum ProvisionOptionSinglePartyBuyerSide {
  Buy = 1,
  Sell = 2
}

export enum ProvisionCashSettlMethod {
  CashPrice = 0,
  CashPriceAlternate = 1,
  ParYieldCurveAdjusted = 2,
  ZeroCouponYieldCurveAdjusted = 3,
  ParYieldCurveUnadjusted = 4,
  CrossCurrency = 5,
  CollateralizedPrice = 6
}

export enum ProvisionCashSettlQuoteType {
  Bid = 0,
  Mid = 1,
  Offer = 2,
  ExercisingPartyPays = 3
}

export enum ProvisionOptionExerciseEarliestDateOffsetUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

export enum ProvisionOptionExerciseFixedDateType {
  Unadjusted = 0,
  Adjusted = 1
}

export enum ProvisionCashSettlPaymentDateType {
  Unadjusted = 0,
  Adjusted = 1
}

export enum ProtectionTermEventUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

export enum ProtectionTermEventDayType {
  Business = 0,
  Calendar = 1,
  CommodityBusiness = 2,
  CurrencyBusiness = 3,
  ExchangeBusiness = 4,
  ScheduledTradingDay = 5
}

export enum ProtectionTermEventQualifier {
  RestructuringMultipleHoldingObligations = 'H',
  RestructuringMultipleCreditEventNotices = 'E',
  FloatingRateInterestShortfall = 'C'
}

export enum PaymentType {
  Brokerage = 0,
  UpfrontFee = 1,
  IndependentAmountCollateral = 2,
  PrincipalExchange = 3,
  NovationTermination = 4,
  EarlyTerminationProvision = 5,
  CancelableProvision = 6,
  ExtendibleProvision = 7,
  CapRateProvision = 8,
  FloorRateProvision = 9,
  OptionPremium = 10,
  SettlementPayment = 11,
  CashSettl = 12,
  SecurityLending = 13,
  Rebate = 14,
  Other = 99
}

export enum PaymentPaySide {
  Buy = 1,
  Sell = 2
}

export enum PaymentSettlStyle {
  Standard = 0,
  Net = 1,
  StandardfNet = 2
}

export enum PaymentStreamType {
  Periodic = 0,
  Initial = 1,
  Single = 2,
  Dividend = 3,
  Interest = 4,
  DividendReturn = 5,
  PriceReturn = 6,
  TotalReturn = 7,
  Variance = 8,
  Correlation = 9
}

export enum PaymentStreamDiscountType {
  Standard = 0,
  Fra = 1
}

export enum PaymentStreamCompoundingMethod {
  None = 0,
  Flat = 1,
  Straight = 2,
  SpreadExclusive = 3
}

export enum PaymentStreamPaymentFrequencyUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr',
  Term = 'T'
}

export enum PaymentStreamPaymentDateOffsetUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

export enum PaymentStreamResetWeeklyRollConvention {
  Monday = 'MON',
  Tuesday = 'TUE',
  Wednesday = 'WED',
  Thursday = 'THU',
  Friday = 'FRI',
  Saturday = 'SAT',
  Sunday = 'SUN'
}

export enum PaymentStreamRateIndexSource {
  Bloomberg = 0,
  Reuters = 1,
  Telerate = 2,
  Other = 99
}

export enum PaymentStreamRateIndexCurveUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

export enum PaymentStreamRateSpreadPositionType {
  Short = 0,
  Long = 1
}

export enum PaymentStreamRateTreatment {
  BondEquivalentYield = 0,
  MoneyMarketYield = 1
}

export enum PaymentStreamCapRateBuySide {
  Buyer = 1,
  Seller = 2
}

export enum PaymentStreamFloorRateBuySide {
  Buyer = 1,
  Seller = 2
}

export enum PaymentStreamAveragingMethod {
  Unweighted = 0,
  Weighted = 1
}

export enum PaymentStreamNegativeRateTreatment {
  ZeroInterestRateMethod = 0,
  NegativeInterestRateMethod = 1
}

export enum PaymentStreamInflationLagUnit {
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

export enum PaymentStreamInflationLagDayType {
  Business = 0,
  Calendar = 1,
  CommodityBusiness = 2,
  CurrencyBusiness = 3,
  ExchangeBusiness = 4,
  ScheduledTradingDay = 5
}

export enum PaymentStreamInflationInterpolationMethod {
  None = 0,
  LinearZeroYield = 1
}

export enum PaymentStreamFRADiscounting {
  None = 0,
  Isda = 1,
  Afma = 2
}

export enum NonDeliverableFixingDateType {
  Unadjusted = 0,
  Adjusted = 1
}

export enum PaymentScheduleType {
  Notional = 0,
  CashFlow = 1,
  FxLinkedNotional = 2,
  FixedRate = 3,
  FutureValueNotional = 4,
  KnownAmount = 5,
  FloatingRateMultiplier = 6,
  Spread = 7,
  CapRate = 8,
  FloorRate = 9,
  NonDeliverableSettlPaymentDates = 10,
  NonDeliverableSettlCalculationDates = 11,
  NonDeliverableFxFixingDates = 12,
  SettlPeriodNotnl = 13,
  SettlPeriodPx = 14,
  CalcPeriod = 15,
  DividendAccrualRateMultiplier = 16,
  DividendAccrualRateSpread = 17,
  DividendAccrualCapRate = 18,
  DividendAccrualFloorRate = 19,
  CompoundingRateMultiplier = 20,
  CompoundingRateSpread = 21,
  CompoundingCapRate = 22,
  CompoundingFloorRate = 23
}

export enum PaymentScheduleStepRelativeTo {
  Initial = 0,
  Previous = 1
}

export enum PaymentStubType {
  Initial = 0,
  Final = 1,
  CompoundingInitial = 2,
  CompoundingFinal = 3
}

export enum PaymentStubLength {
  Short = 0,
  Long = 1
}

export enum PaymentStreamPaymentDateOffsetDayType {
  Business = 0,
  Calendar = 1,
  CommodityBusiness = 2,
  CurrencyBusiness = 3,
  ExchangeBusiness = 4,
  ScheduledTradingDay = 5
}

export enum BusinessDayConvention {
  NotApplicable = 0,
  None = 1,
  FollowingDay = 2,
  FloatingRateNote = 3,
  ModifiedFollowingDay = 4,
  PrecedingDay = 5,
  ModifiedPrecedingDay = 6,
  NearestDay = 7
}

export enum DateRollConvention {
  FirstDay = '1',
  SecondDay = '2',
  ThirdDay = '3',
  FourthDay = '4',
  FifthDay = '5',
  SixthDay = '6',
  SeventhDay = '7',
  EighthDay = '8',
  NinthDay = '9',
  TenthDay = '10',
  EleventhDay = '11',
  TwelvthDay = '12',
  ThirteenthDay = '13',
  ForteenthDay = '14',
  FifteenthDay = '15',
  SixteenthDay = '16',
  SeventeenthDay = '17',
  EighteenthDay = '18',
  NineteenthDay = '19',
  TwentiethDay = '20',
  TwentyFirstDay = '21',
  TwentySecondDay = '22',
  TwentyThirdDay = '23',
  TwentyFourthDay = '24',
  TwentyFifthDay = '25',
  TwentySixthDay = '26',
  TwentySeventhDay = '27',
  TwentyEigthDa28Y = '28',
  TwentyNinthDay = '29',
  ThirtiethDay = '30',
  Eom = 'EOM',
  Frn = 'FRN',
  Imm = 'IMM',
  Immcad = 'IMMCAD',
  Immaud = 'IMMAUD',
  Immnzd = 'IMMNZD',
  Sfe = 'SFE',
  None = 'NONE',
  Tbill = 'TBILL',
  Mon = 'MON',
  Tue = 'TUE',
  Wed = 'WED',
  Thu = 'THU',
  Fri = 'FRI',
  Sat = 'SAT',
  Sun = 'SUN'
}

export enum PaymentSubType {
  Initial = 0,
  Intermediate = 1,
  Final = 2,
  Prepaid = 3,
  Postpaid = 4,
  Variable = 5,
  Fixed = 6,
  Swap = 7,
  Conditional = 8,
  FixedRate = 9,
  FloatingRate = 10
}

export enum ComplexEventPeriodType {
  AsianOut = 0,
  AsianIn = 1,
  BarrierCap = 2,
  BarrierFloor = 3,
  KnockOut = 4,
  KnockIn = 5
}

export enum ComplexEventDateOffsetDayType {
  Business = 0,
  Calendar = 1,
  CommodityBusiness = 2,
  CurrencyBusiness = 3,
  ExchangeBusiness = 4,
  ScheduledTradingDay = 5
}

export enum DeliveryScheduleType {
  Notional = 0,
  Delivery = 1,
  PhysicalSettlPeriods = 2
}

export enum DeliveryScheduleToleranceType {
  Absolute = 0,
  Percentage = 1
}

export enum DeliveryScheduleSettlFlowType {
  AllTimes = 0,
  OnPeak = 1,
  OffPeak = 2,
  Base = 3,
  BlockHours = 4,
  Other = 5
}

export enum DeliveryScheduleSettlHolidaysProcessingInstruction {
  DoNotIncludeHolidays = 0,
  IncludeHolidays = 1
}

export enum DeliveryScheduleSettlDay {
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7,
  AllWeekdays = 8,
  AllDays = 9,
  AllWeekends = 10
}

export enum DeliveryScheduleSettlTimeType {
  Hour = 0,
  Timestamp = 1
}

export enum DeliveryStreamType {
  Periodic = 0,
  Initial = 1,
  Single = 2
}

export enum DeliveryStreamDeliveryRestriction {
  Firm = 1,
  NonFirm = 2,
  ForceMajeure = 3,
  SystemFirm = 4,
  UnitFirm = 5
}

export enum DeliveryStreamTitleTransferCondition {
  Transfers = 0,
  DoesNotTransfer = 1
}

export enum DeliveryStreamToleranceOptionSide {
  Buyer = 1,
  Seller = 2
}

export enum DeliveryStreamElectingPartySide {
  Buyer = 0,
  Seller = 1
}

export enum MarketDisruptionProvision {
  NotApplicable = 0,
  Applicable = 1,
  AsInMasterAgreement = 2,
  AsInConfirmation = 3
}

export enum MarketDisruptionFallbackProvision {
  MasterAgreement = 0,
  Confirmation = 1
}

export enum MarketDisruptionFallbackUnderlierType {
  Basket = 0,
  Bond = 1,
  Cash = 2,
  Commodity = 3,
  ConvertibleBond = 4,
  Equity = 5,
  ExchangeTradedFund = 6,
  Future = 7,
  Index = 8,
  Loan = 9,
  Mortgage = 10,
  MutualFund = 11
}

export enum ExerciseConfirmationMethod {
  NotRequired = 0,
  NonElectronic = 1,
  Electronic = 2,
  Unknown = 3
}

export enum OptionExerciseDateType {
  Unadjusted = 0,
  Adjusted = 1
}

export enum PaymentDateOffsetDayType {
  Business = 0,
  Calendar = 1,
  Commodity = 2,
  Currency = 3,
  Exchange = 4,
  Scheduled = 5
}

export enum PaymentForwardStartType {
  Prepaid = 0,
  Postpaid = 1,
  Variable = 2,
  Fixed = 3
}

export enum PaymentStreamSettlLevel {
  Average = 0,
  Maximum = 1,
  Minimum = 2,
  Cumulative = 3
}

export enum PaymentStreamRateSpreadType {
  Absolute = 0,
  Percentage = 1
}

export enum PaymentStreamPricingDayDistribution {
  All = 0,
  First = 1,
  Last = 2,
  Penultimate = 3
}

export enum PaymentStreamPricingDayOfWeek {
  EveryDay = 0,
  Monday = 1,
  Tuesday = 2,
  Wednesday = 3,
  Thursday = 4,
  Friday = 5,
  Saturday = 6,
  Sunday = 7
}

export enum StreamCommodityNearbySettlDayUnit {
  Week = 'Wk',
  Month = 'Mo'
}

export enum StreamCommoditySettlDateRollUnit {
  Day = 'D'
}

export enum StreamCommodityDataSourceIDType {
  City = 0,
  Airport = 1,
  WeatherStation = 2,
  WeatherIndex = 3
}

export enum StreamNotionalCommodityFrequency {
  Term = 0,
  PerBusinessDay = 1,
  PerCalculationPeriod = 2,
  PerSettlPeriod = 3,
  PerCalendarDay = 4,
  PerHour = 5,
  PerMonth = 6
}

export enum DeliveryStreamDeliveryPointSource {
  Proprietary = 0,
  Eic = 1
}

export enum CashSettlPriceDefault {
  Close = 0,
  Hedge = 1
}

export enum DividendEntitlementEvent {
  ExDate = 0,
  RecordDate = 1
}

export enum DividendAmountType {
  RecordAmount = 0,
  ExAmount = 1,
  PaidAmount = 2,
  PerMasterConfirm = 3
}

export enum NonCashDividendTreatment {
  PotentialAdjustment = 0,
  CashEquivalent = 1
}

export enum DividendComposition {
  EquityAmountReceiver = 0,
  CalculationAgent = 1
}

export enum PaymentStreamInterpolationPeriod {
  Initial = 0,
  InitialAndFinal = 1,
  Final = 2,
  AnyPeriod = 3
}

export enum PaymentStreamLinkStrikePriceType {
  Volatility = 0,
  Variance = 1
}

export enum PaymentStreamRealizedVarianceMethod {
  Previous = 0,
  Last = 1,
  Both = 2
}

export enum ProvisionBreakFeeElection {
  FlatFee = 0,
  AmortizedFee = 1,
  FundingFee = 2,
  FlatAndFundingFee = 3,
  AmortizedAndFundingFee = 4
}

export enum ReturnRateDateMode {
  PriceValuation = 0,
  DividendValuation = 1
}

export enum ReturnRatePriceSequence {
  Initial = 0,
  Interim = 1,
  Final = 2
}

export enum ReturnRateQuoteTimeType {
  Open = 0,
  OfficialSettlPx = 1,
  Xetra = 2,
  Close = 3,
  DerivativesClose = 4,
  High = 5,
  Low = 6,
  AsSpecifiedInMasterConfirmation = 7
}

export enum ReturnRateValuationPriceOption {
  None = 0,
  FuturesPrice = 1,
  OptionsPrice = 2
}

export enum ReturnRatePriceBasis {
  Gross = 0,
  Net = 1,
  Accrued = 2,
  CleanNet = 3
}

export enum ReturnRatePriceType {
  AbsoluteTerms = 0,
  PercentageOfNotional = 1
}

export enum StreamNotionalAdjustments {
  Execution = 0,
  PortfolioRebalancing = 1,
  Standard = 2
}

export enum BatchProcessMode {
  Update = 0,
  Snapshot = 1
}

