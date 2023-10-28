import { IPayCollectGrpNoPayCollects } from './pay_collect_grp_no_pay_collects'

export interface IPayCollectGrp {
  NoPayCollects?: IPayCollectGrpNoPayCollects[]// [1] PayCollectType.1708, PayCollectCurrency.1709 .. PayCollectMarketID.1713
}
