import { IStandardHeader } from './set/standard_header'
import { ICommissionData } from './set/commission_data'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Bid Response message can be used in one of two ways     *
* depending on which market conventions are being followed.   *
*                                                             *
* In the "Non disclosed" convention the Bid Response message  *
* can be used to supply a bid based on the sector, country,   *
* index and liquidity information contained within the        *
* corresponding bid request message. See "Program/Basket/List *
* Trading"  for an example.                                   *
*                                                             *
* In the "Disclosed" convention the Bid Response message can  *
* be used to supply bids based on the List Order Detail       *
* messages sent in advance of the corresponding Bid Request   *
* message.                                                    *
***************************************************************
*/
export interface IBidResponse {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. OnBehalfOfSendingTime.370
  BidID?: string// [2] 390 (String)
  ClientBidID?: string// [3] 391 (String)
  NoBidComponents: number// [4] 420 (Int)
  CommissionData: ICommissionData// [5] Commission.12, CommType.13
  ListID?: string// [6] 66 (String)
  Country?: string// [7] 421 (String)
  Side?: string// [8] 54 (String)
  Price?: number// [9] 44 (Float)
  PriceType?: number// [10] 423 (Int)
  FairValue?: number// [11] 406 (Float)
  NetGrossInd?: number// [12] 430 (Int)
  SettlmntTyp?: string// [13] 63 (String)
  FutSettDate?: Date// [14] 64 (LocalDate)
  TradingSessionID?: string// [15] 336 (String)
  Text?: string// [16] 58 (String)
  EncodedTextLen?: number// [17] 354 (Int)
  EncodedText?: Buffer// [18] 355 (RawData)
  StandardTrailer: IStandardTrailer// [19] SignatureLength.93, Signature.89, CheckSum.10
}
