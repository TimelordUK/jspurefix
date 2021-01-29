import { IStandardHeader } from './set/standard_header'
import { IStandardTrailer } from './set/standard_trailer'

/*
***************************************************************
* The logout message initiates or confirms the termination of *
* a FIX session. Disconnection without the exchange of logout *
* messages should be interpreted as an abnormal condition.    *
***************************************************************
*/
export interface ILogout {
  StandardHeader: IStandardHeader
  Text?: string// 58
  StandardTrailer: IStandardTrailer
}
