import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ITrdSessLstGrp } from './set/trd_sess_lst_grp'
import { IStandardTrailer } from './set/standard_trailer'

export interface ITradingSessionListUpdateReport {
  StandardHeader: IStandardHeader// [1] BeginString.8, BodyLength.9 .. HopRefID.630
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TradSesReqID?: string// [3] 335 (String)
  TrdSessLstGrp?: ITrdSessLstGrp// [4] NoTradingSessions.386, TradingSessionID.336 .. EncodedText.355
  StandardTrailer: IStandardTrailer// [5] SignatureLength.93, Signature.89, CheckSum.10
}
