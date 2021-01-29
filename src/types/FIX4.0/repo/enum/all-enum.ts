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
  Cancel = 'C',
  New = 'N',
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
  Absolute = '3'
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
  InstitutionsOnly = 'I',
  LastPeg = 'L',
  MidPricePeg = 'M',
  NonNegotiable = 'N',
  OpeningPeg = 'O',
  MarketPeg = 'P',
  PrimaryPeg = 'R',
  Suspend = 'S'
}

/*
*******************************
* Identifies transaction type *
*******************************
*/
export enum ExecTransType {
  New = '0',
  Cancel = '1',
  Correct = '2',
  Status = '3'
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
**********************************************************
* Identifies class of alternative SecurityID             *
* 100+ are reserved for private security identifications *
**********************************************************
*/
export enum IDSource {
  Cusip = '1',
  Sedol = '2',
  Quik = '3',
  IsinNumber = '4',
  RicCode = '5'
}

/*
****************************************************************
* Indicates if, and on which other services, the indication    *
* has been advertised. Each character represents an additional *
* service (e.g. if on Bridge and Autex, field = BA, if only on *
* Autex, field = A)                                            *
****************************************************************
*/
export enum IOIOthSvc {
  Autex = 'A',
  Bridge = 'B'
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
*************************************************
* Number of shares in numeric or relative size. *
*************************************************
*/
export enum IOIShares {
  Large = 'L',
  Medium = 'M',
  Small = 'S'
}

/*
*******************************************
* Identifies IOI message transaction type *
*******************************************
*/
export enum IOITransType {
  Cancel = 'C',
  New = 'N',
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
****************************************************************
* Defines message type. ALWAYS THIRD FIELD IN MESSAGE. (Always *
* unencrypted)                                                 *
* Note: A "U" as the first character in the MsgType field      *
* indicates that the message format is privately defined       *
* between the sender and receiver.                             *
****************************************************************
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
  Quote = 'S'
}

/*
***************************************
* Identifies current status of order. *
***************************************
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
  Expired = 'C'
}

/*
***************
* Order type. *
***************
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
  Pegged = 'P'
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
********************************************************
* Indicates order type upon which exchange Rule 80A is *
* applied.                                             *
********************************************************
*/
export enum Rule80A {
  AgencySingleOrder = 'A',
  ProprietaryNonAlgo = 'C',
  ProgramOrderMember = 'D',
  IndividualInvestor = 'I',
  ProprietaryAlgo = 'J',
  AgencyAlgo = 'K',
  ProgramOrderOtherMember = 'M',
  AgentForOtherMember = 'N',
  AgencyIndexArb = 'U',
  AllOtherOrdersAsAgentForOtherMember = 'W',
  AgencyNonAlgo = 'Y'
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
  SellShortExempt = '6'
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
  GoodTillDate = '6'
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
***************************************************************
* Indicates order settlement period. Absence of this field is *
* interpreted as Regular. Regular is defined as the default   *
* settlement period for the particular security on the        *
* exchange of execution.                                      *
***************************************************************
*/
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
  TPlus5 = '9'
}

/*
******************************************
* Identifies allocation transaction type *
******************************************
*/
export enum AllocTransType {
  New = '0',
  Replace = '1',
  Cancel = '2'
}

/*
***************************************************************
* Processing code for sub-account. Absence of this field in   *
* AllocAccount / AllocShares / ProcessCode instance indicates *
* regular trade.                                              *
***************************************************************
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
  Received = 3
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
  OtherSeeText = 7
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
**************************************************************
* Execution destination as defined by institution when order *
* is entered.                                                *
**************************************************************
*/
export enum ExDestination {
  None = '0',
  Posit = '4'
}

/*
*************************************************
* Code to identify reason for cancel rejection. *
*************************************************
*/
export enum CxlRejReason {
  TooLateToCancel = 0,
  UnknownOrder = 1
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
  TooLateToEnter = 4
}

/*
****************************
* Code to qualify IOI use. *
****************************
*/
export enum IOIQualifier {
  AllOrNone = 'A',
  AtTheClose = 'C',
  InTouchWith = 'I',
  Limit = 'L',
  MoreBehind = 'M',
  AtTheOpen = 'O',
  TakingAPosition = 'P',
  AtTheMarket = 'Q',
  PortfolioShown = 'S',
  ThroughTheDay = 'T',
  Versus = 'V',
  Indication = 'W',
  CrossingOpportunity = 'X'
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
* conjuction with a short sell order.                    *
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
*********************************************************
* Defines if cancel is for part or all of the remaining *
* quantity of an order.                                 *
*********************************************************
*/
export enum CxlType {
  FullRemainingQuantity = 'F',
  PartialCancel = 'P'
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
  Other = '7'
}

