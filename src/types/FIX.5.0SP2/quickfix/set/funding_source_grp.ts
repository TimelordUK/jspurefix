import { IFundingSourceGrpNoFundingSources } from './funding_source_grp_no_funding_sources'

export interface IFundingSourceGrp {
  NoFundingSources?: IFundingSourceGrpNoFundingSources[]// [1] FundingSource.2846, FundingSourceMarketValue.2848 .. FundingSourceCurrencyCodeSource.2954
}
