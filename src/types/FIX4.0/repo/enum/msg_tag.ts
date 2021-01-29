export enum MsgTag {
/*
**************************************************************
* Account mnemonic as agreed between broker and institution. *
**************************************************************
*/
  Account = 1,
/*
**********************************************
* Unique identifier of advertisement message *
**********************************************
*/
  AdvId = 2,
/*
*****************************************************
* Reference identifier used with CANCEL and REPLACE *
* transaction types.                                *
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
**********************************************************
* Message sequence number of first record in range to be *
* resent                                                 *
**********************************************************
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
* Three byte, simple checksum (see Appendix B for              *
* description). ALWAYS LAST FIELD IN RECORD; i.e. serves, with *
* the trailing <SOH>, as the end-of-record delimiter. Always   *
* defined as three characters. (Always unencrypted)            *
****************************************************************
*/
  CheckSum = 10,
/*
**************************************************************
* Unique identifier for Order as assigned by institution.    *
* Uniqueness must be guaranteed within a single trading day. *
* Firms which electronically submit multi-day orders should  *
* consider embedding a date within the ClOrderID field to    *
* assure uniqueness across days.                             *
**************************************************************
*/
  ClOrdID = 11,
/*
**************
* Commission *
**************
*/
  Commission = 12,
/*
*******************
* Commission type *
*******************
*/
  CommType = 13,
/*
**********************************
* Total number of shares filled. *
* Valid values:                  *
* (0 - 1000000000)               *
**********************************
*/
  CumQty = 14,
/*
****************************************************************
* Identifies currency used for price, Absence of this field in *
* a message is interpreted as US dollars. See Appendix A for   *
* information on obtaining valid values.                       *
****************************************************************
*/
  Currency = 15,
/*
************************************************************
* Message sequence number of last record in range to be    *
* resent. If request is for a single record BeginSeqNo =   *
* EndSeqNo. If request is for all messages subsequent to a *
* particular message, EndSeqNo = "999999"                  *
************************************************************
*/
  EndSeqNo = 16,
/*
****************************************************************
* Unique identifier of execution message as assigned by broker *
* (will be 0 (zero) for ExecTransType=3 (Status)).             *
* Uniqueness must be guaranteed within a single trading day.   *
* Firms which accept multi-day orders should consider          *
* embedding a date within the ExecID field to assure           *
* uniqueness across days.                                      *
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
**********************************************************
* Identifies class of alternative SecurityID             *
* 100+ are reserved for private security identifications *
**********************************************************
*/
  IDSource = 22,
/*
*************************************
* Unique identifier of IOI message. *
*************************************
*/
  IOIid = 23,
/*
****************************************************************
* Indicates if, and on which other services, the indication    *
* has been advertised. Each character represents an additional *
* service (e.g. if on Bridge and Autex, field = BA, if only on *
* Autex, field = A)                                            *
****************************************************************
*/
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
* Valid values:                     *
* See Appendix C                    *
*************************************
*/
  LastMkt = 30,
/*
****************************************************************
* Price of last fill. Field not required for ExecTransType = 3 *
* (Status)                                                     *
****************************************************************
*/
  LastPx = 31,
/*
**********************************************************
* Quantity of shares bought/sold on this fill. Field not *
* required for ExecTransType = 3 (Status)                *
**********************************************************
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
* indicates that the message format is privately defined       *
* between the sender and receiver.                             *
****************************************************************
*/
  MsgType = 35,
/*
***********************
* New sequence number *
* Valid values:       *
* 0 - 999999          *
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
****************************
* Number of shares ordered *
****************************
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
*************************************************************
* Original order id as assigned by the institution, used to *
* identify original order in cancel and cancel/replace      *
* requests.                                                 *
*************************************************************
*/
  OrigClOrdID = 41,
/*
*********************************************************
* Time of message origination (always expressed in GMT) *
*********************************************************
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
********************************************************
* Indicates order type upon which exchange Rule 80A is *
* applied.                                             *
********************************************************
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
**********************************************************
* Time of message transmission (always expressed in GMT) *
**********************************************************
*/
  SendingTime = 52,
/*
********************
* Number of shares *
********************
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
***************************
* Free format text string *
***************************
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
*******************************************************
* Time of execution/order creation (expressed in GMT) *
*******************************************************
*/
  TransactTime = 60,
/*
****************
* Urgency flag *
****************
*/
  Urgency = 61,
/*
***********************************************************
* Indicates expiration time of indication message (always *
* expressed in GMT)                                       *
***********************************************************
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
*************************************************************
* Specific date of trade settlement in YYYYMMDD format.     *
* Required when SettlmntTyp = 6 (Future) or SettlmntTyp = 8 *
* (Sellers Option). (expressed in local time at place of    *
* settlement)                                               *
*************************************************************
*/
  FutSettDate = 64,
/*
**************************************************************
* Additional information about the security (e.g. preferred, *
* warrants, etc.). Absence of this field indicates common.   *
* Valid values:                                              *
* As defined in the NYSE Stock and bond Symbol Directory and *
* in the AMEX Fitch Directory                                *
**************************************************************
*/
  SymbolSfx = 65,
/*
****************************************************************
* Customer assigned listUnique identifier for list as assigned *
* by institution, used to associate multiple individual        *
* orders. Uniqueness must be guaranteed within a single        *
* trading day. Firms which generate multi-day orders should    *
* consider embedding a date within the ListID field to assure  *
* uniqueness across days.                                      *
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
*********************************************************
* Total number of orders within list (i.e. ListSeqNo of *
* ListNoOrds, e.g. 2 of 25, 3 of 25, . . . )            *
*********************************************************
*/
  ListNoOrds = 68,
/*
*********************************************************
* Free format text message containing list handling and *
* execution instructions.                               *
*********************************************************
*/
  ListExecInst = 69,
/*
********************************************
* Unique identifier for allocation record. *
********************************************
*/
  AllocID = 70,
/*
******************************************
* Identifies allocation transaction type *
******************************************
*/
  AllocTransType = 71,
/*
***********************************************************
* Reference identifier to be used with Replace and Cancel *
* AllocTransType records.                                 *
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
  AvgPrxPrecision = 74,
/*
****************************************************************
* Indicates date of trade referenced in this record in         *
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
*********************
* For options only. *
*********************
*/
  OpenClose = 77,
/*
************************************************************
* Number of AllocAccount/AllocShares/ProcessCode instances *
* included in allocation record.                           *
************************************************************
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
************************************************************
*/
  AllocShares = 80,
/*
***************************************************************
* Processing code for sub-account. Absence of this field in   *
* AllocAccount / AllocShares / ProcessCode instance indicates *
* regular trade.                                              *
***************************************************************
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
***************************************************
*/
  CxlQty = 84,
/*
***************************************************
* Number of delivery instruction fields to follow *
***************************************************
*/
  NoDlvyInst = 85,
/*
************************************************************
* Free format text field to indicate delivery instructions *
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
**********************************
* Broker to receive trade credit *
**********************************
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
*********************
* Price per share   *
* Valid values:     *
* 0 - 99999999.9999 *
*********************
*/
  StopPx = 99,
/*
**************************************************************
* Execution destination as defined by institution when order *
* is entered.                                                *
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
*****************************************************
* Firm identifier used in third party-transactions. *
*****************************************************
*/
  ClientID = 109,
/*
************************************************
* Minimum quantity of an order to be executed. *
************************************************
*/
  MinQty = 110,
/*
***************************************************************
* Maximum number of shares within an order to be shown on the *
* exchange floor at any given time.                           *
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
* conjuction with a short sell order.                    *
**********************************************************
*/
  LocateReqd = 114,
/*
****************************************************************
* Assigned value used to identify firm originating message     *
* if the message was delivered by a third party i.e. the third *
* party firm identifier would be delivered in the SenderCompID *
* field and the firm originating the message in this field.    *
****************************************************************
*/
  OnBehalfOfCompID = 115,
/*
****************************************************************
* Assigned value used to identify specific message originator  *
* (desk, trader, etc.) if the message was delivered by a third *
* party                                                        *
****************************************************************
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
* GMT) when transmitting orders as the result of a resend    *
* request.                                                   *
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
********************************************
* No of execution record groups to follow. *
********************************************
*/
  NoExecs = 124,
/*
*********************************************************
* Defines if cancel is for part or all of the remaining *
* quantity of an order.                                 *
*********************************************************
*/
  CxlType = 125,
/*
***********************************************************
* Time/Date of order expiration (always expressed in GMT) *
***********************************************************
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
***************************************************************
* Assigned value used to identify specific message recipient  *
* (desk, trader, etc.) if the message is delivered by a third *
* party                                                       *
***************************************************************
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
*******************
* Quantity of bid *
*******************
*/
  BidSize = 134,
/*
*********************
* Quantity of offer *
*********************
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
  PrevClosePx = 140
}
