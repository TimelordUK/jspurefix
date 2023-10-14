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
* (31). I.e., AvgPx will contain an average of percent-of-par *
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
* Valid values:                                             *
* FIXT.1.1                                                  *
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
***************************************************************
* Commission. Note if CommType (13) is percentage, Commission *
* of 5% should be represented as .05.                         *
***************************************************************
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
****************************************************************
* Unique identifier of execution message as assigned by        *
* sell-side (broker, exchange, ECN) (will be 0 (zero) for      *
* ExecType (150)=I (Order Status)).                            *
* Uniqueness must be guaranteed within a single trading day or *
* the life of a multi-day order. Firms which accept multi-day  *
* orders should consider embedding a date within the ExecID    *
* field to assure uniqueness across days.                      *
* (Prior to FIX 4.1 this field was of type int).               *
****************************************************************
*/
  ExecID = 17,
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
  ExecInst = 18,
/*
****************************************************************
* Reference identifier used with Trade, Trade Cancel and Trade *
* Correct execution types.                                     *
* (Prior to FIX 4.1 this field was of type int)                *
****************************************************************
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
* 100+ are reserved for private security identifications   *
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
************************************
* Integer message sequence number. *
************************************
*/
  MsgSeqNum = 34,
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
************************************************************
* Identifies current status of order. *** SOME VALUES HAVE *
* BEEN REPLACED - See "Replaced Features and Supported     *
* Approach" *** (see Volume : "Glossary" for value         *
* definitions)                                             *
************************************************************
*/
  OrdStatus = 39,
/*
*************************************************************
* Order type. *** SOME VALUES ARE NO LONGER USED - See      *
* "Deprecated (Phased-out) Features and Supported Approach" *
* *** (see Volume : "Glossary" for value definitions)       *
*************************************************************
*/
  OrdType = 40,
/*
****************************************************************
* ClOrdID (11) of the previous order (NOT the initial order of *
* the day) as assigned by the institution, used to identify    *
* the previous order in cancel and cancel/replace requests.    *
****************************************************************
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
****************************************************
* Side of order (see Volume : "Glossary" for value *
* definitions)                                     *
****************************************************
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
****************************************************************
* Specifies how long the order remains in effect. Absence of   *
* this field is interpreted as DAY. NOTE not applicable to CIV *
* Orders. (see Volume : "Glossary" for value definitions)      *
****************************************************************
*/
  TimeInForce = 59,
/*
**************************************************************
* Timestamp when the business transaction represented by the *
* message occurred.                                          *
**************************************************************
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
* warrants, etc.). Note also see SecurityType (167).         *
* As defined in the NYSE Stock and bond Symbol Directory and *
* in the AMEX Fitch Directory.                               *
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
* Identifies allocation transaction type *** SOME VALUES HAVE *
* BEEN REPLACED - See "Replaced Features and Supported        *
* Approach" ***                                               *
***************************************************************
*/
  AllocTransType = 71,
/*
**************************************************************
* Reference identifier to be used with AllocTransType (71) = *
* Replace or Cancel.                                         *
* (Prior to FIX 4.1 this field was of type int)              *
**************************************************************
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
**************************************************************
* Sequence number of message within report series. Used to   *
* carry reporting sequence number of the fill as represented *
* on the Trade Report Side.                                  *
**************************************************************
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
**************************************
* Number of bytes in signature field *
**************************************
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
*************************************************
* Code to identify reason for cancel rejection. *
*************************************************
*/
  CxlRejReason = 102,
/*
****************************************************************
* Code to identify reason for order rejection. Note: Values 3, *
* 4, and 5 will be used when rejecting an order due to         *
* pre-allocation information errors.                           *
****************************************************************
*/
  OrdRejReason = 103,
/*
***************************************************************
* Code to qualify IOI use. (see Volume : "Glossary" for value *
* definitions)                                                *
***************************************************************
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
****************************************************************
* Can be used to provide an optional textual description for a *
* financial instrument.                                        *
****************************************************************
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
* The quantity to be displayed . Required for reserve orders. *
* On orders specifies the qty to be displayed, on execution   *
* reports the currently displayed quantity.                   *
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
* originator's location (i.e. geographic location and/or desk, *
* trader)                                                      *
****************************************************************
*/
  SenderLocationID = 142,
/*
***********************************************************
* Assigned value used to identify specific message        *
* destination's location (i.e. geographic location and/or *
* desk, trader)                                           *
***********************************************************
*/
  TargetLocationID = 143,
/*
****************************************************************
* Assigned value used to identify specific message             *
* originator's location (i.e. geographic location and/or desk, *
* trader) if the message was delivered by a third party        *
****************************************************************
*/
  OnBehalfOfLocationID = 144,
/*
****************************************************************
* Assigned value used to identify specific message recipient's *
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
* status (i.e. Partially Filled) *** SOME VALUES HAVE BEEN    *
* REPLACED - See "Replaced Features and Supported Approach"   *
* ***                                                         *
***************************************************************
*/
  ExecType = 150,
/*
****************************************************************
* Quantity open for further execution. If the OrdStatus (39)   *
* is Canceled, DoneForTheDay, Expired, Calculated, or Rejected *
* (in which case the order is no longer active) then LeavesQty *
* could be 0, otherwise LeavesQty = OrderQty (38) - CumQty     *
* (14).                                                        *
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
* multiplied or divided.                                  *
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
****************************************************************
* Indicates mode used for Settlement Instructions message. *** *
* SOME VALUES HAVE BEEN REPLACED - See "Replaced Features and  *
* Supported Approach" ***                                      *
****************************************************************
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
****************************************************************
* Indicates type of security. Security type enumerations are   *
* grouped by Product(460) field value. NOTE: Additional values *
* may be used by mutual agreement of the counterparties.       *
****************************************************************
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
* StandInstDbType (169) (i.e. the Global Custodian's name).  *
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
* negative value. Expressed in decimal form. For example, *
* 61.99 points is expressed and sent as 0.006199          *
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
* MaturityDate (54) field.  Month and Year of the maturity     *
* (used for standardized futures and options).                 *
* Format:                                                      *
* YYYYMM (e.g. 199903)                                         *
* YYYYMMDD (e.g. 20030323)                                     *
* YYYYMMwN (e.g. 200303w) for week                             *
* A specific date or can be appended to the MaturityMonthYear. *
* For instance, if multiple standard products exist that       *
* mature in the same Year and Month, but actually mature at a  *
* different time, a value can be appended, such as "w" or "w2" *
* to indicate week  as opposed to week 2 expiration. Likewise, *
* the date (0-3) can be appended to indicate a specific        *
* expiration (maturity date).                                  *
****************************************************************
*/
  MaturityMonthYear = 200,
/*
*********************************************************
* Indicates whether an option contract is a put or call *
*********************************************************
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
***************************************************************
* Provided to support versioning of option contracts as a     *
* result of corporate actions or events. Use of this field is *
* defined by counterparty agreement or market conventions.    *
***************************************************************
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
* message should handle/process the account details.          *
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
**************************************************************
* Reference identifier for the SettlInstID (162) with Cancel *
* and Replace SettlInstTransType (163) transaction types.    *
**************************************************************
*/
  SettlInstRefID = 214,
/*
*******************************************************
* Number of repeating groups of RoutingID (217) and   *
* RoutingType (216) values.                           *
* See Volume 3: "Pre-Trade Message Targeting/Routing" *
*******************************************************
*/
  NoRoutingIDs = 215,
/*
****************************************************
* Indicates the type of RoutingID (217) specified. *
****************************************************
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
**********************************************************
* Name of benchmark curve.                               *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
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
**************************************************************
* Number of business days before repurchase of a repo. (Note *
* tag # was reserved in FIX 4.1, added in FIX 4.3)           *
**************************************************************
*/
  RepurchaseTerm = 226,
/*
**************************************************************
* Percent of par at which a Repo will be repaid. Represented *
* as a percent, e.g. .9525 represents 95-/4 percent of par.  *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)     *
**************************************************************
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
**********************************************************
* For Fixed Income.                                      *
* Type of Stipulation.                                   *
* Other types may be used by mutual agreement of the     *
* counterparties.                                        *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  StipulationType = 233,
/*
****************************************************************
* For Fixed Income. Value of stipulation.                      *
* The expression can be an absolute single value or a          *
* combination of values and logical operators:                 *
* < value                                                      *
* > value                                                      *
* <= value                                                     *
* >= value                                                     *
* value                                                        *
* value - value2                                               *
* value OR value2                                              *
* value AND value2                                             *
* YES                                                          *
* NO                                                           *
* Bargain conditions recognized by the London Stock Exchange - *
* to be used when StipulationType is "BGNCON".                 *
* CD = Special cum Dividend                                    *
* XD = Special ex Dividend                                     *
* CC = Special cum Coupon                                      *
* XC = Special ex Coupon                                       *
* CB = Special cum Bonus                                       *
* XB = Special ex Bonus                                        *
* CR = Special cum Rights                                      *
* XR = Special ex Rights                                       *
* CP = Special cum Capital Repayments                          *
* XP = Special ex Capital Repayments                           *
* CS = Cash Settlement                                         *
* SP = Special Price                                           *
* TR = Report for European Equity Market Securities in         *
* accordance with Chapter 8 of the Rules.                      *
* GD = Guaranteed Delivery                                     *
* Values for StipulationType = "PXSOURCE":                     *
* BB GENERIC                                                   *
* BB FAIRVALUE                                                 *
* BROKERTEC                                                    *
* ESPEED                                                       *
* GOVPX                                                        *
* HILLIARD FARBER                                              *
* ICAP                                                         *
* TRADEWEB                                                     *
* TULLETT LIBERTY                                              *
* If a particular side of the market is wanted append /BID     *
* /OFFER or /MID.                                              *
* plus appropriate combinations of the above and other         *
* expressions by mutual agreement of the counterparties.       *
* Examples: ">=60", ".25", "ORANGE OR CONTRACOSTA", etc.       *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)       *
****************************************************************
*/
  StipulationValue = 234,
/*
****************************************************************
* Type of yield. (Note tag # was reserved in FIX 4.1, added in *
* FIX 4.3)                                                     *
****************************************************************
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
**************************************************************
* Identifies the collateral used in the transaction.         *
* Valid values: see SecurityType (167) field (Note tag # was *
* reserved in FIX 4.1, added in FIX 4.3)                     *
**************************************************************
*/
  RepoCollateralSecurityType = 239,
/*
*************************************************************
* Return of investor's principal in a security. Bond        *
* redemption can occur before maturity date.(Note tag # was *
* reserved in FIX 4.1, added in FIX 4.3) (prior to FIX 4.4  *
* field was of type UTCDate)                                *
*************************************************************
*/
  RedemptionDate = 240,
/*
**********************************************************
* Underlying security's CouponPaymentDate.               *
* See CouponPaymentDate (224) field for description      *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
* (prior to FIX 4.4 field was of type UTCDate)           *
**********************************************************
*/
  UnderlyingCouponPaymentDate = 241,
/*
**********************************************************
* Underlying security's IssueDate.                       *
* See IssueDate (225) field for description              *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
* (prior to FIX 4.4 field was of type UTCDate)           *
**********************************************************
*/
  UnderlyingIssueDate = 242,
/*
****************************************************************
* Underlying security's RepoCollateralSecurityType. See        *
* RepoCollateralSecurityType (239) field for description.(Note *
* tag # was reserved in FIX 4.1, added in FIX 4.3)             *
****************************************************************
*/
  UnderlyingRepoCollateralSecurityType = 243,
/*
***************************************************************
* Underlying security's RepurchaseTerm. See RepurchaseTerm    *
* (226) field for description (Note tag # was reserved in FIX *
* 4.1, added in FIX 4.3)                                      *
***************************************************************
*/
  UnderlyingRepurchaseTerm = 244,
/*
***************************************************************
* Underlying security's RepurchaseRate. See RepurchaseRate    *
* (227) field for description (Note tag # was reserved in FIX *
* 4.1, added in FIX 4.3)                                      *
***************************************************************
*/
  UnderlyingRepurchaseRate = 245,
/*
**********************************************************
* Underlying security's Factor.                          *
* See Factor (228) field for description                 *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  UnderlyingFactor = 246,
/*
***************************************************************
* Underlying security's RedemptionDate. See RedemptionDate    *
* (240) field for description (Note tag # was reserved in FIX *
* 4.1, added in FIX 4.3) (prior to FIX 4.4 field was of type  *
* UTCDate)                                                    *
***************************************************************
*/
  UnderlyingRedemptionDate = 247,
/*
**********************************************************
* Multileg instrument's individual leg security's        *
* CouponPaymentDate.                                     *
* See CouponPaymentDate (224) field for description      *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
* (prior to FIX 4.4 field was of type UTCDate)           *
**********************************************************
*/
  LegCouponPaymentDate = 248,
/*
**************************************************************
* Multileg instrument's individual leg security's IssueDate. *
* See IssueDate (225) field for description                  *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)     *
* (prior to FIX 4.4 field was of type UTCDate)               *
**************************************************************
*/
  LegIssueDate = 249,
/*
***************************************************************
* Multileg instrument's individual leg security's             *
* RepoCollateralSecurityType. See RepoCollateralSecurityType  *
* (239) field for description (Note tag # was reserved in FIX *
* 4.1, added in FIX 4.3)                                      *
***************************************************************
*/
  LegRepoCollateralSecurityType = 250,
/*
*************************************************************
* Multileg instrument's individual leg security's           *
* RepurchaseTerm. See RepurchaseTerm (226) field for        *
* description (Note tag # was reserved in FIX 4.1, added in *
* FIX 4.3)                                                  *
*************************************************************
*/
  LegRepurchaseTerm = 251,
/*
*************************************************************
* Multileg instrument's individual leg security's           *
* RepurchaseRate. See RepurchaseRate (227) field for        *
* description (Note tag # was reserved in FIX 4.1, added in *
* FIX 4.3)                                                  *
*************************************************************
*/
  LegRepurchaseRate = 252,
/*
***********************************************************
* Multileg instrument's individual leg security's Factor. *
* See Factor (228) field for description                  *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3)  *
***********************************************************
*/
  LegFactor = 253,
/*
*************************************************************
* Multileg instrument's individual leg security's           *
* RedemptionDate. See RedemptionDate (240) field for        *
* description (Note tag # was reserved in FIX 4.1, added in *
* FIX 4.3) (prior to FIX 4.4 field was of type UTCDate)     *
*************************************************************
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
* Underlying security's CreditRating.                    *
* See CreditRating (255) field for description           *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  UnderlyingCreditRating = 256,
/*
**********************************************************
* Multileg instrument's individual leg security's        *
* CreditRating.                                          *
* See CreditRating (255) field for description           *
* (Note tag # was reserved in FIX 4.1, added in FIX 4.3) *
**********************************************************
*/
  LegCreditRating = 257,
/*
**************************************************************
* Driver and part of trade in the event that the Security    *
* Master file was wrong at the point of entry(Note tag # was *
* reserved in FIX 4.1, added in FIX 4.3)                     *
**************************************************************
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
***********************************************************
* Depth of market for Book Snapshot / Incremental updates *
* 0 - full book depth                                     *
* 1 - top of book                                         *
* 2 and above - book depth (number of levels)             *
***********************************************************
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
* (Not specified) = broker option                             *
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
****************************
* Direction of the "tick". *
****************************
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
*****************************************
* Refers to a previous MDEntryID (278). *
*****************************************
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
* Identification of a Market Maker's location *
***********************************************
*/
  LocationID = 283,
/*
*******************************************
* Identification of a Market Maker's desk *
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
***************************************************************
* Flag that identifies a market data entry. (Prior to FIX 4.3 *
* this field was of type char)                                *
***************************************************************
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
********************************************************
* Identifies a firm's or a security's financial status *
********************************************************
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
  QuoteStatus = 297,
/*
****************************************
* Identifies the type of quote cancel. *
****************************************
*/
  QuoteCancelType = 298,
/*
**************************************************************
* Unique identifier for a quote. The QuoteEntryID stays with *
* the quote as a static identifier even if the quote is      *
* updated.                                                   *
**************************************************************
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
* A default value should be bilaterally agreed.                *
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
*********************************************
* Total number of quotes for the quote set. *
*********************************************
*/
  TotNoQuoteEntries = 304,
