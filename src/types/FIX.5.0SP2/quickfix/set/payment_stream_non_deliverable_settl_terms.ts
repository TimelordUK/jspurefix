export interface IPaymentStreamNonDeliverableSettlTerms {
  PaymentStreamNonDeliverableRefCurrency?: string// [1] 40817 (String)
  PaymentStreamNonDeliverableFixingDatesBusinessDayConvention?: number// [2] 40818 (Int)
  PaymentStreamNonDeliverableFixingDatesRelativeTo?: number// [3] 40820 (Int)
  PaymentStreamNonDeliverableFixingDatesOffsetPeriod?: number// [4] 40821 (Int)
  PaymentStreamNonDeliverableFixingDatesOffsetUnit?: string// [5] 40822 (String)
  PaymentStreamNonDeliverableFixingDatesOffsetDayType?: number// [6] 40823 (Int)
}
