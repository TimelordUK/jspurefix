/*
*************************************
* Broker's side of advertised trade *
*************************************
*/
export enum AdvSide {
  Buy = 'B',
  Sell = 'S',
  Cross = 'X',
  Trade = 'T'
}

/*
*****************************************************
* Identifies advertisement message transaction type *
*****************************************************
*/
export enum AdvTransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R'
}

/*
*******************
* Commission type *
*******************
*/
export enum CommType {
  PerUnit = '1',
  Percent = '2',
  Absolute = '3',
  PercentageWaivedCashDiscount = '4',
  PercentageWaivedEnhancedUnits = '5',
  PointsPerBondOrContract = '6'
}

/*
****************************************************************
* Instructions for order handling on exchange trading floor.   *
* If more than one instruction is applicable to an order, this *
* field can contain multiple instructions separated by space.  *
****************************************************************
*/
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

/*
***********************************************************
* Instructions for order handling on Broker trading floor *
***********************************************************
*/
export enum HandlInst {
  AutomatedExecutionNoIntervention = '1',
  AutomatedExecutionInterventionOk = '2',
  ManualOrder = '3'
}

/*
************************************************************
* Identifies class or source of the SecurityID (48) value. *
* Required if SecurityID is specified.                     *
************************************************************
*/
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
  OptionPriceReportingAuthority = 'J'
}

/*
**********************************
* Relative quality of indication *
**********************************
*/
export enum IOIQltyInd {
  Low = 'L',
  Medium = 'M',
  High = 'H'
}

/*
****************************************************************
* Quantity (e.g. number of shares) in numeric form or relative *
* size.                                                        *
****************************************************************
*/
export enum IOIQty {
  Small = 'S',
  Medium = 'M',
  Large = 'L'
}

/*
*******************************************
* Identifies IOI message transaction type *
*******************************************
*/
export enum IOITransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R'
}

/*
**************************************
* Broker capacity in order execution *
**************************************
*/
export enum LastCapacity {
  Agent = '1',
  CrossAsAgent = '2',
  CrossAsPrincipal = '3',
  Principal = '4'
}

/*
***************************************************************
* Defines message type ALWAYS THIRD FIELD IN MESSAGE. (Always *
* unencrypted)                                                *
* Note: A "U" as the first character in the MsgType field     *
* (i.e. U, U2, etc) indicates that the message format is      *
* privately defined between the sender and receiver.          *
***************************************************************
*/
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
  XmlNonFix = 'n',
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
  ConfirmationRequest = 'BH'
}

/*
***************************************************************
* Identifies current status of order.                         *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
* (see Volume : "Glossary" for value definitions)             *
***************************************************************
*/
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

/*
********************************************************
* Order type                                           *
* *** SOME VALUES ARE NO LONGER USED - See "Deprecated *
* (Phased-out) Features and Supported Approach" ***    *
* (see Volume : "Glossary" for value definitions)      *
********************************************************
*/
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
  ForexSwap = 'G',
  Funari = 'I',
  MarketIfTouched = 'J',
  MarketWithLeftOverAsLimit = 'K',
  PreviousFundValuationPoint = 'L',
  NextFundValuationPoint = 'M',
  Pegged = 'P'
}

/*
**********************************************************
* Indicates possible retransmission of message with this *
* sequence number                                        *
**********************************************************
*/
export enum PossDupFlag {
  PossibleDuplicate = 'Y',
  OriginalTransmission = 'N'
}

/*
*****************
* Side of order *
*****************
*/
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

/*
**************************************************************
* Specifies how long the order remains in effect. Absence of *
* this field is interpreted as DAY.                          *
**************************************************************
*/
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

/*
****************
* Urgency flag *
****************
*/
export enum Urgency {
  Normal = '0',
  Flash = '1',
  Background = '2'
}

/*
****************************************************************
* Indicates order settlement period. If present, SettlDate     *
* (64) overrides this field. If both SettlType (63) and        *
* SettDate (64) are omitted, the default for SettlType (63) is *
* 0 (Regular)                                                  *
* Regular is defined as the default settlement period for the  *
* particular security on the exchange of execution.            *
* In Fixed Income the contents of this field may influence the *
* instrument definition if the SecurityID (48) is ambiguous.   *
* In the US an active Treasury offering may be re-opened, and  *
* for a time one CUSIP will apply to both the current and      *
* "when-issued" securities. Supplying a value of "7" clarifies *
* the instrument description; any other value or the absence   *
* of this field should cause the respondent to default to the  *
* active issue.                                                *
****************************************************************
*/
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

/*
***************************************************************
* Identifies allocation transaction type                      *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
*/
export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2'
}

/*
***************************************************************
* Indicates whether the resulting position after a trade      *
* should be an opening position or closing position. Used for *
* omnibus accounting - where accounts are held on a gross     *
* basis instead of being netted together.                     *
***************************************************************
*/
export enum PositionEffect {
  Open = 'O',
  Close = 'C',
  Rolled = 'R',
  Fifo = 'F'
}

/*
*************************************************************
* Processing code for sub-account. Absence of this field in *
* AllocAccount (79) / AllocPrice (366) /AllocQty (80) /     *
* ProcessCode instance indicates regular trade.             *
*************************************************************
*/
export enum ProcessCode {
  Regular = '0',
  SoftDollar = '1',
  StepIn = '2',
  StepOut = '3',
  SoftDollarStepIn = '4',
  SoftDollarStepOut = '5',
  PlanSponsor = '6'
}

/*
***********************************
* Identifies status of allocation *
***********************************
*/
export enum AllocStatus {
  Accepted = 0,
  BlockLevelReject = 1,
  AccountLevelReject = 2,
  Received = 3,
  Incomplete = 4,
  RejectedByIntermediary = 5
}

/*
***********************************
* Identifies reason for rejection *
***********************************
*/
export enum AllocRejCode {
  UnknownAccount = 0,
  IncorrectQuantity = 1,
  IncorrectAveragegPrice = 2,
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
  WarehouseRequestRejected = 13
}

/*
**********************
* Email message type *
**********************
*/
export enum EmailType {
  New = '0',
  Reply = '1',
  AdminReply = '2'
}

/*
****************************************************************
* Indicates that message may contain information that has been *
* sent under another sequence number.                          *
****************************************************************
*/
export enum PossResend {
  PossibleResend = 'Y',
  OriginalTransmission = 'N'
}

/*
************************
* Method of encryption *
************************
*/
export enum EncryptMethod {
  None = 0,
  Pkcs = 1,
  Des = 2,
  Pkcsdes = 3,
  Pgpdes = 4,
  Pgpdesmd5 = 5,
  Pem = 6
}

/*
************************************************
* Code to identify reason for cancel rejection *
************************************************
*/
export enum CxlRejReason {
  TooLateToCancel = 0,
  UnknownOrder = 1,
  BrokerCredit = 2,
  OrderAlreadyInPendingStatus = 3,
  UnableToProcessOrderMassCancelRequest = 4,
  OrigOrdModTime = 5,
  DuplicateClOrdId = 6,
  Other = 99
}

/*
************************************************
* Code to identify reason for order rejection. *
************************************************
*/
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
  IncorrectQuantity = 13,
  IncorrectAllocatedQuantity = 14,
  UnknownAccount = 15,
  Other = 99
}

/*
***************************
* Code to qualify IOI use *
***************************
*/
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

/*
******************************************************
* Identifies party of trade responsible for exchange *
* reporting.                                         *
******************************************************
*/
export enum ReportToExch {
  ReceiverReports = 'Y',
  SenderReports = 'N'
}

/*
**********************************************************
* Indicates whether the broker is to locate the stock in *
* conjunction with a short sell order.                   *
**********************************************************
*/
export enum LocateReqd {
  Yes = 'Y',
  No = 'N'
}

/*
*********************************************************
* Indicates request for forex accommodation trade to be *
* executed along with security transaction.             *
*********************************************************
*/
export enum ForexReq {
  ExecuteForexAfterSecurityTrade = 'Y',
  DoNotExecuteForexAfterSecurityTrade = 'N'
}