/*
*************************************************
* Underlying security's SecurityIDSource.       *
* Valid values: see SecurityIDSource (22) field *
*************************************************
*/
  UnderlyingSecurityIDSource = 305,
/*
*****************************************
* Underlying security's Issuer.         *
* See Issuer (06) field for description *
*****************************************
*/
  UnderlyingIssuer = 306,
/*
*******************************************
* Description of the Underlying security. *
* See SecurityDesc(107).                  *
*******************************************
*/
  UnderlyingSecurityDesc = 307,
/*
**********************************************************
* Underlying security's SecurityExchange. Can be used to *
* identify the underlying security.                      *
* Valid values: see SecurityExchange (207)               *
**********************************************************
*/
  UnderlyingSecurityExchange = 308,
/*
*********************************************
* Underlying security's SecurityID.         *
* See SecurityID (48) field for description *
*********************************************
*/
  UnderlyingSecurityID = 309,
/*
***************************************************************
* Underlying security's SecurityType.                         *
* Valid values: see SecurityType (167) field                  *
* (see below for details concerning this fields use in        *
* conjunction with SecurityType=REPO)                         *
* The following applies when used in conjunction with         *
* SecurityType=REPO                                           *
* Represents the general or specific type of security that    *
* underlies a financing agreement                             *
* Valid values for SecurityType=REPO:                         *
* If bonds of a particular issuer or country are wanted in an *
* Order or are in the basket of an Execution and the          *
* SecurityType is not granular enough, include the            *
* UnderlyingIssuer (306), UnderlyingCountryOfIssue (592),     *
* UnderlyingProgram, UnderlyingRegType and/or <               *
* UnderlyingStipulations > block e.g.:                        *
***************************************************************
*/
  UnderlyingSecurityType = 310,
/*
*****************************************
* Underlying security's Symbol.         *
* See Symbol (55) field for description *
*****************************************
*/
  UnderlyingSymbol = 311,
/*
********************************************
* Underlying security's SymbolSfx.         *
* See SymbolSfx (65) field for description *
********************************************
*/
  UnderlyingSymbolSfx = 312,
/*
*************************************************************
* Underlying security's MaturityMonthYear. Can be used with *
* standardized derivatives vs. the UnderlyingMaturityDate   *
* (542) field.                                              *
* See MaturityMonthYear (200) field for description         *
*************************************************************
*/
  UnderlyingMaturityMonthYear = 313,
/*
*****************************************************
* Put or call indicator of the underlying security. *
* See PutOrCall(201).                               *
*****************************************************
*/
  UnderlyingPutOrCall = 315,
/*
***********************************************
* Underlying security's StrikePrice.          *
* See StrikePrice (202) field for description *
***********************************************
*/
  UnderlyingStrikePrice = 316,
/*
************************************************
* Underlying security's OptAttribute.          *
* See OptAttribute (206) field for description *
************************************************
*/
  UnderlyingOptAttribute = 317,
/*
***********************************************************
* Underlying security's Currency.                         *
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
* characters) used in a message's "Encoded" fields. *
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
* EncodedSecurityDesc (351) field.              *
*************************************************
*/
  EncodedSecurityDescLen = 350,
/*
****************************************************************
* Encoded (non-ASCII characters) representation of the         *
* SecurityDesc (107) field in the encoded format specified via *
* the MessageEncoding (347) field. If used, the ASCII          *
* (English) representation should also be specified in the     *
* SecurityDesc field.                                          *
****************************************************************
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
* (147) field in the encoded format specified via the          *
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
****************************************************************
* Encoded (non-ASCII characters) representation of the         *
* Headline (148) field in the encoded format specified via the *
* MessageEncoding (347) field. If used, the ASCII (English)    *
* representation should also be specified in the Headline      *
* field.                                                       *
****************************************************************
*/
  EncodedHeadline = 359,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedAllocText (361) field.                 *
*************************************************
*/
  EncodedAllocTextLen = 360,
/*
*************************************************************
* Encoded (non-ASCII characters) representation of the      *
* AllocText (161) field in the encoded format specified via *
* the MessageEncoding (347) field. If used, the ASCII       *
* (English) representation should also be specified in the  *
* AllocText field.                                          *
*************************************************************
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
************************************
* Reason Quote Entry was rejected: *
************************************
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
* Total amount traded (i.e. quantity * price) expressed in     *
* units of currency. For FX Futures this is used to express    *
* the notional value of a fill when quantity fields are        *
* expressed in terms of contract size (i.e. quantity * price * *
* contract size).                                              *
****************************************************************
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
********************************************
* Specifies the direction of the messsage. *
********************************************
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
* related to and should be mathematically added to.           *
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
******************************************
* Number of BidDescriptor (400) entries. *
******************************************
*/
  NoBidDescriptors = 398,
/*
*****************************************************
* Code to identify the type of BidDescriptor (400). *
*****************************************************
*/
  BidDescriptorType = 399,
/*
************************************************************
* BidDescriptor value. Usage depends upon BidDescriptorTyp *
* (399).                                                   *
* If BidDescriptorType = 1                                 *
* Industrials etc - Free text                              *
* If BidDescriptorType = 2                                 *
* "FR" etc - ISO Country Codes                             *
* If BidDescriptorType = 3                                 *
* FT00, FT250, STOX - Free text                            *
************************************************************
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
************************************************************
* Liquidity indicator or lower limit if TotalNumSecurities *
* (393) > 1. Represented as a percentage.                  *
************************************************************
*/
  LiquidityPctLow = 402,
/*
**************************************************************
* Upper liquidity indicator if TotalNumSecurities (393) > 1. *
* Represented as a percentage.                               *
**************************************************************
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
* Eg Used in EFP trades 2% (EFP - Exchange for Physical ). *
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
* SellSide. Zero means don't send status.                *
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
*******************************************************
* Code to represent the type of trade.                *
* (Prior to FIX 4.4 this field was named "TradeType") *
*******************************************************
*/
  BidTradeType = 418,
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
* Should be the sum of all NoStrikes (428) in each message    *
* that has repeating strike price entries related to the same *
* ListID (66). Used to support fragmentation.                 *
***************************************************************
*/
  TotNoStrikes = 422,
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
  PriceType = 423,
/*
****************************************************************
* For GT orders, the OrderQty (38) less all quantity (adjusted *
* for stock splits) that traded on previous days. DayOrderQty  *
* (424) = OrderQty - (CumQty (14) - DayCumQty (425))           *
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
**************************************
* Code to represent the status type. *
**************************************
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
* market's business practices                                  *
****************************************************************
*/
  ExpireDate = 432,
/*
*********************************************
* Identifies the type of ListExecInst (69). *
*********************************************
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
**********************************************
* Underlying security's CouponRate.          *
* See CouponRate (223) field for description *
**********************************************
*/
  UnderlyingCouponRate = 435,
/*
******************************************************
* Underlying security's ContractMultiplier.          *
* See ContractMultiplier (231) field for description *
******************************************************
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
* See "Appendix 6-G - Use of <Parties> Component Block"     *
*************************************************************
*/
  PartyIDSource = 447,
/*
****************************************************************
* Party identifier/code. See PartyIDSource (447) and PartyRole *
* (452).                                                       *
* See "Appendix 6-G - Use of <Parties> Component Block"        *
****************************************************************
*/
  PartyID = 448,
/*
****************************************************************
* Net change from previous day's closing price vs. last traded *
* price.                                                       *
****************************************************************
*/
  NetChgPrevDay = 451,
/*
***************************************************************
* Identifies the type or role of the PartyID (448) specified. *
* See "Appendix 6-G - Use of <Parties> Component Block"       *
* (see Volume : "Glossary" for value definitions)             *
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
* with. See also the CFICode (461) and SecurityType (167)  *
* fields.                                                  *
************************************************************
*/
  Product = 460,
/*
***************************************************************
* Indicates the type of security using ISO 10962 standard,    *
* Classification of Financial Instruments (CFI code) values.  *
* ISO 10962 is maintained by ANNA (Association of National    *
* Numbering Agencies) acting as Registration Authority. See   *
* "Appendix 6-B FIX Fields Based Upon Other Standards". See   *
* also the Product (460) and SecurityType (167) fields. It is *
* recommended that CFICode be used instead of SecurityType    *
* (167) for non-Fixed Income instruments.                     *
* A subset of possible values applicable to FIX usage are     *
* identified in "Appendix 6-D CFICode Usage - ISO 10962       *
* Classification of Financial Instruments (CFI code)"         *
***************************************************************
*/
  CFICode = 461,
/*
****************************************
* Underlying security's Product.       *
* Valid values: see Product(460) field *
****************************************
*/
  UnderlyingProduct = 462,
/*
*****************************************
* Underlying security's CFICode.        *
* Valid values: see CFICode (461) field *
*****************************************
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
* "Settlement Payment Reference" - A free format Payment *
* reference to assist with reconciliation, e.g. a Client *
* and/or Order ID number.                                *
**********************************************************
*/
  PaymentRef = 476,
/*
****************************************************************
* A code identifying the payment method for a (fractional)     *
* distribution.                                                *
* 13 through 998 are reserved for future use                   *
* Values above 1000 are available for use by private agreement *
* among counterparties                                         *
****************************************************************
*/
  DistribPaymentMethod = 477,
/*
************************************************************
* Specifies currency to be used for Cash Distributions see *
* "Appendix 6-A Valid Currency Codes".                     *
************************************************************
*/
  CashDistribCurr = 478,
/*
*************************************************************
* Specifies currency to be use for Commission (12) if the   *
* Commission currency is different from the Deal Currency - *
* see "Appendix 6-A; Valid Currency Codes".                 *
*************************************************************
*/
  CommCurrency = 479,
/*
******************************************************
* For CIV - A one character code identifying whether *
* Cancellation rights/Cooling off period applies.    *
******************************************************
*/
  CancellationRights = 480,
/*
*************************************************************
* A one character code identifying Money laundering status. *
*************************************************************
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
***************************************************************
* For CIV A date and time stamp to indicate the time a CIV    *
* order was booked by the fund manager.                       *
* For derivatives a date and time stamp to indicate when this *
* order was booked with the agent prior to submission to the  *
* VMU. Indicates the time at which the order was finalized    *
* between the buyer and seller prior to submission.           *
***************************************************************
*/
  TransBkdTime = 483,
/*
****************************************************************
* For CIV - Identifies how the execution price LastPx (31) was *
* calculated from the fund unit/share price(s) calculated at   *
* the fund valuation point.                                    *
****************************************************************
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
****************************************************************
* A code identifying the Settlement payment method. 16 through *
* 998 are reserved for future use                              *
* Values above 1000 are available for use by private agreement *
* among counterparties                                         *
****************************************************************
*/
  PaymentMethod = 492,
/*
**************************************************************
* For CIV - a fund manager-defined code identifying which of *
* the fund manager's account types is required.              *
**************************************************************
*/
  RegistAcctType = 493,
/*
****************************************************************
* Free format text defining the designation to be associated   *
* with a holding on the register. Used to identify assets of a *
* specific underlying investor using a common registration,    *
* e.g. a broker's nominee or street name.                      *
****************************************************************
*/
  Designation = 494,
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
* the fund manager:                                          *
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
* For a CIV Sale it specifies percentage of investor's total *
* holding to be sold. For a CIV switch/exchange it specifies *
* percentage of investor's cash realised from sales to be    *
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
* percentage as indicated by ContAmtType (519).        *
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
*********************************
* Identifies the type of owner. *
*********************************
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
***************************************************************
* Assigned by the party which accepts the order. Can be used  *
* to provide the ExecID (17) used by an exchange or executing *
* system.                                                     *
***************************************************************
*/
  SecondaryExecID = 527,
/*
***************************************************************
* Designates the capacity of the firm placing the order.      *
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
*************************************************
* Specifies scope of Order Mass Cancel Request. *
*************************************************
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
*************************************************
* Total number of orders affected by either the *
* OrderMassActionRequest(MsgType=CA) or         *
* OrderMassCancelRequest(MsgType=Q).            *
*************************************************
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
****************************************************************
* SecondaryOrderID (198) of an order affected by a mass cancel *
* request.                                                     *
****************************************************************
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
* 7 - Product: Fixed Income for example usage.                 *
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
**************************************************************
* Total Amount of Accrued Interest for convertible bonds and *
* fixed income                                               *
**************************************************************
*/
  TotalAccruedInterestAmt = 540,
/*
*********************
* Date of maturity. *
*********************
*/
  MaturityDate = 541,
/*
************************************************
* Underlying security's maturity date.         *
* See MaturityDate (541) field for description *
************************************************
*/
  UnderlyingMaturityDate = 542,
/*
****************************************************************
* Values may include BIC for the depository or custodian who   *
* maintain ownership records, the ISO country code for the     *
* location of the record, or the value "ZZ" to specify         *
* physical ownership of the security (e.g. stock certificate). *
****************************************************************
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
**************************************************
* Specifies the market scope of the market data. *
**************************************************
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
* order is applied to the market first. In other markets -   *
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
****************************************************************
* Used to support fragmentation. Indicates total number of     *
* security types when multiple Security Type messages are used *
* to return results.                                           *
****************************************************************
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
* issuer of the order.                                     *
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
* rejected.                                                 *
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
*********************************
* Type of Trade Capture Report. *
*********************************
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
* comparison.                                          *
********************************************************
*/
  MatchStatus = 573,
/*
*************************************************************
* The point in the matching process at which this trade was *
* matched.                                                  *
*************************************************************
*/
  MatchType = 574,
/*
***********************************************************
* This trade is to be treated as an odd lot               *
* If this field is not specified, the default will be "N" *
***********************************************************
*/
  OddLot = 575,
/*
***********************************
* Number of clearing instructions *
***********************************
*/
  NoClearingInstructions = 576,
/*
****************************************************************
* Eligibility of this trade for clearing and central           *
* counterparty processing                                      *
* values above 4000 are reserved for agreement between parties *
****************************************************************
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
* 60) reported on an Execution Report for the order. The       *
* OrigOrdModTime is provided as an optional field on Order     *
* Cancel Request and Order Cancel Replace Requests to identify *
* that the state of the order has not changed since the        *
* request was issued. The use of this approach is not          *
* recommended.                                                 *
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
* Underlying security's CountryOfIssue.          *
* See CountryOfIssue (470) field for description *
**************************************************
*/
  UnderlyingCountryOfIssue = 592,
/*
**********************************************************
* Underlying security's StateOrProvinceOfIssue.          *
* See StateOrProvinceOfIssue (471) field for description *
**********************************************************
*/
  UnderlyingStateOrProvinceOfIssue = 593,
/*
*************************************************
* Underlying security's LocaleOfIssue.          *
* See LocaleOfIssue (472) field for description *
*************************************************
*/
  UnderlyingLocaleOfIssue = 594,
/*
*************************************************
* Underlying security's InstrRegistry.          *
* See InstrRegistry (543) field for description *
*************************************************
*/
  UnderlyingInstrRegistry = 595,
/*
***************************************************
* Multileg instrument's individual leg security's *
* CountryOfIssue.                                 *
* See CountryOfIssue (470) field for description  *
***************************************************
*/
  LegCountryOfIssue = 596,
/*
**********************************************************
* Multileg instrument's individual leg security's        *
* StateOrProvinceOfIssue.                                *
* See StateOrProvinceOfIssue (471) field for description *
**********************************************************
*/
  LegStateOrProvinceOfIssue = 597,
/*
***************************************************
* Multileg instrument's individual leg security's *
* LocaleOfIssue.                                  *
* See LocaleOfIssue (472) field for description   *
***************************************************
*/
  LegLocaleOfIssue = 598,
/*
***************************************************
* Multileg instrument's individual leg security's *
* InstrRegistry.                                  *
* See InstrRegistry (543) field for description   *
***************************************************
*/
  LegInstrRegistry = 599,
/*
*******************************************************
* Multileg instrument's individual security's Symbol. *
* See Symbol (55) field for description               *
*******************************************************
*/
  LegSymbol = 600,
/*
**********************************************************
* Multileg instrument's individual security's SymbolSfx. *
* See SymbolSfx (65) field for description               *
**********************************************************
*/
  LegSymbolSfx = 601,
/*
***********************************************************
* Multileg instrument's individual security's SecurityID. *
* See SecurityID (48) field for description               *
***********************************************************
*/
  LegSecurityID = 602,
