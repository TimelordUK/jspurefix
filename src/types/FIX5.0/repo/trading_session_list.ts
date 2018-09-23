import { IStandardHeader } from './set/standard_header'
import { ITrdSessLstGrp } from './set/trd_sess_lst_grp'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The Trading Session List message is sent as a response to a *
* Trading Session List Request. The Trading Session List      *
* should contain the characteristics of the trading session   *
* and the current state of the trading session.               *
***************************************************************
*/
export interface ITradingSessionList {
  StandardHeader: IStandardHeader
  TradSesReqID?: string// 335
  TrdSessLstGrp: ITrdSessLstGrp[]
  StandardTrailer: IStandardTrailer
}
