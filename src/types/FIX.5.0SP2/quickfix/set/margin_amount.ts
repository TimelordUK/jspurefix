import { IMarginAmountNoMarginAmt } from './margin_amount_no_margin_amt'

export interface IMarginAmount {
  NoMarginAmt?: IMarginAmountNoMarginAmt[]// [1] MarginAmt.1645, MarginAmtType.1644 .. MarginDirection.2851
}
