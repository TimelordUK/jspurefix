/*
*************************************
* Broker's side of advertised trade *
*************************************
*/
export enum AdvSide {
  Buy = 'B',
  Sell = 'S',
  Trade = 'T',
  Cross = 'X'
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
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features  *
* and Supported Approach" *** (see Volume : "Glossary" for     *
* value definitions)                                           *
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
  ReleaseFromSuspension = 'q',
  ExecuteAsDeltaNeutral = 'r',
  ExecuteAsDurationNeutral = 's',
  ExecuteAsFxNeutral = 't'
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
* 100+ are reserved for private security identifications   *
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
  OptionPriceReportingAuthority = 'J',
  IsdaFpMlurl = 'K',
  LetterOfCredit = 'L',
  MarketplaceAssignedIdentifier = 'M'
}

/*
**********************************
* Relative quality of indication *
**********************************
*/
export enum IOIQltyInd {
  High = 'H',
  Low = 'L',
  Medium = 'M'
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
  Large = 'L',
  UndisclosedQuantity = 'U'
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
* *** Note the use of lower case letters ***                  *
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
  News = 'B',
  CollateralReport = 'BA',
  CollateralInquiry = 'BB',
  NetworkCounterpartySystemStatusRequest = 'BC',
  NetworkCounterpartySystemStatusResponse = 'BD',
  UserRequest = 'BE',
  UserResponse = 'BF',
  CollateralInquiryAck = 'BG',
  ConfirmationRequest = 'BH',
  TradingSessionListRequest = 'BI',
  TradingSessionList = 'BJ',
  SecurityListUpdateReport = 'BK',
  AdjustedPositionReport = 'BL',
  AllocationInstructionAlert = 'BM',
  ExecutionAcknowledgement = 'BN',
  ContraryIntentionReport = 'BO',
  SecurityDefinitionUpdateReport = 'BP',
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
  Email = 'C',
  OrderMassActionRequest = 'CA',
  UserNotification = 'CB',
  StreamAssignmentRequest = 'CC',
  StreamAssignmentReport = 'CD',
  StreamAssignmentReportAck = 'CE',
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
  DerivativeSecurityListRequest = 'z'
}

/*
************************************************************
* Identifies current status of order. *** SOME VALUES HAVE *
* BEEN REPLACED - See "Replaced Features and Supported     *
* Approach" *** (see Volume : "Glossary" for value         *
* definitions)                                             *
************************************************************
*/
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

/*
*************************************************************
* Order type. *** SOME VALUES ARE NO LONGER USED - See      *
* "Deprecated (Phased-out) Features and Supported Approach" *
* *** (see Volume : "Glossary" for value definitions)       *
*************************************************************
*/
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
  CounterOrderSelection = 'Q'
}

/*
**********************************************************
* Indicates possible retransmission of message with this *
* sequence number                                        *
**********************************************************
*/
export enum PossDupFlag {
  OriginalTransmission = 'N',
  PossibleDuplicate = 'Y'
}

/*
****************************************************
* Side of order (see Volume : "Glossary" for value *
* definitions)                                     *
****************************************************
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
****************************************************************
* Specifies how long the order remains in effect. Absence of   *
* this field is interpreted as DAY. NOTE not applicable to CIV *
* Orders. (see Volume : "Glossary" for value definitions)      *
****************************************************************
*/
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
  AtCrossing = '9'
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
* Additionally the following patterns may be uses as well as   *
* enum values                                                  *
* Dx = FX tenor expression for "days", e.g. "D5", where "x" is *
* any integer > 0                                              *
* Mx = FX tenor expression for "months", e.g. "M3", where "x"  *
* is any integer > 0                                           *
* Wx = FX tenor expression for "weeks", e.g. "W13", where "x"  *
* is any integer > 0                                           *
* Yx = FX tenor expression for "years", e.g. "Y1", where "x"   *
* is any integer > 0                                           *
* Noted that for FX the tenors expressed using Dx, Mx, Wx, and *
* Yx values do not denote business days, but calendar days.    *
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
  TPlus5 = '9',
  BrokenDate = 'B',
  FxSpotNextSettlement = 'C'
}

/*
**************************************************************
* Additional information about the security (e.g. preferred, *
* warrants, etc.). Note also see SecurityType (167).         *
* As defined in the NYSE Stock and bond Symbol Directory and *
* in the AMEX Fitch Directory.                               *
**************************************************************
*/
export enum SymbolSfx {
  EucpWithLumpSumInterest = 'CD',
  WhenIssued = 'WI'
}

/*
***************************************************************
* Identifies allocation transaction type *** SOME VALUES HAVE *
* BEEN REPLACED - See "Replaced Features and Supported        *
* Approach" ***                                               *
***************************************************************
*/
export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2',
  Preliminary = '3',
  Calculated = '4',
  CalculatedWithoutPreliminary = '5',
  Reversal = '6'
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
  Close = 'C',
  Fifo = 'F',
  Open = 'O',
  Rolled = 'R',
  CloseButNotifyOnOpen = 'N',
  Default = 'D'
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
************************************
* Identifies status of allocation. *
************************************
*/
export enum AllocStatus {
  Accepted = 0,
  BlockLevelReject = 1,
  AccountLevelReject = 2,
  Received = 3,
  Incomplete = 4,
  RejectedByIntermediary = 5,
  AllocationPending = 6,
  Reversed = 7
}

/*
************************************
* Identifies reason for rejection. *
************************************
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
  WarehouseRequestRejected = 13,
  Other = 99
}

/*
***********************
* Email message type. *
***********************
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
  OriginalTransmission = 'N',
  PossibleResend = 'Y'
}

/*
*************************
* Method of encryption. *
*************************
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
*************************************************
* Code to identify reason for cancel rejection. *
*************************************************
*/
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

/*
****************************************************************
* Code to identify reason for order rejection. Note: Values 3, *
* 4, and 5 will be used when rejecting an order due to         *
* pre-allocation information errors.                           *
****************************************************************
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
  SurveillenceOption = 12,
  IncorrectQuantity = 13,
  IncorrectAllocatedQuantity = 14,
  UnknownAccount = 15,
  PriceExceedsCurrentPriceBand = 16,
  InvalidPriceIncrement = 18,
  Other = 99
}

/*
***************************************************************
* Code to qualify IOI use. (see Volume : "Glossary" for value *
* definitions)                                                *
***************************************************************
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
  SenderReports = 'N',
  ReceiverReports = 'Y'
}

/*
**********************************************************
* Indicates whether the broker is to locate the stock in *
* conjunction with a short sell order.                   *
**********************************************************
*/
export enum LocateReqd {
  No = 'N',
  Yes = 'Y'
}

/*
*********************************************************
* Indicates request for forex accommodation trade to be *
* executed along with security transaction.             *
*********************************************************
*/
export enum ForexReq {
  DoNotExecuteForexAfterSecurityTrade = 'N',
  ExecuteForexAfterSecurityTrade = 'Y'
}

/*
************************************************************
* Indicates that the Sequence Reset message is replacing   *
* administrative or application messages which will not be *
* resent.                                                  *
************************************************************
*/
export enum GapFillFlag {
  SequenceReset = 'N',
  GapFillMessage = 'Y'
}

/*
***********************************
* Reason for execution rejection. *
***********************************
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
  NotNatural = 'N',
  Natural = 'Y'
}

/*
****************************************
* Indicates type of miscellaneous fee. *
****************************************
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
  Agent = '12',
  TransferFee = '13',
  SecurityLending = '14'
}

/*
***********************************************************
* Indicates that the both sides of the FIX session should *
* reset sequence numbers.                                 *
***********************************************************
*/
export enum ResetSeqNumFlag {
  No = 'N',
  Yes = 'Y'
}

/*
***************************************************************
* Describes the specific ExecutionRpt (i.e. Pending Cancel)   *
* while OrdStatus (39) will always identify the current order *
* status (i.e. Partially Filled) *** SOME VALUES HAVE BEEN    *
* REPLACED - See "Replaced Features and Supported Approach"   *
* ***                                                         *
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
  OrderStatus = 'I',
  TradeInAClearingHold = 'J',
  TradeHasBeenReleasedToClearing = 'K',
  TriggeredOrActivatedBySystem = 'L'
}

/*
***********************************************************
* Specifies whether or not SettlCurrFxRate (55) should be *
* multiplied or divided.                                  *
***********************************************************
*/
export enum SettlCurrFxRateCalc {
  Multiply = 'M',
  Divide = 'D'
}

