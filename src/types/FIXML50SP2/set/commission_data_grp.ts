export interface ICommissionDataGrp {
  CommissionAmount?: number// [1] 2640 (Float)
  CommissionAmountType?: number// [1] 2641 (Int)
  CommissionBasis?: string// [1] 2642 (String)
  CommissionCurrency?: string// [1] 2643 (String)
  CommissionUnitOfMeasure?: string// [1] 2644 (String)
  CommissionUnitOfMeasureCurrency?: string// [1] 2645 (String)
  CommissionRate?: number// [1] 2646 (Float)
  CommissionSharedIndicator?: boolean// [1] 2647 (Boolean)
  CommissionAmountShared?: number// [1] 2648 (Float)
  CommissionLegRefID?: string// [1] 2649 (String)
  CommissionDesc?: string// [1] 2650 (String)
  EncodedCommissionDescLen?: number// [1] 2651 (Length)
  EncodedCommissionDesc?: Buffer// [1] 2652 (RawData)
}