/*
************************************************************
* Indicates that the Sequence Reset message is replacing   *
* administrative or application messages which will not be *
* resent.                                                  *
************************************************************
*/
export enum GapFillFlag {
  GapFillMessage = 'Y',
  SequenceReset = 'N'
}

/*
**********************************
* Reason for execution rejection *
**********************************
*/
export enum DKReason {
  UnknownSymbol = 'A',
  WrongSide = 'B',
  QuantityExceedsOrder = 'C',
  NoMatchingOrder = 'D',
  PriceExceedsLimit = 'E',
  CalculationDifference = 'F',
  Other = 'Z'
}

/*
****************************************************************
* Indicates that IOI is the result of an existing agency order *
* or a facilitation position resulting from an agency order,   *
* not from principal trading or order solicitation activity.   *
****************************************************************
*/
export enum IOINaturalFlag {
  Natural = 'Y',
  NotNatural = 'N'
}

/*
***************************************
* Indicates type of miscellaneous fee *
***************************************
*/
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

/*
***********************************************************
* Indicates that the both sides of the FIX session should *
* reset sequence numbers.                                 *
***********************************************************
*/
export enum ResetSeqNumFlag {
  Yes = 'Y',
  No = 'N'
}

/*
***************************************************************
* Describes the specific ExecutionRpt (i.e. Pending Cancel)   *
* while OrdStatus (39) will always identify the current order *
* status (i.e. Partially Filled)                              *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
*/
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
  OrderStatus = 'I'
}

/*
***********************************************************
* Specifies whether or not SettlCurrFxRate (55) should be *
* multiplied or divided                                   *
***********************************************************
*/
export enum SettlCurrFxRateCalc {
  Multiply = 'M',
  Divide = 'D'
}

/*
***************************************************************
* Indicates mode used for Settlement Instructions message.    *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
*/
export enum SettlInstMode {
  StandingInstructionsProvided = '1',
  SpecificOrderForASingleAccount = '4',
  RequestReject = '5'
}

/*
****************************************************
* Settlement Instructions message transaction type *
****************************************************
*/
export enum SettlInstTransType {
  New = 'N',
  Cancel = 'C',
  Replace = 'R',
  Restate = 'T'
}

/*
***********************************************
* Indicates source of Settlement Instructions *
***********************************************
*/
export enum SettlInstSource {
  BrokerCredit = '1',
  Institution = '2',
  Investor = '3'
}

/*
***************************************************************
* Indicates type of security. See also the Product (460) and  *
* CFICode (46) fields. It is recommended that CFICode be used *
* instead of SecurityType for non-Fixed Income instruments.   *
* Example values (grouped by Product field value) (Note:      *
* additional values may be used by mutual agreement of the    *
* counterparties):                                            *
* * Identify the Issuer in the "Issuer" field(06)             *
* *** REPLACED values - See "Replaced Features and Supported  *
* Approach" ***                                               *
* NOTE: Additional values may be used by mutual agreement of  *
* the counterparties)                                         *
***************************************************************
*/
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
  UsTreasuryNoteOld = 'UST',
  UsTreasuryBillOld = 'USTB',
  UsTreasuryNote = 'TNOTE',
  UsTreasuryBill = 'TBILL',
  Repurchase = 'REPO',
  Forward = 'FORWARD',
  BuySellback = 'BUYSELL',
  SecuritiesLoan = 'SECLOAN',
  SecuritiesPledge = 'SECPLEDGE',
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
  Corp = 'CMBS',
  CollateralizedMortgageObligation = 'CMO',
  IoetteMortgage = 'IET',
  MortgageBackedSecurities = 'MBS',
  MortgageInterestOnly = 'MIO',
  MortgagePrincipalOnly = 'MPO',
  MortgagePrivatePlacement = 'MPP',
  MiscellaneousPassThrough = 'MPT',
  Pfandbriefe = 'PFAND',
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
  TaxRevenueAnticipationNote = 'TRAN',
  VariableRateDemandNote = 'VRDN',
  Warrant = 'WAR',
  MutualFund = 'MF',
  MultilegInstrument = 'MLEG',
  NoSecurityType = 'NONE'
}

/*
*****************************************************
* Identifies the Standing Instruction database used *
*****************************************************
*/
export enum StandInstDbType {
  Other = 0,
  Dtcsid = 1,
  ThomsonAlert = 2,
  AGlobalCustodian = 3,
  AccountNet = 4
}

/*
*********************************
* Identifies type of settlement *
*********************************
*/
export enum SettlDeliveryType {
  Versus = 0,
  Free = 1,
  TriParty = 2,
  HoldInCustody = 3
}

/*
**************************************************************
* Identifies the type of Allocation linkage when AllocLinkID *
* (96) is used.                                              *
**************************************************************
*/
export enum AllocLinkType {
  FxNetting = 0,
  FxSwap = 1
}

/*
****************************************************
* Indicates whether an Option is for a put or call *
****************************************************
*/
export enum PutOrCall {
  Put = 0,
  Call = 1
}

/*
*************************************************
* Used for derivative products, such as options *
*************************************************
*/
export enum CoveredOrUncovered {
  Covered = 0,
  Uncovered = 1
}

/*
**************************************************************
* Indicates whether or not details should be communicated to *
* BrokerOfCredit (i.e. step-in broker).                      *
**************************************************************
*/
export enum NotifyBrokerOfCredit {
  DetailsShouldBeCommunicated = 'Y',
  DetailsShouldNotBeCommunicated = 'N'
}

/*
***************************************************************
* Indicates how the receiver (i.e. third party) of Allocation *
* message should handle/process the account details           *
***************************************************************
*/
export enum AllocHandlInst {
  Match = 1,
  Forward = 2,
  ForwardAndMatch = 3
}

/*
**************************************************
* Indicates the type of RoutingID (27) specified *
**************************************************
*/
export enum RoutingType {
  TargetFirm = 1,
  TargetList = 2,
  BlockFirm = 3,
  BlockList = 4
}

/*
***********************
* Type of Stipulation *
***********************
*/
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
  MinimumQuantity = 'MINQTY',
  MinimumIncrement = 'MININCR',
  MinimumDenomination = 'MINDNOM',
  PaymentFrequency = 'PAYFREQ',
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
  YieldRange = 'YIELD'
}

/*
*****************
* Type of yield *
*****************
*/
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
  GvntEquivalentYield = 'GOVTEQUIV',
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

/*
***********************************************************
* Driver and part of trade in the event that the Security *
* Master file was wrong at the point of entry             *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)  *
***********************************************************
*/
export enum TradedFlatSwitch {
  TradedFlat = 'Y',
  NotTradedFlat = 'N'
}

/*
*****************************
* Subscription Request Type *
*****************************
*/
export enum SubscriptionRequestType {
  Snapshot = '0',
  SnapshotAndUpdates = '1',
  DisablePreviousSnapshot = '2'
}

/*
********************************************
* Specifies the type of Market Data update *
********************************************
*/
export enum MDUpdateType {
  FullRefresh = 0,
  IncrementalRefresh = 1
}

/*
***************************************************************
* Specifies whether or not book entries should be aggregated. *
***************************************************************
*/
export enum AggregatedBook {
  BookEntriesToBeAggregated = 'Y',
  BookEntriesShouldNotBeAggregated = 'N'
}

/*
**************************
* Type Market Data entry *
**************************
*/
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

/*
***************************
* Direction of the "tick" *
***************************
*/
export enum TickDirection {
  PlusTick = '0',
  ZeroPlusTick = '1',
  MinusTick = '2',
  ZeroMinusTick = '3'
}

/*
*********************************************************
* Space-delimited list of conditions describing a quote *
*********************************************************
*/
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

/*
*********************************************************
* Space-delimited list of conditions describing a trade *
*********************************************************
*/
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

