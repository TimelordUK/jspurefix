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
  MDStatisticRptID: string// 2453
  TransferID: string// 2437
  TransferTransType: number// 2439
  TransferReportType: number// 2444
  TransferStatus: number// 2442
  CollRptRejectReason?: number// 2487
  TransferScope?: number// 2441
  ClearingBusinessDate?: Date// 715
  TradeDate?: Date// 75
  RelSymTransactTime?: Date// 1504
  SideClearingTradePrice?: number// 1597
  UnderlyingReturnRatePriceCurrency?: string// 43067
  UnderlyingReturnRatePriceType?: number// 43068
  RejectText?: string// 1328
  EncodedRejectTextLen?: string// 1664
  EncodedRejectText?: Buffer// 1665
  UnderlyingProvisionText?: string// 42170
  EncodedUnderlyingProvisionTextLen?: string// 42171
  EncodedUnderlyingProvisionText?: Buffer// 42172
  StandardHeader?: IStandardHeader
  Parties?: IParties[]
  TargetParties?: ITargetParties[]
  Instrument?: IInstrument
  UndInstrmtGrp?: IUndInstrmtGrp[]
  PositionQty?: IPositionQty[]
  PositionAmountData?: IPositionAmountData[]
}