/*
****************************************************************
* Indicates mode used for Settlement Instructions message. *** *
* SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and  *
* Supported Approach" ***                                      *
****************************************************************
*/
export enum SettlInstMode {
  Default = '0',
  StandingInstructionsProvided = '1',
  SpecificAllocationAccountOverriding = '2',
  SpecificAllocationAccountStanding = '3',
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
****************************************************************
* Indicates type of security. Security type enumerations are   *
* grouped by Product(460) field value. NOTE: Additional values *
* may be used by mutual agreement of the counterparties.       *
****************************************************************
*/
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
  ForeignExchangeContract = 'FOR',
  CreditDefaultSwap = 'CDS',
  Future = 'FUT',
  Option = 'OPT',
  OptionsOnFutures = 'OOF',
  OptionsOnPhysical = 'OOP',
  InterestRateSwap = 'IRS',
  OptionsOnCombo = 'OOC',
  CommonStock = 'CS',
  PreferredStock = 'PS',
  Repurchase = 'REPO',
  Forward = 'FORWARD',
  BuySellback = 'BUYSELL',
  SecuritiesLoan = 'SECLOAN',
  SecuritiesPledge = 'SECPLEDGE',
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
  TaxableMunicipalCp = 'TMCP',
  TaxRevenueAnticipationNote = 'TRAN',
  VariableRateDemandNote = 'VRDN',
  Warrant = 'WAR',
  MutualFund = 'MF',
  MultilegInstrument = 'MLEG',
  NoSecurityType = 'NONE',
  Wildcard = '?',
  Cash = 'CASH',
  NonDeliverableForward = 'FXNDF',
  FxSpot = 'FXSPOT',
  FxForward = 'FXFWD',
  FxSwap = 'FXSWAP'
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
*********************************************************
* Indicates whether an option contract is a put or call *
*********************************************************
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
  DetailsShouldNotBeCommunicated = 'N',
  DetailsShouldBeCommunicated = 'Y'
}

/*
***************************************************************
* Indicates how the receiver (i.e. third party) of Allocation *
* message should handle/process the account details.          *
***************************************************************
*/
export enum AllocHandlInst {
  Match = 1,
  Forward = 2,
  ForwardAndMatch = 3
}

/*
****************************************************
* Indicates the type of RoutingID (217) specified. *
****************************************************
*/
export enum RoutingType {
  TargetFirm = 1,
  TargetList = 2,
  BlockFirm = 3,
  BlockList = 4
}