/*
*************************************
* Type of Market Data update action *
*************************************
*/
export enum MDUpdateAction {
  New = '0',
  Change = '1',
  Delete = '2'
}

/*
*****************************************************
* Reason for the rejection of a Market Data request *
*****************************************************
*/
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
  UnsupportedMdImplicitDelete = 'C'
}

/*
***********************
* Reason for deletion *
***********************
*/
export enum DeleteReason {
  Cancellation = '0',
  Error = '1'
}

/*
**************************************************
* Flag that identifies a market data entry       *
* (Prior to FIX 4.3 this field was of type char) *
**************************************************
*/
export enum OpenCloseSettlFlag {
  DailyOpen = '0',
  SessionOpen = '1',
  DeliverySettlementEntry = '2',
  ExpectedEntry = '3',
  EntryFromPreviousBusinessDay = '4',
  TheoreticalPriceValue = '5'
}

/*
****************************************
* Identifies a firms financial status *
****************************************
*/
export enum FinancialStatus {
  Bankrupt = '1',
  PendingDelisting = '2'
}

/*
*******************************************
* Identifies the type of Corporate Action *
*******************************************
*/
export enum CorporateAction {
  ExDividend = 'A',
  ExDistribution = 'B',
  ExRights = 'C',
  New = 'D',
  ExInterest = 'E'
}

/*
******************************************************
* Identifies the status of the quote acknowledgement *
******************************************************
*/
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
  CanceledDueToCrossMarket = 15
}

/*
****************************************
* Identifies the type of quote cancel. *
****************************************
*/
export enum QuoteCancelType {
  CancelForOneOrMoreSecurities = 1,
  CancelForSecurityType = 2,
  CancelForUnderlyingSecurity = 3,
  CancelAllQuotes = 4
}

/*
*****************************
* Reason Quote was rejected *
*****************************
*/
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
  Other = 99
}

/*
****************************************************************
* Level of Response requested from receiver of quote messages. *
****************************************************************
*/
export enum QuoteResponseLevel {
  NoAcknowledgement = 0,
  AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
  AcknowledgeEachQuoteMessage = 2
}

/*
*******************************************************
* Indicates the type of Quote Request being generated *
*******************************************************
*/
export enum QuoteRequestType {
  Manual = 1,
  Automatic = 2
}

/*
****************************************
* Type of Security Definition Request. *
****************************************
*/
export enum SecurityRequestType {
  RequestSecurityIdentityAndSpecifications = 0,
  RequestSecurityIdentityForSpecifications = 1,
  RequestListSecurityTypes = 2,
  RequestListSecurities = 3
}

/*
************************************************
* Type of Security Definition message response *
************************************************
*/
export enum SecurityResponseType {
  AcceptAsIs = 1,
  AcceptWithRevisions = 2,
  RejectSecurityProposal = 5,
  CannotMatchSelectionCriteria = 6
}

/*
**************************************************************
* Indicates whether or not message is being sent as a result *
* of a subscription request or not.                          *
**************************************************************
*/
export enum UnsolicitedIndicator {
  MessageIsBeingSentUnsolicited = 'Y',
  MessageIsBeingSentAsAResultOfAPriorRequest = 'N'
}

/*
***************************************************************
* Identifies the trading status applicable to the transaction *
***************************************************************
*/
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
  FastMarket = 23
}

/*
************************************************************
* Denotes the reason for the Opening Delay or Trading Halt *
************************************************************
*/
export enum HaltReason {
  OrderImbalance = 'I',
  EquipmentChangeover = 'X',
  NewsPending = 'P',
  NewsDissemination = 'D',
  OrderInflux = 'E',
  AdditionalInformation = 'M'
}

/*
*************************************************************
* Indicates whether or not the halt was due to Common Stock *
* trading being halted.                                     *
*************************************************************
*/
export enum InViewOfCommon {
  HaltWasDueToCommonStockBeingHalted = 'Y',
  HaltWasNotRelatedToAHaltOfTheCommonStock = 'N'
}

/*
************************************************************
* Indicates whether or not the halt was due to the Related *
* Security being halted.                                   *
************************************************************
*/
export enum DueToRelated {
  RelatedToSecurityHalt = 'Y',
  NotRelatedToSecurityHalt = 'N'
}

/*
*************************************
* Identifies the type of adjustment *
*************************************
*/
export enum Adjustment {
  Cancel = 1,
  Error = 2,
  Correction = 3
}

/*
*********************
* Method of trading *
*********************
*/
export enum TradSesMethod {
  Electronic = 1,
  OpenOutcry = 2,
  TwoParty = 3
}

/*
************************
* Trading Session Mode *
************************
*/
export enum TradSesMode {
  Testing = 1,
  Simulated = 2,
  Production = 3
}

/*
********************************
* State of the trading session *
********************************
*/
export enum TradSesStatus {
  Unknown = 0,
  Halted = 1,
  Open = 2,
  Closed = 3,
  PreOpen = 4,
  PreClose = 5,
  RequestRejected = 6
}

/*
*****************************************************
* Type of message encoding (non-ASCII (non-English) *
* characters) used in a messages "Encoded" fields. *
*****************************************************
*/
export enum MessageEncoding {
  Iso2022Jp = 'ISO-2022-JP',
  Eucjp = 'EUC-JP',
  ShiftJis = 'Shift_JIS',
  Utf8 = 'UTF-8'
}

/*
**************************************************************
* Code to identify reason for a session-level Reject message *
**************************************************************
*/
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
  Non = 17,
  Other = 99
}

/*
*******************************************
* Identifies the Bid Request message type *
*******************************************
*/
export enum BidRequestTransType {
  New = 'N',
  Cancel = 'C'
}

/*
*****************************************************
* Indicates whether or not the order was solicited. *
*****************************************************
*/
export enum SolicitedFlag {
  WasSolicited = 'Y',
  WasNotSolicited = 'N'
}

/*
************************************************************
* Code to identify reason for an ExecutionRpt message sent *
* with ExecType=Restated or used when communicating an     *
* unsolicited cancel.                                      *
************************************************************
*/
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
  Other = 99
}

/*
*********************************************************
* Code to identify reason for a Business Message Reject *
* message                                               *
*********************************************************
*/
export enum BusinessRejectReason {
  Other = 0,
  UnknownId = 1,
  UnknownSecurity = 2,
  UnsupportedMessageType = 3,
  ApplicationNotAvailable = 4,
  ConditionallyRequiredFieldMissing = 5,
  NotAuthorized = 6,
  DeliverToFirmNotAvailableAtThisTime = 7
}

/*
*******************************************
* Specifies the direction of the messsage *
*******************************************
*/
export enum MsgDirection {
  Send = 'S',
  Receive = 'R'
}

/*
***************************************************************
* Code to identify the price a DiscretionOffsetValue (389) is *
* related to and should be mathematically added to            *
***************************************************************
*/
export enum DiscretionInst {
  RelatedToDisplayedPrice = '0',
  RelatedToMarketPrice = '1',
  RelatedToPrimaryPrice = '2',
  RelatedToLocalPrimaryPrice = '3',
  RelatedToMidpointPrice = '4',
  RelatedToLastTradePrice = '5',
  RelatedToVwap = '6'
}

/*
********************************************
* Code to identify the type of Bid Request *
********************************************
*/
export enum BidType {
  NonDisclosed = 1,
  Disclosed = 2,
  NoBiddingProcess = 3
}

/*
****************************************************
* Code to identify the type of BidDescriptor (400) *
****************************************************
*/
export enum BidDescriptorType {
  Sector = 1,
  Country = 2,
  Index = 3
}

/*
***************************************************************
* Code to identify which "SideValue" the value refers to.     *
* SideValue and SideValue2 are used as opposed to Buy or Sell *
* so that the basket can be quoted either way as Buy or Sell. *
***************************************************************
*/
export enum SideValueInd {
  SideValue1 = 1,
  SideValue2 = 2
}

