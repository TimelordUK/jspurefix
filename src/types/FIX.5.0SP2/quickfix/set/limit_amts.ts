import { ILimitAmtsNoLimitAmts } from './limit_amts_no_limit_amts'

export interface ILimitAmts {
  NoLimitAmts?: ILimitAmtsNoLimitAmts[]// [1] LimitAmtType.1631, LastLimitAmt.1632 .. LimitRole.2396
}
