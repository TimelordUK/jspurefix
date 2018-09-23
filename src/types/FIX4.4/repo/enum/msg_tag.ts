export enum MsgTag {
/*
***************************************************************
* Account mnemonic as agreed between buy and sell sides, e.g. *
* broker and institution or investor/intermediary and fund    *
* manager.                                                    *
***************************************************************
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
***************************************************************
* Calculated average price of all fills on this order.        *
* For Fixed Income trades AvgPx is always expressed as        *
* percent-of-par, regardless of the PriceType (423) of LastPx *
* (3). I.e., AvgPx will contain an average of percent-of-par  *
* values (see LastParPx (669)) for issues traded in Yield,    *
* Spread or Discount.                                         *
***************************************************************
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
****************************************************************
* Three byte, simple checksum (see Volume 2: "Checksum         *
* Calculation" for description). ALWAYS LAST FIELD IN MESSAGE; *
* i.e. serves, with the trailing <SOH>, as the end-of-message  *
* delimiter. Always defined as three characters. (Always       *
* unencrypted)                                                 *
****************************************************************
*/
  CheckSum = 10,
/*
***************************************************************
* Unique identifier for Order as assigned by the buy-side     *
* (institution, broker, intermediary etc.) (identified by     *
* SenderCompID (49) or OnBehalfOfCompID (5) as appropriate).  *
* Uniqueness must be guaranteed within a single trading day.  *
* Firms, particularly those which electronically submit       *
* multi-day orders, trade globally or throughout market close *
* periods, should ensure uniqueness across days, for example  *
* by embedding a date within the ClOrdID field.               *
***************************************************************
*/
  ClOrdID = 11,
/*
**************************************************************
* Commission. Note if CommType (3) is percentage, Commission *
* of 5% should be represented as .05.                        *
**************************************************************
*/
  Commission = 12,
/*
*******************
* Commission type *
*******************
*/
  CommType = 13,
/*
**************************************************
* Total quantity (e.g. number of shares) filled. *
* (Prior to FIX 4.2 this field was of type int)  *
**************************************************
*/
  CumQty = 14,
/*
****************************************************************
* Identifies currency used for price. Absence of this field is *
* interpreted as the default for the security. It is           *
* recommended that systems provide the currency value whenever *
* possible. See "Appendix 6-A: Valid Currency Codes" for       *
* information on obtaining valid values.                       *
****************************************************************
*/
  Currency = 15,
/*
***************************************************************
* Message sequence number of last message in range to be      *
* resent. If request is for a single message BeginSeqNo (7) = *
* EndSeqNo. If request is for all messages subsequent to a    *
* particular message, EndSeqNo = "0" (representing infinity). *
***************************************************************
*/
  EndSeqNo = 16,
/*
***************************************************************
* Unique identifier of execution message as assigned by       *
* sell-side (broker, exchange, ECN) (will be 0 (zero) for     *
* ExecType (50) =I (Order Status)). Uniqueness must be        *
* guaranteed within a single trading day or the life of a     *
* multi-day order. Firms which accept multi-day orders should *
* consider embedding a date within the ExecID field to assure *
* uniqueness across days. (Prior to FIX 4.1 this field was of *
* type int)                                                   *
***************************************************************
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
*********************************************************
* Reference identifier used with Trade Cancel and Trade *
* Correct execution types.                              *
* (Prior to FIX 4.1 this field was of type int)         *
*********************************************************
*/
  ExecRefID = 19,
/*
***********************************************************
* Instructions for order handling on Broker trading floor *
***********************************************************
*/
  HandlInst = 21,
/*
************************************************************
* Identifies class or source of the SecurityID (48) value. *
* Required if SecurityID is specified.                     *
************************************************************
*/
  SecurityIDSource = 22,
/*
*************************************************
* Unique identifier of IOI message.             *
* (Prior to FIX 4.1 this field was of type int) *
*************************************************
*/
  IOIID = 23,
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
****************************************************************
* Quantity (e.g. number of shares) in numeric form or relative *
* size.                                                        *
****************************************************************
*/
  IOIQty = 27,
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
**************************************************************
* Market of execution for last fill, or an indication of the *
* market where an order was routed                           *
* Valid values:                                              *
* See "Appendix 6-C"                                         *
**************************************************************
*/
  LastMkt = 30,
/*
******************************
* Price of this (last) fill. *
******************************
*/
  LastPx = 31,
/*
***********************************************************
* Quantity (e.g. shares) bought/sold on this (last) fill. *
* (Prior to FIX 4.2 this field was of type int)           *
***********************************************************
*/
  LastQty = 32,
/*
*******************************************
* Identifies number of lines of text body *
*******************************************
*/
  NoLinesOfText = 33,
/*
***********************************
* Integer message sequence number *
***********************************
*/
  MsgSeqNum = 34,
/*
***************************************************************
* Defines message type ALWAYS THIRD FIELD IN MESSAGE. (Always *
* unencrypted)                                                *
* Note: A "U" as the first character in the MsgType field     *
* (i.e. U, U2, etc) indicates that the message format is      *
* privately defined between the sender and receiver.          *
***************************************************************
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
* Unique identifier for Order as assigned by sell-side       *
* (broker, exchange, ECN). Uniqueness must be guaranteed     *
* within a single trading day. Firms which accept multi-day  *
* orders should consider embedding a date within the OrderID *
* field to assure uniqueness across days.                    *
**************************************************************
*/
  OrderID = 37,
/*
**************************************************************
* Quantity ordered. This represents the number of shares for *
* equities or par, face or nominal value for FI instruments. *
* (Prior to FIX 4.2 this field was of type int)              *
**************************************************************
*/
  OrderQty = 38,
/*
***************************************************************
* Identifies current status of order.                         *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
* (see Volume : "Glossary" for value definitions)             *
***************************************************************
*/
  OrdStatus = 39,
/*
********************************************************
* Order type                                           *
* *** SOME VALUES ARE NO LONGER USED - See "Deprecated *
* (Phased-out) Features and Supported Approach" ***    *
* (see Volume : "Glossary" for value definitions)      *
********************************************************
*/
  OrdType = 40,
/*
**************************************************************
* ClOrdID () of the previous order (NOT the initial order of *
* the day) as assigned by the institution, used to identify  *
* the previous order in cancel and cancel/replace requests.  *
**************************************************************
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
***********************************************
* Price per unit of quantity (e.g. per share) *
***********************************************
*/
  Price = 44,
/*
*************************************
* Reference message sequence number *
*************************************
*/
  RefSeqNum = 45,
/*
**************************************************************
* Security identifier value of SecurityIDSource (22) type    *
* (e.g. CUSIP, SEDOL, ISIN, etc). Requires SecurityIDSource. *
**************************************************************
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
*********************************************************
* Time of message transmission (always expressed in UTC *
* (Universal Time Coordinated, also known as "GMT")     *
*********************************************************
*/
  SendingTime = 52,
/*
**************************************************
* Overall/total quantity (e.g. number of shares) *
* (Prior to FIX 4.2 this field was of type int)  *
**************************************************
*/
  Quantity = 53,
/*
*****************
* Side of order *
*****************
*/
  Side = 54,
/*
***************************************************************
* Ticker symbol. Common, "human understood" representation of *
* the security. SecurityID (48) value can be specified if no  *
* symbol exists (e.g. non-exchange traded Collective          *
* Investment Vehicles)                                        *
* Use "[N/A]" for products which do not have a symbol.        *
***************************************************************
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
  SettlType = 63,
/*
***************************************************************
* Specific date of trade settlement (SettlementDate) in       *
* YYYYMMDD format.                                            *
* If present, this field overrides SettlType (63). This field *
* is required if the value of SettlType (63) is 6 (Future) or *
* 8 (Sellers Option). This field must be omitted if the value *
* of SettlType (63) is 7 (When and If Issued)                 *
* (expressed in local time at place of settlement)            *
***************************************************************
*/
  SettlDate = 64,
/*
**************************************************************
* Additional information about the security (e.g. preferred, *
* warrants, etc.). Note also see SecurityType (67).          *
* Valid values:                                              *
* As defined in the NYSE Stock and bond Symbol Directory and *
* in the AMEX Fitch Directory                                *
* Fixed Income use:                                          *
* WI = "When Issued" for a security to be reissued under an  *
* old CUSIP or ISIN                                          *
* CD = a EUCP with lump-sum interest rather than discount    *
* price                                                      *
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
* TotNoOrders (68), 2 of 25, 3 of 25, . . . )                 *
***************************************************************
*/
  ListSeqNo = 67,
/*
***************************************************************
* Total number of list order entries across all messages.     *
* Should be the sum of all NoOrders (73) in each message that *
* has repeating list order entries related to the same ListID *
* (66). Used to support fragmentation.                        *
* (Prior to FIX 4.2 this field was named "ListNoOrds")        *
***************************************************************
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
***************************************************************
* Identifies allocation transaction type                      *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
*/
  AllocTransType = 71,
/*
***********************************************************
* Reference identifier to be used with AllocTransType (7) *
* =Replace or Cancel.                                     *
* (Prior to FIX 4.1 this field was of type int)           *
***********************************************************
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
  AvgPxPrecision = 74,
/*
****************************************************************
* Indicates date of trade referenced in this message in        *
* YYYYMMDD format. Absence of this field indicates current day *
* (expressed in local time at place of trade).                 *
****************************************************************
*/
  TradeDate = 75,
/*
***************************************************************
* Indicates whether the resulting position after a trade      *
* should be an opening position or closing position. Used for *
* omnibus accounting - where accounts are held on a gross     *
* basis instead of being netted together.                     *
***************************************************************
*/
  PositionEffect = 77,
/*
**********************************************************
* Number of repeating AllocAccount (79)/AllocPrice (366) *
* entries.                                               *
**********************************************************
*/
  NoAllocs = 78,
/*
************************
* Sub-account mnemonic *
************************
*/
  AllocAccount = 79,
/*
****************************************************
* Quantity to be allocated to specific sub-account *
* (Prior to FIX 4.2 this field was of type int)    *
****************************************************
*/
  AllocQty = 80,
/*
*************************************************************
* Processing code for sub-account. Absence of this field in *
* AllocAccount (79) / AllocPrice (366) /AllocQty (80) /     *
* ProcessCode instance indicates regular trade.             *
*************************************************************
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
*************************************************
* Total quantity canceled for this order.       *
* (Prior to FIX 4.2 this field was of type int) *
*************************************************
*/
  CxlQty = 84,
/*
****************************************************************
* Number of delivery instruction fields in repeating group.    *
* Note this field was removed in FIX 4.1 and reinstated in FIX *
* 4.4.                                                         *
****************************************************************
*/
  NoDlvyInst = 85,
/*
***********************************
* Identifies status of allocation *
***********************************
*/
  AllocStatus = 87,
/*
***********************************
* Identifies reason for rejection *
***********************************
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
***************************************
* Number of bytes in signature field. *
***************************************
*/
  SignatureLength = 93,
/*
**********************
* Email message type *
**********************
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
************************
* Method of encryption *
************************
*/
  EncryptMethod = 98,
/*
***********************************************
* Price per unit of quantity (e.g. per share) *
***********************************************
*/
  StopPx = 99,
/*
**************************************************************
* Execution destination as defined by institution when order *
* is entered.                                                *
* Valid values:                                              *
* See "Appendix 6-C"                                         *
**************************************************************
*/
  ExDestination = 100,
/*
************************************************
* Code to identify reason for cancel rejection *
************************************************
*/
  CxlRejReason = 102,
/*
************************************************
* Code to identify reason for order rejection. *
************************************************
*/
  OrdRejReason = 103,
/*
***************************
* Code to qualify IOI use *
***************************
*/
  IOIQualifier = 104,
/*
***********************************************************
* Name of security issuer (e.g. International Business    *
* Machines, GNMA).                                        *
* see also Volume 7: "PRODUCT: FIXED INCOME - Euro Issuer *
* Values"                                                 *
***********************************************************
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
*************************************************
* Minimum quantity of an order to be executed.  *
* (Prior to FIX 4.2 this field was of type int) *
*************************************************
*/
  MinQty = 110,
/*
***************************************************************
* Maximum quantity (e.g. number of shares) within an order to *
* be shown on the exchange floor at any given time.           *
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
***************************************************************
* Time/Date of order expiration (always expressed in UTC      *
* (Universal Time Coordinated, also known as "GMT")           *
* The meaning of expiration is specific to the context where  *
* the field is used.                                          *
* For orders, this is the expiration time of a Good Til Date  *
* TimeInForce.                                                *
* For Quotes - this is the expiration of the quote.           *
* Expiration time is provided across the quote message dialog *
* to control the length of time of the overall quoting        *
* process.                                                    *
* For collateral requests, this is the time by which          *
* collateral must be assigned.                                *
* For collateral assignments, this is the time by which a     *
* response to the assignment is expected.                     *
***************************************************************
*/
  ExpireTime = 126,
/*
**********************************
* Reason for execution rejection *
**********************************
*/
  DKReason = 127,
/*
****************************************************************
* Assigned value used to identify the firm targeted to receive *
* the message if the message is delivered by a third party     *
* i.e. the third party firm identifier would be delivered in   *
* the TargetCompID (56) field and the ultimate receiver firm   *
* ID in this field.                                            *
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
***************************************
* Indicates type of miscellaneous fee *
***************************************
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
****************************************************************
* A URI (Uniform Resource Identifier) or URL (Uniform Resource *
* Locator) link to additional information (i.e.                *
* http://www.XYZ.com/research.html)                            *
* See "Appendix 6-B FIX Fields Based Upon Other Standards"     *
****************************************************************
*/
  URLLink = 149,
/*
***************************************************************
* Describes the specific ExecutionRpt (i.e. Pending Cancel)   *
* while OrdStatus (39) will always identify the current order *
* status (i.e. Partially Filled)                              *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
*/
  ExecType = 150,
/*
****************************************************************
* Quantity open for further execution. If the OrdStatus (39)   *
* is Canceled, DoneForTheDay, Expired, Calculated, or Rejected *
* (in which case the order is no longer active) then LeavesQty *
* could be 0, otherwise LeavesQty = OrderQty (38)  CumQty     *
* (4).                                                         *
* (Prior to FIX 4.2 this field was of type int)                *
****************************************************************
*/
  LeavesQty = 151,
/*
**************************************************************
* Specifies the approximate order quantity desired in total  *
* monetary units vs. as tradeable units (e.g. number of      *
* shares). The broker or fund manager (for CIV orders) would *
* be responsible for converting and calculating a tradeable  *
* unit (e.g. share) quantity (OrderQty (38)) based upon this *
* amount to be used for the actual order and subsequent      *
* messages.                                                  *
**************************************************************
*/
  CashOrderQty = 152,
/*
************************************************************
* AvgPx (6) for a specific AllocAccount (79)               *
* For Fixed Income this is always expressed as "percent of *
* par" price type.                                         *
************************************************************
*/
  AllocAvgPx = 153,
/*
*************************************************
* NetMoney (8) for a specific AllocAccount (79) *
*************************************************
*/
  AllocNetMoney = 154,
/*
***************************************************************
* Foreign exchange rate used to compute SettlCurrAmt (9) from *
* Currency (5) to SettlCurrency (20)                          *
***************************************************************
*/
  SettlCurrFxRate = 155,
/*
***********************************************************
* Specifies whether or not SettlCurrFxRate (55) should be *
* multiplied or divided                                   *
***********************************************************
*/
  SettlCurrFxRateCalc = 156,
/*
**************************************************************
* Number of Days of Interest for convertible bonds and fixed *
* income. Note value may be negative.                        *
**************************************************************
*/
  NumDaysInterest = 157,
/*
****************************************************************
* The amount the buyer compensates the seller for the portion  *
* of the next coupon interest payment the seller has earned    *
* but will not receive from the issuer because the issuer will *
* send the next coupon payment to the buyer. Accrued Interest  *
* Rate is the annualized Accrued Interest amount divided by    *
* the purchase price of the bond.                              *
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
***************************************************************
* Indicates mode used for Settlement Instructions message.    *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
*/
  SettlInstMode = 160,
/*
*************************************************************
* Free format text related to a specific AllocAccount (79). *
*************************************************************
*/
  AllocText = 161,
/*
*************************************************
* Unique identifier for Settlement Instruction. *
*************************************************
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
* StandInstDbType (69) (i.e. the Global Custodians name).   *
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
**********************
* Bid F/X spot rate. *
**********************
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
*********************************************************
* OrderQty (38) of the future part of a F/X swap order. *
*********************************************************
*/
  OrderQty2 = 192,
/*
*********************************************************
* SettDate (64) of the future part of a F/X swap order. *
*********************************************************
*/
  SettlDate2 = 193,
/*
******************
* F/X spot rate. *
******************
*/
  LastSpotRate = 194,
/*
***********************************************************
* F/X forward points added to LastSpotRate (94). May be a *
* negative value.                                         *
***********************************************************
*/
  LastForwardPoints = 195,
/*
***************************************************************
* Can be used to link two different Allocation messages (each *
* with unique AllocID (70)) together, i.e. for F/X "Netting"  *
* or "Swaps". Should be unique.                               *
***************************************************************
*/
  AllocLinkID = 196,
/*
**************************************************************
* Identifies the type of Allocation linkage when AllocLinkID *
* (96) is used.                                              *
**************************************************************
*/
  AllocLinkType = 197,
/*
****************************************************************
* Assigned by the party which accepts the order. Can be used   *
* to provide the OrderID (37) used by an exchange or executing *
* system.                                                      *
****************************************************************
*/
  SecondaryOrderID = 198,
/*
*****************************************************
* Number of repeating groups of IOIQualifiers (04). *
*****************************************************
*/
  NoIOIQualifiers = 199,
/*
****************************************************************
* Can be used with standardized derivatives vs. the            *
* MaturityDate (54) field. Month and Year of the maturity      *
* (used for standardized futures and options).                 *
* Format:                                                      *
* YYYYMM (i.e. 199903)                                         *
* YYYYMMDD (20030323)                                          *
* YYYYMMwN (200303w) for week                                  *
* A specific date or can be appended to the MaturityMonthYear. *
* For instance, if multiple standard products exist that       *
* mature in the same Year and Month, but actually mature at a  *
* different time, a value can be appended, such as "w" or "w2" *
* to indicate week as opposed to week 2 expiration. Likewise,  *
* the date (0-3) can be appended to indicate a specific        *
* expiration (maturity date).                                  *
****************************************************************
*/
  MaturityMonthYear = 200,
/*
****************************************************
* Indicates whether an Option is for a put or call *
****************************************************
*/
  PutOrCall = 201,
/*
*******************************
* Strike Price for an Option. *
*******************************
*/
  StrikePrice = 202,
/*
*************************************************
* Used for derivative products, such as options *
*************************************************
*/
  CoveredOrUncovered = 203,
/*
****************************************************************
* Can be used for SecurityType (67) =OPT to identify a         *
* particular security.                                         *
* Valid values vary by SecurityExchange:                       *
* *** REPLACED values - See "Replaced Features and Supported   *
* Approach" ***                                                *
* For Exchange: MONEP (Paris)                                  *
* L = Long (a.k.a. "American")                                 *
* S = Short (a.k.a. "European")                                *
* For Exchanges: DTB (Frankfurt), HKSE (Hong Kong), and SOFFEX *
* (Zurich)                                                     *
* 0-9 = single digit "version" number assigned by exchange     *
* following capital adjustments (0=current, =prior, 2=prior to *
* , etc).                                                      *
****************************************************************
*/
  OptAttribute = 206,
/*
********************************************
* Market used to help identify a security. *
* Valid values:                            *
* See "Appendix 6-C"                       *
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
* message should handle/process the account details           *
***************************************************************
*/
  AllocHandlInst = 209,
/*
***************************************************************
* Maximum quantity (e.g. number of shares) within an order to *
* be shown to other customers (i.e. sent via an IOI).         *
* (Prior to FIX 4.2 this field was of type int)               *
***************************************************************
*/
  MaxShow = 210,
/*
**************************************************************
* Amount (signed) added to the peg for a pegged order in the *
* context of the PegOffsetType (836)                         *
* (Prior to FIX 4.4 this field was of type PriceOffset)      *
**************************************************************
*/
  PegOffsetValue = 211,
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
*************************************************************
* Reference identifier for the SettlInstID (62) with Cancel *
* and Replace SettlInstTransType (63) transaction types.    *
*************************************************************
*/
  SettlInstRefID = 214,
/*
****************************************************************
* Number of repeating groups of RoutingID (27) and RoutingType *
* (26) values.                                                 *
* See Volume 3: "Pre-Trade Message Targeting/Routing"          *
****************************************************************
*/
  NoRoutingIDs = 215,
/*
**************************************************
* Indicates the type of RoutingID (27) specified *
**************************************************
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
* For Fixed Income. Either Swap Spread or Spread to Benchmark  *
* depending upon the order type.                               *
* Spread to Benchmark: Basis points relative to a benchmark.   *
* To be expressed as "count of basis points" (vs. an absolute  *
* value). E.g. High Grade Corporate Bonds may express price as *
* basis points relative to benchmark (the BenchmarkCurveName   *
* (22) field). Note: Basis points can be negative.             *
* Swap Spread: Target spread for a swap.                       *
****************************************************************
*/
  Spread = 218,
/*
***************************************************************
* Identifies currency used for benchmark curve. See "Appendix *
* 6-A: Valid Currency Codes" for information on obtaining     *
* valid values.                                               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)      *
***************************************************************
*/
  BenchmarkCurveCurrency = 220,
/*
****************************
* Name of benchmark curve. *
****************************
*/
  BenchmarkCurveName = 221,
/*
****************************************************************
* Point on benchmark curve. Free form values: e.g. "Y", "7Y",  *
* "INTERPOLATED".                                              *
* Sample values:                                               *
* M = combination of a number between 1-12 and a "M" for month *
* Y = combination of number between 1-100 and a "Y" for year}  *
* 10Y-OLD = see above, then add "-OLD" when appropriate        *
* INTERPOLATED = the point is mathematically derived           *
* 2/2031 5 3/8 = the point is stated via a combination of      *
* maturity month / year and coupon                             *
* See Fixed Income-specific documentation at                   *
* http://www.fixprotocol.org for additional values.            *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  BenchmarkCurvePoint = 222,
/*
****************************************************************
* The rate of interest that, when multiplied by the principal, *
* par value, or face value of a bond, provides the currency    *
* amount of the periodic interest payment. The coupon is       *
* always cited, along with maturity, in any quotation of a     *
* bond's price.                                                *
****************************************************************
*/
  CouponRate = 223,
/*
**************************************************************
* Date interest is to be paid. Used in identifying Corporate *
* Bond issues.                                               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)     *
* (prior to FIX 4.4 field was of type UTCDate)               *
**************************************************************
*/
  CouponPaymentDate = 224,
/*
****************************************************************
* The date on which a bond or stock offering is issued. It may *
* or may not be the same as the effective date ("Dated Date")  *
* or the date on which interest begins to accrue ("Interest    *
* Accrual Date")                                               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
* (prior to FIX 4.4 field was of type UTCDate)                 *
****************************************************************
*/
  IssueDate = 225,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Number of business days before repurchase of a repo.         *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  RepurchaseTerm = 226,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Percent of par at which a Repo will be repaid. Represented   *
* as a percent, e.g. .9525 represents 95-/4 percent of par.    *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  RepurchaseRate = 227,
/*
***************************************************************
* For Fixed Income: Amorization Factor for deriving Current   *
* face from Original face for ABS or MBS securities, note the *
* fraction may be greater than, equal to or less than . In    *
* TIPS securities this is the Inflation index.                *
* Qty * Factor * Price = Gross Trade Amount                   *
* For Derivatives: Contract Value Factor by which price must  *
* be adjusted to determine the true nominal value of one      *
* futures/options contract.                                   *
* (Qty * Price) * Factor = Nominal Value                      *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)      *
***************************************************************
*/
  Factor = 228,
/*
***********************************************************
* Used with Fixed Income for Muncipal New Issue Market.   *
* Agreement in principal between counter-parties prior to *
* actual trade date.                                      *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)  *
* (prior to FIX 4.4 field was of type UTCDate)            *
***********************************************************
*/
  TradeOriginationDate = 229,
/*
***************************************************************
* The date when a distribution of interest is deducted from a *
* securities assets or set aside for payment to bondholders.  *
* On the ex-date, the securities price drops by the amount of *
* the distribution (plus or minus any market activity).       *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)      *
* (prior to FIX 4.4 field was of type UTCDate)                *
***************************************************************
*/
  ExDate = 230,
/*
****************************************************************
* Specifies the ratio or multiply factor to convert from       *
* "nominal" units (e.g. contracts) to total units (e.g.        *
* shares) (e.g. 1.0, 100, 1000, etc). Applicable For Fixed     *
* Income, Convertible Bonds, Derivatives, etc.                 *
* In general quantities for all calsses should be expressed in *
* the basic unit of the instrument, e.g. shares for equities,  *
* norminal or par amount for bonds, currency for foreign       *
* exchange. When quantity is expressed in contracts, e.g.      *
* financing transactions and bond trade reporting,             *
* ContractMutliplier should contain the number of units in one *
* contract and can be omitted if the multiplier is the default *
* amount for the instrument, i.e. 1,000 par of bonds,          *
* 1,000,000 par for financing transactions.                    *
****************************************************************
*/
  ContractMultiplier = 231,
/*
***********************************************************
* Number of stipulation entries                           *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3). *
***********************************************************
*/
  NoStipulations = 232,
/*
***********************
* Type of Stipulation *
***********************
*/
  StipulationType = 233,
/*
**********************************************************
* For Fixed Income. Value of stipulation.                *
* The expression can be an absolute single value or a    *
* combination of values and logical operators:           *
* < value                                                *
* > value                                                *
* <= value                                               *
* >= value                                               *
* value                                                  *
* value  value2                                         *
* value OR value2                                        *
* value AND value2                                       *
* YES                                                    *
* NO                                                     *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  StipulationValue = 234,
/*
*****************
* Type of yield *
*****************
*/
  YieldType = 235,
/*
**********************************************************
* Yield percentage.                                      *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  Yield = 236,
/*
**************************************************************
* The price at which the securities are distributed to the   *
* different members of an underwriting group for the primary *
* market in Municipals, total gross underwriter's spread.    *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)     *
**************************************************************
*/
  TotalTakedown = 237,
/*
***************************************************************
* Provides the reduction in price for the secondary market in *
* Muncipals.                                                  *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)      *
***************************************************************
*/
  Concession = 238,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Identifies the collateral used in the transaction.           *
* Valid values: see SecurityType (67) field                    *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  RepoCollateralSecurityType = 239,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Return of investor's principal in a security. Bond           *
* redemption can occur before maturity date.                   *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
* (prior to FIX 4.4 field was of type UTCDate)                 *
****************************************************************
*/
  RedemptionDate = 240,
/*
**********************************************************
* Underlying securitys CouponPaymentDate.               *
* See CouponPaymentDate (224) field for description      *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
* (prior to FIX 4.4 field was of type UTCDate)           *
**********************************************************
*/
  UnderlyingCouponPaymentDate = 241,
/*
**********************************************************
* Underlying securitys IssueDate.                       *
* See IssueDate (225) field for description              *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
* (prior to FIX 4.4 field was of type UTCDate)           *
**********************************************************
*/
  UnderlyingIssueDate = 242,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Underlying securitys RepoCollateralSecurityType.            *
* See RepoCollateralSecurityType (239) field for description   *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  UnderlyingRepoCollateralSecurityType = 243,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Underlying securitys RepurchaseTerm.                        *
* See RepurchaseTerm (226) field for description               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  UnderlyingRepurchaseTerm = 244,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Underlying securitys RepurchaseRate.                        *
* See RepurchaseRate (227) field for description               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  UnderlyingRepurchaseRate = 245,
/*
**********************************************************
* Underlying securitys Factor.                          *
* See Factor (228) field for description                 *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  UnderlyingFactor = 246,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Underlying securitys RedemptionDate.                        *
* See RedemptionDate (240) field for description               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
* (prior to FIX 4.4 field was of type UTCDate)                 *
****************************************************************
*/
  UnderlyingRedemptionDate = 247,
/*
**********************************************************
* Multileg instrument's individual leg securitys        *
* CouponPaymentDate.                                     *
* See CouponPaymentDate (224) field for description      *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
* (prior to FIX 4.4 field was of type UTCDate)           *
**********************************************************
*/
  LegCouponPaymentDate = 248,
/*
**************************************************************
* Multileg instrument's individual leg securitys IssueDate. *
* See IssueDate (225) field for description                  *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)     *
* (prior to FIX 4.4 field was of type UTCDate)               *
**************************************************************
*/
  LegIssueDate = 249,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Multileg instrument's individual leg securitys              *
* RepoCollateralSecurityType.                                  *
* See RepoCollateralSecurityType (239) field for description   *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  LegRepoCollateralSecurityType = 250,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Multileg instrument's individual leg security's              *
* RepurchaseTerm.                                              *
* See RepurchaseTerm (226) field for description               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  LegRepurchaseTerm = 251,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Multileg instrument's individual leg securitys              *
* RepurchaseRate.                                              *
* See RepurchaseRate (227) field for description               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  LegRepurchaseRate = 252,
/*
***********************************************************
* Multileg instrument's individual leg securitys Factor. *
* See Factor (228) field for description                  *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)  *
***********************************************************
*/
  LegFactor = 253,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Multileg instrument's individual leg securitys              *
* RedemptionDate.                                              *
* See RedemptionDate (240) field for description               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
* (prior to FIX 4.4 field was of type UTCDate)                 *
****************************************************************
*/
  LegRedemptionDate = 254,
/*
****************************************************************
* An evaluation of a company's ability to repay obligations or *
* its likelihood of not defaulting. These evaluation are       *
* provided by Credit Rating Agencies, i.e. S&P, Moody's.       *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  CreditRating = 255,
/*
**********************************************************
* Underlying securitys CreditRating.                    *
* See CreditRating (255) field for description           *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  UnderlyingCreditRating = 256,
/*
**********************************************************
* Multileg instrument's individual leg securitys        *
* CreditRating.                                          *
* See CreditRating (255) field for description           *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  LegCreditRating = 257,
/*
***********************************************************
* Driver and part of trade in the event that the Security *
* Master file was wrong at the point of entry             *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)  *
***********************************************************
*/
  TradedFlatSwitch = 258,
/*
****************************************************************
* BasisFeatureDate allows requesting firms within fixed income *
* the ability to request an alternative yield-to-worst,        *
* -maturity, -extended or other call. This flows through the   *
* confirm process.                                             *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
* (prior to FIX 4.4 field was of type UTCDate)                 *
****************************************************************
*/
  BasisFeatureDate = 259,
/*
**********************************************************
* Price for BasisFeatureDate.                            *
* See BasisFeatureDate (259)                             *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  BasisFeaturePrice = 260,
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
********************************************
* Specifies the type of Market Data update *
********************************************
*/
  MDUpdateType = 265,
/*
***************************************************************
* Specifies whether or not book entries should be aggregated. *
***************************************************************
*/
  AggregatedBook = 266,
/*
*************************************************
* Number of MDEntryType (269) fields requested. *
*************************************************
*/
  NoMDEntryTypes = 267,
/*
*********************************************
* Number of entries in Market Data message. *
*********************************************
*/
  NoMDEntries = 268,
/*
**************************
* Type Market Data entry *
**************************
*/
  MDEntryType = 269,
/*
***********************************
* Price of the Market Data Entry. *
***********************************
*/
  MDEntryPx = 270,
/*
************************************************************
* Quantity or volume represented by the Market Data Entry. *
************************************************************
*/
  MDEntrySize = 271,
/*
************************************************
* Date of Market Data Entry.                   *
* (prior to FIX 4.4 field was of type UTCDate) *
************************************************
*/
  MDEntryDate = 272,
/*
******************************
* Time of Market Data Entry. *
******************************
*/
  MDEntryTime = 273,
/*
***************************
* Direction of the "tick" *
***************************
*/
  TickDirection = 274,
/*
*********************************
* Market posting quote / trade. *
* Valid values:                 *
* See "Appendix 6-C"            *
*********************************
*/
  MDMkt = 275,
/*
*********************************************************
* Space-delimited list of conditions describing a quote *
*********************************************************
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
*************************************
* Type of Market Data update action *
*************************************
*/
  MDUpdateAction = 279,
/*
*****************************************
* Refers to a previous MDEntryID (278). *
*****************************************
*/
  MDEntryRefID = 280,
/*
*****************************************************
* Reason for the rejection of a Market Data request *
*****************************************************
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
***********************
* Reason for deletion *
***********************
*/
  DeleteReason = 285,
/*
**************************************************
* Flag that identifies a market data entry       *
* (Prior to FIX 4.3 this field was of type char) *
**************************************************
*/
  OpenCloseSettlFlag = 286,
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
* with .                                                       *
****************************************************************
*/
  MDEntryPositionNo = 290,
/*
****************************************
* Identifies a firms financial status *
****************************************
*/
  FinancialStatus = 291,
/*
*******************************************
* Identifies the type of Corporate Action *
*******************************************
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
******************************************************
* Identifies the status of the quote acknowledgement *
******************************************************
*/
  QuoteStatus = 297,
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
*****************************
* Reason Quote was rejected *
*****************************
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
* messages. Should be the sum of all NoQuoteEntries (295) in  *
* each message that has repeating quotes that are part of the *
* same quote set.                                             *
* (Prior to FIX 4.4 this field was named TotQuoteEntries)     *
***************************************************************
*/
  TotNoQuoteEntries = 304,
/*
*************************************************
* Underlying securitys SecurityIDSource.       *
* Valid values: see SecurityIDSource (22) field *
*************************************************
*/
  UnderlyingSecurityIDSource = 305,
/*
*****************************************
* Underlying securitys Issuer.         *
* See Issuer (06) field for description *
*****************************************
*/
  UnderlyingIssuer = 306,
/*
***********************************************
* Underlying securitys SecurityDesc.         *
* See SecurityDesc (07) field for description *
***********************************************
*/
  UnderlyingSecurityDesc = 307,
/*
**********************************************************
* Underlying securitys SecurityExchange. Can be used to *
* identify the underlying security.                      *
* Valid values: see SecurityExchange (207)               *
**********************************************************
*/
  UnderlyingSecurityExchange = 308,
/*
*********************************************
* Underlying securitys SecurityID.         *
* See SecurityID (48) field for description *
*********************************************
*/
  UnderlyingSecurityID = 309,
/*
***************************************************************
* Underlying securitys SecurityType.                         *
* Valid values: see SecurityType (67) field                   *
* (see below for details concerning this fields use in        *
* conjunction with SecurityType=REPO)                         *
* The following applies when used in conjunction with         *
* SecurityType=REPO                                           *
* Represents the general or specific type of security that    *
* underlies a financing agreement                             *
* Valid values for SecurityType=REPO:                         *
* TREASURY = Federal government or treasury                   *
* PROVINCE = State, province, region, etc.                    *
* AGENCY = Federal agency                                     *
* MORTGAGE = Mortgage passthrough                             *
* CP = Commercial paper                                       *
* CORP = Corporate                                            *
* EQUITY = Equity                                             *
* SUPRA = Supra-national agency                               *
* CASH                                                        *
* If bonds of a particular issuer or country are wanted in an *
* Order or are in the basket of an Execution and the          *
* SecurityType is not granular enough, include the            *
* UnderlyingIssuer (306), UnderlyingCountryOfIssue (592),     *
* UnderlyingProgram, UnderlyingRegType and/or                 *
* <UnderlyingStipulations> block e.g.:                        *
* SecurityType=REPO                                           *
* UnderlyingSecurityType=MORTGAGE                             *
* UnderlyingIssuer=GNMA                                       *
* or                                                          *
* SecurityType=REPO                                           *
* UnderlyingSecurityType=AGENCY                               *
* UnderlyingIssuer=CA Housing Trust                           *
* UnderlyingCountryOfIssue=CA                                 *
* or                                                          *
* SecurityType=REPO                                           *
* UnderlyingSecurityType=CORP                                 *
* UnderlyingNoStipulations=                                   *
* UnderlyingStipulationType=RATING                            *
* UnderlyingStipulationValue=>bbb-                            *
***************************************************************
*/
  UnderlyingSecurityType = 310,
/*
*****************************************
* Underlying securitys Symbol.         *
* See Symbol (55) field for description *
*****************************************
*/
  UnderlyingSymbol = 311,
/*
********************************************
* Underlying securitys SymbolSfx.         *
* See SymbolSfx (65) field for description *
********************************************
*/
  UnderlyingSymbolSfx = 312,
/*
*************************************************************
* Underlying securitys MaturityMonthYear. Can be used with *
* standardized derivatives vs. the UnderlyingMaturityDate   *
* (542) field.                                              *
* See MaturityMonthYear (200) field for description         *
*************************************************************
*/
  UnderlyingMaturityMonthYear = 313,
/*
***************************************
* Underlying securitys PutOrCall.    *
* See PutOrCall field for description *
***************************************
*/
  UnderlyingPutOrCall = 315,
/*
***********************************************
* Underlying securitys StrikePrice.          *
* See StrikePrice (202) field for description *
***********************************************
*/
  UnderlyingStrikePrice = 316,
/*
************************************************
* Underlying securitys OptAttribute.          *
* See OptAttribute (206) field for description *
************************************************
*/
  UnderlyingOptAttribute = 317,
/*
***********************************************************
* Underlying securitys Currency.                         *
* See Currency (5) field for description and valid values *
***********************************************************
*/
  UnderlyingCurrency = 318,
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
************************************************
* Type of Security Definition message response *
************************************************
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
***************************************************************
* Identifies the trading status applicable to the transaction *
***************************************************************
*/
  SecurityTradingStatus = 326,
/*
************************************************************
* Denotes the reason for the Opening Delay or Trading Halt *
************************************************************
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
********************
* Quantity bought. *
********************
*/
  BuyVolume = 330,
/*
******************
* Quantity sold. *
******************
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
*************************************
* Identifies the type of adjustment *
*************************************
*/
  Adjustment = 334,
/*
**************************************************
* Unique ID of a Trading Session Status message. *
**************************************************
*/
  TradSesReqID = 335,
/*
****************************************************************
* Identifier for Trading Session                               *
* Can be used to represent a specific market trading session   *
* (e.g. "PRE-OPEN", "CROSS_2", "AFTER-HOURS", "TOSTNET",       *
* "TOSTNET2", etc).                                            *
* To specify good for session where session spans more than    *
* one calendar day, use TimeInForce = Day in conjunction with  *
* TradingSessionID.                                            *
* Values should be bi-laterally agreed to between              *
* counterparties.                                              *
* Firms may register Trading Session values on the FIX website *
* (presently a document maintained within "ECN and Exchanges"  *
* working group section).                                      *
****************************************************************
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
********************************
* State of the trading session *
********************************
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
* (349) field.                                                *
***************************************************************
*/
  EncodedIssuerLen = 348,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the Issuer  *
* field in the encoded format specified via the                *
* MessageEncoding (347) field. If used, the ASCII (English)    *
* representation should also be specified in the Issuer field. *
****************************************************************
*/
  EncodedIssuer = 349,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedSecurityDesc (35) field.               *
*************************************************
*/
  EncodedSecurityDescLen = 350,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* SecurityDesc (07) field in the encoded format specified via *
* the MessageEncoding (347) field. If used, the ASCII         *
* (English) representation should also be specified in the    *
* SecurityDesc field.                                         *
***************************************************************
*/
  EncodedSecurityDesc = 351,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedListExecInst (353) field.              *
*************************************************
*/
  EncodedListExecInstLen = 352,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* ListExecInst (69) field in the encoded format specified via *
* the MessageEncoding (347) field. If used, the ASCII         *
* (English) representation should also be specified in the    *
* ListExecInst field.                                         *
***************************************************************
*/
  EncodedListExecInst = 353,
/*
*************************************************************
* Byte length of encoded (non-ASCII characters) EncodedText *
* (355) field.                                              *
*************************************************************
*/
  EncodedTextLen = 354,
/*
**************************************************************
* Encoded (non-ASCII characters) representation of the Text  *
* (58) field in the encoded format specified via the         *
* MessageEncoding (347) field. If used, the ASCII (English)  *
* representation should also be specified in the Text field. *
**************************************************************
*/
  EncodedText = 355,
/*
****************************************************************
* Byte length of encoded (non-ASCII characters) EncodedSubject *
* (357) field.                                                 *
****************************************************************
*/
  EncodedSubjectLen = 356,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the Subject *
* (47) field in the encoded format specified via the           *
* MessageEncoding (347) field. If used, the ASCII (English)    *
* representation should also be specified in the Subject       *
* field.                                                       *
****************************************************************
*/
  EncodedSubject = 357,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedHeadline (359) field.                  *
*************************************************
*/
  EncodedHeadlineLen = 358,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* Headline (48) field in the encoded format specified via the *
* MessageEncoding (347) field. If used, the ASCII (English)   *
* representation should also be specified in the Headline     *
* field.                                                      *
***************************************************************
*/
  EncodedHeadline = 359,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedAllocText (36) field.                  *
*************************************************
*/
  EncodedAllocTextLen = 360,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* AllocText (6) field in the encoded format specified via the *
* MessageEncoding (347) field. If used, the ASCII (English)   *
* representation should also be specified in the AllocText    *
* field.                                                      *
***************************************************************
*/
  EncodedAllocText = 361,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedUnderlyingIssuer (363) field.          *
*************************************************
*/
  EncodedUnderlyingIssuerLen = 362,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the         *
* UnderlyingIssuer (306) field in the encoded format specified *
* via the MessageEncoding (347) field. If used, the ASCII      *
* (English) representation should also be specified in the     *
* UnderlyingIssuer field.                                      *
****************************************************************
*/
  EncodedUnderlyingIssuer = 363,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedUnderlyingSecurityDesc (365) field.    *
*************************************************
*/
  EncodedUnderlyingSecurityDescLen = 364,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* UnderlyingSecurityDesc (307) field in the encoded format    *
* specified via the MessageEncoding (347) field. If used, the *
* ASCII (English) representation should also be specified in  *
* the UnderlyingSecurityeDesc field.                          *
***************************************************************
*/
  EncodedUnderlyingSecurityDesc = 365,
/*
****************************************************************
* Executed price for an AllocAccount (79) entry used when      *
* using "executed price" vs. "average price" allocations (e.g. *
* Japan).                                                      *
****************************************************************
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
***********************************
* Reason Quote Entry was rejected *
***********************************
*/
  QuoteEntryRejectReason = 368,
/*
****************************************************************
* The last MsgSeqNum (34) value received by the FIX engine and *
* processed by downstream application, such as trading engine  *
* or order routing system. Can be specified on every message   *
* sent. Useful for detecting a backlog with a counterparty.    *
****************************************************************
*/
  LastMsgSeqNumProcessed = 369,
/*
*****************************************************
* The tag number of the FIX field being referenced. *
*****************************************************
*/
  RefTagID = 371,
/*
*********************************************************
* The MsgType (35) of the FIX message being referenced. *
*********************************************************
*/
  RefMsgType = 372,
/*
**************************************************************
* Code to identify reason for a session-level Reject message *
**************************************************************
*/
  SessionRejectReason = 373,
/*
*******************************************
* Identifies the Bid Request message type *
*******************************************
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
* message                                               *
*********************************************************
*/
  BusinessRejectReason = 380,
/*
***************************************************************
* Total amount traded (e.g. CumQty (4) * AvgPx (6)) expressed *
* in units of currency.                                       *
***************************************************************
*/
  GrossTradeAmt = 381,
/*
*********************************************
* The number of ContraBroker (375) entries. *
*********************************************
*/
  NoContraBrokers = 382,
/*
***********************************************************
* Maximum number of bytes supported for a single message. *
***********************************************************
*/
  MaxMessageSize = 383,
/*
***********************************************
* Number of MsgTypes (35) in repeating group. *
***********************************************
*/
  NoMsgTypes = 384,
/*
*******************************************
* Specifies the direction of the messsage *
*******************************************
*/
  MsgDirection = 385,
/*
*********************************************************
* Number of TradingSessionIDs (336) in repeating group. *
*********************************************************
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
* Code to identify the price a DiscretionOffsetValue (389) is *
* related to and should be mathematically added to            *
***************************************************************
*/
  DiscretionInst = 388,
/*
*************************************************************
* Amount (signed) added to the "related to" price specified *
* via DiscretionInst (388), in the context of               *
* DiscretionOffsetType (842)                                *
* (Prior to FIX 4.4 this field was of type PriceOffset)     *
*************************************************************
*/
  DiscretionOffsetValue = 389,
/*
***************************************************************
* Unique identifier for Bid Response as assigned by sell-side *
* (broker, exchange, ECN). Uniqueness must be guaranteed      *
* within a single trading day.                                *
***************************************************************
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
**************************************************************
* Total number of securities.                                *
* (Prior to FIX 4.4 this field was named TotalNumSecurities) *
**************************************************************
*/
  TotNoRelatedSym = 393,
/*
********************************************
* Code to identify the type of Bid Request *
********************************************
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
******************************************
* Number of BidDescriptor (400) entries. *
******************************************
*/
  NoBidDescriptors = 398,
/*
****************************************************
* Code to identify the type of BidDescriptor (400) *
****************************************************
*/
  BidDescriptorType = 399,
/*
************************************************************
* BidDescriptor value. Usage depends upon BidDescriptorTyp *
* (399).                                                   *
* If BidDescriptorType = 1                                 *
* Industrials etc - Free text                              *
* If BidDescriptorType =2                                  *
* "FR" etc - ISO Country Codes                             *
* If BidDescriptorType =3                                  *
* FT00, FT250, STOX - Free text                            *
************************************************************
*/
  BidDescriptor = 400,
/*
***************************************************************
* Code to identify which "SideValue" the value refers to.     *
* SideValue and SideValue2 are used as opposed to Buy or Sell *
* so that the basket can be quoted either way as Buy or Sell. *
***************************************************************
*/
  SideValueInd = 401,
/*
************************************************************
* Liquidity indicator or lower limit if TotalNumSecurities *
* (393) > . Represented as a percentage.                   *
************************************************************
*/
  LiquidityPctLow = 402,
/*
*************************************************************
* Upper liquidity indicator if TotalNumSecurities (393) > . *
* Represented as a percentage.                              *
*************************************************************
*/
  LiquidityPctHigh = 403,
/*
************************************************************
* Value between LiquidityPctLow (402) and LiquidityPctHigh *
* (403) in Currency                                        *
************************************************************
*/
  LiquidityValue = 404,
/*
************************************************************
* Eg Used in EFP trades 2% (EFP  Exchange for Physical ). *
* Represented as a percentage.                             *
************************************************************
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
****************************************************
* Code to identify the type of liquidity indicator *
****************************************************
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
**************************************************************
* Code to identify the desired frequency of progress reports *
**************************************************************
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
* gross                                                        *
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
***************************************
* Code to represent the type of trade *
***************************************
*/
  BidTradeType = 418,
/*
******************************************
* Code to represent the basis price type *
******************************************
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
* Should be the sum of all NoStrikes (428) in each message    *
* that has repeating strike price entries related to the same *
* ListID (66). Used to support fragmentation.                 *
***************************************************************
*/
  TotNoStrikes = 422,
/*
************************************
* Code to represent the price type *
************************************
*/
  PriceType = 423,
/*
****************************************************************
* For GT orders, the OrderQty (38) less all quantity (adjusted *
* for stock splits) that traded on previous days. DayOrderQty  *
* (424) = OrderQty  (CumQty (4)  DayCumQty (425))            *
****************************************************************
*/
  DayOrderQty = 424,
/*
*************************************************
* Quantity on a GT order that has traded today. *
*************************************************
*/
  DayCumQty = 425,
/*
****************************************************************
* The average price for quantity on a GT order that has traded *
* today.                                                       *
****************************************************************
*/
  DayAvgPx = 426,
/*
********************************************************
* Code to identify whether to book out executions on a *
* part-filled GT order on the day of execution or to   *
* accumulate                                           *
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
* Code to represent the status type *
*************************************
*/
  ListStatusType = 429,
/*
****************************************************************
* Code to represent whether value is net (inclusive of tax) or *
* gross                                                        *
****************************************************************
*/
  NetGrossInd = 430,
/*
************************************************
* Code to represent the status of a list order *
************************************************
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
********************************************
* Identifies the type of ListExecInst (69) *
********************************************
*/
  ListExecInstType = 433,
/*
*************************************************************
* Identifies the type of request that a Cancel Reject is in *
* response to                                               *
*************************************************************
*/
  CxlRejResponseTo = 434,
/*
**********************************************
* Underlying securitys CouponRate.          *
* See CouponRate (223) field for description *
**********************************************
*/
  UnderlyingCouponRate = 435,
/*
*****************************************************
* Underlying securitys ContractMultiplier.         *
* See ContractMultiplier (23) field for description *
*****************************************************
*/
  UnderlyingContractMultiplier = 436,
/*
************************************************
* Quantity traded with the ContraBroker (375). *
************************************************
*/
  ContraTradeQty = 437,
/*
****************************************************************
* Identifes the time of the trade with the ContraBroker (375). *
* (always expressed in UTC (Universal Time Coordinated, also   *
* known as "GMT")                                              *
****************************************************************
*/
  ContraTradeTime = 438,
/*
*********************************************************
* Number of Securites between LiquidityPctLow (402) and *
* LiquidityPctHigh (403) in Currency.                   *
*********************************************************
*/
  LiquidityNumSecurities = 441,
/*
**************************************************************
* Used to indicate what an Execution Report represents (e.g. *
* used with multi-leg securities, such as option strategies, *
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
* EncodedListStatusText (446) field.            *
*************************************************
*/
  EncodedListStatusTextLen = 445,
/*
**************************************************************
* Encoded (non-ASCII characters) representation of the       *
* ListStatusText (444) field in the encoded format specified *
* via the MessageEncoding (347) field. If used, the ASCII    *
* (English) representation should also be specified in the   *
* ListStatusText field.                                      *
**************************************************************
*/
  EncodedListStatusText = 446,
/*
*************************************************************
* Identifies class or source of the PartyID (448) value.    *
* Required if PartyID is specified. Note: applicable values *
* depend upon PartyRole (452) specified.                    *
* See "Appendix 6-G  Use of <Parties> Component Block"     *
*************************************************************
*/
  PartyIDSource = 447,
/*
****************************************************************
* Party identifier/code. See PartyIDSource (447) and PartyRole *
* (452).                                                       *
* See "Appendix 6-G  Use of <Parties> Component Block"        *
****************************************************************
*/
  PartyID = 448,
/*
****************************************************************
* Net change from previous days closing price vs. last traded *
* price.                                                       *
****************************************************************
*/
  NetChgPrevDay = 451,
/*
***************************************************************
* Identifies the type or role of the PartyID (448) specified. *
* See "Appendix 6-G  Use of <Parties> Component Block"       *
***************************************************************
*/
  PartyRole = 452,
/*
***************************************************************
* Number of PartyID (448), PartyIDSource (447), and PartyRole *
* (452) entries                                               *
***************************************************************
*/
  NoPartyIDs = 453,
/*
******************************************
* Number of SecurityAltID (455) entries. *
******************************************
*/
  NoSecurityAltID = 454,
/*
************************************************************
* Alternate Security identifier value for this security of *
* SecurityAltIDSource (456) type (e.g. CUSIP, SEDOL, ISIN, *
* etc). Requires SecurityAltIDSource.                      *
************************************************************
*/
  SecurityAltID = 455,
/*
****************************************************************
* Identifies class or source of the SecurityAltID (455) value. *
* Required if SecurityAltID is specified.                      *
* Valid values:                                                *
* Same valid values as the SecurityIDSource (22) field         *
****************************************************************
*/
  SecurityAltIDSource = 456,
/*
****************************************************
* Number of UnderlyingSecurityAltID (458) entries. *
****************************************************
*/
  NoUnderlyingSecurityAltID = 457,
/*
**************************************************************
* Alternate Security identifier value for this underlying    *
* security of UnderlyingSecurityAltIDSource (459) type (e.g. *
* CUSIP, SEDOL, ISIN, etc). Requires                         *
* UnderlyingSecurityAltIDSource.                             *
**************************************************************
*/
  UnderlyingSecurityAltID = 458,
/*
*************************************************************
* Identifies class or source of the UnderlyingSecurityAltID *
* (458) value. Required if UnderlyingSecurityAltID is       *
* specified.                                                *
* Valid values:                                             *
* Same valid values as the SecurityIDSource (22) field      *
*************************************************************
*/
  UnderlyingSecurityAltIDSource = 459,
/*
************************************************************
* Indicates the type of product the security is associated *
* with. See also the CFICode (46) and SecurityType (67)    *
* fields.                                                  *
************************************************************
*/
  Product = 460,
/*
**************************************************************
* Indicates the type of security using ISO 0962 standard,    *
* Classification of Financial Instruments (CFI code) values. *
* ISO 0962 is maintained by ANNA (Association of National    *
* Numbering Agencies) acting as Registration Authority. See  *
* "Appendix 6-B FIX Fields Based Upon Other Standards". See  *
* also the Product (460) and SecurityType (67) fields. It is *
* recommended that CFICode be used instead of SecurityType   *
* (67) for non-Fixed Income instruments.                     *
* A subset of possible values applicable to FIX usage are    *
* identified in "Appendix 6-D CFICode Usage - ISO 0962       *
* Classification of Financial Instruments (CFI code)"        *
**************************************************************
*/
  CFICode = 461,
/*
****************************************
* Underlying securitys Product.       *
* Valid values: see Product(460) field *
****************************************
*/
  UnderlyingProduct = 462,
/*
***************************************
* Underlying securitys CFICode.      *
* Valid values: see CFICode (46)field *
***************************************
*/
  UnderlyingCFICode = 463,
/*
***************************************************************
* Indicates whether or not this FIX Session is a "test" vs.   *
* "production" connection. Useful for preventing "accidents". *
***************************************************************
*/
  TestMessageIndicator = 464,
/*
***********************************************************
* Common reference passed to a post-trade booking process *
* (e.g. industry matching utility).                       *
***********************************************************
*/
  BookingRefID = 466,
/*
************************************************************
* Unique identifier for a specific NoAllocs (78) repeating *
* group instance (e.g. for an AllocAccount).               *
************************************************************
*/
  IndividualAllocID = 467,
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
  RoundingDirection = 468,
/*
****************************************************************
* For CIV - a float value indicating the value to which        *
* rounding is required.                                        *
* i.e. 0 means round to a multiple of 0 units/shares; 0.5      *
* means round to a multiple of 0.5 units/shares.               *
* The default, if RoundingDirection (468) is specified without *
* RoundingModulus, is to round to a whole unit/share.          *
****************************************************************
*/
  RoundingModulus = 469,
/*
***************************************************************
* ISO Country code of instrument issue (e.g. the country      *
* portion typically used in ISIN). Can be used in conjunction *
* with non-ISIN SecurityID (48) (e.g. CUSIP for Municipal     *
* Bonds without ISIN) to provide uniqueness.                  *
***************************************************************
*/
  CountryOfIssue = 470,
/*
***************************************************
* A two-character state or province abbreviation. *
***************************************************
*/
  StateOrProvinceOfIssue = 471,
/*
***************************************************************
* Identifies the locale. For Municipal Security Issuers other *
* than state or province. Refer to                            *
* http://www.atmos.albany.edu/cgi/stagrep-cgi                 *
* Reference the IATA city codes for values.                   *
* Note IATA (International Air Transport Association)         *
* maintains the codes at www.iata.org.                        *
***************************************************************
*/
  LocaleOfIssue = 472,
/*
********************************************************
* The number of registration details on a Registration *
* Instructions message                                 *
********************************************************
*/
  NoRegistDtls = 473,
/*
*************************************************************
* Set of Correspondence address details, possibly including *
* phone, fax, etc.                                          *
*************************************************************
*/
  MailingDtls = 474,
/*
************************************************************
* The ISO 366 Country code (2 character) identifying which *
* country the beneficial investor is resident for tax      *
* purposes.                                                *
************************************************************
*/
  InvestorCountryOfResidence = 475,
/*
**********************************************************
* "Settlement Payment Reference"  A free format Payment *
* reference to assist with reconciliation, e.g. a Client *
* and/or Order ID number.                                *
**********************************************************
*/
  PaymentRef = 476,
/*
***************************************************************
* A code identifying the payment method for a (fractional)    *
* distribution.                                               *
* 13 through 998 are reserved for future use                  *
* Values above 000 are available for use by private agreement *
* among counterparties                                        *
***************************************************************
*/
  DistribPaymentMethod = 477,
/*
************************************************************
* Specifies currency to be use for Cash Distributions see *
* "Appendix 6-A; Valid Currency Codes".                    *
************************************************************
*/
  CashDistribCurr = 478,
/*
*************************************************************
* Specifies currency to be use for Commission (2) if the    *
* Commission currency is different from the Deal Currency - *
* see "Appendix 6-A; Valid Currency Codes".                 *
*************************************************************
*/
  CommCurrency = 479,
/*
******************************************************
* For CIV  A one character code identifying whether *
* Cancellation rights/Cooling off period applies     *
******************************************************
*/
  CancellationRights = 480,
/*
************************************************************
* A one character code identifying Money laundering status *
************************************************************
*/
  MoneyLaunderingStatus = 481,
/*
***************************************************
* Free format text to specify mailing instruction *
* requirements, e.g. "no third party mailings".   *
***************************************************
*/
  MailingInst = 482,
/*
************************************************************
* For CIV A date and time stamp to indicate the time a CIV *
* order was booked by the fund manager.                    *
************************************************************
*/
  TransBkdTime = 483,
/*
***************************************************************
* For CIV - Identifies how the execution price LastPx (3) was *
* calculated from the fund unit/share price(s) calculated at  *
* the fund valuation point                                    *
***************************************************************
*/
  ExecPriceType = 484,
/*
****************************************************************
* For CIV the amount or percentage by which the fund           *
* unit/share price was adjusted, as indicated by ExecPriceType *
* (484)                                                        *
****************************************************************
*/
  ExecPriceAdjustment = 485,
/*
********************************************************
* The date of birth applicable to the individual, e.g. *
* required to open some types of tax-exempt account.   *
********************************************************
*/
  DateOfBirth = 486,
/*
****************************************************
* Identifies Trade Report message transaction type *
* (Prior to FIX 4.4 this field was of type char)   *
****************************************************
*/
  TradeReportTransType = 487,
/*
****************************************************************
* The name of the payment card holder as specified on the card *
* being used for payment.                                      *
****************************************************************
*/
  CardHolderName = 488,
/*
***********************************************************
* The number of the payment card as specified on the card *
* being used for payment.                                 *
***********************************************************
*/
  CardNumber = 489,
/*
****************************************************************
* The expiry date of the payment card as specified on the card *
* being used for payment.                                      *
****************************************************************
*/
  CardExpDate = 490,
/*
************************************************************
* The issue number of the payment card as specified on the *
* card being used for payment. This is only applicable to  *
* certain types of card.                                   *
************************************************************
*/
  CardIssNum = 491,
/*
***************************************************************
* A code identifying the Settlement payment method.           *
* 16 through 998 are reserved for future use                  *
* Values above 000 are available for use by private agreement *
* among counterparties                                        *
***************************************************************
*/
  PaymentMethod = 492,
/*
**************************************************************
* For CIV  a fund manager-defined code identifying which of *
* the fund managers account types is required.              *
**************************************************************
*/
  RegistAcctType = 493,
/*
****************************************************************
* Free format text defining the designation to be associated   *
* with a holding on the register. Used to identify assets of a *
* specific underlying investor using a common registration,    *
* e.g. a brokers nominee or street name.                      *
****************************************************************
*/
  Designation = 494,
/*
***************************************************************
* For CIV - a code identifying the type of tax exempt account *
* in which purchased shares/units are to be held              *
***************************************************************
*/
  TaxAdvantageType = 495,
/*
****************************************************************
* Text indicating reason(s) why a Registration Instruction has *
* been rejected.                                               *
****************************************************************
*/
  RegistRejReasonText = 496,
/*
***********************************************************
* A one character code identifying whether the Fund based *
* renewal commission is to be waived.                     *
***********************************************************
*/
  FundRenewWaiv = 497,
/*
******************************************************
* Name of local agent bank if for cash distributions *
******************************************************
*/
  CashDistribAgentName = 498,
/*
***************************************************************
* BIC (Bank Identification Code--Swift managed) code of agent *
* bank for cash distributions                                 *
***************************************************************
*/
  CashDistribAgentCode = 499,
/*
***************************************************
* Account number at agent bank for distributions. *
***************************************************
*/
  CashDistribAgentAcctNumber = 500,
/*
***************************************************************
* Free format Payment reference to assist with reconciliation *
* of distributions.                                           *
***************************************************************
*/
  CashDistribPayRef = 501,
/*
****************************************************
* Name of account at agent bank for distributions. *
****************************************************
*/
  CashDistribAgentAcctName = 502,
/*
*************************************************************
* The start date of the card as specified on the card being *
* used for payment.                                         *
*************************************************************
*/
  CardStartDate = 503,
/*
**********************************************************
* The date written on a cheque or date payment should be *
* submitted to the relevant clearing system.             *
**********************************************************
*/
  PaymentDate = 504,
/*
****************************************************************
* Identifies sender of a payment, e.g. the payment remitter or *
* a customer reference number.                                 *
****************************************************************
*/
  PaymentRemitterID = 505,
/*
**************************************************************
* Registration status as returned by the broker or (for CIV) *
* the fund manager                                           *
**************************************************************
*/
  RegistStatus = 506,
/*
**************************************************************
* Reason(s) why Registration Instructions has been rejected. *
* The reason may be further amplified in the                 *
* RegistRejReasonCode field.                                 *
* Possible values of reason code include:                    *
**************************************************************
*/
  RegistRejReasonCode = 507,
/*
**************************************************************
* Reference identifier for the RegistID (53) with Cancel and *
* Replace RegistTransType (54) transaction types.            *
**************************************************************
*/
  RegistRefID = 508,
/*
**********************************************************
* Set of Registration name and address details, possibly *
* including phone, fax etc.                              *
**********************************************************
*/
  RegistDtls = 509,
/*
*************************************************************
* The number of Distribution Instructions on a Registration *
* Instructions message                                      *
*************************************************************
*/
  NoDistribInsts = 510,
/*
***********************************************************
* Email address relating to Registration name and address *
* details                                                 *
***********************************************************
*/
  RegistEmail = 511,
/*
**************************************************************
* The amount of each distribution to go to this beneficiary, *
* expressed as a percentage                                  *
**************************************************************
*/
  DistribPercentage = 512,
/*
****************************************************************
* Unique identifier of the registration details as assigned by *
* institution or intermediary.                                 *
****************************************************************
*/
  RegistID = 513,
/*
*********************************************************
* Identifies Registration Instructions transaction type *
*********************************************************
*/
  RegistTransType = 514,
/*
***************************************************************
* For CIV - a date and time stamp to indicate the fund        *
* valuation point with respect to which a order was priced by *
* the fund manager.                                           *
***************************************************************
*/
  ExecValuationPoint = 515,
/*
**************************************************************
* For CIV specifies the approximate order quantity desired.  *
* For a CIV Sale it specifies percentage of investors total *
* holding to be sold. For a CIV switch/exchange it specifies *
* percentage of investors cash realised from sales to be    *
* re-invested. The executing broker, intermediary or fund    *
* manager is responsible for converting and calculating      *
* OrderQty (38) in shares/units for subsequent messages.     *
**************************************************************
*/
  OrderPercent = 516,
/*
**************************************************
* The relationship between Registration parties. *
**************************************************
*/
  OwnershipType = 517,
/*
****************************************************************
* The number of Contract Amount details on an Execution Report *
* message                                                      *
****************************************************************
*/
  NoContAmts = 518,
/*
**************************************************************
* Type of ContAmtValue (520).                                *
* NOTE That Commission Amount / % in Contract Amounts is the *
* commission actually charged, rather than the commission    *
* instructions given in Fields 2/3.                          *
**************************************************************
*/
  ContAmtType = 519,
/*
********************************************************
* Value of Contract Amount, e.g. a financial amount or *
* percentage as indicated by ContAmtType (59).         *
********************************************************
*/
  ContAmtValue = 520,
/*
****************************************************************
* Specifies currency for the Contract amount if different from *
* the Deal Currency - see "Appendix 6-A; Valid Currency        *
* Codes".                                                      *
****************************************************************
*/
  ContAmtCurr = 521,
/*
********************************
* Identifies the type of owner *
********************************
*/
  OwnerType = 522,
/*
****************************************************************
* Sub-identifier (e.g. Clearing Account for PartyRole          *
* (452)=Clearing Firm, Locate ID # for                         *
* PartyRole=Locate/Lending Firm, etc). Not required when using *
* PartyID (448), PartyIDSource (447), and PartyRole.           *
****************************************************************
*/
  PartySubID = 523,
/*
**************************************************
* PartyID value within a nested repeating group. *
* Same values as PartyID (448)                   *
**************************************************
*/
  NestedPartyID = 524,
/*
********************************************************
* PartyIDSource value within a nested repeating group. *
* Same values as PartyIDSource (447)                   *
********************************************************
*/
  NestedPartyIDSource = 525,
/*
************************************************************
* Assigned by the party which originates the order. Can be *
* used to provide the ClOrdID (11) used by an exchange or  *
* executing system.                                        *
************************************************************
*/
  SecondaryClOrdID = 526,
/*
**************************************************************
* Assigned by the party which accepts the order. Can be used *
* to provide the ExecID (7) used by an exchange or executing *
* system.                                                    *
**************************************************************
*/
  SecondaryExecID = 527,
/*
***************************************************************
* Designates the capacity of the firm placing the order       *
* (as of FIX 4.3, this field replaced Rule80A (tag 47) --used *
* in conjunction with OrderRestrictions (529) field)          *
* (see Volume : "Glossary" for value definitions)             *
***************************************************************
*/
  OrderCapacity = 528,
/*
***********************************************************
* Restrictions associated with an order. If more than one *
* restriction is applicable to an order, this field can   *
* contain multiple instructions separated by space.       *
***********************************************************
*/
  OrderRestrictions = 529,
/*
************************************************
* Specifies scope of Order Mass Cancel Request *
************************************************
*/
  MassCancelRequestType = 530,
/*
*************************************************************
* Specifies the action taken by counterparty order handling *
* system as a result of the Order Mass Cancel Request       *
*************************************************************
*/
  MassCancelResponse = 531,
/*
*************************************************
* Reason Order Mass Cancel Request was rejected *
*************************************************
*/
  MassCancelRejectReason = 532,
/*
***********************************************************
* Total number of orders affected by mass cancel request. *
***********************************************************
*/
  TotalAffectedOrders = 533,
/*
*************************************************************
* Number of affected orders in the repeating group of order *
* ids.                                                      *
*************************************************************
*/
  NoAffectedOrders = 534,
/*
***************************************************************
* OrderID (37) of an order affected by a mass cancel request. *
***************************************************************
*/
  AffectedOrderID = 535,
/*
***************************************************************
* SecondaryOrderID (98) of an order affected by a mass cancel *
* request.                                                    *
***************************************************************
*/
  AffectedSecondaryOrderID = 536,
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
  QuoteType = 537,
/*
****************************************************
* PartyRole value within a nested repeating group. *
* Same values as PartyRole (452)                   *
****************************************************
*/
  NestedPartyRole = 538,
/*
*************************************************************
* Number of NestedPartyID (524), NestedPartyIDSource (525), *
* and NestedPartyRole (538) entries                         *
*************************************************************
*/
  NoNestedPartyIDs = 539,
/*
****************************************************************
* *** DEPRECATED FIELD - See "Deprecated (Phased-out) Features *
* and Supported Approach" ***                                  *
* Total Amount of Accrued Interest for convertible bonds and   *
* fixed income                                                 *
****************************************************************
*/
  TotalAccruedInterestAmt = 540,
/*
*********************
* Date of maturity. *
*********************
*/
  MaturityDate = 541,
/*
***********************************************
* Underlying securitys maturity date.        *
* See MaturityDate (54) field for description *
***********************************************
*/
  UnderlyingMaturityDate = 542,
/*
***************************************************************
* The location at which records of ownership are maintained   *
* for this instrument, and at which ownership changes must be *
* recorded.                                                   *
***************************************************************
*/
  InstrRegistry = 543,
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
  CashMargin = 544,
/*
*****************************************************
* PartySubID value within a nested repeating group. *
* Same values as PartySubID (523)                   *
*****************************************************
*/
  NestedPartySubID = 545,
/*
***************************************
* Defines the scope of a data element *
***************************************
*/
  Scope = 546,
/*
************************************************************
* Defines how a server handles distribution of a truncated *
* book. Defaults to broker option.                         *
************************************************************
*/
  MDImplicitDelete = 547,
/*
****************************************************************
* Identifier for a cross order. Must be unique during a given  *
* trading day. Recommend that firms use the order date as part *
* of the CrossID for Good Till Cancel (GT) orders.             *
****************************************************************
*/
  CrossID = 548,
/*
*********************************************
* Type of cross being submitted to a market *
*********************************************
*/
  CrossType = 549,
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
  CrossPrioritization = 550,
/*
***************************************************************
* CrossID of the previous cross order (NOT the initial cross  *
* order of the day) as assigned by the institution, used to   *
* identify the previous cross order in Cross Cancel and Cross *
* Cancel/Replace Requests.                                    *
***************************************************************
*/
  OrigCrossID = 551,
/*
*********************************************
* Number of Side repeating group instances. *
*********************************************
*/
  NoSides = 552,
/*
***********************
* Userid or username. *
***********************
*/
  Username = 553,
/*
***************************
* Password or passphrase. *
***************************
*/
  Password = 554,
/*
******************************************************
* Number of InstrumentLeg repeating group instances. *
******************************************************
*/
  NoLegs = 555,
/*
********************************************************
* Currency associated with a particular Leg's quantity *
********************************************************
*/
  LegCurrency = 556,
/*
**************************************************************
* Indicates total number of security types in the event that *
* multiple Security Type messages are used to return results *
* (Prior to FIX 4.4 this field was named                     *
* TotalNumSecurityTypes)                                     *
**************************************************************
*/
  TotNoSecurityTypes = 557,
/*
******************************************************
* Number of Security Type repeating group instances. *
******************************************************
*/
  NoSecurityTypes = 558,
/*
*********************************************************
* Identifies the type/criteria of Security List Request *
*********************************************************
*/
  SecurityListRequestType = 559,
/*
******************************************************
* The results returned to a Security Request message *
******************************************************
*/
  SecurityRequestResult = 560,
/*
**************************************
* The trading lot size of a security *
**************************************
*/
  RoundLot = 561,
/*
*********************************************
* The minimum trading volume for a security *
*********************************************
*/
  MinTradeVol = 562,
/*
************************************************************
* Indicates the method of execution reporting requested by *
* issuer of the order                                      *
************************************************************
*/
  MultiLegRptTypeReq = 563,
/*
*************************************************
* PositionEffect for leg of a multileg          *
* See PositionEffect (77) field for description *
*************************************************
*/
  LegPositionEffect = 564,
/*
******************************************************
* CoveredOrUncovered for leg of a multileg           *
* See CoveredOrUncovered (203) field for description *
******************************************************
*/
  LegCoveredOrUncovered = 565,
/*
****************************************
* Price for leg of a multileg          *
* See Price (44) field for description *
****************************************
*/
  LegPrice = 566,
/*
*************************************************************
* Indicates the reason a Trading Session Status Request was *
* rejected                                                  *
*************************************************************
*/
  TradSesStatusRejReason = 567,
/*
***********************************
* Trade Capture Report Request ID *
***********************************
*/
  TradeRequestID = 568,
/*
********************************
* Type of Trade Capture Report *
********************************
*/
  TradeRequestType = 569,
/*
********************************************************
* Indicates if the trade capture report was previously *
* reported to the counterparty                         *
********************************************************
*/
  PreviouslyReported = 570,
/*
*********************************************
* Unique identifier of trade capture report *
*********************************************
*/
  TradeReportID = 571,
/*
*****************************************************
* Reference identifier used with CANCEL and REPLACE *
* transaction types.                                *
*****************************************************
*/
  TradeReportRefID = 572,
/*
********************************************************
* The status of this trade with respect to matching or *
* comparison                                           *
********************************************************
*/
  MatchStatus = 573,
/*
*************************************************************
* The point in the matching process at which this trade was *
* matched                                                   *
*************************************************************
*/
  MatchType = 574,
/*
*********************************************
* This trade is to be treated as an odd lot *
*********************************************
*/
  OddLot = 575,
/*
***********************************
* Number of clearing instructions *
***********************************
*/
  NoClearingInstructions = 576,
/*
******************************************************
* Eligibility of this trade for clearing and central *
* counterparty processing                            *
******************************************************
*/
  ClearingInstruction = 577,
/*
***********************************************************
* Type of input device or system from which the trade was *
* entered.                                                *
***********************************************************
*/
  TradeInputSource = 578,
/*
************************************************************
* Specific device number, terminal number or station where *
* trade was entered                                        *
************************************************************
*/
  TradeInputDevice = 579,
/*
************************************************
* Number of Date fields provided in date range *
************************************************
*/
  NoDates = 580,
/*
********************************************
* Type of account associated with an order *
********************************************
*/
  AccountType = 581,
/*
***************************************************************
* Capacity of customer placing the order                      *
* Primarily used by futures exchanges to indicate the CTICode *
* (customer type indicator) as required by the US CFTC        *
* (Commodity Futures Trading Commission).                     *
***************************************************************
*/
  CustOrderCapacity = 582,
/*
**************************************************************
* Permits order originators to tie together groups of orders *
* in which trades resulting from orders are associated for a *
* specific purpose, for example the calculation of average   *
* execution price for a customer or to associate lists       *
* submitted to a broker as waves of a larger program trade.  *
**************************************************************
*/
  ClOrdLinkID = 583,
/*
***************************************************************
* Value assigned by issuer of Mass Status Request to uniquely *
* identify the request                                        *
***************************************************************
*/
  MassStatusReqID = 584,
/*
****************************
* Mass Status Request Type *
****************************
*/
  MassStatusReqType = 585,
/*
****************************************************************
* The most recent (or current) modification TransactTime (tag  *
* 60) reported on an Execution Report for the order.           *
* The OrigOrdModTime is provided as an optional field on Order *
* Cancel Request and Order Cancel Replace Requests to identify *
* that the state of the order has not changed since the        *
* request was issued.                                          *
* This is provided to support markets similar to Eurex and     *
* A/C/E.                                                       *
****************************************************************
*/
  OrigOrdModTime = 586,
/*
*************************************
* Refer to values for SettlType[63] *
*************************************
*/
  LegSettlType = 587,
/*
******************************************
* Refer to description for SettlDate[64] *
******************************************
*/
  LegSettlDate = 588,
/*
*********************************************************
* Indicates whether or not automatic booking can occur. *
*********************************************************
*/
  DayBookingInst = 589,
/*
***********************************************
* Indicates what constitutes a bookable unit. *
***********************************************
*/
  BookingUnit = 590,
/*
******************************************
* Indicates the method of preallocation. *
******************************************
*/
  PreallocMethod = 591,
/*
**************************************************
* Underlying securitys CountryOfIssue.          *
* See CountryOfIssue (470) field for description *
**************************************************
*/
  UnderlyingCountryOfIssue = 592,
/*
**********************************************************
* Underlying securitys StateOrProvinceOfIssue.          *
* See StateOrProvinceOfIssue (471) field for description *
**********************************************************
*/
  UnderlyingStateOrProvinceOfIssue = 593,
/*
*************************************************
* Underlying securitys LocaleOfIssue.          *
* See LocaleOfIssue (472) field for description *
*************************************************
*/
  UnderlyingLocaleOfIssue = 594,
/*
*************************************************
* Underlying securitys InstrRegistry.          *
* See InstrRegistry (543) field for description *
*************************************************
*/
  UnderlyingInstrRegistry = 595,
/*
***************************************************
* Multileg instrument's individual leg securitys *
* CountryOfIssue.                                 *
* See CountryOfIssue (470) field for description  *
***************************************************
*/
  LegCountryOfIssue = 596,
/*
**********************************************************
* Multileg instrument's individual leg securitys        *
* StateOrProvinceOfIssue.                                *
* See StateOrProvinceOfIssue (471) field for description *
**********************************************************
*/
  LegStateOrProvinceOfIssue = 597,
/*
***************************************************
* Multileg instrument's individual leg securitys *
* LocaleOfIssue.                                  *
* See LocaleOfIssue (472) field for description   *
***************************************************
*/
  LegLocaleOfIssue = 598,
/*
***************************************************
* Multileg instrument's individual leg securitys *
* InstrRegistry.                                  *
* See InstrRegistry (543) field for description   *
***************************************************
*/
  LegInstrRegistry = 599,
/*
*******************************************************
* Multileg instrument's individual securitys Symbol. *
* See Symbol (55) field for description               *
*******************************************************
*/
  LegSymbol = 600,
/*
**********************************************************
* Multileg instrument's individual securitys SymbolSfx. *
* See SymbolSfx (65) field for description               *
**********************************************************
*/
  LegSymbolSfx = 601,
/*
***********************************************************
* Multileg instrument's individual securitys SecurityID. *
* See SecurityID (48) field for description               *
***********************************************************
*/
  LegSecurityID = 602,
/*
***************************************************
* Multileg instrument's individual securitys     *
* SecurityIDSource.                               *
* See SecurityIDSource (22) field for description *
***************************************************
*/
  LegSecurityIDSource = 603,
/*
****************************************************************
* Multileg instrument's individual securitys NoSecurityAltID. *
* See NoSecurityAltID (454) field for description              *
****************************************************************
*/
  NoLegSecurityAltID = 604,
/*
**************************************************************
* Multileg instrument's individual securitys SecurityAltID. *
* See SecurityAltID (455) field for description              *
**************************************************************
*/
  LegSecurityAltID = 605,
/*
*******************************************************
* Multileg instrument's individual securitys         *
* SecurityAltIDSource.                                *
* See SecurityAltIDSource (456) field for description *
*******************************************************
*/
  LegSecurityAltIDSource = 606,
/*
********************************************************
* Multileg instrument's individual securitys Product. *
* See Product (460) field for description              *
********************************************************
*/
  LegProduct = 607,
/*
********************************************************
* Multileg instrument's individual securitys CFICode. *
* See CFICode (46) field for description               *
********************************************************
*/
  LegCFICode = 608,
/*
*************************************************************
* Multileg instrument's individual securitys SecurityType. *
* See SecurityType (67) field for description               *
*************************************************************
*/
  LegSecurityType = 609,
/*
*****************************************************
* Multileg instrument's individual securitys       *
* MaturityMonthYear.                                *
* See MaturityMonthYear (200) field for description *
*****************************************************
*/
  LegMaturityMonthYear = 610,
/*
*************************************************************
* Multileg instrument's individual securitys MaturityDate. *
* See MaturityDate (54) field for description               *
*************************************************************
*/
  LegMaturityDate = 611,
/*
************************************************************
* Multileg instrument's individual securitys StrikePrice. *
* See StrikePrice (202) field for description              *
************************************************************
*/
  LegStrikePrice = 612,
/*
*************************************************************
* Multileg instrument's individual securitys OptAttribute. *
* See OptAttribute (206) field for description              *
*************************************************************
*/
  LegOptAttribute = 613,
/*
*****************************************************
* Multileg instrument's individual securitys       *
* ContractMultiplier.                               *
* See ContractMultiplier (23) field for description *
*****************************************************
*/
  LegContractMultiplier = 614,
/*
***********************************************************
* Multileg instrument's individual securitys CouponRate. *
* See CouponRate (223) field for description              *
***********************************************************
*/
  LegCouponRate = 615,
/*
****************************************************
* Multileg instrument's individual securitys      *
* SecurityExchange.                                *
* See SecurityExchange (207) field for description *
****************************************************
*/
  LegSecurityExchange = 616,
/*
*******************************************************
* Multileg instrument's individual securitys Issuer. *
* See Issuer (106) field for description              *
*******************************************************
*/
  LegIssuer = 617,
/*
****************************************************
* Multileg instrument's individual securitys      *
* EncodedIssuerLen.                                *
* See EncodedIssuerLen (348) field for description *
****************************************************
*/
  EncodedLegIssuerLen = 618,
/*
**************************************************************
* Multileg instrument's individual securitys EncodedIssuer. *
* See EncodedIssuer (349) field for description              *
**************************************************************
*/
  EncodedLegIssuer = 619,
/*
*************************************************************
* Multileg instrument's individual securitys SecurityDesc. *
* See SecurityDesc (07) field for description               *
*************************************************************
*/
  LegSecurityDesc = 620,
/*
**********************************************************
* Multileg instrument's individual securitys            *
* EncodedSecurityDescLen.                                *
* See EncodedSecurityDescLen (350) field for description *
**********************************************************
*/
  EncodedLegSecurityDescLen = 621,
/*
******************************************************
* Multileg instrument's individual securitys        *
* EncodedSecurityDesc.                               *
* See EncodedSecurityDesc (35) field for description *
******************************************************
*/
  EncodedLegSecurityDesc = 622,
/*
*************************************************************
* The ratio of quantity for this individual leg relative to *
* the entire multileg security.                             *
*************************************************************
*/
  LegRatioQty = 623,
/*
********************************************************
* The side of this individual leg (multileg security). *
* See Side (54) field for description and values       *
********************************************************
*/
  LegSide = 624,
/*
*************************************************************
* Optional market assigned sub identifier for a trading     *
* session. Usage is determined by market or counterparties. *
* Used by US based futures markets to identify exchange     *
* specific execution time bracket codes as required by US   *
* market regulations.                                       *
*************************************************************
*/
  TradingSessionSubID = 625,
/*
***********************************************************
* Describes the specific type or purpose of an Allocation *
* message (i.e. "Buyside Calculated")                     *
***********************************************************
*/
  AllocType = 626,
/*
***************************************************
* Number of HopCompID entries in repeating group. *
***************************************************
*/
  NoHops = 627,
/*
****************************************************************
* Assigned value used to identify the third party firm which   *
* delivered a specific message either from the firm which      *
* originated the message or from another third party (if       *
* multiple "hops" are performed). It is recommended that this  *
* value be the SenderCompID (49) of the third party.           *
* Applicable when messages are communicated/re-distributed via *
* third parties which function as service bureaus or "hubs".   *
* Only applicable if OnBehalfOfCompID (5) is being used.       *
****************************************************************
*/
  HopCompID = 628,
/*
****************************************************************
* Time that HopCompID (628) sent the message. It is            *
* recommended that this value be the SendingTime (52) of the   *
* message sent by the third party.                             *
* Applicable when messages are communicated/re-distributed via *
* third parties which function as service bureaus or "hubs".   *
* Only applicable if OnBehalfOfCompID (5) is being used.       *
****************************************************************
*/
  HopSendingTime = 629,
/*
****************************************************************
* Reference identifier assigned by HopCompID (628) associated  *
* with the message sent. It is recommended that this value be  *
* the MsgSeqNum (34) of the message sent by the third party.   *
* Applicable when messages are communicated/re-distributed via *
* third parties which function as service bureaus or "hubs".   *
* Only applicable if OnBehalfOfCompID (5) is being used.       *
****************************************************************
*/
  HopRefID = 630,
/*
******************
* Mid price/rate *
******************
*/
  MidPx = 631,
/*
*************
* Bid yield *
*************
*/
  BidYield = 632,
/*
*************
* Mid yield *
*************
*/
  MidYield = 633,
/*
***************
* Offer yield *
***************
*/
  OfferYield = 634,
/*
************************************************************
* Indicates type of fee being assessed of the customer for *
* trade executions at an exchange. Applicable for futures  *
* markets only at this time.                               *
* (Values source CBOT, CME, NYBOT, and NYMEX):             *
************************************************************
*/
  ClearingFeeIndicator = 635,
/*
****************************************************************
* Indicates if the order is currently being worked. Applicable *
* only for OrdStatus = "New". For open outcry markets this     *
* indicates that the order is being worked in the crowd. For   *
* electronic markets it indicates that the order has           *
* transitioned from a contingent order to a market order.      *
****************************************************************
*/
  WorkingIndicator = 636,
/*
***************************************************************
* Execution price assigned to a leg of a multileg instrument. *
* See LastPx (31) field for description and values            *
***************************************************************
*/
  LegLastPx = 637,
/*
*************************************************************
* Indicates if a Cancel/Replace has caused an order to lose *
* book priority                                             *
*************************************************************
*/
  PriorityIndicator = 638,
/*
********************************
* Amount of price improvement. *
********************************
*/
  PriceImprovement = 639,
/*
*************************************************
* Price of the future part of a F/X swap order. *
* See Price (44) for description.               *
*************************************************
*/
  Price2 = 640,
/*
*************************************************************
* F/X forward points of the future part of a F/X swap order *
* added to LastSpotRate (94). May be a negative value.      *
*************************************************************
*/
  LastForwardPoints2 = 641,
/*
**************************************************************
* Bid F/X forward points of the future portion of a F/X swap *
* quote added to spot rate. May be a negative value.         *
**************************************************************
*/
  BidForwardPoints2 = 642,
/*
****************************************************************
* Offer F/X forward points of the future portion of a F/X swap *
* quote added to spot rate. May be a negative value.           *
****************************************************************
*/
  OfferForwardPoints2 = 643,
/*
*****************************************************
* RFQ Request ID  used to identify an RFQ Request. *
*****************************************************
*/
  RFQReqID = 644,
/*
*********************************************
* Used to indicate the best bid in a market *
*********************************************
*/
  MktBidPx = 645,
/*
***********************************************
* Used to indicate the best offer in a market *
***********************************************
*/
  MktOfferPx = 646,
/*
****************************************************************
* Used to indicate a minimum quantity for a bid. If this field *
* is used the BidSize (134) field is interpreted as the        *
* maximum bid size                                             *
****************************************************************
*/
  MinBidSize = 647,
/*
*************************************************************
* Used to indicate a minimum quantity for an offer. If this *
* field is used the OfferSize (135) field is interpreted as *
* the maximum offer size.                                   *
*************************************************************
*/
  MinOfferSize = 648,
/*
***********************************************
* Unique identifier for Quote Status Request. *
***********************************************
*/
  QuoteStatusReqID = 649,
/*
************************************************************
* Indicates that this message is to serve as the final and *
* legal confirmation.                                      *
************************************************************
*/
  LegalConfirm = 650,
/*
****************************************************************
* The calculated or traded price for the underlying instrument *
* that corresponds to a derivative. Used for transactions that *
* include the cash instrument and the derivative.              *
****************************************************************
*/
  UnderlyingLastPx = 651,
/*
*********************************************************
* The calculated or traded quantity for the underlying  *
* instrument that corresponds to a derivative. Used for *
* transactions that include the cash instrument and the *
* derivative.                                           *
*********************************************************
*/
  UnderlyingLastQty = 652,
/*
****************************************
* Unique indicator for a specific leg. *
****************************************
*/
  LegRefID = 654,
/*
************************************************************
* Unique indicator for a specific leg for the ContraBroker *
* (375).                                                   *
************************************************************
*/
  ContraLegRefID = 655,
/*
****************************************************************
* Foreign exchange rate used to compute the bid "SettlCurrAmt" *
* (119) from Currency (15) to SettlCurrency (120)              *
****************************************************************
*/
  SettlCurrBidFxRate = 656,
/*
************************************************************
* Foreign exchange rate used to compute the offer          *
* "SettlCurrAmt" (119) from Currency (15) to SettlCurrency *
* (120)                                                    *
************************************************************
*/
  SettlCurrOfferFxRate = 657,
/*
******************************
* Reason Quote was rejected: *
******************************
*/
  QuoteRequestRejectReason = 658,
/*
************************************************************
* ID within repeating group of sides which is used to      *
* represent this transaction for compliance purposes (e.g. *
* OATS reporting).                                         *
************************************************************
*/
  SideComplianceID = 659,
/*
****************************************************************
* Used to identify the source of the Account (1) code. This is *
* especially useful if the account is a new account that the   *
* Respondent may not have setup yet in their system.           *
****************************************************************
*/
  AcctIDSource = 660,
/*
**************************************************************
* Used to identify the source of the AllocAccount (79) code. *
* See AcctIDSource (660) for valid values.                   *
**************************************************************
*/
  AllocAcctIDSource = 661,
/*
*****************************************
* Specifies the price of the benchmark. *
*****************************************
*/
  BenchmarkPrice = 662,
/*
********************************************
* Identifies type of BenchmarkPrice (662). *
* See PriceType (423) for valid values.    *
********************************************
*/
  BenchmarkPriceType = 663,
/*
**************************************
* Message reference for Confirmation *
**************************************
*/
  ConfirmID = 664,
/*
**********************************************
* Identifies the status of the Confirmation. *
**********************************************
*/
  ConfirmStatus = 665,
/*
************************************************
* Identifies the Confirmation transaction type *
************************************************
*/
  ConfirmTransType = 666,
/*
***********************************************************
* Specifies when the contract (i.e. MBS/TBA) will settle. *
***********************************************************
*/
  ContractSettlMonth = 667,
/*
***********************************
* Identifies the form of delivery *
***********************************
*/
  DeliveryForm = 668,
/*
***********************************************************
* Last price expressed in percent-of-par. Conditionally   *
* required for Fixed Income trades when LastPx (3) is     *
* expressed in Yield, Spread, Discount or any other type. *
* Usage: Execution Report and Allocation Report repeating *
* executions block (from sellside).                       *
***********************************************************
*/
  LastParPx = 669,
/*
*************************************
* Number of Allocations for the leg *
*************************************
*/
  NoLegAllocs = 670,
/*
***********************************************************
* Allocation Account for the leg                          *
* See AllocAccount (79) for description and valid values. *
***********************************************************
*/
  LegAllocAccount = 671,
/*
*********************************************************
* Reference for the individual allocation ticket        *
* See IndividualAllocID (467) for description and valid *
* values.                                               *
*********************************************************
*/
  LegIndividualAllocID = 672,
/*
*******************************************************
* Leg allocation quantity.                            *
* See AllocQty (80) for description and valid values. *
*******************************************************
*/
  LegAllocQty = 673,
/*
****************************************************************
* The source of the LegAllocAccount (67)                       *
* See AllocAcctIDSource (66) for description and valid values. *
****************************************************************
*/
  LegAllocAcctIDSource = 674,
/*
***********************************************************
* Identifies settlement currency for the Leg.             *
* See SettlCurrency (20) for description and valid values *
***********************************************************
*/
  LegSettlCurrency = 675,
/*
**************************************************************
* LegBenchmarkPrice (679) currency                           *
* See BenchmarkCurveCurrency (220) for description and valid *
* values.                                                    *
**************************************************************
*/
  LegBenchmarkCurveCurrency = 676,
/*
*********************************************************
* Name of the Leg Benchmark Curve.                      *
* See BenchmarkCurveName (22) for description and valid *
* values.                                               *
*********************************************************
*/
  LegBenchmarkCurveName = 677,
/*
***********************************************************
* Identifies the point on the Leg Benchmark Curve.        *
* See BenchmarkCurvePoint (222) for description and valid *
* values.                                                 *
***********************************************************
*/
  LegBenchmarkCurvePoint = 678,
/*
**************************************************************
* Used to identify the price of the benchmark security.      *
* See BenchmarkPrice (662) for description and valid values. *
**************************************************************
*/
  LegBenchmarkPrice = 679,
/*
**********************************************************
* The price type of the LegBenchmarkPrice.               *
* See BenchmarkPriceType (663) for description and valid *
* values.                                                *
**********************************************************
*/
  LegBenchmarkPriceType = 680,
/*
****************************************************
* Bid price of this leg.                           *
* See BidPx (32) for description and valid values. *
****************************************************
*/
  LegBidPx = 681,
/*
****************************************************
* Leg-specific IOI quantity.                       *
* See IOIQty (27) for description and valid values *
****************************************************
*/
  LegIOIQty = 682,
/*
*************************************
* Number of leg stipulation entries *
*************************************
*/
  NoLegStipulations = 683,
/*
*****************************************************
* Offer price of this leg.                          *
* See OfferPx (33) for description and valid values *
*****************************************************
*/
  LegOfferPx = 684,
/*
****************************************************************
* The price type of the LegBidPx (68) and/or LegOfferPx (684). *
* See PriceType (423) for description and valid values         *
****************************************************************
*/
  LegPriceType = 686,
/*
******************************************************
* Quantity of this leg, e.g. in Quote dialog.        *
* See Quantity (53) for description and valid values *
******************************************************
*/
  LegQty = 687,
/*
**************************************************************
* For Fixed Income, type of Stipulation for this leg.        *
* See StipulationType (233) for description and valid values *
**************************************************************
*/
  LegStipulationType = 688,
/*
***************************************************************
* For Fixed Income, value of stipulation.                     *
* See StipulationValue (234) for description and valid values *
***************************************************************
*/
  LegStipulationValue = 689,
/*
**************************************************************
* For Fixed Income, used instead of LegQty (687) or          *
* LegOrderQty (685) to requests the respondent to calculate  *
* the quantity based on the quantity on the opposite side of *
* the swap.                                                  *
**************************************************************
*/
  LegSwapType = 690,
/*
************************************************
* For Fixed Income, identifies MBS / ABS pool. *
************************************************
*/
  Pool = 691,
/*
***************************************************
* Code to represent price type requested in Quote *
***************************************************
*/
  QuotePriceType = 692,
/*
****************************************
* Message reference for Quote Response *
****************************************
*/
  QuoteRespID = 693,
/*
*****************************************
* Identifies the type of Quote Response *
*****************************************
*/
  QuoteRespType = 694,
/*
***********************************************************
* Code to qualify Quote use                               *
* See IOIQualifier (04) for description and valid values. *
***********************************************************
*/
  QuoteQualifier = 695,
/*
***************************************************************
* Date to which the yield has been calculated (i.e. maturity, *
* par call or current call, pre-refunded date).               *
***************************************************************
*/
  YieldRedemptionDate = 696,
/*
*************************************************
* Price to which the yield has been calculated. *
*************************************************
*/
  YieldRedemptionPrice = 697,
/*
*********************************************************
* The price type of the YieldRedemptionPrice (697)      *
* See PriceType (423) for description and valid values. *
*********************************************************
*/
  YieldRedemptionPriceType = 698,
/*
*************************************************************
* The identifier of the benchmark security, e.g. Treasury   *
* against Corporate bond.                                   *
* See SecurityID (tag 48) for description and valid values. *
*************************************************************
*/
  BenchmarkSecurityID = 699,
/*
*****************************************************
* Indicates a trade that reverses a previous trade. *
*****************************************************
*/
  ReversalIndicator = 700,
/*
****************************************************************
* Include as needed to clarify yield irregularities associated *
* with date, e.g. when it falls on a non-business day.         *
****************************************************************
*/
  YieldCalcDate = 701,
/*
*******************************
* Number of position entries. *
*******************************
*/
  NoPositions = 702,
/*
****************************************************************
* Used to identify the type of quantity that is being returned *
****************************************************************
*/
  PosType = 703,
/*
*****************
* Long Quantity *
*****************
*/
  LongQty = 704,
/*
******************
* Short Quantity *
******************
*/
  ShortQty = 705,
/*
***************************
* Status of this position *
***************************
*/
  PosQtyStatus = 706,
/*
***************************
* Type of Position amount *
***************************
*/
  PosAmtType = 707,
/*
*******************
* Position amount *
*******************
*/
  PosAmt = 708,
/*
***********************************************
* Identifies the type of position transaction *
***********************************************
*/
  PosTransType = 709,
/*
*************************************************************
* Unique identifier for the position maintenance request as *
* assigned by the submitter                                 *
*************************************************************
*/
  PosReqID = 710,
/*
********************************************************
* Number of underlying legs that make up the security. *
********************************************************
*/
  NoUnderlyings = 711,
/*
**************************************
* Maintenance Action to be performed *
**************************************
*/
  PosMaintAction = 712,
/*
*************************************************************
* Reference to the PosReqID (710) of a previous maintenance *
* request that is being replaced or canceled.               *
*************************************************************
*/
  OrigPosReqRefID = 713,
/*
***************************************************************
* Reference to a PosMaintRptID (721) from a previous Position *
* Maintenance Report that is being replaced or canceled.      *
***************************************************************
*/
  PosMaintRptRefID = 714,
/*
****************************************************************
* The "Clearing Business Date" referred to by this maintenance *
* request.                                                     *
****************************************************************
*/
  ClearingBusinessDate = 715,
/*
********************************************
* Identifies a specific settlement session *
********************************************
*/
  SettlSessID = 716,
/*
************************************************
* SubID value associated with SettlSessID (76) *
************************************************
*/
  SettlSessSubID = 717,
/*
********************************************************
* Type of adjustment to be applied, used for PCS & PAJ *
********************************************************
*/
  AdjustmentType = 718,
/*
****************************************************************
* Required to be set to true (Y) when a position maintenance   *
* request is being performed contrary to current money         *
* position.                                                    *
* Required when an exercise of an out of the money position is *
* requested or an abandonement (do not exercise ) for an in    *
* the money position.                                          *
****************************************************************
*/
  ContraryInstructionIndicator = 719,
/*
************************************************************
* Indicates if requesting a rollover of prior days spread *
* submissions.                                             *
************************************************************
*/
  PriorSpreadIndicator = 720,
/*
**********************************************
* Unique identifier for this position report *
**********************************************
*/
  PosMaintRptID = 721,
/*
******************************************
* Status of Position Maintenance Request *
******************************************
*/
  PosMaintStatus = 722,
/*
*******************************************
* Result of Position Maintenance Request. *
*******************************************
*/
  PosMaintResult = 723,
/*
*************************************************************
* Unique identifier for the position maintenance request as *
* assigned by the submitter                                 *
*************************************************************
*/
  PosReqType = 724,
/*
********************************************************
* Identifies how the response to the request should be *
* transmitted                                          *
********************************************************
*/
  ResponseTransportType = 725,
/*
****************************************************************
* URI (Uniform Resource Identifier) for details) or other      *
* pre-arranged value. Used in conjunction with                 *
* ResponseTransportType (725) value of Out-of-Band to identify *
* the out-of-band destination.                                 *
* See "Appendix 6-B FIX Fields Based Upon Other Standards"     *
****************************************************************
*/
  ResponseDestination = 726,
/*
****************************************************
* Total number of Position Reports being returned. *
****************************************************
*/
  TotalNumPosReports = 727,
/*
*************************************************************
* Result of Request for Position                            *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
  PosReqResult = 728,
/*
***********************************
* Status of Request for Positions *
***********************************
*/
  PosReqStatus = 729,
/*
********************
* Settlement price *
********************
*/
  SettlPrice = 730,
/*
****************************
* Type of settlement price *
****************************
*/
  SettlPriceType = 731,
/*
**********************************************
* Underlying securitys SettlPrice.          *
* See SettlPrice (730) field for description *
**********************************************
*/
  UnderlyingSettlPrice = 732,
/*
*************************************************
* Underlying securitys SettlPriceType.         *
* See SettlPriceType (73) field for description *
*************************************************
*/
  UnderlyingSettlPriceType = 733,
/*
*****************************
* Previous settlement price *
*****************************
*/
  PriorSettlPrice = 734,
/*
********************************************************
* Number of repeating groups of QuoteQualifiers (695). *
********************************************************
*/
  NoQuoteQualifiers = 735,
/*
***********************************************************
* Currency code of settlement denomination for a specific *
* AllocAccount (79).                                      *
***********************************************************
*/
  AllocSettlCurrency = 736,
/*
***************************************************************
* Total amount due expressed in settlement currency (includes *
* the effect of the forex transaction) for a specific         *
* AllocAccount (79).                                          *
***************************************************************
*/
  AllocSettlCurrAmt = 737,
/*
***************************************************
* Amount of interest (i.e. lump-sum) at maturity. *
***************************************************
*/
  InterestAtMaturity = 738,
/*
****************************************************************
* The effective date of a new securities issue determined by   *
* its underwriters. Often but not always the same as the Issue *
* Date and the Interest Accrual Date                           *
****************************************************************
*/
  LegDatedDate = 739,
/*
**************************************************************
* For Fixed Income, identifies MBS / ABS pool for a specific *
* leg of a multi-leg instrument.                             *
* See Pool (69) for description and valid values.            *
**************************************************************
*/
  LegPool = 740,
/*
*********************************************************
* Amount of interest (i.e. lump-sum) at maturity at the *
* account-level.                                        *
*********************************************************
*/
  AllocInterestAtMaturity = 741,
/*
**************************************************************
* Amount of Accrued Interest for convertible bonds and fixed *
* income at the allocation-level.                            *
**************************************************************
*/
  AllocAccruedInterestAmt = 742,
/*
*********************
* Date of delivery. *
*********************
*/
  DeliveryDate = 743,
/*
***********************************************
* Method under which assignment was conducted *
***********************************************
*/
  AssignmentMethod = 744,
/*
*****************************************************
* Quantity Increment used in performing assignment. *
*****************************************************
*/
  AssignmentUnit = 745,
/*
***************************************************
* Open interest that was eligible for assignment. *
***************************************************
*/
  OpenInterest = 746,
/*
****************************************************
* Exercise Method used to in performing assignment *
****************************************************
*/
  ExerciseMethod = 747,
/*
*******************************************
* Total number of trade reports returned. *
*******************************************
*/
  TotNumTradeReports = 748,
/*
*************************************************************
* Result of Trade Request                                   *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
  TradeRequestResult = 749,
/*
****************************
* Status of Trade Request. *
****************************
*/
  TradeRequestStatus = 750,
/*
*************************************************************
* Reason Trade Capture Request was rejected.                *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
  TradeReportRejectReason = 751,
/*
****************************************************************
* Used to indicate if the side being reported on Trade Capture *
* Report represents a leg of a multileg instrument or a single *
* security                                                     *
****************************************************************
*/
  SideMultiLegReportingType = 752,
/*
**************************************
* Number of position amount entries. *
**************************************
*/
  NoPosAmt = 753,
/*
*************************************************************
* Identifies whether or not an allocation has been          *
* automatically accepted on behalf of the Carry Firm by the *
* Clearing House.                                           *
*************************************************************
*/
  AutoAcceptIndicator = 754,
/*
****************************************************
* Unique identifier for Allocation Report message. *
****************************************************
*/
  AllocReportID = 755,
/*
***************************************************************
* Number of Nested2PartyID (757), Nested2PartyIDSource (758), *
* and Nested2PartyRole (759) entries                          *
***************************************************************
*/
  NoNested2PartyIDs = 756,
/*
*************************************************************
* PartyID value within a "second instance" Nested repeating *
* group.                                                    *
* Same values as PartyID (448)                              *
*************************************************************
*/
  Nested2PartyID = 757,
/*
*********************************************************
* PartyIDSource value within a "second instance" Nested *
* repeating group.                                      *
* Same values as PartyIDSource (447)                    *
*********************************************************
*/
  Nested2PartyIDSource = 758,
/*
***************************************************************
* PartyRole value within a "second instance" Nested repeating *
* group.                                                      *
* Same values as PartyRole (452)                              *
***************************************************************
*/
  Nested2PartyRole = 759,
/*
****************************************************************
* PartySubID value within a "second instance" Nested repeating *
* group.                                                       *
* Same values as PartySubID (523)                              *
****************************************************************
*/
  Nested2PartySubID = 760,
/*
***************************************************************
* Identifies class or source of the BenchmarkSecurityID (699) *
* value. Required if BenchmarkSecurityID is specified.        *
* Same values as the SecurityIDSource (22) field              *
***************************************************************
*/
  BenchmarkSecurityIDSource = 761,
/*
***************************************************************
* Sub-type qualification/identification of the SecurityType   *
* (e.g. for SecurityType="REPO").                             *
* Example Values:                                             *
* General = General Collateral (for SecurityType=REPO)        *
* For SecurityType="MLEG" markets can provide the name of the *
* option or futures strategy, such as Calendar, Vertical,     *
* Butterfly, etc.                                             *
* NOTE: Additional values may be used by mutual agreement of  *
* the counterparties                                          *
***************************************************************
*/
  SecuritySubType = 762,
/*
***************************************************
* Underlying securitys SecuritySubType.          *
* See SecuritySubType (762) field for description *
***************************************************
*/
  UnderlyingSecuritySubType = 763,
/*
***************************************************
* SecuritySubType of the leg instrument.          *
* See SecuritySubType (762) field for description *
***************************************************
*/
  LegSecuritySubType = 764,
/*
**********************************************************
* The maximum percentage that execution of one side of a *
* program trade can exceed execution of the other.       *
**********************************************************
*/
  AllowableOneSidednessPct = 765,
/*
**************************************************************
* The maximum amount that execution of one side of a program *
* trade can exceed execution of the other.                   *
**************************************************************
*/
  AllowableOneSidednessValue = 766,
/*
*********************************************************
* The currency that AllowableOneSidednessValue (766) is *
* expressed in if AllowableOneSidednessValue is used.   *
*********************************************************
*/
  AllowableOneSidednessCurr = 767,
/*
*******************************************
* Number of TrdRegTimestamp (769) entries *
*******************************************
*/
  NoTrdRegTimestamps = 768,
/*
*************************************************************
* Traded / Regulatory timestamp value. Use to store time    *
* information required by government regulators or self     *
* regulatory organizations (such as an exchange or clearing *
* house).                                                   *
*************************************************************
*/
  TrdRegTimestamp = 769,
/*
************************************************************
* Traded / Regulatory timestamp type                       *
* Note of Applicability: values are required in US futures *
* markets by the CFTC to support computerized trade        *
* reconstruction.                                          *
* (see Volume : "Glossary" for value definitions)          *
************************************************************
*/
  TrdRegTimestampType = 770,
/*
****************************************************************
* Text which identifies the "origin" (i.e. system which was    *
* used to generate the time stamp) for the Traded / Regulatory *
* timestamp value.                                             *
****************************************************************
*/
  TrdRegTimestampOrigin = 771,
/*
***************************************************************
* Reference identifier to be used with ConfirmTransType (666) *
* = Replace or Cancel                                         *
***************************************************************
*/
  ConfirmRefID = 772,
/*
**********************************************************
* Identifies the type of Confirmation message being sent *
**********************************************************
*/
  ConfirmType = 773,
/*
******************************************************
* Identifies the reason for rejecting a Confirmation *
******************************************************
*/
  ConfirmRejReason = 774,
/*
**************************************************************
* Method for booking out this order. Used when notifying a   *
* broker that an order to be settled by that broker is to be *
* booked out as an OTC derivative (e.g. CFD or similar).     *
**************************************************************
*/
  BookingType = 775,
/*
**************************************************************
* Identified reason for rejecting an individual AllocAccount *
* (79) detail.                                               *
* Same values as AllocRejCode (88)                           *
**************************************************************
*/
  IndividualAllocRejCode = 776,
/*
*********************************************************
* Unique identifier for Settlement Instruction message. *
*********************************************************
*/
  SettlInstMsgID = 777,
/*
*************************************************************
* Number of settlement instructions within repeating group. *
*************************************************************
*/
  NoSettlInst = 778,
/*
************************************************************
* Timestamp of last update to data item (or creation if no *
* updates made since creation).                            *
************************************************************
*/
  LastUpdateTime = 779,
/*
**************************************************************
* Used to indicate whether settlement instructions are       *
* provided on an allocation instruction message, and if not, *
* how they are to be derived                                 *
**************************************************************
*/
  AllocSettlInstType = 780,
/*
***************************************************************
* Number of SettlPartyID (782), SettlPartyIDSource (783), and *
* SettlPartyRole (784) entries                                *
***************************************************************
*/
  NoSettlPartyIDs = 781,
/*
***************************************************************
* PartyID value within a settlement parties component. Nested *
* repeating group.                                            *
* Same values as PartyID (448)                                *
***************************************************************
*/
  SettlPartyID = 782,
/*
**************************************************************
* PartyIDSource value within a settlement parties component. *
* Same values as PartyIDSource (447)                         *
**************************************************************
*/
  SettlPartyIDSource = 783,
/*
**********************************************************
* PartyRole value within a settlement parties component. *
* Same values as PartyRole (452)                         *
**********************************************************
*/
  SettlPartyRole = 784,
/*
***********************************************************
* PartySubID value within a settlement parties component. *
* Same values as PartySubID (523)                         *
***********************************************************
*/
  SettlPartySubID = 785,
/*
****************************************
* Type of SettlPartySubID (785) value. *
* Same values as PartySubIDType (803)  *
****************************************
*/
  SettlPartySubIDType = 786,
/*
***************************************************************
* Used to indicate whether a delivery instruction is used for *
* securities or cash settlement                               *
***************************************************************
*/
  DlvyInstType = 787,
/*
*********************************
* Type of financing termination *
*********************************
*/
  TerminationType = 788,
/*
*************************************************
* Next expected MsgSeqNum value to be received. *
*************************************************
*/
  NextExpectedMsgSeqNum = 789,
/*
************************************************************
* Can be used to uniquely identify a specific Order Status *
* Request message.                                         *
************************************************************
*/
  OrdStatusReqID = 790,
/*
*******************************************************
* Unique ID of settlement instruction request message *
*******************************************************
*/
  SettlInstReqID = 791,
/*
****************************************************************
* Identifies reason for rejection (of a settlement instruction *
* request message)                                             *
****************************************************************
*/
  SettlInstReqRejCode = 792,
/*
****************************************************************
* Secondary allocation identifier. Unlike the AllocID (70),    *
* this can be shared across a number of allocation instruction *
* or allocation report messages, thereby making it possible to *
* pass an identifier for an original allocation message on     *
* multiple messages (e.g. from one party to a second to a      *
* third, across cancel and replace messages etc.).             *
****************************************************************
*/
  SecondaryAllocID = 793,
/*
***********************************************************
* Describes the specific type or purpose of an Allocation *
* Report message                                          *
***********************************************************
*/
  AllocReportType = 794,
/*
*************************************************************
* Reference identifier to be used with AllocTransType (7) = *
* Replace or Cancel                                         *
*************************************************************
*/
  AllocReportRefID = 795,
/*
****************************************************************
* Reason for cancelling or replacing an Allocation Instruction *
* or Allocation Report message                                 *
****************************************************************
*/
  AllocCancReplaceReason = 796,
/*
***********************************************************
* Indicates whether or not this message is a drop copy of *
* another message.                                        *
***********************************************************
*/
  CopyMsgIndicator = 797,
/*
***********************************************************
* Type of account associated with a confirmation or other *
* trade-level message                                     *
***********************************************************
*/
  AllocAccountType = 798,
/*
**************************************
* Average price for a specific order *
**************************************
*/
  OrderAvgPx = 799,
/*
****************************************************************
* Quantity of the order that is being booked out as part of an *
* Allocation Instruction or Allocation Report message          *
****************************************************************
*/
  OrderBookingQty = 800,
/*
***********************************************************
* Number of SettlPartySubID (785) and SettlPartySubIDType *
* (786) entries                                           *
***********************************************************
*/
  NoSettlPartySubIDs = 801,
/*
**************************************************************
* Number of PartySubID (523)and PartySubIDType (803) entries *
**************************************************************
*/
  NoPartySubIDs = 802,
/*
***************************************************************
* Type of PartySubID (523) value                              *
* 4000+ = Reserved and available for bi-laterally agreed upon *
* user defined values                                         *
***************************************************************
*/
  PartySubIDType = 803,
/*
*************************************************************
* Number of NestedPartySubID (545) and NestedPartySubIDType *
* (805) entries                                             *
*************************************************************
*/
  NoNestedPartySubIDs = 804,
/*
*****************************************
* Type of NestedPartySubID (545) value. *
* Same values as PartySubIDType (803)   *
*****************************************
*/
  NestedPartySubIDType = 805,
/*
***************************************************************
* Number of Nested2PartySubID (760) and Nested2PartySubIDType *
* (807) entries. Second instance of <NestedParties>.          *
***************************************************************
*/
  NoNested2PartySubIDs = 806,
/*
*************************************************************
* Type of Nested2PartySubID (760) value. Second instance of *
* <NestedParties>.                                          *
* Same values as PartySubIDType (803)                       *
*************************************************************
*/
  Nested2PartySubIDType = 807,
/*
***************************************************************
* Response to allocation to be communicated to a counterparty *
* through an intermediary, i.e. clearing house. Used in       *
* conjunction with AllocType = "Request to Intermediary" and  *
* AllocReportType = "Request to Intermediary"                 *
***************************************************************
*/
  AllocIntermedReqType = 808,
/*
************************************************************
* Underlying price associate with a derivative instrument. *
************************************************************
*/
  UnderlyingPx = 810,
/*
*******************************************
* Delta calculated from theoretical price *
*******************************************
*/
  PriceDelta = 811,
/*
***************************************************************
* Used to specify the maximum number of application messages  *
* that can be queued bedore a corrective action needs to take *
* place to resolve the queuing issue.                         *
***************************************************************
*/
  ApplQueueMax = 812,
/*
**************************************************************
* Current number of application messages that were queued at *
* the time that the message was created by the counterparty. *
**************************************************************
*/
  ApplQueueDepth = 813,
/*
**************************************************************
* Resolution taken when ApplQueueDepth (813) exceeds         *
* ApplQueueMax (812) or system specified maximum queue size. *
**************************************************************
*/
  ApplQueueResolution = 814,
/*
**********************************************************
* Action to take to resolve an application message queue *
* (backlog).                                             *
**********************************************************
*/
  ApplQueueAction = 815,
/*
*********************************************
* Number of alternative market data sources *
*********************************************
*/
  NoAltMDSource = 816,
/*
**********************************************************
* Session layer source for market data                   *
* (For the standard FIX session layer, this would be the *
* TargetCompID (56) where market data can be obtained).  *
**********************************************************
*/
  AltMDSourceID = 817,
/*
****************************************************************
* Secondary trade report identifier - can be used to associate *
* an additional identifier with a trade.                       *
****************************************************************
*/
  SecondaryTradeReportID = 818,
/*
*****************************
* Average Pricing Indicator *
*****************************
*/
  AvgPxIndicator = 819,
/*
***************************************************************
* Used to link a group of trades together. Useful for linking *
* a group of trades together for average price calculations.  *
***************************************************************
*/
  TradeLinkID = 820,
/*
************************************************************
* Specific device number, terminal number or station where *
* order was entered                                        *
************************************************************
*/
  OrderInputDevice = 821,
/*
*************************************************************
* Trading Session in which the underlying instrument trades *
*************************************************************
*/
  UnderlyingTradingSessionID = 822,
/*
**********************************************************
* Trading Session sub identifier in which the underlying *
* instrument trades                                      *
**********************************************************
*/
  UnderlyingTradingSessionSubID = 823,
/*
***************************************************************
* Reference to the leg of a multileg instrument to which this *
* trade refers                                                *
***************************************************************
*/
  TradeLegRefID = 824,
/*
****************************************************************
* Used to report any exchange rules that apply to this trade.  *
* Primarily intended for US futures markets. Certain trading   *
* practices are permitted by the CFTC, such as large lot       *
* trading, block trading, all or none trades. If the rules are *
* used, the exchanges are required to indicate these rules on  *
* the trade.                                                   *
****************************************************************
*/
  ExchangeRule = 825,
/*
***********************************************
* Identifies how the trade is to be allocated *
***********************************************
*/
  TradeAllocIndicator = 826,
/*
**************************************************************
* Part of trading cycle when an instrument expires. Field is *
* applicable for derivatives.                                *
**************************************************************
*/
  ExpirationCycle = 827,
/*
*****************
* Type of Trade *
*****************
*/
  TrdType = 828,
/*
*******************************************
* Further qualification to the trade type *
*******************************************
*/
  TrdSubType = 829,
/*
*************************************
* Reason trade is being transferred *
*************************************
*/
  TransferReason = 830,
/*
***************************************************************
* Total Number of Assignment Reports being returned to a firm *
***************************************************************
*/
  TotNumAssignmentReports = 832,
/*
***********************************************
* Unique identifier for the Assignment Report *
***********************************************
*/
  AsgnRptID = 833,
/*
**************************************************************
* Amount that a position has to be in the money before it is *
* exercised.                                                 *
**************************************************************
*/
  ThresholdAmount = 834,
/*
*********************************************
* Describes whether peg is static or floats *
*********************************************
*/
  PegMoveType = 835,
/*
****************************
* Type of Peg Offset value *
****************************
*/
  PegOffsetType = 836,
/*
*********************
* Type of Peg Limit *
*********************
*/
  PegLimitType = 837,
/*
***********************************************************
* If the calculated peg price is not a valid tick price,  *
* specifies whether to round the price to be more or less *
* aggressive                                              *
***********************************************************
*/
  PegRoundDirection = 838,
/*
**********************************************
* The price the order is currently pegged at *
**********************************************
*/
  PeggedPrice = 839,
/*
************************
* The scope of the peg *
************************
*/
  PegScope = 840,
/*
************************************************************
* Describes whether discretionay price is static or floats *
************************************************************
*/
  DiscretionMoveType = 841,
/*
***********************************
* Type of Discretion Offset value *
***********************************
*/
  DiscretionOffsetType = 842,
/*
****************************
* Type of Discretion Limit *
****************************
*/
  DiscretionLimitType = 843,
/*
*************************************************************
* If the calculated discretionary price is not a valid tick *
* price, specifies whether to round the price to be more or *
* less aggressive                                           *
*************************************************************
*/
  DiscretionRoundDirection = 844,
/*
************************************************
* The current discretionary price of the order *
************************************************
*/
  DiscretionPrice = 845,
/*
*******************************
* The scope of the discretion *
*******************************
*/
  DiscretionScope = 846,
/*
***************************************************************
* The target strategy of the order                            *
* 1000+ = Reserved and available for bi-laterally agreed upon *
* user defined values                                         *
***************************************************************
*/
  TargetStrategy = 847,
/*
****************************************************************
* Field to allow further specification of the TargetStrategy  *
* usage to be agreed between counterparties                    *
****************************************************************
*/
  TargetStrategyParameters = 848,
/*
***************************************************************
* For a TargetStrategy=Participate order specifies the target *
* particpation rate. For other order types this is a volume   *
* limit (i.e. do not be more than this percent of the market  *
* volume)                                                     *
***************************************************************
*/
  ParticipationRate = 849,
/*
****************************************************************
* For communication of the performance of the order versus the *
* target strategy                                              *
****************************************************************
*/
  TargetStrategyPerformance = 850,
/*
**************************************************************
* Indicator to identify whether this fill was a result of a  *
* liquidity provider providing or liquidity taker taking the *
* liquidity. Applicable only for OrdStatus of Partial or     *
* Filled.                                                    *
**************************************************************
*/
  LastLiquidityInd = 851,
/*
********************************************************
* Indicates if a trade should be reported via a market *
* reporting service.                                   *
********************************************************
*/
  PublishTrdIndicator = 852,
/*
*************************
* Reason for short sale *
*************************
*/
  ShortSaleReason = 853,
/*
**************************************************
* Type of quantity specified in a quantity field *
**************************************************
*/
  QtyType = 854,
/*
***********************************************************
* Additional TrdType (see tag 828) assigned to a trade by *
* trade match system.                                     *
***********************************************************
*/
  SecondaryTrdType = 855,
/*
************************
* Type of Trade Report *
************************
*/
  TradeReportType = 856,
/*
*************************************************************
* Indicates how the orders being booked and allocated by an *
* Allocation Instruction or Allocation Report message are   *
* identified, i.e. by explicit definition in the NoOrders   *
* group or not.                                             *
*************************************************************
*/
  AllocNoOrdersType = 857,
/*
***************************************************************
* Commission to be shared with a third party, e.g. as part of *
* a directed brokerage commission sharing arrangement.        *
***************************************************************
*/
  SharedCommission = 858,
/*
********************************************************
* Unique identifier for a Confirmation Request message *
********************************************************
*/
  ConfirmReqID = 859,
/*
***************************************************************
* Used to express average price as percent of par (used where *
* AvgPx field is expressed in some other way)                 *
***************************************************************
*/
  AvgParPx = 860,
/*
***************************************************************
* Reported price (used to differentiate from AvgPx on a       *
* confirmation of a marked-up or marked-down principal trade) *
***************************************************************
*/
  ReportedPx = 861,
/*
**********************************************
* Number of repeating OrderCapacity entries. *
**********************************************
*/
  NoCapacities = 862,
/*
***************************************************************
* Quantity executed under a specific OrderCapacity (e.g.      *
* quantity executed as agent, quantity executed as principal) *
***************************************************************
*/
  OrderCapacityQty = 863,
/*
******************************************
* Number of repeating EventType entries. *
******************************************
*/
  NoEvents = 864,
/*
***************************************
* Code to represent the type of event *
***************************************
*/
  EventType = 865,
/*
*****************
* Date of event *
*****************
*/
  EventDate = 866,
/*
********************************************************
* Predetermined price of issue at event, if applicable *
********************************************************
*/
  EventPx = 867,
/*
**********************************
* Comments related to the event. *
**********************************
*/
  EventText = 868,
/*
************************************************
* Percent at risk due to lowest possible call. *
************************************************
*/
  PctAtRisk = 869,
/*
************************************************
* Number of repeating InstrAttribType entries. *
************************************************
*/
  NoInstrAttrib = 870,
/*
******************************************************
* Code to represent the type of instrument attribute *
******************************************************
*/
  InstrAttribType = 871,
/*
***********************************************************
* Attribute value appropriate to the InstrAttribType (87) *
* field.                                                  *
***********************************************************
*/
  InstrAttribValue = 872,
/*
****************************************************************
* The effective date of a new securities issue determined by   *
* its underwriters. Often but not always the same as the Issue *
* Date and the Interest Accrual Date                           *
****************************************************************
*/
  DatedDate = 873,
/*
****************************************************************
* The start date used for calculating accrued interest on debt *
* instruments which are being sold between interest payment    *
* dates. Often but not always the same as the Issue Date and   *
* the Dated Date                                               *
****************************************************************
*/
  InterestAccrualDate = 874,
/*
********************************************************
* The program under which a commercial paper is issued *
********************************************************
*/
  CPProgram = 875,
/*
********************************************************
* The registration type of a commercial paper issuance *
********************************************************
*/
  CPRegType = 876,
/*
**************************************************************
* The program under which the underlying commercial paper is *
* issued                                                     *
**************************************************************
*/
  UnderlyingCPProgram = 877,
/*
************************************************************
* The registration type of the underlying commercial paper *
* issuance                                                 *
************************************************************
*/
  UnderlyingCPRegType = 878,
/*
********************************************************
* Unit amount of the underlying security (par, shares, *
* currency, etc.)                                      *
********************************************************
*/
  UnderlyingQty = 879,
/*
********************************************************
* Identifier assigned to a trade by a matching system. *
********************************************************
*/
  TrdMatchID = 880,
/*
**************************************************************
* Used to refer to a previous SecondaryTradeReportRefID when *
* amending the transaction (cancel, replace, release, or     *
* reversal).                                                 *
**************************************************************
*/
  SecondaryTradeReportRefID = 881,
/*
*********************************************************
* Price (percent-of-par or per unit) of the underlying  *
* security or basket. "Dirty" means it includes accrued *
* interest                                              *
*********************************************************
*/
  UnderlyingDirtyPrice = 882,
/*
********************************************************
* Price (percent-of-par or per unit) of the underlying *
* security or basket at the end of the agreement.      *
********************************************************
*/
  UnderlyingEndPrice = 883,
/*
****************************************************************
* Currency value attributed to this collateral at the start of *
* the agreement                                                *
****************************************************************
*/
  UnderlyingStartValue = 884,
/*
**********************************************************
* Currency value currently attributed to this collateral *
**********************************************************
*/
  UnderlyingCurrentValue = 885,
/*
**************************************************************
* Currency value attributed to this collateral at the end of *
* the agreement                                              *
**************************************************************
*/
  UnderlyingEndValue = 886,
/*
********************************************
* Number of underlying stipulation entries *
********************************************
*/
  NoUnderlyingStips = 887,
/*
****************************************
* Type of stipulation.                 *
* Same values as StipulationType (233) *
****************************************
*/
  UnderlyingStipType = 888,
/*
*****************************************
* Value of stipulation.                 *
* Same values as StipulationValue (234) *
*****************************************
*/
  UnderlyingStipValue = 889,
/*
**************************************************************
* Net Money at maturity if Zero Coupon and maturity value is *
* different from par value                                   *
**************************************************************
*/
  MaturityNetMoney = 890,
/*
*********************************************
* Defines the unit for a miscellaneous fee. *
*********************************************
*/
  MiscFeeBasis = 891,
/*
***************************************************************
* Total number of NoAlloc entries across all messages. Should *
* be the sum of all NoAllocs in each message that has         *
* repeating NoAlloc entries related to the same AllocID or    *
* AllocReportID. Used to support fragmentation.               *
***************************************************************
*/
  TotNoAllocs = 892,
/*
****************************************************************
* Indicates whether this message is the last in a sequence of  *
* messages for those messages that support fragmentation, such *
* as Allocation Instruction, Mass Quote, Security List,        *
* Derivative Security List                                     *
****************************************************************
*/
  LastFragment = 893,
/*
*********************************
* Collateral Request Identifier *
*********************************
*/
  CollReqID = 894,
/*
************************************
* Reason for Collateral Assignment *
************************************
*/
  CollAsgnReason = 895,
/*
**********************************
* Collateral inquiry qualifiers: *
**********************************
*/
  CollInquiryQualifier = 896,
/*
****************************************
* Number of trades in repeating group. *
****************************************
*/
  NoTrades = 897,
/*
****************************************************************
* The fraction of the cash consideration that must be          *
* collateralized, expressed as a percent. A MarginRatio of 02% *
* indicates that the value of the collateral (after deducting  *
* for "haircut") must exceed the cash consideration by 2%.     *
****************************************************************
*/
  MarginRatio = 898,
/*
*******************************************************
* Excess margin amount (deficit if value is negative) *
*******************************************************
*/
  MarginExcess = 899,
/*
**************************************************************
* TotalNetValue is determined as follows:                    *
* At the initial collateral assignment TotalNetValue is the  *
* sum of (UnderlyingStartValue * (1-haircut)).               *
* In a collateral substitution TotalNetValue is the sum of   *
* (UnderlyingCurrentValue * (1-haircut)).                    *
* For listed derivatives clearing margin management, this is *
* the collateral value which equals (Market value * haircut) *
**************************************************************
*/
  TotalNetValue = 900,
/*
******************************************
* Starting consideration less repayments *
******************************************
*/
  CashOutstanding = 901,
/*
************************************
* Collateral Assignment Identifier *
************************************
*/
  CollAsgnID = 902,
/*
******************************************
* Collateral Assignment Transaction Type *
******************************************
*/
  CollAsgnTransType = 903,
/*
**********************************
* Collateral Response Identifier *
**********************************
*/
  CollRespID = 904,
/*
***************************************
* Collateral Assignment Response Type *
***************************************
*/
  CollAsgnRespType = 905,
/*
***************************************
* Collateral Assignment Reject Reason *
***************************************
*/
  CollAsgnRejectReason = 906,
/*
***********************************************************
* Collateral Assignment Identifier to which a transaction *
* refers                                                  *
***********************************************************
*/
  CollAsgnRefID = 907,
/*
********************************
* Collateral Report Identifier *
********************************
*/
  CollRptID = 908,
/*
*********************************
* Collateral Inquiry Identifier *
*********************************
*/
  CollInquiryID = 909,
/*
*********************
* Collateral Status *
*********************
*/
  CollStatus = 910,
/*
*************************************************************
* Total number or reports returned in response to a request *
*************************************************************
*/
  TotNumReports = 911,
/*
****************************************************************
* Indicates whether this message is that last report message   *
* in response to a request, such as Order Mass Status Request. *
****************************************************************
*/
  LastRptRequested = 912,
/*
**************************************************************
* The full name of the base standard agreement, annexes and  *
* amendments in place between the principals applicable to a *
* financing transaction.                                     *
**************************************************************
*/
  AgreementDesc = 913,
/*
***********************************************************
* A common reference to the applicable standing agreement *
* between the counterparties to a financing transaction.  *
***********************************************************
*/
  AgreementID = 914,
/*
**************************************************************
* A reference to the date the underlying agreement specified *
* by AgreementID and AgreementDesc was executed.             *
**************************************************************
*/
  AgreementDate = 915,
/*
****************************************************************
* Start date of a financing deal, i.e. the date the buyer pays *
* the seller cash and takes control of the collateral          *
****************************************************************
*/
  StartDate = 916,
/*
**********************************************************
* End date of a financing deal, i.e. the date the seller *
* reimburses the buyer and takes back control of the     *
* collateral                                             *
**********************************************************
*/
  EndDate = 917,
/*
***********************************************************
* Contractual currency forming the basis of a financing   *
* agreement and associated transactions. Usually, but not *
* always, the same as the trade currency.                 *
***********************************************************
*/
  AgreementCurrency = 918,
/*
*********************************
* Identifies type of settlement *
*********************************
*/
  DeliveryType = 919,
/*
*****************************************************
* Accrued Interest Amount applicable to a financing *
* transaction on the End Date.                      *
*****************************************************
*/
  EndAccruedInterestAmt = 920,
/*
***************************************************************
* Starting dirty cash consideration of a financing deal, i.e. *
* paid to the seller on the Start Date.                       *
***************************************************************
*/
  StartCash = 921,
/*
*************************************************************
* Ending dirty cash consideration of a financing deal. i.e. *
* reimbursed to the buyer on the End Date.                  *
*************************************************************
*/
  EndCash = 922,
/*
*****************************************
* Unique identifier for a User Request. *
*****************************************
*/
  UserRequestID = 923,
/*
***********************************************************
* Indicates the action required by a User Request Message *
***********************************************************
*/
  UserRequestType = 924,
/*
******************************
* New Password or passphrase *
******************************
*/
  NewPassword = 925,
/*
**********************************
* Indicates the status of a user *
**********************************
*/
  UserStatus = 926,
/*
*****************************************************
* A text description associated with a user status. *
*****************************************************
*/
  UserStatusText = 927,
/*
************************************************
* Indicates the status of a network connection *
************************************************
*/
  StatusValue = 928,
/*
********************************************************
* A text description associated with a network status. *
********************************************************
*/
  StatusText = 929,
/*
*******************************************
* Assigned value used to identify a firm. *
*******************************************
*/
  RefCompID = 930,
/*
**************************************************************
* Assigned value used to identify specific elements within a *
* firm.                                                      *
**************************************************************
*/
  RefSubID = 931,
/*
*********************************************
* Unique identifier for a network response. *
*********************************************
*/
  NetworkResponseID = 932,
/*
*********************************************
* Unique identifier for a network resquest. *
*********************************************
*/
  NetworkRequestID = 933,
/*
***************************************************************
* Identifier of the previous Network Response message sent to *
* a counterparty, used to allow incremental updates.          *
***************************************************************
*/
  LastNetworkResponseID = 934,
/*
**********************************************************
* Indicates the type and level of details required for a *
* Network Status Request Message                         *
* Boolean logic applies EG If you want to subscribe for  *
* changes to certain ids then UserRequestType =0 (8+2), *
* Snapshot for certain IDs = 9 (8+)                     *
**********************************************************
*/
  NetworkRequestType = 935,
/*
**************************************************
* Number of CompID entries in a repeating group. *
**************************************************
*/
  NoCompIDs = 936,
/*
**************************************************
* Indicates the type of Network Response Message *
**************************************************
*/
  NetworkStatusResponseType = 937,
/*
****************************************************************
* Number of CollInquiryQualifier entries in a repeating group. *
****************************************************************
*/
  NoCollInquiryQualifier = 938,
/*
***********************
* Trade Report Status *
***********************
*/
  TrdRptStatus = 939,
/*
************************************************
* Identifies the status of the ConfirmationAck *
************************************************
*/
  AffirmStatus = 940,
/*
*******************************************************
* Currency in which the strike price of an underlying *
* instrument is denominated                           *
*******************************************************
*/
  UnderlyingStrikeCurrency = 941,
/*
***************************************************************
* Currency in which the strike price of a instrument leg of a *
* multileg instrument is denominated                          *
***************************************************************
*/
  LegStrikeCurrency = 942,
/*
*************************************************************
* A code that represents a time interval in which a fill or *
* trade occurred.                                           *
* Required for US futures markets.                          *
*************************************************************
*/
  TimeBracket = 943,
/*
*********************************************************
* Action proposed for an Underlying Instrument instance *
*********************************************************
*/
  CollAction = 944,
/*
********************************
* Status of Collateral Inquiry *
********************************
*/
  CollInquiryStatus = 945,
/*
*************************************************************
* Result returned in response to Collateral Inquiry         *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
  CollInquiryResult = 946,
/*
*****************************************************
* Currency in which the StrikePrice is denominated. *
*****************************************************
*/
  StrikeCurrency = 947,
/*
***************************************************************
* Number of Nested3PartyID (949), Nested3PartyIDSource (950), *
* and Nested3PartyRole (95) entries                           *
***************************************************************
*/
  NoNested3PartyIDs = 948,
/*
************************************************************
* PartyID value within a "third instance" Nested repeating *
* group.                                                   *
* Same values as PartyID (448)                             *
************************************************************
*/
  Nested3PartyID = 949,
/*
********************************************************
* PartyIDSource value within a "third instance" Nested *
* repeating group.                                     *
* Same values as PartyIDSource (447)                   *
********************************************************
*/
  Nested3PartyIDSource = 950,
/*
**************************************************************
* PartyRole value within a "third instance" Nested repeating *
* group.                                                     *
* Same values as PartyRole (452)                             *
**************************************************************
*/
  Nested3PartyRole = 951,
/*
**********************************************
* Number of Nested3PartySubIDs (953) entries *
**********************************************
*/
  NoNested3PartySubIDs = 952,
/*
***************************************************************
* PartySubID value within a "third instance" Nested repeating *
* group.                                                      *
* Same values as PartySubID (523)                             *
***************************************************************
*/
  Nested3PartySubID = 953,
/*
*********************************************************
* PartySubIDType value within a "third instance" Nested *
* repeating group.                                      *
* Same values as PartySubIDType (803)                   *
*********************************************************
*/
  Nested3PartySubIDType = 954,
/*
***********************************************************
* Specifies when the contract (i.e. MBS/TBA) will settle. *
***********************************************************
*/
  LegContractSettlMonth = 955,
/*
****************************************************************
* The start date used for calculating accrued interest on debt *
* instruments which are being sold between interest payment    *
* dates. Often but not always the same as the Issue Date and   *
* the Dated Date                                               *
****************************************************************
*/
  LegInterestAccrualDate = 956
}
