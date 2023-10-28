import { IPriceMovementValueGrp } from './price_movement_value_grp'
import { IClearingAccountTypeGrp } from './clearing_account_type_grp'

export interface IPriceMovementGrpNoPriceMovements {
  PriceMovementValueGrp?: IPriceMovementValueGrp// [1] NoPriceMovementValues.1920, PriceMovementValue.1921 .. PriceMovementType.1923
  ClearingAccountTypeGrp?: IClearingAccountTypeGrp// [2] NoClearingAccountTypes.1918, ClearingAccountType.1816
}
