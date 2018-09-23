import { IPriceMovementValueGrp } from './price_movement_value_grp'
import { IClearingAccountTypeGrp } from './clearing_account_type_grp'

export interface IPriceMovementGrp {
  PriceMovementValueGrp?: IPriceMovementValueGrp[]
  ClearingAccountTypeGrp?: IClearingAccountTypeGrp[]
}
