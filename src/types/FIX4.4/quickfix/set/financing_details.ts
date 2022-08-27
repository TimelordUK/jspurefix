export interface IFinancingDetails {
  AgreementDesc?: string// [1] 913 (String)
  AgreementID?: string// [2] 914 (String)
  AgreementDate?: Date// [3] 915 (LocalDate)
  AgreementCurrency?: string// [4] 918 (String)
  TerminationType?: number// [5] 788 (Int)
  StartDate?: Date// [6] 916 (LocalDate)
  EndDate?: Date// [7] 917 (LocalDate)
  DeliveryType?: number// [8] 919 (Int)
  MarginRatio?: number// [9] 898 (Float)
}