/*
***************************************************
* Multileg instrument's individual security's     *
* SecurityIDSource.                               *
* See SecurityIDSource (22) field for description *
***************************************************
*/
  LegSecurityIDSource = 603,
/*
****************************************************************
* Multileg instrument's individual security's NoSecurityAltID. *
* See NoSecurityAltID (454) field for description              *
****************************************************************
*/
  NoLegSecurityAltID = 604,
/*
**************************************************************
* Multileg instrument's individual security's SecurityAltID. *
* See SecurityAltID (455) field for description              *
**************************************************************
*/
  LegSecurityAltID = 605,
/*
*******************************************************
* Multileg instrument's individual security's         *
* SecurityAltIDSource.                                *
* See SecurityAltIDSource (456) field for description *
*******************************************************
*/
  LegSecurityAltIDSource = 606,
/*
********************************************************
* Multileg instrument's individual security's Product. *
* See Product (460) field for description              *
********************************************************
*/
  LegProduct = 607,
/*
********************************************************
* Multileg instrument's individual security's CFICode. *
* See CFICode (461) field for description              *
********************************************************
*/
  LegCFICode = 608,
/*
********************************************
* Refer to definition of SecurityType(167) *
********************************************
*/
  LegSecurityType = 609,
/*
*****************************************************
* Multileg instrument's individual security's       *
* MaturityMonthYear.                                *
* See MaturityMonthYear (200) field for description *
*****************************************************
*/
  LegMaturityMonthYear = 610,
/*
*************************************************************
* Multileg instrument's individual security's MaturityDate. *
* See MaturityDate (54) field for description               *
*************************************************************
*/
  LegMaturityDate = 611,
/*
************************************************************
* Multileg instrument's individual security's StrikePrice. *
* See StrikePrice (202) field for description              *
************************************************************
*/
  LegStrikePrice = 612,
/*
*************************************************************
* Multileg instrument's individual security's OptAttribute. *
* See OptAttribute (206) field for description              *
*************************************************************
*/
  LegOptAttribute = 613,
/*
*****************************************************
* Multileg instrument's individual security's       *
* ContractMultiplier.                               *
* See ContractMultiplier (23) field for description *
*****************************************************
*/
  LegContractMultiplier = 614,
/*
***********************************************************
* Multileg instrument's individual security's CouponRate. *
* See CouponRate (223) field for description              *
***********************************************************
*/
  LegCouponRate = 615,
/*
****************************************************
* Multileg instrument's individual security's      *
* SecurityExchange.                                *
* See SecurityExchange (207) field for description *
****************************************************
*/
  LegSecurityExchange = 616,
/*
*******************************************************
* Multileg instrument's individual security's Issuer. *
* See Issuer (106) field for description              *
*******************************************************
*/
  LegIssuer = 617,
/*
****************************************************
* Multileg instrument's individual security's      *
* EncodedIssuerLen.                                *
* See EncodedIssuerLen (348) field for description *
****************************************************
*/
  EncodedLegIssuerLen = 618,
/*
**************************************************************
* Multileg instrument's individual security's EncodedIssuer. *
* See EncodedIssuer (349) field for description              *
**************************************************************
*/
  EncodedLegIssuer = 619,
/*
**************************************************
* Description of a leg of a multileg instrument. *
* See SecurityDesc(107).                         *
**************************************************
*/
  LegSecurityDesc = 620,
/*
**********************************************************
* Multileg instrument's individual security's            *
* EncodedSecurityDescLen.                                *
* See EncodedSecurityDescLen (350) field for description *
**********************************************************
*/
  EncodedLegSecurityDescLen = 621,
/*
******************************************************
* Multileg instrument's individual security's        *
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
  TradingSessionSubID = 625,
/*
***************************************************************
* Describes the specific type or purpose of an Allocation     *
* message (i.e. "Buyside Calculated")                         *
* (see Volume : "Glossary" for value definitions)             *
* *** SOME VALUES HAVE BEEN REPLACED - See "Replaced Features *
* and Supported Approach" ***                                 *
***************************************************************
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
* Only applicable if OnBehalfOfCompID (115) is being used.     *
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
* Only applicable if OnBehalfOfCompID (115) is being used.     *
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
* Only applicable if OnBehalfOfCompID (115) is being used.     *
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
* book priority.                                            *
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
* RFQ Request ID - used to identify an RFQ Request. *
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
*************************************************
* Identifies the Confirmation transaction type. *
*************************************************
*/
  ConfirmTransType = 666,
/*
***********************************************************
* Specifies when the contract (i.e. MBS/TBA) will settle. *
***********************************************************
*/
  ContractSettlMonth = 667,
/*
************************************
* Identifies the form of delivery. *
************************************
*/
  DeliveryForm = 668,
/*
***********************************************************
* Last price expressed in percent-of-par. Conditionally   *
* required for Fixed Income trades when LastPx (31) is    *
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
*********************************************************
* The source of the LegAllocAccount (671)               *
* See AllocAcctIDSource (661) for description and valid *
* values.                                               *
*********************************************************
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
******************************************************
* Offer price of this leg.                           *
* See OfferPx (133) for description and valid values *
******************************************************
*/
  LegOfferPx = 684,
/*
******************************************************
* Quantity ordered of this leg.                      *
* See OrderQty (38) for description and valid values *
******************************************************
*/
  LegOrderQty = 685,
/*
**********************************************************
* The price type of the LegBidPx (681) and/or LegOfferPx *
* (684).                                                 *
* See PriceType (423) for description and valid values   *
**********************************************************
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
**************************************************************
* Code to represent price type requested in Quote.           *
* If the Quote Request is for a Swap values 1-8 apply to all *
* legs.                                                      *
**************************************************************
*/
  QuotePriceType = 692,
/*
****************************************
* Message reference for Quote Response *
****************************************
*/
  QuoteRespID = 693,
/*
******************************************
* Identifies the type of Quote Response. *
******************************************
*/
  QuoteRespType = 694,
/*
************************************************************
* Code to qualify Quote use                                *
* See IOIQualifier (104) for description and valid values. *
************************************************************
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
*******************************************************
* Used to identify the type of quantity that is being *
* returned.                                           *
*******************************************************
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
****************************
* Status of this position. *
****************************
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
***************************************
* Maintenance Action to be performed. *
***************************************
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
* SubID value associated with SettlSessID(716) *
************************************************
*/
  SettlSessSubID = 717,
/*
**********************************************************
* Type of adjustment to be applied, used for PCS and PAJ *
**********************************************************
*/
  AdjustmentType = 718,
/*
****************************************************************
* Used to indicate when a contrary instruction for exercise or *
* abandonment is being submitted                               *
****************************************************************
*/
  ContraryInstructionIndicator = 719,
/*
************************************************************
* Indicates if requesting a rollover of prior day's spread *
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
*************************************************************
* Result of Position Maintenance Request.                   *
* 4000+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                       *
*************************************************************
*/
  PosMaintResult = 723,
/*
************************************************************
* Used to specify the type of position request being made. *
************************************************************
*/
  PosReqType = 724,
/*
********************************************************
* Identifies how the response to the request should be *
* transmitted.                                         *
* Details specified via ResponseDestination (726).     *
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
* Underlying security's SettlPrice.          *
* See SettlPrice (730) field for description *
**********************************************
*/
  UnderlyingSettlPrice = 732,
/*
**************************************************
* Underlying security's SettlPriceType.          *
* See SettlPriceType (731) field for description *
**************************************************
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
* See Pool (691) for description and valid values.           *
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
***************************************************************
* Method by which short positions are assigned to an exercise *
* notice during exercise and assignment processing            *
***************************************************************
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
*****************************************************
* Exercise Method used to in performing assignment. *
*****************************************************
*/
  ExerciseMethod = 747,
/*
*******************************************
* Total number of trade reports returned. *
*******************************************
*/
  TotNumTradeReports = 748,
/*
***************************
* Result of Trade Request *
***************************
*/
  TradeRequestResult = 749,
/*
****************************
* Status of Trade Request. *
****************************
*/
  TradeRequestStatus = 750,
/*
************************************************************
* Reason Trade Capture Request was rejected.               *
* 100+ Reserved and available for bi-laterally agreed upon *
* user-defined values                                      *
************************************************************
*/
  TradeReportRejectReason = 751,
/*
****************************************************************
* Used to indicate if the side being reported on Trade Capture *
* Report represents a leg of a multileg instrument or a single *
* security.                                                    *
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
* Sub-type qualification/identification of the SecurityType.  *
* As an example for SecurityType(167)="REPO", the             *
* SecuritySubType="General Collateral" can be used to further *
* specify the type of REPO.                                   *
* If SecuritySubType is used then SecurityType is required.   *
* For SecurityType="MLEG" a name of the option or futures     *
* strategy name can be specified, such as "Calendar",         *
* "Vertical", "Butterfly".                                    *
***************************************************************
*/
  SecuritySubType = 762,
/*
***************************************************
* Underlying security's SecuritySubType.          *
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
* Traded / Regulatory timestamp type.                      *
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
***********************************************************
* Identifies the type of Confirmation message being sent. *
***********************************************************
*/
  ConfirmType = 773,
/*
*******************************************************
* Identifies the reason for rejecting a Confirmation. *
*******************************************************
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
* how they are to be derived.                                *
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
* securities or cash settlement.                              *
***************************************************************
*/
  DlvyInstType = 787,
/*
**********************************
* Type of financing termination. *
**********************************
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
* request message).                                            *
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
***************************************************************
* Number of Usernames to which this this response is directed *
***************************************************************
*/
  NoUsernames = 809,
/*
************************************************************
* Underlying price associate with a derivative instrument. *
************************************************************
*/
  UnderlyingPx = 810,
/*
****************************************************************
* The rate of change in the price of a derivative with respect *
* to the movement in the price of the underlying instrument(s) *
* upon which the derivative instrument price is based.         *
* This value is normally between -1.0 and 1.0.                 *
****************************************************************
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
******************
* Type of Trade: *
******************
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
* Field to allow further specification of the TargetStrategy - *
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
**************************
* Reason for short sale. *
**************************
*/
  ShortSaleReason = 853,
/*
***************************************************
* Type of quantity specified in a quantity field: *
***************************************************
*/
  QtyType = 854,
/*
**************************************************************
* Additional TrdType(828) assigned to a trade by trade match *
* system.                                                    *
**************************************************************
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
**************************************************************
* Total number of reports returned in response to a request. *
**************************************************************
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
* changes to certain id's then UserRequestType =0 (8+2), *
* Snapshot for certain ID's = 9 (8+1)                    *
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
***************************************************
* Indicates the type of Network Response Message. *
***************************************************
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
*************************************************
* Identifies the status of the ConfirmationAck. *
*************************************************
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
**********************************************************
* Action proposed for an Underlying Instrument instance. *
**********************************************************
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
  LegInterestAccrualDate = 956,
/*
*******************************************
* Indicates number of strategy parameters *
*******************************************
*/
  NoStrategyParameters = 957,
/*
*********************
* Name of parameter *
*********************
*/
  StrategyParameterName = 958,
/*
*****************************
* Datatype of the parameter *
*****************************
*/
  StrategyParameterType = 959,
/*
**************************
* Value of the parameter *
**************************
*/
  StrategyParameterValue = 960,
/*
****************************************************************
* Host assigned entity ID that can be used to reference all    *
* components of a cross; sides + strategy + legs. Used as the  *
* primary key with which to refer to the Cross Order for       *
* cancellation and replace. The HostCrossID will also be used  *
* to link together components of the Cross Order. For example, *
* each individual Execution Report associated with the order   *
* will carry HostCrossID in order to tie back to the original  *
* cross order.                                                 *
****************************************************************
*/
  HostCrossID = 961,
/*
****************************************************************
* Indicates how long the order as specified in the side stays  *
* in effect. SideTimeInForce allows a two-sided cross order to *
* specify order behavior separately for each side. Absence of  *
* this field indicates that TimeInForce should be referenced.  *
* SideTimeInForce will override TimeInForce if both are        *
* provided.                                                    *
****************************************************************
*/
  SideTimeInForce = 962,
/*
*************************************************
* Unique identifier for the Market Data Report. *
*************************************************
*/
  MDReportID = 963,
/*
***************************************
* Identifies a Security List message. *
***************************************
*/
  SecurityReportID = 964,
/*
**********************************************************
* Used for derivatives. Denotes the current state of the *
* Instrument.                                            *
**********************************************************
*/
  SecurityStatus = 965,
/*
**********************************************************
* Indicator to determine if instrument is settle on open *
**********************************************************
*/
  SettleOnOpenFlag = 966,
/*
****************************************************************
* Used for derivatives. Multiplier applied to the strike price *
* for the purpose of calculating the settlement value.         *
****************************************************************
*/
  StrikeMultiplier = 967,
/*
************************************************************
* Used for derivatives. The number of shares/units for the *
* financial instrument involved in the option trade.       *
************************************************************
*/
  StrikeValue = 968,
/*
******************************************************
* Minimum price increase for a given exchange-traded *
* Instrument                                         *
******************************************************
*/
  MinPriceIncrement = 969,
/*
*******************************************************
* Position Limit for a given exchange-traded product. *
*******************************************************
*/
  PositionLimit = 970,
/*
********************************************************
* Position Limit in the near-term contract for a given *
* exchange-traded product.                             *
********************************************************
*/
  NTPositionLimit = 971,
/*
****************************************************************
* Percent of the Strike Price that this underlying represents. *
****************************************************************
*/
  UnderlyingAllocationPercent = 972,
/*
*********************************************************
* Cash amount associated with the underlying component. *
*********************************************************
*/
  UnderlyingCashAmount = 973,
/*
***********************************************************
* Used for derivatives that deliver into cash underlying. *
***********************************************************
*/
  UnderlyingCashType = 974,
/*
********************************************************
* Indicates order settlement period for the underlying *
* instrument.                                          *
********************************************************
*/
  UnderlyingSettlementType = 975,
/*
**************************************************************
* Date associated to the quantity that is being reported for *
* the position.                                              *
**************************************************************
*/
  QuantityDate = 976,
/*
*******************************************************
* Unique identifier for the Contrary Intention report *
*******************************************************
*/
  ContIntRptID = 977,
/*
**************************************************************
* Indicates if the contrary intention was received after the *
* exchange imposed cutoff time                               *
**************************************************************
*/
  LateIndicator = 978,
/*
************************************
* Source of the contrary intention *
************************************
*/
  InputSource = 979,
  SecurityUpdateAction = 980,
/*
************************************
* Number of Expiration Qty entries *
************************************
*/
  NoExpiration = 981,
/*
****************************
* Expiration Quantity type *
****************************
*/
  ExpirationQtyType = 982,
/*
***********************************************************
* Expiration Quantity associated with the Expiration Type *
***********************************************************
*/
  ExpQty = 983,
/*
************************************************************
* Total number of occurrences of Amount to pay in order to *
* receive the underlying instrument                        *
************************************************************
*/
  NoUnderlyingAmounts = 984,
/*
***************************************************************
* Amount to pay in order to receive the underlying instrument *
***************************************************************
*/
  UnderlyingPayAmount = 985,
/*
********************************************************
* Amount to collect in order to deliver the underlying *
* instrument                                           *
********************************************************
*/
  UnderlyingCollectAmount = 986,
/*
***********************************************************
* Date the underlying instrument will settle. Used for    *
* derivatives that deliver into more than one underlying  *
* instrument. Settlement dates can vary across underlying *
* instruments.                                            *
***********************************************************
*/
  UnderlyingSettlementDate = 987,
/*
************************************************************
* Settlement status of the underlying instrument. Used for *
* derivatives that deliver into more than one underlying   *
* instrument. Settlement can be delayed for an underlying  *
* instrument.                                              *
************************************************************
*/
  UnderlyingSettlementStatus = 988,
/*
***********************************************************
* Will allow the intermediary to specify an allocation ID *
* generated by their system.                              *
***********************************************************
*/
  SecondaryIndividualAllocID = 989,
/*
**********************************************************
* Additional attribute to store the Trade ID of the Leg. *
**********************************************************
*/
  LegReportID = 990,
/*
********************************************************
* Specifies average price rounded to quoted precision. *
********************************************************
*/
  RndPx = 991,
/*
***************************************************************
* Identifies whether the allocation is to be sub-allocated or *
* allocated to a third party                                  *
***************************************************************
*/
  IndividualAllocType = 992,
