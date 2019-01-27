export enum MsgTag {
/*
**************************************************************
* Account mnemonic as agreed between broker and institution. *
**************************************************************
*/
  Account = 1,
/*
*************************************************
* Unique identifier of advertisement message.   *
* (Prior to FIX 4.1 this field was of type int) *
*************************************************
*/
  AdvId = 2,
/*
*****************************************************
* Reference identifier used with CANCEL and REPLACE *
* transaction types.                                *
* (Prior to FIX 4.1 this field was of type int)     *
*****************************************************
*/
  AdvRefID = 3,
/*
*************************************
* Broker's side of advertised trade *
*************************************
*/
  AdvSide = 4,
/*
*****************************************************
* Identifies advertisement message transaction type *
*****************************************************
*/
  AdvTransType = 5,
/*
********************************************************
* Calculated average price of all fills on this order. *
********************************************************
*/
  AvgPx = 6,
/*
***********************************************************
* Message sequence number of first message in range to be *
* resent                                                  *
***********************************************************
*/
  BeginSeqNo = 7,
/*
*************************************************************
* Identifies beginning of new message and protocol version. *
* ALWAYS FIRST FIELD IN MESSAGE. (Always unencrypted)       *
*************************************************************
*/
  BeginString = 8,
/*
************************************************************
* Message length, in bytes, forward to the CheckSum field. *
* ALWAYS SECOND FIELD IN MESSAGE. (Always unencrypted)     *
************************************************************
*/
  BodyLength = 9,
/*
***************************************************************
* Three byte, simple checksum (see Appendix B: CheckSum       *
* Calculation for description). ALWAYS LAST FIELD IN MESSAGE; *
* i.e. serves, with the trailing <SOH>, as the end-of-message *
* delimiter. Always defined as three characters. (Always      *
* unencrypted)                                                *
***************************************************************
*/
  CheckSum = 10,
/*
****************************************************************
* Unique identifier for Order as assigned by institution       *
* (identified by SenderCompID or OnBehalfOfCompID as           *
* appropriate). Uniqueness must be guaranteed within a single  *
* trading day. Firms, particularly those which electronically  *
* submit multi-day orders, trade globally or throughout market *
* close periods,should ensure uniqueness across days, for      *
* example by embedding a date within the ClOrdID field.        *
****************************************************************
*/
  ClOrdID = 11,
/*
****************************************************************
* Commission. Note if CommType is percentage, Commission of 5% *
* should be represented as .05.                                *
****************************************************************
*/
  Commission = 12,
/*
*******************
* Commission type *
*******************
*/
  CommType = 13,
/*
*************************************************
* Total number of shares filled.                *
* (Prior to FIX 4.2 this field was of type int) *
*************************************************
*/
  CumQty = 14,
/*
****************************************************************
* Identifies currency used for price. Absence of this field is *
* interpreted as the default for the security. It is           *
* recommended that systems provide the currency value whenever *
* possible. See Appendix A: Valid Currency Codes for           *
* information on obtaining valid values.                       *
****************************************************************
*/
  Currency = 15,
/*
***************************************************************
* Message sequence number of last message in range to be      *
* resent. If request is for a single message BeginSeqNo =     *
* EndSeqNo. If request is for all messages subsequent to a    *
* particular message, EndSeqNo = "0" (representing infinity). *
***************************************************************
*/
  EndSeqNo = 16,
/*
****************************************************************
* Unique identifier of execution message as assigned by broker *
* (will be 0 (zero) for ExecTransType=3 (Status)).             *
* Uniqueness must be guaranteed within a single trading day or *
* the life of a multi-day order. Firms which accept multi-day  *
* orders should consider embedding a date within the ExecID    *
* field to assure uniqueness across days.                      *
* (Prior to FIX 4.1 this field was of type int)                *
****************************************************************
*/
  ExecID = 17,
/*
****************************************************************
* Instructions for order handling on exchange trading floor.   *
* If more than one instruction is applicable to an order, this *
* field can contain multiple instructions separated by space.  *
****************************************************************
*/
  ExecInst = 18,
/*
*****************************************************
* Reference identifier used with Cancel and Correct *
* transaction types.                                *
* (Prior to FIX 4.1 this field was of type int)     *
*****************************************************
*/
  ExecRefID = 19,
/*
*******************************
* Identifies transaction type *
*******************************
*/
  ExecTransType = 20,
/*
***********************************************************
* Instructions for order handling on Broker trading floor *
***********************************************************
*/
  HandlInst = 21,
/*
**********************************************
* Identifies class of alternative SecurityID *
**********************************************
*/
  IDSource = 22,
/*
*************************************************
* Unique identifier of IOI message.             *
* (Prior to FIX 4.1 this field was of type int) *
*************************************************
*/
  IOIid = 23,
  IOIOthSvc = 24,
/*
**********************************
* Relative quality of indication *
**********************************
*/
  IOIQltyInd = 25,
/*
******************************************************
* Reference identifier used with CANCEL and REPLACE, *
* transaction types.                                 *
* (Prior to FIX 4.1 this field was of type int)      *
******************************************************
*/
  IOIRefID = 26,
/*
*************************************************
* Number of shares in numeric or relative size. *
*************************************************
*/
  IOIShares = 27,
/*
*******************************************
* Identifies IOI message transaction type *
*******************************************
*/
  IOITransType = 28,
/*
**************************************
* Broker capacity in order execution *
**************************************
*/
  LastCapacity = 29,
/*
*************************************
* Market of execution for last fill *
*************************************
*/
  LastMkt = 30,
/*
*****************************************************
* Price of this (last) fill. Field not required for *
* ExecTransType = 3 (Status)                        *
*****************************************************
*/
  LastPx = 31,
/*
*************************************************************
* Quantity of shares bought/sold on this (last) fill. Field *
* not required for ExecTransType = 3 (Status)               *
* (Prior to FIX 4.2 this field was of type int)             *
*************************************************************
*/
  LastShares = 32,
/*
*******************************************
* Identifies number of lines of text body *
*******************************************
*/
  LinesOfText = 33,
/*
************************************
* Integer message sequence number. *
************************************
*/
  MsgSeqNum = 34,
/*
****************************************************************
* Defines message type. ALWAYS THIRD FIELD IN MESSAGE. (Always *
* unencrypted)                                                 *
* Note: A "U" as the first character in the MsgType field      *
* (i.e. U1, U2, etc) indicates that the message format is      *
* privately defined between the sender and receiver.           *
****************************************************************
*/
  MsgType = 35,
/*
***********************
* New sequence number *
***********************
*/
  NewSeqNo = 36,
/*
**************************************************************
* Unique identifier for Order as assigned by broker.         *
* Uniqueness must be guaranteed within a single trading day. *
* Firms which accept multi-day orders should consider        *
* embedding a date within the OrderID field to assure        *
* uniqueness across days.                                    *
**************************************************************
*/
  OrderID = 37,
/*
****************************************************************
* Number of shares ordered. This represents the number of      *
* shares for equities or based on normal convention the number *
* of contracts for options, futures, convertible bonds, etc.   *
* (Prior to FIX 4.2 this field was of type int)                *
****************************************************************
*/
  OrderQty = 38,
/*
***************************************
* Identifies current status of order. *
***************************************
*/
  OrdStatus = 39,
/*
***************
* Order type. *
***************
*/
  OrdType = 40,
/*
***************************************************************
* ClOrdID of the previous order (NOT the initial order of the *
* day) as assigned by the institution, used to identify the   *
* previous order in cancel and cancel/replace requests.       *
***************************************************************
*/
  OrigClOrdID = 41,
/*
********************************************************
* Time of message origination (always expressed in UTC *
* (Universal Time Coordinated, also known as "GMT"))   *
********************************************************
*/
  OrigTime = 42,
/*
**********************************************************
* Indicates possible retransmission of message with this *
* sequence number                                        *
**********************************************************
*/
  PossDupFlag = 43,
/*
*******************
* Price per share *
*******************
*/
  Price = 44,
/*
*************************************
* Reference message sequence number *
*************************************
*/
  RefSeqNum = 45,
/*
************************************************************
* Symbol of issue related to story. Can be repeated within *
* message to identify multiple companies.                  *
************************************************************
*/
  RelatdSym = 46,
/*
****************************************************************
* Note that the name of this field is changing to              *
* "OrderCapacity" as Rule80A is a very US market-specific      *
* term. Other world markets need to convey similar             *
* information, however, often a subset of the US values. . See *
* the "Rule80A (aka OrderCapacity) Usage by Market" appendix   *
* for market-specific usage of this field.                     *
****************************************************************
*/
  Rule80A = 47,
/*
************************************************
* CUSIP or other alternate security identifier *
************************************************
*/
  SecurityID = 48,
/*
*********************************************************
* Assigned value used to identify firm sending message. *
*********************************************************
*/
  SenderCompID = 49,
/*
***************************************************************
* Assigned value used to identify specific message originator *
* (desk, trader, etc.)                                        *
***************************************************************
*/
  SenderSubID = 50,
/*
********************************************************
* No longer used. Included here for reference to prior *
* versions.                                            *
********************************************************
*/
  SendingDate = 51,
/*
*********************************************************
* Time of message transmission (always expressed in UTC *
* (Universal Time Coordinated, also known as "GMT")     *
*********************************************************
*/
  SendingTime = 52,
/*
*************************************************
* Number of shares                              *
* (Prior to FIX 4.2 this field was of type int) *
*************************************************
*/
  Shares = 53,
/*
*****************
* Side of order *
*****************
*/
  Side = 54,
/*
*****************
* Ticker symbol *
*****************
*/
  Symbol = 55,
/*
***************************************************
* Assigned value used to identify receiving firm. *
***************************************************
*/
  TargetCompID = 56,
/*
***************************************************************
* Assigned value used to identify specific individual or unit *
* intended to receive message. "ADMIN" reserved for           *
* administrative messages not intended for a specific user.   *
***************************************************************
*/
  TargetSubID = 57,
/*
***************************************************************
* Free format text string                                     *
* (Note: this field does not have a specified maximum length) *
***************************************************************
*/
  Text = 58,
/*
**************************************************************
* Specifies how long the order remains in effect. Absence of *
* this field is interpreted as DAY.                          *
**************************************************************
*/
  TimeInForce = 59,
/*
******************************************************
* Time of execution/order creation (expressed in UTC *
* (Universal Time Coordinated, also known as "GMT")  *
******************************************************
*/
  TransactTime = 60,
/*
****************
* Urgency flag *
****************
*/
  Urgency = 61,
/*
***************************************************************
* Indicates expiration time of indication message (always     *
* expressed in UTC (Universal Time Coordinated, also known as *
* "GMT")                                                      *
***************************************************************
*/
  ValidUntilTime = 62,
/*
***************************************************************
* Indicates order settlement period. Absence of this field is *
* interpreted as Regular. Regular is defined as the default   *
* settlement period for the particular security on the        *
* exchange of execution.                                      *
***************************************************************
*/
  SettlmntTyp = 63,
/*
**************************************************************
* Specific date of trade settlement (SettlementDate) in      *
* YYYYMMDD format. Required when SettlmntTyp = 6 (Future) or *
* SettlmntTyp = 8 (Sellers Option). (expressed in local time *
* at place of settlement)                                    *
**************************************************************
*/
  FutSettDate = 64,
/*
**************************************************************
* Additional information about the security (e.g. preferred, *
* warrants, etc.). Note also see SecurityType.               *
* Valid values:                                              *
* As defined in the NYSE Stock and bond Symbol Directory and *
* in the AMEX Fitch Directory                                *
**************************************************************
*/
  SymbolSfx = 65,
/*
****************************************************************
* Unique identifier for list as assigned by institution, used  *
* to associate multiple individual orders. Uniqueness must be  *
* guaranteed within a single trading day. Firms which generate *
* multi-day orders should consider embedding a date within the *
* ListID field to assure uniqueness across days.               *
****************************************************************
*/
  ListID = 66,
/*
***************************************************************
* Sequence of individual order within list (i.e. ListSeqNo of *
* ListNoOrds, 2 of 25, 3 of 25, . . . )                       *
***************************************************************
*/
  ListSeqNo = 67,
/*
**************************************************************
* Total number of list order entries across all messages.    *
* Should be the sum of all NoOrders in each message that has *
* repeating list order entries related to the same ListID.   *
* Used to support fragmentation.                             *
* (Prior to FIX 4.2 this field was named "ListNoOrds")       *
**************************************************************
*/
  TotNoOrders = 68,
/*
*********************************************************
* Free format text message containing list handling and *
* execution instructions.                               *
*********************************************************
*/
  ListExecInst = 69,
/*
*************************************************
* Unique identifier for allocation message.     *
* (Prior to FIX 4.1 this field was of type int) *
*************************************************
*/
  AllocID = 70,
/*
******************************************
* Identifies allocation transaction type *
******************************************
*/
  AllocTransType = 71,
/*
*************************************************************
* Reference identifier to be used with Replace, Cancel, and *
* Calculated AllocTransType messages.                       *
* (Prior to FIX 4.1 this field was of type int)             *
*************************************************************
*/
  RefAllocID = 72,
/*
*********************************************************
* Indicates number of orders to be combined for average *
* pricing and allocation.                               *
*********************************************************
*/
  NoOrders = 73,
/*
***************************************************************
* Indicates number of decimal places to be used for average   *
* pricing. Absence of this field indicates that default       *
* precision arranged by the broker/institution is to be used. *
***************************************************************
*/
  AvgPrxPrecision = 74,
/*
****************************************************************
* Indicates date of trade referenced in this message in        *
* YYYYMMDD format. Absence of this field indicates current day *
* (expressed in local time at place of trade).                 *
****************************************************************
*/
  TradeDate = 75,
/*
********************************************************
* Identifies executing / give-up broker. Standard NASD *
* market-maker mnemonic is preferred.                  *
********************************************************
*/
  ExecBroker = 76,
/*
***************************************************************
* Indicates whether the resulting position after a trade      *
* should be an opening position or closing position. Used for *
* omnibus accounting - where accounts are held on a gross     *
* basis instead of being netted together.                     *
***************************************************************
*/
  OpenClose = 77,
/*
********************************************************
* Number of repeating AllocAccount/AllocPrice entries. *
********************************************************
*/
  NoAllocs = 78,
/*
************************
* Sub-account mnemonic *
************************
*/
  AllocAccount = 79,
/*
************************************************************
* Number of shares to be allocated to specific sub-account *
* (Prior to FIX 4.2 this field was of type int)            *
************************************************************
*/
  AllocShares = 80,
/*
****************************************************************
* Processing code for sub-account. Absence of this field in    *
* AllocAccount / AllocPrice/AllocShares / ProcessCode instance *
* indicates regular trade.                                     *
****************************************************************
*/
  ProcessCode = 81,
/*
******************************************
* Total number of reports within series. *
******************************************
*/
  NoRpts = 82,
/*
****************************************************
* Sequence number of message within report series. *
****************************************************
*/
  RptSeq = 83,
/*
***************************************************
* Total number of shares canceled for this order. *
* (Prior to FIX 4.2 this field was of type int)   *
***************************************************
*/
  CxlQty = 84,
/*
********************************************************
* Number of delivery instruction fields to follow      *
* No longer used. Included here for reference to prior *
* versions.                                            *
********************************************************
*/
  NoDlvyInst = 85,
/*
************************************************************
* Free format text field to indicate delivery instructions *
* No longer used. Included here for reference to prior     *
* versions.                                                *
************************************************************
*/
  DlvyInst = 86,
/*
************************************
* Identifies status of allocation. *
************************************
*/
  AllocStatus = 87,
/*
************************************
* Identifies reason for rejection. *
************************************
*/
  AllocRejCode = 88,
/*
************************
* Electronic signature *
************************
*/
  Signature = 89,
/*
*******************************
* Length of encrypted message *
*******************************
*/
  SecureDataLen = 90,
/*
********************************
* Actual encrypted data stream *
********************************
*/
  SecureData = 91,
/*
***********************************
* Broker to receive trade credit. *
***********************************
*/
  BrokerOfCredit = 92,
/*
***************************************
* Number of bytes in signature field. *
***************************************
*/
  SignatureLength = 93,
/*
***********************
* Email message type. *
***********************
*/
  EmailType = 94,
/*
**************************************
* Number of bytes in raw data field. *
**************************************
*/
  RawDataLength = 95,
/*
*************************************************************
* Unformatted raw data, can include bitmaps, word processor *
* documents, etc.                                           *
*************************************************************
*/
  RawData = 96,
/*
****************************************************************
* Indicates that message may contain information that has been *
* sent under another sequence number.                          *
****************************************************************
*/
  PossResend = 97,
/*
*************************
* Method of encryption. *
*************************
*/
  EncryptMethod = 98,
/*
*******************
* Price per share *
*******************
*/
  StopPx = 99,
/*
**************************************************************
* Execution destination as defined by institution when order *
* is entered.                                                *
* Valid values:                                              *
* See Appendix C                                             *
**************************************************************
*/
  ExDestination = 100,
/*
*************************************************
* Code to identify reason for cancel rejection. *
*************************************************
*/
  CxlRejReason = 102,
/*
************************************************
* Code to identify reason for order rejection. *
************************************************
*/
  OrdRejReason = 103,
/*
****************************
* Code to qualify IOI use. *
****************************
*/
  IOIQualifier = 104,
/*
*********************************************************
* Identifier to aid in the management of multiple lists *
* derived from a single, master list.                   *
*********************************************************
*/
  WaveNo = 105,
/*
****************************************************************
* Company name of security issuer (e.g. International Business *
* Machines)                                                    *
****************************************************************
*/
  Issuer = 106,
/*
*************************
* Security description. *
*************************
*/
  SecurityDesc = 107,
/*
********************************
* Heartbeat interval (seconds) *
********************************
*/
  HeartBtInt = 108,
/*
****************************************************************
* Firm identifier used in third party-transactions (should not *
* be a substitute for OnBehalfOfCompID/DeliverToCompID).       *
****************************************************************
*/
  ClientID = 109,
/*
*************************************************
* Minimum quantity of an order to be executed.  *
* (Prior to FIX 4.2 this field was of type int) *
*************************************************
*/
  MinQty = 110,
/*
***************************************************************
* Maximum number of shares within an order to be shown on the *
* exchange floor at any given time.                           *
* (Prior to FIX 4.2 this field was of type int)               *
***************************************************************
*/
  MaxFloor = 111,
/*
**************************************************************
* Identifier included in Test Request message to be returned *
* in resulting Heartbeat                                     *
**************************************************************
*/
  TestReqID = 112,
/*
******************************************************
* Identifies party of trade responsible for exchange *
* reporting.                                         *
******************************************************
*/
  ReportToExch = 113,
/*
**********************************************************
* Indicates whether the broker is to locate the stock in *
* conjunction with a short sell order.                   *
**********************************************************
*/
  LocateReqd = 114,
/*
****************************************************************
* Assigned value used to identify firm originating message if  *
* the message was delivered by a third party i.e. the third    *
* party firm identifier would be delivered in the SenderCompID *
* field and the firm originating the message in this field.    *
****************************************************************
*/
  OnBehalfOfCompID = 115,
/*
***************************************************************
* Assigned value used to identify specific message originator *
* (i.e. trader) if the message was delivered by a third party *
***************************************************************
*/
  OnBehalfOfSubID = 116,
/*
*******************************
* Unique identifier for quote *
*******************************
*/
  QuoteID = 117,
/*
***************************************************************
* Total amount due as the result of the transaction (e.g. for *
* Buy order - principal + commission + fees) reported in      *
* currency of execution.                                      *
***************************************************************
*/
  NetMoney = 118,
/*
***************************************************************
* Total amount due expressed in settlement currency (includes *
* the effect of the forex transaction)                        *
***************************************************************
*/
  SettlCurrAmt = 119,
/*
*********************************************
* Currency code of settlement denomination. *
*********************************************
*/
  SettlCurrency = 120,
/*
*********************************************************
* Indicates request for forex accommodation trade to be *
* executed along with security transaction.             *
*********************************************************
*/
  ForexReq = 121,
/*
**************************************************************
* Original time of message transmission (always expressed in *
* UTC (Universal Time Coordinated, also known as "GMT") when *
* transmitting orders as the result of a resend request.     *
**************************************************************
*/
  OrigSendingTime = 122,
/*
************************************************************
* Indicates that the Sequence Reset message is replacing   *
* administrative or application messages which will not be *
* resent.                                                  *
************************************************************
*/
  GapFillFlag = 123,
/*
******************************************************
* No of execution repeating group entries to follow. *
******************************************************
*/
  NoExecs = 124,
/*
********************************************************
* No longer used. Included here for reference to prior *
* versions.                                            *
********************************************************
*/
  CxlType = 125,
/*
**********************************************************
* Time/Date of order expiration (always expressed in UTC *
* (Universal Time Coordinated, also known as "GMT")      *
**********************************************************
*/
  ExpireTime = 126,
/*
***********************************
* Reason for execution rejection. *
***********************************
*/
  DKReason = 127,
/*
****************************************************************
* Assigned value used to identify the firm targeted to receive *
* the message if the message is delivered by a third party     *
* i.e. the third party firm identifier would be delivered in   *
* the TargetCompID field and the ultimate receiver firm ID in  *
* this field.                                                  *
****************************************************************
*/
  DeliverToCompID = 128,
/*
**************************************************************
* Assigned value used to identify specific message recipient *
* (i.e. trader) if the message is delivered by a third party *
**************************************************************
*/
  DeliverToSubID = 129,
/*
****************************************************************
* Indicates that IOI is the result of an existing agency order *
* or a facilitation position resulting from an agency order,   *
* not from principal trading or order solicitation activity.   *
****************************************************************
*/
  IOINaturalFlag = 130,
/*
***************************************
* Unique identifier for quote request *
***************************************
*/
  QuoteReqID = 131,
/*
******************
* Bid price/rate *
******************
*/
  BidPx = 132,
/*
********************
* Offer price/rate *
********************
*/
  OfferPx = 133,
/*
*************************************************
* Quantity of bid                               *
* (Prior to FIX 4.2 this field was of type int) *
*************************************************
*/
  BidSize = 134,
/*
*************************************************
* Quantity of offer                             *
* (Prior to FIX 4.2 this field was of type int) *
*************************************************
*/
  OfferSize = 135,
/*
****************************************************
* Number of repeating groups of miscellaneous fees *
****************************************************
*/
  NoMiscFees = 136,
/*
***************************
* Miscellaneous fee value *
***************************
*/
  MiscFeeAmt = 137,
/*
*********************************
* Currency of miscellaneous fee *
*********************************
*/
  MiscFeeCurr = 138,
/*
****************************************
* Indicates type of miscellaneous fee. *
****************************************
*/
  MiscFeeType = 139,
/*
***************************************
* Previous closing price of security. *
***************************************
*/
  PrevClosePx = 140,
/*
***********************************************************
* Indicates that the both sides of the FIX session should *
* reset sequence numbers.                                 *
***********************************************************
*/
  ResetSeqNumFlag = 141,
/*
****************************************************************
* Assigned value used to identify specific message             *
* originators location (i.e. geographic location and/or desk, *
* trader)                                                      *
****************************************************************
*/
  SenderLocationID = 142,
/*
***********************************************************
* Assigned value used to identify specific message        *
* destinations location (i.e. geographic location and/or *
* desk, trader)                                           *
***********************************************************
*/
  TargetLocationID = 143,
/*
****************************************************************
* Assigned value used to identify specific message             *
* originators location (i.e. geographic location and/or desk, *
* trader) if the message was delivered by a third party        *
****************************************************************
*/
  OnBehalfOfLocationID = 144,
/*
****************************************************************
* Assigned value used to identify specific message recipients *
* location (i.e. geographic location and/or desk, trader) if   *
* the message was delivered by a third party                   *
****************************************************************
*/
  DeliverToLocationID = 145,
/*
********************************************************
* Specifies the number of repeating symbols specified. *
********************************************************
*/
  NoRelatedSym = 146,
/*
***********************************
* The subject of an Email message *
***********************************
*/
  Subject = 147,
/*
**********************************
* The headline of a News message *
**********************************
*/
  Headline = 148,
/*
*******************************************************
* A URL (Uniform Resource Locator) link to additional *
* information (i.e. http://www.XYZ.com/research.html) *
*******************************************************
*/
  URLLink = 149,
/*
*************************************************************
* Describes the specific ExecutionRpt (i.e. Pending Cancel) *
* while OrdStatus will always identify the current order    *
* status (i.e. Partially Filled)                            *
*************************************************************
*/
  ExecType = 150,
/*
***************************************************************
* Amount of shares open for further execution. If the         *
* OrdStatus is Canceled, DoneForTheDay, Expired, Calculated,  *
* or Rejected (in which case the order is no longer active)   *
* then LeavesQty could be 0, otherwise LeavesQty = OrderQty - *
* CumQty.                                                     *
* (Prior to FIX 4.2 this field was of type int)               *
***************************************************************
*/
  LeavesQty = 151,
/*
**************************************************************
* Specifies the approximate order quantity desired in total  *
* monetary units vs. as a number of shares. The broker would *
* be responsible for converting and calculating a share      *
* quantity (OrderQty) based upon this amount to be used for  *
* the actual order and subsequent messages.                  *
**************************************************************
*/
  CashOrderQty = 152,
/*
*************************************
* AvgPx for a specific AllocAccount *
*************************************
*/
  AllocAvgPx = 153,
/*
****************************************
* NetMoney for a specific AllocAccount *
****************************************
*/
  AllocNetMoney = 154,
/*
***********************************************************
* Foreign exchange rate used to compute SettlCurrAmt from *
* Currency to SettlCurrency                               *
***********************************************************
*/
  SettlCurrFxRate = 155,
/*
******************************************************
* Specifies whether or not SettlCurrFxRate should be *
* multiplied or divided.                             *
******************************************************
*/
  SettlCurrFxRateCalc = 156,
/*
**************************************************************
* Number of Days of Interest for convertible bonds and fixed *
* income                                                     *
**************************************************************
*/
  NumDaysInterest = 157,
/*
****************************************************************
* Accrued Interest Rate for convertible bonds and fixed income *
****************************************************************
*/
  AccruedInterestRate = 158,
/*
**************************************************************
* Amount of Accrued Interest for convertible bonds and fixed *
* income                                                     *
**************************************************************
*/
  AccruedInterestAmt = 159,
/*
***************************************************
* Indicates mode used for Settlement Instructions *
***************************************************
*/
  SettlInstMode = 160,
/*
********************************************************
* Free format text related to a specific AllocAccount. *
********************************************************
*/
  AllocText = 161,
/*
**********************************************************
* Unique identifier for Settlement Instructions message. *
**********************************************************
*/
  SettlInstID = 162,
/*
****************************************************
* Settlement Instructions message transaction type *
****************************************************
*/
  SettlInstTransType = 163,
/*
***********************************************************
* Unique identifier for an email thread (new and chain of *
* replies)                                                *
***********************************************************
*/
  EmailThreadID = 164,
/*
***********************************************
* Indicates source of Settlement Instructions *
***********************************************
*/
  SettlInstSource = 165,
/*
***********************************************************
* Identifies Settlement Depository or Country Code (ISITC *
* spec)                                                   *
***********************************************************
*/
  SettlLocation = 166,
/*
*******************************************
* Indicates type of security (ISITC spec) *
*******************************************
*/
  SecurityType = 167,
/*
**************************************************************
* Time the details within the message should take effect     *
* (always expressed in UTC (Universal Time Coordinated, also *
* known as "GMT")                                            *
**************************************************************
*/
  EffectiveTime = 168,
/*
*****************************************************
* Identifies the Standing Instruction database used *
*****************************************************
*/
  StandInstDbType = 169,
/*
**************************************************************
* Name of the Standing Instruction database represented with *
* StandInstDbType (i.e. the Global Custodians name).        *
**************************************************************
*/
  StandInstDbName = 170,
/*
****************************************************************
* Unique identifier used on the Standing Instructions database *
* for the Standing Instructions to be referenced.              *
****************************************************************
*/
  StandInstDbID = 171,
/*
*********************************
* Identifies type of settlement *
*********************************
*/
  SettlDeliveryType = 172,
/*
**************************************************************
* Brokers account code at the depository (i.e. CEDEL ID for *
* CEDEL, FINS for DTC, or Euroclear ID for Euroclear) if     *
* SettlLocation is a depository                              *
**************************************************************
*/
  SettlDepositoryCode = 173,
/*
************************************************************
* BIC (Bank Identification CodeSwift managed) code of the *
* broker involved (i.e. for multi-company brokerage firms) *
************************************************************
*/
  SettlBrkrCode = 174,
/*
************************************************************
* BIC (Bank Identification CodeSwift managed) code of the *
* institution involved (i.e. for multi-company institution *
* firms)                                                   *
************************************************************
*/
  SettlInstCode = 175,
/*
***************************************************************
* Name of SettlInstSource's local agent bank if SettlLocation *
* is not a depository                                         *
***************************************************************
*/
  SecuritySettlAgentName = 176,
/*
****************************************************************
* BIC (Bank Identification Code--Swift managed) code of the    *
* SettlInstSource's local agent bank if SettlLocation is not a *
* depository                                                   *
****************************************************************
*/
  SecuritySettlAgentCode = 177,
/*
***********************************************************
* SettlInstSource's account number at local agent bank if *
* SettlLocation is not a depository                       *
***********************************************************
*/
  SecuritySettlAgentAcctNum = 178,
/*
************************************************************
* Name of SettlInstSource's account at local agent bank if *
* SettlLocation is not a depository                        *
************************************************************
*/
  SecuritySettlAgentAcctName = 179,
/*
*************************************************************
* Name of contact at local agent bank for SettlInstSource's *
* account if SettlLocation is not a depository              *
*************************************************************
*/
  SecuritySettlAgentContactName = 180,
/*
***************************************************
* Phone number for contact at local agent bank if *
* SettlLocation is not a depository               *
***************************************************
*/
  SecuritySettlAgentContactPhone = 181,
/*
*************************************************
* Name of SettlInstSource's local agent bank if *
* SettlDeliveryType=Free                        *
*************************************************
*/
  CashSettlAgentName = 182,
/*
****************************************************************
* BIC (Bank Identification Code--Swift managed) code of the    *
* SettlInstSource's local agent bank if SettlDeliveryType=Free *
****************************************************************
*/
  CashSettlAgentCode = 183,
/*
***********************************************************
* SettlInstSource's account number at local agent bank if *
* SettlDeliveryType=Free                                  *
***********************************************************
*/
  CashSettlAgentAcctNum = 184,
/*
************************************************************
* Name of SettlInstSource's account at local agent bank if *
* SettlDeliveryType=Free                                   *
************************************************************
*/
  CashSettlAgentAcctName = 185,
/*
*************************************************************
* Name of contact at local agent bank for SettlInstSource's *
* account if SettlDeliveryType=Free                         *
*************************************************************
*/
  CashSettlAgentContactName = 186,
/*
*******************************************************
* Phone number for contact at local agent bank for    *
* SettlInstSource's account if SettlDeliveryType=Free *
*******************************************************
*/
  CashSettlAgentContactPhone = 187,
/*
*****************************************************
* Bid F/X spot rate.y vary and not limited to four) *
*****************************************************
*/
  BidSpotRate = 188,
/*
****************************************************************
* Bid F/X forward points added to spot rate. May be a negative *
* value.                                                       *
****************************************************************
*/
  BidForwardPoints = 189,
/*
************************
* Offer F/X spot rate. *
************************
*/
  OfferSpotRate = 190,
/*
*********************************************************
* Offer F/X forward points added to spot rate. May be a *
* negative value.                                       *
*********************************************************
*/
  OfferForwardPoints = 191,
/*
****************************************************
* OrderQty of the future part of a F/X swap order. *
****************************************************
*/
  OrderQty2 = 192,
/*
*******************************************************
* FutSettDate of the future part of a F/X swap order. *
*******************************************************
*/
  FutSettDate2 = 193,
/*
******************
* F/X spot rate. *
******************
*/
  LastSpotRate = 194,
/*
***************************************************************
* F/X forward points added to LastSpotRate. May be a negative *
* value.                                                      *
***************************************************************
*/
  LastForwardPoints = 195,
/*
***************************************************************
* Can be used to link two different Allocation messages (each *
* with unique AllocID) together, i.e. for F/X "Netting" or    *
* "Swaps". Should be unique.                                  *
***************************************************************
*/
  AllocLinkID = 196,
/*
**************************************************************
* Identifies the type of Allocation linkage when AllocLinkID *
* is used.                                                   *
**************************************************************
*/
  AllocLinkType = 197,
/*
**************************************************************
* Assigned by the party which accepts the order. Can be used *
* to provide the OrderID used by an exchange or executing    *
* system.                                                    *
**************************************************************
*/
  SecondaryOrderID = 198,
/*
************************************************
* Number of repeating groups of IOIQualifiers. *
************************************************
*/
  NoIOIQualifiers = 199,
/*
***********************************************************
* Month and Year of the maturity for SecurityType=FUT or  *
* SecurityType=OPT. Required if MaturityDay is specified. *
* Format: YYYYMM                                          *
* (i.e. 199903)                                           *
***********************************************************
*/
  MaturityMonthYear = 200,
/*
*****************************************************
* Indicates whether an Option is for a put or call. *
*****************************************************
*/
  PutOrCall = 201,
/*
*******************************
* Strike Price for an Option. *
*******************************
*/
  StrikePrice = 202,
/*
********************
* Used for options *
********************
*/
  CoveredOrUncovered = 203,
/*
****************************************************************
* Used for options when delivering the order to an execution   *
* system/exchange to specify if the order is for a customer or *
* the firm placing the order itself.                           *
****************************************************************
*/
  CustomerOrFirm = 204,
/*
**************************************************************
* Day of month used in conjunction with MaturityMonthYear to *
* specify the maturity date for SecurityType=FUT or          *
* SecurityType=OPT.                                          *
**************************************************************
*/
  MaturityDay = 205,
/*
*************************************************************
* Can be used for SecurityType=OPT to identify a particular *
* security.                                                 *
*************************************************************
*/
  OptAttribute = 206,
/*
********************************************
* Market used to help identify a security. *
********************************************
*/
  SecurityExchange = 207,
/*
**************************************************************
* Indicates whether or not details should be communicated to *
* BrokerOfCredit (i.e. step-in broker).                      *
**************************************************************
*/
  NotifyBrokerOfCredit = 208,
/*
***************************************************************
* Indicates how the receiver (i.e. third party) of Allocation *
* message should handle/process the account details.          *
***************************************************************
*/
  AllocHandlInst = 209,
/*
***********************************************************
* Maximum number of shares within an order to be shown to *
* other customers (i.e. sent via an IOI).                 *
* (Prior to FIX 4.2 this field was of type int)           *
***********************************************************
*/
  MaxShow = 210,
/*
**************************************************************
* Amount (signed) added to the price of the peg for a pegged *
* order.                                                     *
**************************************************************
*/
  PegDifference = 211,
/*
*************************************
* Length of the XmlData data block. *
*************************************
*/
  XmlDataLen = 212,
/*
***********************************************************
* Actual XML data stream (e.g. FIXML). See approriate XML *
* reference (e.g. FIXML). Note: may contain embedded SOH  *
* characters.                                             *
***********************************************************
*/
  XmlData = 213,
/*
************************************************************
* Reference identifier for the SettlInstID with Cancel and *
* Replace SettlInstTransType transaction types.            *
************************************************************
*/
  SettlInstRefID = 214,
/*
***********************************************************
* Number of repeating groups of RoutingID and RoutingType *
* values.                                                 *
* See Appendix L  Pre-Trade Message Targeting/Routing    *
***********************************************************
*/
  NoRoutingIDs = 215,
/*
**********************************************
* Indicates the type of RoutingID specified. *
**********************************************
*/
  RoutingType = 216,
/*
******************************************************
* Assigned value used to identify a specific routing *
* destination.                                       *
******************************************************
*/
  RoutingID = 217,
/*
****************************************************************
* For Fixed Income. Basis points relative to a benchmark. To   *
* be expressed as "count of basis points" (vs. an absolute     *
* value). E.g. High Grade Corporate Bonds may express price as *
* basis points relative to benchmark (the Benchmark field).    *
* Note: Basis points can be negative.                          *
****************************************************************
*/
  SpreadToBenchmark = 218,
/*
************************************************************
* For Fixed Income. Identifies the benchmark (e.g. used in *
* conjunction with the SpreadToBenchmark field).           *
************************************************************
*/
  Benchmark = 219,
/*
***************************************************************
* For Fixed Income. Coupon rate of the bond. Will be zero for *
* step-up bonds.                                              *
***************************************************************
*/
  CouponRate = 223,
/*
****************************************************************
* Specifies the ratio or multiply factor to convert from       *
* contracts to shares (e.g. 1.0, 100, 1000, etc). Applicable   *
* For Fixed Income, Convertible Bonds, Derivatives, etc. Note: *
* If used, quantities should be expressed in the "nominal"     *
* (e.g. contracts vs. shares) amount.                          *
****************************************************************
*/
  ContractMultiplier = 231,
/*
*********************************************
* Unique identifier for Market Data Request *
*********************************************
*/
  MDReqID = 262,
/*
*****************************
* Subscription Request Type *
*****************************
*/
  SubscriptionRequestType = 263,
/*
*************************************
* Depth of market for Book Snapshot *
*************************************
*/
  MarketDepth = 264,
/*
*********************************************
* Specifies the type of Market Data update. *
*********************************************
*/
  MDUpdateType = 265,
/*
***************************************************************
* Specifies whether or not book entries should be aggregated. *
***************************************************************
*/
  AggregatedBook = 266,
/*
*******************************************
* Number of MDEntryType fields requested. *
*******************************************
*/
  NoMDEntryTypes = 267,
/*
*********************************************
* Number of entries in Market Data message. *
*********************************************
*/
  NoMDEntries = 268,
/*
***************************
* Type Market Data entry. *
***************************
*/
  MDEntryType = 269,
/*
***********************************
* Price of the Market Data Entry. *
***********************************
*/
  MDEntryPx = 270,
/*
**********************************************************
* Number of shares represented by the Market Data Entry. *
**********************************************************
*/
  MDEntrySize = 271,
/*
******************************
* Date of Market Data Entry. *
******************************
*/
  MDEntryDate = 272,
/*
******************************
* Time of Market Data Entry. *
******************************
*/
  MDEntryTime = 273,
/*
****************************
* Direction of the "tick". *
****************************
*/
  TickDirection = 274,
/*
*********************************
* Market posting quote / trade. *
* Valid values:                 *
* See Appendix C                *
*********************************
*/
  MDMkt = 275,
/*
**********************************************************
* Space-delimited list of conditions describing a quote. *
**********************************************************
*/
  QuoteCondition = 276,
/*
*********************************************************
* Space-delimited list of conditions describing a trade *
*********************************************************
*/
  TradeCondition = 277,
/*
****************************************
* Unique Market Data Entry identifier. *
****************************************
*/
  MDEntryID = 278,
/*
**************************************
* Type of Market Data update action. *
**************************************
*/
  MDUpdateAction = 279,
/*
***********************************
* Refers to a previous MDEntryID. *
***********************************
*/
  MDEntryRefID = 280,
/*
******************************************************
* Reason for the rejection of a Market Data request. *
******************************************************
*/
  MDReqRejReason = 281,
/*
*************************************
* Originator of a Market Data Entry *
*************************************
*/
  MDEntryOriginator = 282,
/*
***********************************************
* Identification of a Market Makers location *
***********************************************
*/
  LocationID = 283,
/*
*******************************************
* Identification of a Market Makers desk *
*******************************************
*/
  DeskID = 284,
/*
************************
* Reason for deletion. *
************************
*/
  DeleteReason = 285,
/*
*********************************
* Flag that identifies a price. *
*********************************
*/
  OpenCloseSettleFlag = 286,
/*
****************************************************************
* Specifies the number of days that may elapse before delivery *
* of the security                                              *
****************************************************************
*/
  SellerDays = 287,
/*
***************************
* Buying party in a trade *
***************************
*/
  MDEntryBuyer = 288,
/*
****************************
* Selling party in a trade *
****************************
*/
  MDEntrySeller = 289,
/*
****************************************************************
* Display position of a bid or offer, numbered from most       *
* competitive to least competitive, per market side, beginning *
* with 1.                                                      *
****************************************************************
*/
  MDEntryPositionNo = 290,
/*
*****************************************
* Identifies a firms financial status. *
*****************************************
*/
  FinancialStatus = 291,
/*
********************************************
* Identifies the type of Corporate Action. *
********************************************
*/
  CorporateAction = 292,
/*
*********************
* Default Bid Size. *
*********************
*/
  DefBidSize = 293,
/*
***********************
* Default Offer Size. *
***********************
*/
  DefOfferSize = 294,
/*
***********************************************
* The number of quote entries for a QuoteSet. *
***********************************************
*/
  NoQuoteEntries = 295,
/*
************************************************
* The number of sets of quotes in the message. *
************************************************
*/
  NoQuoteSets = 296,
/*
*******************************************************
* Identifies the status of the quote acknowledgement. *
*******************************************************
*/
  QuoteAckStatus = 297,
/*
****************************************
* Identifies the type of quote cancel. *
****************************************
*/
  QuoteCancelType = 298,
/*
********************************************************
* Uniquely identifies the quote as part of a QuoteSet. *
********************************************************
*/
  QuoteEntryID = 299,
/*
******************************
* Reason Quote was rejected: *
******************************
*/
  QuoteRejectReason = 300,
/*
****************************************************************
* Level of Response requested from receiver of quote messages. *
****************************************************************
*/
  QuoteResponseLevel = 301,
/*
********************************
* Unique id for the Quote Set. *
********************************
*/
  QuoteSetID = 302,
/*
*******************************************************
* Indicates the type of Quote Request being generated *
*******************************************************
*/
  QuoteRequestType = 303,
/*
***************************************************************
* Total number of quotes for the quote set across all         *
* messages. Should be the sum of all NoQuoteEntries in each   *
* message that has repeating quotes that are part of the same *
* quote set.                                                  *
***************************************************************
*/
  TotQuoteEntries = 304,
/*
***********************************
* Underlying securitys IDSource. *
***********************************
*/
  UnderlyingIDSource = 305,
/*
************************************
* Underlying securitys Issuer.    *
* See Issuer field for description *
************************************
*/
  UnderlyingIssuer = 306,
/*
******************************************
* Underlying securitys SecurityDesc.    *
* See SecurityDesc field for description *
******************************************
*/
  UnderlyingSecurityDesc = 307,
/*
**********************************************************
* Underlying securitys SecurityExchange. Can be used to *
* identify the underlying security.                      *
**********************************************************
*/
  UnderlyingSecurityExchange = 308,
/*
****************************************
* Underlying securitys SecurityID.    *
* See SecurityID field for description *
****************************************
*/
  UnderlyingSecurityID = 309,
/*
***************************************
* Underlying securitys SecurityType. *
***************************************
*/
  UnderlyingSecurityType = 310,
/*
************************************
* Underlying securitys Symbol.    *
* See Symbol field for description *
************************************
*/
  UnderlyingSymbol = 311,
/*
***************************************
* Underlying securitys SymbolSfx.    *
* See SymbolSfx field for description *
***************************************
*/
  UnderlyingSymbolSfx = 312,
/*
********************************************************
* Underlying securitys MaturityMonthYear. Required if *
* UnderlyingMaturityDay is specified.                  *
* See MaturityMonthYear field for description          *
********************************************************
*/
  UnderlyingMaturityMonthYear = 313,
/*
*****************************************
* Underlying securitys MaturityDay.    *
* See MaturityDay field for description *
*****************************************
*/
  UnderlyingMaturityDay = 314,
/*
***************************************
* Underlying securitys PutOrCall.    *
* See PutOrCall field for description *
***************************************
*/
  UnderlyingPutOrCall = 315,
/*
*****************************************
* Underlying securitys StrikePrice.    *
* See StrikePrice field for description *
*****************************************
*/
  UnderlyingStrikePrice = 316,
/*
******************************************
* Underlying securitys OptAttribute.    *
* See OptAttribute field for description *
******************************************
*/
  UnderlyingOptAttribute = 317,
/*
*******************************************************
* Underlying securitys Currency.                     *
* See Currency field for description and valid values *
*******************************************************
*/
  UnderlyingCurrency = 318,
/*
*************************************************
* Quantity of a particular leg in the security. *
*************************************************
*/
  RatioQty = 319,
/*
***********************************************
* Unique ID of a Security Definition Request. *
***********************************************
*/
  SecurityReqID = 320,
/*
****************************************
* Type of Security Definition Request. *
****************************************
*/
  SecurityRequestType = 321,
/*
***********************************************
* Unique ID of a Security Definition message. *
***********************************************
*/
  SecurityResponseID = 322,
/*
*************************************************
* Type of Security Definition message response. *
*************************************************
*/
  SecurityResponseType = 323,
/*
***************************************************
* Unique ID of a Security Status Request message. *
***************************************************
*/
  SecurityStatusReqID = 324,
/*
**************************************************************
* Indicates whether or not message is being sent as a result *
* of a subscription request or not.                          *
**************************************************************
*/
  UnsolicitedIndicator = 325,
/*
****************************************************************
* Identifies the trading status applicable to the transaction. *
****************************************************************
*/
  SecurityTradingStatus = 326,
/*
*************************************************************
* Denotes the reason for the Opening Delay or Trading Halt. *
*************************************************************
*/
  HaltReason = 327,
/*
*************************************************************
* Indicates whether or not the halt was due to Common Stock *
* trading being halted.                                     *
*************************************************************
*/
  InViewOfCommon = 328,
/*
************************************************************
* Indicates whether or not the halt was due to the Related *
* Security being halted.                                   *
************************************************************
*/
  DueToRelated = 329,
/*
****************************
* Number of shares bought. *
****************************
*/
  BuyVolume = 330,
/*
**************************
* Number of shares sold. *
**************************
*/
  SellVolume = 331,
/*
***************************************************************
* Represents an indication of the high end of the price range *
* for a security prior to the open or reopen                  *
***************************************************************
*/
  HighPx = 332,
/*
**************************************************************
* Represents an indication of the low end of the price range *
* for a security prior to the open or reopen                 *
**************************************************************
*/
  LowPx = 333,
/*
**************************************
* Identifies the type of adjustment. *
**************************************
*/
  Adjustment = 334,
/*
**************************************************
* Unique ID of a Trading Session Status message. *
**************************************************
*/
  TradSesReqID = 335,
/*
**************************************************************
* Identifier for Trading Session                             *
* Can be used to represent a specific market trading session *
* (e.g. "PRE-OPEN", "CROSS_2", "AFTER-HOURS", "TOSTNET1",    *
* "TOSTNET2", etc).                                          *
* Values should be bi-laterally agreed to between            *
* counterparties.                                            *
**************************************************************
*/
  TradingSessionID = 336,
/*
******************************************************
* Identifies the trader (e.g. "badge number") of the *
* ContraBroker.                                      *
******************************************************
*/
  ContraTrader = 337,
/*
*********************
* Method of trading *
*********************
*/
  TradSesMethod = 338,
/*
************************
* Trading Session Mode *
************************
*/
  TradSesMode = 339,
/*
*********************************
* State of the trading session. *
*********************************
*/
  TradSesStatus = 340,
/*
****************************************
* Starting time of the trading session *
****************************************
*/
  TradSesStartTime = 341,
/*
**********************************************
* Time of the opening of the trading session *
**********************************************
*/
  TradSesOpenTime = 342,
/*
*************************************************
* Time of the pre-closed of the trading session *
*************************************************
*/
  TradSesPreCloseTime = 343,
/*
***************************************
* Closing time of the trading session *
***************************************
*/
  TradSesCloseTime = 344,
/*
***********************************
* End time of the trading session *
***********************************
*/
  TradSesEndTime = 345,
/*
***********************************
* Number of orders in the market. *
***********************************
*/
  NumberOfOrders = 346,
/*
*****************************************************
* Type of message encoding (non-ASCII (non-English) *
* characters) used in a messages "Encoded" fields. *
*****************************************************
*/
  MessageEncoding = 347,
/*
***************************************************************
* Byte length of encoded (non-ASCII characters) EncodedIssuer *
* field.                                                      *
***************************************************************
*/
  EncodedIssuerLen = 348,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the Issuer  *
* field in the encoded format specified via the                *
* MessageEncoding field. If used, the ASCII (English)          *
* representation should also be specified in the Issuer field. *
****************************************************************
*/
  EncodedIssuer = 349,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedSecurityDesc field.                    *
*************************************************
*/
  EncodedSecurityDescLen = 350,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* SecurityDesc field in the encoded format specified via the  *
* MessageEncoding field. If used, the ASCII (English)         *
* representation should also be specified in the SecurityDesc *
* field.                                                      *
***************************************************************
*/
  EncodedSecurityDesc = 351,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedListExecInst field.                    *
*************************************************
*/
  EncodedListExecInstLen = 352,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* ListExecInst field in the encoded format specified via the  *
* MessageEncoding field. If used, the ASCII (English)         *
* representation should also be specified in the ListExecInst *
* field.                                                      *
***************************************************************
*/
  EncodedListExecInst = 353,
/*
*************************************************************
* Byte length of encoded (non-ASCII characters) EncodedText *
* field.                                                    *
*************************************************************
*/
  EncodedTextLen = 354,
/*
**************************************************************
* Encoded (non-ASCII characters) representation of the Text  *
* field in the encoded format specified via the              *
* MessageEncoding field. If used, the ASCII (English)        *
* representation should also be specified in the Text field. *
**************************************************************
*/
  EncodedText = 355,
/*
****************************************************************
* Byte length of encoded (non-ASCII characters) EncodedSubject *
* field.                                                       *
****************************************************************
*/
  EncodedSubjectLen = 356,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the Subject *
* field in the encoded format specified via the                *
* MessageEncoding field. If used, the ASCII (English)          *
* representation should also be specified in the Subject       *
* field.                                                       *
****************************************************************
*/
  EncodedSubject = 357,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedHeadline field.                        *
*************************************************
*/
  EncodedHeadlineLen = 358,
/*
***********************************************************
* Encoded (non-ASCII characters) representation of the    *
* Headline field in the encoded format specified via the  *
* MessageEncoding field. If used, the ASCII (English)     *
* representation should also be specified in the Headline *
* field.                                                  *
***********************************************************
*/
  EncodedHeadline = 359,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedAllocText field.                       *
*************************************************
*/
  EncodedAllocTextLen = 360,
/*
************************************************************
* Encoded (non-ASCII characters) representation of the     *
* AllocText field in the encoded format specified via the  *
* MessageEncoding field. If used, the ASCII (English)      *
* representation should also be specified in the AllocText *
* field.                                                   *
************************************************************
*/
  EncodedAllocText = 361,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedUnderlyingIssuer field.                *
*************************************************
*/
  EncodedUnderlyingIssuerLen = 362,
/*
**************************************************************
* Encoded (non-ASCII characters) representation of the       *
* UnderlyingIssuer field in the encoded format specified via *
* the MessageEncoding field. If used, the ASCII (English)    *
* representation should also be specified in the             *
* UnderlyingIssuer field.                                    *
**************************************************************
*/
  EncodedUnderlyingIssuer = 363,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedUnderlyingSecurityDesc field.          *
*************************************************
*/
  EncodedUnderlyingSecurityDescLen = 364,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the         *
* UnderlyingSecurityDesc field in the encoded format specified *
* via the MessageEncoding field. If used, the ASCII (English)  *
* representation should also be specified in the               *
* UnderlyingSecurityeDesc field.                               *
****************************************************************
*/
  EncodedUnderlyingSecurityDesc = 365,
/*
************************************************************
* Executed price for an AllocAccount entry used when using *
* "executed price" vs. "average price" allocations (e.g.   *
* Japan).                                                  *
************************************************************
*/
  AllocPrice = 366,
/*
**************************************************************
* Indicates expiration time of this particular QuoteSet      *
* (always expressed in UTC (Universal Time Coordinated, also *
* known as "GMT")                                            *
**************************************************************
*/
  QuoteSetValidUntilTime = 367,
/*
************************************
* Reason Quote Entry was rejected: *
************************************
*/
  QuoteEntryRejectReason = 368,
/*
***********************************************************
* The last MsgSeqNum value received and processed. Can be *
* specified on every message sent. Useful for detecting a *
* backlog with a counterparty.                            *
***********************************************************
*/
  LastMsgSeqNumProcessed = 369,
/*
****************************************************************
* Used when a message is sent via a "hub" or "service bureau". *
* If A sends to Q (the hub) who then sends to B via a separate *
* FIX session, then when Q sends to B the value of this field  *
* should represent the SendingTime on the message A sent to Q. *
* (always expressed in UTC (Universal Time Coordinated, also   *
* known as "GMT")                                              *
****************************************************************
*/
  OnBehalfOfSendingTime = 370,
/*
*****************************************************
* The tag number of the FIX field being referenced. *
*****************************************************
*/
  RefTagID = 371,
/*
****************************************************
* The MsgType of the FIX message being referenced. *
****************************************************
*/
  RefMsgType = 372,
/*
***************************************************************
* Code to identify reason for a session-level Reject message. *
***************************************************************
*/
  SessionRejectReason = 373,
/*
********************************************
* Identifies the Bid Request message type. *
********************************************
*/
  BidRequestTransType = 374,
/*
********************************************************
* Identifies contra broker. Standard NASD market-maker *
* mnemonic is preferred.                               *
********************************************************
*/
  ContraBroker = 375,
/*
********************************************************
* ID used to represent this transaction for compliance *
* purposes (e.g. OATS reporting).                      *
********************************************************
*/
  ComplianceID = 376,
/*
*****************************************************
* Indicates whether or not the order was solicited. *
*****************************************************
*/
  SolicitedFlag = 377,
/*
************************************************************
* Code to identify reason for an ExecutionRpt message sent *
* with ExecType=Restated or used when communicating an     *
* unsolicited cancel.                                      *
************************************************************
*/
  ExecRestatementReason = 378,
/*
*************************************************************
* The value of the business-level "ID" field on the message *
* being referenced.                                         *
*************************************************************
*/
  BusinessRejectRefID = 379,
/*
*********************************************************
* Code to identify reason for a Business Message Reject *
* message.                                              *
*********************************************************
*/
  BusinessRejectReason = 380,
/*
****************************************************************
* Total amount traded (e.g. CumQty * AvgPx) expressed in units *
* of currency.                                                 *
****************************************************************
*/
  GrossTradeAmt = 381,
/*
***************************************
* The number of ContraBroker entries. *
***************************************
*/
  NoContraBrokers = 382,
/*
***********************************************************
* Maximum number of bytes supported for a single message. *
***********************************************************
*/
  MaxMessageSize = 383,
/*
******************************************
* Number of MsgTypes in repeating group. *
******************************************
*/
  NoMsgTypes = 384,
/*
********************************************
* Specifies the direction of the messsage. *
********************************************
*/
  MsgDirection = 385,
/*
***************************************************
* Number of TradingSessionIDs in repeating group. *
***************************************************
*/
  NoTradingSessions = 386,
/*
***********************************
* Total volume (quantity) traded. *
***********************************
*/
  TotalVolumeTraded = 387,
/*
***************************************************************
* Code to identify the price a DiscretionOffset is related to *
* and should be mathematically added to.                      *
***************************************************************
*/
  DiscretionInst = 388,
/*
*************************************************************
* Amount (signed) added to the "related to" price specified *
* via DiscretionInst.                                       *
*************************************************************
*/
  DiscretionOffset = 389,
/*
**************************************************************
* Unique identifier for Bid Response as assigned by broker.  *
* Uniqueness must be guaranteed within a single trading day. *
**************************************************************
*/
  BidID = 390,
/*
**************************************************************
* Unique identifier for a Bid Request as assigned by         *
* institution. Uniqueness must be guaranteed within a single *
* trading day.                                               *
**************************************************************
*/
  ClientBidID = 391,
/*
************************************
* Descriptive name for list order. *
************************************
*/
  ListName = 392,
/*
*******************************
* Total number of securities. *
*******************************
*/
  TotalNumSecurities = 393,
/*
*********************************************
* Code to identify the type of Bid Request. *
*********************************************
*/
  BidType = 394,
/*
****************************
* Total number of tickets. *
****************************
*/
  NumTickets = 395,
/*
***********************
* Amounts in currency *
***********************
*/
  SideValue1 = 396,
/*
***********************
* Amounts in currency *
***********************
*/
  SideValue2 = 397,
/*
************************************
* Number of BidDescriptor entries. *
************************************
*/
  NoBidDescriptors = 398,
/*
***********************************************
* Code to identify the type of BidDescriptor. *
***********************************************
*/
  BidDescriptorType = 399,
/*
**************************************************************
* BidDescriptor value. Usage depends upon BidDescriptorType. *
**************************************************************
*/
  BidDescriptor = 400,
/*
****************************************************************
* Code to identify which "SideValue" the value refers to.      *
* SideValue1 and SideValue2 are used as opposed to Buy or Sell *
* so that the basket can be quoted either way as Buy or Sell.  *
****************************************************************
*/
  SideValueInd = 401,
/*
**************************************************************
* Liquidity indicator or lower limit if TotalNumSecurities > *
* 1. Represented as a percentage.                            *
**************************************************************
*/
  LiquidityPctLow = 402,
/*
********************************************************
* Upper liquidity indicator if TotalNumSecurities > 1. *
* Represented as a percentage.                         *
********************************************************
*/
  LiquidityPctHigh = 403,
/*
*********************************************************
* Value between LiquidityPctLow and LiquidityPctHigh in *
* Currency                                              *
*********************************************************
*/
  LiquidityValue = 404,
/*
*************************************************************
* Eg Used in EFP trades 12% (EFP  Exchange for Physical ). *
* Represented as a percentage.                              *
*************************************************************
*/
  EFPTrackingError = 405,
/*
**********************
* Used in EFP trades *
**********************
*/
  FairValue = 406,
/*
****************************************************
* Used in EFP trades. Represented as a percentage. *
****************************************************
*/
  OutsideIndexPct = 407,
/*
**********************
* Used in EFP trades *
**********************
*/
  ValueOfFutures = 408,
/*
*****************************************************
* Code to identify the type of liquidity indicator. *
*****************************************************
*/
  LiquidityIndType = 409,
/*
**********************************************************
* Overall weighted average liquidity expressed as a % of *
* average daily volume. Represented as a percentage.     *
**********************************************************
*/
  WtAverageLiquidity = 410,
/*
******************************************************
* Indicates whether or not to exchange for phsyical. *
******************************************************
*/
  ExchangeForPhysical = 411,
/*
*******************************
* Value of stocks in Currency *
*******************************
*/
  OutMainCntryUIndex = 412,
/*
***************************************************************
* Percentage of program that crosses in Currency. Represented *
* as a percentage.                                            *
***************************************************************
*/
  CrossPercent = 413,
/*
***************************************************************
* Code to identify the desired frequency of progress reports. *
***************************************************************
*/
  ProgRptReqs = 414,
/*
**********************************************************
* Time in minutes between each ListStatus report sent by *
* SellSide. Zero means dont send status.                *
**********************************************************
*/
  ProgPeriodInterval = 415,
/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross.                                                       *
****************************************************************
*/
  IncTaxInd = 416,
/*
*****************************************************
* Indicates the total number of bidders on the list *
*****************************************************
*/
  NumBidders = 417,
/*
****************************************
* Code to represent the type of trade. *
****************************************
*/
  TradeType = 418,
/*
*******************************************
* Code to represent the basis price type. *
*******************************************
*/
  BasisPxType = 419,
/*
*****************************************
* Indicates the number of list entries. *
*****************************************
*/
  NoBidComponents = 420,
/*
*****************************
* ISO Country Code in field *
*****************************
*/
  Country = 421,
/*
***************************************************************
* Total number of strike price entries across all messages.   *
* Should be the sum of all NoStrikes in each message that has *
* repeating strike price entries related to the same ListID.  *
* Used to support fragmentation.                              *
***************************************************************
*/
  TotNoStrikes = 422,
/*
*************************************
* Code to represent the price type. *
*************************************
*/
  PriceType = 423,
/*
*************************************************************
* For GT orders, the OrderQty less all shares (adjusted for *
* stock splits) that traded on previous days. DayOrderQty = *
* OrderQty  (CumQty - DayCumQty)                           *
*************************************************************
*/
  DayOrderQty = 424,
/*
**************************************************************
* The number of shares on a GT order that have traded today. *
**************************************************************
*/
  DayCumQty = 425,
/*
**************************************************************
* The average price of shares on a GT order that have traded *
* today.                                                     *
**************************************************************
*/
  DayAvgPx = 426,
/*
********************************************************
* Code to identify whether to book out executions on a *
* part-filled GT order on the day of execution or to   *
* accumulate.                                          *
********************************************************
*/
  GTBookingInst = 427,
/*
****************************************
* Number of list strike price entries. *
****************************************
*/
  NoStrikes = 428,
/*
*************************************
* Code to represent the price type. *
*************************************
*/
  ListStatusType = 429,
/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross.                                                       *
****************************************************************
*/
  NetGrossInd = 430,
/*
*************************************************
* Code to represent the status of a list order. *
*************************************************
*/
  ListOrderStatus = 431,
/*
****************************************************************
* Date of order expiration (last day the order can trade),     *
* always expressed in terms of the local market date. The time *
* at which the order expires is determined by the local        *
* markets business practices                                  *
****************************************************************
*/
  ExpireDate = 432,
/*
****************************************
* Identifies the type of ListExecInst. *
****************************************
*/
  ListExecInstType = 433,
/*
*************************************************************
* Identifies the type of request that a Cancel Reject is in *
* response to.                                              *
*************************************************************
*/
  CxlRejResponseTo = 434,
/*
****************************************
* Underlying securitys CouponRate.    *
* See CouponRate field for description *
****************************************
*/
  UnderlyingCouponRate = 435,
/*
************************************************
* Underlying securitys ContractMultiplier.    *
* See ContractMultiplier field for description *
************************************************
*/
  UnderlyingContractMultiplier = 436,
/*
******************************************
* Quantity traded with the ContraBroker. *
******************************************
*/
  ContraTradeQty = 437,
/*
**************************************************************
* Identifes the time of the trade with the ContraBroker.     *
* (always expressed in UTC (Universal Time Coordinated, also *
* known as "GMT")                                            *
**************************************************************
*/
  ContraTradeTime = 438,
/*
**************************************************************
* Firm that will clear the trade. Used if different from the *
* executing firm.                                            *
**************************************************************
*/
  ClearingFirm = 439,
/*
************************************************************
* Supplemental accounting information forwared to clearing *
* house/firm.                                              *
************************************************************
*/
  ClearingAccount = 440,
/*
***************************************************
* Number of Securites between LiquidityPctLow and *
* LiquidityPctHigh in Currency.                   *
***************************************************
*/
  LiquidityNumSecurities = 441,
/*
**************************************************************
* Used to indicate what an Execution Report represents (e.g. *
* used with multi-leg securiteis, such as option strategies, *
* spreads, etc.).                                            *
**************************************************************
*/
  MultiLegReportingType = 442,
/*
*******************************************************
* The time at which current market prices are used to *
* determine the value of a basket.                    *
*******************************************************
*/
  StrikeTime = 443,
/*
***************************************************
* Free format text string related to List Status. *
***************************************************
*/
  ListStatusText = 444,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedListStatusText field.                  *
*************************************************
*/
  EncodedListStatusTextLen = 445,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the         *
* ListStatusText field in the encoded format specified via the *
* MessageEncoding field. If used, the ASCII (English)          *
* representation should also be specified in the               *
* ListStatusText field.                                        *
****************************************************************
*/
  EncodedListStatusText = 446
}
