import { IStandardHeader } from './set/standard_header'
import { ISettlInstGrp } from './set/settl_inst_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ISettlementInstructions {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  SettlInstMsgID: string// [2] 777 (String)
  SettlInstReqID?: string// [3] 791 (String)
  SettlInstMode: string// [4] 160 (String)
  SettlInstReqRejCode?: number// [5] 792 (Int)
  Text?: string// [6] 58 (String)
  EncodedTextLen?: number// [7] 354 (Length)
  EncodedText?: Buffer// [8] 355 (RawData)
  ClOrdID?: string// [9] 11 (String)
  TransactTime: Date// [10] 60 (UtcTimestamp)
  SettlInstGrp?: ISettlInstGrp// [11] NoSettlInst.778, SettlInstID.162 .. PaymentRemitterID.505
  StandardTrailer: IStandardTrailer// [12] SignatureLength.93, Signature.89, CheckSum.10
}