/*
****************************************************
* Code to identify the type of liquidity indicator *
****************************************************
*/
export enum LiquidityIndType {
  FiveDayMovingAverage = 1,
  TwentyDayMovingAverage = 2,
  NormalMarketSize = 3,
  Other = 4
}

/*
******************************************************
* Indicates whether or not to exchange for phsyical. *
******************************************************
*/
export enum ExchangeForPhysical {
  True = 'Y',
  False = 'N'
}

/*
**************************************************************
* Code to identify the desired frequency of progress reports *
**************************************************************
*/
export enum ProgRptReqs {
  BuySideRequests = 1,
  SellSideSends = 2,
  RealTimeExecutionReports = 3
}

/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross                                                        *
****************************************************************
*/
export enum IncTaxInd {
  Net = 1,
  Gross = 2
}

/*
***************************************
* Code to represent the type of trade *
***************************************
*/
export enum BidTradeType {
  RiskTrade = 'R',
  VwapGuarantee = 'G',
  Agency = 'A',
  GuaranteedClose = 'J'
}

/*
******************************************
* Code to represent the basis price type *
******************************************
*/
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

/*
************************************
* Code to represent the price type *
************************************
*/
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
  VariableCabinetTradePrice = 11
}

/*
********************************************************
* Code to identify whether to book out executions on a *
* part-filled GT order on the day of execution or to   *
* accumulate                                           *
********************************************************
*/
export enum GTBookingInst {
  BookOutAllTradesOnDayOfExecution = 0,
  AccumulateUntilFilledOrExpired = 1,
  AccumulateUntilVerballlyNotifiedOtherwise = 2
}

/*
*************************************
* Code to represent the status type *
*************************************
*/
export enum ListStatusType {
  Ack = 1,
  Response = 2,
  Timed = 3,
  ExecStarted = 4,
  AllDone = 5,
  Alert = 6
}

/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross                                                        *
****************************************************************
*/
export enum NetGrossInd {
  Net = 1,
  Gross = 2
}

/*
************************************************
* Code to represent the status of a list order *
************************************************
*/
export enum ListOrderStatus {
  InBiddingProcess = 1,
  ReceivedForExecution = 2,
  Executing = 3,
  Cancelling = 4,
  Alert = 5,
  AllDone = 6,
  Reject = 7
}

/*
********************************************
* Identifies the type of ListExecInst (69) *
********************************************
*/
export enum ListExecInstType {
  Immediate = '1',
  WaitForInstruction = '2',
  SellDriven = '3',
  BuyDrivenCashTopUp = '4',
  BuyDrivenCashWithdraw = '5'
}

/*
*************************************************************
* Identifies the type of request that a Cancel Reject is in *
* response to                                               *
*************************************************************
*/
export enum CxlRejResponseTo {
  OrderCancelRequest = '1',
  OrderCancel = '2'
}

/*
**************************************************************
* Used to indicate what an Execution Report represents (e.g. *
* used with multi-leg securities, such as option strategies, *
* spreads, etc.).                                            *
**************************************************************
*/
export enum MultiLegReportingType {
  SingleSecurity = '1',
  IndividualLegOfAMultiLegSecurity = '2',
  MultiLegSecurity = '3'
}

/*
*************************************************************
* Identifies class or source of the PartyID (448) value.    *
* Required if PartyID is specified. Note: applicable values *
* depend upon PartyRole (452) specified.                    *
* See "Appendix 6-G  Use of <Parties> Component Block"     *
*************************************************************
*/
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
  Bic = 'B',
  GeneralIdentifier = 'C',
  Proprietary = 'D',
  IsoCountryCode = 'E',
  SettlementEntityLocation = 'F',
  Mic = 'G',
  CsdParticipant = 'H',
  AustralianTaxFileNumber = 'A',
  IsitcAcronym = 'I'
}

/*
***************************************************************
* Identifies the type or role of the PartyID (448) specified. *
* See "Appendix 6-G  Use of <Parties> Component Block"       *
***************************************************************
*/
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
  PositionAccount = 38
}

/*
************************************************************
* Indicates the type of product the security is associated *
* with. See also the CFICode (46) and SecurityType (67)    *
* fields.                                                  *
************************************************************
*/
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

/*
***************************************************************
* Indicates whether or not this FIX Session is a "test" vs.   *
* "production" connection. Useful for preventing "accidents". *
***************************************************************
*/
export enum TestMessageIndicator {
  True = 'Y',
  Fales = 'N'
}

/*
****************************************************************
* Specifies which direction to round For CIV  indicates       *
* whether or not the quantity of shares/units is to be rounded *
* and in which direction where CashOrdQty (52) or (for CIV     *
* only) OrderPercent (56) are specified on an order.           *
* The default is for rounding to be at the discretion of the   *
* executing broker or fund manager.                            *
* e.g. for an order specifying CashOrdQty or OrderPercent if   *
* the calculated number of shares/units was 325.76 and         *
* RoundingModulus (469) was 0  "round down" would give 320    *
* units, "round up" would give 330 units and "round to         *
* nearest" would give 320 units.                               *
****************************************************************
*/
export enum RoundingDirection {
  RoundToNearest = '0',
  RoundDown = '1',
  RoundUp = '2'
}

/*
***************************************************************
* A code identifying the payment method for a (fractional)    *
* distribution.                                               *
* 13 through 998 are reserved for future use                  *
* Values above 000 are available for use by private agreement *
* among counterparties                                        *
***************************************************************
*/
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
  ReinvestInFund = 12
}

/*
******************************************************
* For CIV  A one character code identifying whether *
* Cancellation rights/Cooling off period applies     *
******************************************************
*/
export enum CancellationRights {
  Yes = 'Y',
  NoExecutionOnly = 'N',
  NoWaiverAgreement = 'M',
  NoInstitutional = 'O'
}

/*
************************************************************
* A one character code identifying Money laundering status *
************************************************************
*/
export enum MoneyLaunderingStatus {
  ExemptBelowLimit = '1',
  ExemptMoneyType = '2',
  ExemptAuthorised = '3',
  Passed = 'Y',
  NotChecked = 'N'
}

/*
***************************************************************
* For CIV - Identifies how the execution price LastPx (3) was *
* calculated from the fund unit/share price(s) calculated at  *
* the fund valuation point                                    *
***************************************************************
*/
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

/*
***************************************************************
* A code identifying the Settlement payment method.           *
* 16 through 998 are reserved for future use                  *
* Values above 000 are available for use by private agreement *
* among counterparties                                        *
***************************************************************
*/
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
  HighValueClearingSystem = 15
}

/*
***************************************************************
* For CIV - a code identifying the type of tax exempt account *
* in which purchased shares/units are to be held              *
***************************************************************
*/
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
  EducationIraNonPrototype = 29
}

/*
***********************************************************
* A one character code identifying whether the Fund based *
* renewal commission is to be waived.                     *
***********************************************************
*/
export enum FundRenewWaiv {
  Yes = 'Y',
  No = 'N'
}

/*
**************************************************************
* Registration status as returned by the broker or (for CIV) *
* the fund manager                                           *
**************************************************************
*/
export enum RegistStatus {
  Accepted = 'A',
  Rejected = 'R',
  Held = 'H',
  Reminder = 'N'
}

/*
**************************************************************
* Reason(s) why Registration Instructions has been rejected. *
* The reason may be further amplified in the                 *
* RegistRejReasonCode field.                                 *
* Possible values of reason code include:                    *
**************************************************************
*/
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

/*
*********************************************************
* Identifies Registration Instructions transaction type *
*********************************************************
*/
export enum RegistTransType {
  New = '0',
  Replace = '1',
  Cancel = '2'
}

/*
**************************************************
* The relationship between Registration parties. *
**************************************************
*/
export enum OwnershipType {
  JointTrustees = '2',
  JointInvestors = 'J',
  TenantsInCommon = 'T'
}

/*
**************************************************************
* Type of ContAmtValue (520).                                *
* NOTE That Commission Amount / % in Contract Amounts is the *
* commission actually charged, rather than the commission    *
* instructions given in Fields 2/3.                          *
**************************************************************
*/
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