/*
*************************************************
* Capacity of customer in the allocation block. *
*************************************************
*/
  AllocCustomerCapacity = 993,
/*
**********************************************************
* The Tier the trade was matched by the clearing system. *
**********************************************************
*/
  TierCode = 994,
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
  UnitOfMeasure = 996,
/*
**************************************************************
* Unit of time associated with the contract.                 *
* NOTE: Additional values may be used by mutual agreement of *
* the counterparties                                         *
**************************************************************
*/
  TimeUnit = 997,
/*
********************************************
* Refer to defintion of UnitOfMeasure(996) *
********************************************
*/
  UnderlyingUnitOfMeasure = 998,
/*
********************************************
* Refer to defintion of UnitOfMeasure(996) *
********************************************
*/
  LegUnitOfMeasure = 999,
/*
*********************
* Same as TimeUnit. *
*********************
*/
  UnderlyingTimeUnit = 1000,
/*
*********************
* Same as TimeUnit. *
*********************
*/
  LegTimeUnit = 1001,
/*
*********************************************************
* Specifies the method under which a trade quantity was *
* allocated.                                            *
*********************************************************
*/
  AllocMethod = 1002,
/*
****************************************************************
* The unique ID assigned to the trade entity once it is        *
* received or matched by the exchange or central counterparty. *
****************************************************************
*/
  TradeID = 1003,
/*
*********************************************************
* Used on a multi-sided trade to designate the ReportID *
*********************************************************
*/
  SideTradeReportID = 1005,
/*
*******************************************************
* Used on a multi-sided trade to convey order routing *
* information                                         *
*******************************************************
*/
  SideFillStationCd = 1006,
/*
**************************************************************
* Used on a multi-sided trade to convey reason for execution *
**************************************************************
*/
  SideReasonCd = 1007,
/*
****************************************************************
* Used on a multi-sided trade to specify the type of trade for *
* a given side. Same values as TrdSubType (829).               *
****************************************************************
*/
  SideTrdSubTyp = 1008,
/*
***************************************************************
* Used to indicate the quantity on one of a multi-sided Trade *
* Capture Report                                              *
***************************************************************
*/
  SideLastQty = 1009,
/*
***************************************************************
* Used to identify the event or source which gave rise to a   *
* message.                                                    *
* Valid values will be based on an exchange's implementation. *
* Example values are:                                         *
* "MQM" (originated at Firm Back Office)                      *
* "Clear" (originated in Clearing System)                     *
* "Reg" (static data generated via Register request)          *
***************************************************************
*/
  MessageEventSource = 1011,
/*
************************************************************
* Will be used in a multi-sided message.                   *
* Traded Regulatory timestamp value Use to store time      *
* information required by government regulators or self    *
* regulatory organizations such as an exchange or clearing *
* house                                                    *
************************************************************
*/
  SideTrdRegTimestamp = 1012,
/*
*******************************
* Same as TrdRegTimeStampType *
*******************************
*/
  SideTrdRegTimestampType = 1013,
/*
***************************************************************
* Same as TrdRegTimestampOrigin                               *
* Text which identifies the origin i.e. system which was used *
* to generate the time stamp for the Traded Regulatory        *
* timestamp value                                             *
***************************************************************
*/
  SideTrdRegTimestampSrc = 1014,
/*
****************************************************************
* Used to indicate that a floor-trade was originally submitted *
* "as of" a specific trade date which is earlier than its      *
* clearing date.                                               *
****************************************************************
*/
  AsOfIndicator = 1015,
/*
*********************************************************
* Indicates number of SideTimestamps contained in group *
*********************************************************
*/
  NoSideTrdRegTS = 1016,
/*
************************************************************
* Expresses the risk of an option leg                      *
* Value must be between -1 and 1.                          *
* A Call Option will require a ratio value between 0 and 1 *
* A Put Option will require a ratio value between -1 and 0 *
************************************************************
*/
  LegOptionRatio = 1017,
/*
*******************************************************
* Identifies the number of parties identified with an *
* instrument                                          *
*******************************************************
*/
  NoInstrumentParties = 1018,
/*
*************************************************************
* PartyID value within an instrument party repeating group. *
* Same values as PartyID (448)                              *
*************************************************************
*/
  InstrumentPartyID = 1019,
/*
**************************************
* Used to report volume with a trade *
**************************************
*/
  TradeVolume = 1020,
/*
**************************************************************
* Describes the type of book for which the feed is intended. *
* Used when multiple feeds are provided over the same        *
* connection                                                 *
**************************************************************
*/
  MDBookType = 1021,
/*
**************************************************************
* Describes a class of service for a given data feed, ie     *
* Regular and Market Maker, Bandwidth Intensive or Bandwidth *
* Conservative                                               *
**************************************************************
*/
  MDFeedType = 1022,
/*
***************************************************************
* Integer to convey the level of a bid or offer at a given    *
* price level. This is in contrast to MDEntryPositionNo which *
* is used to convey the position of an order within a Price   *
* level                                                       *
***************************************************************
*/
  MDPriceLevel = 1023,
/*
*******************************************************
* Used to describe the origin of an entry in the book *
*******************************************************
*/
  MDOriginType = 1024,
/*
******************************************************
* Indicates the first trade price of the day/session *
******************************************************
*/
  FirstPx = 1025,
/*
*********************************
* The spot rate for an FX entry *
*********************************
*/
  MDEntrySpotRate = 1026,
/*
***************************************************************
* Used for an F/X entry. The forward points to be added to or *
* subtracted from the spot rate to get the "all-in" rate in   *
* MDEntryPx. Expressed in decimal form. For example, 61.99    *
* points is expressed and sent as 0.006199                    *
***************************************************************
*/
  MDEntryForwardPoints = 1027,
/*
**************************************************************
* Indicates if the order was initially received manually (as *
* opposed to electronically)                                 *
**************************************************************
*/
  ManualOrderIndicator = 1028,
/*
***************************************************************
* Indicates if the customer directed this order to a specific *
* execution venue "Y" or not "N".                             *
* A default of "N" customer did not direct this order should  *
* be used in the case where the information is both missing   *
* and essential.                                              *
***************************************************************
*/
  CustDirectedOrder = 1029,
/*
*************************************************************
* Identifies the Broker / Dealer Department that first took *
* the order.                                                *
*************************************************************
*/
  ReceivedDeptID = 1030,
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
  CustOrderHandlingInst = 1031,
/*
*************************************************************
* Identifies the class or source of the "OrderHandlingInst" *
* values. Scope of this will apply to both                  *
* CustOrderHandlingInst and DeskOrderHandlingInst fields.   *
* Required if CustOrderHandlingInst and/or                  *
* DeskOrderHandlingInst is specified.                       *
*************************************************************
*/
  OrderHandlingInstSource = 1032,
/*
******************************************************
* Type of trading desk.  Valid values are grouped by *
* DeskTypeSource(1034).                              *
******************************************************
*/
  DeskType = 1033,
/*
************************************************************
* Identifies the class or source of DeskType(1033) values. *
* Required if DeskType(1033) is specified.                 *
************************************************************
*/
  DeskTypeSource = 1034,
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
  DeskOrderHandlingInst = 1035,
/*
*********************************************************
* The status of this execution acknowledgement message. *
*********************************************************
*/
  ExecAckStatus = 1036,
/*
************************************************************
* Indicates the underlying position amount to be delivered *
************************************************************
*/
  UnderlyingDeliveryAmount = 1037,
/*
************************************************************
* Maximum notional value for a capped financial instrument *
************************************************************
*/
  UnderlyingCapValue = 1038,
  UnderlyingSettlMethod = 1039,
/*
**************************************************************
* Used to carry an internal trade entity ID which may or may *
* not be reported to the firm                                *
**************************************************************
*/
  SecondaryTradeID = 1040,
/*
***********************************************************
* The ID assigned to a trade by the Firm to track a trade *
* within the Firm system. This ID can be assigned either  *
* before or after submission to the exchange or central   *
* counterpary                                             *
***********************************************************
*/
  FirmTradeID = 1041,
/*
***************************************************************
* Used to carry an internal firm assigned ID which may or may *
* not be reported to the exchange or central counterpary      *
***************************************************************
*/
  SecondaryFirmTradeID = 1042,
/*
*********************************************************
* conveys how the collateral should be/has been applied *
*********************************************************
*/
  CollApplType = 1043,
/*
****************************************************************
* Unit amount of the underlying security (shares) adjusted for *
* pending corporate action not yet allocated.                  *
****************************************************************
*/
  UnderlyingAdjustedQuantity = 1044,
/*
******************************************************
* Foreign exchange rate used to compute              *
* UnderlyingCurrentValue(885) (or market value) from *
* UnderlyingCurrency(318) to Currency(15).           *
******************************************************
*/
  UnderlyingFXRate = 1045,
/*
**********************************************************
* Specifies whether the UnderlyingFxRate(1045) should be *
* multiplied or divided.                                 *
**********************************************************
*/
  UnderlyingFXRateCalc = 1046,
/*
***************************************************************
* Indicates whether the resulting position after a trade      *
* should be an opening position or closing position. Used for *
* omnibus accounting - where accounts are held on a gross     *
* basis instead of being netted together.                     *
***************************************************************
*/
  AllocPositionEffect = 1047,
/*
************************************************
* Identifies role of dealer; Agent, Principal, *
* RisklessPrincipal                            *
************************************************
*/
  DealingCapacity = 1048,
/*
***********************************************
* Method under which assignment was conducted *
***********************************************
*/
  InstrmtAssignmentMethod = 1049,
/*
***********************************************************
* PartyIDSource value within an instrument partyrepeating *
* group.                                                  *
* Same values as PartyIDSource (447)                      *
***********************************************************
*/
  InstrumentPartyIDSource = 1050,
/*
*************************************************************
* PartyRole value within an instrument partyepeating group. *
* Same values as PartyRole (452)                            *
*************************************************************
*/
  InstrumentPartyRole = 1051,
/*
*********************************************
* Number of InstrumentPartySubID (1053) and *
* InstrumentPartySubIDType (1054) entries   *
*********************************************
*/
  NoInstrumentPartySubIDs = 1052,
/*
****************************************************************
* PartySubID value within an instrument party repeating group. *
* Same values as PartySubID (523)                              *
****************************************************************
*/
  InstrumentPartySubID = 1053,
/*
**********************************************
* Type of InstrumentPartySubID (1053) value. *
* Same values as PartySubIDType (803)        *
**********************************************
*/
  InstrumentPartySubIDType = 1054,
/*
************************************************************
* The Currency in which the position Amount is denominated *
************************************************************
*/
  PositionCurrency = 1055,
/*
*************************************************************
* Used for the calculated quantity of the other side of the *
* currency trade. Can be derived from LastQty and LastPx.   *
*************************************************************
*/
  CalculatedCcyLastQty = 1056,
/*
****************************************************************
* Used to identify whether the order initiator is an aggressor *
* or not in the trade.                                         *
****************************************************************
*/
  AggressorIndicator = 1057,
/*
*******************************************************
* Identifies the number of parties identified with an *
* underlying instrument                               *
*******************************************************
*/
  NoUndlyInstrumentParties = 1058,
/*
*******************************************************
* PartyID value within an underlying instrument party *
* repeating group.                                    *
* Same values as PartyID (448)                        *
*******************************************************
*/
  UnderlyingInstrumentPartyID = 1059,
/*
*******************************************************
* PartyIDSource value within an underlying instrument *
* partyrepeating group.                               *
* Same values as PartyIDSource (447)                  *
*******************************************************
*/
  UnderlyingInstrumentPartyIDSource = 1060,
/*
***************************************************
* PartyRole value within an underlying instrument *
* partyepeating group.                            *
* Same values as PartyRole (452)                  *
***************************************************
*/
  UnderlyingInstrumentPartyRole = 1061,
/*
********************************************************
* Number of Underlying InstrumentPartySubID (1053) and *
* InstrumentPartySubIDType (1054) entries              *
********************************************************
*/
  NoUndlyInstrumentPartySubIDs = 1062,
/*
**********************************************************
* PartySubID value within an underlying instrument party *
* repeating group.                                       *
* Same values as PartySubID (523)                        *
**********************************************************
*/
  UnderlyingInstrumentPartySubID = 1063,
/*
*********************************************************
* Type of underlying InstrumentPartySubID (1053) value. *
* Same values as PartySubIDType (803)                   *
*********************************************************
*/
  UnderlyingInstrumentPartySubIDType = 1064,
/*
*************************************************************
* The bid FX Swap points for an FX Swap. It is the "far bid *
* forward points - near offer forward point". Value can be  *
* negative. Expressed in decimal form. For example, 61.99   *
* points is expressed and sent as 0.006199                  *
*************************************************************
*/
  BidSwapPoints = 1065,
/*
**************************************************************
* The offer FX Swap points for an FX Swap. It is the "far    *
* offer forward points - near bid forward points". Value can *
* be negative. Expressed in decimal form. For example, 61.99 *
* points is expressed and sent as 0.006199                   *
**************************************************************
*/
  OfferSwapPoints = 1066,
/*
**************************************************************
* The bid FX forward points for the leg of an FX Swap. Value *
* can be negative. Expressed in decimal form. For example,   *
* 61.99 points is expressed and sent as 0.006199             *
**************************************************************
*/
  LegBidForwardPoints = 1067,
/*
****************************************************************
* The offer FX forward points for the leg of an FX Swap. Value *
* can be negative. Expressed in decimal form. For example,     *
* 61.99 points is expressed and sent as 0.006199               *
****************************************************************
*/
  LegOfferForwardPoints = 1068,
/*
****************************************************************
* For FX Swap, this is used to express the differential        *
* between the far leg's bid/offer and the near leg's           *
* bid/offer. Value can be negative. Expressed in decimal form. *
* For example, 61.99 points is expressed and sent as 0.006199  *
****************************************************************
*/
  SwapPoints = 1069,
/*
**************************************
* Identifies market data quote type. *
**************************************
*/
  MDQuoteType = 1070,
/*
****************************************************************
* For FX Swap, this is used to express the last market event   *
* for the differential between the far leg's bid/offer and the *
* near leg's bid/offer in a fill or partial fill. Value can be *
* negative. Expressed in decimal form. For example, 61.99      *
* points is expressed and sent as 0.006199                     *
****************************************************************
*/
  LastSwapPoints = 1071,
/*
***************************************************************
* The gross trade amount for this side of the trade. See also *
* GrossTradeAmt (381) for additional definition.              *
***************************************************************
*/
  SideGrossTradeAmt = 1072,
/*
**************************************************************
* The forward points for this leg's fill event. Value can be *
* negative. Expressed in decimal form. For example, 61.99    *
* points is expressed and sent as 0.006199                   *
**************************************************************
*/
  LegLastForwardPoints = 1073,
/*
*************************************************************
* Used for the calculated quantity of the other side of the *
* currency for this leg. Can be derived from LegQty and     *
* LegLastPx.                                                *
*************************************************************
*/
  LegCalculatedCcyLastQty = 1074,
/*
****************************************************************
* The gross trade amount of the leg. For FX Futures this is    *
* used to express the notional value of a fill when LegLastQty *
* and other quantity fields are express in terms of contract   *
* size.                                                        *
****************************************************************
*/
  LegGrossTradeAmt = 1075,
/*
************************************************************
* Time of security's maturity expressed in local time with *
* offset to UTC specified                                  *
************************************************************
*/
  MaturityTime = 1079,
/*
****************************************************
* The ID reference to the order being hit or taken *
****************************************************
*/
  RefOrderID = 1080,
/*
***************************************************************
* Used to specify what identifier, provided in order depth    *
* market data, to use when hitting (taking) a specific order. *
***************************************************************
*/
  RefOrderIDSource = 1081,
/*
**************************************************************
* Used for reserve orders when DisplayQty applies to the     *
* primary execution market (e.g.an ECN) and another quantity *
* is to be shown at other markets (e.g. the exchange). On    *
* orders specifies the qty to be displayed, on execution     *
* reports the currently displayed quantity.                  *
**************************************************************
*/
  SecondaryDisplayQty = 1082,
/*
************************************************
* Instructs when to refresh DisplayQty (1138). *
************************************************
*/
  DisplayWhen = 1083,
