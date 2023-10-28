import { IExecutionAggregationGrpNoExecs } from './execution_aggregation_grp_no_execs'

export interface IExecutionAggregationGrp {
  NoExecs?: IExecutionAggregationGrpNoExecs[]// [1] LastQty.32, ExecID.17 .. LastPx.31
}