/*
********************************
* Identifies the type of owner *
********************************
*/
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

/*
***************************************************************
* Designates the capacity of the firm placing the order       *
* (as of FIX 4.3, this field replaced Rule80A (tag 47) --used *
* in conjunction with OrderRestrictions (529) field)          *
* (see Volume : "Glossary" for value definitions)             *
***************************************************************
*/
export enum OrderCapacity {
  Agency = 'A',
  Proprietary = 'G',
  Individual = 'I',
  Principal = 'P',
  RisklessPrincipal = 'R',
  AgentForOtherMember = 'W'
}

/*
***********************************************************
* Restrictions associated with an order. If more than one *
* restriction is applicable to an order, this field can   *
* contain multiple instructions separated by space.       *
***********************************************************
*/
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
  RisklessArbitrage = 'A'
}

/*
************************************************
* Specifies scope of Order Mass Cancel Request *
************************************************
*/
export enum MassCancelRequestType {
  CancelOrdersForASecurity = '1',
  CancelOrdersForAnUnderlyingSecurity = '2',
  CancelOrdersForAProduct = '3',
  CancelOrdersForAcfiCode = '4',
  CancelOrdersForASecurityType = '5',
  CancelOrdersForATradingSession = '6',
  CancelAllOrders = '7'
}

/*
*************************************************************
* Specifies the action taken by counterparty order handling *
* system as a result of the Order Mass Cancel Request       *
*************************************************************
*/
export enum MassCancelResponse {
  CancelRequestRejected = '0',
  CancelOrdersForASecurity = '1',
  CancelOrdersForAnUnderlyingSecurity = '2',
  CancelOrdersForAProduct = '3',
  CancelOrdersForAcfiCode = '4',
  CancelOrdersForASecurityType = '5',
  CancelOrdersForATradingSession = '6',
  CancelAllOrders = '7'
}

/*
*************************************************
* Reason Order Mass Cancel Request was rejected *
*************************************************
*/
export enum MassCancelRejectReason {
  MassCancelNotSupported = '0',
  InvalidOrUnknownSecurity = '1',
  InvalidOrUnkownUnderlyingSecurity = '2',
  InvalidOrUnknownProduct = '3',
  InvalidOrUnknownCfiCode = '4',
  InvalidOrUnknownSecurityType = '5',
  InvalidOrUnknownTradingSession = '6',
  Other = '99'
}

/*
****************************************************************
* Identifies the type of quote.                                *
* An indicative quote is used to inform a counterparty of a    *
* market. An indicative quote does not result directly in a    *
* trade.                                                       *
* A tradeable quote is submitted to a market and will result   *
* directly in a trade against other orders and quotes in a     *
* market.                                                      *
* A restricted tradeable quote is submitted to a market and    *
* within a certain restriction (possibly based upon price or   *
* quantity) will automatically trade against orders. Order     *
* that do not comply with restrictions are sent to the quote   *
* issuer who can choose to accept or decline the order.        *
* A counter quote is used in the negotiation model. See Volume *
* 7  Product: Fixed Income for example usage.                 *
****************************************************************
*/
export enum QuoteType {
  Indicative = 0,
  Tradeable = 1,
  RestrictedTradeable = 2,
  Counter = 3
}

/*
****************************************************************
* Identifies whether an order is a margin order or a           *
* non-margin order. This is primarily used when sending orders *
* to Japanese exchanges to indicate sell margin or buy to      *
* cover. The same tag could be assigned also by buy-side to    *
* indicate the intent to sell or buy margin and the sell-side  *
* to accept or reject (base on some validation criteria) the   *
* margin request.                                              *
****************************************************************
*/
export enum CashMargin {
  Cash = '1',
  MarginOpen = '2',
  MarginClose = '3'
}

/*
***************************************
* Defines the scope of a data element *
***************************************
*/
export enum Scope {
  LocalMarket = '1',
  National = '2',
  Global = '3'
}

/*
************************************************************
* Defines how a server handles distribution of a truncated *
* book. Defaults to broker option.                         *
************************************************************
*/
export enum MDImplicitDelete {
  Yes = 'Y',
  No = 'N'
}

/*
*********************************************
* Type of cross being submitted to a market *
*********************************************
*/
export enum CrossType {
  CrossAon = 1,
  CrossIoc = 2,
  CrossOneSide = 3,
  CrossSamePrice = 4
}

/*
**************************************************************
* Indicates if one side or the other of a cross order should *
* be prioritized.                                            *
* The definition of prioritization is left to the market. In *
* some markets prioritization means which side of the cross  *
* order is applied to the market first. In other markets    *
* prioritization may mean that the prioritized side is fully *
* executed (sometimes referred to as the side being          *
* protected).                                                *
**************************************************************
*/
export enum CrossPrioritization {
  None = 0,
  BuySideIsPrioritized = 1,
  SellSideIsPrioritized = 2
}

/*
*********************************************
* Number of Side repeating group instances. *
*********************************************
*/
export enum NoSides {
  OneSide = 1,
  BothSides = 2
}

/*
*********************************************************
* Identifies the type/criteria of Security List Request *
*********************************************************
*/
export enum SecurityListRequestType {
  Symbol = 0,
  SecurityTypeAnd = 1,
  Product = 2,
  TradingSessionId = 3,
  AllSecurities = 4
}

/*
******************************************************
* The results returned to a Security Request message *
******************************************************
*/
export enum SecurityRequestResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoInstrumentsFound = 2,
  NotAuthorizedToRetrieveInstrumentData = 3,
  InstrumentDataTemporarilyUnavailable = 4,
  RequestForInstrumentDataNotSupported = 5
}

/*
************************************************************
* Indicates the method of execution reporting requested by *
* issuer of the order                                      *
************************************************************
*/
export enum MultiLegRptTypeReq {
  ReportByMulitlegSecurityOnly = 0,
  ReportByMultilegSecurityAndInstrumentLegs = 1,
  ReportByInstrumentLegsOnly = 2
}

/*
*************************************************************
* Indicates the reason a Trading Session Status Request was *
* rejected                                                  *
*************************************************************
*/
export enum TradSesStatusRejReason {
  UnknownOrInvalidTradingSessionId = 1,
  Other = 99
}

/*
********************************
* Type of Trade Capture Report *
********************************
*/
export enum TradeRequestType {
  AllTrades = 0,
  MatchedTradesMatchingCriteria = 1,
  UnmatchedTradesThatMatchCriteria = 2,
  UnreportedTradesThatMatchCriteria = 3,
  AdvisoriesThatMatchCriteria = 4
}

/*
********************************************************
* Indicates if the trade capture report was previously *
* reported to the counterparty                         *
********************************************************
*/
export enum PreviouslyReported {
  PerviouslyReportedToCounterparty = 'Y',
  NotReportedToCounterparty = 'N'
}

/*
********************************************************
* The status of this trade with respect to matching or *
* comparison                                           *
********************************************************
*/
export enum MatchStatus {
  Compared = '0',
  Uncompared = '1',
  AdvisoryOrAlert = '2'
}

/*
*************************************************************
* The point in the matching process at which this trade was *
* matched                                                   *
*************************************************************
*/
export enum MatchType {
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
  OcsLockedIn = 'MT',
  ActAcceptedTrade = 'M3',
  ActDefaultTrade = 'M4',
  ActDefaultAfterM2 = 'M5',
  Actm6Match = 'M6'
}

/*
*********************************************
* This trade is to be treated as an odd lot *
*********************************************
*/
export enum OddLot {
  TreatAsOddLot = 'Y',
  TreatAsRoundLot = 'N'
}

/*
******************************************************
* Eligibility of this trade for clearing and central *
* counterparty processing                            *
******************************************************
*/
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
  SelfClearing = 13
}