/*
**********************************************************
* Defines what value to use in DisplayQty (1138). If not *
* specified the default DisplayMethod is "1"             *
**********************************************************
*/
  DisplayMethod = 1084,
/*
***************************************************************
* Defines the lower quantity limit to a randomized refresh of *
* DisplayQty.                                                 *
***************************************************************
*/
  DisplayLowQty = 1085,
/*
***************************************************************
* Defines the upper quantity limit to a randomized refresh of *
* DisplayQty.                                                 *
***************************************************************
*/
  DisplayHighQty = 1086,
/*
***************************************************************
* Defines the minimum increment to be used when calculating a *
* random refresh of DisplayQty. A user specifies this when he *
* wants a larger increment than the standard provided by the  *
* market (e.g. the round lot size).                           *
***************************************************************
*/
  DisplayMinIncr = 1087,
/*
****************************************************
* Defines the quantity used to refresh DisplayQty. *
****************************************************
*/
  RefreshQty = 1088,
/*
****************************************************************
* Allows orders to specify a minimum quantity that applies to  *
* every execution (one execution could be for multiple         *
* counter-orders). The order may still fill against smaller    *
* orders, but the cumulative quantity of the execution must be *
* in multiples of the MatchIncrement.                          *
****************************************************************
*/
  MatchIncrement = 1089,
/*
****************************************************************
* Allows an order to specify a maximum number of price levels  *
* to trade through. Only valid for aggressive orders and       *
* during continuous (autoexecution) trading sessions. Property *
* lost when order is put on book. A partially filled order is  *
* assigned last trade price as limit price. Non-filled order   *
* behaves as ordinary Market or Limit.                         *
****************************************************************
*/
  MaxPriceLevels = 1090,
/*
***************************************************************
* Allows trader to explicitly request anonymity or disclosure *
* in pre-trade market data feeds. Anonymity is relevant in    *
* markets where counterparties are regularly disclosed in     *
* order depth feeds. Disclosure is relevant when              *
* counterparties are not normally visible.                    *
***************************************************************
*/
  PreTradeAnonymity = 1091,
/*
**************************************************************
* Defines the type of price protection the customer requires *
* on their order.                                            *
**************************************************************
*/
  PriceProtectionScope = 1092,
/*
***********************************************
* Defines the lot type assigned to the order. *
***********************************************
*/
  LotType = 1093,
/*
****************************
* Defines the type of peg. *
****************************
*/
  PegPriceType = 1094,
/*
*************************************************************
* The value of the reference price that the order is pegged *
* to. PeggedRefPrice + PegOffsetValue (211) = PeggedPrice   *
* (839) unless the limit price (44, Price) is breached. The *
* values may not be exact due to rounding.                  *
*************************************************************
*/
  PeggedRefPrice = 1095,
/*
*************************************************************
* Defines the identity of the security off whose prices the *
* order will peg. Same values as SecurityIDSource (22)      *
*************************************************************
*/
  PegSecurityIDSource = 1096,
/*
*************************************************************
* Defines the identity of the security off whose prices the *
* order will peg.                                           *
*************************************************************
*/
  PegSecurityID = 1097,
/*
****************************************************************
* Defines the common, 'human understood' representation of the *
* security off whose prices the order will Peg.                *
****************************************************************
*/
  PegSymbol = 1098,
/*
*************************************************************
* Security description of the security off whose prices the *
* order will Peg.                                           *
*************************************************************
*/
  PegSecurityDesc = 1099,
/*
****************************************************************
* Defines when the trigger will hit, i.e. the action specified *
* by the trigger instructions will come into effect.           *
****************************************************************
*/
  TriggerType = 1100,
/*
*************************************************************
* Defines the type of action to take when the trigger hits. *
*************************************************************
*/
  TriggerAction = 1101,
/*
**********************************************
* The price at which the trigger should hit. *
**********************************************
*/
  TriggerPrice = 1102,
/*
****************************************************************
* Defines the common, 'human understood' representation of the *
* security whose prices will be tracked by the trigger logic.  *
****************************************************************
*/
  TriggerSymbol = 1103,
/*
*************************************************************
* Defines the identity of the security whose prices will be *
* tracked by the trigger logic.                             *
*************************************************************
*/
  TriggerSecurityID = 1104,
/*
*************************************************************
* Defines the identity of the security whose prices will be *
* tracked by the trigger logic. Same values as              *
* SecurityIDSource (22).                                    *
*************************************************************
*/
  TriggerSecurityIDSource = 1105,
/*
**********************************************************
* Defines the security description of the security whose *
* prices will be tracked by the trigger logic.           *
**********************************************************
*/
  TriggerSecurityDesc = 1106,
/*
******************************************************
* The type of price that the trigger is compared to. *
******************************************************
*/
  TriggerPriceType = 1107,
/*
**************************************************************
* Defines the type of price protection the customer requires *
* on their order.                                            *
**************************************************************
*/
  TriggerPriceTypeScope = 1108,
/*
*****************************************************
* The side from which the trigger price is reached. *
*****************************************************
*/
  TriggerPriceDirection = 1109,
/*
**************************************************************
* The Price that the order should have after the trigger has *
* hit. Could be applicable for any trigger type, but must be *
* specified for Trigger Type 1.                              *
**************************************************************
*/
  TriggerNewPrice = 1110,
/*
****************************************************************
* The OrdType the order should have after the trigger has hit. *
* Required to express orders that change from Limit to Market. *
* Other values from OrdType (40) may be used if appropriate    *
* and bilaterally agreed upon.                                 *
****************************************************************
*/
  TriggerOrderType = 1111,
/*
************************************************************
* The Quantity the order should have after the trigger has *
* hit.                                                     *
************************************************************
*/
  TriggerNewQty = 1112,
/*
**********************************************************
* Defines the trading session at which the order will be *
* activated.                                             *
**********************************************************
*/
  TriggerTradingSessionID = 1113,
/*
**************************************************************
* Defines the subordinate trading session at which the order *
* will be activated.                                         *
**************************************************************
*/
  TriggerTradingSessionSubID = 1114,
/*
****************************************************************
* Defines the type of interest behind a trade (fill or partial *
* fill).                                                       *
****************************************************************
*/
  OrderCategory = 1115,
/*
***************************************************************
* Number of RootPartyID (1117), RootPartyIDSource (1118), and *
* RootPartyRole (1119) entries                                *
***************************************************************
*/
  NoRootPartyIDs = 1116,
/*
**************************************************************
* PartyID value within a root parties component. Same values *
* as PartyID (448)                                           *
**************************************************************
*/
  RootPartyID = 1117,
/*
*************************************************************
* PartyIDSource value within a root parties component. Same *
* values as PartyIDSource (447)                             *
*************************************************************
*/
  RootPartyIDSource = 1118,
/*
****************************************************************
* PartyRole value within a root parties component. Same values *
* as PartyRole (452)                                           *
****************************************************************
*/
  RootPartyRole = 1119,
/*
**********************************************************
* Number of RootPartySubID (1121) and RootPartySubIDType *
* (1122) entries                                         *
**********************************************************
*/
  NoRootPartySubIDs = 1120,
/*
**********************************************************
* PartySubID value within a root parties component. Same *
* values as PartySubID (523)                             *
**********************************************************
*/
  RootPartySubID = 1121,
/*
*******************************************************
* Type of RootPartySubID (1121) value. Same values as *
* PartySubIDType (803)                                *
*******************************************************
*/
  RootPartySubIDType = 1122,
/*
***************************************************************
* Specified how the Trade Capture Report should be handled by *
* the Respondent.                                             *
***************************************************************
*/
  TradeHandlingInstr = 1123,
/*
***************************************************************
* Optionally used with TradeHandlingInstr = 0 to relay the    *
* trade handling instruction used when reporting the trade to *
* the marketplace. Same values as TradeHandlingInstr (1123)   *
***************************************************************
*/
  OrigTradeHandlingInstr = 1124,
/*
****************************************************************
* Used to preserve original trade date when original trade is  *
* being referenced in a subsequent trade transaction such as a *
* transfer                                                     *
****************************************************************
*/
  OrigTradeDate = 1125,
/*
****************************************************************
* Used to preserve original trade id when original trade is    *
* being referenced in a subsequent trade transaction such as a *
* transfer                                                     *
****************************************************************
*/
  OrigTradeID = 1126,
/*
***************************************************************
* Used to preserve original secondary trade id when original  *
* trade is being referenced in a subsequent trade transaction *
* such as a transfer                                          *
***************************************************************
*/
  OrigSecondaryTradeID = 1127,
/*
***************************************************************
* Specifies the service pack release being applied at message *
* level. Enumerated field with values assigned at time of     *
* service pack release                                        *
***************************************************************
*/
  ApplVerID = 1128,
/*
**************************************************************
* Specifies a custom extension to a message being applied at *
* the message level. Enumerated field                        *
**************************************************************
*/
  CstmApplVerID = 1129,
/*
**************************************************************
* Specifies the service pack release being applied to a      *
* message at the session level. Enumerated field with values *
* assigned at time of service pack release. Uses same values *
* as ApplVerID                                               *
**************************************************************
*/
  RefApplVerID = 1130,
/*
**************************************************************
* Specifies a custom extension to a message being applied at *
* the session level.                                         *
**************************************************************
*/
  RefCstmApplVerID = 1131,
/*
***************************************************************
* Transact time in the local date-time stamp with a TZ offset *
* to UTC identified                                           *
***************************************************************
*/
  TZTransactTime = 1132,
/*
**********************************
* The ID source of ExDestination *
**********************************
*/
  ExDestinationIDSource = 1133,
/*
****************************************************************
* Indicates that the reported price that is different from the *
* market price. The price difference should be stated by using *
* field 828 TrdType and, if required, field 829 TrdSubType     *
****************************************************************
*/
  ReportedPxDiff = 1134,
/*
***************************************************************
* Indicates the system or medium on which the report has been *
* published                                                   *
***************************************************************
*/
  RptSys = 1135,
/*
***************************************************
* ClearingFeeIndicator(635) for Allocation, see   *
* ClearingFeeIndicator(635) for permitted values. *
***************************************************
*/
  AllocClearingFeeIndicator = 1136,
/*
**************************************************************
* Specifies the service pack release being applied, by       *
* default, to message at the session level. Enumerated field *
* with values assigned at time of service pack release. Uses *
* same values as ApplVerID                                   *
**************************************************************
*/
  DefaultApplVerID = 1137,
/*
***************************************************************
* The quantity to be displayed . Required for reserve orders. *
* On orders specifies the qty to be displayed, on execution   *
* reports the currently displayed quantity.                   *
***************************************************************
*/
  DisplayQty = 1138,
/*
************************************************
* Free format text string related to exchange. *
************************************************
*/
  ExchangeSpecialInstructions = 1139,
/*
**********************************************************
* The maximum order quantity that can be submitted for a *
* security.                                              *
**********************************************************
*/
  MaxTradeVol = 1140,
/*
**********************************************************
* The number of feed types and corresponding book depths *
* associated with a security                             *
**********************************************************
*/
  NoMDFeedTypes = 1141,
/*
*************************************************************
* The types of algorithm used to match orders in a specific *
* security. Possilbe value types are FIFO, Allocation,      *
* Pro-rata, Lead Market Maker, Currency Calender.           *
*************************************************************
*/
  MatchAlgorithm = 1142,
/*
**************************************************************
* The maximum price variation of an execution from one event *
* to the next for a given security.                          *
**************************************************************
*/
  MaxPriceVariation = 1143,
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
  ImpliedMarketIndicator = 1144,
/*
**********************************************************
* Specific time of event. To be used in combination with *
* EventDate [866]                                        *
**********************************************************
*/
  EventTime = 1145,
/*
***************************************************************
* Minimum price increment amount associated with the          *
* MinPriceIncrement ( tag 969). For listed derivatives, the   *
* value can be calculated by multiplying MinPriceIncrement by *
* ContractValueFactor(231).                                   *
***************************************************************
*/
  MinPriceIncrementAmount = 1146,
/*
*************************************************************
* Used to indicate the quantity of the underlying commodity *
* unit of measure on which the contract is based, such as,  *
* 2500 lbs of lean cattle, 1000 barrels of crude oil, 1000  *
* bushels of corn, etc. UnitOfMeasureQty is required for    *
* UnitOfMeasure(996) Variable Quantity UOMs enumerations.   *
* Refer to the definition of UnitOfMeasure(996) for more    *
* information on the use of UnitOfMeasureQty.               *
*************************************************************
*/
  UnitOfMeasureQty = 1147,
/*
***************************************************************
* Allowable low limit price for the trading day. A key        *
* parameter in validating order price. Used as the lower band *
* for validating order prices. Orders submitted with prices   *
* below the lower limit will be rejected                      *
***************************************************************
*/
  LowLimitPrice = 1148,
/*
***************************************************************
* Allowable high limit price for the trading day. A key       *
* parameter in validating order price. Used as the upper band *
* for validating order prices. Orders submitted with prices   *
* above the upper limit will be rejected                      *
***************************************************************
*/
  HighLimitPrice = 1149,
/*
***************************************************************
* Reference price for the current trading price range usually *
* representing the mid price between the HighLimitPrice and   *
* LowLimitPrice. The value may be the settlement price or     *
* closing price of the prior trading day.                     *
***************************************************************
*/
  TradingReferencePrice = 1150,
/*
************************************************************
* An exchange specific name assigned to a group of related *
* securities which may be concurrently affected by market  *
* events and actions.                                      *
************************************************************
*/
  SecurityGroup = 1151,
/*
**********************************************************
* Allow sequencing of Legs for a Strategy to be captured *
**********************************************************
*/
  LegNumber = 1152,
/*
***********************************************************
* Settlement cycle in which the settlement obligation was *
* generated                                               *
***********************************************************
*/
  SettlementCycleNo = 1153,
/*
**************************************************************
* Used to identify the trading currency on the Trade Capture *
* Report Side                                                *
**************************************************************
*/
  SideCurrency = 1154,
/*
*********************************************************
* Used to identify the settlement currency on the Trade *
* Capture Report Side                                   *
*********************************************************
*/
  SideSettlCurrency = 1155,
/*
************************************************************
* The extension pack number associated with an application *
* message.                                                 *
************************************************************
*/
  ApplExtID = 1156,
/*
**************************
* Net flow of Currency 1 *
**************************
*/
  CcyAmt = 1157,
/*
***************************************
* Used to group Each Settlement Party *
***************************************
*/
  NoSettlDetails = 1158,
/*
*********************************************************
* Used to identify the reporting mode of the settlement *
* obligation which is either preliminary or final       *
*********************************************************
*/
  SettlObligMode = 1159,
/*
*******************************************************
* Message identifier for Settlement Obligation Report *
*******************************************************
*/
  SettlObligMsgID = 1160,
/*
**********************************************
* Unique ID for this settlement instruction. *
**********************************************
*/
  SettlObligID = 1161,
/*
*************************************************************
* Transaction Type - required except where SettlInstMode is *
* 5=Reject SSI request                                      *
*************************************************************
*/
  SettlObligTransType = 1162,
/*
**********************************************************
* Required where SettlInstTransType is Cancel or Replace *
**********************************************************
*/
  SettlObligRefID = 1163,
/*
****************************************************************
* Used to identify whether these delivery instructions are for *
* the buyside or the sellside.                                 *
****************************************************************
*/
  SettlObligSource = 1164,
/*
************************************
* Number of settlement obligations *
************************************
*/
  NoSettlOblig = 1165,
/*
******************************************
* Unique identifier for a quote message. *
******************************************
*/
  QuoteMsgID = 1166,
/*
**********************************************************
* Identifies the status of an individual quote. See also *
* QuoteStatus(297) which is used for single Quotes.      *
**********************************************************
*/
  QuoteEntryStatus = 1167,
/*
*******************************************
* Specifies the number of canceled quotes *
*******************************************
*/
  TotNoCxldQuotes = 1168,
/*
*******************************************
* Specifies the number of accepted quotes *
*******************************************
*/
  TotNoAccQuotes = 1169,
/*
*******************************************
* Specifies the number of rejected quotes *
*******************************************
*/
  TotNoRejQuotes = 1170,
/*
**************************************************************
* Specifies whether a quote is public, i.e. available to the *
* market, or private, i.e. available to a specified          *
* counterparty only.                                         *
**************************************************************
*/
  PrivateQuote = 1171,
