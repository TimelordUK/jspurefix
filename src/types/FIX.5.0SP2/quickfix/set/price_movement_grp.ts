import { IPriceMovementGrpNoPriceMovements } from './price_movement_grp_no_price_movements'

export interface IPriceMovementGrp {
  NoPriceMovements?: IPriceMovementGrpNoPriceMovements[]// [1] PriceMovementValueGrp.1920, PriceMovementValue.1921 .. ClearingAccountType.1816
}