/*
**********************************************************
* Name of benchmark curve.                               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
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
  Treasury = 'Treasury'
}

/*
**********************************************************
* For Fixed Income.                                      *
* Type of Stipulation.                                   *
* Other types may be used by mutual agreement of the     *
* counterparties.                                        *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
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

/*
****************************************************************
* Type of yield. (Note tag # was reserved in FIX 4.1, added in *
* FIX 4.3)                                                     *
****************************************************************
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

/*
**************************************************************
* Driver and part of trade in the event that the Security    *
* Master file was wrong at the point of entry(Note tag # was *
* reserved in FIX 4.1, added in FIX 4.3)                     *
**************************************************************
*/
export enum TradedFlatSwitch {
  NotTradedFlat = 'N',
  TradedFlat = 'Y'
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
*********************************************
* Specifies the type of Market Data update. *
*********************************************
*/
export enum MDUpdateType {
  FullRefresh = 0,
  IncrementalRefresh = 1
}

/*
***************************************************************
* Specifies whether or not book entries should be aggregated. *
* (Not specified) = broker option                             *
***************************************************************
*/
export enum AggregatedBook {
  BookEntriesToBeAggregated = 'Y',
  BookEntriesShouldNotBeAggregated = 'N'
}

/*
***************************
* Type Market Data entry. *
***************************
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
  RecoveryRate = 'Y',
  RecoveryRateForLong = 'Z',
  RecoveryRateForShort = 'a',
  FixingPrice = 'W',
  CashRate = 'X'
}

/*
****************************
* Direction of the "tick". *
****************************
*/
export enum TickDirection {
  PlusTick = '0',
  ZeroPlusTick = '1',
  MinusTick = '2',
  ZeroMinusTick = '3'
}

/*
**********************************************************
* Space-delimited list of conditions describing a quote. *
**********************************************************
*/
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

/*
*********************************************************
* Space-delimited list of conditions describing a trade *
*********************************************************
*/
export enum TradeCondition {
  Cancel = '0',
  ImpliedTrade = '1',
  MarketplaceEnteredTrade = '2',
  MultAssetClassMultilegTrade = '3',
  MultilegToMultilegTrade = '4',
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
  OfficalClosingPrice = 'AN',
  CrossedOld = 'AO',
  FastMarket = 'AP',
  AutomaticExecution = 'AQ',
  FormT = 'AR',
  BasketIndex = 'AS',
  BurstBasket = 'AT',
  OutsideSpread = 'AV'
}

/*
**************************************
* Type of Market Data update action. *
**************************************
*/
export enum MDUpdateAction {
  New = '0',
  Change = '1',
  Delete = '2',
  DeleteThru = '3',
  DeleteFrom = '4',
  Overlay = '5'
}

/*
******************************************************
* Reason for the rejection of a Market Data request. *
******************************************************
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
  UnsupportedMdImplicitDelete = 'C',
  InsufficientCredit = 'D'
}

/*
************************
* Reason for deletion. *
************************
*/
export enum DeleteReason {
  Cancellation = '0',
  Error = '1'
}

/*
***************************************************************
* Flag that identifies a market data entry. (Prior to FIX 4.3 *
* this field was of type char)                                *
***************************************************************
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
********************************************************
* Identifies a firm's or a security's financial status *
********************************************************
*/
export enum FinancialStatus {
  Bankrupt = '1',
  PendingDelisting = '2',
  Restricted = '3'
}

/*
********************************************
* Identifies the type of Corporate Action. *
********************************************
*/
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

/*
*******************************************************
* Identifies the status of the quote acknowledgement. *
*******************************************************
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
  CanceledDueToCrossMarket = 15,
  Active = 16,
  Canceled = 17,
  UnsolicitedQuoteReplenishment = 18,
  PendingEndTrade = 19,
  TooLateToEnd = 20
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
  CancelAllQuotes = 4,
  CancelQuoteSpecifiedInQuoteId = 5,
  CancelByQuoteType = 6,
  CancelForSecurityIssuer = 7,
  CancelForIssuerOfUnderlyingSecurity = 8
}

/*
******************************
* Reason Quote was rejected: *
******************************
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
  PriceExceedsCurrentPriceBand = 10,
  QuoteLocked = 11,
  InvalidOrUnknownSecurityIssuer = 12,
  InvalidOrUnknownIssuerOfUnderlyingSecurity = 13,
  Other = 99
}

/*
****************************************************************
* Level of Response requested from receiver of quote messages. *
* A default value should be bilaterally agreed.                *
****************************************************************
*/
export enum QuoteResponseLevel {
  NoAcknowledgement = 0,
  AcknowledgeOnlyNegativeOrErroneousQuotes = 1,
  AcknowledgeEachQuoteMessage = 2,
  SummaryAcknowledgement = 3
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
  RequestListSecurities = 3,
  Symbol = 4,
  SecurityTypeAndOrCfiCode = 5,
  Product = 6,
  TradingSessionId = 7,
  AllSecurities = 8,
  MarketIdOrMarketId = 9
}

/*
*************************************************
* Type of Security Definition message response. *
*************************************************
*/
export enum SecurityResponseType {
  AcceptAsIs = 1,
  AcceptWithRevisions = 2,
  ListOfSecurityTypesReturnedPerRequest = 3,
  ListOfSecuritiesReturnedPerRequest = 4,
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
  MessageIsBeingSentAsAResultOfAPriorRequest = 'N',
  MessageIsBeingSentUnsolicited = 'Y'
}

/*
****************************************************************
* Identifies the trading status applicable to the transaction. *
****************************************************************
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
  FastMarket = 23,
  PreCross = 24,
  Cross = 25,
  PostClose = 26
}

/*
*************************************************************
* Denotes the reason for the Opening Delay or Trading Halt. *
*************************************************************
*/
export enum HaltReason {
  NewsDissemination = 0,
  OrderInflux = 1,
  OrderImbalance = 2,
  AdditionalInformation = 3,
  NewsPending = 4,
  EquipmentChangeover = 5
}

/*
*************************************************************
* Indicates whether or not the halt was due to Common Stock *
* trading being halted.                                     *
*************************************************************
*/
export enum InViewOfCommon {
  HaltWasNotRelatedToAHaltOfTheCommonStock = 'N',
  HaltWasDueToCommonStockBeingHalted = 'Y'
}

/*
************************************************************
* Indicates whether or not the halt was due to the Related *
* Security being halted.                                   *
************************************************************
*/
export enum DueToRelated {
  NotRelatedToSecurityHalt = 'N',
  RelatedToSecurityHalt = 'Y'
}

/*
**************************************
* Identifies the type of adjustment. *
**************************************
*/
export enum Adjustment {
  Cancel = 1,
  Error = 2,
  Correction = 3
}

/*
***************************************************************
* Identifier for Trading Session                              *
* A trading session spans an extended period of time that can *
* also be expressed informally in terms of the trading day.   *
* Usage is determined by market or counterparties.            *
* To specify good for session where session spans more than   *
* one calendar day, use TimeInForce = Day in conjunction with *
* TradingSessionID.                                           *
* Bilaterally agreed values of data type "String" that start  *
* with a character can be used for backward compatibility.    *
***************************************************************
*/
export enum TradingSessionID {
  Day = '1',
  HalfDay = '2',
  Morning = '3',
  Afternoon = '4',
  Evening = '5',
  AfterHours = '6'
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
*********************************
* State of the trading session. *
*********************************
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
***************************************************************
* Code to identify reason for a session-level Reject message. *
***************************************************************
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
  Invalid = 18,
  Other = 99
}

/*
********************************************
* Identifies the Bid Request message type. *
********************************************
*/
export enum BidRequestTransType {
  Cancel = 'C',
  New = 'N'
}

/*
*****************************************************
* Indicates whether or not the order was solicited. *
*****************************************************
*/
export enum SolicitedFlag {
  WasNotSolicited = 'N',
  WasSolicited = 'Y'
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
  PegRefresh = 11,
  Other = 99
}

/*
*********************************************************
* Code to identify reason for a Business Message Reject *
* message.                                              *
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
  DeliverToFirmNotAvailableAtThisTime = 7,
  InvalidPriceIncrement = 18
}

/*
********************************************
* Specifies the direction of the messsage. *
********************************************
*/
export enum MsgDirection {
  Receive = 'R',
  Send = 'S'
}

/*
***************************************************************
* Code to identify the price a DiscretionOffsetValue (389) is *
* related to and should be mathematically added to.           *
***************************************************************
*/
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

/*
*********************************************
* Code to identify the type of Bid Request. *
*********************************************
*/
export enum BidType {
  NonDisclosed = 1,
  Disclosed = 2,
  NoBiddingProcess = 3
}

/*
*****************************************************
* Code to identify the type of BidDescriptor (400). *
*****************************************************
*/
export enum BidDescriptorType {
  Sector = 1,
  Country = 2,
  Index = 3
}

/*
****************************************************************
* Code to identify which "SideValue" the value refers to.      *
* SideValue1 and SideValue2 are used as opposed to Buy or Sell *
* so that the basket can be quoted either way as Buy or Sell.  *
****************************************************************
*/
export enum SideValueInd {
  SideValue1 = 1,
  SideValue2 = 2
}

/*
*****************************************************
* Code to identify the type of liquidity indicator. *
*****************************************************
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
  False = 'N',
  True = 'Y'
}

/*
***************************************************************
* Code to identify the desired frequency of progress reports. *
***************************************************************
*/
export enum ProgRptReqs {
  BuySideRequests = 1,
  SellSideSends = 2,
  RealTimeExecutionReports = 3
}

/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross.                                                       *
****************************************************************
*/
export enum IncTaxInd {
  Net = 1,
  Gross = 2
}

/*
*******************************************************
* Code to represent the type of trade.                *
* (Prior to FIX 4.4 this field was named "TradeType") *
*******************************************************
*/
export enum BidTradeType {
  Agency = 'A',
  VwapGuarantee = 'G',
  GuaranteedClose = 'J',
  RiskTrade = 'R'
}

/*
*******************************************
* Code to represent the basis price type. *
*******************************************
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
***************************************************************
* Code to represent the price type.                           *
* (For Financing transactions PriceType implies the "repo     *
* type" - Fixed or Floating - 9 (Yield) or 6 (Spread)         *
* respectively - and Price (44) gives the corresponding "repo *
* rate".                                                      *
* See Volume : "Glossary" for further value definitions)      *
***************************************************************
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
  VariableCabinetTradePrice = 11,
  ProductTicksInHalfs = 13,
  ProductTicksInFourths = 14,
  ProductTicksInEights = 15,
  ProductTicksInSixteenths = 16,
  ProductTicksInThirtySeconds = 17,
  ProductTicksInSixtyForths = 18,
  ProductTicksInOneTwentyEights = 19
}

/*
********************************************************
* Code to identify whether to book out executions on a *
* part-filled GT order on the day of execution or to   *
* accumulate.                                          *
********************************************************
*/
export enum GTBookingInst {
  BookOutAllTradesOnDayOfExecution = 0,
  AccumulateUntilFilledOrExpired = 1,
  AccumulateUntilVerballyNotifiedOtherwise = 2
}

/*
**************************************
* Code to represent the status type. *
**************************************
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
* gross.                                                       *
****************************************************************
*/
export enum NetGrossInd {
  Net = 1,
  Gross = 2
}

/*
*************************************************
* Code to represent the status of a list order. *
*************************************************
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
*********************************************
* Identifies the type of ListExecInst (69). *
*********************************************
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
* response to.                                              *
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
* See "Appendix 6-G - Use of <Parties> Component Block"     *
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
  AustralianTaxFileNumber = 'A',
  IsitcAcronym = 'I',
  Bic = 'B',
  GeneralIdentifier = 'C',
  Proprietary = 'D',
  IsoCountryCode = 'E',
  SettlementEntityLocation = 'F',
  Mic = 'G',
  CsdParticipant = 'H'
}

/*
***************************************************************
* Identifies the type or role of the PartyID (448) specified. *
* See "Appendix 6-G - Use of <Parties> Component Block"       *
* (see Volume : "Glossary" for value definitions)             *
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
  UnacceptableSettlingCounterparty = 85
}

/*
************************************************************
* Indicates the type of product the security is associated *
* with. See also the CFICode (461) and SecurityType (167)  *
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
  Fales = 'N',
  True = 'Y'
}

/*
****************************************************************
* Specifies which direction to round For CIV - indicates       *
* whether or not the quantity of shares/units is to be rounded *
* and in which direction where CashOrdQty (152) or (for CIV    *
* only) OrderPercent (516) are specified on an order.          *
* The default is for rounding to be at the discretion of the   *
* executing broker or fund manager.                            *
* e.g. for an order specifying CashOrdQty or OrderPercent if   *
* the calculated number of shares/units was 325.76 and         *
* RoundingModulus (469) was 0 - "round down" would give 320    *
* units, 1 - "round up" would give 330 units and "round to     *
* nearest" would give 320 units.                               *
****************************************************************
*/
export enum RoundingDirection {
  RoundToNearest = '0',
  RoundDown = '1',
  RoundUp = '2'
}

/*
****************************************************************
* A code identifying the payment method for a (fractional)     *
* distribution.                                                *
* 13 through 998 are reserved for future use                   *
* Values above 1000 are available for use by private agreement *
* among counterparties                                         *
****************************************************************
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
* For CIV - A one character code identifying whether *
* Cancellation rights/Cooling off period applies.    *
******************************************************
*/
export enum CancellationRights {
  Yes = 'Y',
  NoExecutionOnly = 'N',
  NoWaiverAgreement = 'M',
  NoInstitutional = 'O'
}

/*
*************************************************************
* A one character code identifying Money laundering status. *
*************************************************************
*/
export enum MoneyLaunderingStatus {
  ExemptBelowLimit = '1',
  ExemptMoneyType = '2',
  ExemptAuthorised = '3',
  Passed = 'Y',
  NotChecked = 'N'
}

/*
****************************************************************
* For CIV - Identifies how the execution price LastPx (31) was *
* calculated from the fund unit/share price(s) calculated at   *
* the fund valuation point.                                    *
****************************************************************
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
****************************************************
* Identifies Trade Report message transaction type *
* (Prior to FIX 4.4 this field was of type char)   *
****************************************************
*/
export enum TradeReportTransType {
  New = 0,
  Cancel = 1,
  Replace = 2,
  Release = 3,
  Reverse = 4,
  CancelDueToBackOutOfTrade = 5
}

/*
****************************************************************
* A code identifying the Settlement payment method. 16 through *
* 998 are reserved for future use                              *
* Values above 1000 are available for use by private agreement *
* among counterparties                                         *
****************************************************************
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
****************************************************************
* For CIV - a code identifying the type of tax exempt account  *
* in which purchased shares/units are to be held.              *
* 30 - 998 are reserved for future use by recognized taxation  *
* authorities                                                  *
* 999=Other                                                    *
* values above 1000 are available for use by private agreement *
* among counterparties                                         *
****************************************************************
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
  EducationIraNonPrototype = 29,
  Other = 999
}

/*
***********************************************************
* A one character code identifying whether the Fund based *
* renewal commission is to be waived.                     *
***********************************************************
*/
export enum FundRenewWaiv {
  No = 'N',
  Yes = 'Y'
}

/*
**************************************************************
* Registration status as returned by the broker or (for CIV) *
* the fund manager:                                          *
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
*********************************
* Identifies the type of owner. *
*********************************
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
* Designates the capacity of the firm placing the order.      *
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
  RisklessArbitrage = 'A',
  IssuerHolding = 'B',
  IssuePriceStabilization = 'C',
  NonAlgorithmic = 'D',
  Algorithmic = 'E',
  Cross = 'F'
}

/*
*************************************************
* Specifies scope of Order Mass Cancel Request. *
*************************************************
*/
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
  CancelAllOrders = '7',
  CancelOrdersForAMarket = '8',
  CancelOrdersForAMarketSegment = '9',
  CancelOrdersForASecurityGroup = 'A',
  CancelOrdersForASecuritiesIssuer = 'B',
  CancelOrdersForIssuerOfUnderlyingSecurity = 'C'
}