/*
************************************************
* Specifies the type of respondents requested. *
************************************************
*/
  RespondentType = 1172,
/*
****************************************************************
* Describes a class of sub book, e.g. for the separation of    *
* various lot types. The Sub Book Type indicates that the      *
* following Market Data Entries belong to a non-integrated Sub *
* Book. Whenever provided the Sub Book must be used together   *
* with MDPriceLevel and MDEntryPositionNo in order to sort the *
* order properly.                                              *
* Values are bilaterally agreed.                               *
****************************************************************
*/
  MDSubBookType = 1173,
/*
****************************************************************
* Identifies an event related to a SecurityTradingStatus(326). *
* An event occurs and is gone, it is not a state that applies  *
* for a period of time.                                        *
****************************************************************
*/
  SecurityTradingEvent = 1174,
/*
**********************************************************
* Number of statistics indicator repeating group entries *
**********************************************************
*/
  NoStatsIndicators = 1175,
/*
**********************
* Type of statistics *
**********************
*/
  StatsType = 1176,
/*
*********************************************************
* The number of secondary sizes specifies in this entry *
*********************************************************
*/
  NoOfSecSizes = 1177,
/*
*****************************************
* Specifies the type of secondary size. *
*****************************************
*/
  MDSecSizeType = 1178,
/*
************************************************************
* A part of the MDEntrySize(271) that represents secondary *
* interest as specified by MDSecSizeType(1178).            *
************************************************************
*/
  MDSecSize = 1179,
/*
*********************************************************
* Identifies the application with which a message is    *
* associated. Used only if application sequencing is in *
* effect.                                               *
*********************************************************
*/
  ApplID = 1180,
/*
**************************************************************
* Data sequence number to be used when FIX session is not in *
* effect                                                     *
**************************************************************
*/
  ApplSeqNum = 1181,
/*
***************************************************
* Beginning range of application sequence numbers *
***************************************************
*/
  ApplBegSeqNum = 1182,
/*
************************************************
* Ending range of application sequence numbers *
************************************************
*/
  ApplEndSeqNum = 1183,
/*
*****************************************
* Lenght of the SecurityXML data block. *
*****************************************
*/
  SecurityXMLLen = 1184,
/*
****************************************************************
* Actual XML data stream describing a security, normally FpML. *
****************************************************************
*/
  SecurityXML = 1185,
/*
***********************************************************
* The schema used to validate the contents of SecurityXML *
***********************************************************
*/
  SecurityXMLSchema = 1186,
/*
***********************************************************
* Set by the sender to tell the receiver to perform an    *
* immediate refresh of the book due to disruptions in the *
* accompanying real-time feed                             *
* 'Y' - Mandatory refresh by all participants             *
* 'N' - Process as required                               *
***********************************************************
*/
  RefreshIndicator = 1187,
/*
*******************************************************
* Annualized volatility for option model calculations *
*******************************************************
*/
  Volatility = 1188,
/*
****************************************************************
* Time to expiration in years calculated as the number of days *
* remaining to expiration divided by 365 days per year.        *
****************************************************************
*/
  TimeToExpiration = 1189,
/*
********************************************************
* Interest rate. Usually some form of short term rate. *
********************************************************
*/
  RiskFreeRate = 1190,
/*
**************************************************************
* Used to express the UOM of the price if different from the *
* contract. In futures, this can be different for cross-rate *
* products in which the price is quoted in units differently *
* from the contract                                          *
**************************************************************
*/
  PriceUnitOfMeasure = 1191,
/*
***************************************************************
* Used to express the UOM Quantity of the price if different  *
* from the contract. In futures, this can be different for    *
* physically delivered products in which price is quoted in a *
* unit size different from the contract, i.e. a Cattle Future *
* contract has a UOMQty of 40,000 and a PriceUOMQty of 100.   *
***************************************************************
*/
  PriceUnitOfMeasureQty = 1192,
/*
*******************************************************
* Settlement method for a contract. Can be used as an *
* alternative to CFI Code value                       *
*******************************************************
*/
  SettlMethod = 1193,
/*
**********************************************
* Type of exercise of a derivatives security *
**********************************************
*/
  ExerciseStyle = 1194,
/*
***********************************************************
* Cash amount indicating the pay out associated with an   *
* option. For binary options this is a fixed amount.      *
* Conditionally required if OptPayoutType(1482) is set to *
* binary.                                                 *
***********************************************************
*/
  OptPayoutAmount = 1195,
/*
******************************
* Method for price quotation *
******************************
*/
  PriceQuoteMethod = 1196,
/*
***************************************************
* Specifies the type of valuation method applied. *
***************************************************
*/
  ValuationMethod = 1197,
/*
************************************************************
* Indicates whether instruments are pre-listed only or can *
* also be defined via user request                         *
************************************************************
*/
  ListMethod = 1198,
/*
******************************************************
* Used to express the ceiling price of a capped call *
******************************************************
*/
  CapPrice = 1199,
/*
***************************************************
* Used to express the floor price of a capped put *
***************************************************
*/
  FloorPrice = 1200,
/*
**************************************************************
* Number of strike rule entries. This block specifies the    *
* rules for determining how new strikes should be listed     *
* within the stated price range of the underlying instrument *
**************************************************************
*/
  NoStrikeRules = 1201,
/*
*************************************************************
* Starting price for the range to which the StrikeIncrement *
* applies. Price refers to the price of the underlying      *
*************************************************************
*/
  StartStrikePxRange = 1202,
/*
**********************************************************
* Ending price of the range to which the StrikeIncrement *
* applies. Price refers to the price of the underlying   *
**********************************************************
*/
  EndStrikePxRange = 1203,
/*
****************************************************************
* Value by which strike price should be incremented within the *
* specified price range.                                       *
****************************************************************
*/
  StrikeIncrement = 1204,
/*
***************************************************************
* Number of tick rules. This block specifies the rules for    *
* determining how a security ticks, i.e. the price increments *
* at which it can be quoted and traded, depending on the      *
* current price of the security                               *
***************************************************************
*/
  NoTickRules = 1205,
/*
*****************************************************
* Starting price range for specified tick increment *
*****************************************************
*/
  StartTickPriceRange = 1206,
/*
*******************************************************
* Ending price range for the specified tick increment *
*******************************************************
*/
  EndTickPriceRange = 1207,
/*
**************************************************************
* Tick increment for stated price range. Specifies the valid *
* price increments at which a security can be quoted and     *
* traded                                                     *
**************************************************************
*/
  TickIncrement = 1208,
/*
************************************************************
* Specifies the type of tick rule which is being described *
************************************************************
*/
  TickRuleType = 1209,
/*
******************************************************
* Code to represent the type of instrument attribute *
******************************************************
*/
  NestedInstrAttribType = 1210,
/*
************************************************************
* Attribute value appropriate to the NestedInstrAttribType *
* field                                                    *
************************************************************
*/
  NestedInstrAttribValue = 1211,
/*
************************************************************
* Time of security's maturity expressed in local time with *
* offset to UTC specified                                  *
************************************************************
*/
  LegMaturityTime = 1212,
/*
************************************************************
* Time of security's maturity expressed in local time with *
* offset to UTC specified                                  *
************************************************************
*/
  UnderlyingMaturityTime = 1213,
/*
**************************************
* Refer to definition for Symbol(55) *
**************************************
*/
  DerivativeSymbol = 1214,
/*
*****************************************
* Refer to definition for SymbolSfx(65) *
*****************************************
*/
  DerivativeSymbolSfx = 1215,
/*
******************************************
* Refer to definition for SecurityID(48) *
******************************************
*/
  DerivativeSecurityID = 1216,
/*
************************************************
* Refer to definition for SecurityIDSoruce(22) *
************************************************
*/
  DerivativeSecurityIDSource = 1217,
/*
************************************************
* Refer to definition for NoSecurityAltID(454) *
************************************************
*/
  NoDerivativeSecurityAltID = 1218,
/*
**********************************************
* Refer to definition for SecurityAltID(455) *
**********************************************
*/
  DerivativeSecurityAltID = 1219,
/*
****************************************************
* Refer to definition for SecurityAltIDSource(456) *
****************************************************
*/
  DerivativeSecurityAltIDSource = 1220,
/*
**********************************************
* Refer to definition of LowLimitPrice(1148) *
**********************************************
*/
  SecondaryLowLimitPrice = 1221,
/*
**************************************************************
* Allows maturity rule to be referenced via an identifier so *
* that rules do not need to be explicitly enumerated         *
**************************************************************
*/
  MaturityRuleID = 1222,
/*
************************************************************
* Allows strike rule to be referenced via an identifier so *
* that rules do not need to be explicitly enumerated       *
************************************************************
*/
  StrikeRuleID = 1223,
/*
*************************************************
* Refer to definition of UnitOfMeasureQty(1147) *
*************************************************
*/
  LegUnitOfMeasureQty = 1224,
/*
*********************************************************
* Cash amount indicating the pay out associated with an *
* option. For binary options this is a fixed amount     *
*********************************************************
*/
  DerivativeOptPayAmount = 1225,
/*
**************************************************
* Ending maturity month year for an option class *
**************************************************
*/
  EndMaturityMonthYear = 1226,
/*
**************************************************************
* Identifies an entire suite of products for a given market. *
* In Futures this may be "interest rates", "agricultural",   *
* "equity indexes", etc.                                     *
**************************************************************
*/
  ProductComplex = 1227,
/*
*********************************
* Refer to ProductComplex(1227) *
*********************************
*/
  DerivativeProductComplex = 1228,
/*
***************************************************************
* Increment between successive maturities for an option class *
***************************************************************
*/
  MaturityMonthYearIncrement = 1229,
/*
***********************************************
* Refer to definition of HighLimitPrice(1149) *
***********************************************
*/
  SecondaryHighLimitPrice = 1230,
/*
***********************************************************
* Minimum lot size allowed based on lot type specified in *
* LotType(1093)                                           *
***********************************************************
*/
  MinLotSize = 1231,
/*
************************************
* Number of execution instructions *
************************************
*/
  NoExecInstRules = 1232,
/*
****************************
* Number of Lot Type Rules *
****************************
*/
  NoLotTypeRules = 1234,
/*
*************************
* Number of Match Rules *
*************************
*/
  NoMatchRules = 1235,
/*
*************************************************************
* Number of maturity rules in MarurityRules component block *
*************************************************************
*/
  NoMaturityRules = 1236,
/*
*************************
* Number of order types *
*************************
*/
  NoOrdTypeRules = 1237,
/*
**************************************
* Number of time in force techniques *
**************************************
*/
  NoTimeInForceRules = 1239,
/*
*******************************************************
* Refer to definition for TradingReferencePrice(1150) *
*******************************************************
*/
  SecondaryTradingReferencePrice = 1240,
/*
****************************************************
* Starting maturity month year for an option class *
****************************************************
*/
  StartMaturityMonthYear = 1241,
/*
**************************************************************
* Used to indicate if a product or group of product supports *
* the creation of flexible securities                        *
**************************************************************
*/
  FlexProductEligibilityIndicator = 1242,
/*
**************************************************
* Refer to FlexProductEligibilityIndicator(1242) *
**************************************************
*/
  DerivFlexProductEligibilityIndicator = 1243,
/*
***************************************************************
* Used to indicate a derivatives security that can be defined *
* using flexible terms. The terms commonly permitted to be    *
* defined by market participants are expiration date and      *
* strike price. FlexibleIndicator is an alternative           *
* CFICode(461) Standard/Non-standard attribute.               *
***************************************************************
*/
  FlexibleIndicator = 1244,
/*
************************************************************
* Used when the trading currency can differ from the price *
* currency                                                 *
************************************************************
*/
  TradingCurrency = 1245,
  DerivativeProduct = 1246,
  DerivativeSecurityGroup = 1247,
  DerivativeCFICode = 1248,
  DerivativeSecurityType = 1249,
  DerivativeSecuritySubType = 1250,
  DerivativeMaturityMonthYear = 1251,
  DerivativeMaturityDate = 1252,
  DerivativeMaturityTime = 1253,
  DerivativeSettleOnOpenFlag = 1254,
  DerivativeInstrmtAssignmentMethod = 1255,
  DerivativeSecurityStatus = 1256,
  DerivativeInstrRegistry = 1257,
  DerivativeCountryOfIssue = 1258,
  DerivativeStateOrProvinceOfIssue = 1259,
  DerivativeLocaleOfIssue = 1260,
  DerivativeStrikePrice = 1261,
  DerivativeStrikeCurrency = 1262,
  DerivativeStrikeMultiplier = 1263,
  DerivativeStrikeValue = 1264,
  DerivativeOptAttribute = 1265,
  DerivativeContractMultiplier = 1266,
  DerivativeMinPriceIncrement = 1267,
  DerivativeMinPriceIncrementAmount = 1268,
  DerivativeUnitOfMeasure = 1269,
  DerivativeUnitOfMeasureQty = 1270,
  DerivativeTimeUnit = 1271,
  DerivativeSecurityExchange = 1272,
  DerivativePositionLimit = 1273,
  DerivativeNTPositionLimit = 1274,
  DerivativeIssuer = 1275,
  DerivativeIssueDate = 1276,
  DerivativeEncodedIssuerLen = 1277,
  DerivativeEncodedIssuer = 1278,
  DerivativeSecurityDesc = 1279,
  DerivativeEncodedSecurityDescLen = 1280,
  DerivativeEncodedSecurityDesc = 1281,
/*
********************************************
* Refer to definition SecurityXMLLen(1184) *
********************************************
*/
  DerivativeSecurityXMLLen = 1282,
/*
********************************************
* Refer to definition of SecurityXML(1185) *
********************************************
*/
  DerivativeSecurityXML = 1283,
/*
**************************************************
* Refer to definition of SecurityXMLSchema(1186) *
**************************************************
*/
  DerivativeSecurityXMLSchema = 1284,
  DerivativeContractSettlMonth = 1285,
  NoDerivativeEvents = 1286,
  DerivativeEventType = 1287,
  DerivativeEventDate = 1288,
  DerivativeEventTime = 1289,
  DerivativeEventPx = 1290,
  DerivativeEventText = 1291,
/*
*****************************************
* Refer to definition of NoParties(453) *
*****************************************
*/
  NoDerivativeInstrumentParties = 1292,
/*
***************************************
* Refer to definition of PartyID(448) *
***************************************
*/
  DerivativeInstrumentPartyID = 1293,
/*
*********************************************
* Refer to definition of PartyIDSource(447) *
*********************************************
*/
  DerivativeInstrumentPartyIDSource = 1294,
/*
*****************************************
* REfer to definition of PartyRole(452) *
*****************************************
*/
  DerivativeInstrumentPartyRole = 1295,
/*
**********************************************
* Refer to definition for NoPartySubIDs(802) *
**********************************************
*/
  NoDerivativeInstrumentPartySubIDs = 1296,
/*
*******************************************
* Refer to definition for PartySubID(523) *
*******************************************
*/
  DerivativeInstrumentPartySubID = 1297,
/*
***********************************************
* Refer to definition for PartySubIDType(803) *
***********************************************
*/
  DerivativeInstrumentPartySubIDType = 1298,
/*
**********************************************
* Type of exercise of a derivatives security *
**********************************************
*/
  DerivativeExerciseStyle = 1299,
/*
*********************************
* Identifies the market segment *
*********************************
*/
  MarketSegmentID = 1300,
/*
*************************
* Identifies the Market *
*************************
*/
  MarketID = 1301,
/*
*********************************************************
* Unit of measure for the Maturity Month Year Increment *
*********************************************************
*/
  MaturityMonthYearIncrementUnits = 1302,
/*
**********************************************************
* Format used to generate the MaturityMonthYear for each *
* option                                                 *
**********************************************************
*/
  MaturityMonthYearFormat = 1303,
/*
*****************************************
* Expiration Style for an option class: *
*****************************************
*/
  StrikeExerciseStyle = 1304,
/*
****************************************************
* Describes the how the price limits are expressed *
****************************************************
*/
  SecondaryPriceLimitType = 1305,
/*
****************************************************
* Describes the how the price limits are expressed *
****************************************************
*/
  PriceLimitType = 1306,
/*
***********************************************************
* Indicates execution instructions that are valid for the *
* specified market segment                                *
***********************************************************
*/
  ExecInstValue = 1308,