/*
********************************************
* Type of account associated with an order *
********************************************
*/
export enum AccountType {
  CarriedCustomerSide = 1,
  CarriedNonCustomerSide = 2,
  HouseTrader = 3,
  FloorTrader = 4,
  CarriedNonCustomerSideCrossMargined = 6,
  HouseTraderCrossMargined = 7,
  JointBackOfficeAccount = 8
}

/*
***************************************************************
* Capacity of customer placing the order                      *
* Primarily used by futures exchanges to indicate the CTICode *
* (customer type indicator) as required by the US CFTC        *
* (Commodity Futures Trading Commission).                     *
***************************************************************
*/
export enum CustOrderCapacity {
  MemberTradingForTheirOwnAccount = 1,
  ClearingFirmTradingForItsProprietaryAccount = 2,
  MemberTradingForAnotherMember = 3,
  AllOther = 4
}

/*
****************************
* Mass Status Request Type *
****************************
*/
export enum MassStatusReqType {
  StatusForOrdersForASecurity = 1,
  StatusForOrdersForAnUnderlyingSecurity = 2,
  StatusForOrdersForAProduct = 3,
  StatusForOrdersForAcfiCode = 4,
  StatusForOrdersForASecurityType = 5,
  StatusForOrdersForATradingSession = 6,
  StatusForAllOrders = 7,
  StatusForOrdersForAPartyId = 8
}

/*
*********************************************************
* Indicates whether or not automatic booking can occur. *
*********************************************************
*/
export enum DayBookingInst {
  Auto = '0',
  SpeakWithOrderInitiatorBeforeBooking = '1',
  Accumulate = '2'
}

/*
***********************************************
* Indicates what constitutes a bookable unit. *
***********************************************
*/
export enum BookingUnit {
  EachPartialExecutionIsABookableUnit = '0',
  AggregatePartialExecutionsOnThisOrder = '1',
  AggregateExecutionsForThisSymbol = '2'
}

/*
******************************************
* Indicates the method of preallocation. *
******************************************
*/
export enum PreallocMethod {
  ProRata = '0',
  DoNotProRata = '1'
}

/*
***********************************************************
* Describes the specific type or purpose of an Allocation *
* message (i.e. "Buyside Calculated")                     *
***********************************************************
*/
export enum AllocType {
  Calculated = 1,
  Preliminary = 2,
  ReadyToBook = 5,
  WarehouseInstruction = 7,
  RequestToIntermediary = 8
}

/*
************************************************************
* Indicates type of fee being assessed of the customer for *
* trade executions at an exchange. Applicable for futures  *
* markets only at this time.                               *
* (Values source CBOT, CME, NYBOT, and NYMEX):             *
************************************************************
*/
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

/*
****************************************************************
* Indicates if the order is currently being worked. Applicable *
* only for OrdStatus = "New". For open outcry markets this     *
* indicates that the order is being worked in the crowd. For   *
* electronic markets it indicates that the order has           *
* transitioned from a contingent order to a market order.      *
****************************************************************
*/
export enum WorkingIndicator {
  Working = 'Y',
  NotWorking = 'N'
}

/*
*************************************************************
* Indicates if a Cancel/Replace has caused an order to lose *
* book priority                                             *
*************************************************************
*/
export enum PriorityIndicator {
  PriorityUnchanged = 0,
  LostPriorityAsResultOfOrderChange = 1
}

/*
************************************************************
* Indicates that this message is to serve as the final and *
* legal confirmation.                                      *
************************************************************
*/
export enum LegalConfirm {
  LegalConfirm = 'Y',
  DoesNotConsituteALegalConfirm = 'N'
}

/*
******************************
* Reason Quote was rejected: *
******************************
*/
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

/*
****************************************************************
* Used to identify the source of the Account (1) code. This is *
* especially useful if the account is a new account that the   *
* Respondent may not have setup yet in their system.           *
****************************************************************
*/
export enum AcctIDSource {
  Bic = 1,
  SidCode = 2,
  Tfm = 3,
  Omgeo = 4,
  DtccCode = 5,
  Other = 99
}

/*
**********************************************
* Identifies the status of the Confirmation. *
**********************************************
*/
export enum ConfirmStatus {
  Received = 1,
  MismatchedAccount = 2,
  MissingSettlementInstructions = 3,
  Confirmed = 4,
  RequestRejected = 5
}

/*
************************************************
* Identifies the Confirmation transaction type *
************************************************
*/
export enum ConfirmTransType {
  New = 0,
  Replace = 1,
  Cancel = 2
}

/*
***********************************
* Identifies the form of delivery *
***********************************
*/
export enum DeliveryForm {
  BookEntry = 1,
  Bearer = 2
}

/*
**************************************************************
* For Fixed Income, used instead of LegQty (687) or          *
* LegOrderQty (685) to requests the respondent to calculate  *
* the quantity based on the quantity on the opposite side of *
* the swap.                                                  *
**************************************************************
*/
export enum LegSwapType {
  ParForPar = 1,
  ModifiedDuration = 2,
  Risk = 4,
  Proceeds = 5
}

/*
***************************************************
* Code to represent price type requested in Quote *
***************************************************
*/
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
  Yield = 10
}

/*
*****************************************
* Identifies the type of Quote Response *
*****************************************
*/
export enum QuoteRespType {
  Hit = 1,
  Counter = 2,
  Expired = 3,
  Cover = 4,
  DoneAway = 5,
  Pass = 6
}

/*
****************************************************************
* Used to identify the type of quantity that is being returned *
****************************************************************
*/
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

/*
***************************
* Status of this position *
***************************
*/
export enum PosQtyStatus {
  Submitted = 0,
  Accepted = 1,
  Rejected = 2
}

/*
***************************
* Type of Position amount *
***************************
*/
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

/*
***********************************************
* Identifies the type of position transaction *
***********************************************
*/
export enum PosTransType {
  Exercise = 1,
  DoNotExercise = 2,
  PositionAdjustment = 3,
  PositionChangeSubmission = 4,
  Pledge = 5
}

/*
**************************************
* Maintenance Action to be performed *
**************************************
*/
export enum PosMaintAction {
  New = 1,
  Replace = 2,
  Cancel = 3
}

/*
********************************************
* Identifies a specific settlement session *
********************************************
*/
export enum SettlSessID {
  Intraday = 'ITD',
  RegularTradingHours = 'RTH',
  ElectronicTradingHours = 'ETH'
}

/*
********************************************************
* Type of adjustment to be applied, used for PCS & PAJ *
********************************************************
*/
export enum AdjustmentType {
  ProcessRequestAsMarginDisposition = 0,
  DeltaPlus = 1,
  DeltaMinus = 2,
  Final = 3
}

/*
******************************************
* Status of Position Maintenance Request *
******************************************
*/
export enum PosMaintStatus {
  Accepted = 0,
  AcceptedWithWarnings = 1,
  Rejected = 2,
  Completed = 3,
  CompletedWithWarnings = 4
}

/*
*******************************************
* Result of Position Maintenance Request. *
*******************************************
*/
export enum PosMaintResult {
  SuccessfulCompletion = 0,
  Rejected = 1,
  Other = 99
}

/*
*************************************************************
* Unique identifier for the position maintenance request as *
* assigned by the submitter                                 *
*************************************************************
*/
export enum PosReqType {
  Positions = 0,
  Trades = 1,
  Exercises = 2,
  Assignments = 3
}

/*
********************************************************
* Identifies how the response to the request should be *
* transmitted                                          *
********************************************************
*/
export enum ResponseTransportType {
  Inband = 0,
  OutOfBand = 1
}

/*
*************************************************************
* Result of Request for Position                            *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
export enum PosReqResult {
  ValidRequest = 0,
  InvalidOrUnsupportedRequest = 1,
  NoPositionsFoundThatMatchCriteria = 2,
  NotAuthorizedToRequestPositions = 3,
  RequestForPositionNotSupported = 4,
  Other = 99
}

/*
***********************************
* Status of Request for Positions *
***********************************
*/
export enum PosReqStatus {
  Completed = 0,
  CompletedWithWarnings = 1,
  Rejected = 2
}

