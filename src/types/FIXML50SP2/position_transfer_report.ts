import { IStandardHeader } from './set/standard_header'
import { IParties } from './set/parties'
import { ITargetParties } from './set/target_parties'
import { IInstrument } from './set/instrument'
import { IUndInstrmtGrp } from './set/und_instrmt_grp'
import { IPositionQty } from './set/position_qty'
import { IPositionAmountData } from './set/position_amount_data'

/*
**********************************************************
* PositionTransferReport can be found in Volume 5 of the *
*                                                        *
* specification                                          *
**********************************************************
*/
export interface IPositionTransferReport {
  TransferInstructionID?: string// 2436
  TransferReportID: string// 2438
  TransferID: string// 2437
  TransferTransType: number// 2439
  TransferReportType: number// 2444
  TransferStatus: number// 2442
  CollRptRejectReason?: number// 2487
  TransferScope?: number// 2441
  ClearingBusinessDate?: Date// 715
  TradeDate?: Date// 75
  TransactTime?: Date// 60
  ClearingTradePrice?: number// 1596
  Currency?: string// 15
  PriceType?: number// 423
  RejectText?: string// 1328
  EncodedRejectTextLen?: number// 1664
  EncodedRejectText?: Buffer// 1665
  Text?: string// 58
  EncodedTextLen?: number// 354
  EncodedText?: Buffer// 355
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
}