/*
*************************************************
* Reason Order Mass Cancel Request was rejected *
*************************************************
*/
export enum MassCancelRejectReason {
  MassCancelNotSupported = 0,
  InvalidOrUnknownSecurity = 1,
  InvalidOrUnkownUnderlyingSecurity = 2,
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
* 7 - Product: Fixed Income for example usage.                 *
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
**************************************************
* Specifies the market scope of the market data. *
**************************************************
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
  No = 'N',
  Yes = 'Y'
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
* order is applied to the market first. In other markets -   *
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
  AllSecurities = 4,
  MarketIdOrMarketId = 5
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
* issuer of the order.                                     *
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
* rejected.                                                 *
*************************************************************
*/
export enum TradSesStatusRejReason {
  UnknownOrInvalidTradingSessionId = 1,
  Other = 99
}

/*
*********************************
* Type of Trade Capture Report. *
*********************************
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
  NotReportedToCounterparty = 'N',
  PerviouslyReportedToCounterparty = 'Y'
}

/*
********************************************************
* The status of this trade with respect to matching or *
* comparison.                                          *
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
* matched.                                                  *
*************************************************************
*/
export enum MatchType {
  OnePartyTradeReport = '1',
  TwoPartyTradeReport = '2',
  ConfirmedTradeReport = '3',
  AutoMatch = '4',
  CrossAuction = '5',
  CounterOrderSelection = '6',
  CallAuction = '7',
  Issuing = '8',
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

/*
***********************************************************
* This trade is to be treated as an odd lot               *
* If this field is not specified, the default will be "N" *
***********************************************************
*/
export enum OddLot {
  TreatAsRoundLot = 'N',
  TreatAsOddLot = 'Y'
}

/*
****************************************************************
* Eligibility of this trade for clearing and central           *
* counterparty processing                                      *
* values above 4000 are reserved for agreement between parties *
****************************************************************
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
  StatusForOrdersForAPartyId = 8,
  StatusForSecurityIssuer = 9,
  StatusForIssuerOfUnderlyingSecurity = 10
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
****************************************************************
* Optional market assigned sub identifier for a trading phase  *
* within a trading session. Usage is determined by market or   *
* counterparties. Used by US based futures markets to identify *
* exchange specific execution time bracket codes as required   *
* by US market regulations. Bilaterally agreed values of data  *
* type "String" that start with a character can be used for    *
* backward compatibility                                       *
****************************************************************
*/
export enum TradingSessionSubID {
  PreTrading = '1',
  OpeningOrOpeningAuction = '2',
  Continuous = '3',
  ClosingOrClosingAuction = '4',
  PostTrading = '5',
  IntradayAuction = '6',
  Quiescent = '7'
}

/*
***************************************************************
* Describes the specific type or purpose of an Allocation     *
* message (i.e. "Buyside Calculated")                         *
* (see Volume : "Glossary" for value definitions)             *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
*/
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
  ReversalPending = 14
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
  NotWorking = 'N',
  Working = 'Y'
}

/*
*************************************************************
* Indicates if a Cancel/Replace has caused an order to lose *
* book priority.                                            *
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
  DoesNotConsituteALegalConfirm = 'N',
  LegalConfirm = 'Y'
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
  InsufficientCredit = 11,
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
*************************************************
* Identifies the Confirmation transaction type. *
*************************************************
*/
export enum ConfirmTransType {
  New = 0,
  Replace = 1,
  Cancel = 2
}

/*
************************************
* Identifies the form of delivery. *
************************************
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
**************************************************************
* Code to represent price type requested in Quote.           *
* If the Quote Request is for a Swap values 1-8 apply to all *
* legs.                                                      *
**************************************************************
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
******************************************
* Identifies the type of Quote Response. *
******************************************
*/
export enum QuoteRespType {
  Hit = 1,
  Counter = 2,
  Expired = 3,
  Cover = 4,
  DoneAway = 5,
  Pass = 6,
  EndTrade = 7,
  TimedOut = 8
}

/*
*******************************************************
* Used to identify the type of quantity that is being *
* returned.                                           *
*******************************************************
*/
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
  SuccessionEventAdjustment = 'SEA'
}

/*
****************************
* Status of this position. *
****************************
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
  TotalCollateralizedAmount = 'COLAT'
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
  Pledge = 5,
  LargeTraderSubmission = 6
}

/*
***************************************
* Maintenance Action to be performed. *
***************************************
*/
export enum PosMaintAction {
  New = 1,
  Replace = 2,
  Cancel = 3,
  Reverse = 4
}

/*
********************************************
* Identifies a specific settlement session *
********************************************
*/
export enum SettlSessID {
  Intraday = 'ITD',
  RegularTradingHours = 'RTH',
  ElectronicTradingHours = 'ETH',
  EndOfDay = 'EOD'
}

/*
**********************************************************
* Type of adjustment to be applied, used for PCS and PAJ *
**********************************************************
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
*************************************************************
* Result of Position Maintenance Request.                   *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
export enum PosMaintResult {
  SuccessfulCompletion = 0,
  Rejected = 1,
  Other = 99
}

/*
************************************************************
* Used to specify the type of position request being made. *
************************************************************
*/
export enum PosReqType {
  Positions = 0,
  Trades = 1,
  Exercises = 2,
  Assignments = 3,
  SettlementActivity = 4,
  BackoutMessage = 5,
  DeltaPositions = 6
}

/*
********************************************************
* Identifies how the response to the request should be *
* transmitted.                                         *
* Details specified via ResponseDestination (726).     *
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
***************************************************************
* Method by which short positions are assigned to an exercise *
* notice during exercise and assignment processing            *
***************************************************************
*/
export enum AssignmentMethod {
  ProRata = 'P',
  Random = 'R'
}

/*
*****************************************************
* Exercise Method used to in performing assignment. *
*****************************************************
*/
export enum ExerciseMethod {
  Automatic = 'A',
  Manual = 'M'
}

/*
***************************
* Result of Trade Request *
***************************
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
************************************************************
* Reason Trade Capture Request was rejected.               *
* 100+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                      *
************************************************************
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
* security.                                                    *
****************************************************************
*/
export enum SideMultiLegReportingType {
  SingleSecurity = 1,
  IndividualLegOfAMultilegSecurity = 2,
  MultilegSecurity = 3
}

/*
************************************************************
* Traded / Regulatory timestamp type.                      *
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
  BrokerExecution = 5,
  DeskReceipt = 6,
  SubmissionToClearing = 7
}

/*
***********************************************************
* Identifies the type of Confirmation message being sent. *
***********************************************************
*/
export enum ConfirmType {
  Status = 1,
  Confirmation = 2,
  ConfirmationRequestRejected = 3
}

/*
*******************************************************
* Identifies the reason for rejecting a Confirmation. *
*******************************************************
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
* how they are to be derived.                                *
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
* securities or cash settlement.                              *
***************************************************************
*/
export enum DlvyInstType {
  Cash = 'C',
  Securities = 'S'
}

/*
**********************************
* Type of financing termination. *
**********************************
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
* request message).                                            *
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
  PreliminaryRequestToIntermediary = 2,
  SellsideCalculatedUsingPreliminary = 3,
  SellsideCalculatedWithoutPreliminary = 4,
  WarehouseRecap = 5,
  RequestToIntermediary = 8,
  Accept = 9,
  Reject = 10,
  AcceptPending = 11,
  Complete = 12,
  ReversePending = 14
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
  PositionAccountType = 26,
  SecurityLocateId = 27,
  MarketMaker = 28,
  EligibleCounterparty = 29,
  ProfessionalClient = 30,
  Location = 31,
  ExecutionVenue = 32,
  CurrencyDeliveryIdentifier = 33
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
  UseAllocationProvidedWithTheTrade = 2,
  AllocationGiveUpExecutor = 3,
  AllocationFromExecutor = 4,
  AllocationToClaimAccount = 5
}

/*
**************************************************************
* Part of trading cycle when an instrument expires. Field is *
* applicable for derivatives.                                *
**************************************************************
*/
export enum ExpirationCycle {
  ExpireOnTradingSessionClose = 0,
  ExpireOnTradingSessionOpen = 1,
  SpecifiedExpiration = 2
}

/*
******************
* Type of Trade: *
******************
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
  ExchangeBasisFacility = 55
}

/*
*******************************************
* Further qualification to the trade type *
*******************************************
*/
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
  LargeInScale = 39
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
  LiquidityRoutedOut = 3,
  Auction = 4
}