/*
****************************
* Type of settlement price *
****************************
*/
export enum SettlPriceType {
  Final = 1,
  Theoretical = 2
}

/*
***********************************************
* Method under which assignment was conducted *
***********************************************
*/
export enum AssignmentMethod {
  Random = 'R',
  ProRata = 'P'
}

/*
****************************************************
* Exercise Method used to in performing assignment *
****************************************************
*/
export enum ExerciseMethod {
  Automatic = 'A',
  Manual = 'M'
}

/*
*************************************************************
* Result of Trade Request                                   *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
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

/*
****************************
* Status of Trade Request. *
****************************
*/
export enum TradeRequestStatus {
  Accepted = 0,
  Completed = 1,
  Rejected = 2
}

/*
*************************************************************
* Reason Trade Capture Request was rejected.                *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
export enum TradeReportRejectReason {
  Successful = 0,
  InvalidPartyOnformation = 1,
  UnknownInstrument = 2,
  UnauthorizedToReportTrades = 3,
  InvalidTradeType = 4,
  Other = 99
}

/*
****************************************************************
* Used to indicate if the side being reported on Trade Capture *
* Report represents a leg of a multileg instrument or a single *
* security                                                     *
****************************************************************
*/
export enum SideMultiLegReportingType {
  SingleSecurity = 1,
  IndividualLegOfAMultilegSecurity = 2,
  MultilegSecurity = 3
}

/*
************************************************************
* Traded / Regulatory timestamp type                       *
* Note of Applicability: values are required in US futures *
* markets by the CFTC to support computerized trade        *
* reconstruction.                                          *
* (see Volume : "Glossary" for value definitions)          *
************************************************************
*/
export enum TrdRegTimestampType {
  ExecutionTime = 1,
  TimeIn = 2,
  TimeOut = 3,
  BrokerReceipt = 4,
  BrokerExecution = 5
}

/*
**********************************************************
* Identifies the type of Confirmation message being sent *
**********************************************************
*/
export enum ConfirmType {
  Status = 1,
  Confirmation = 2,
  ConfirmationRequestRejected = 3
}

/*
******************************************************
* Identifies the reason for rejecting a Confirmation *
******************************************************
*/
export enum ConfirmRejReason {
  MismatchedAccount = 1,
  MissingSettlementInstructions = 2,
  Other = 99
}

/*
**************************************************************
* Method for booking out this order. Used when notifying a   *
* broker that an order to be settled by that broker is to be *
* booked out as an OTC derivative (e.g. CFD or similar).     *
**************************************************************
*/
export enum BookingType {
  RegularBooking = 0,
  Cfd = 1,
  TotalReturnSwap = 2
}

/*
**************************************************************
* Used to indicate whether settlement instructions are       *
* provided on an allocation instruction message, and if not, *
* how they are to be derived                                 *
**************************************************************
*/
export enum AllocSettlInstType {
  UseDefaultInstructions = 0,
  DeriveFromParametersProvided = 1,
  FullDetailsProvided = 2,
  SsidbiDsProvided = 3,
  PhoneForInstructions = 4
}

/*
***************************************************************
* Used to indicate whether a delivery instruction is used for *
* securities or cash settlement                               *
***************************************************************
*/
export enum DlvyInstType {
  Securities = 'S',
  Cash = 'C'
}

/*
*********************************
* Type of financing termination *
*********************************
*/
export enum TerminationType {
  Overnight = 1,
  Term = 2,
  Flexible = 3,
  Open = 4
}

/*
****************************************************************
* Identifies reason for rejection (of a settlement instruction *
* request message)                                             *
****************************************************************
*/
export enum SettlInstReqRejCode {
  UnableToProcessRequest = 0,
  UnknownAccount = 1,
  NoMatchingSettlementInstructionsFound = 2,
  Other = 99
}

/*
***********************************************************
* Describes the specific type or purpose of an Allocation *
* Report message                                          *
***********************************************************
*/
export enum AllocReportType {
  SellsideCalculatedUsingPreliminary = 3,
  SellsideCalculatedWithoutPreliminary = 4,
  WarehouseRecap = 5,
  RequestToIntermediary = 8
}

/*
****************************************************************
* Reason for cancelling or replacing an Allocation Instruction *
* or Allocation Report message                                 *
****************************************************************
*/
export enum AllocCancReplaceReason {
  OriginalDetailsIncomplete = 1,
  ChangeInUnderlyingOrderDetails = 2,
  Other = 99
}

/*
***********************************************************
* Type of account associated with a confirmation or other *
* trade-level message                                     *
***********************************************************
*/
export enum AllocAccountType {
  CarriedCustomerSide = 1,
  CarriedNonCustomerSide = 2,
  HouseTrader = 3,
  FloorTrader = 4,
  CarriedNonCustomerSideCrossMargined = 6,
  HouseTraderCrossMargined = 7,
  JointBackOfficeAccount = 8
}

/*
***************************************************************
* Type of PartySubID (523) value                              *
* 4000+ = Reserved and available for bi-laterally agreed upon *
* user defined values                                         *
***************************************************************
*/
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
  PositionAccountType = 26
}

/*
***************************************************************
* Response to allocation to be communicated to a counterparty *
* through an intermediary, i.e. clearing house. Used in       *
* conjunction with AllocType = "Request to Intermediary" and  *
* AllocReportType = "Request to Intermediary"                 *
***************************************************************
*/
export enum AllocIntermedReqType {
  PendingAccept = 1,
  PendingRelease = 2,
  PendingReversal = 3,
  Accept = 4,
  BlockLevelReject = 5,
  AccountLevelReject = 6
}

/*
**************************************************************
* Resolution taken when ApplQueueDepth (813) exceeds         *
* ApplQueueMax (812) or system specified maximum queue size. *
**************************************************************
*/
export enum ApplQueueResolution {
  NoActionTaken = 0,
  QueueFlushed = 1,
  OverlayLast = 2,
  EndSession = 3
}

/*
**********************************************************
* Action to take to resolve an application message queue *
* (backlog).                                             *
**********************************************************
*/
export enum ApplQueueAction {
  NoActionTaken = 0,
  QueueFlushed = 1,
  OverlayLast = 2,
  EndSession = 3
}

/*
*****************************
* Average Pricing Indicator *
*****************************
*/
export enum AvgPxIndicator {
  NoAveragePricing = 0,
  Trade = 1,
  LastTrade = 2
}

/*
***********************************************
* Identifies how the trade is to be allocated *
***********************************************
*/
export enum TradeAllocIndicator {
  AllocationNotRequired = 0,
  AllocationRequired = 1,
  UseAllocationProvidedWithTheTrade = 2
}

/*
**************************************************************
* Part of trading cycle when an instrument expires. Field is *
* applicable for derivatives.                                *
**************************************************************
*/
export enum ExpirationCycle {
  ExpireOnTradingSessionClose = 0,
  ExpireOnTradingSessionOpen = 1
}

/*
*****************
* Type of Trade *
*****************
*/
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

/*
*********************************************
* Describes whether peg is static or floats *
*********************************************
*/
export enum PegMoveType {
  Floating = 0,
  Fixed = 1
}

/*
****************************
* Type of Peg Offset value *
****************************
*/
export enum PegOffsetType {
  Price = 0,
  BasisPoints = 1,
  Ticks = 2,
  PriceTier = 3
}

/*
*********************
* Type of Peg Limit *
*********************
*/
export enum PegLimitType {
  OrBetter = 0,
  Strict = 1,
  OrWorse = 2
}

/*
***********************************************************
* If the calculated peg price is not a valid tick price,  *
* specifies whether to round the price to be more or less *
* aggressive                                              *
***********************************************************
*/
export enum PegRoundDirection {
  MoreAggressive = 1,
  MorePassive = 2
}

/*
************************
* The scope of the peg *
************************
*/
export enum PegScope {
  Local = 1,
  National = 2,
  Global = 3,
  NationalExcludingLocal = 4
}

