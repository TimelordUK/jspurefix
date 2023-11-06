import { IPriceMovementValueGrp } from './price_movement_value_grp'
import { IClearingAccountTypeGrp } from './clearing_account_type_grp'

export interface IPriceMovementGrp {
  PriceMovementValueGrp?: IPriceMovementValueGrp[]// [1] Valu.1921, Pnt.1922, Typ.1923
  ClearingAccountTypeGrp?: IClearingAccountTypeGrp[]// [2] ClrAcctTyp.1816
}