/*
***********************************************************
* Allows trading rules to be expressed by trading session *
***********************************************************
*/
  NoTradingSessionRules = 1309,
/*
************************************************************
* Number of Market Segments on which a security may trade. *
************************************************************
*/
  NoMarketSegments = 1310,
  NoDerivativeInstrAttrib = 1311,
  NoNestedInstrAttrib = 1312,
/*
***********************************************
* Refer to definition of InstrAttribType(871) *
***********************************************
*/
  DerivativeInstrAttribType = 1313,
/*
************************************************
* Refer to definition of InstrAttribValue(872) *
************************************************
*/
  DerivativeInstrAttribValue = 1314,
/*
****************************************************
* Refer to definition for PriceUnitOfMeasure(1191) *
****************************************************
*/
  DerivativePriceUnitOfMeasure = 1315,
/*
******************************************************
* Refer to definition of PriceUnitOfMeasureQty(1192) *
******************************************************
*/
  DerivativePriceUnitOfMeasureQty = 1316,
/*
********************************************
* Refer to definition of SettlMethod(1193) *
********************************************
*/
  DerivativeSettlMethod = 1317,
/*
*************************************************
* Refer to definition of PriceQuoteMethod(1196) *
*************************************************
*/
  DerivativePriceQuoteMethod = 1318,
/*
*************************************************
* Refer to definition of ValuationMethod(1197). *
*************************************************
*/
  DerivativeValuationMethod = 1319,
/*
************************************************************
* Indicates whether instruments are pre-listed only or can *
* also be defined via user request                         *
************************************************************
*/
  DerivativeListMethod = 1320,
/*
*****************************************
* Refer to definition of CapPrice(1199) *
*****************************************
*/
  DerivativeCapPrice = 1321,
/*
*******************************************
* Refer to definition of FloorPrice(1200) *
*******************************************
*/
  DerivativeFloorPrice = 1322,
/*
****************************************************
* Indicates whether an Option is for a put or call *
****************************************************
*/
  DerivativePutOrCall = 1323,
/*
**********************************************************
* If provided, then Instrument occurrence has explicitly *
* changed                                                *
**********************************************************
*/
  ListUpdateAction = 1324,
/*
*********************************************
* Reference to a parent Market Segment. See *
* MarketSegmentID(1300)                     *
*********************************************
*/
  ParentMktSegmID = 1325,
/*
*******************************
* Trading Session description *
*******************************
*/
  TradingSessionDesc = 1326,
/*
********************************************************
* Specifies the action taken for the specified trading *
* sessions.                                            *
********************************************************
*/
  TradSesUpdateAction = 1327,
/*
****************************************************************
* Those will be used by Firms to send a reason for rejecting a *
* trade in an allocate claim model.                            *
****************************************************************
*/
  RejectText = 1328,
/*
***************************************************************
* This is a multiplier that Clearing (Fee system) will use to *
* calculate fees and will be sent to the firms on their       *
* confirms.                                                   *
***************************************************************
*/
  FeeMultiplier = 1329,
/*
**************************************
* Refer to definition for Symbol(55) *
**************************************
*/
  UnderlyingLegSymbol = 1330,
/*
*****************************************
* Refer to definition for SymbolSfx(65) *
*****************************************
*/
  UnderlyingLegSymbolSfx = 1331,
/*
******************************************
* Refer to definition for SecurityID(48) *
******************************************
*/
  UnderlyingLegSecurityID = 1332,
/*
************************************************
* Refer to definition for SecurityIDSource(22) *
************************************************
*/
  UnderlyingLegSecurityIDSource = 1333,
/*
************************************************
* Refer to definition for NoSecurityAltID(454) *
************************************************
*/
  NoUnderlyingLegSecurityAltID = 1334,
/*
**********************************************
* Refer to definition for SecurityAltID(455) *
**********************************************
*/
  UnderlyingLegSecurityAltID = 1335,
/*
****************************************************
* Refer to definition for SecurityAltIDSource(456) *
****************************************************
*/
  UnderlyingLegSecurityAltIDSource = 1336,
/*
*********************************************
* Refer to definition for SecurityType(167) *
*********************************************
*/
  UnderlyingLegSecurityType = 1337,
/*
************************************************
* Refer to definition for SecuritySubType(762) *
************************************************
*/
  UnderlyingLegSecuritySubType = 1338,
/*
**************************************************
* Refer to definition for MaturityMonthYear(200) *
**************************************************
*/
  UnderlyingLegMaturityMonthYear = 1339,
/*
********************************************
* Refer to definition for StrikePrice(202) *
********************************************
*/
  UnderlyingLegStrikePrice = 1340,
/*
*************************************************
* Refer to definition for SecurityExchange(207) *
*************************************************
*/
  UnderlyingLegSecurityExchange = 1341,
/*
***************************************************************
* Number of Underlyings, Identifies the Underlying of the Leg *
***************************************************************
*/
  NoOfLegUnderlyings = 1342,
/*
******************************************
* Refer to definition for PutOrCall(201) *
******************************************
*/
  UnderlyingLegPutOrCall = 1343,
/*
****************************************
* Refer to definition for CFICode(461) *
****************************************
*/
  UnderlyingLegCFICode = 1344,
/*
*********************
* Date of maturity. *
*********************
*/
  UnderlyingLegMaturityDate = 1345,
/*
*********************************
* Unique identifier for request *
*********************************
*/
  ApplReqID = 1346,
/*
***************************************************
* Type of Application Message Request being made. *
***************************************************
*/
  ApplReqType = 1347,
/*
************************************************************
* Used to indicate the type of acknowledgement being sent. *
************************************************************
*/
  ApplResponseType = 1348,
/*
******************************************************
* Total number of messages included in transmission. *
******************************************************
*/
  ApplTotalMessageCount = 1349,
/*
***************************************************************
* Application sequence number of last message in transmission *
***************************************************************
*/
  ApplLastSeqNum = 1350,
/*
**************************************************
* Specifies number of application id occurrences *
**************************************************
*/
  NoApplIDs = 1351,
/*
****************************************************************
* Used to indicate that a message is being sent in response to *
* an Application Message Request. It is possible for both      *
* ApplResendFlag and PossDupFlag to be set on the same message *
* if the Sender's cache size is greater than zero and the      *
* message is being resent due to a session level resend        *
* request                                                      *
****************************************************************
*/
  ApplResendFlag = 1352,
/*
*****************************************************
* Identifier for the Applicaton Message Request Ack *
*****************************************************
*/
  ApplResponseID = 1353,
/*
**********************************************************
* Used to return an error code or text associated with a *
* response to an Application Request.                    *
**********************************************************
*/
  ApplResponseError = 1354,
/*
*************************************************************
* Reference to the unique application identifier which      *
* corresponds to ApplID(1180) from the Application Sequence *
* Group component                                           *
*************************************************************
*/
  RefApplID = 1355,
/*
*************************************************
* Identifier for the Application Sequence Reset *
*************************************************
*/
  ApplReportID = 1356,
/*
****************************************************************
* Application sequence number of last message in transmission. *
****************************************************************
*/
  RefApplLastSeqNum = 1357,
/*
*****************************************
* Refer to definition of PutOrCall(201) *
*****************************************
*/
  LegPutOrCall = 1358,
/*
***************************************************************
* Total number of fill entries across all messages. Should be *
* the sum of all NoFills(1362) in each message that has       *
* repeating list of fill entries related to the same          *
* ExecID(17). Used to support fragmentation.                  *
***************************************************************
*/
  TotNoFills = 1361,
  NoFills = 1362,
/*
**************************************************************
* Refer to ExecID(17). Used when multiple partial fills are  *
* reported in single Execution Report. ExecID and FillExecID *
* should not overlap,                                        *
**************************************************************
*/
  FillExecID = 1363,
/*
***************************************
* Price of Fill. Refer to LastPx(31). *
***************************************
*/
  FillPx = 1364,
/*
*******************************************
* Quantity of Fill. Refer to LastQty(32). *
*******************************************
*/
  FillQty = 1365,
/*
*************************************************************
* The AllocID(70) of an individual leg of a multileg order. *
*************************************************************
*/
  LegAllocID = 1366,
/*
****************************************************************
* Identifies settlement currency for the leg level allocation. *
****************************************************************
*/
  LegAllocSettlCurrency = 1367,
/*
****************************************************************
* Identifies an event related to a TradSesStatus(340). An      *
* event occurs and is gone, it is not a state that applies for *
* a period of time.                                            *
****************************************************************
*/
  TradSesEvent = 1368,
/*
***************************************************************
* Unique identifier of Order Mass Cancel Report or Order Mass *
* Action Report message as assigned by sell-side (broker,     *
* exchange, ECN)                                              *
***************************************************************
*/
  MassActionReportID = 1369,
/*
***********************************************************
* Number of not affected orders in the repeating group of *
* order ids.                                              *
***********************************************************
*/
  NoNotAffectedOrders = 1370,
/*
*********************************************************
* OrderID(37) of an order not affected by a mass cancel *
* request.                                              *
*********************************************************
*/
  NotAffectedOrderID = 1371,
/*
***************************************************************
* ClOrdID(11) of the previous order (NOT the initial order of *
* the day) as assigned by the institution, used to identify   *
* the previous order in cancel and cancel/replace requests.   *
***************************************************************
*/
  NotAffOrigClOrdID = 1372,
/*
******************************************
* Specifies the type of action requested *
******************************************
*/
  MassActionType = 1373,
/*
*************************************************
* Specifies scope of Order Mass Action Request. *
*************************************************
*/
  MassActionScope = 1374,
/*
*************************************************************
* Specifies the action taken by counterparty order handling *
* system as a result of the action type indicated in        *
* MassActionType of the Order Mass Action Request.          *
*************************************************************
*/
  MassActionResponse = 1375,
/*
*************************************************
* Reason Order Mass Action Request was rejected *
*************************************************
*/
  MassActionRejectReason = 1376,
/*
*****************************************
* Specifies the type of multileg order. *
*****************************************
*/
  MultilegModel = 1377,
/*
***********************************************************
* Code to represent how the multileg price is to be       *
* interpreted when applied to the legs.                   *
* (See Volume : "Glossary" for further value definitions) *
***********************************************************
*/
  MultilegPriceMethod = 1378,
/*
**************************************************
* Specifies the volatility of an instrument leg. *
**************************************************
*/
  LegVolatility = 1379,
/*
****************************************************************
* The continuously-compounded annualized dividend yield of the *
* underlying(s) of an option. Used as a parameter to           *
* theoretical option pricing models.                           *
****************************************************************
*/
  DividendYield = 1380,
/*
************************************************
* Refer to definition for DividendYield(1380). *
************************************************
*/
  LegDividendYield = 1381,
/*
****************************************************************
* Specifies the currency ratio between the currency used for a *
* multileg price and the currency used by the outright book    *
* defined by the leg. Example: Multileg quoted in EUR,         *
* outright leg in USD and 1 EUR = 0,7 USD then CurrencyRatio = *
* 0.7                                                          *
****************************************************************
*/
  CurrencyRatio = 1382,
/*
****************************************************************
* Specifies the currency ratio between the currency used for a *
* multileg price and the currency used by the outright book    *
* defined by the leg. Example: Multileg quoted in EUR,         *
* outright leg in USD and 1 EUR = 0,7 USD then                 *
* LegCurrencyRatio = 0.7                                       *
****************************************************************
*/
  LegCurrencyRatio = 1383,
/*
*******************************
* Refer to ExecInst(18)       *
* Same values as ExecInst(18) *
*******************************
*/
  LegExecInst = 1384,
/*
************************************
* Defines the type of contingency. *
************************************
*/
  ContingencyType = 1385,
/*
****************************************************************
* Identifies the reason for rejection of a New Order List      *
* message. Note that OrdRejReason(103) is used if the          *
* rejection is based on properties of an individual order part *
* of the List.                                                 *
****************************************************************
*/
  ListRejectReason = 1386,
/*
****************************************
* Number of trade reporting indicators *
****************************************
*/
  NoTrdRepIndicators = 1387,
/*
**********************************************************
* Identifies the type of party for trade reporting. Same *
* values as PartyRole(452).                              *
**********************************************************
*/
  TrdRepPartyRole = 1388,
/*
***************************************************************
* Specifies whether the trade should be reported (or not) to  *
* parties of the provided TrdRepPartyRole(1388). Used to      *
* override standard reporting behavior by the receiver of the *
* trade report and thereby complements the PublTrdIndicator(  *
* tag1390).                                                   *
***************************************************************
*/
  TrdRepIndicator = 1389,
/*
**********************************************************
* Indicates if a trade should be reported via a market   *
* reporting service. The indicator governs all reporting *
* services of the recipient. Replaces                    *
* PublishTrdIndicator(852).                              *
**********************************************************
*/
  TradePublishIndicator = 1390,
/*
********************************************
* Refer to definition of OptAttribute(206) *
********************************************
*/
  UnderlyingLegOptAttribute = 1391,
/*
********************************************
* Refer to definition of SecurityDesc(107) *
********************************************
*/
  UnderlyingLegSecurityDesc = 1392,
/*
*****************************************************
* Unique ID of a Market Definition Request message. *
*****************************************************
*/
  MarketReqID = 1393,
/*
*****************************************
* Market Definition message identifier. *
*****************************************
*/
  MarketReportID = 1394,
/*
***************************************************************
* Specifies the action taken for the specified MarketID(1301) *
* + MarketSegmentID(1300).                                    *
***************************************************************
*/
  MarketUpdateAction = 1395,
/*
*****************************************
* Description or name of Market Segment *
*****************************************
*/
  MarketSegmentDesc = 1396,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedMktSegmDesc(1324) field.               *
*************************************************
*/
  EncodedMktSegmDescLen = 1397,
/*
**************************************************************
* Encoded (non-ASCII characters) representation of the       *
* MarketSegmDesc(1396) field in the encoded format specified *
* via the MessageEncoding(347) field. If used, the ASCII     *
* (English) representation should also be specified in the   *
* MarketSegmDesc field.                                      *
**************************************************************
*/
  EncodedMktSegmDesc = 1398,
/*
******************************************************
* Used to specify a new application sequence number. *
******************************************************
*/
  ApplNewSeqNum = 1399,
/*
****************************************************************
* Enumeration defining the encryption method used to encrypt   *
* password fields.                                             *
* At this time there are no encryption methods defined by FPL. *
****************************************************************
*/
  EncryptedPasswordMethod = 1400,
/*
***********************************************
* Length of the EncryptedPassword(1402) field *
***********************************************
*/
  EncryptedPasswordLen = 1401,
/*
**************************************************************
* Encrypted password - encrypted via the method specified in *
* the field EncryptedPasswordMethod(1400)                    *
**************************************************************
*/
  EncryptedPassword = 1402,
/*
**************************************************
* Length of the EncryptedNewPassword(1404) field *
**************************************************
*/
  EncryptedNewPasswordLen = 1403,
/*
***************************************************************
* Encrypted new password - encrypted via the method specified *
* in the field EncryptedPasswordMethod(1400)                  *
***************************************************************
*/
  EncryptedNewPassword = 1404,
/*
************************************************************
* Time of security's maturity expressed in local time with *
* offset to UTC specified                                  *
************************************************************
*/
  UnderlyingLegMaturityTime = 1405,
/*
************************************************************
* The extension pack number associated with an application *
* message.                                                 *
************************************************************
*/
  RefApplExtID = 1406,
/*
***********************************************************
* The extension pack number that is the default for a FIX *
* session.                                                *
***********************************************************
*/
  DefaultApplExtID = 1407,
/*
*********************************************************
* The default custom application version ID that is the *
* default for a session.                                *
*********************************************************
*/
  DefaultCstmApplVerID = 1408,
/*
***************************
* Status of a FIX session *
***************************
*/
  SessionStatus = 1409,
  DefaultVerIndicator = 1410,
/*
**********************************************
* Refer to definition of PartySubIDType(803) *
**********************************************
*/
  Nested4PartySubIDType = 1411,
/*
******************************************
* Refer to definition of PartySubID(523) *
******************************************
*/
  Nested4PartySubID = 1412,
/*
*********************************************
* Refer to definition of NoPartySubIDs(802) *
*********************************************
*/
  NoNested4PartySubIDs = 1413,
/*
******************************************
* Refer to definition of NoPartyIDs(453) *
******************************************
*/
  NoNested4PartyIDs = 1414,