/*
************************************************************
* Describes whether discretionay price is static or floats *
************************************************************
*/
export enum DiscretionMoveType {
  Floating = 0,
  Fixed = 1
}

/*
***********************************
* Type of Discretion Offset value *
***********************************
*/
export enum DiscretionOffsetType {
  Price = 0,
  BasisPoints = 1,
  Ticks = 2,
  PriceTier = 3
}

/*
****************************
* Type of Discretion Limit *
****************************
*/
export enum DiscretionLimitType {
  OrBetter = 0,
  Strict = 1,
  OrWorse = 2
}

/*
*************************************************************
* If the calculated discretionary price is not a valid tick *
* price, specifies whether to round the price to be more or *
* less aggressive                                           *
*************************************************************
*/
export enum DiscretionRoundDirection {
  MoreAggressive = 1,
  MorePassive = 2
}

/*
*******************************
* The scope of the discretion *
*******************************
*/
export enum DiscretionScope {
  Local = 1,
  National = 2,
  Global = 3,
  NationalExcludingLocal = 4
}

/*
***************************************************************
* The target strategy of the order                            *
* 1000+ = Reserved and available for bi-laterally agreed upon *
* user defined values                                         *
***************************************************************
*/
export enum TargetStrategy {
  Vwap = 1,
  Participate = 2,
  MininizeMarketImpact = 3
}

/*
**************************************************************
* Indicator to identify whether this fill was a result of a  *
* liquidity provider providing or liquidity taker taking the *
* liquidity. Applicable only for OrdStatus of Partial or     *
* Filled.                                                    *
**************************************************************
*/
export enum LastLiquidityInd {
  AddedLiquidity = 1,
  RemovedLiquidity = 2,
  LiquidityRoutedOut = 3
}

/*
********************************************************
* Indicates if a trade should be reported via a market *
* reporting service.                                   *
********************************************************
*/
export enum PublishTrdIndicator {
  ReportTrade = 'Y',
  DoNotReportTrade = 'N'
}

/*
*************************
* Reason for short sale *
*************************
*/
export enum ShortSaleReason {
  DealerSoldShort = 0,
  DealerSoldShortExempt = 1,
  SellingCustomerSoldShort = 2,
  SellingCustomerSoldShortExempt = 3,
  QualifiedServiceRepresentative = 4,
  QsrOrAguContraSideSoldShortExempt = 5
}

/*
**************************************************
* Type of quantity specified in a quantity field *
**************************************************
*/
export enum QtyType {
  Units = 0,
  Contracts = 1
}

/*
************************
* Type of Trade Report *
************************
*/
export enum TradeReportType {
  Submit = 0,
  Alleged = 1,
  Accept = 2,
  Decline = 3,
  Addendum = 4,
  No = 5,
  TradeReportCancel = 6,
  LockedIn = 7
}

/*
*************************************************************
* Indicates how the orders being booked and allocated by an *
* Allocation Instruction or Allocation Report message are   *
* identified, i.e. by explicit definition in the NoOrders   *
* group or not.                                             *
*************************************************************
*/
export enum AllocNoOrdersType {
  NotSpecified = 0,
  ExplicitListProvided = 1
}

/*
***************************************
* Code to represent the type of event *
***************************************
*/
export enum EventType {
  Put = 1,
  Call = 2,
  Tender = 3,
  SinkingFundCall = 4,
  Other = 99
}

/*
******************************************************
* Code to represent the type of instrument attribute *
******************************************************
*/
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
  Text = 99
}

/*
********************************************************
* The program under which a commercial paper is issued *
********************************************************
*/
export enum CPProgram {
  Program3A3 = 1,
  Program42 = 2,
  Other = 99
}

/*
*********************************************
* Defines the unit for a miscellaneous fee. *
*********************************************
*/
export enum MiscFeeBasis {
  Absolute = 0,
  PerUnit = 1,
  Percentage = 2
}

/*
****************************************************************
* Indicates whether this message is the last in a sequence of  *
* messages for those messages that support fragmentation, such *
* as Allocation Instruction, Mass Quote, Security List,        *
* Derivative Security List                                     *
****************************************************************
*/
export enum LastFragment {
  LastMessage = 'Y',
  NotLastMessage = 'N'
}

/*
************************************
* Reason for Collateral Assignment *
************************************
*/
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

/*
**********************************
* Collateral inquiry qualifiers: *
**********************************
*/
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

/*
******************************************
* Collateral Assignment Transaction Type *
******************************************
*/
export enum CollAsgnTransType {
  New = 0,
  Replace = 1,
  Cancel = 2,
  Release = 3,
  Reverse = 4
}

/*
***************************************
* Collateral Assignment Response Type *
***************************************
*/
export enum CollAsgnRespType {
  Received = 0,
  Accepted = 1,
  Declined = 2,
  Rejected = 3
}

/*
***************************************
* Collateral Assignment Reject Reason *
***************************************
*/
export enum CollAsgnRejectReason {
  UnknownDeal = 0,
  UnknownOrInvalidInstrument = 1,
  UnauthorizedTransaction = 2,
  InsufficientCollateral = 3,
  InvalidTypeOfCollateral = 4,
  ExcessiveSubstitution = 5,
  Other = 99
}

/*
*********************
* Collateral Status *
*********************
*/
export enum CollStatus {
  Unassigned = 0,
  PartiallyAssigned = 1,
  AssignmentProposed = 2,
  Assigned = 3,
  Challenged = 4
}

/*
*********************************
* Identifies type of settlement *
*********************************
*/
export enum DeliveryType {
  VersusPayment = 0,
  Free = 1,
  TriParty = 2,
  HoldInCustody = 3
}

/*
***********************************************************
* Indicates the action required by a User Request Message *
***********************************************************
*/
export enum UserRequestType {
  LogOnUser = 1,
  LogOffUser = 2,
  ChangePasswordForUser = 3,
  RequestIndividualUserStatus = 4
}

/*
**********************************
* Indicates the status of a user *
**********************************
*/
export enum UserStatus {
  LoggedIn = 1,
  NotLoggedIn = 2,
  UserNotRecognised = 3,
  PasswordIncorrect = 4,
  PasswordChanged = 5,
  Other = 6
}

/*
************************************************
* Indicates the status of a network connection *
************************************************
*/
export enum StatusValue {
  Connected = 1,
  NotConnectedUnexpected = 2,
  NotConnectedExpected = 3,
  InProcess = 4
}

/*
**********************************************************
* Indicates the type and level of details required for a *
* Network Status Request Message                         *
* Boolean logic applies EG If you want to subscribe for  *
* changes to certain ids then UserRequestType =0 (8+2), *
* Snapshot for certain IDs = 9 (8+)                     *
**********************************************************
*/
export enum NetworkRequestType {
  Snapshot = 1,
  Subscribe = 2,
  StopSubscribing = 4,
  LevelOfDetail = 8
}

/*
**************************************************
* Indicates the type of Network Response Message *
**************************************************
*/
export enum NetworkStatusResponseType {
  Full = 1,
  IncrementalUpdate = 2
}

/*
***********************
* Trade Report Status *
***********************
*/
export enum TrdRptStatus {
  Accepted = 0,
  Rejected = 1
}

/*
************************************************
* Identifies the status of the ConfirmationAck *
************************************************
*/
export enum AffirmStatus {
  Received = 1,
  ConfirmRejected = 2,
  Affirmed = 3
}

/*
*********************************************************
* Action proposed for an Underlying Instrument instance *
*********************************************************
*/
export enum CollAction {
  Retain = 0,
  Add = 1,
  Remove = 2
}

/*
********************************
* Status of Collateral Inquiry *
********************************
*/
export enum CollInquiryStatus {
  Accepted = 0,
  AcceptedWithWarnings = 1,
  Completed = 2,
  CompletedWithWarnings = 3,
  Rejected = 4
}

/*
*************************************************************
* Result returned in response to Collateral Inquiry         *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
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

