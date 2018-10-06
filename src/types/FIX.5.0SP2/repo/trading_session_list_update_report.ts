import { IStandardHeader } from './set/standard_header'
import { IApplicationSequenceControl } from './set/application_sequence_control'
import { ITrdSessLstGrp } from './set/trd_sess_lst_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
**********************************************************
* The Trading Session List Update Report is used by      *
* marketplaces to provide intra-day updates of trading   *
* sessions when there are changes to one or more trading *
* sessions.                                              *
**********************************************************
*/
export interface ITradingSessionListUpdateReport {
  StandardHeader: IStandardHeader
  ApplicationSequenceControl?: IApplicationSequenceControl
  TradSesReqID?: string// 335
  TrdSessLstGrp: ITrdSessLstGrp[]
  StandardTrailer: IStandardTrailer
}
