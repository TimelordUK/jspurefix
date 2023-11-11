import { IContAmtGrpNoContAmts } from './cont_amt_grp_no_cont_amts'

export interface IContAmtGrp {
  NoContAmts?: IContAmtGrpNoContAmts[]// [1] ContAmtType.519, ContAmtValue.520, ContAmtCurr.521
}