/*
***************************************
* Refer to definition of PartyID(448) *
***************************************
*/
  Nested4PartyID = 1415,
/*
*********************************************
* Refer to definition of PartyIDSource(447) *
*********************************************
*/
  Nested4PartyIDSource = 1416,
/*
*****************************************
* Refer to definition of PartyRole(452) *
*****************************************
*/
  Nested4PartyRole = 1417,
/*
****************************************
* Fill quantity for the leg instrument *
****************************************
*/
  LegLastQty = 1418,
/*
**********************************************
* Type of exercise of a derivatives security *
**********************************************
*/
  UnderlyingExerciseStyle = 1419,
/*
**********************************************
* Type of exercise of a derivatives security *
**********************************************
*/
  LegExerciseStyle = 1420,
/*
****************************************************
* Refer to definition for PriceUnitOfMeasure(1191) *
****************************************************
*/
  LegPriceUnitOfMeasure = 1421,
/*
******************************************************
* Refer to definition of PriceUnitOfMeasureQty(1192) *
******************************************************
*/
  LegPriceUnitOfMeasureQty = 1422,
/*
*************************************************
* Refer to definition of UnitOfMeasureQty(1147) *
*************************************************
*/
  UnderlyingUnitOfMeasureQty = 1423,
/*
****************************************************
* Refer to definition for PriceUnitOfMeasure(1191) *
****************************************************
*/
  UnderlyingPriceUnitOfMeasure = 1424,
/*
******************************************************
* Refer to definition of PriceUnitOfMeasureQty(1192) *
******************************************************
*/
  UnderlyingPriceUnitOfMeasureQty = 1425,
/*
******************
* Type of report *
******************
*/
  ApplReportType = 1426,
/*
**************************************************************
* When reporting trades, used to reference the identifier of *
* the execution (ExecID) being reported if different ExecIDs *
* were assigned to each side of the trade.                   *
**************************************************************
*/
  SideExecID = 1427,
/*
***************************************************************
* Time lapsed from order entry until match, based on the unit *
* of time specified in OrderDelayUnit.  Default is seconds if *
* OrderDelayUnit is not specified. Value = 0, indicates the   *
* aggressor (the initiating side of the trade).               *
***************************************************************
*/
  OrderDelay = 1428,
/*
********************************************************
* Time unit in which the OrderDelay(1428) is expressed *
********************************************************
*/
  OrderDelayUnit = 1429,
/*
***********************************************************
* Identifies the type of venue where a trade was executed *
***********************************************************
*/
  VenueType = 1430,
/*
****************************************
* The reason for updating the RefOrdID *
****************************************
*/
  RefOrdIDReason = 1431,
/*
***************************************************************
* The customer capacity for this trade at the time of the     *
* order/execution.                                            *
* Primarily used by futures exchanges to indicate the CTICode *
* (customer type indicator) as required by the US CFTC        *
* (Commodity Futures Trading Commission).                     *
***************************************************************
*/
  OrigCustOrderCapacity = 1432,
/*
*************************************************************
* Used to reference a previously submitted ApplReqID (1346) *
* from within a subsequent                                  *
* ApplicationMessageRequest(MsgType=BW)                     *
*************************************************************
*/
  RefApplReqID = 1433,
/*
******************************
* Type of pricing model used *
******************************
*/
  ModelType = 1434,
/*
****************************************************************
* Indicates the type of multiplier being applied to the        *
* contract. Can be optionally used to further define what unit *
* ContractMultiplier(tag 231) is expressed in.                 *
****************************************************************
*/
  ContractMultiplierUnit = 1435,
/*
****************************************************************
* "Indicates the type of multiplier being applied to the       *
* contract. Can be optionally used to further define what unit *
* LegContractMultiplier(tag 614) is expressed in.              *
****************************************************************
*/
  LegContractMultiplierUnit = 1436,
/*
****************************************************************
* Indicates the type of multiplier being applied to the        *
* contract. Can be optionally used to further define what unit *
* UndlyContractMultiplier(tag 436) is expressed in.            *
****************************************************************
*/
  UnderlyingContractMultiplierUnit = 1437,
/*
****************************************************************
* Indicates the type of multiplier being applied to the        *
* contract. Can be optionally used to further define what unit *
* DerivativeContractMultiplier(tag 1266)is expressed in.       *
****************************************************************
*/
  DerivativeContractMultiplierUnit = 1438,
/*
***************************************************************
* The industry standard flow schedule by which electricity or *
* natural gas is traded. Schedules exist by regions and       *
* on-peak and off-peak status, such as "Western Peak".        *
***************************************************************
*/
  FlowScheduleType = 1439,
/*
***************************************************************
* The industry standard flow schedule by which electricity or *
* natural gas is traded. Schedules exist by regions and       *
* on-peak and off-peak status, such as "Western Peak".        *
***************************************************************
*/
  LegFlowScheduleType = 1440,
/*
***************************************************************
* The industry standard flow schedule by which electricity or *
* natural gas is traded. Schedules exist by regions and       *
* on-peak and off-peak status, such as "Western Peak".        *
***************************************************************
*/
  UnderlyingFlowScheduleType = 1441,
/*
***************************************************************
* The industry standard flow schedule by which electricity or *
* natural gas is traded. Schedules exist by regions and       *
* on-peak and off-peak status, such as "Western Peak".        *
***************************************************************
*/
  DerivativeFlowScheduleType = 1442,
/*
**************************************************************
* Indicator to identify whether this fill was a result of a  *
* liquidity provider providing or liquidity taker taking the *
* liquidity. Applicable only for OrdStatus of Partial or     *
* Filled                                                     *
**************************************************************
*/
  FillLiquidityInd = 1443,
/*
**************************************************************
* Indicator to identify whether this fill was a result of a  *
* liquidity provider providing or liquidity taker taking the *
* liquidity. Applicable only for OrdStatus of Partial or     *
* Filled.                                                    *
**************************************************************
*/
  SideLiquidityInd = 1444,
/*
*******************************************
* Number of rate sources being specified. *
*******************************************
*/
  NoRateSources = 1445,
/*
***********************************************************
* Identifies the source of rate information.              *
* For FX, the reference source to be used for the FX spot *
* rate.                                                   *
***********************************************************
*/
  RateSource = 1446,
/*
***************************************************************
* Indicates whether the rate source specified is a primary or *
* secondary source.                                           *
***************************************************************
*/
  RateSourceType = 1447,
/*
**************************************************************
* Identifies the reference "page" from the rate source.      *
* For FX, the reference page to the spot rate to be used for *
* the reference FX spot rate.                                *
**************************************************************
*/
  ReferencePage = 1448,
/*
**************************************************************
* A category of CDS credit even in which the underlying bond *
* experiences a restructuring.                               *
* Used to define a CDS instrument.                           *
**************************************************************
*/
  RestructuringType = 1449,
/*
****************************************************************
* Specifies which issue (underlying bond) will receive payment *
* priority in the event of a default.                          *
* Used to define a CDS instrument.                             *
****************************************************************
*/
  Seniority = 1450,
/*
****************************************************************
* Indicates the notional percentage of the deal that is still  *
* outstanding based on the remaining components of the index.  *
* Used to calculate the true value of a CDS trade or position. *
****************************************************************
*/
  NotionalPercentageOutstanding = 1451,
/*
***************************************************************
* Used to reflect the Original value prior to the application *
* of a credit event. See NotionalPercentageOutstanding(1451). *
***************************************************************
*/
  OriginalNotionalPercentageOutstanding = 1452,
/*
*******************************
* See RestructuringType(1449) *
*******************************
*/
  UnderlyingRestructuringType = 1453,
/*
***********************
* See Seniority(1450) *
***********************
*/
  UnderlyingSeniority = 1454,
/*
*******************************************
* See NotionalPercentageOutstanding(1451) *
*******************************************
*/
  UnderlyingNotionalPercentageOutstanding = 1455,
/*
***************************************************
* See OriginalNotionalPercentageOutstanding(1452) *
***************************************************
*/
  UnderlyingOriginalNotionalPercentageOutstanding = 1456,
/*
***********************************************************
* Lower bound percentage of the loss that the tranche can *
* endure.                                                 *
***********************************************************
*/
  AttachmentPoint = 1457,
/*
**************************************************************
* Upper bound percentage of the loss the tranche can endure. *
**************************************************************
*/
  DetachmentPoint = 1458,
/*
******************************
* See AttachmentPoint(1457). *
******************************
*/
  UnderlyingAttachmentPoint = 1459,
/*
******************************
* See DetachmentPoint(1458). *
******************************
*/
  UnderlyingDetachmentPoint = 1460,
/*
****************************************************************
* Identifies the number of target parties identified in a mass *
* action.                                                      *
****************************************************************
*/
  NoTargetPartyIDs = 1461,
/*
*********************************************************
* PartyID value within an target party repeating group. *
*********************************************************
*/
  TargetPartyID = 1462,
/*
***************************************************************
* PartyIDSource value within an target party repeating group. *
* Same values as PartyIDSource (447)                          *
***************************************************************
*/
  TargetPartyIDSource = 1463,
/*
***********************************************************
* PartyRole value within an target party repeating group. *
* Same values as PartyRole (452)                          *
***********************************************************
*/
  TargetPartyRole = 1464,
/*
***********************************************
* Specifies an identifier for a Security List *
***********************************************
*/
  SecurityListID = 1465,
/*
************************************************************
* Specifies a reference from one Security List to another. *
* Used to support a hierarchy of Security Lists.           *
************************************************************
*/
  SecurityListRefID = 1466,
/*
*******************************************************
* Specifies a description or name of a Security List. *
*******************************************************
*/
  SecurityListDesc = 1467,
/*
*************************************************
* Byte length of encoded (non-ASCII characters) *
* EncodedSecurityListDesc (tbd) field.          *
*************************************************
*/
  EncodedSecurityListDescLen = 1468,
/*
***************************************************************
* Encoded (non-ASCII characters) representation of the        *
* SecurityListDesc (1467) field in the encoded format         *
* specified via the MessageEncoding (347) field. If used, the *
* ASCII (English) representation should also be specified in  *
* the SecurityListDesc field.                                 *
***************************************************************
*/
  EncodedSecurityListDesc = 1469,
/*
**************************************
* Specifies a type of Security List. *
**************************************
*/
  SecurityListType = 1470,
/*
****************************************************************
* Specifies a specific source for a SecurityListType. Relevant *
* when a certain type can be provided from various sources.    *
****************************************************************
*/
  SecurityListTypeSource = 1471,
/*
****************************************
* Unique identifier for a News message *
****************************************
*/
  NewsID = 1472,
/*
****************************
* Category of news mesage. *
****************************
*/
  NewsCategory = 1473,
/*
*************************************************************
* The national language in which the news item is provided. *
*************************************************************
*/
  LanguageCode = 1474,
/*
**********************************
* Number of News reference items *
**********************************
*/
  NoNewsRefIDs = 1475,
/*
***************************************************
* Reference to another News message identified by *
* NewsID(1474).                                   *
***************************************************
*/
  NewsRefID = 1476,
/*
****************************************************************
* Type of reference to another News Message item. Defines if   *
* the referenced news item is a replacement, is in a different *
* language, or is complimentary.                               *
****************************************************************
*/
  NewsRefType = 1477,
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
  StrikePriceDeterminationMethod = 1478,
/*
**************************************************************
* Specifies the boundary condition to be used for the strike *
* price relative to the underlying price at the point of     *
* option exercise.                                           *
**************************************************************
*/
  StrikePriceBoundaryMethod = 1479,
/*
*************************************************************
* Used in combination with StrikePriceBoundaryMethod to     *
* specify the percentage of the strike price in relation to *
* the  underlying price. The percentage is generally 100 or *
* greater for puts and 100 or less for calls.               *
*************************************************************
*/
  StrikePriceBoundaryPrecision = 1480,
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
  UnderlyingPriceDeterminationMethod = 1481,
/*
*********************************************************
* Indicates the type of payout that will result from an *
* in-the-money option.                                  *
*********************************************************
*/
  OptPayoutType = 1482,
/*
****************************************
* Number of complex event occurrences. *
****************************************
*/
  NoComplexEvents = 1483,
/*
*****************************************
* Identifies the type of complex event. *
*****************************************
*/
  ComplexEventType = 1484,
/*
****************************************************************
* Cash amount indicating the pay out associated with an event. *
* For binary options this is a fixed amount.                   *
****************************************************************
*/
  ComplexOptPayoutAmount = 1485,
/*
****************************************************************
* Specifies the price at which the complex event takes effect. *
* Impact of the event price is determined by the               *
* ComplexEventType(1484).                                      *
****************************************************************
*/
  ComplexEventPrice = 1486,
/*
*************************************************************
* Specifies the boundary condition to be used for the event *
* price relative to the underlying price at the point the   *
* complex event outcome takes effect as determined by the   *
* ComplexEventPriceTimeType.                                *
*************************************************************
*/
  ComplexEventPriceBoundaryMethod = 1487,
/*
***************************************************************
* Used in combination with ComplexEventPriceBoundaryMethod to *
* specify the percentage of the strike price in relation to   *
* the  underlying price. The percentage is generally 100 or   *
* greater for puts and 100 or less for calls.                 *
***************************************************************
*/
  ComplexEventPriceBoundaryPrecision = 1488,
/*
***************************************************************
* Specifies when the complex event outcome takes effect. The  *
* outcome of a complex event is a payout or barrier action as *
* specified by the ComplexEventType.                          *
***************************************************************
*/
  ComplexEventPriceTimeType = 1489,
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
  ComplexEventCondition = 1490,
/*
****************************************************************
* Number of complex event date occurrences for a given complex *
* event.                                                       *
****************************************************************
*/
  NoComplexEventDates = 1491,
/*
****************************************************************
* Specifies the start date of the date range on which a        *
* complex event is effective. The start date will be set equal *
* to the end date for single day events such as Bermuda        *
* options                                                      *
* ComplexEventStartDate must always be less than or equal to   *
* ComplexEventEndDate.                                         *
****************************************************************
*/
  ComplexEventStartDate = 1492,
/*
***************************************************************
* Specifies the end date of the date range on which a complex *
* event is effective. The start date will be set equal to the *
* end date for single day events such as Bermuda options      *
* ComplexEventEndDate must always be greater than or equal to *
* ComplexEventStartDate.                                      *
***************************************************************
*/
  ComplexEventEndDate = 1493,
/*
****************************************************************
* Number of complex event time occurrences for a given complex *
* event date                                                   *
* The default in case of an absence of time fields is          *
* 00:00:00-23:59:59.                                           *
****************************************************************
*/
  NoComplexEventTimes = 1494,
/*
**************************************************************
* Specifies the start time of the time range on which a      *
* complex event date is effective.                           *
* ComplexEventStartTime must always be less than or equal to *
* ComplexEventEndTime.                                       *
**************************************************************
*/
  ComplexEventStartTime = 1495,
/*
***************************************************************
* Specifies the end time of the time range on which a complex *
* event date is effective.                                    *
* ComplexEventEndTime must always be greater than or equal to *
* ComplexEventStartTime.                                      *
***************************************************************
*/
  ComplexEventEndTime = 1496,
/*
****************************************************************
* Unique identifier for the stream assignment request provided *
* by the requester.                                            *
****************************************************************
*/
  StreamAsgnReqID = 1497,
/*
**************************************
* Type of stream assignment request. *
**************************************
*/
  StreamAsgnReqType = 1498,
/*
**********************************
* Number of assignment requests. *
**********************************
*/
  NoAsgnReqs = 1499,
/*
***********************************************
* The identifier or name of the price stream. *
***********************************************
*/
  MDStreamID = 1500,
/*
**************************************************************
* Unique identifier of the stream assignment report provided *
* by the respondent.                                         *
**************************************************************
*/
  StreamAsgnRptID = 1501,
/*
*****************************************************
* Reason code for stream assignment request reject. *
*****************************************************
*/
  StreamAsgnRejReason = 1502,
/*
****************************
* Type of acknowledgement. *
****************************
*/
  StreamAsgnAckType = 1503,
/*
************************
* See TransactTime(60) *
************************
*/
  RelSymTransactTime = 1504,
/*
*******************************************************
* The type of assignment being affected in the Stream *
* Assignment Report.                                  *
*******************************************************
*/
  StreamAsgnType = 1617
}
