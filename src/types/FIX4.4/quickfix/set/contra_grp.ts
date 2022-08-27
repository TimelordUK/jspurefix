import { IContraGrpNoContraBrokers } from './contra_grp_no_contra_brokers'

export interface IContraGrp {
  NoContraBrokers?: IContraGrpNoContraBrokers[]// [1] ContraBroker.375, ContraTrader.337 .. ContraLegRefID.655
}