/*
********************************************************
* Indicates if a trade should be reported via a market *
* reporting service.                                   *
********************************************************
*/
export enum PublishTrdIndicator {
  DoNotReportTrade = 'N',
  ReportTrade = 'Y'
}

/*
**************************
* Reason for short sale. *
**************************
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
***************************************************
* Type of quantity specified in a quantity field: *
***************************************************
*/
export enum QtyType {
  Units = 0,
  Contracts = 1,
  UnitsOfMeasurePerTimeUnit = 2
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
  LockedIn = 7,
  Defaulted = 8,
  InvalidCmta = 9,
  Pended = 10,
  AllegedNew = 11,
  AllegedAddendum = 12,
  AllegedNo = 13,
  AllegedTradeReportCancel = 14,
  AllegedTradeBreak = 15
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
  PriceTickRulesForSecurity = 23,
  TradeTypeEligibilityDetailsForSecurity = 24,
  InstrumentDenominator = 25,
  InstrumentNumerator = 26,
  InstrumentPricePrecision = 27,
  InstrumentStrikePrice = 28,
  TradeableIndicator = 29,
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
  NotLastMessage = 'N',
  LastMessage = 'Y'
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
****************************************************************
* Indicates whether this message is that last report message   *
* in response to a request, such as Order Mass Status Request. *
****************************************************************
*/
export enum LastRptRequested {
  NotLastMessage = 'N',
  LastMessage = 'Y'
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
  Other = 6,
  ForcedUserLogoutByExchange = 7,
  SessionShutdownWarning = 8
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
* changes to certain id's then UserRequestType =0 (8+2), *
* Snapshot for certain ID's = 9 (8+1)                    *
**********************************************************
*/
export enum NetworkRequestType {
  Snapshot = 1,
  Subscribe = 2,
  StopSubscribing = 4,
  LevelOfDetail = 8
}

/*
***************************************************
* Indicates the type of Network Response Message. *
***************************************************
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
  Rejected = 1,
  AcceptedWithErrors = 3
}

/*
*************************************************
* Identifies the status of the ConfirmationAck. *
*************************************************
*/
export enum AffirmStatus {
  Received = 1,
  ConfirmRejected = 2,
  Affirmed = 3
}

/*
**********************************************************
* Action proposed for an Underlying Instrument instance. *
**********************************************************
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

/*
*****************************
* Datatype of the parameter *
*****************************
*/
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

/*
**********************************************************
* Used for derivatives. Denotes the current state of the *
* Instrument.                                            *
**********************************************************
*/
export enum SecurityStatus {
  Active = '1',
  Inactive = '2'
}

/*
***********************************************************
* Used for derivatives that deliver into cash underlying. *
***********************************************************
*/
export enum UnderlyingCashType {
  Fixed = 'FIXED',
  Diff = 'DIFF'
}

/*
********************************************************
* Indicates order settlement period for the underlying *
* instrument.                                          *
********************************************************
*/
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

/*
****************************
* Expiration Quantity type *
****************************
*/
export enum ExpirationQtyType {
  AutoExercise = 1,
  NonAutoExercise = 2,
  FinalWillBeExercised = 3,
  ContraryIntention = 4,
  Difference = 5
}

/*
***************************************************************
* Identifies whether the allocation is to be sub-allocated or *
* allocated to a third party                                  *
***************************************************************
*/
export enum IndividualAllocType {
  SubAllocate = 1,
  ThirdPartyAllocation = 2
}

/*
****************************************************************
* The unit of measure of the underlying commodity upon which   *
* the contract is based. Two groups of units of measure        *
* enumerations are supported.                                  *
* Fixed Magnitude UOMs are primarily used in energy            *
* derivatives and specify a magnitude (such as, MM, Kilo, M,   *
* etc.) and the dimension (such as, watt hours, BTU's) to      *
* produce standard fixed measures (such as MWh -               *
* Megawatt-hours, MMBtu - One million BTUs).                   *
* The second group, Variable Quantity UOMs, specifies the      *
* dimension as a single unit without a magnitude (or more      *
* accurately a magnitude of one) and uses the                  *
* UnitOfMeasureQty(1147) field to define the quantity of units *
* per contract. Variable Quantity UOMs are used for both       *
* commodities (such as lbs of lean cattle, bushels of corn,    *
* ounces of gold) and financial futures.                       *
* Examples:                                                    *
* For lean cattle futures contracts, a UnitOfMeasure of 'lbs'  *
* with a UnitOfMeasureQty(1147) of 40,000, means each lean     *
* cattle futures contract represents 40,000 lbs of lean        *
* cattle.                                                      *
* For Eurodollars futures contracts, a UnitOfMeasure of USD    *
* with a UnitOfMeasureQty(1147) of 1,000,000, means a          *
* Eurodollar futures contract represents 1,000,000 USD.        *
* For gold futures contracts, a UnitOfMeasure is oz_tr (Troy   *
* ounce) with a UnitOfMeasureQty(1147) of 1,000, means each    *
* gold futures contract represents 1,000 troy ounces of gold.  *
****************************************************************
*/
export enum UnitOfMeasure {
  BillionCubicFeet = 'Bcf',
  MillionBarrels = 'MMbbl',
  OneMillionBtu = 'MMBtu',
  MegawattHours = 'MWh',
  Barrels = 'Bbl',
  Bushels = 'Bu',
  Pounds = 'lbs',
  Gallons = 'Gal',
  TroyOunces = 'oz_tr',
  MetricTons = 't',
  Tons = 'tn',
  UsDollars = 'USD',
  Allowances = 'Alw'
}

/*
**************************************************************
* Unit of time associated with the contract.                 *
* NOTE: Additional values may be used by mutual agreement of *
* the counterparties                                         *
**************************************************************
*/
export enum TimeUnit {
  Hour = 'H',
  Minute = 'Min',
  Second = 'S',
  Day = 'D',
  Week = 'Wk',
  Month = 'Mo',
  Year = 'Yr'
}

/*
*********************************************************
* Specifies the method under which a trade quantity was *
* allocated.                                            *
*********************************************************
*/
export enum AllocMethod {
  Automatic = 1,
  Guarantor = 2,
  Manual = 3
}

/*
****************************************************************
* Used to indicate that a floor-trade was originally submitted *
* "as of" a specific trade date which is earlier than its      *
* clearing date.                                               *
****************************************************************
*/
export enum AsOfIndicator {
  False = '0',
  True = '1'
}

/*
**************************************************************
* Describes the type of book for which the feed is intended. *
* Used when multiple feeds are provided over the same        *
* connection                                                 *
**************************************************************
*/
export enum MDBookType {
  TopOfBook = 1,
  PriceDepth = 2,
  OrderDepth = 3
}

/*
*******************************************************
* Used to describe the origin of an entry in the book *
*******************************************************
*/
export enum MDOriginType {
  Book = 0,
  OffBook = 1,
  Cross = 2
}

/*
***************************************************************
* Codes that apply special information that the Broker /      *
* Dealer needs to report, as specified by the customer.       *
* NOTE: This field and its values have no bearing on the      *
* ExecInst and TimeInForce fields. These values should not be *
* used instead of ExecInst or TimeInForce. This field and its *
* values are intended for compliance reporting only.          *
* Valid values are grouped by OrderHandlingInstSource(1032).  *
***************************************************************
*/
export enum CustOrderHandlingInst {
  AddOnOrder = 'ADD',
  AllOrNone = 'AON',
  CashNotHeld = 'CNH',
  DirectedOrder = 'DIR',
  ExchangeForPhysicalTransaction = 'E.W',
  FillOrKill = 'FOK',
  ImbalanceOnly = 'IO',
  ImmediateOrCancel = 'IOC',
  LimitOnOpen = 'LOO',
  LimitOnClose = 'LOC',
  MarketAtOpen = 'MAO',
  MarketAtClose = 'MAC',
  MarketOnOpen = 'MOO',
  MarketOnClose = 'MOC',
  MinimumQuantity = 'MQT',
  NotHeld = 'NH',
  OverTheDay = 'OVD',
  Pegged = 'PEG',
  ReserveSizeOrder = 'RSV',
  StopStockTransaction = 'S.W',
  Scale = 'SCL',
  TimeOrder = 'TMO',
  TrailingStop = 'TS',
  Work = 'WRK'
}

/*
*************************************************************
* Identifies the class or source of the "OrderHandlingInst" *
* values. Scope of this will apply to both                  *
* CustOrderHandlingInst and DeskOrderHandlingInst fields.   *
* Required if CustOrderHandlingInst and/or                  *
* DeskOrderHandlingInst is specified.                       *
*************************************************************
*/
export enum OrderHandlingInstSource {
  Nasdoats = 1
}

/*
******************************************************
* Type of trading desk.  Valid values are grouped by *
* DeskTypeSource(1034).                              *
******************************************************
*/
export enum DeskType {
  Agency = 'A',
  Arbitrage = 'AR',
  Derivatives = 'D',
  International = 'IN',
  Institutional = 'IS',
  Other = 'O',
  PreferredTrading = 'PF',
  Proprietary = 'PR',
  ProgramTrading = 'PT',
  Sales = 'S',
  Trading = 'T'
}

/*
************************************************************
* Identifies the class or source of DeskType(1033) values. *
* Required if DeskType(1033) is specified.                 *
************************************************************
*/
export enum DeskTypeSource {
  Nasdoats = 1
}

/*
***************************************************************
* Codes that apply special information that the Broker /      *
* Dealer needs to report.                                     *
* NOTE: This field and its values have no bearing on the      *
* ExecInst and TimeInForce fields. These values should not be *
* used instead of ExecInst or TimeInForce. This field and its *
* values are intended for compliance reporting only.          *
* Valid values are grouped by OrderHandlingInstSource(1032).  *
***************************************************************
*/
export enum DeskOrderHandlingInst {
  AddOnOrder = 'ADD',
  AllOrNone = 'AON',
  CashNotHeld = 'CNH',
  DirectedOrder = 'DIR',
  ExchangeForPhysicalTransaction = 'E.W',
  FillOrKill = 'FOK',
  ImbalanceOnly = 'IO',
  ImmediateOrCancel = 'IOC',
  LimitOnOpen = 'LOO',
  LimitOnClose = 'LOC',
  MarketAtOpen = 'MAO',
  MarketAtClose = 'MAC',
  MarketOnOpen = 'MOO',
  MarketOnClose = 'MOC',
  MinimumQuantity = 'MQT',
  NotHeld = 'NH',
  OverTheDay = 'OVD',
  Pegged = 'PEG',
  ReserveSizeOrder = 'RSV',
  StopStockTransaction = 'S.W',
  Scale = 'SCL',
  TimeOrder = 'TMO',
  TrailingStop = 'TS',
  Work = 'WRK'
}

/*
*********************************************************
* The status of this execution acknowledgement message. *
*********************************************************
*/
export enum ExecAckStatus {
  Received = '0',
  Accepted = '1',
  Don = '2'
}

/*
*********************************************************
* conveys how the collateral should be/has been applied *
*********************************************************
*/
export enum CollApplType {
  SpecificDeposit = 0,
  General = 1
}

/*
**********************************************************
* Specifies whether the UnderlyingFxRate(1045) should be *
* multiplied or divided.                                 *
**********************************************************
*/
export enum UnderlyingFXRateCalc {
  Divide = 'D',
  Multiply = 'M'
}

/*
***************************************************************
* Indicates whether the resulting position after a trade      *
* should be an opening position or closing position. Used for *
* omnibus accounting - where accounts are held on a gross     *
* basis instead of being netted together.                     *
***************************************************************
*/
export enum AllocPositionEffect {
  Open = 'O',
  Close = 'C',
  Rolled = 'R',
  Fifo = 'F'
}

/*
************************************************
* Identifies role of dealer; Agent, Principal, *
* RisklessPrincipal                            *
************************************************
*/
export enum DealingCapacity {
  Agent = 'A',
  Principal = 'P',
  RisklessPrincipal = 'R'
}

/*
***********************************************
* Method under which assignment was conducted *
***********************************************
*/
export enum InstrmtAssignmentMethod {
  ProRata = 'P',
  Random = 'R'
}

/*
****************************************************************
* Used to identify whether the order initiator is an aggressor *
* or not in the trade.                                         *
****************************************************************
*/
export enum AggressorIndicator {
  OrderInitiatorIsAggressor = 'Y',
  OrderInitiatorIsPassive = 'N'
}

/*
**************************************
* Identifies market data quote type. *
**************************************
*/
export enum MDQuoteType {
  Indicative = 0,
  Tradeable = 1,
  RestrictedTradeable = 2,
  Counter = 3,
  IndicativeAndTradeable = 4
}

/*
***************************************************************
* Used to specify what identifier, provided in order depth    *
* market data, to use when hitting (taking) a specific order. *
***************************************************************
*/
export enum RefOrderIDSource {
  SecondaryOrderId = '0',
  OrderId = '1',
  MdEntryId = '2',
  QuoteEntryId = '3',
  OriginalOrderId = '4'
}

/*
************************************************
* Instructs when to refresh DisplayQty (1138). *
************************************************
*/
export enum DisplayWhen {
  Immediate = '1',
  Exhaust = '2'
}

/*
**********************************************************
* Defines what value to use in DisplayQty (1138). If not *
* specified the default DisplayMethod is "1"             *
**********************************************************
*/
export enum DisplayMethod {
  Initial = '1',
  New = '2',
  Random = '3',
  Undisclosed = '4'
}

/*
**************************************************************
* Defines the type of price protection the customer requires *
* on their order.                                            *
**************************************************************
*/
export enum PriceProtectionScope {
  None = '0',
  Local = '1',
  National = '2',
  Global = '3'
}

/*
***********************************************
* Defines the lot type assigned to the order. *
***********************************************
*/
export enum LotType {
  OddLot = '1',
  RoundLot = '2',
  BlockLot = '3',
  RoundLotBasedUpon = '4'
}

/*
****************************
* Defines the type of peg. *
****************************
*/
export enum PegPriceType {
  LastPeg = 1,
  MidPricePeg = 2,
  OpeningPeg = 3,
  MarketPeg = 4,
  PrimaryPeg = 5,
  PegToVwap = 7,
  TrailingStopPeg = 8,
  PegToLimitPrice = 9
}

/*
****************************************************************
* Defines when the trigger will hit, i.e. the action specified *
* by the trigger instructions will come into effect.           *
****************************************************************
*/
export enum TriggerType {
  PartialExecution = '1',
  SpecifiedTradingSession = '2',
  NextAuction = '3',
  PriceMovement = '4'
}

/*
*************************************************************
* Defines the type of action to take when the trigger hits. *
*************************************************************
*/
export enum TriggerAction {
  Activate = '1',
  Modify = '2',
  Cancel = '3'
}

/*
******************************************************
* The type of price that the trigger is compared to. *
******************************************************
*/
export enum TriggerPriceType {
  BestOffer = '1',
  LastTrade = '2',
  BestBid = '3',
  BestBidOrLastTrade = '4',
  BestOfferOrLastTrade = '5',
  BestMid = '6'
}

/*
**************************************************************
* Defines the type of price protection the customer requires *
* on their order.                                            *
**************************************************************
*/
export enum TriggerPriceTypeScope {
  None = '0',
  Local = '1',
  National = '2',
  Global = '3'
}

/*
*****************************************************
* The side from which the trigger price is reached. *
*****************************************************
*/
export enum TriggerPriceDirection {
  Up = 'U',
  Down = 'D'
}

/*
****************************************************************
* The OrdType the order should have after the trigger has hit. *
* Required to express orders that change from Limit to Market. *
* Other values from OrdType (40) may be used if appropriate    *
* and bilaterally agreed upon.                                 *
****************************************************************
*/
export enum TriggerOrderType {
  Market = '1',
  Limit = '2'
}

/*
****************************************************************
* Defines the type of interest behind a trade (fill or partial *
* fill).                                                       *
****************************************************************
*/
export enum OrderCategory {
  Order = '1',
  Quote = '2',
  PrivatelyNegotiatedTrade = '3',
  MultilegOrder = '4',
  LinkedOrder = '5',
  QuoteRequest = '6',
  ImpliedOrder = '7',
  CrossOrder = '8',
  StreamingPrice = '9'
}

/*
***************************************************************
* Specified how the Trade Capture Report should be handled by *
* the Respondent.                                             *
***************************************************************
*/
export enum TradeHandlingInstr {
  TradeConfirmation = '0',
  TwoPartyReport = '1',
  OnePartyReportForMatching = '2',
  OnePartyReportForPassThrough = '3',
  AutomatedFloorOrderRouting = '4',
  TwoPartyReportForClaim = '5'
}

/*
***************************************************************
* Specifies the service pack release being applied at message *
* level. Enumerated field with values assigned at time of     *
* service pack release                                        *
***************************************************************
*/
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
  Fix50Sp2 = '9'
}

/*
**********************************
* The ID source of ExDestination *
**********************************
*/
export enum ExDestinationIDSource {
  Bic = 'B',
  GeneralIdentifier = 'C',
  Proprietary = 'D',
  IsoCountryCode = 'E',
  Mic = 'G'
}

/*
***************************************************************
* Indicates that an implied market should be created for      *
* either the legs of a multi-leg instrument (Implied-in) or   *
* for the multi-leg instrument based on the existence of the  *
* legs (Implied-out). Determination as to whether implied     *
* markets should be created is generally done at the level of *
* the multi-leg instrument. Commonly used in listed           *
* derivatives.                                                *
***************************************************************
*/
export enum ImpliedMarketIndicator {
  NotImplied = 0,
  ImpliedIn = 1,
  ImpliedOut = 2,
  BothImpliedInAndImpliedOut = 3
}

/*
*********************************************************
* Used to identify the reporting mode of the settlement *
* obligation which is either preliminary or final       *
*********************************************************
*/
export enum SettlObligMode {
  Preliminary = 1,
  Final = 2
}

/*
*************************************************************
* Transaction Type - required except where SettlInstMode is *
* 5=Reject SSI request                                      *
*************************************************************
*/
export enum SettlObligTransType {
  Cancel = 'C',
  New = 'N',
  Replace = 'R',
  Restate = 'T'
}

/*
****************************************************************
* Used to identify whether these delivery instructions are for *
* the buyside or the sellside.                                 *
****************************************************************
*/
export enum SettlObligSource {
  InstructionsOfBroker = '1',
  InstructionsForInstitution = '2',
  Investor = '3'
}

/*
**********************************************************
* Identifies the status of an individual quote. See also *
* QuoteStatus(297) which is used for single Quotes.      *
**********************************************************
*/
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

/*
**************************************************************
* Specifies whether a quote is public, i.e. available to the *
* market, or private, i.e. available to a specified          *
* counterparty only.                                         *
**************************************************************
*/
export enum PrivateQuote {
  PrivateQuote = 'Y',
  PublicQuote = 'N'
}

/*
************************************************
* Specifies the type of respondents requested. *
************************************************
*/
export enum RespondentType {
  AllMarketParticipants = 1,
  SpecifiedMarketParticipants = 2,
  AllMarketMakers = 3,
  PrimaryMarketMaker = 4
}

/*
****************************************************************
* Identifies an event related to a SecurityTradingStatus(326). *
* An event occurs and is gone, it is not a state that applies  *
* for a period of time.                                        *
****************************************************************
*/
export enum SecurityTradingEvent {
  OrderImbalance = 1,
  TradingResumes = 2,
  PriceVolatilityInterruption = 3,
  ChangeOfTradingSession = 4,
  ChangeOfTradingSubsession = 5,
  ChangeOfSecurityTradingStatus = 6,
  ChangeOfBookType = 7,
  ChangeOfMarketDepth = 8
}

/*
**********************
* Type of statistics *
**********************
*/
export enum StatsType {
  ExchangeLast = 1,
  High = 2,
  AveragePrice = 3,
  Turnover = 4
}

/*
*****************************************
* Specifies the type of secondary size. *
*****************************************
*/
export enum MDSecSizeType {
  Customer = 1
}

/*
*******************************************************
* Settlement method for a contract. Can be used as an *
* alternative to CFI Code value                       *
*******************************************************
*/
export enum SettlMethod {
  CashSettlementRequired = 'C',
  PhysicalSettlementRequired = 'P'
}

/*
**********************************************
* Type of exercise of a derivatives security *
**********************************************
*/
export enum ExerciseStyle {
  European = 0,
  American = 1,
  Bermuda = 2
}

/*
******************************
* Method for price quotation *
******************************
*/
export enum PriceQuoteMethod {
  Standard = 'STD',
  Index = 'INX',
  InterestRateIndex = 'INT',
  PercentOfPar = 'PCTPAR'
}

/*
***************************************************
* Specifies the type of valuation method applied. *
***************************************************
*/
export enum ValuationMethod {
  PremiumStyle = 'EQTY',
  FuturesStyleMarkToMarket = 'FUT',
  FuturesStyleWithAnAttachedCashAdjustment = 'FUTDA',
  CdsStyleCollateralization = 'CDS',
  CdsInDeliveryUseRecoveryRateToCalculate = 'CDSD'
}

/*
************************************************************
* Indicates whether instruments are pre-listed only or can *
* also be defined via user request                         *
************************************************************
*/
export enum ListMethod {
  PreListedOnly = 0,
  UserRequested = 1
}

/*
************************************************************
* Specifies the type of tick rule which is being described *
************************************************************
*/
export enum TickRuleType {
  Regular = 0,
  Variable = 1,
  Fixed = 2,
  TradedAsASpreadLeg = 3,
  SettledAsASpreadLeg = 4
}

/*
*********************************************************
* Unit of measure for the Maturity Month Year Increment *
*********************************************************
*/
export enum MaturityMonthYearIncrementUnits {
  Months = 0,
  Days = 1,
  Weeks = 2,
  Years = 3
}

/*
**********************************************************
* Format used to generate the MaturityMonthYear for each *
* option                                                 *
**********************************************************
*/
export enum MaturityMonthYearFormat {
  YearMonthOnly = 0,
  YearMonthDay = 1,
  YearMonthWeek = 2
}

/*
****************************************************
* Describes the how the price limits are expressed *
****************************************************
*/
export enum PriceLimitType {
  Price = 0,
  Ticks = 1,
  Percentage = 2
}

/*
***************************************************
* Type of Application Message Request being made. *
***************************************************
*/
export enum ApplReqType {
  Retransmission = 0,
  Subscription = 1,
  RequestLastSeqNum = 2,
  RequestApplications = 3,
  Unsubscribe = 4,
  CancelRetransmission = 5,
  CancelRetransmissionUnsubscribe = 6
}

/*
************************************************************
* Used to indicate the type of acknowledgement being sent. *
************************************************************
*/
export enum ApplResponseType {
  RequestSuccessfullyProcessed = 0,
  ApplicationDoesNotExist = 1,
  MessagesNotAvailable = 2
}

/*
**********************************************************
* Used to return an error code or text associated with a *
* response to an Application Request.                    *
**********************************************************
*/
export enum ApplResponseError {
  ApplicationDoesNotExist = 0,
  MessagesRequestedAreNotAvailable = 1,
  UserNotAuthorizedForApplication = 2
}

/*
****************************************************************
* Identifies an event related to a TradSesStatus(340). An      *
* event occurs and is gone, it is not a state that applies for *
* a period of time.                                            *
****************************************************************
*/
export enum TradSesEvent {
  TradingResumes = 0,
  ChangeOfTradingSession = 1,
  ChangeOfTradingSubsession = 2,
  ChangeOfTradingStatus = 3
}

/*
******************************************
* Specifies the type of action requested *
******************************************
*/
export enum MassActionType {
  SuspendOrders = 1,
  ReleaseOrdersFromSuspension = 2,
  CancelOrders = 3
}

/*
*************************************************
* Specifies scope of Order Mass Action Request. *
*************************************************
*/
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

/*
*************************************************************
* Specifies the action taken by counterparty order handling *
* system as a result of the action type indicated in        *
* MassActionType of the Order Mass Action Request.          *
*************************************************************
*/
export enum MassActionResponse {
  Rejected = 0,
  Accepted = 1
}

/*
*************************************************
* Reason Order Mass Action Request was rejected *
*************************************************
*/
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

/*
*****************************************
* Specifies the type of multileg order. *
*****************************************
*/
export enum MultilegModel {
  PredefinedMultilegSecurity = 0,
  UserDefinedMultilegSecurity = 1,
  UserDefined = 2
}

/*
***********************************************************
* Code to represent how the multileg price is to be       *
* interpreted when applied to the legs.                   *
* (See Volume : "Glossary" for further value definitions) *
***********************************************************
*/
export enum MultilegPriceMethod {
  NetPrice = 0,
  ReversedNetPrice = 1,
  YieldDifference = 2,
  Individual = 3,
  ContractWeightedAveragePrice = 4,
  MultipliedPrice = 5
}

/*
************************************
* Defines the type of contingency. *
************************************
*/
export enum ContingencyType {
  OneCancelsTheOther = 1,
  OneTriggersTheOther = 2,
  OneUpdatesTheOtherAbsolute = 3,
  OneUpdatesTheOtherProportional = 4
}

/*
****************************************************************
* Identifies the reason for rejection of a New Order List      *
* message. Note that OrdRejReason(103) is used if the          *
* rejection is based on properties of an individual order part *
* of the List.                                                 *
****************************************************************
*/
export enum ListRejectReason {
  BrokerCredit = 0,
  ExchangeClosed = 2,
  TooLateToEnter = 4,
  UnknownOrder = 5,
  DuplicateOrder = 6,
  UnsupportedOrderCharacteristic = 11,
  Other = 99
}

/*
**********************************************************
* Indicates if a trade should be reported via a market   *
* reporting service. The indicator governs all reporting *
* services of the recipient. Replaces                    *
* PublishTrdIndicator(852).                              *
**********************************************************
*/
export enum TradePublishIndicator {
  DoNotPublishTrade = 0,
  PublishTrade = 1,
  DeferredPublication = 2
}

/*
***************************************************************
* Specifies the action taken for the specified MarketID(1301) *
* + MarketSegmentID(1300).                                    *
***************************************************************
*/
export enum MarketUpdateAction {
  Add = 'A',
  Delete = 'D',
  Modify = 'M'
}

/*
***************************
* Status of a FIX session *
***************************
*/
export enum SessionStatus {
  SessionActive = 0,
  SessionPasswordChanged = 1,
  SessionPasswordDueToExpire = 2,
  NewSessionPasswordDoesNotComplyWithPolicy = 3,
  SessionLogoutComplete = 4,
  InvalidUsernameOrPassword = 5,
  AccountLocked = 6,
  LogonsAreNotAllowedAtThisTime = 7,
  PasswordExpired = 8
}

/*
******************
* Type of report *
******************
*/
export enum ApplReportType {
  ApplSeqNumReset = 0,
  LastMessageSent = 1,
  ApplicationAlive = 2,
  ResendComplete = 3
}

/*
********************************************************
* Time unit in which the OrderDelay(1428) is expressed *
********************************************************
*/
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

/*
***********************************************************
* Identifies the type of venue where a trade was executed *
***********************************************************
*/
export enum VenueType {
  Electronic = 'E',
  Pit = 'P',
  ExPit = 'X'
}

/*
****************************************
* The reason for updating the RefOrdID *
****************************************
*/
export enum RefOrdIDReason {
  GtcFromPreviousDay = 0,
  PartialFillRemaining = 1,
  OrderChanged = 2
}

/*
***************************************************************
* The customer capacity for this trade at the time of the     *
* order/execution.                                            *
* Primarily used by futures exchanges to indicate the CTICode *
* (customer type indicator) as required by the US CFTC        *
* (Commodity Futures Trading Commission).                     *
***************************************************************
*/
export enum OrigCustOrderCapacity {
  MemberTradingForTheirOwnAccount = 1,
  ClearingFirmTradingForItsProprietaryAccount = 2,
  MemberTradingForAnotherMember = 3,
  AllOther = 4
}

/*
******************************
* Type of pricing model used *
******************************
*/
export enum ModelType {
  UtilityProvidedStandardModel = 0,
  ProprietaryModel = 1
}

/*
****************************************************************
* Indicates the type of multiplier being applied to the        *
* contract. Can be optionally used to further define what unit *
* ContractMultiplier(tag 231) is expressed in.                 *
****************************************************************
*/
export enum ContractMultiplierUnit {
  Shares = 0,
  Hours = 1,
  Days = 2
}

/*
***************************************************************
* The industry standard flow schedule by which electricity or *
* natural gas is traded. Schedules exist by regions and       *
* on-peak and off-peak status, such as "Western Peak".        *
***************************************************************
*/
export enum FlowScheduleType {
  NercEasternOffPeak = 0,
  NercWesternOffPeak = 1,
  NercCalendarAllDaysInMonth = 2,
  NercEasternPeak = 3,
  NercWesternPeak = 4
}

/*
***********************************************************
* Identifies the source of rate information.              *
* For FX, the reference source to be used for the FX spot *
* rate.                                                   *
***********************************************************
*/
export enum RateSource {
  Bloomberg = 0,
  Reuters = 1,
  Telerate = 2,
  Other = 99
}

/*
***************************************************************
* Indicates whether the rate source specified is a primary or *
* secondary source.                                           *
***************************************************************
*/
export enum RateSourceType {
  Primary = 0,
  Secondary = 1
}

/*
**************************************************************
* A category of CDS credit even in which the underlying bond *
* experiences a restructuring.                               *
* Used to define a CDS instrument.                           *
**************************************************************
*/
export enum RestructuringType {
  FullRestructuring = 'FR',
  ModifiedRestructuring = 'MR',
  ModifiedModRestructuring = 'MM',
  NoRestructuringSpecified = 'XR'
}

/*
****************************************************************
* Specifies which issue (underlying bond) will receive payment *
* priority in the event of a default.                          *
* Used to define a CDS instrument.                             *
****************************************************************
*/
export enum Seniority {
  SeniorSecured = 'SD',
  Senior = 'SR',
  Subordinated = 'SB'
}

/*
**************************************
* Specifies a type of Security List. *
**************************************
*/
export enum SecurityListType {
  IndustryClassification = 1,
  TradingList = 2,
  Market = 3,
  NewspaperList = 4
}

/*
****************************************************************
* Specifies a specific source for a SecurityListType. Relevant *
* when a certain type can be provided from various sources.    *
****************************************************************
*/
export enum SecurityListTypeSource {
  Icb = 1,
  Naics = 2,
  Gics = 3
}

/*
****************************
* Category of news mesage. *
****************************
*/
export enum NewsCategory {
  CompanyNews = 0,
  MarketplaceNews = 1,
  FinancialMarketNews = 2,
  TechnicalNews = 3,
  OtherNews = 99
}

/*
****************************************************************
* Type of reference to another News Message item. Defines if   *
* the referenced news item is a replacement, is in a different *
* language, or is complimentary.                               *
****************************************************************
*/
export enum NewsRefType {
  Replacement = 0,
  OtherLanguage = 1,
  Complimentary = 2
}

/*
****************************************************************
* Specifies how the strike price is determined at the point of *
* option exercise. The strike may be fixed throughout the life *
* of the option, set at expiration to the value of the         *
* underlying, set to the average value of the underlying , or  *
* set to the optimal value of the underlying.                  *
* Conditionally, required if value is other than "fixed".      *
****************************************************************
*/
export enum StrikePriceDeterminationMethod {
  FixedStrike = 1,
  StrikeSetAtExpiration = 2,
  StrikeSetToAverageAcrossLife = 3,
  StrikeSetToOptimalValue = 4
}

/*
**************************************************************
* Specifies the boundary condition to be used for the strike *
* price relative to the underlying price at the point of     *
* option exercise.                                           *
**************************************************************
*/
export enum StrikePriceBoundaryMethod {
  LessThan = 1,
  LessThanOrEqual = 2,
  Equal = 3,
  GreaterThanOrEqual = 4,
  GreaterThan = 5
}

/*
****************************************************************
* Specifies how the underlying price is determined at the      *
* point of option exercise. The underlying price may be set to *
* the current settlement price, set to a special reference,    *
* set to the optimal value of the underlying during the        *
* defined period ("Look-back") or set to the average value of  *
* the underlying during the defined period ("Asian option").   *
****************************************************************
*/
export enum UnderlyingPriceDeterminationMethod {
  Regular = 1,
  SpecialReference = 2,
  OptimalValue = 3,
  AverageValue = 4
}

/*
*********************************************************
* Indicates the type of payout that will result from an *
* in-the-money option.                                  *
*********************************************************
*/
export enum OptPayoutType {
  Vanilla = 1,
  Capped = 2,
  Binary = 3
}

/*
*****************************************
* Identifies the type of complex event. *
*****************************************
*/
export enum ComplexEventType {
  Capped = 1,
  Trigger = 2,
  KnockInUp = 3,
  KockInDown = 4,
  KnockOutUp = 5,
  KnockOutDown = 6,
  Underlying = 7,
  ResetBarrier = 8,
  RollingBarrier = 9
}

/*
*************************************************************
* Specifies the boundary condition to be used for the event *
* price relative to the underlying price at the point the   *
* complex event outcome takes effect as determined by the   *
* ComplexEventPriceTimeType.                                *
*************************************************************
*/
export enum ComplexEventPriceBoundaryMethod {
  LessThanComplexEventPrice = 1,
  LessThanOrEqualToComplexEventPrice = 2,
  EqualToComplexEventPrice = 3,
  GreaterThanOrEqualToComplexEventPrice = 4,
  GreaterThanComplexEventPrice = 5
}

/*
***************************************************************
* Specifies when the complex event outcome takes effect. The  *
* outcome of a complex event is a payout or barrier action as *
* specified by the ComplexEventType.                          *
***************************************************************
*/
export enum ComplexEventPriceTimeType {
  Expiration = 1,
  Immediate = 2,
  SpecifiedDate = 3
}

/*
***************************************************************
* Specifies the condition between complex events when more    *
* than one event is specified.                                *
* Multiple barrier events would use an "or" condition since   *
* only one can be effective at a given time. A set of digital *
* range events would use an "and" condition since both        *
* conditions must be in effect for a payout to result.        *
***************************************************************
*/
export enum ComplexEventCondition {
  And = 1,
  Or = 2
}

/*
**************************************
* Type of stream assignment request. *
**************************************
*/
export enum StreamAsgnReqType {
  StreamAssignmentForNewCustomer = 1,
  StreamAssignmentForExistingCustomer = 2
}

/*
*****************************************************
* Reason code for stream assignment request reject. *
*****************************************************
*/
export enum StreamAsgnRejReason {
  UnknownClient = 0,
  ExceedsMaximumSize = 1,
  UnknownOrInvalidCurrencyPair = 2,
  NoAvailableStream = 3,
  Other = 99
}

/*
****************************
* Type of acknowledgement. *
****************************
*/
export enum StreamAsgnAckType {
  AssignmentAccepted = 0,
  AssignmentRejected = 1
}

/*
*******************************************************
* The type of assignment being affected in the Stream *
* Assignment Report.                                  *
*******************************************************
*/
export enum StreamAsgnType {
  Assignment = 1,
  Rejected = 2,
  Terminate = 3
}

