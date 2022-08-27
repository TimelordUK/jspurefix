/*
****************************************************************
* The PositionAmountData component block is used to report     *
* netted amounts associated with position quantities. In the   *
* listed derivatives market the amount is generally expressing *
* a type of futures variation or option premium. In the        *
* equities market this may be the net pay or collect on a      *
* given position.                                              *
****************************************************************
*/
export interface IPositionAmountData {
  PosAmtType?: string// [1] 707 (String)
  PosAmt?: number// [2] 708 (Float)
}
