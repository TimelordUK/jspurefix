import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ITrdSessLstGrp } from './set/trd_sess_lst_grp'

/*
******************************************************
* TradingSessionList can be found in Volume 3 of the *
*                                                    *
* specification                                      *
******************************************************
*/
export interface ITradingSessionList {
  TradSesReqID?: string// [2] 335 (String)
  StandardHeader?: IStandardHeader// [1] MsgTyp.35, ApplVerID.1128 .. MsgEncd.347
  ApplicationSequenceControl?: IApplicationSequenceControl// [2] ApplID.1180, ApplSeqNum.1181 .. ApplResendFlag.1352
  TrdSessLstGrp?: ITrdSessLstGrp[]// [3] SesID.336, SesSub.625 .. EncTxt.355
}
